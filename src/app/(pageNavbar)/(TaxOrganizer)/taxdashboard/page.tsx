"use client"
import React, { useState } from "react"
import YearSelect from "../../../../../utils/yearSelect"
import GettingToKnow from "./gettingtoknow"
import AboutYou from "./aboutYou"
import Dependents from "./dependents"
import ResidencyDetails from "./resendencyDetails"
import IncomeDetails from "./incomeDetails/page"
import DeductionDetails from "./deductionDetails"
import FBAR_FATCA from "./fbar_fatca"

type Tab =
  | "Getting to know you"
  | "About You"
  | "Dependents"
  | "Residency Details"
  | "Income Details"
  | "Deduction Details"
  | "FBAR/FATCA"

export default function TaxDashboard() {
  const [activeTab, setActiveTab] = useState<Tab>("Getting to know you")

  const tabs: Tab[] = [
    "Getting to know you",
    "About You",
    "Dependents",
    "Residency Details",
    "Income Details",
    "Deduction Details",
    "FBAR/FATCA",
  ]

  return (
    <div className="bg-white lg:h-auto pb-7">
      <YearSelect />
      <div className="flex justify-center gap-5 mt-3">
        <div className="bg-[#FFFEFE] w-[28%] h-102 p-2 pt-4 pb-4 rounded-lg text-center flex flex-col items-center shadow-md">
          <h3 className="text-[#1D2B48] font-semibold mb-4">
            Tax Organizer Dashboard
          </h3>

          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)} // <-- correct: pass the tab value
              className={`block w-[90%] text-left px-3 py-2 rounded-md mb-2 cursor-pointer ${
                activeTab === tab
                  ? "bg-[#4F46E5] text-white font-medium"
                  : "bg-[#E8E8E8] text-[#1D2B48] font-medium hover:bg-blue-500/30"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="bg-indigo-00 shadow-md w-[60%] rounded-lg p-4 overflow-y-auto">
          {activeTab === "Getting to know you" && <GettingToKnow />}
          {activeTab === "About You" && <AboutYou />}
          {activeTab === "Dependents" && <Dependents />}
          {activeTab === "Residency Details" && <ResidencyDetails />}
          {activeTab === "Income Details" && <IncomeDetails />}
          {activeTab === "Deduction Details" && <DeductionDetails />}
          {activeTab === "FBAR/FATCA" && <FBAR_FATCA />}
        </div>
      </div>
    </div>
  )
}
