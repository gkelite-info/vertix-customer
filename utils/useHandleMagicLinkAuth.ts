"use client"

import { useEffect, useState } from "react"
import { supabase } from "./supabase/client"

export const useHandleMagicLinkAuth = () => {
  const [isSessionReady, setIsSessionReady] = useState(false)

  useEffect(() => {
    const restoreSession = async () => {
      const hash = window.location.hash
      if (!hash) {
        const { data } = await supabase.auth.getSession()
        setIsSessionReady(!!data.session)
        return
      }

      const params = new URLSearchParams(hash.substring(1))
      const access_token = params.get("access_token")
      const refresh_token = params.get("refresh_token")

      if (access_token && refresh_token) {
        console.log("🔄 Restoring Supabase session from magic link...")
        const { error } = await supabase.auth.setSession({
          access_token,
          refresh_token,
        })

        if (error) {
          console.error("❌ Error setting Supabase session:", error)
        } else {
          console.log("✅ Supabase session restored successfully")
          // 🧩 FIX: cleanup URL and refresh the client session state
          window.history.replaceState(null, "", window.location.pathname)
          await supabase.auth.getSession() // force reload session state
        }
      }

      // 🧩 FIX: small delay ensures Supabase internal state settles
      setTimeout(() => setIsSessionReady(true), 300)
    }

    restoreSession()
  }, [])

  return isSessionReady
}
