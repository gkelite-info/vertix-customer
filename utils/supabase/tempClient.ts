/* eslint-disable @typescript-eslint/no-explicit-any */
// NEW: isolated temporary supabase client that stores session in sessionStorage (so it won't overwrite normal user's localStorage session)

import { createBrowserClient } from "@supabase/ssr"

/**
 * Custom storage wrapper for sessionStorage with prefix to avoid collisions.
 * sessionStorage is used so the temporary session is tab-scoped and cleared on tab close,
 * but persists across reloads in the same tab (which is desirable for temp access).
 */
const PREFIX = "sb-temp-"

const sessionStorageWrapper = {
  getItem: (key: string) => {
    try {
      return sessionStorage.getItem(PREFIX + key) // prefixed keys
    } catch (e) {
      console.error("sessionStorage getItem failed", e)
      return null
    }
  },
  setItem: (key: string, value: string) => {
    try {
      sessionStorage.setItem(PREFIX + key, value)
    } catch (e) {
      console.error("sessionStorage setItem failed", e)
    }
  },
  removeItem: (key: string) => {
    try {
      sessionStorage.removeItem(PREFIX + key)
    } catch (e) {
      console.error("sessionStorage removeItem failed", e)
    }
  },
}

export const supabaseTemp = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  {
    auth: {
      // use the sessionStorage wrapper so this client does NOT write to localStorage
      storage: sessionStorageWrapper as any,
      persistSession: true, // persist to sessionStorage, not localStorage
      autoRefreshToken: false,
      detectSessionInUrl: false,
    },
  }
)
