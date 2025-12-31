"use client";

import { useState, useEffect, useRef } from "react";
import YearSelect from "../../../../../utils/yearSelect";
import Dependents from "./dependents";
import ResidencyDetails from "./resedencydetails/resendencyDetails";
import IncomeDetails from "./incomeDetails/IncomePage";
import DeductionDetails from "./deductionDetails/deductionsdetails";
import FBAR_FATCA from "./fbar_fatca";
import { ArrowBendUpLeft } from "phosphor-react";
import { useRouter } from "next/navigation";
import AboutYou from "./aboutyou/aboutYou";
import { supabase } from "../../../../../utils/supabase/client"
import { useYear } from "@/app/api/context/yearContext"
import toast from "react-hot-toast";


export type Tab =
  | "About You"
  | "Dependents"
  | "Residency Details"
  | "Income Details"
  | "Deduction Details"
  | "FBAR/FATCA";

export default function Page() {
  const router = useRouter();

  const [hasDependents, setHasDependents] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<Tab | null>(null);
  const isFirstRender = useRef(true);
  const { selectedYear } = useYear()
  const [checkingConsent, setCheckingConsent] = useState(true)
  const hasRedirectedRef = useRef(false)


  const tabs: Tab[] = [
    "About You",
    ...(hasDependents ? (["Dependents"] as Tab[]) : []),
    "Residency Details",
    "Income Details",
    "Deduction Details",
    "FBAR/FATCA",
  ];

  useEffect(() => {
    const saved = localStorage.getItem("activeTab") as Tab | null;
    const firstVisit = sessionStorage.getItem("firstVisit");

    if (!firstVisit) {
      sessionStorage.setItem("firstVisit", "done");
      setActiveTab("About You");
    } else {
      if (saved) setActiveTab(saved);
    }
  }, []);

  useEffect(() => {
    if (activeTab) {
      localStorage.setItem("activeTab", activeTab);
    }
  }, [activeTab]);

  useEffect(() => {
    const checkConsent = async () => {
      try {
        if (!selectedYear) return

        const { data: auth } = await supabase.auth.getUser()
        if (!auth?.user) return

        const { data: customer } = await supabase
          .from("vertixcustomers")
          .select("customerId")
          .eq("auth_id", auth.user.id)
          .single()

        if (!customer) return

        const { data: consent } = await supabase
          .from("consents")
          .select("consentId")
          .eq("customerId", customer.customerId)
          .eq("filing_year", Number(selectedYear))
          .maybeSingle()

        if (!consent && !hasRedirectedRef.current) {
          hasRedirectedRef.current = true
          toast.error("Consent required for selected year")
          router.replace("/taxfiling?tab=consent")
          return
        }
      } finally {
        setCheckingConsent(false)
      }
    }

    checkConsent()
  }, [selectedYear, router])


  if (checkingConsent) return <div className="flex justify-center items-center text-[#1D2B48] h-[100vh]">
    <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
  </div>

  if (!activeTab) return null;


  const handleBack = () => router.back();

  return (
    <div className="bg-white w-full fixed left-0 right-0 top-[85px] bottom-0 overflow-hidden">
      <YearSelect style="justify-end" />
      <div className="flex justify-start px-4 gap-5 mt-3 h-[calc(100vh-120px)] overflow-hidden">
        <div className="bg-red-00 bg-[#FFFEFE] w-[20%] h-fit sticky top-0 rounded-lg shadow-md p-2 pt-4 pb-4 rounded-lg text-center flex flex-col items-center shadow-md">
          <div className="flex items-center h-10 gap-3 w-[90%] mb-2">
            <ArrowBendUpLeft
              size={22}
              weight="fill"
              color="#1D2A46"
              className="cursor-pointer"
              onClick={handleBack}
            />
            <h3 className="text-[#1D2B48] font-semibold">
              Dashboard
            </h3>
          </div>

          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`block w-[90%] text-left px-3 py-2 rounded-md mb-2 cursor-pointer ${activeTab === tab
                ? "bg-[#2F3F5F] text-white font-medium"
                : "bg-[#E8E8E8] text-[#1D2B48] font-medium hover:bg-blue-500/30"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="shadow-md lg:w-[80%] lg:h-[calc(100vh-230px)] rounded-lg p-4 overflow-y-auto scrollbar-hide">
          {activeTab === "About You" && (
            <AboutYou
              setActiveTab={setActiveTab}
              setHasDependents={setHasDependents}
            />
          )}

          {activeTab === "Dependents" && (
            <Dependents setActiveTab={setActiveTab} />
          )}

          {activeTab === "Residency Details" && (
            <ResidencyDetails setActiveTab={setActiveTab} />
          )}

          {activeTab === "Income Details" && (
            <IncomeDetails setActiveTab={setActiveTab} />
          )}

          {activeTab === "Deduction Details" && (
            <DeductionDetails setActiveTab={setActiveTab} />
          )}

          {activeTab === "FBAR/FATCA" && (
            <FBAR_FATCA setActiveTab={setActiveTab} />
          )}

        </div>
      </div>
    </div>
  );
}
