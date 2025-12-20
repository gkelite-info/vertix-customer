"use client";

import { Confetti, CurrencyCircleDollar, Eye, File, Wrench, CheckCircle, Gear, } from "phosphor-react";
import YearSelect from "../../../../utils/yearSelect";
import { useEffect, useRef, useState } from "react";
import { useYear } from "@/app/api/context/yearContext";
import { getFilingYearStatus } from "@/app/api/SupabaseAPI/customer/trackerAPI";
import { supabase } from "../../../../utils/supabase/client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function FileProgressTracker() {
  const { filingYearId } = useYear();
  const { selectedYear } = useYear()
  const [checkingConsent, setCheckingConsent] = useState(true)
  const hasRedirectedRef = useRef(false)
  const router = useRouter()

  const steps = [
    { icon: File, label: "DOCUMENT", statusKey: "Documents Pending" },
    { icon: Wrench, label: "PREPARATION", statusKey: "Preparation Pending" },
    { icon: Eye, label: "REVIEW", statusKey: "Review Pending" },
    { icon: CurrencyCircleDollar, label: "PAYMENT", statusKey: "Payment Pending" },
    { icon: Confetti, label: "POST PAYMENT", statusKey: ["E-File Pending", "E-File Done", "Process Completed", "Federal E-Filing Pending", "State E-File Pending", "Final Document Pending", "Final Document Uploaded"] },
  ];

  const [filingStatus, setFilingStatus] = useState<string | null>(null);

  useEffect(() => {
    if (!filingYearId) return;

    const fetchStatus = async () => {
      try {
        const res = await getFilingYearStatus(filingYearId);
        setFilingStatus(res?.status || null);
      } catch (err) {
        console.error("Error fetching filing status:", err);
      }
    };

    fetchStatus();
  }, [filingYearId]);

<<<<<<< Updated upstream
  // const activeIndex = steps.findIndex((s) => s.statusKey === filingStatus);
  const activeIndex = steps.findIndex(step =>
    step.statusKey.includes(filingStatus ?? "")
  );
=======
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

  const activeIndex = steps.findIndex((s) => s.statusKey === filingStatus);
>>>>>>> Stashed changes

  return (
    <div className="bg-white lg:h-[100vh]">
      <YearSelect />

      <div className="flex flex-col justify-start items-start lg:h-[80%] lg:pt-5 p-5">
        <h2 className="font-semibold text-[#1D2B48] text-xl mt-3 mb-5">
          Filing Progress Tracker
        </h2>

        <div className="flex flex-col items-center text-center lg:h-[100%] lg:w-[40%] rounded-lg shadow-lg">
          {steps.map((step, index) => {
            const Icon = step.icon;

            let statusText = "Pending";
            let color = "text-gray-400";

            console.log("index checking", index)
            console.log("active index check", activeIndex)

            if (index < activeIndex) {
              statusText = "Completed";
              color = "text-green-600";
            }
            else if (index === activeIndex) {
              // if (filingStatus === "E-File Done") {
              //   statusText = "Completed";
              //   color = "text-green-600";
              // } else {
              //   statusText = "In Progress";
              //   color = "text-blue-600";
              // }
              const isFinalStep = step.label === "POST PAYMENT";

              if (isFinalStep && filingStatus === "E-File Done" || filingStatus === "Process Completed") {
                statusText = "Completed";
                color = "text-green-600";
              } else {
                statusText = "In Progress";
                color = "text-blue-600";
              }
            }

            return (
              <div
                key={step.label}
                className={`
                  w-full flex h-[100%] items-center gap-3 px-4 py-3
                  ${index === 0 ? "rounded-t-lg" : ""}
                  ${index === steps.length - 1 ? "rounded-b-lg" : ""}
                  bg-[#F9FAFB]
                `}
              >
                <div className="flex items-center gap-3 w-[50%]">
                  <div className="bg-[#DDDEE3] p-3 rounded-full flex items-center justify-center">
                    <Icon size={27} weight="fill" className="text-[#1D2A46]" />
                  </div>
                  <h3 className="font-semibold text-xs text-[#1D2B48] tracking-wider">
                    {step.label}
                  </h3>
                </div>
                <div className="h-[75%] w-[50%] flex items-center justify-end gap-2">
                  {statusText === "Completed" && (
                    <CheckCircle
                      size={18}
                      weight="fill"
                      className="text-green-600"
                    />
                  )}
                  {statusText === "In Progress" && (
                    <Gear
                      size={18}
                      weight="fill"
                      className="text-blue-600 animate-spin"
                    />
                  )}
                  <p className={`text-sm font-medium ${color}`}>
                    {statusText}
                  </p>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </div>
  );
}
