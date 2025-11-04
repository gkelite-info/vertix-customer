/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useEffect, useState } from "react"
import { supabase } from "./supabase/client"
import { supabaseTemp } from "./supabase/tempClient"

export function useHandleMagicLinkAuth() {
  const [isSessionReady, setIsSessionReady] = useState(false)
  const [session, setSession] = useState<any>(null)
  const [isTemporary, setIsTemporary] = useState(false)

  useEffect(() => {
    const restoreSession = async () => {
      const hash = window.location.hash

      // 1️⃣ Handle redirected magic link
      if (hash.includes("access_token")) {
        const params = new URLSearchParams(hash.substring(1))
        const access_token = params.get("access_token")
        const refresh_token = params.get("refresh_token")

        if (access_token && refresh_token) {
          const { data, error } = await supabaseTemp.auth.setSession({
            access_token,
            refresh_token,
          })
          if (!error) {
            setSession(data.session)
            setIsTemporary(true)
            const expiry = Date.now() + 60 * 60 * 1000 // 1 min for test
            localStorage.setItem("temporary_access_flag", "true")
            localStorage.setItem("temporary_access_expiry", expiry.toString())
            localStorage.setItem("token", access_token)
          }

          window.history.replaceState(
            {},
            "",
            window.location.pathname + window.location.search
          )
          setIsSessionReady(true)
          return
        }
      }

      // 2️⃣ Try restore temporary session first
      const tempFlag = localStorage.getItem("temporary_access_flag") === "true"
      if (tempFlag) {
        const { data: tempData } = await supabaseTemp.auth.getSession()
        if (tempData?.session) {
          setSession(tempData.session)
          setIsTemporary(true)
          setIsSessionReady(true)
          return
        }
      }

      // 3️⃣ Normal customer session restore only if not temp

      if (!tempFlag) {
        const { data } = await supabase.auth.getSession()
        if (data.session) {
          setSession(data.session)
          setIsTemporary(false)
        }
        setIsSessionReady(true)
      }
    }


    restoreSession()
  }, [])

  return {
    isSessionReady,
    session,
    isTemporary,
    supabaseTemp,
    mainClient: supabase,
  }
}
