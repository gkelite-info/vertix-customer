/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { useEffect, useState } from "react"
import { supabase } from "./supabase/client"

export function useHandleMagicLinkAuth() {
  const [isSessionReady, setIsSessionReady] = useState(false)
  const [session, setSession] = useState<any>(null)

  useEffect(() => {
    const handleSession = async () => {
      // 🔹 Check if Supabase added access_token in URL hash
      const { data, error } = await supabase.auth.getSession()
      if (error) console.error("Error getting session:", error)

      if (data.session) {
        setSession(data.session)
        setIsSessionReady(true)
      } else {
        // Wait for Supabase to process magic link
        const { data: listener } = supabase.auth.onAuthStateChange(
          (_event, newSession) => {
            if (newSession) {
              setSession(newSession)
              setIsSessionReady(true)
            }
          }
        )

        return () => listener.subscription.unsubscribe()
      }
    }

    handleSession()
  }, [])

  return { isSessionReady, session }
}
