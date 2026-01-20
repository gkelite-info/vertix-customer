'use client'

import { useEffect, useState } from "react";
import Contributions from "./contributions";
import DeductionAndRent from "./deduction";
import MedicalExpenses from "./medicalExpenses";
import { getDeductionDetails, upsertDeductionDetails } from "@/app/api/SupabaseAPI/customer/deductions";
import toast from "react-hot-toast";
import { useYear } from "@/app/api/context/yearContext";
import { isFbarFatcaSubmitted } from "@/app/api/SupabaseAPI/customer/fbarAPI";

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

type Buttontype = "Save" | "Next";

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
    const [isLoading, setIsLoading] = useState(false)
    const [isLocked, setIsLocked] = useState(false);
    const [checkingStatus, setCheckingStatus] = useState(true);

    useEffect(() => {
        checkYearLockStatus();
    }, [filingYearId]);

    const checkYearLockStatus = async () => {
        try {
            setCheckingStatus(true);

            const yearNumber = Number(filingYearId);
            if (!yearNumber) return;

            const alreadySubmitted = await isFbarFatcaSubmitted(yearNumber);
            setIsLocked(alreadySubmitted);
        } catch (error) {
            console.error("Failed to check year lock status:", error);
        } finally {
            setCheckingStatus(false);
        }
    };
    const handleSave = async (button: Buttontype) => {

        if (!filingYearId) {
            toast.error("Filing year not selected. Please try again.");
            return;
        }

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
        try {
            setLoading(true);
            await upsertDeductionDetails([dataToSave]);

            // if (res?.alreadyExists) {
            //     toast.error("Data already exists");
            //     return;
            // }

            toast.success("Deduction details saved successfully!");
            await fetchDeductionDetails();
            if (button === "Next") {
                setActiveTab("FBAR/FATCA");
            }
        } catch (err) {
            toast.error("Failed to save deduction details.");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const fetchDeductionDetails = async () => {
        try {
            setIsLoading(true)
            const data = await getDeductionDetails();

            if (!data?.length) return;

            const d = data[0];

            setHasHealthCoverage(d.hasHealthCoverage);
            setPaidRent(d.paidRent);
            setRentState(d.rentState ?? "");
            setRentAmount(d.rentAmount ?? "");

            setOwnHomeUSA(d.ownHomeUSA);
            setOwnHomeAbroad(d.ownHomeAbroad);
            setFamilyInsurance(d.familyInsurance);
            setMedicalExpenses(d.medicalExpenses);
            setPaidPropertyTax(d.paidPropertyTax);
            setPropertyTaxName(d.propertyTaxName ?? "");
            setPropertyTaxDescription(d.propertyTaxDescription ?? "");
            setPropertyTaxAmount(d.propertyTaxAmount ?? "");

            setCashCharity(d.cashCharity);
            setContributedIRA(d.contributedIRA);
            setContributedHSA(d.contributedHSA);
            setPaidTuition(d.paidTuition);
            setPaidPriorStateTaxes(d.paidPriorStateTaxes);
            setHaveBadDebts(d.haveBadDebts);
            setAdditionalExpenses(d.additionalExpenses ?? "");
            setStudentLoanUS(d.studentLoanUS);
        } catch (err) {
            console.error("Failed to fetch deduction details", err);
            toast.error("Failed to fetch deduction details")
        } finally {
            setIsLoading(false)
        }
    };

    useEffect(() => {
        fetchDeductionDetails();
    }, []);


    if (isLoading || checkingStatus) {
        return (
            <div className="flex justify-center items-center text-[#1D2B48] min-h-[70vh]">
                <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }


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
                isLocked={isLocked}
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
                isLocked={isLocked}
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
                isLocked={isLocked}
            />

            <div className="flex justify-center w-full gap-3 mt-6">
                <button
                    onClick={() => setActiveTab("Income Details")}
                    className="py-2 w-[13%] cursor-pointer bg-[#1D2A46] text-white rounded-md text-sm font-medium hover:bg-opacity-90"
                >
                    Previous
                </button>
                <button
                    onClick={() => handleSave("Save")}
                    className="py-2 w-[13%] cursor-pointer bg-[#1D2A46] text-white rounded-md text-sm font-medium hover:bg-opacity-90"
                    disabled={loading || isLocked}
                    style={{
                        cursor: isLocked ? "not-allowed" : "pointer"
                    }}
                >
                    {loading ? "Saving..." : "Save"}
                </button>
                <button
                    onClick={() =>
                        handleSave("Next")
                    }
                    disabled={loading || isLocked}
                    style={{
                        cursor: isLocked ? "not-allowed" : "pointer"
                    }}
                    className="py-2 w-[13%] cursor-pointer bg-[#1D2A46] text-white rounded-md text-sm font-medium hover:bg-opacity-90"
                >
                    Next
                </button>
            </div>
        </div>
    );
}
