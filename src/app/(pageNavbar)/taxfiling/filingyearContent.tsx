"use client"

import { useRouter, useSearchParams } from "next/navigation"
import PageNavbar from "../pageNavbar"
import ManageFilingYear from "../ManageFilingYear/page"
import FileProgressTracker from "../FileProgressTracker/page"
import TaxPreparationGuide from "../(TaxPreparationGuide)/TaxPreparationGuide"
import VertixTaxPage from "../VertixDocUpload/page"
import PaymentTaxSummary from "../PaymentTaxSummary/page"
import MyDocuments from "../MyDocuments/page"
import ReferAFriend from "../ReferAFriend/page"
import Chats from "../Chats/page"
import Feedback from "../feedback/page"
import AuthorizationConsent from "../AuthorizationConsent/page"
import BankingInformationPage from "../BankingInformation/page"
import { useHandleMagicLinkAuth } from "../../../../utils/useHandleMagicLinkAuth"
import { useEffect, useRef } from "react"
//import { getCustomer } from "@/app/api/SupabaseAPI/customer/customerApi"
import { useAuth } from "@/components/AuthContext"
import toast from "react-hot-toast"
import { supabase } from "../../../../utils/supabase/client"

export default function TaxfilingContent() {
  const { isSessionReady, session, isTemporary, supabaseTemp } =
    useHandleMagicLinkAuth()
  console.log("checking is temparary", isTemporary)
  const { setIsAuthenticated } = useAuth()
  const router = useRouter()
  const searchParams = useSearchParams()
  const isLoggingOut = useRef(false)

  // useEffect(() => {
  //   if (!isSessionReady || !session) return
  //   const fetchCustomer = async () => {
  //     try {
  //       const data = await getCustomer()
  //       if (!data) console.warn("No customer data found.")
  //     } catch (err) {
  //       console.error("Failed to fetch customer:", err)
  //     }
  //   }
  //   fetchCustomer()
  // }, [isSessionReady, session])

  // useEffect(() => {
  //   if (!isSessionReady) return
  //   // const isTempUser = localStorage.getItem("temporary_access_flag") === "true"
  //   if (session && !isTemporary) {
  //     setIsAuthenticated(true)
  //     return
  //   }
  //   if (!session && !isTemporary && !isLoggingOut.current) {
  //     isLoggingOut.current = true
  //     setIsAuthenticated(false)
  //     logout()
  //   }
  // }, [isSessionReady, session, isTemporary, setIsAuthenticated, logout])

  // useEffect(() => {
  //   if (!isSessionReady) return

  //   const urlHasTempAccess = searchParams.get("temporary_access") === "true"
  //   const storedTempFlag = localStorage.getItem("temporary_access_flag")
  //   const now = Date.now()

  //   if (storedTempFlag === "true" && !isTemporary) {
  //     setIsAuthenticated(true)
  //   }

  //   if (urlHasTempAccess && !storedTempFlag) {
  //     const expiry = now + 1 * 60 * 1000
  //     localStorage.setItem("temporary_access_flag", "true")
  //     localStorage.setItem("temporary_access_expiry", expiry.toString())
  //     setIsAuthenticated(true)
  //     console.log("Temporary 1-hour access started")

  //     const params = new URLSearchParams(searchParams.toString())
  //     params.delete("temporary_access")
  //     //router.replace(`?${params.toString()}`)
  //     const handleTempReload = async () => {
  //       router.replace(`?${params.toString()}`)
  //       await new Promise((resolve) => setTimeout(resolve, 300)) // small delay
  //       if (!sessionStorage.getItem("tempHardRefreshed")) {
  //         sessionStorage.setItem("tempHardRefreshed", "true")
  //         window.location.reload()
  //       }
  //     }

  //     handleTempReload()
  //   }

  //   const checkExpiry = async () => {
  //     const isTemp = localStorage.getItem("temporary_access_flag") === "true"
  //     const expiryTime = localStorage.getItem("temporary_access_expiry")
  //     if (isTemp && expiryTime && now > Number(expiryTime)) {
  //       if (isLoggingOut.current) return
  //       isLoggingOut.current = true
  //       console.log("Temporary access expired — logging out...")
  //       try {
  //         await supabaseTemp.auth.signOut().catch(() => {})
  //         localStorage.removeItem("temporary_access_flag")
  //         localStorage.removeItem("temporary_access_expiry")
  //         localStorage.removeItem("selectedYear")
  //         const { data } = await supabase.auth.getSession()
  //         if (data?.session) {
  //           console.log("Normal customer still logged in, no redirect.")
  //           toast.success("Temporary access expired.")
  //           return
  //         }
  //         setIsAuthenticated(false)
  //         toast.success("Temporary access expired. You have been logged out.")
  //       } catch (err) {
  //         console.error("Error during logout on expiry:", err)
  //       } finally {
  //         router.replace("/login")
  //       }
  //     }
  //   }

  //   checkExpiry()
  //   const interval = setInterval(checkExpiry, 60000)
  //   return () => clearInterval(interval)
  // }, [
  //   isSessionReady,
  //   session,
  //   router,
  //   searchParams,
  //   setIsAuthenticated,
  //   supabaseTemp,
  //   isTemporary,
  // ])

  useEffect(() => {
    if (!isSessionReady) return

    const urlHasTempAccess = searchParams.get("temporary_access") === "true"
    const storedTempFlag = localStorage.getItem("temporary_access_flag")
    const now = Date.now()

    // ✅ Mark temp access if present
    if (urlHasTempAccess && !storedTempFlag) {
      const expiry = now + 1 * 60 * 1000 // 1 min for test
      localStorage.setItem("temporary_access_flag", "true")
      localStorage.setItem("temporary_access_expiry", expiry.toString())
      setIsAuthenticated(true)
      console.log("Temporary access initialized")
    }

    // ✅ If we’re in temp mode and haven’t refreshed once, do a hard reload
    const shouldReload =
      localStorage.getItem("temporary_access_flag") === "true" &&
      !sessionStorage.getItem("tempHardRefreshed")

    if (shouldReload) {
      console.log("🔄 Performing hard refresh for temp access")
      sessionStorage.setItem("tempHardRefreshed", "true")
      // Small delay to ensure the session is stored before reload
      setTimeout(() => window.location.reload(), 300)
    }

    // ✅ Expiry check (unchanged)
    const checkExpiry = async () => {
      const isTemp = localStorage.getItem("temporary_access_flag") === "true"
      const expiryTime = localStorage.getItem("temporary_access_expiry")
      if (isTemp && expiryTime && now > Number(expiryTime)) {
        if (isLoggingOut.current) return
        isLoggingOut.current = true
        console.log("Temporary access expired — logging out...")
        try {
          await supabaseTemp.auth.signOut().catch(() => {})
          localStorage.removeItem("temporary_access_flag")
          localStorage.removeItem("temporary_access_expiry")
          localStorage.removeItem("selectedYear")
          const { data } = await supabase.auth.getSession()
          if (data?.session) {
            console.log("Normal customer still logged in, no redirect.")
            toast.success("Temporary access expired.")
            return
          }
          setIsAuthenticated(false)
          toast.success("Temporary access expired. You have been logged out.")
        } catch (err) {
          console.error("Error during logout on expiry:", err)
        } finally {
          router.replace("/login")
        }
      }
    }

    checkExpiry()
    const interval = setInterval(checkExpiry, 60000)
    return () => clearInterval(interval)
  }, [
    isSessionReady,
    session,
    router,
    searchParams,
    setIsAuthenticated,
    supabaseTemp,
    isTemporary,
  ])

  const activeTab: string = searchParams.get("tab") || "filingyear"

  const setActiveTab = (tab: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("tab", tab)
    router.push(`?${params.toString()}`)
  }

  return (
    <div className="flex justify-between bg-white">
      <PageNavbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="lg:w-[76%]">
        {activeTab === "filingyear" && <ManageFilingYear />}
        {activeTab === "file-status" && <FileProgressTracker />}
        {activeTab === "preparationguide" && <TaxPreparationGuide />}
        {activeTab === "uploaded-by-vertix" && <VertixTaxPage />}
        {activeTab === "bank-info" && <BankingInformationPage />}
        {activeTab === "summary" && <PaymentTaxSummary />}
        {activeTab === "documentupload" && <MyDocuments />}
        {activeTab === "refer" && <ReferAFriend />}
        {activeTab === "messaging" && <Chats />}
        {activeTab === "feedback" && <Feedback />}
        {activeTab === "consent" && <AuthorizationConsent />}
      </div>
    </div>
  )
}
