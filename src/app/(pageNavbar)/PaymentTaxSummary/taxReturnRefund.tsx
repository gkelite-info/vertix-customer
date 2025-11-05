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

export default function TaxReturnRefund() {
  const { filingYearId } = useYear()
  const { user } = useAuth()

  const [summaries, setSummaries] = useState<Record<string, any>[]>([])
  const [fetchingData, setFetchingData] = useState(true)

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedRecord, setSelectedRecord] = useState<Record<
    string,
    any
  > | null>(null)
  const { isTemporary, isSessionReady } = useHandleMagicLinkAuth()
  console.log("isTemporary value:", isTemporary)

  useEffect(() => {
    console.log("📊 TaxReturnRefund - isTemporary value:", isTemporary)
    console.log("📊 TaxReturnRefund - isSessionReady value:", isSessionReady)
  }, [isTemporary, isSessionReady])

  useEffect(() => {
    if (!isSessionReady) return
    fetchData()
  }, [user, filingYearId, isSessionReady])

  const fetchData = async () => {
    if (!user || !filingYearId) {
      setSummaries([])
      setFetchingData(false)
      return
    }
    setFetchingData(true)
    try {
      const data = await getPaymentTaxSummary(filingYearId)
      setSummaries(data || [])
    } catch (err) {
      console.error("Error fetching tax return refund data:", err)
      setSummaries([])
    } finally {
      setFetchingData(false)
    }
  }

  const handleRejectClick = (record: Record<string, any>) => {
    setSelectedRecord(record)
    setIsModalOpen(true)
  }

  const handleSaveComment = async (comment: string) => {
    try {
      if (!selectedRecord) return

      const summaryId = selectedRecord.summaryId
      if (!summaryId) {
        toast.error("Missing summaryId for record")
        return
      }

      await updatePaymentStatus(summaryId, "Rejected", comment)
      toast.success("Comment saved and status set to Rejected!")

      setIsModalOpen(false)
      await fetchData()
    } catch (err) {
      console.error("Error saving comment:", err)
      toast.error("Failed to save comment")
    }
  }

  const handleAcceptClick = async (record: Record<string, any>) => {
    try {
      if (!record.summaryId) {
        toast.error("Missing summaryId for record")
        return
      }

      await updatePaymentStatus(record.summaryId, "Accepted")
      toast.success("Payment status updated to Accepted!")

      await fetchData()
    } catch (err) {
      console.error("Error updating to Accepted:", err)
      toast.error("Failed to update status")
    }
  }

  const baseColumns = [
    "TAX Type",
    "State",
    "Before Planning",
    "After Planning",
    "Type of Filing",
    "Original/Updated",
    "Belongs To",
    "Payment Status",
  ]

  const baseColumnKeys = [
    "taxType",
    "state",
    "beforePlanning",
    "afterPlanning",
    "typeOfFiling",
    "originalUpdated",
    "belongsTo",
    "payment_status",
  ]

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

  if (!isSessionReady) {
    return (
      <div className="flex items-center justify-center">
        <p className="text-[#1D2B48]">Loading session..</p>
      </div>
    )
  }

  return (
    <>
      <div className="bg-red-00 p-4 flex flex-col items-center w-full">
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
        ) : (
          !fetchingData && (
            <p className="text-[#1D2B48] text-sm mt-4">No records found.</p>
          )
        )}
      </div>

      <CommentModal
        isOpen={isModalOpen}
        initialComment=""
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveComment}
      />
    </>
  )
}
