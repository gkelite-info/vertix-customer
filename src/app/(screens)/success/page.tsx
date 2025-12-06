"use client";

import { getFeeSummaryById } from "@/app/api/SupabaseAPI/customer/feeSummaryAPI";
import { acceptPaymentSummary } from "@/app/api/SupabaseAPI/customer/paymentTaxSummaryAPI";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function SuccessPage() {
    const searchParams = useSearchParams();
    const summaryId = searchParams.get("summaryId");

    const [summary, setSummary] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    const hasRun = useRef(false);

    useEffect(() => {
        const loadSummary = async () => {
            if (hasRun.current) return;
            hasRun.current = true;

            if (!summaryId) {
                setLoading(false);
                return;
            }

            try {
                const summaryData = await getFeeSummaryById(Number(summaryId));
                setSummary(summaryData);

                await acceptPaymentSummary(Number(summaryId));
            } catch (err) {
                console.error("Error loading summary:", err); 
            } finally {
                setLoading(false);
            }
        };

        loadSummary();
    }, [summaryId]);



    if (!summaryId) {
        return (
            <div className="bg-white h-screen flex flex-col items-center justify-center gap-2 p-4 text-center text-red-600">
                <h2 className="text-xl font-bold">Invalid Payment</h2>
                <p>No summary ID was provided.</p>
            </div>
        );
    }

    if (loading) {
        return (
            <div className="bg-white flex flex-col gap-5 items-center justify-center h-screen p-4 text-center">
                <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-black">Loading payment details...</p>
            </div>
        );
    }

    if (!summary) {
        return (
            <div className="bg-white p-4 h-screen flex flex-col gap-2 items-center justify-center text-center">
                <h2 className="text-xl font-bold text-green-600">Payment Completed</h2>
                <p className="text-green-600">Payment succeeded but summary could not be found.</p>
            </div>
        );
    }

    return (
        <div className="p-6 pt-0 bg-white text-[#1D2B48] h-screen rounded shadow flex flex-col items-center justify-start">
            <div className="flex flex-col items-center justify-center">
                <video
                    src="/success.mp4"
                    autoPlay
                    muted
                    className="lg:w-[50%]"
                ></video>
                <h1 className="text-2xl font-bold text-green-600 text-center">
                    Payment Succeeded!
                </h1>
            </div>

            <div className="mt-6 text-center">
                <a
                    href="/"
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    Go Home
                </a>
            </div>
        </div>
    );
}
