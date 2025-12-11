
import ToggleSwitch from "../../../../../../utils/toggleSwitch";
import { useYear } from "@/app/api/context/yearContext";

type RestProps = {
    incomeDetails: any[];
    handleToggleChange: (index: number, field: string, value: boolean) => void;
    additionalIncome: string;
    setAdditionalIncome: (val: string) => void;
};

export default function Rest({ incomeDetails, handleToggleChange, additionalIncome, setAdditionalIncome }: RestProps) {
    const index = 0;
    const { selectedYear } = useYear();

    return (
        <>
            <div className="bg-blue-00 mt-2 w-[100%] flex flex-col gap-3">
                <div className="flex items-center justify-between py-1">
                    <div className="flex flex-col justify-center">
                        <h5 className="text-[#616161] font-medium text-sm">Did you earn wages or salary from an employer in {selectedYear}?</h5>
                        {(incomeDetails[index]?.earnedWagesOrSalary || false) &&
                            <p className="text-red-500 text-xs mt-1">*Please upload your W-2 forms.</p>
                        }
                    </div>
                    <ToggleSwitch labelLeft="No" labelRight="Yes"
                        value={incomeDetails[index]?.earnedWagesOrSalary || false}
                        onToggle={(val) => handleToggleChange(index, "earnedWagesOrSalary", val)}
                    />
                </div>
                <div className="flex items-center justify-between py-1">
                    <div className="flex flex-col justify-center">
                        <h5 className="text-[#616161] font-medium text-sm">Did you receive income from an LLC, S-Corp, C-Corp, or Partnership?</h5>
                        {(incomeDetails[index]?.receivedBusinessEntityIncome || false) &&
                            <p className="text-red-500 text-xs mt-1">*Please upload Schedule K-1 or business income documents.</p>
                        }
                    </div>
                    <ToggleSwitch labelLeft="No" labelRight="Yes"
                        value={incomeDetails[index]?.receivedBusinessEntityIncome || false}
                        onToggle={(val) => handleToggleChange(index, "receivedBusinessEntityIncome", val)}
                    />
                </div>
                <div className="flex items-center justify-between py-1">
                    <div className="flex flex-col justify-center">
                        <h5 className="text-[#616161] font-medium text-sm">Did you have any self-employment or contract income (Freelancing, Uber, Lyft, DoorDash, Consulting, etc.)?</h5>
                        {(incomeDetails[index]?.receivedContractOrGigIncome || false) &&
                            <p className="text-red-500 text-xs mt-1">*Please upload 1099-NEC / 1099-MISC / 1099-K or income summary.</p>
                        }
                    </div>
                    <ToggleSwitch labelLeft="No" labelRight="Yes"
                        value={incomeDetails[index]?.receivedContractOrGigIncome || false}
                        onToggle={(val) => handleToggleChange(index, "receivedContractOrGigIncome", val)}
                    />
                </div>
                <div className="flex items-center justify-between py-1">
                    <div className="flex flex-col justify-center">
                        <h5 className="text-[#616161] font-medium text-sm">Did you receive any income or incur any loss from a rental property in {selectedYear}?</h5>
                        {(incomeDetails[index]?.hadRentalPropertyIncomeOrLoss || false) &&
                            <p className="text-red-500 text-xs mt-1">*Please upload rental income/expense summary or Form 1099-MISC if received.</p>
                        }
                    </div>
                    <ToggleSwitch labelLeft="No" labelRight="Yes"
                        value={incomeDetails[index]?.hadRentalPropertyIncomeOrLoss || false}
                        onToggle={(val) => handleToggleChange(index, "hadRentalPropertyIncomeOrLoss", val)}
                    />
                </div>
                <div className="flex items-center justify-between py-1">
                    <div className="flex flex-col justify-center">
                        <h5 className="text-[#616161] font-medium text-sm">Did you distributions any amount from an HSA or MSA?</h5>
                        {(incomeDetails[index]?.receivedHsaOrMsaDistribution || false) &&
                            <p className="text-red-500 text-xs mt-1">*Please upload Form 1099-SA.</p>
                        }
                    </div>
                    <ToggleSwitch labelLeft="No" labelRight="Yes"
                        value={incomeDetails[index]?.receivedHsaOrMsaDistribution || false}
                        onToggle={(val) => handleToggleChange(index, "receivedHsaOrMsaDistribution", val)}
                    />
                </div>
                <div className="flex items-center justify-between py-1">
                    <div>
                        <h5 className="text-[#616161] font-medium text-sm">Did you distributions any amount from an IRA?</h5>
                        {(incomeDetails[index]?.receivedIraDistribution || false) &&
                            <p className="text-red-500 text-xs mt-1">*Please upload Form 1099-R.</p>
                        }
                    </div>
                    <ToggleSwitch labelLeft="No" labelRight="Yes"
                        value={incomeDetails[index]?.receivedIraDistribution || false}
                        onToggle={(val) => handleToggleChange(index, "receivedIraDistribution", val)}
                    />
                </div>
                <div className="flex items-center justify-between py-1">
                    <div>
                        <h5 className="text-[#616161] font-medium text-sm">Did you sell any stocks, cryptocurrency, property, or other investments in {selectedYear}?</h5>
                        {(incomeDetails[index]?.soldInvestments || false) &&
                            <p className="text-red-500 text-xs mt-1">*Please upload Form 1099-B or capital gain statements.</p>
                        }
                    </div>
                    <ToggleSwitch labelLeft="No" labelRight="Yes"
                        value={incomeDetails[index]?.soldInvestments || false}
                        onToggle={(val) => handleToggleChange(index, "soldInvestments", val)}
                    />
                </div>
                <div className="flex items-center justify-between py-1">
                    <div>
                        <h5 className="text-[#616161] font-medium text-sm">Did you receive interest from banks or financial institutions?</h5>
                        {(incomeDetails[index]?.receivedInterestIncome || false) &&
                            <p className="text-red-500 text-xs mt-1">*Please upload Form 1099-INT.</p>
                        }
                    </div>
                    <ToggleSwitch labelLeft="No" labelRight="Yes"
                        value={incomeDetails[index]?.receivedInterestIncome || false}
                        onToggle={(val) => handleToggleChange(index, "receivedInterestIncome", val)}
                    />
                </div>
                <div className="flex items-center justify-between py-1">
                    <div>
                        <h5 className="text-[#616161] font-medium text-sm">Did you receive any dividends from stocks, ETFs, or mutual funds?</h5>
                        {(incomeDetails[index]?.receivedDividendIncome || false) &&
                            <p className="text-red-500 text-xs mt-1">*Please upload Form 1099-DIV.</p>
                        }
                    </div>
                    <ToggleSwitch labelLeft="No" labelRight="Yes"
                        value={incomeDetails[index]?.receivedDividendIncome || false}
                        onToggle={(val) => handleToggleChange(index, "receivedDividendIncome", val)}
                    />
                </div>
                <div className="flex items-center justify-between py-1">
                    <div>
                        <h5 className="text-[#616161] font-medium text-sm">Did you receive a refund from your {Number(selectedYear) -1} state or city tax return?</h5>
                        {(incomeDetails[index]?.receivedPriorYearStateRefund || false) &&
                            <p className="text-red-500 text-xs mt-1">*Please upload your 1099-G (if available).</p>
                        }
                    </div>
                    <ToggleSwitch labelLeft="No" labelRight="Yes"
                        value={incomeDetails[index]?.receivedPriorYearStateRefund || false}
                        onToggle={(val) => handleToggleChange(index, "receivedPriorYearStateRefund", val)}
                    />
                </div>
                <div className="bg-blue-00 w-[100%] mt-3 flex flex-col py-3 justify-between gap-2 text-start">
                    <label htmlFor="" className="text-sm text-[#3E3E3E] font-medium">Please list any other additional income in Note</label>
                    <textarea
                        id="additionalExpenses"
                        className="border-1 border-[#9E9E9E] p-2 focus:outline-none rounded-md h-25 text-[#3E3E3E] text-xs"
                        rows={1}
                        value={additionalIncome}
                        onChange={(e) => setAdditionalIncome(e.target.value)}
                    />
                </div>
            </div >
        </>
    )
}