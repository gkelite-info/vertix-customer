
import ToggleSwitch from "../../../../../utils/toggleSwitch";


export default function FBAR_FATCA() {
    return (
        <>
            <div className="bg-red-00 flex flex-col items-center text-center">
                <h4 className="text-[#1D2B48] font-semibold text-md">FBAR (Foreign Bank Account Reporting) & FATCA Details</h4>
                <p className="text-[#585E68] font-medium text-xs w-[85%] mt-2">During the year 2024, did you or your spouse have financial interest or signature authority in financial account (such as bank account, securities, mutual funds, brokerage account) located in foreign country?</p>
                <div className="bg-blue-00 w-[100%] flex justify-center mt-5 gap-5">
                    <ToggleSwitch />
                    <button className="p-2 px-6 bg-[#1D2B48] rounded-md text-xs cursor-pointer hover:bg-[#2c3e65]">SUBMIT</button>
                </div>
            </div>
        </>
    )
}