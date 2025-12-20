"use client";

import { useEffect, useRef, useState } from "react";
import YearSelect from "../../../../utils/yearSelect";
import { upsertFeedback } from "@/app/api/SupabaseAPI/customer/feedbackAPI";
import { useYear } from "@/app/api/context/yearContext";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { supabase } from "../../../../utils/supabase/client";

export default function Feedback() {
  const [serviceType, setServiceType] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { filingYearId } = useYear();
  const { selectedYear } = useYear()
  const [checkingConsent, setCheckingConsent] = useState(true)
  const hasRedirectedRef = useRef(false)
  const router = useRouter()

  const handleSubmit = async () => {
    if (!serviceType || !message.trim()) {
      toast.error("Please select a service and enter your message");
      return;
    }

    if (!filingYearId) {
      toast.error("Please select a filing year before submitting.");
      return;
    }

    setLoading(true);
    try {
      const response = await upsertFeedback(serviceType, message, filingYearId);
      console.log("Feedback inserted:", response);
      toast.success("Feedback submitted successfully!");
      setServiceType("");
      setMessage("");
    } catch (error) {
      console.error("Error submitting feedback:", error);
      toast.error("Something went wrong while submitting feedback");
    } finally {
      setLoading(false);
    }
  };

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

  return (
    <div className="bg-white lg:h-[100vh]">
      <YearSelect />

      <div className="flex flex-col justify-start items-center lg:h-[80%] lg:pt-5 text-center">
        <h2 className="font-semibold text-[#1D2B48] text-xl mt-3 mb-5">Feedback</h2>
        <div className="bg-red-00 w-[45%] mb-5 text-center">
          <p className="text-red-500 text-xs">Note: You're on the feedback page — feel free to share your thoughts.</p>

        </div>
        <div className="flex items-center justify-between h-[10%] w-[44%]">

          <div className="w-[30%] flex items-center justify-center pl-1">
            <h5 className="text-[#1D2B48] font-medium">Service :</h5>
          </div>

          <select
            className="border border-gray-300 text-[#616161] font-medium lg:w-[70%] px-2 text-sm lg:h-[85%] rounded cursor-pointer shadow-sm"
            value={serviceType}
            onChange={(e) => setServiceType(e.target.value)}
          >
            <option value="">Select one</option>
            <option value="income_tax_filing">Income Tax Filing</option>
            <option value="gst_filing">GST Filing</option>
            <option value="tds_return">TDS Return Filing</option>
            <option value="tax_planning">Tax Planning & Consultation</option>
            <option value="audit_assistance">Audit Assistance</option>
            <option value="itr_revision">ITR Revision / Correction</option>
            <option value="business_registration">
              Business Registration (e.g., MSME, Startup India)
            </option>
            <option value="pan_tan_service">PAN / TAN Application</option>
            <option value="refund_status">Refund Tracking & Status</option>
            <option value="compliance_filing">Compliance Filing (ROC, etc.)</option>
          </select>
        </div>

        <div className="flex w-[44%] justify-between gap-3 mt-3">
          <h5 className="mt-3 font-medium text-[#1D2B48]">Description :</h5>
          <div className="w-[70%] flex flex-col items-center">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter your feedback"
              className="w-full text-sm h-32 p-3 text-[#616161] border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSubmit();
              }}
            />
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="mt-4 font-medium w-[60%] text-sm bg-[#1D2B48] text-white px-5 py-2 rounded-lg flex gap-2 justify-center items-center cursor-pointer disabled:opacity-50"
            >
              {loading ? "Submitting..." : "SUBMIT FEEDBACK"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
