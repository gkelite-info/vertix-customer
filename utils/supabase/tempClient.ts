/* eslint-disable @typescript-eslint/no-explicit-any */
// tempClient.ts

import { createBrowserClient } from "@supabase/ssr"

const PREFIX = "sb-temp-"

const sessionStorageWrapper = {
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

// 🟢 ADD THIS OPTION: disable broadcast
export const supabaseTemp = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  {
    auth: {
      storage: sessionStorageWrapper as any,
      persistSession: true,
      autoRefreshToken: false,
      detectSessionInUrl: false,
      // 👇 Prevent Supabase from syncing auth changes across tabs or clients
      flowType: "implicit", // stays lightweight, no broadcast
    },
    global: {
      headers: {
        "x-temp-client": "true", // optional marker
      },
    },
  }
)
