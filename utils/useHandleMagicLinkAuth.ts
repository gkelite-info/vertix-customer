"use client"

import { useEffect, useState } from "react"
import { supabase } from "./supabase/client"

export const useHandleMagicLinkAuth = () => {
  const [isSessionReady, setIsSessionReady] = useState(false)

  useEffect(() => {
    const hash = window.location.hash
    if (!hash) {
      // If no hash, just check if already logged in
      supabase.auth.getSession().then(({ data }) => {
        setIsSessionReady(!!data.session)
      })
      return
    }

    const params = new URLSearchParams(hash.substring(1))
    const access_token = params.get("access_token")
    const refresh_token = params.get("refresh_token")

    if (access_token && refresh_token) {
      supabase.auth
        .setSession({
          access_token,
          refresh_token,
        })
        .then(({ error }) => {
          if (error) {
            console.error("Error setting Supabase session:", error)
          } else {
            console.log("✅ Supabase session restored successfully")
            // Clean up URL hash
            window.history.replaceState(null, "", window.location.pathname)
          }
          setIsSessionReady(true)
        })
    } else {
      setIsSessionReady(true)
    }
  }, [])

  return isSessionReady
}
