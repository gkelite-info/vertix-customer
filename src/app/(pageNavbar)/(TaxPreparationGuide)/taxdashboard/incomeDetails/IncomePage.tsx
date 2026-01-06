'use client'
import { useEffect, useState } from "react";
import IncomeDetails from "./income";
import Rest from "./rest";
import TaxPayerInfo from "./taxPayerInfo";
import { getIncomeDetails, upsertIncomeDetails } from "@/app/api/SupabaseAPI/customer/incomeDetails";
import toast from "react-hot-toast";
import { useYear } from "@/app/api/context/yearContext";
import { Tab } from "../aboutyou/aboutYou";
import { getSpouseIncomeDetails, upsertSpouseIncomeDetails } from "@/app/api/SupabaseAPI/customer/spouseIncomeDetailsAPI";

const defaultIncomeObject = {
    earnedWagesOrSalary: false,
    receivedBusinessEntityIncome: false,
    receivedContractOrGigIncome: false,
    hadRentalPropertyIncomeOrLoss: false,
    receivedHsaOrMsaDistribution: false,
    receivedIraDistribution: false,
    soldInvestments: false,
    hasWagesSalaryTipsTaxpayer: false,
    hasWagesSalaryTipsSpouse: false,
    receivedInterestIncome: false,
    receivedDividendIncome: false,
    receivedPriorYearStateRefund: false,
};

const defaultSpouseIncomeObject = {
    spouseEarnedWagesOrSalary: false,
    spouseReceivedBusinessEntityIncome: false,
    spouseReceivedContractOrGigIncome: false,
    spouseHadRentalPropertyIncomeOrLoss: false,
    spouseReceivedHsaOrMsaDistribution: false,
    spouseReceivedIraDistribution: false,
    spouseSoldInvestments: false,
    spouseReceivedInterestIncome: false,
    spouseReceivedDividendIncome: false,
    spouseReceivedPriorYearStateRefund: false,
};


type IncomeProps = {
    setActiveTab: (tab: Tab) => void;
};

type Buttontype = "Save" | "Next";

export default function SubIncomeDetails({ setActiveTab }: IncomeProps) {

    const [incomeDetails, setIncomeDetails] = useState<any[]>([
        defaultIncomeObject
    ]);
    const [spouseIncomeDetails, setSpouseIncomeDetails] = useState<any[]>([
        defaultSpouseIncomeObject
    ]);
    const [isLoading, setIsLoading] = useState(false);
    const [taxpayerEmployer, setTaxpayerEmployer] = useState<string[]>([]);
    const [spouseEmployer, setSpouseEmployer] = useState<string[]>([]);
    const [taxpayerCount, setTaxpayerCount] = useState(1);
    const [spouseCount, setSpouseCount] = useState(1);
    const [additionalIncome, setAdditionalIncome] = useState('')

    const { selectedYear, filingYearId } = useYear();

    useEffect(() => {
        if (filingYearId === null) return;

        const loadIncomeDetails = async () => {
            try {
                const record = await getIncomeDetails(filingYearId);
                const spouseRecord = await getSpouseIncomeDetails(filingYearId);

                if (record) {
                    setIncomeDetails([{
                        ...defaultIncomeObject,
                        ...record,
                    }]);

                    setTaxpayerEmployer(
                        Array.isArray(record.taxpayerEmployer) ? record.taxpayerEmployer : []
                    );
                    setSpouseEmployer(
                        Array.isArray(record.spouseEmployer) ? record.spouseEmployer : []
                    );

                    setTaxpayerCount(record.taxpayerEmployer?.length || 1);
                    setSpouseCount(record.spouseEmployer?.length || 1);
                    setAdditionalIncome(record.additionalIncome ?? "");
                } else {
                    setIncomeDetails([defaultIncomeObject]);
                }

                if (spouseRecord) {
                    setSpouseIncomeDetails([{
                        ...defaultSpouseIncomeObject,
                        ...spouseRecord,
                    }]);
                } else {
                    setSpouseIncomeDetails([defaultSpouseIncomeObject]);
                }

            } catch (err) {
                console.error("Failed to load income details", err);
                toast.error("Failed to load income details");
            }
        };

        loadIncomeDetails();
    }, [filingYearId]);



    const handleSave = async (button: Buttontype) => {
        setIsLoading(true);

        if (!filingYearId) {
            toast.error("Filing year not selected. Please try again.");
            return;
        }

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

            const spouseTouched =
                spouseIncomeDetails.length > 0 &&
                Object.keys(spouseIncomeDetails[0] || {}).length > 0;

            if (spouseTouched) {
                const spousePayload = spouseIncomeDetails.map((s) => ({
                    ...s,
                    filingYearId,
                }));

                await upsertSpouseIncomeDetails(spousePayload);
            }


            toast.success("Income details saved successfully.");
            if (button === "Next") {
                setActiveTab("Deduction Details");
            }
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

    const handleSpouseToggleChange = (
        index: number,
        field: string,
        value: boolean
    ) => {
        const updated = [...spouseIncomeDetails];
        if (!updated[index]) updated[index] = { ...defaultSpouseIncomeObject };
        updated[index] = { ...updated[index], [field]: value };
        setSpouseIncomeDetails(updated);
    };


    return (
        <>
            <div className="bg-yellow-00">
                <div className="flex flex-col items-start">
                    <div className="flex flex-col">
                        <h3 className="text-[#1D2B48] font-semibold text-md text-start">Income Details</h3>
                        <p className="text-[#585E68] text-xs mt-1 text-start">Select the income type that applies to you which was earned during {selectedYear}. you should report worldwide income if you are a US citizen, Green Card holder or a resident alien.</p>
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
                        spouseIncomeDetails={spouseIncomeDetails}
                        handleToggleChange={handleToggleChange}
                        handleSpouseToggleChange={handleSpouseToggleChange}
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
                            onClick={() => handleSave("Save")}
                            className="py-2 w-[13%] cursor-pointer bg-[#1D2A46] text-white rounded-md text-sm font-medium hover:bg-opacity-90"
                            disabled={isLoading}
                        >
                            {isLoading ? "Saving..." : "Save"}
                        </button>
                        <button
                            onClick={() => {
                                handleSave("Next")
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