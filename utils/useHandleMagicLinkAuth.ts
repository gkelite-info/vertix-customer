/* eslint-disable @typescript-eslint/no-explicit-any */
// "use client"

// import { useEffect, useState } from "react"
// import { supabase } from "./supabase/client"

// export function useHandleMagicLinkAuth() {
//   const [isSessionReady, setIsSessionReady] = useState(false)
//   const [session, setSession] = useState<any>(null)

//   useEffect(() => {
//     const restoreSession = async () => {
//       // Check if redirected with magic link hash
//       const hash = window.location.hash
//       if (hash.includes("access_token")) {
//         const params = new URLSearchParams(hash.substring(1))
//         const access_token = params.get("access_token")
//         const refresh_token = params.get("refresh_token")

//         if (access_token && refresh_token) {
//           console.log("🔑 Setting Supabase session from magic link...")
//           const { data, error } = await supabase.auth.setSession({
//             access_token,
//             refresh_token,
//           })
//           if (error) console.error("❌ Error restoring session:", error)
//           else {
//             console.log("✅ Session restored successfully")
//             setSession(data.session)
//             setIsSessionReady(true)
//           }

//           // Clean URL (remove hash)
//           window.history.replaceState(
//             {},
//             "",
//             window.location.pathname + window.location.search
//           )
//           return
//         }
//       }

//       // If no hash, check normal session
//       const { data } = await supabase.auth.getSession()
//       if (data.session) {
//         setSession(data.session)
//       }
//       setIsSessionReady(true)
//     }

//     restoreSession()
//   }, [])

//   return { isSessionReady, session }
// }

// utils/useHandleMagicLinkAuth.ts
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useEffect, useState } from "react"
import { supabase } from "./supabase/client" // main persistent client (unchanged)
import { supabaseTemp } from "./supabase/tempClient" // NEW temp client

export function useHandleMagicLinkAuth() {
  const [isSessionReady, setIsSessionReady] = useState(false)
  const [session, setSession] = useState<any>(null)
  const [isTemporary, setIsTemporary] = useState(false) // CHANGED: indicates if this is a temporary session

  useEffect(() => {
    const restoreSession = async () => {
      // 1) Handle magic link hash, set session on supabaseTemp => isolated session
      const hash = window.location.hash
      if (hash.includes("access_token")) {
        const params = new URLSearchParams(hash.substring(1))
        const access_token = params.get("access_token")
        const refresh_token = params.get("refresh_token")

        if (access_token && refresh_token) {
          console.log("🔑 Setting TEMP Supabase session from magic link...")
          const { data, error } = await supabaseTemp.auth.setSession({
            access_token,
            refresh_token,
          })
          if (error) {
            console.error("❌ Error restoring TEMP session:", error)
          } else {
            console.log("✅ TEMP session restored successfully")
            setSession(data.session)
            setIsTemporary(true)

            // persist a simple flag + expiry to coordinate UI/expiry across tabs
            const expiry = Date.now() + 1 * 60 * 1000 // 1 hour
            localStorage.setItem("temporary_access_flag", "true")
            localStorage.setItem("temporary_access_expiry", expiry.toString())
          }

          // Clean URL hash (remove tokens)
          window.history.replaceState(
            {},
            "",
            window.location.pathname + window.location.search
          )
          setIsSessionReady(true)
          return
        }
      }

      // 2) If no magic link hash, try restore any TEMP session first (sessionStorage)
      try {
        const { data: tempData } = await supabaseTemp.auth.getSession()
        if (tempData?.session) {
          setSession(tempData.session)
          setIsTemporary(true)
          setIsSessionReady(true)
          return
        }
      } catch (err) {
        console.warn("No temporary session found in temp client:", err)
      }

      // 3) Finally, restore the main persistent session (normal customer)
      try {
        const { data } = await supabase.auth.getSession()
        if (data?.session) {
          setSession(data.session)
          setIsTemporary(false)
        } else {
          setSession(null)
          setIsTemporary(false)
        }
      } catch (err) {
        console.error("Error getting main session:", err)
        setSession(null)
      } finally {
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
