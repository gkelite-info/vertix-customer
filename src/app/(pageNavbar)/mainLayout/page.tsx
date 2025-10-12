"use client"

import { useRouter, useSearchParams } from "next/navigation"
import PageNavbar from "../pageNavbar"
import VertixTaxPage from "../VertixDocUpload/page"
import ReferAFriend from "../ReferAFriend/page"
import Feedback from "../Feedback1/page"
import { Suspense } from "react"
import ManageFilingYear from "../ManageFilingYear/page"
import FileProgressTracker from "../FileProgressTracker/page"
import TaxPreparationGuide from "../(TaxPreparationGuide)/TaxPreparationGuide"
import PaymentTaxSummary from "../PaymentTaxSummary/page"
import BankingInformation from "../BankingInformation/page"
import MyDocuments from "../MyDocuments/page"
import Chats from "../Chats/page"
import AuthorizationConsent from "../AuthorizationConsent/page"

function MainLayout() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Content />
    </Suspense>
  )
}

export default function Content() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const activeTab = searchParams.get("tab") || "service"

  const setActiveTab = (tab: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("tab", tab)
    router.push(`?${params.toString()}`)
  }

  return (
    <div className="bg-green-00 flex justify-between">
      <PageNavbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="bg-red-00 w-[76%]">
        {activeTab === "service" && <ManageFilingYear />}
        {activeTab === "file-status" && <FileProgressTracker />}
        {activeTab === "organizer" && <TaxPreparationGuide />}
        {activeTab === "uploaded-by-vertix" && <VertixTaxPage />}
        {activeTab === "summary" && <PaymentTaxSummary />}
        {/* {activeTab === "bank-info" && <BankingInformation customerId={""} />} */}
        {activeTab === "uploaded" && <MyDocuments />}
        {activeTab === "refer" && <ReferAFriend />}
        {activeTab === "messages" && <Chats />}
        {activeTab === "feedback" && <Feedback />}
        {activeTab === "consent" && <AuthorizationConsent />}
      </div>
    </div>
  )
}

