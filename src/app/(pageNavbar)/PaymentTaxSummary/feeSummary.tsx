"use client";

import { useEffect, useState } from "react";
import { useYear } from "@/app/api/context/yearContext";
import FeeSummaryTable from "../../../../utils/calculationsTable/page";
import { getCustomer } from "@/app/api/SupabaseAPI/customer/customerApi";
import { getFeeSummary, upsertFeeSummary } from "@/app/api/SupabaseAPI/customer/feeSummaryAPI";
import { upsertFeeSummaryItem } from "@/app/api/SupabaseAPI/customer/feeSummaryItemsAPI";
import { insertFeePayment } from "@/app/api/SupabaseAPI/customer/feePaymentsAPI";
import { supabase } from "../../../../utils/supabase/client";
import toast from "react-hot-toast";

type FeeRow = {
    id: number;
    description: string;
    baseFee: number;
    noStatus?: boolean;
    status?: number | null;
    total?: number;
    fee?: number;
    code?: string | null;
};

export default function FeeSummary({ onTotalsChange }: { onTotalsChange: (values: any) => void }) {
    const { selectedYear, isLoading } = useYear();

    const baseData: FeeRow[] = [
        { id: 1, description: "Federal 1040", baseFee: 30 },
        { id: 2, description: "Federal 1040 NR", baseFee: 70 },
        { id: 3, description: "States", baseFee: 30 },
        { id: 4, description: "Local", baseFee: 30 },
        { id: 5, description: "SCH A", baseFee: 50 },
        { id: 6, description: "SCH B", baseFee: 20 },
        { id: 7, description: "SCH C", baseFee: 50 },
        { id: 8, description: "SCH D", baseFee: 30 },
        { id: 9, description: "SCH E", baseFee: 30 },
        { id: 10, description: "1098-T", baseFee: 10 },
        { id: 11, description: "1098-E", baseFee: 10 },
        { id: 12, description: "FBAR", baseFee: 20 },
        { id: 13, description: "FATCA", baseFee: 50 },
        { id: 14, description: "2441", baseFee: 10 },
        { id: 15, description: "843 Filing", baseFee: 20, noStatus: true },
        { id: 16, description: "ITIN W7", baseFee: 25, noStatus: true },
        { id: 17, description: "Extension", baseFee: 15, noStatus: true },
        { id: 18, description: "Audit Support & Protection Plan", baseFee: 50, noStatus: true },
        { id: 19, description: "2555 Filing", baseFee: 40, noStatus: true },
    ];

    const dynamicYear = selectedYear || new Date().getFullYear().toString();
    const dynamicYearRow: FeeRow = {
        id: 20,
        description: `Tax Filing ${dynamicYear}`,
        baseFee: 100,
        noStatus: true,
    };

    const [tableData, setTableData] = useState<FeeRow[]>([...baseData, dynamicYearRow]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isLoadingSummary, setIsLoadingSummary] = useState(true);

    const [totals, setTotals] = useState({
        totalFee: 0,
        discount: 0,
        referral: 0,
        feePaid: 0,
        dueAmount: 0,
        code: "",
        netFee: 0,
    });

    const handleTotalsChange = (values: typeof totals) => setTotals(values);

    useEffect(() => {
        const fetchExistingSummary = async () => {
            try {
                setIsLoadingSummary(true);

                const customer = await getCustomer();
                if (!customer?.customerId) {
                    console.warn("No customer found");
                    return;
                }

                const { data: filingYearRecord } = await supabase
                    .from("filing_year")
                    .select("filingYearId")
                    .eq("customerId", customer.customerId)
                    .eq("year", Number(dynamicYear))
                    .single();

                if (!filingYearRecord) {
                    console.warn("No filing year found, skipping fee summary fetch.");
                    return;
                }

                const filingYearId = filingYearRecord.filingYearId;

                const summaries = await getFeeSummary(filingYearId);

                if (summaries && summaries.length > 0) {
                    const latest = summaries[0];

                    const safeTotal = latest.totalAmount ?? latest.totalFee ?? 0;

                    setTotals({
                        totalFee: safeTotal,
                        discount: latest.discount ?? 0,
                        referral: latest.referral ?? 0,
                        feePaid: latest.feePaid ?? 0,
                        dueAmount: latest.dueAmount ?? 0,
                        code: latest.code ?? "",
                        netFee: latest.netFee ?? 0,
                    });

                } else {
                    console.warn("⚠️ No summary record found, setting zeros.");
                    setTotals({
                        totalFee: 0,
                        discount: 0,
                        referral: 0,
                        feePaid: 0,
                        dueAmount: 0,
                        code: "",
                        netFee: 0,
                    });
                }
            } catch (err: any) {
                toast.error("Error fetching fee summary:", err.message);
            } finally {
                setIsLoadingSummary(false);
            }
        };

        fetchExistingSummary();
    }, [selectedYear]);


    const handleSubmit = async () => {
        try {
            setIsSubmitting(true);

            const customer = await getCustomer();
            if (!customer?.customerId) throw new Error("Customer not found");

            const { data: filingYearRecord, error: filingError } = await supabase
                .from("filing_year")
                .select("filingYearId")
                .eq("customerId", customer.customerId)
                .eq("year", Number(dynamicYear))
                .single();

            if (filingError || !filingYearRecord)
                throw new Error(`Filing year record not found for ${dynamicYear}`);

            const filingYearId = filingYearRecord.filingYearId;

            const { totalFee, discount, referral, feePaid, dueAmount, code, netFee } = totals;

            const computedTotal =
                totalFee && totalFee > 0
                    ? totalFee
                    : tableData.reduce((sum, item) => sum + (item.total || item.baseFee || 0), 0);

            const feeSummary = await upsertFeeSummary({
                filingYearId,
                totalAmount: computedTotal,
                discount,
                referral,
                netFee,
                feePaid,
                dueAmount,
                code,
            });

            for (const row of tableData) {
                const calculatedTotal =
                    row.status && !row.noStatus ? row.baseFee * row.status : row.baseFee;

                await upsertFeeSummaryItem({
                    summaryId: feeSummary.summaryId,
                    description: row.description,
                    status: row.status ?? null,
                    fee: row.baseFee,
                    total: calculatedTotal,
                });
            }

            if (feePaid > 0) {
                await insertFeePayment({
                    summaryId: feeSummary.summaryId,
                    paymentDate: new Date().toISOString(),
                    amountPaid: feePaid,
                    paymentMode: "UPI",
                    transactionId: "TXN-" + Date.now(),
                    notes: "Initial payment entry",
                });
            }

            toast.success("Fee Summary saved successfully!");
        } catch (error: any) {
            console.error("Error submitting fee summary:", error.message);
            toast.error(error.message || "Something went wrong while saving the summary.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isLoading || isLoadingSummary) {
        return (
            <div className="flex justify-center items-center h-40">
                <p className="text-[#1D2B48] font-medium">Loading Fee Summary...</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center pb-7 bg-white overflow-y-auto">
            <h3 className="text-[#1D2B48] font-semibold text-lg mb-2">Fee Summary</h3>

            <FeeSummaryTable
                data={tableData}
                onTotalsChange={handleTotalsChange}
                onDataChange={setTableData}
                initialTotals={totals}
            />

            <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`px-4 py-2 mt-4 rounded-lg text-sm font-medium text-white ${isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-[#1D2B48] cursor-pointer"
                    }`}
            >
                {isSubmitting ? "Saving..." : "Submit"}
            </button>
        </div>
    );
}
