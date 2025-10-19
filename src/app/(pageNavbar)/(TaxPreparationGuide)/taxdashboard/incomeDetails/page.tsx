import IncomeDetails from "./income";
import Rest from "./rest";
import TaxPayerInfo from "./taxPayerInfo";

type Tab =
    | "Residency Details"
    | "Income Details"
    | "Deduction Details"

type IncomeProps = {
    setActiveTab: (tab: Tab) => void;
};

export default function IndomeDetails({ setActiveTab }: IncomeProps) {
    return (
        <>
            <div className="bg-yellow-00">
                <div className="flex flex-col items-start">
                    <div className="flex flex-col">
                        <h3 className="text-[#1D2B48] font-semibold text-md text-start">Income Details</h3>
                        <p className="text-[#585E68] text-xs mt-1 text-start">Select the income type that applies to you which was earned during 2024. you should report worldwide income f you are a US citizen, Green Card holder or a resident alien.</p>
                    </div>
                    <IncomeDetails />
                    <TaxPayerInfo />
                    <Rest />
                    <div className="flex justify-center w-[100%] gap-3 mt-6">
                        <button
                            onClick={() => setActiveTab("Residency Details")}
                            className="py-2 w-[13%] cursor-pointer bg-[#1D2A46] text-white rounded-md text-sm font-medium hover:bg-opacity-90">
                            Previous
                        </button>
                        <button
                            className="py-2 w-[13%] cursor-pointer bg-[#1D2A46] text-white rounded-md text-sm font-medium hover:bg-opacity-90">
                            Save
                        </button>
                        <button
                            onClick={() => setActiveTab("Deduction Details")}
                            className="py-2 w-[13%] cursor-pointer bg-[#1D2A46] text-white rounded-md text-sm font-medium hover:bg-opacity-90">
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}