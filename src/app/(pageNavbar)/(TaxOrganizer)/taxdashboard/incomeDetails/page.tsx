import IncomeDetails from "./income";
import Rest from "./rest";
import TaxPayerInfo from "./taxPayerInfo";



export default function Page() {
    return (
        <>
            <div className="bg-red-00 ">
                <div className="flex flex-col items-start">
                    <div className="flex flex-col">
                        <h3 className="text-[#1D2B48] font-semibold text-md">Income Details</h3>
                        <p className="text-[#585E68] text-xs mt-1">Select the income type that applies to you which was earned during 2024. you should report worldwide income f you are a US citizen, Green Card holder or a resident alien.</p>
                    </div>
                    <IncomeDetails />
                    <TaxPayerInfo />
                    <Rest />
                </div>
            </div>
        </>
    )
}