
import ThreeOptionToggle from "../../../../../../utils/threeOptionToggle";
import ToggleSwitch from "../../../../../../utils/toggleSwitch";

type DeductionAndRentProps = {
    hasHealthCoverage: boolean;
    setHasHealthCoverage: (val: boolean) => void;
    paidRent: boolean;
    setPaidRent: (val: boolean) => void;
    rentState: string;
    setRentState: (val: string) => void;
    rentAmount: string;
    setRentAmount: (val: string) => void;
};


export default function DeductionAndRent({
    hasHealthCoverage,
    setHasHealthCoverage,
    paidRent,
    setPaidRent,
    rentState,
    setRentState,
    rentAmount,
    setRentAmount,
}: DeductionAndRentProps) {

    const handleStateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value
        if (/^[a-zA-Z\s]*$/.test(val)) {
            setRentState(val)
        }
    }

    const handleRentAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value
        if (/^\d*$/.test(val)) {
            setRentAmount(val)
        }
    }

    return (
        <>
            <div className="bg-yellow-00 w-[100%] flex flex-col">
                <div className="bg-red-00 flex items-center gap-3">
                    <h3 className="text-[#1D2B48] font-semibold">Deduction Details :</h3>
                    <p className="text-[#3E3E3E] font-medium text-sm">Select the below listed deductions which will applicable for you in 2024</p>
                </div>
                <div className="bg-red-00 flex items-start gap-3 mt-5">
                    <h3 className="text-[#1D2B48] font-semibold">Deduction Details :</h3>
                    <div className="flex flex-col bg-green-00 gap-3">
                        <p className="text-[#3E3E3E] font-medium text-sm">Do you and your family(if any) have health coverage for the entire year 2024</p>
                        <ToggleSwitch
                            value={hasHealthCoverage}
                            onToggle={setHasHealthCoverage}
                        />

                    </div>
                </div>
                <div className="mt-3 w-[100%] flex flex-col bg-green-00">
                    <div className="flex items-center justify-between pr-15">
                        <h5 className="text-[#3E3E3E] font-medium text-sm">Did you pay rent to maintain residence in US?</h5>
                        <ToggleSwitch labelLeft="No" labelRight="Yes"
                            value={paidRent} onToggle={setPaidRent}
                        />
                    </div>
                    <div className="border border-[#9E9E9E] w-[100%] h-25 mt-3 flex flex-col justify-between rounded-md">
                        <div className="bg-pink-00 h-[35%] flex justify-between border-b-1 border-[#9E9E9E] rounded-t-md">
                            <div className="border-r-1 border-[#9E9E9E] rounded-l-lg w-[50%] h-[100%] flex items-center justify-center">
                                <h5 className="text-[#2F3F5F] font-semibold text-sm">STATE</h5>
                            </div>
                            <div className="w-[50%] h-[100%] flex items-center justify-center">
                                <h5 className="text-[#2F3F5F] font-semibold text-sm">RENT PAID</h5>
                            </div>
                        </div>
                        <div className="bg-indigo-00 h-[65%] rounded-b-md flex justify-between items-center">
                            <div className="w-[50%] h-[80%] bg-green-00 flex items-start justify-center">
                                <div className="bg-white shadow-md w-[70%] p-2 rounded-md flex items-center justify-center">
                                    <input
                                        type="text"
                                        value={rentState}
                                        onChange={handleStateChange}
                                        placeholder="STATE"
                                        className="focus:outline-none text-[#2F3F5F] text-sm w-[100%]"
                                    />
                                </div>
                            </div>
                            <div className="w-[50%] h-[80%] bg-red-00 flex items-start justify-center">
                                <div className="bg-white shadow-md w-[70%] p-2 rounded-md flex items-center justify-center">
                                    <input
                                        type="text"
                                        value={rentAmount}
                                        onChange={handleRentAmountChange}
                                        placeholder="RENT PAID"
                                        className="focus:outline-none text-[#2F3F5F] text-sm w-[100%]"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}