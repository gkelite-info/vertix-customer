/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

// import { useEffect, useState } from "react"
// import { supabase } from "./supabase/client"
// import { supabaseTemp } from "./supabase/tempClient"

// export function useHandleMagicLinkAuth() {
//   const [isSessionReady, setIsSessionReady] = useState(false)
//   const [session, setSession] = useState<any>(null)
//   const [isTemporary, setIsTemporary] = useState(false)

//   useEffect(() => {
//     const restoreSession = async () => {
//       const hash = window.location.hash

//       // 1️⃣ Handle redirected magic link
//       if (hash.includes("access_token")) {
//         const params = new URLSearchParams(hash.substring(1))
//         const access_token = params.get("access_token")
//         const refresh_token = params.get("refresh_token")

//         if (access_token && refresh_token) {
//           const { data, error } = await supabaseTemp.auth.setSession({
//             access_token,
//             refresh_token,
//           })
//           if (!error) {
//             setSession(data.session)
//             setIsTemporary(true)
//             const expiry = Date.now() + 60 * 60 * 1000 // 1 min for test
//             localStorage.setItem("temporary_access_flag", "true")
//             localStorage.setItem("temporary_access_expiry", expiry.toString())
//             localStorage.setItem("token", access_token)
//           }

//           window.history.replaceState(
//             {},
//             "",
//             window.location.pathname + window.location.search
//           )
//           setIsSessionReady(true)
//           return
//         }
//       }

//       // 2️⃣ Try restore temporary session first
//       const tempFlag = localStorage.getItem("temporary_access_flag") === "true"
//       if (tempFlag) {
//         const { data: tempData } = await supabaseTemp.auth.getSession()
//         if (tempData?.session) {
//           setSession(tempData.session)
//           setIsTemporary(true)
//           setIsSessionReady(true)
//           return
//         }
//       }

//       // 3️⃣ Normal customer session restore only if not temp

//       if (!tempFlag) {
//         const { data } = await supabase.auth.getSession()
//         if (data.session) {
//           setSession(data.session)
//           setIsTemporary(false)
//         }
//         setIsSessionReady(true)
//       }
//     }

//     restoreSession()
//   }, [])

//   return {
//     isSessionReady,
//     session,
//     isTemporary,
//     supabaseTemp,
//     mainClient: supabase,
//   }
// }

//useHandleMagicLinkAuth.ts

import { useEffect, useState } from "react"
import { supabase } from "./supabase/client"
import { supabaseTemp } from "./supabase/tempClient"

export function useHandleMagicLinkAuth() {
  const tempFlag =
    typeof window !== "undefined" &&
    localStorage.getItem("temporary_access_flag") === "true"
  const [isSessionReady, setIsSessionReady] = useState(false)
  const [session, setSession] = useState<any>(null)
  const [isTemporary, setIsTemporary] = useState(tempFlag)

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
            setIsTemporary(true) // ✅ CHANGED: Set temporary flag
            const expiry = Date.now() + 60 * 60 * 1000 // ✅ CHANGED: Fixed to 1 min (was 1 hour)
            localStorage.setItem("temporary_access_flag", "true")
            localStorage.setItem("temporary_access_expiry", expiry.toString())
            localStorage.setItem("token", access_token)

            console.log("✅ Magic link detected - isTemporary set to TRUE") // ✅ ADDED: Debug log
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
      const tempExpiry = localStorage.getItem("temporary_access_expiry")

      // ✅ ADDED: Check if temporary session is expired
      const isExpired = tempExpiry ? Date.now() > parseInt(tempExpiry) : true

      if (tempFlag && !isExpired) {
        // ✅ CHANGED: Added expiry check
        const { data: tempData } = await supabaseTemp.auth.getSession()
        if (tempData?.session) {
          setSession(tempData.session)
          setIsTemporary(true) // ✅ CHANGED: Set temporary flag
          setIsSessionReady(true)
          console.log("✅ Restored temporary session - isTemporary set to TRUE") // ✅ ADDED: Debug log
          return
        }
      } else if (tempFlag && isExpired) {
        // ✅ ADDED: Clean up expired session
        console.log("⚠️ Temporary session expired - cleaning up")
        localStorage.removeItem("temporary_access_flag")
        localStorage.removeItem("temporary_access_expiry")
        localStorage.removeItem("token")
        localStorage.removeItem("sb-wieinzdarxemefrzitog-auth-token")
      }

      // 3️⃣ Normal customer session restore only if not temp
      if (!tempFlag || isExpired) {
        // ✅ CHANGED: Also restore if expired
        const { data } = await supabase.auth.getSession()
        if (data.session) {
          setSession(data.session)
          setIsTemporary(false) // ✅ CHANGED: Explicitly set to false
          console.log("✅ Restored normal session - isTemporary set to FALSE") // ✅ ADDED: Debug log
        }
        setIsSessionReady(true)
      }
    }

    restoreSession()
  }, [])

  // ✅ ADDED: Log when isTemporary changes
  useEffect(() => {
    console.log("🔄 isTemporary state updated:", isTemporary)
  }, [isTemporary])

  return {
    isSessionReady,
    session,
    isTemporary,
    supabaseTemp,
    mainClient: supabase,
  }
}