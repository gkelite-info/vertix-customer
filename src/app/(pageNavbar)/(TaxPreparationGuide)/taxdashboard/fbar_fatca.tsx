'use client'
import { useYear } from "@/app/api/context/yearContext";
import ToggleSwitch from "../../../../../utils/toggleSwitch";
import { useState } from "react";
import { upsertFbarFatcaAndFilingYear } from "@/app/api/SupabaseAPI/customer/fbarAPI";
import toast from "react-hot-toast";
import { useRouter, useSearchParams } from "next/navigation";

type Tab =
    | "Deduction Details";

type FbarProps = {
    setActiveTab: (tab: Tab) => void;
};

export default function FBAR_FATCA({ setActiveTab }: FbarProps) {
    const router = useRouter();
    const searchParams = useSearchParams();

    const { selectedYear } = useYear();
    const [hasForeignAccount, setHasForeignAccount] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleToggle = (newValue: boolean) => {
        setHasForeignAccount(newValue);
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);
        try {
            const yearNumber = Number(selectedYear);

            if (isNaN(yearNumber) || yearNumber <= 0) {
                throw new Error("Invalid year selected");
            }

            await upsertFbarFatcaAndFilingYear(yearNumber, hasForeignAccount);

            toast.success("FBAR/FATCA details successfully saved");
        } catch (error: any) {
            toast.error(error?.message || "Failed to save FBAR/FATCA details");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <div className="bg-red-00 flex flex-col items-center text-center">
                <h4 className="text-[#1D2B48] font-semibold text-md">FBAR (Foreign Bank Account Reporting) & FATCA Details</h4>
                <p className="text-[#585E68] font-medium text-xs w-[85%] mt-2">During the year {selectedYear}, did you or your spouse have financial interest or signature authority in financial account (such as bank account, securities, mutual funds, brokerage account) located in foreign country?</p>
                <div className="bg-blue-00 w-[100%] flex justify-center mt-5 gap-5">
                    <ToggleSwitch
                        value={hasForeignAccount}
                        labelLeft="No"
                        labelRight="Yes"
                        onToggle={handleToggle}
                    />
                </div>
                <div className="flex justify-center w-[100%] gap-3 mt-6">
                    <button
                        onClick={() => setActiveTab("Deduction Details")}
                        className="p-2 lg:w-[13%] bg-[#1D2B48] rounded-md text-white text-sm cursor-pointer cursor-pointer font-medium">Previous</button>
                    <button
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className="p-2 lg:w-[13%] bg-[#1D2B48] rounded-md text-white text-sm cursor-pointer cursor-pointer font-medium">
                        {isSubmitting ? "Submitting" : "Submit"}
                    </button>
                </div>
            </div>
        </>
    )
}