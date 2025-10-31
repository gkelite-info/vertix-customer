/* eslint-disable @typescript-eslint/no-explicit-any */
import { createBrowserClient } from "@supabase/ssr"

const PREFIX = "sb-temp-"

// Custom storage that uses sessionStorage
const tempStorage = {
  getItem: (key: string) => {
    if (typeof window === "undefined") return null
    try {
      return sessionStorage.getItem(PREFIX + key)
    } catch {
      return null
    }
  },
  setItem: (key: string, value: string) => {
    if (typeof window === "undefined") return
    try {
      sessionStorage.setItem(PREFIX + key, value)
    } catch (e) {
      console.error("tempStorage.setItem error:", e)
    }
  },
  removeItem: (key: string) => {
    if (typeof window === "undefined") return
    try {
      sessionStorage.removeItem(PREFIX + key)
    } catch (e) {
      console.error("tempStorage.removeItem error:", e)
    }
  },
}

export const supabaseTemp = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  {
    auth: {
      storage: tempStorage as any,
      persistSession: true,
      autoRefreshToken: false, // ✅ No refresh for temp users
      detectSessionInUrl: false,
      storageKey: "sb-temp-auth", // ✅ Different storage key
    },
  }
)
;(async () => {
  try {
    const auth: any = (supabaseTemp as any).auth
    await new Promise((r) => setTimeout(r, 100))
    if (auth._bc) auth._bc.close()

    // Use a unique channel name so signOut/signIn events don't leak
    auth._bc = new BroadcastChannel("supabase-temp-auth")

    // Patch signOut to temporarily mute broadcast events
    const originalSignOut = auth.signOut.bind(auth)
    auth.signOut = async (...args: any[]) => {
      console.log("🧱 Isolated signOut for temp session")
      try {
        const oldPostMessage = auth._bc.postMessage
        auth._bc.postMessage = () => {} // mute
        const result = await originalSignOut(...args)
        auth._bc.postMessage = oldPostMessage
        return result
      } catch (err) {
        console.error("Temp signOut failed:", err)
      }
    }

    console.log("✅ Supabase temp client fully isolated")
  } catch (e) {
    console.warn("Broadcast isolation skipped:", e)
  }
})()
