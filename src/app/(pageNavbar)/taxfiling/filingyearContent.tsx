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
import { useEffect } from "react"
import { getCustomer } from "@/app/api/SupabaseAPI/customer/customerApi"
import { supabase } from "../../../../utils/supabase/client"

export default function TaxfilingContent() {
  const { isSessionReady, session } = useHandleMagicLinkAuth()
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!isSessionReady || !session) return
    const fetchCustomer = async () => {
      try {
        const { data } = await getCustomer()
        if (!data) console.warn("⚠️ No customer data found.")
      } catch (err) {
        console.error("❌ Failed to fetch customer:", err)
      }
    }
    fetchCustomer()
  }, [isSessionReady, session])

  // Handle temporary (1-hour) vs normal login sessions
  useEffect(() => {
    if (!isSessionReady || !session) return

    const urlHasTempAccess = searchParams.get("temporary_access") === "true"
    const storedTempFlag = localStorage.getItem("temporary_access_flag")

    // Case 1: First time temporary login (set expiry + flag)
    if (urlHasTempAccess && !storedTempFlag) {
      const expiry = Date.now() + 1 * 60 * 1000 // 1 hour
      localStorage.setItem("temporary_access_flag", "true")
      localStorage.setItem("temporary_access_expiry", expiry.toString())
      console.log("⏰ Temporary 1-hour access started")

      // Remove the temporary_access param from the URL for cleanliness
      const params = new URLSearchParams(searchParams.toString())
      params.delete("temporary_access")
      // preserve other params (like tab) if present
      router.replace(`?${params.toString()}`)
    }

    // Case 2: Check expiry immediately and every minute (based on persisted flag)
    const checkExpiry = async () => {
      const isTemp = localStorage.getItem("temporary_access_flag") === "true"
      const expiryTime = localStorage.getItem("temporary_access_expiry")
      if (isTemp && expiryTime && Date.now() > Number(expiryTime)) {
        console.log("🔒 Temporary access expired — logging out...")
        await supabase.auth.signOut()
        localStorage.removeItem("temporary_access_flag")
        localStorage.removeItem("temporary_access_expiry")
        router.replace("/login")
      }
    }

    // run immediately
    checkExpiry()
    // then run every minute
    const interval = setInterval(checkExpiry, 60000)
    return () => clearInterval(interval)
  }, [isSessionReady, session, router, searchParams])

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
