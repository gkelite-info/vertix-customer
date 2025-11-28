"use client";

import { Suspense, useState, useEffect } from "react";
import { useYear } from "@/app/api/context/yearContext";
import { getFeeSummary } from "@/app/api/SupabaseAPI/customer/feeSummaryAPI";
import FeeSummaryTotals from "../../../../utils/calculationsTable/feeSummaryTotal";
import UPIModal from "@/components/modals/upiModal";
import { useSearchParams } from "next/navigation";

function PaymentGatewayContent() {
  const searchParams = useSearchParams();
  const summaryId = searchParams.get("SummaryId");
  const { filingYearId } = useYear();

  const [totals, setTotals] = useState({
    totalFee: 0,
    discount: 0,
    referral: 0,
    feePaid: 0,
    dueAmount: 0,
    code: "",
    netFee: 0,
  });

  const [loading, setLoading] = useState(true);
  const [noRecord, setNoRecord] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [isUpiModalOpen, setIsUpiModalOpen] = useState(false);

  const handleUPIConfirm = (upiId: string, transactionId: string) => {
    console.log("UPI ID:", upiId);
    console.log("Transaction ID:", transactionId);
    setIsUpiModalOpen(false);
    alert(`Payment successful with ${upiId} (${transactionId})`);
  };

  const handleUPICancel = () => setIsUpiModalOpen(false);

  useEffect(() => {
    const fetchFeeSummary = async () => {
      try {
        if (!filingYearId) return;
        const data = await getFeeSummary(filingYearId);

        if (data && data.length > 0) {
          const summary = data[0];
          setTotals({
            totalFee: summary.totalAmount || 0,
            discount: summary.discount || 0,
            referral: summary.referral || 0,
            feePaid: summary.feePaid || 0,
            dueAmount: summary.dueAmount || 0,
            code: summary.code || "",
            netFee: summary.netFee || 0,
          });
          setNoRecord(summary.totalAmount === 0);
        } else {
          setNoRecord(true);
        }
      } catch (err) {
        console.error("Error fetching fee summary:", err);
        setNoRecord(true);
      } finally {
        setLoading(false);
      }
    };

    fetchFeeSummary();
  }, [filingYearId]);

  const handleProceed = () => {
    console.log("Proceeding with totals:", totals);
    setShowPayment(true);
  };

  if (!filingYearId) {
    return (
      <div className="p-4 text-[#1D2B48] bg-white flex flex-col items-center justify-center h-[100vh]">
        <p className="p-4 text-[#1D2B48] bg-white">
          Select a filing year to view payment details.
        </p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="p-4 text-[#1D2B48] bg-white flex flex-col items-center justify-center h-[100vh]">
        <p className="text-[#1D2B48] bg-white">Loading payment details...</p>
      </div>
    )
  }

  if (noRecord) {
    return (
      <div className="p-4 text-[#1D2B48] bg-white flex flex-col items-center justify-center h-[100vh]">
        <p className="text-black font-semibold mb-1">Oops.. 😕</p>
        <p>No records found for this year.</p>
      </div>
    );
  }

  return (
    <div className="bg-white px-4 py-4">
      <h2 className="text-xl font-semibold mb-4 text-[#1D2B48]">
        Payment Gateway
      </h2>

      <div className="bg-red-00 flex">
        <div className="flex flex-col items-center w-[50%] bg-blue-00">
          <FeeSummaryTotals
            total={totals.totalFee}
            discount={totals.discount}
            referral={totals.referral}
            feePaid={totals.feePaid}
            code={totals.code}
            onTotalsChange={setTotals}
            width="w-[100%]"
            readOnly
            showCodeRow={false}
          />

          <div className="mt-6 flex gap-3">
            <button
              className="bg-green-600 text-white px-3 py-1 text-sm font-medium rounded hover:bg-green-500 cursor-pointer shadow-md focus:outline-none"
              onClick={handleProceed}
            >
              Proceed
            </button>
          </div>
        </div>

        <div className="bg-green-00 w-[50%] flex flex-col items-center justify-center">
          {showPayment && (
            <p className="text-[#1D2B48] text-sm font-semibold">Choose your payment</p>
          )}
          {showPayment && (
            <div className="flex items-center justify-between bg-red-00 h-[30%] w-[70%] mt-5">
              <div
                className="flex flex-col items-center justify-between bg-pink-00 w-[30%] h-[70%]"
                onClick={() => setIsUpiModalOpen(true)}
              >
                <img src="upi.png" alt="upi" className="w-10 h-10 cursor-pointer" />
                <span className="text-[#1D2B48] font-bold text-xs mt-1">UPI</span>
              </div>
              <div className="flex flex-col items-center justify-between bg-green-00 pt-1 w-[30%] h-[70%]">
                <img src="paypal.png" alt="paypal" className="w-8 h-8 cursor-pointer" />
                <span className="text-[#1D2B48] font-bold text-xs mt-1">PayPal</span>
              </div>
              <div className="flex flex-col items-center justify-between bg-yellow-00 w-[30%] h-[70%]">
                <img src="stripe.png" alt="stripe" className="w-10 h-10 cursor-pointer" />
                <span className="text-[#1D2B48] font-bold text-xs mt-1">Stripe</span>
              </div>
            </div>
          )}
        </div>
      </div>
      <UPIModal
        isOpen={isUpiModalOpen}
        onConfirm={handleUPIConfirm}
        onCancel={handleUPICancel}
      />
    </div>
  );
}

export default function PaymentGateway() {
  return (
    <Suspense fallback={<p className="p-4 text-[#1D2B48] bg-white">Loading Payment Gateway...</p>}>
      <PaymentGatewayContent />
    </Suspense>
  );
}
