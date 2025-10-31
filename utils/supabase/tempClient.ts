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

// 🚨 Disable Supabase broadcast manually
// by monkey-patching the broadcast channel immediately after creation
function disableAuthBroadcast(supabaseClient: any) {
  const auth = supabaseClient.auth as any
  if (auth._bc) {
    try {
      auth._bc.close()
      auth._bc = null
      console.log("🔒 Broadcast channel disabled for temp client.")
    } catch {}
  }
  return supabaseClient
}

export const supabaseTemp = disableAuthBroadcast(
  createBrowserClient(
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
)
