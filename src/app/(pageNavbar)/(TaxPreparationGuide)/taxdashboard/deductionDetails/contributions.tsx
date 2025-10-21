
import { useYear } from "@/app/api/context/yearContext";
import ToggleSwitch from "../../../../../../utils/toggleSwitch";

type ContributionsProps = {
    cashCharity: boolean;
    setCashCharity: (val: boolean) => void;
    nonCashCharity: boolean;
    setNonCashCharity: (val: boolean) => void;
    contributedIRA: boolean;
    setContributedIRA: (val: boolean) => void;
    contributedHSA: boolean;
    setContributedHSA: (val: boolean) => void;
    paidTuition: boolean;
    setPaidTuition: (val: boolean) => void;
    paidPriorStateTaxes: boolean;
    setPaidPriorStateTaxes: (val: boolean) => void;
    haveBadDebts: boolean;
    setHaveBadDebts: (val: boolean) => void;
    additionalExpenses: string;
    setAdditionalExpenses: (val: string) => void;
};

export default function Contributions({
    cashCharity,
    setCashCharity,
    nonCashCharity,
    setNonCashCharity,
    contributedIRA,
    setContributedIRA,
    contributedHSA,
    setContributedHSA,
    paidTuition,
    setPaidTuition,
    paidPriorStateTaxes,
    setPaidPriorStateTaxes,
    haveBadDebts,
    setHaveBadDebts,
    additionalExpenses,
    setAdditionalExpenses,
}: ContributionsProps) {

    const { selectedYear } = useYear();

    return (
        <>
            <div className="bg-red-00 w-[100%] mt-4 gap-2 flex flex-col">
                <div className="flex items-center justify-between py-1">
                    <h5 className="text-[#616161] font-medium text-sm">Did you pay cash charitable contributions in {selectedYear}?</h5>
                    <ToggleSwitch labelLeft="No" labelRight="Yes"
                        value={cashCharity} onToggle={setCashCharity}
                    />
                </div>
                <div className="flex items-center justify-between py-1">
                    <h5 className="text-[#616161] font-medium text-sm">Did you pay Non-cash charitable contributions in {selectedYear}?</h5>
                    <ToggleSwitch labelLeft="No" labelRight="Yes"
                        value={nonCashCharity} onToggle={setNonCashCharity}
                    />
                </div>
                <div className="flex items-center justify-between py-1 bg-green-00">
                    <h5 className="text-[#616161] font-medium text-sm">Did you contribute to IRA for the year {selectedYear}?</h5>
                    <ToggleSwitch labelLeft="No" labelRight="Yes"
                        value={contributedIRA} onToggle={setContributedIRA}
                    />
                </div>
                <div className="flex items-center justify-between py-1 bg-red-00">
                    <h5 className="text-[#616161] font-medium text-sm text-start">Did you make contributions to Health savings Account or Medical Savings Account ? (other than W2)</h5>
                    <ToggleSwitch labelLeft="No" labelRight="Yes"
                        value={contributedHSA} onToggle={setContributedHSA}
                    />
                </div>
                <div className="flex items-center justify-between py-1">
                    <h5 className="text-[#616161] font-medium text-sm">Did you pay Tution Fee to College in US in {selectedYear}?</h5>
                    <ToggleSwitch labelLeft="No" labelRight="Yes"
                        value={paidTuition} onToggle={setPaidTuition}
                    />
                </div>
                <div className="flex items-center justify-between py-1">
                    <h5 className="text-[#616161] font-medium text-sm">Did you pay  state taxes due for prior years in current year {selectedYear}?</h5>
                    <ToggleSwitch labelLeft="No" labelRight="Yes"
                        value={paidPriorStateTaxes} onToggle={setPaidPriorStateTaxes}
                    />
                </div>
                <div className="flex items-center justify-between py-1">
                    <h5 className="text-[#616161] font-medium text-sm">Do you have any bad debts?</h5>
                    <ToggleSwitch labelLeft="No" labelRight="Yes"
                        value={haveBadDebts} onToggle={setHaveBadDebts}
                    />
                </div>
                <div className="bg-blue-00 w-[100%] mt-3 flex flex-col py-3 justify-between gap-2 text-start">
                    <label htmlFor="" className="text-sm text-[#3E3E3E] font-medium">Please provide if you have any additional expenses</label>
                    <textarea
                        id="additionalExpenses"
                        className="border-1 border-[#9E9E9E] p-2 focus:outline-none rounded-md h-25 text-[#3E3E3E] text-xs"
                        rows={1}
                        value={additionalExpenses}
                        onChange={(e) => setAdditionalExpenses(e.target.value)}
                    />
                </div>
            </div>
        </>
    )
}