
import ToggleSwitch from "../../../../../../utils/toggleSwitch";


export default function Contributions() {
    return (
        <>
            <div className="bg-red-00 w-[100%] mt-4 gap-2 flex flex-col">
                <div className="flex items-center justify-between py-1">
                    <h5 className="text-[#616161] font-medium text-sm">Did you pay cash charitable contributions in 2024?</h5>
                    <ToggleSwitch labelLeft="No" labelRight="Yes" />
                </div>
                <div className="flex items-center justify-between py-1">
                    <h5 className="text-[#616161] font-medium text-sm">Did you pay Non-cash charitable contributions in 2024?</h5>
                    <ToggleSwitch labelLeft="No" labelRight="Yes" />
                </div>
                <div className="flex items-center justify-between py-1 bg-green-00">
                    <h5 className="text-[#616161] font-medium text-sm">Did you contribute to IRA for the year 2024?</h5>
                    <ToggleSwitch labelLeft="No" labelRight="Yes" />
                </div>
                <div className="flex items-center justify-between py-1 bg-red-00">
                    <h5 className="text-[#616161] font-medium text-sm text-start">Did you make contributions to Health savings Account or Medical Savings Account ? (other than W2)</h5>
                    <ToggleSwitch labelLeft="No" labelRight="Yes" />
                </div>
                <div className="flex items-center justify-between py-1">
                    <h5 className="text-[#616161] font-medium text-sm">Did you pay Tution Fee to College in US in 2024?</h5>
                    <ToggleSwitch labelLeft="No" labelRight="Yes" />
                </div>
                <div className="flex items-center justify-between py-1">
                    <h5 className="text-[#616161] font-medium text-sm">Did you pay  state taxes due for prior years in current year 2024?</h5>
                    <ToggleSwitch labelLeft="No" labelRight="Yes" />
                </div>
                <div className="flex items-center justify-between py-1">
                    <h5 className="text-[#616161] font-medium text-sm">Do you have any bad debts?</h5>
                    <ToggleSwitch labelLeft="No" labelRight="Yes" />
                </div>
                <div className="bg-blue-00 w-[100%] mt-3 flex flex-col py-3 justify-between gap-2 text-start">
                    <label htmlFor="" className="text-sm text-[#3E3E3E] font-medium">Please provide if you have any additional expenses</label>
                    <textarea
                        className="border-1 border-[#9E9E9E] p-2 focus:outline-none rounded-md h-25 text-[#3E3E3E] text-xs"
                        rows={1}
                    />
                </div>
            </div>
        </>
    )
}