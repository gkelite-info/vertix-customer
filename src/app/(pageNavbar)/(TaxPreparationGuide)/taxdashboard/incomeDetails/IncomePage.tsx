'use client'
import { useEffect, useState } from "react";
import IncomeDetails from "./income";
import Rest from "./rest";
import TaxPayerInfo from "./taxPayerInfo";
import { upsertIncomeDetails } from "@/app/api/SupabaseAPI/customer/incomeDetails";
import toast from "react-hot-toast";
import { useYear } from "@/app/api/context/yearContext";
import { Tab } from "../aboutyou/aboutYou";

const defaultIncomeObject = {
    earnedWagesOrSalary: false,
    receivedBusinessEntityIncome: false,
    receivedContractOrGigIncome: false,
    hadRentalPropertyIncomeOrLoss: false,
    receivedHsaOrMsaDistribution: false,
    receivedIraDistribution: false,
    soldInvestments: false,
    receivedInterestIncome: false,
    receivedDividendIncome: false,
    receivedPriorYearStateRefund: false,
};

type IncomeProps = {
    setActiveTab: (tab: Tab) => void;
};

export default function SubIncomeDetails({ setActiveTab }: IncomeProps) {

    const [incomeDetails, setIncomeDetails] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [taxpayerEmployer, setTaxpayerEmployer] = useState<string[]>([]);
    const [spouseEmployer, setSpouseEmployer] = useState<string[]>([]);
    const [taxpayerCount, setTaxpayerCount] = useState(1);
    const [spouseCount, setSpouseCount] = useState(1);
    const [additionalIncome, setAdditionalIncome] = useState('')

    const { selectedYear, filingYearId } = useYear();

    useEffect(() => {
        if (incomeDetails.length === 0) {
            setIncomeDetails([defaultIncomeObject]);
        }
    }, []);

    const handleSave = async () => {
        setIsLoading(true);
        try {
            const updatedIncomeDetails = [...incomeDetails];
             if (!updatedIncomeDetails[0]) {
                updatedIncomeDetails[0] = { ...defaultIncomeObject };
            } else {
                updatedIncomeDetails[0] = {
                    ...defaultIncomeObject,
                    ...updatedIncomeDetails[0],
                };
            }
            // if (updatedIncomeDetails.length === 0) updatedIncomeDetails[0] = {};
            updatedIncomeDetails[0] = {
                ...updatedIncomeDetails[0],
                filingYearId,
                taxpayerEmployer,
                spouseEmployer,
                additionalIncome
            };

            await upsertIncomeDetails(updatedIncomeDetails);
            toast.success("Income details saved successfully.");
        } catch (error) {
            toast.error("Failed to save income details.");
            console.error(error);
        }
        finally {
            setIsLoading(false);
            return
        }
    };

    const handleToggleChange = (
        index: number,
        field: string,
        value: boolean
    ) => {
        const updated = [...incomeDetails];
        if (!updated[index]) updated[index] = { ...defaultIncomeObject };
        updated[index] = { ...updated[index], [field]: value };
        setIncomeDetails(updated);
    };

    return (
        <>
            <div className="bg-yellow-00">
                <div className="flex flex-col items-start">
                    <div className="flex flex-col">
                        <h3 className="text-[#1D2B48] font-semibold text-md text-start">Income Details</h3>
                        <p className="text-[#585E68] text-xs mt-1 text-start">Select the income type that applies to you which was earned during {selectedYear}. you should report worldwide income f you are a US citizen, Green Card holder or a resident alien.</p>
                    </div>
                    <IncomeDetails
                        incomeDetails={incomeDetails}
                        setIncomeDetails={setIncomeDetails}
                        handleToggleChange={handleToggleChange}
                        setActiveTab={setActiveTab}
                        setTaxpayerCount={setTaxpayerCount}
                        setSpouseCount={setSpouseCount}
                    />

                    <TaxPayerInfo
                        taxpayerEmployer={taxpayerEmployer}
                        setTaxpayerEmployer={setTaxpayerEmployer}
                        spouseEmployer={spouseEmployer}
                        setSpouseEmployer={setSpouseEmployer}
                        taxpayerCount={taxpayerCount}
                        spouseCount={spouseCount}
                    />

                    <Rest
                        incomeDetails={incomeDetails}
                        handleToggleChange={handleToggleChange}
                        additionalIncome={additionalIncome}
                        setAdditionalIncome={setAdditionalIncome}
                    />
                    <div className="flex justify-center w-[100%] gap-3 mt-6">
                        <button
                            onClick={() => setActiveTab("Residency Details")}
                            className="py-2 w-[13%] cursor-pointer bg-[#1D2A46] text-white rounded-md text-sm font-medium hover:bg-opacity-90">
                            Previous
                        </button>
                        <button
                            onClick={handleSave}
                            className="py-2 w-[13%] cursor-pointer bg-[#1D2A46] text-white rounded-md text-sm font-medium hover:bg-opacity-90"
                            disabled={isLoading}
                        >
                            {isLoading ? "Saving..." : "Save"}
                        </button>
                        <button
                            onClick={() => {
                                handleSave()
                                setActiveTab("Deduction Details")
                            }}
                            className="py-2 w-[13%] cursor-pointer bg-[#1D2A46] text-white rounded-md text-sm font-medium hover:bg-opacity-90">
                            Next
                        </button>
                    </div>
                </div>
            </div >
        </>
    )
}