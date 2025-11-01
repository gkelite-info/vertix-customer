/* eslint-disable @typescript-eslint/no-explicit-any */
import { createBrowserClient } from "@supabase/ssr"

const PREFIX = "sb-temp-"

// ✅ Custom isolated in-memory storage for temp session
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

// 🧩 FIX: Disable BroadcastChannel globally before Supabase initializes
if (typeof window !== "undefined") {
  const originalBC = window.BroadcastChannel
  window.BroadcastChannel = function (name: string) {
    if (name.includes("supabase")) {
      console.log("🧩 Isolated BroadcastChannel blocked:", name)
      return {
        postMessage: () => {},
        addEventListener: () => {},
        removeEventListener: () => {},
        close: () => {},
      } as any
    }
    return new originalBC(name)
  } as any
}

export const supabaseTemp = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  {
    auth: {
      storage: tempStorage as any,
      persistSession: true,
      autoRefreshToken: false,
      detectSessionInUrl: false,
      storageKey: "sb-temp-auth", // ✅ Different key
    },
  }
)

// 🧩 FIX: isolate Supabase internal broadcast + client ID
;(async () => {
  try {
    const auth: any = (supabaseTemp as any).auth
    await new Promise((r) => setTimeout(r, 100))

    // 🧩 Replace broadcast channel with dummy
    if (auth._bc) auth._bc.close()
    auth._bc = {
      postMessage: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      close: () => {},
    }

    // 🧩 Assign a random client ID (so it won’t match user’s)
    auth._clientId = "temp-" + Math.random().toString(36).slice(2)

    // 🧩 Override signOut to ensure no cross-tab event is emitted
    const originalSignOut = auth.signOut.bind(auth)
    auth.signOut = async (...args: any[]) => {
      console.log("🧱 Isolated signOut for TEMP session (no broadcast)")
      try {
        // prevent supabase-js from sending event to other clients
        auth._notifyAllSubscribers = () => {}
        return await originalSignOut(...args)
      } catch (e) {
        console.error("Temp signOut failed:", e)
      }
    }

    // 🧩 Prevent “onAuthStateChange” from triggering global logout events
    const originalNotify = auth._notifyAllSubscribers?.bind(auth)
    auth._notifyAllSubscribers = (event: string, session: any) => {
      if (event === "SIGNED_OUT") {
        console.log("🧩 Suppressed cross-tab SIGNED_OUT broadcast")
        return
      }
      originalNotify?.(event, session)
    }

    console.log("✅ Temporary Supabase client FULLY isolated now")
  } catch (err) {
    console.warn("Temp client isolation skipped:", err)
  }
})()
