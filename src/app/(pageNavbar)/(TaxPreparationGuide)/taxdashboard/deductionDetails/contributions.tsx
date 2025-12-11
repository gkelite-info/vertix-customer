
import { useYear } from "@/app/api/context/yearContext";
import ToggleSwitch from "../../../../../../utils/toggleSwitch";

type ContributionsProps = {
    contributedIRA: boolean;
    setContributedIRA: (val: boolean) => void;
    contributedHSA: boolean;
    setContributedHSA: (val: boolean) => void;
    cashCharity: boolean;
    setCashCharity: (val: boolean) => void;
    studentLoanUS: boolean;
    setStudentLoanUS: (val: boolean) => void;
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
    contributedIRA,
    setContributedIRA,
    contributedHSA,
    setContributedHSA,
    cashCharity,
    setCashCharity,
    studentLoanUS,
    setStudentLoanUS,
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
                <div className="flex items-center justify-between py-1 bg-green-00">
                    <div className="flex flex-col justify-center">
                        <h5 className="text-[#616161] font-medium text-sm">Did you contribute to an IRA (Traditional or Roth) for tax year {Number(selectedYear) - 1}?</h5>
                        {contributedIRA && (
                            <p className="text-red-500 text-xs mt-0.5">Please upload IRA contribution statement</p>
                        )}
                    </div>
                    <ToggleSwitch labelLeft="No" labelRight="Yes"
                        value={contributedIRA} onToggle={setContributedIRA}
                    />
                </div>
                <div className="flex items-center justify-between py-1 bg-red-00">
                    <div className="flex flex-col justify-center">
                        <h5 className="text-[#616161] font-medium text-sm text-start">Did you make contributions to a Health Savings Account (HSA) or Medical Savings Account (MSA) outside of your W-2?</h5>
                        {contributedHSA && (
                            <p className="text-red-500 text-xs mt-0.5">Please upload Form 5498-SA or 1099-SA.</p>
                        )}
                    </div>
                    <ToggleSwitch labelLeft="No" labelRight="Yes"
                        value={contributedHSA} onToggle={setContributedHSA}
                    />
                </div>
                <div className="flex items-center justify-between py-1">
                    <div className="flex flex-col justify-center">
                        <h5 className="text-[#616161] font-medium text-sm">Did you make any cash or non-cash charitable contributions in {Number(selectedYear) - 1}?</h5>
                        {cashCharity && (
                            <p className="text-red-500 text-xs mt-0.5">Please upload donation receipts/acknowledgement or valuation list.</p>
                        )}
                    </div>
                    <ToggleSwitch labelLeft="No" labelRight="Yes"
                        value={cashCharity} onToggle={setCashCharity}
                    />
                </div>
                <div className="flex items-center justify-between py-1 mt-2">
                    <div className="flex flex-col justify-center">
                        <h5 className="text-[#616161] font-medium text-sm">Did you pay student loan interest in the U.S. during {Number(selectedYear) - 1}</h5>
                        {studentLoanUS && (
                            <p className="text-red-500 text-xs mt-0.5">Please upload donation receipts /acknowledgement or valuation list.</p>
                        )}
                    </div>
                    <ToggleSwitch labelLeft="No" labelRight="Yes"
                        value={studentLoanUS} onToggle={setStudentLoanUS}
                    />
                </div>

                <div className="flex items-center justify-between py-1">
                    <div className="flex flex-col justify-center">
                        <h5 className="text-[#616161] font-medium text-sm">Did you pay tuition or education expenses to a U.S. college in {Number(selectedYear) - 1}?</h5>
                        {paidTuition && (
                            <p className="text-red-500 text-xs mt-0.5">Please upload Form 1098-T.</p>
                        )}
                    </div>
                    <ToggleSwitch labelLeft="No" labelRight="Yes"
                        value={paidTuition} onToggle={setPaidTuition}
                    />
                </div>
                <div className="flex items-center justify-between py-1">
                    <div className="flex flex-col justify-center">
                        <h5 className="text-[#616161] font-medium text-sm">Did you pay any state taxes due for previous tax years during {Number(selectedYear) - 1}?</h5>
                        {paidPriorStateTaxes && (
                            <p className="text-red-500 text-xs mt-0.5">Please upload last year tax return.</p>
                        )}
                    </div>
                    <ToggleSwitch labelLeft="No" labelRight="Yes"
                        value={paidPriorStateTaxes} onToggle={setPaidPriorStateTaxes}
                    />
                </div>
                <div className="flex items-center justify-between py-1">
                    <h5 className="text-[#616161] font-medium text-sm">Do you have any bad debts or unrecoverable amounts for {selectedYear}?</h5>
                    <ToggleSwitch labelLeft="No" labelRight="Yes"
                        value={haveBadDebts} onToggle={setHaveBadDebts}
                    />
                </div>

                <div className="bg-blue-00 w-[100%] mt-3 flex flex-col py-3 justify-between gap-2 text-start">
                    <label htmlFor="" className="text-sm text-[#3E3E3E] font-medium">Please list any additional deductible expenses.</label>
                    <textarea
                        id="additionalExpenses"
                        className="border-1 border-[#9E9E9E] p-2 focus:outline-none rounded-md text-[#3E3E3E] text-xs"
                        rows={8}
                        value={additionalExpenses}
                        onChange={(e) => setAdditionalExpenses(e.target.value)}
                    />
                </div>
            </div>
        </>
    )
}