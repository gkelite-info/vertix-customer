/* eslint-disable @typescript-eslint/no-explicit-any */
import { createBrowserClient } from "@supabase/ssr"

// Unique prefix so storage keys never clash with main client
const PREFIX = "sb-temp-"

const isolatedStorage = {
  getItem: (key: string) => {
    try {
      return sessionStorage.getItem(PREFIX + key)
    } catch {
      return null
    }
  },
  setItem: (key: string, value: string) => {
    try {
      sessionStorage.setItem(PREFIX + key, value)
    } catch {}
  },
  removeItem: (key: string) => {
    try {
      sessionStorage.removeItem(PREFIX + key)
    } catch {}
  },
}

export const supabaseTemp = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  {
    auth: {
      storage: isolatedStorage as any,
      persistSession: true,
      autoRefreshToken: false,
      detectSessionInUrl: false,
    },
  }
)

// 🚨 FIX: Completely isolate broadcast channel and storage (run after init)
;(async () => {
  const auth: any = supabaseTemp.auth

  // Wait until auth internals exist
  await new Promise((resolve) => setTimeout(resolve, 100))

  // 1️⃣ Replace the default broadcast channel with a unique name
  try {
    if (auth._bc) {
      auth._bc.close()
    }
    // Use a unique name to stop cross-tab/global sync
    auth._bc = new BroadcastChannel("supabase.temp.auth")
    console.log("🧱 Isolated broadcast channel created for temp client.")
  } catch (e) {
    console.warn("Failed to patch broadcast channel:", e)
  }

  // 2️⃣ Override signOut to prevent triggering normal broadcast
  const originalSignOut = auth.signOut.bind(auth)
  auth.signOut = async (...args: any[]) => {
    console.log("🧱 Isolated signOut called for temp session.")
    try {
      // Temporarily mute broadcast events
      const oldPostMessage = auth._bc.postMessage
      auth._bc.postMessage = () => {}
      const result = await originalSignOut(...args)
      auth._bc.postMessage = oldPostMessage
      return result
    } catch (err) {
      console.error("Temp signOut failed:", err)
    }
  }
})()
