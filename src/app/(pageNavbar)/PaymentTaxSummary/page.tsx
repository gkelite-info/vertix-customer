"use client";

import { useEffect, useState, useCallback } from "react";
import YearSelect from "../../../../utils/yearSelect";
import FeeSummary from "./feeSummary";
import { useHandleMagicLinkAuth } from "../../../../utils/useHandleMagicLinkAuth";
import TaxRefund from "./taxRefund";
import TaxReturnRefund from "./taxReturnRefund";

export default function PaymentTaxSummary() {
  const [activeTab, setActiveTab] = useState<"tax" | "fee">("tax");
  const [isMounted, setIsMounted] = useState(false);
  const { isTemporary } = useHandleMagicLinkAuth();

  const handleTotalsChange = useCallback((values: any) => {
    console.log("Received totals:", values);
    // You can store these totals if needed:
    // setSummaries(values)
  }, []);

  useEffect(() => {
    const savedTab = localStorage.getItem("activePaymentTab") as "tax" | "fee" | null;
    if (savedTab) setActiveTab(savedTab);
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) localStorage.setItem("activePaymentTab", activeTab);
  }, [activeTab, isMounted]);

  if (!isMounted) return null;

  return (
    <div className="bg-white lg:h-[100vh] overflow-y-auto">
      <YearSelect />
      {isTemporary &&
        <>
          <div className="flex justify-center items-center gap-4 mt-5">
            <button
              onClick={() => setActiveTab("tax")}
              className={`px-5 py-2 rounded-md cursor-pointer font-medium text-sm transition-all duration-200 ${activeTab === "tax"
                ? "bg-[#1D2B48] text-white"
                : "bg-gray-200 text-[#1D2B48] hover:bg-gray-300"
                }`}
            >
              TAX Return Refund / Due Summary
            </button>
            <button
              onClick={() => setActiveTab("fee")}
              className={`px-5 py-2 rounded-md cursor-pointer font-medium text-sm transition-all duration-200 ${activeTab === "fee"
                ? "bg-[#1D2B48] text-white"
                : "bg-gray-200 text-[#1D2B48] hover:bg-gray-300"
                }`}
            >
              Fee Summary
            </button>
          </div>
        </>
      }

      <div className="mt-6">
        {isTemporary ?
          <>
            {activeTab === "tax" ? (
              <TaxRefund />
            ) : (
              <FeeSummary onTotalsChange={handleTotalsChange} />
            )}
          </> :
          <>
            <TaxReturnRefund />
          </>
        }
      </div>
    </div>
  );
}
