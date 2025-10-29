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
import Feedback from "../Feedback1/page"
import AuthorizationConsent from "../AuthorizationConsent/page"
import BankingInformationPage from "../BankingInformation/page"
import { useHandleMagicLinkAuth } from "../../../../utils/useHandleMagicLinkAuth"
import { useEffect, useRef } from "react"
import { getCustomer } from "@/app/api/SupabaseAPI/customer/customerApi"
import { useAuth } from "@/components/AuthContext"
import { createClient } from "@supabase/supabase-js"
import toast from "react-hot-toast"

const supabaseTemp = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function TaxfilingContent() {
  const { isSessionReady, session } = useHandleMagicLinkAuth()
  const { logout, setIsAuthenticated } = useAuth()
  const router = useRouter()
  const searchParams = useSearchParams()
  const isLoggingOut = useRef(false)

  useEffect(() => {
    if (!isSessionReady || !session) return
    const fetchCustomer = async () => {
      try {
        const data = await getCustomer()
        if (!data) console.warn("No customer data found.")
      } catch (err) {
        console.error("Failed to fetch customer:", err)
      }
    }
    fetchCustomer()
  }, [isSessionReady, session])

  useEffect(() => {
    if (!isSessionReady) return
    const isTempUser = localStorage.getItem("temporary_access_flag") === "true"
    if (session) {
      setIsAuthenticated(true)
      return
    }
    if (!isTempUser && !isLoggingOut.current) {
      console.log("Session expired for normal user, logging out.")
      isLoggingOut.current = true
      setIsAuthenticated(false)
      logout()
    }
  }, [isSessionReady, session, setIsAuthenticated, logout])

  useEffect(() => {
    if (!isSessionReady || !session) return

    const urlHasTempAccess = searchParams.get("temporary_access") === "true"
    const storedTempFlag = localStorage.getItem("temporary_access_flag")

    if (urlHasTempAccess && !storedTempFlag) {
      const expiry = Date.now() + 1 * 60 * 1000
      localStorage.setItem("temporary_access_flag", "true")
      localStorage.setItem("temporary_access_expiry", expiry.toString())
      console.log("Temporary 1-hour access started")

      const params = new URLSearchParams(searchParams.toString())
      params.delete("temporary_access")
      router.replace(`?${params.toString()}`)
    }

    const checkExpiry = async () => {
      const isTemp = localStorage.getItem("temporary_access_flag") === "true"
      const expiryTime = localStorage.getItem("temporary_access_expiry")
      if (isTemp && expiryTime && Date.now() > Number(expiryTime)) {
        if (isLoggingOut.current) return
        isLoggingOut.current = true
        console.log("Temporary access expired — logging out...")
        try {
          setIsAuthenticated(false)
          await supabaseTemp.auth.signOut()
          localStorage.removeItem("temporary_access_flag")
          localStorage.removeItem("temporary_access_expiry")
          localStorage.removeItem("session_expiry")
          toast.success("Session expired. Please log in again.")
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
    logout,
    setIsAuthenticated,
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
