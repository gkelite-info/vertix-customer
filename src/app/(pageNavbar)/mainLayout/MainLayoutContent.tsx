'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import PageNavbar from "../pageNavbar"
import ManageFilingYear from '../ManageFilingYear/page'
import FileProgressTracker from '../FileProgressTracker/page'
import TaxPreparationGuide from '../(TaxPreparationGuide)/TaxPreparationGuide'
import VertixTaxPage from '../VertixDocUpload/page'
import PaymentTaxSummary from '../PaymentTaxSummary/page'
import MyDocuments from '../MyDocuments/page'
import ReferAFriend from '../ReferAFriend/page'
import Chats from '../Chats/page'
import Feedback from '../Feedback1/page'
import AuthorizationConsent from '../AuthorizationConsent/page'
import BankingInformationPage from '../BankingInformation/page'

export default function MainLayoutContent() {
    const router = useRouter()
    const searchParams = useSearchParams()

    const activeTab: string = searchParams.get("tab") || "service"

    const setActiveTab = (tab: string) => {
        const params = new URLSearchParams(searchParams.toString())
        params.set("tab", tab)
        router.push(`?${params.toString()}`)
    }

    return (
        <div className="flex justify-between bg-red-400">
            <PageNavbar activeTab={activeTab} setActiveTab={setActiveTab} />
            <div className="w-[76%]">
                {activeTab === "service" && <ManageFilingYear />}
                {activeTab === "file-status" && <FileProgressTracker />}
                {activeTab === "organizer" && <TaxPreparationGuide />}
                {activeTab === "uploaded-by-vertix" && <VertixTaxPage />}
                {activeTab === "bank-info" && <BankingInformationPage />}
                {activeTab === "summary" && <PaymentTaxSummary />}
                {activeTab === "uploaded" && <MyDocuments />}
                {activeTab === "refer" && <ReferAFriend />}
                {activeTab === "messages" && <Chats />}
                {activeTab === "feedback" && <Feedback />}
                {activeTab === "consent" && <AuthorizationConsent />}
            </div>
        </div>
    )
}