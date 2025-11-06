<<<<<<< Updated upstream
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useEffect, useMemo, useState } from "react"
import { useYear } from "@/app/api/context/yearContext"
import { useAuth } from "@/components/AuthContext"
import { getPaymentTaxSummary } from "@/app/api/SupabaseAPI/customer/paymentTaxSummaryAPI"
import { updatePaymentStatus } from "@/app/api/SupabaseAPI/customer/documentUploadAPI"
import TableComponent from "../../../../utils/table/page"
import toast from "react-hot-toast"
import CommentModal from "@/components/modals/commentModal"
import { useHandleMagicLinkAuth } from "../../../../utils/useHandleMagicLinkAuth"
import DateForDue from "../BankingInformation/dateForDue"
=======
"use client";

import { useEffect, useState } from "react";
import { useYear } from "@/app/api/context/yearContext";
import { useAuth } from "@/components/AuthContext";
import { getPaymentTaxSummary } from "@/app/api/SupabaseAPI/customer/paymentTaxSummaryAPI";
import { updatePaymentStatus } from "@/app/api/SupabaseAPI/customer/documentUploadAPI";
import TableComponent from "../../../../utils/table/page";
import toast from "react-hot-toast";
import CommentModal from "@/components/modals/commentModal";
import { useHandleMagicLinkAuth } from "../../../../utils/useHandleMagicLinkAuth";
import DateForDue from "../BankingInformation/dateForDue";
import { motion, AnimatePresence } from "framer-motion";
import PaymentGateway from "./paymentGateway";
>>>>>>> Stashed changes

