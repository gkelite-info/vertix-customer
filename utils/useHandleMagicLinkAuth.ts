/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useEffect, useState } from "react"
import { supabase } from "./supabase/client"

export function useHandleMagicLinkAuth() {
  const [isSessionReady, setIsSessionReady] = useState(false)
  const [session, setSession] = useState<any>(null)

  useEffect(() => {
    const restoreSession = async () => {
      // Check if redirected with magic link hash
      const hash = window.location.hash
      if (hash.includes("access_token")) {
        const params = new URLSearchParams(hash.substring(1))
        const access_token = params.get("access_token")
        const refresh_token = params.get("refresh_token")

        if (access_token && refresh_token) {
          console.log("🔑 Setting Supabase session from magic link...")
          const { data, error } = await supabase.auth.setSession({
            access_token,
            refresh_token,
          })
          if (error) console.error("❌ Error restoring session:", error)
          else {
            console.log("✅ Session restored successfully")
            setSession(data.session)
            setIsSessionReady(true)
          }

          // Clean URL (remove hash)
          window.history.replaceState(
            {},
            "",
            window.location.pathname + window.location.search
          )
          return
        }
      }

      // If no hash, check normal session
      const { data } = await supabase.auth.getSession()
      if (data.session) {
        setSession(data.session)
      }
      setIsSessionReady(true)
    }

    restoreSession()
  }, [])

  return { isSessionReady, session }
}
