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

    // Give Supabase time to initialize
    await new Promise((r) => setTimeout(r, 100))

    // 1️⃣ Close Supabase's built-in broadcast channel
    if (auth._bc) auth._bc.close()

    // 2️⃣ Replace with isolated dummy channel
    auth._bc = {
      postMessage: () => {}, // disable broadcasting
      addEventListener: () => {},
      removeEventListener: () => {},
      close: () => {},
    }

    // 3️⃣ Override signOut to ensure no event leaks
    const originalSignOut = auth.signOut.bind(auth)
    auth.signOut = async (...args: any[]) => {
      try {
        return await originalSignOut(...args)
      } catch (e) {
        console.error("Temp signOut failed:", e)
      }
    }

  } catch (err) {
    console.warn("Temp client isolation skipped:", err)
  }
})()