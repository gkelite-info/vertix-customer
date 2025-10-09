
import ToggleSwitch from "../../../../../../utils/toggleSwitch";


export default function IncomeDetails() {
    return (
        <>
            <div className="bg-green-00 h-22 mt-2 w-[100%]">
                <div className="bg-red-00 border-b-1 border-[#1D2B48] h-[30%] w-[100%] flex items-center justify-between">
                    <div className="bg-red-00 h-[100%] w-[33%] flex items-center">
                        <h3 className="text-[#1D2B48] font-semibold text-sm">Income Details</h3>
                    </div>
                    <div className="bg-red-00 h-[100%] w-[33%] flex items-center justify-center">
                        <h3 className="text-[#1D2B48] font-semibold text-sm">Tax Payer</h3>
                    </div>
                    <div className="bg-red-00 h-[100%] w-[33%] flex items-center justify-center">
                        <h3 className="text-[#1D2B48] font-semibold text-sm">Spouse</h3>
                    </div>
                </div>
                <div className="bg-blue-00 h-[70%] flex justify-between">
                    <div className="bg-indigo-00 w-[33%] flex flex-col gap-2 justify-between pt-4">
                        <h4 className="text-[#585E68] text-xs text-start ml-1">Wages, Salary, Tips</h4>
                        <p style={{ fontSize: 10, color: "#1D2B48", fontWeight: '500' }}>Note : Please Upload W2 Form(S) in the Portal</p>
                    </div>
                    <div className="bg-indigo-00 w-[33%] flex items-center justify-center">
                        <ToggleSwitch labelLeft="No" labelRight="Yes" />
                    </div>
                    <div className="bg-indigo-00 w-[33%] flex items-center justify-center">
                        <ToggleSwitch labelLeft="No" labelRight="Yes" />
                    </div>
                </div>
            </div>
        </>
    )
}