
import Contributions from "./contributions";
import DeductionAndRent from "./deduction";
import MedicalExpenses from "./medicalExpenses";

type Tab =
    | "Income Details"
    | "Deduction Details"
    | "FBAR/FATCA";

type DeductionProps = {
    setActiveTab: (tab: Tab) => void;
};

export default function DeductionDetails({ setActiveTab }: DeductionProps) {
    return (
        <>
            <div className="bg-red-00">
                <DeductionAndRent />
                <MedicalExpenses />
                <Contributions />
                <div className="flex justify-center w-[100%] gap-3 mt-6">
                    <button
                        onClick={() => setActiveTab("Income Details")}
                        className="py-2 w-[13%] cursor-pointer bg-[#1D2A46] text-white rounded-md text-sm font-medium hover:bg-opacity-90">
                        Previous
                    </button>
                    <button
                        className="py-2 w-[13%] cursor-pointer bg-[#1D2A46] text-white rounded-md text-sm font-medium hover:bg-opacity-90">
                        Save
                    </button>
                    <button
                        onClick={() => setActiveTab("FBAR/FATCA")}
                        className="py-2 w-[13%] cursor-pointer bg-[#1D2A46] text-white rounded-md text-sm font-medium hover:bg-opacity-90">
                        Next
                    </button>
                </div>
            </div>
        </>
    )
}