export default function TaxReturnRefund() {
  const { filingYearId } = useYear();
  const { user } = useAuth();

  const [summaries, setSummaries] = useState<Record<string, any>[]>([]);
  const [fetchingData, setFetchingData] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState<Record<string, any> | null>(null);
  const { isTemporary, isSessionReady } = useHandleMagicLinkAuth();

  const [showPayNow, setShowPayNow] = useState(false);
  const [showPaymentGateway, setShowPaymentGateway] = useState(false);

  useEffect(() => {
    if (showPayNow) {
      const timer = setTimeout(() => {
        setShowPayNow(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showPayNow]);

  useEffect(() => {
    if (!isSessionReady) return;
    fetchData();
  }, [user, filingYearId, isSessionReady]);

  const fetchData = async () => {
    if (!user || !filingYearId) {
      setSummaries([]);
      setFetchingData(false);
      return;
    }
    setFetchingData(true);
    try {
      const data = await getPaymentTaxSummary(filingYearId);
      setSummaries(data || []);
    } catch (err) {
      console.error("Error fetching tax return refund data:", err);
      setSummaries([]);
    } finally {
      setFetchingData(false);
    }
  };

  const handleRejectClick = (record: Record<string, any>) => {
    setSelectedRecord(record);
    setIsModalOpen(true);
  };

  const handleSaveComment = async (comment: string) => {
    try {
      if (!selectedRecord) return;
      const summaryId = selectedRecord.summaryId;
      if (!summaryId) {
        toast.error("Missing summaryId for record");
        return;
      }
      await updatePaymentStatus(summaryId, "Rejected", comment);
      toast.success("Comment saved and status set to Rejected!");
      setIsModalOpen(false);
      await fetchData();
    } catch (err) {
      console.error("Error saving comment:", err);
      toast.error("Failed to save comment");
    }
  };

  const handleAcceptClick = () => {
    setShowPayNow(true);
  };

  const handlePayNowClick = () => {
    setShowPaymentGateway(true);
  };

<<<<<<< Updated upstream
  const baseColumns = useMemo(
    () => [
      "TAX Type",
      "State",
      "Before Planning",
      "After Planning",
      "Type of Filing",
      "Original/Updated",
      "Belongs To",
      "Payment Status",
    ],
    []
  )

  const baseColumnKeys = useMemo(
    () => [
      "taxType",
      "state",
      "beforePlanning",
      "afterPlanning",
      "typeOfFiling",
      "originalUpdated",
      "belongsTo",
      "payment_status",
    ],
    []
  )

  // const columns = isTemporary ? [...baseColumns, "Comment"] : baseColumns
  // const columnKeys = isTemporary
  //   ? [...baseColumnKeys, "comment"]
  //   : baseColumnKeys

  const columns = useMemo(
    () => (isTemporary ? [...baseColumns, "Comment"] : baseColumns),
    [isTemporary, baseColumns]
  )
  const columnKeys = useMemo(
    () => (isTemporary ? [...baseColumnKeys, "comment"] : baseColumnKeys),
    [isTemporary, baseColumnKeys]
  )

  console.log("📋 Rendering with columns:", columns)
  console.log("📋 Column keys:", columnKeys)
=======
  const baseColumns = [
    "TAX Type",
    "State",
    "Before Planning",
    "After Planning",
    "Type of Filing",
    "Original/Updated",
    "Belongs To",
    "Payment Status",
  ];

  const baseColumnKeys = [
    "taxType",
    "state",
    "beforePlanning",
    "afterPlanning",
    "typeOfFiling",
    "originalUpdated",
    "belongsTo",
    "payment_status",
  ];

  const columns = isTemporary ? [...baseColumns, "Comment"] : baseColumns;
  const columnKeys = isTemporary ? [...baseColumnKeys, "comment"] : baseColumnKeys;
>>>>>>> Stashed changes

  if (!isSessionReady) {
    return (
      <div className="flex items-center justify-center">
        <p className="text-[#1D2B48]">Loading session..</p>
      </div>
    );
  }

  return (
    <>
      <div className="bg-red-00 p-4 flex flex-col items-center w-full">
<<<<<<< Updated upstream
        <h2 className="font-semibold text-[#1D2B48] text-xl">
          Tax Return Refund/Due Summary
        </h2>

        {!fetchingData && summaries.length > 0 ? (
          <>
            <div className="bg-blue-00 flex flex-col items-start">
              <TableComponent
                key={`${isTemporary ? "temp" : "normal"}-tax-return-refund`}
                data={summaries.map((item) => ({
                  ...item,
                  comment: item.comment || "—",
                }))}
                columns={columns}
                style="w-[100%]"
                columnKeys={columnKeys}
                onUpdateClick={() => console.log("No update action yet")}
              />

              {!isTemporary && (
                <div className="flex mt-3 gap-3">
                  <button
                    className="bg-green-600 hover:bg-green-500 py-1 px-3 text-white rounded-md cursor-pointer text-sm font-medium"
                    onClick={() => handleAcceptClick(summaries[0])}
                  >
                    Accept
                  </button>
                  <button
                    className="bg-red-600 hover:bg-red-500 py-1 px-3 text-white rounded-md cursor-pointer text-sm font-medium"
                    onClick={() => handleRejectClick(summaries[0])}
                  >
                    Reject
                  </button>
                </div>
              )}
            </div>
            {!isTemporary && <DateForDue />}
          </>
=======
        <div className="w-full flex justify-end mb-2">
          <AnimatePresence>
            {showPayNow && !showPaymentGateway && (
              <motion.button
                key="paynow"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-blue-600 cursor-pointer hover:bg-blue-500 text-white py-1.5 px-4 rounded-md text-sm font-medium shadow-md transition-all duration-200"
                onClick={handlePayNowClick}
              >
                Pay Now
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        {!showPaymentGateway && (
          <h2 className="font-semibold text-[#1D2B48] text-xl">
            Tax Return Refund/Due Summary
          </h2>
        )}

        {showPaymentGateway ? (
          <div className="w-full mt-4">
            <PaymentGateway />
          </div>
>>>>>>> Stashed changes
        ) : (
          !fetchingData &&
          (summaries.length > 0 ? (
            <>
              <div className="bg-blue-00 flex flex-col items-start">
                <TableComponent
                  data={summaries.map((item) => ({
                    ...item,
                    comment: item.comment || "—",
                  }))}
                  columns={columns}
                  style="w-[100%]"
                  columnKeys={columnKeys}
                  onUpdateClick={() => console.log("No update action yet")}
                />

                {!isTemporary && (
                  <div className="flex mt-3 gap-3">
                    <button
                      className="bg-green-600 hover:bg-green-500 py-1 px-3 text-white rounded-md cursor-pointer text-sm font-medium focus:outline-none shadow-md"
                      onClick={handleAcceptClick}
                    >
                      Accept
                    </button>
                    <button
                      className="bg-red-600 hover:bg-red-500 py-1 px-3 text-white rounded-md cursor-pointer text-sm font-medium shadow-md"
                      onClick={() => handleRejectClick(summaries[0])}
                    >
                      Reject
                    </button>
                  </div>
                )}
              </div>
              {!isTemporary && <DateForDue />}
            </>
          ) : (
            <p className="text-[#1D2B48] text-sm mt-4">No records found.</p>
          ))
        )}
      </div>

      <CommentModal
        isOpen={isModalOpen}
        initialComment=""
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveComment}
      />
    </>
  );
}
