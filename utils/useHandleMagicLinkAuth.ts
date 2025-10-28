/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useEffect, useState } from "react"
import { supabase } from "./supabase/client"

export const useHandleMagicLinkAuth = () => {
  const [isSessionReady, setIsSessionReady] = useState(false)
  const [session, setSession] = useState<any>(null)

  useEffect(() => {
    let isMounted = true

    const restoreSession = async () => {
      try {
        const hash = window.location.hash

        if (hash) {
          const params = new URLSearchParams(hash.substring(1))
          const access_token = params.get("access_token")
          const refresh_token = params.get("refresh_token")

          if (access_token && refresh_token) {
            console.log("🔄 Restoring Supabase session from magic link...")
            const { data, error } = await supabase.auth.setSession({
              access_token,
              refresh_token,
            })
            if (error)
              console.error("❌ Error setting Supabase session:", error)
            window.history.replaceState(null, "", window.location.pathname)
            if (isMounted) setSession(data?.session ?? null)
          }
        } else {
          const { data } = await supabase.auth.getSession()
          if (isMounted) setSession(data?.session ?? null)
        }

        if (isMounted) setIsSessionReady(true)
      } catch (err) {
        console.error("❌ Session restore failed:", err)
        if (isMounted) setIsSessionReady(true)
      }
    }

    restoreSession()

    return () => {
      isMounted = false
    }
  }, [])

  return { isSessionReady, session }
}
