'use client'

import { useState } from "react";
import Contributions from "./contributions";
import DeductionAndRent from "./deduction";
import MedicalExpenses from "./medicalExpenses";
import { upsertDeductionDetails } from "@/app/api/SupabaseAPI/customer/deductions";
import toast from "react-hot-toast";

type Tab = "Income Details" | "Deduction Details" | "FBAR/FATCA";

type DeductionProps = {
    setActiveTab: (tab: Tab) => void;
};

export interface DeductionsInput {
    hasHealthCoverage: boolean;
    paidRent: boolean;
    rentState?: string | null;
    rentAmount?: number | null;
    incurredMedicalExpenses: boolean;
    ownHomeUSA: boolean;
    ownHomeAbroad: boolean;
    paidPropertyTax: boolean;
    propertyTaxName?: string | null;
    propertyTaxDescription?: string | null;
    propertyTaxAmount?: number | null;
    paidCashCharity: boolean;
    paidNonCashCharity: boolean;
    contributedIRA: boolean;
    contributedHSA: boolean;
    paidTuition: boolean;
    paidPriorStateTaxes: boolean;
    haveBadDebts: boolean;
    additionalExpenses?: string | null;
}

export default function DeductionDetails({ setActiveTab }: DeductionProps) {
    const [loading, setLoading] = useState(false);

    const [hasHealthCoverage, setHasHealthCoverage] = useState<boolean>(false);
    const [paidRent, setPaidRent] = useState(false);
    const [rentState, setRentState] = useState("");
    const [rentAmount, setRentAmount] = useState<string>("");

    const [incurredMedicalExpenses, setIncurredMedicalExpenses] = useState(false);
    const [ownHomeUSA, setOwnHomeUSA] = useState(false);
    const [ownHomeAbroad, setOwnHomeAbroad] = useState(false);
    const [paidPropertyTax, setPaidPropertyTax] = useState(false);
    const [propertyTaxName, setPropertyTaxName] = useState("");
    const [propertyTaxDescription, setPropertyTaxDescription] = useState("");
    const [propertyTaxAmount, setPropertyTaxAmount] = useState<string>("");

    const [paidCashCharity, setPaidCashCharity] = useState(false);
    const [paidNonCashCharity, setPaidNonCashCharity] = useState(false);
    const [contributedIRA, setContributedIRA] = useState(false);
    const [contributedHSA, setContributedHSA] = useState(false);
    const [paidTuition, setPaidTuition] = useState(false);
    const [paidPriorStateTaxes, setPaidPriorStateTaxes] = useState(false);
    const [haveBadDebts, setHaveBadDebts] = useState(false);
    const [additionalExpenses, setAdditionalExpenses] = useState("");

    const handleSave = async () => {
        const dataToSave: DeductionsInput = {
            hasHealthCoverage,
            paidRent,
            rentState: rentState || null,
            rentAmount: rentAmount === "" ? null : Number(rentAmount),
            incurredMedicalExpenses,
            ownHomeUSA,
            ownHomeAbroad,
            paidPropertyTax,
            propertyTaxName: propertyTaxName || null,
            propertyTaxDescription: propertyTaxDescription || null,
            propertyTaxAmount: propertyTaxAmount === "" ? null : Number(propertyTaxAmount),
            paidCashCharity,
            paidNonCashCharity,
            contributedIRA,
            contributedHSA,
            paidTuition,
            paidPriorStateTaxes,
            haveBadDebts,
            additionalExpenses: additionalExpenses || null,
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
                incurredMedicalExpenses={incurredMedicalExpenses}
                setIncurredMedicalExpenses={setIncurredMedicalExpenses}
                ownHomeUSA={ownHomeUSA}
                setOwnHomeUSA={setOwnHomeUSA}
                ownHomeAbroad={ownHomeAbroad}
                setOwnHomeAbroad={setOwnHomeAbroad}
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
                cashCharity={paidCashCharity}
                setCashCharity={setPaidCashCharity}
                nonCashCharity={paidNonCashCharity}
                setNonCashCharity={setPaidNonCashCharity}
                contributedIRA={contributedIRA}
                setContributedIRA={setContributedIRA}
                contributedHSA={contributedHSA}
                setContributedHSA={setContributedHSA}
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
                    Pervious
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
