'use client'

import { useState } from "react";
import Contributions from "./contributions";
import DeductionAndRent from "./deduction";
import MedicalExpenses from "./medicalExpenses";
import { upsertDeductionDetails } from "@/app/api/SupabaseAPI/customer/deductions";
import toast from "react-hot-toast";
import { useYear } from "@/app/api/context/yearContext";

type Tab = "Income Details" | "Deduction Details" | "FBAR/FATCA";

type DeductionProps = {
    setActiveTab: (tab: Tab) => void;
};

export interface DeductionsInput {
    hasHealthCoverage: boolean;
    paidRent: boolean;
    rentState?: string | null;
    rentAmount?: string | null;

    ownHomeUSA: boolean;
    ownHomeAbroad: boolean;
    familyInsurance: boolean;
    medicalExpenses: boolean;
    paidPropertyTax: boolean;
    propertyTaxName?: string | null;
    propertyTaxDescription?: string | null;
    propertyTaxAmount?: string | null;
    cashCharity: boolean;

    contributedIRA: boolean;
    contributedHSA: boolean;
    paidTuition: boolean;
    paidPriorStateTaxes: boolean;
    haveBadDebts: boolean;
    additionalExpenses?: string | null;
    studentLoanUS: boolean;
    filingYearId: number | null;

}

export default function DeductionDetails({ setActiveTab }: DeductionProps) {
    const [loading, setLoading] = useState(false);
    const { filingYearId } = useYear();

    const [hasHealthCoverage, setHasHealthCoverage] = useState<boolean>(false);
    const [paidRent, setPaidRent] = useState(false);
    const [rentState, setRentState] = useState("");
    const [rentAmount, setRentAmount] = useState<string>("");

    const [ownHomeUSA, setOwnHomeUSA] = useState(false);
    const [ownHomeAbroad, setOwnHomeAbroad] = useState(false);
    const [familyInsurance, setFamilyInsurance] = useState(false);
    const [medicalExpenses, setMedicalExpenses] = useState(false);
    const [paidPropertyTax, setPaidPropertyTax] = useState(false);
    const [propertyTaxName, setPropertyTaxName] = useState("");
    const [propertyTaxDescription, setPropertyTaxDescription] = useState("");
    const [propertyTaxAmount, setPropertyTaxAmount] = useState<string>("");

    const [cashCharity, setCashCharity] = useState(false);
    const [contributedIRA, setContributedIRA] = useState(false);
    const [contributedHSA, setContributedHSA] = useState(false);
    const [paidTuition, setPaidTuition] = useState(false);
    const [paidPriorStateTaxes, setPaidPriorStateTaxes] = useState(false);
    const [haveBadDebts, setHaveBadDebts] = useState(false);
    const [additionalExpenses, setAdditionalExpenses] = useState("");
    const [studentLoanUS, setStudentLoanUS] = useState(false);

    const handleSave = async () => {
        const dataToSave: DeductionsInput = {
            hasHealthCoverage,
            paidRent,
            rentState: rentState || null,
            rentAmount: rentAmount || null,

            ownHomeUSA,
            ownHomeAbroad,
            familyInsurance,
            medicalExpenses,
            paidPropertyTax,
            propertyTaxName: propertyTaxName || null,
            propertyTaxDescription: propertyTaxDescription || null,
            propertyTaxAmount: propertyTaxAmount || null,

            contributedIRA,
            contributedHSA,
            cashCharity,
            studentLoanUS,
            paidTuition,
            paidPriorStateTaxes,
            haveBadDebts,
            additionalExpenses: additionalExpenses || null,
            filingYearId: filingYearId

        };
        setLoading(true);
        try {
            await upsertDeductionDetails([dataToSave]);
            toast.success("Deduction details saved successfully!");
        } catch (err) {
            toast.error("Failed to save deduction details.");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-red-00">
            <DeductionAndRent
                hasHealthCoverage={hasHealthCoverage}
                setHasHealthCoverage={setHasHealthCoverage}
                paidRent={paidRent}
                setPaidRent={setPaidRent}
                rentState={rentState}
                setRentState={setRentState}
                rentAmount={rentAmount}
                setRentAmount={setRentAmount}
            />
            <MedicalExpenses
                ownHomeUSA={ownHomeUSA}
                setOwnHomeUSA={setOwnHomeUSA}
                ownHomeAbroad={ownHomeAbroad}
                setOwnHomeAbroad={setOwnHomeAbroad}
                familyInsurance={familyInsurance}
                setFamilyInsurance={setFamilyInsurance}
                medicalExpenses={medicalExpenses}
                setMedicalExpenses={setMedicalExpenses}
                paidPropertyTax={paidPropertyTax}
                setPaidPropertyTax={setPaidPropertyTax}
                propertyTaxName={propertyTaxName}
                setPropertyTaxName={setPropertyTaxName}
                propertyTaxDescription={propertyTaxDescription}
                setPropertyTaxDescription={setPropertyTaxDescription}
                propertyTaxAmount={propertyTaxAmount}
                setPropertyTaxAmount={setPropertyTaxAmount}
            />
            <Contributions
                contributedIRA={contributedIRA}
                setContributedIRA={setContributedIRA}
                contributedHSA={contributedHSA}
                setContributedHSA={setContributedHSA}
                cashCharity={cashCharity}
                setCashCharity={setCashCharity}
                studentLoanUS={studentLoanUS}
                setStudentLoanUS={setStudentLoanUS}
                paidTuition={paidTuition}
                setPaidTuition={setPaidTuition}
                paidPriorStateTaxes={paidPriorStateTaxes}
                setPaidPriorStateTaxes={setPaidPriorStateTaxes}
                haveBadDebts={haveBadDebts}
                setHaveBadDebts={setHaveBadDebts}
                additionalExpenses={additionalExpenses}
                setAdditionalExpenses={setAdditionalExpenses}

            />

            <div className="flex justify-center w-full gap-3 mt-6">
                <button
                    onClick={() => setActiveTab("Income Details")}
                    className="py-2 w-[13%] cursor-pointer bg-[#1D2A46] text-white rounded-md text-sm font-medium hover:bg-opacity-90"
                >
                    Previous
                </button>
                <button
                    onClick={handleSave}
                    className="py-2 w-[13%] cursor-pointer bg-[#1D2A46] text-white rounded-md text-sm font-medium hover:bg-opacity-90"
                    disabled={loading}
                >
                    {loading ? "Saving..." : "Save"}
                </button>
                <button
                    onClick={() => setActiveTab("FBAR/FATCA")}
                    className="py-2 w-[13%] cursor-pointer bg-[#1D2A46] text-white rounded-md text-sm font-medium hover:bg-opacity-90"
                >
                    Next
                </button>
            </div>
        </div>
    );
}
