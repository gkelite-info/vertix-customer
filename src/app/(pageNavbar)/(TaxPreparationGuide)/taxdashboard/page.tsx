"use client"
import React, { useState, useEffect } from "react"
import YearSelect from "../../../../../utils/yearSelect"
import Dependents from "./dependents"
import ResidencyDetails from "./resendencyDetails"
import IncomeDetails from "./incomeDetails/page"
import DeductionDetails from "./deductionDetails/deductionsdetails"
import FBAR_FATCA from "./fbar_fatca"
import { ArrowBendUpLeft } from "phosphor-react"
import { useRouter } from "next/navigation"
import AboutYou from "./aboutYou"

type Tab =
  | "About You"
  | "Dependents"
  | "Residency Details"
  | "Income Details"
  | "Deduction Details"
  | "FBAR/FATCA"

export default function Page() {
  const router = useRouter();

  const [activeTab, setActiveTab] = useState<Tab | null>(null)
  const tabs: Tab[] = [
    "About You",
    "Dependents",
    "Residency Details",
    "Income Details",
    "Deduction Details",
    "FBAR/FATCA",
  ]

  useEffect(() => {
    const savedTab = localStorage.getItem("activeTab") as Tab
    setActiveTab(savedTab || "About You")
  }, [])

  useEffect(() => {
    if (activeTab) localStorage.setItem("activeTab", activeTab)
  }, [activeTab])

  useEffect(() => {
    if (activeTab) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [activeTab]);


  const handleBack = () => router.back()

  if (!activeTab) return null

  return (
    <div className="bg-white mt-0 pb-7 w-[100%]">
      <YearSelect style="justify-end" />
      <div className="flex justify-center gap-5 mt-3 bg-green-00">
        <div className="bg-[#FFFEFE] w-[28%] h-102 p-2 pt-4 pb-4 rounded-lg text-center flex flex-col items-center shadow-md">
          <div className="flex items-center bg-red-00 h-10 gap-6 w-[90%] mb-2">
            <ArrowBendUpLeft size={22} weight="fill" color="#1D2A46" className="cursor-pointer" onClick={handleBack} />
            <h3 className="text-[#1D2B48] font-semibold">
              Tax Organizer Dashboard
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

        <div className="bg-indigo-00 shadow-md w-[60%] rounded-lg p-4 overflow-y-auto scrollbar-hide">
          {activeTab === "About You" && <AboutYou setActiveTab={setActiveTab} />}
          {activeTab === "Dependents" && <Dependents setActiveTab={setActiveTab} />}
          {activeTab === "Residency Details" && <ResidencyDetails setActiveTab={setActiveTab} />}
          {activeTab === "Income Details" && <IncomeDetails setActiveTab={setActiveTab} />}
          {activeTab === "Deduction Details" && <DeductionDetails setActiveTab={setActiveTab} />}
          {activeTab === "FBAR/FATCA" && <FBAR_FATCA setActiveTab={setActiveTab} />}
        </div>
      </div>
    </div>
  )
}
