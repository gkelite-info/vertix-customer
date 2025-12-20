"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import YearSelect from "../../../../utils/yearSelect";
import FeeSummary from "./feeSummary";
import { useHandleMagicLinkAuth } from "../../../../utils/useHandleMagicLinkAuth";
import TaxRefund from "./taxRefund";
import TaxReturnRefund from "./taxReturnRefund";
import { useYear } from "@/app/api/context/yearContext";
import { supabase } from "../../../../utils/supabase/client";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function PaymentTaxSummary() {
  const [activeTab, setActiveTab] = useState<"tax" | "fee">("tax");
  const [isMounted, setIsMounted] = useState(false);
  const { isTemporary } = useHandleMagicLinkAuth();
  const { selectedYear } = useYear()
  const [checkingConsent, setCheckingConsent] = useState(true)
  const hasRedirectedRef = useRef(false)
  const router = useRouter()

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
