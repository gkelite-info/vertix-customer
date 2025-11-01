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