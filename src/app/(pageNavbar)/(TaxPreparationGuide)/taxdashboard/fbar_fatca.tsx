'use client'
import { useYear } from "@/app/api/context/yearContext";
import ToggleSwitch from "../../../../../utils/toggleSwitch";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter, useSearchParams } from "next/navigation";
import { updateFilingYearWithDetails } from "@/app/api/SupabaseAPI/customer/fbarAPI";

type Tab =
    | "Deduction Details";

type FbarProps = {
    setActiveTab: (tab: Tab) => void;
};

export default function FBARFATCA({ setActiveTab }: FbarProps) {
    const router = useRouter();
    const searchParams = useSearchParams();

    const { selectedYear } = useYear();
    const [hasForeignAccount, setHasForeignAccount] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [exceededLimit, setExceededLimit] = useState<"yes" | "no" | "not_sure" | null>(null);


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

            if (!exceededLimit) {
                toast.error("Please select whether you exceeded the limits.");
                setIsSubmitting(false);
                return;
            }

            await updateFilingYearWithDetails(yearNumber, hasForeignAccount, exceededLimit);

            toast.success("FBAR/FATCA details successfully saved");
            return
        } catch (error: any) {
            toast.error(error?.message || "Failed to save FBAR/FATCA details");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <div className="bg-red-00 flex flex-col items-center text-center">
                <h4 className="text-[#1D2B48] font-semibold text-md">FBAR (Foreign Bank Account Reporting)</h4>
                <p className="text-[#585E68] font-medium text-xs w-[85%] mt-2 text-left">During the year {selectedYear}, did you or your spouse have financial interest or signature authority in financial account (such as bank account, securities, mutual funds, brokerage account) located in foreign country?</p>
                <div className="bg-blue-00 w-[100%] flex justify-center mt-5 gap-5">
                    <ToggleSwitch
                        value={hasForeignAccount}
                        labelLeft="No"
                        labelRight="Yes"
                        onToggle={handleToggle}
                    />
                </div>
                <div className="bg-red-00 w-full lg:mt-5 flex flex-col items-start text-left">
                    <h4 className="font-semibold text-[#1D2B48]">FATCA Check (FORM 8938)</h4>
                    <p className="text-black text-sm lg:mt-2">You may need to file FATCA if your <span className="text-[#1D2B48] font-semibold">foreign financial assets</span> exceeded these limits:</p>

                    <h4 className="font-semibold text-[#1D2B48] lg:mt-4">Living in the U.S.</h4>
                    <ul className="list-disc lg:mt-2 lg:ml-4 space-y-0">
                        <li className="text-sm text-black">Single / MFS: <span className="text-[#1D2B48] font-semibold">$50,000</span> (year-end) or <span className="text-[#1D2B48] font-semibold">$75,000</span> (anytime)</li>
                        <li className="text-sm text-black lg:mt-1">MFJ: <span className="text-[#1D2B48] font-semibold">$100,000</span> (year-end) or <span className="text-[#1D2B48] font-semibold">$150,000</span> (anytime)</li>
                    </ul>

                    <h4 className="font-semibold text-[#1D2B48] lg:mt-4">Living outside the U.S.</h4>
                    <ul className="list-disc lg:mt-2 lg:ml-4 space-y-0">
                        <li className="text-sm text-black">Single / MFS: <span className="text-[#1D2B48] font-semibold">$200,000</span> (year-end) or <span className="text-[#1D2B48] font-semibold">$300,000</span> (anytime)</li>
                        <li className="text-sm text-black lg:mt-1">MFJ: <span className="text-[#1D2B48] font-semibold">$400,000</span> (year-end) or <span className="text-[#1D2B48] font-semibold">$600,000</span> (anytime)</li>
                    </ul>

                    <h4 className="font-semibold text-[#1D2B48] lg:mt-4">Did you exceed the limits?</h4>
                    <div className="flex gap-6 lg:mt-3">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={exceededLimit === "yes"}
                                onChange={() => setExceededLimit("yes")}
                                className="accent-[#1D2B48]"
                            />
                            <span className="text-sm text-black">Yes</span>
                        </label>

                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={exceededLimit === "no"}
                                onChange={() => setExceededLimit("no")}
                                className="accent-[#1D2B48]"
                            />
                            <span className="text-sm text-black">No</span>
                        </label>
                    </div>

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