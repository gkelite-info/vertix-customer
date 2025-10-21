
import { useYear } from "@/app/api/context/yearContext";
import ToggleSwitch from "../../../../../utils/toggleSwitch";

type Tab =
    | "Deduction Details";

type FbarProps = {
    setActiveTab: (tab: Tab) => void;
};

export default function FBAR_FATCA({ setActiveTab }: FbarProps) {

    const { selectedYear } = useYear();

    return (
        <>
            <div className="bg-red-00 flex flex-col items-center text-center">
                <h4 className="text-[#1D2B48] font-semibold text-md">FBAR (Foreign Bank Account Reporting) & FATCA Details</h4>
                <p className="text-[#585E68] font-medium text-xs w-[85%] mt-2">During the year {selectedYear}, did you or your spouse have financial interest or signature authority in financial account (such as bank account, securities, mutual funds, brokerage account) located in foreign country?</p>
                <div className="bg-blue-00 w-[100%] flex justify-center mt-5 gap-5">
                    <ToggleSwitch />
                </div>
                <div className="flex justify-center w-[100%] gap-3 mt-6">
                    <button
                        onClick={() => setActiveTab("Deduction Details")}
                        className="p-2 lg:w-[13%] bg-[#1D2B48] rounded-md text-white text-sm cursor-pointer cursor-pointer font-medium">Pervious</button>
                    <button className="p-2 lg:w-[13%] bg-[#1D2B48] rounded-md text-white text-sm cursor-pointer cursor-pointer font-medium">Submit</button>
                </div>
            </div>
        </>
    )
}