"use client";

import { useRouter, useSearchParams } from "next/navigation";
import PageNavbar from "../pageNavbar";

import AddServicePage from "../AddServicePage/page";
import FileStatusPage from "../FileStatusPage/page";
import OrganizerPage from "../(TaxOrganizer)/taxorganizer";
import VertixTaxPage from "../VertixDocUpload/page";
import FeeTaxSummary from "../FeeTaxSummary/page";
import ReferAFriend from "../ReferAFriend/page";
import Messages from "../Messages/page";
import Feedback from "../Feedback1/page";
import ConsentForm from "../ConsentForm/page";
import DocumentUploaded from "../DocumentUploaded/page";
import BankInformation from "../BankInformation/page";

function MainLayout() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const activeTab = searchParams.get("tab") || "service";

  const setActiveTab = (tab: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("tab", tab);
    router.push(`?${params.toString()}`);
  };

  return (
    <div>
      <PageNavbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div>
        {activeTab === "service" && <AddServicePage />}
        {activeTab === "file-status" && <FileStatusPage />}
        {activeTab === "organizer" && <OrganizerPage />}
        {activeTab === "uploaded-by-vertix" && <VertixTaxPage />}
        {activeTab === "summary" && <FeeTaxSummary />}
        {activeTab === "bank-info" && <BankInformation />}
        {activeTab === "uploaded" && <DocumentUploaded />}
        {activeTab === "refer" && <ReferAFriend />}
        {activeTab === "messages" && <Messages />}
        {activeTab === "feedback" && <Feedback />}
        {activeTab === "consent" && <ConsentForm />}
      </div>
    </div>
  );
}

export default MainLayout;