
import ToggleSwitch from "../../../../../../utils/toggleSwitch";
import { useYear } from "@/app/api/context/yearContext";

type RestProps = {
    incomeDetails: any[];
    spouseIncomeDetails: any[];
    handleToggleChange: (index: number, field: string, value: boolean) => void;
    handleSpouseToggleChange: (index: number, field: string, value: boolean) => void;
    additionalIncome: string;
    setAdditionalIncome: (val: string) => void;
};

export default function Rest({ incomeDetails, spouseIncomeDetails, handleToggleChange, handleSpouseToggleChange, additionalIncome, setAdditionalIncome }: RestProps) {
    const index = 0;
    const { selectedYear } = useYear();

    const eitherOn = (taxpayer?: boolean, spouse?: boolean) =>
        Boolean(taxpayer) || Boolean(spouse);


    return (
        <>
            <div className="bg-blue-00 mt-2 w-[100%] flex flex-col gap-3">
                <div className="w-full flex items-center justify-end">
                    <div className="w-[25%] bg-pink-00 flex items-center justify-center">
                        <div className="w-[50%] flex justify-center items-center">
                            <label htmlFor=""
                                className="font-semibold text-sm text-[#1D2B48]"
                            >
                                Spouse
                            </label>
                        </div>
                        <div className="w-[50%] flex justify-center items-center">
                            <label htmlFor=""
                                className="font-semibold text-sm text-[#1D2B48]"
                            >
                                Tax Payer
                            </label>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between py-1 bg-yellow-00">
                    <div className="flex flex-col justify-center">
                        <h5 className="text-[#616161] font-medium text-sm">Did you earn wages or salary from an employer in {selectedYear}?</h5>
                        {eitherOn(
                            incomeDetails[index]?.earnedWagesOrSalary,
                            spouseIncomeDetails[index]?.spouseEarnedWagesOrSalary
                        ) && (
                                <p className="text-red-500 text-xs mt-1">
                                    *Please upload your W-2 forms.
                                </p>
                            )}

                    </div>
                    <div className="bg-red-00 flex items-center gap-5">
                        <ToggleSwitch labelLeft="No" labelRight="Yes"
                            value={spouseIncomeDetails[index]?.spouseEarnedWagesOrSalary || false}
                            onToggle={(val) =>
                                handleSpouseToggleChange(index, "spouseEarnedWagesOrSalary", val)
                            }
                        />
                        <ToggleSwitch labelLeft="No" labelRight="Yes"
                            value={incomeDetails[index]?.earnedWagesOrSalary || false}
                            onToggle={(val) => handleToggleChange(index, "earnedWagesOrSalary", val)}
                        />
                    </div>
                </div>
                <div className="flex items-center justify-between py-1">
                    <div className="flex flex-col justify-center">
                        <h5 className="text-[#616161] font-medium text-sm">Did you receive income from an LLC, S-Corp, C-Corp, or Partnership?</h5>
                        {eitherOn(
                            incomeDetails[index]?.receivedBusinessEntityIncome,
                            spouseIncomeDetails[index]?.spouseReceivedBusinessEntityIncome
                        ) && (
                                <p className="text-red-500 text-xs mt-1">
                                    *Please upload Schedule K-1 or business income documents.
                                </p>
                            )}

                    </div>
                    <div className="bg-red-00 flex items-center gap-5">
                        <ToggleSwitch labelLeft="No" labelRight="Yes"
                            value={spouseIncomeDetails[index]?.spouseReceivedBusinessEntityIncome || false}
                            onToggle={(val) => handleSpouseToggleChange(index, "spouseReceivedBusinessEntityIncome", val)}
                        />
                        <ToggleSwitch labelLeft="No" labelRight="Yes"
                            value={incomeDetails[index]?.receivedBusinessEntityIncome || false}
                            onToggle={(val) => handleToggleChange(index, "receivedBusinessEntityIncome", val)}
                        />
                    </div>
                </div>
                <div className="flex items-center justify-between py-1">
                    <div className="flex flex-col justify-center">
                        <h5 className="text-[#616161] font-medium text-sm">Did you have any self-employment or contract income (Freelancing, Uber, Lyft, DoorDash, Consulting, etc.)?</h5>
                        {eitherOn(
                            incomeDetails[index]?.receivedContractOrGigIncome,
                            spouseIncomeDetails[index]?.spouseReceivedContractOrGigIncome
                        ) && (
                                <p className="text-red-500 text-xs mt-1">
                                    *Please upload 1099-NEC / 1099-MISC / 1099-K or income summary.
                                </p>
                            )}
                    </div>
                    <div className="bg-red-00 flex items-center gap-5">
                        <ToggleSwitch labelLeft="No" labelRight="Yes"
                            value={spouseIncomeDetails[index]?.spouseReceivedContractOrGigIncome || false}
                            onToggle={(val) => handleSpouseToggleChange(index, "spouseReceivedContractOrGigIncome", val)}
                        />
                        <ToggleSwitch labelLeft="No" labelRight="Yes"
                            value={incomeDetails[index]?.receivedContractOrGigIncome || false}
                            onToggle={(val) => handleToggleChange(index, "receivedContractOrGigIncome", val)}
                        />
                    </div>
                </div>
                <div className="flex items-center justify-between py-1">
                    <div className="flex flex-col justify-center">
                        <h5 className="text-[#616161] font-medium text-sm">Did you receive any income or incur any loss from a rental property in {selectedYear}?</h5>
                        {eitherOn(
                            incomeDetails[index]?.hadRentalPropertyIncomeOrLoss,
                            spouseIncomeDetails[index]?.spouseHadRentalPropertyIncomeOrLoss
                        ) && (
                                <p className="text-red-500 text-xs mt-1">
                                    *Please upload rental income/expense summary or Form 1099-MISC.
                                </p>
                            )}
                    </div>
                    <div className="bg-red-00 flex items-center gap-5">
                        <ToggleSwitch labelLeft="No" labelRight="Yes"
                            value={spouseIncomeDetails[index]?.spouseHadRentalPropertyIncomeOrLoss || false}
                            onToggle={(val) => handleSpouseToggleChange(index, "spouseHadRentalPropertyIncomeOrLoss", val)}
                        />
                        <ToggleSwitch labelLeft="No" labelRight="Yes"
                            value={incomeDetails[index]?.hadRentalPropertyIncomeOrLoss || false}
                            onToggle={(val) => handleToggleChange(index, "hadRentalPropertyIncomeOrLoss", val)}
                        />
                    </div>
                </div>
                <div className="flex items-center justify-between py-1">
                    <div className="flex flex-col justify-center">
                        <h5 className="text-[#616161] font-medium text-sm">Did you distributions any amount from an HSA or MSA?</h5>
                        {eitherOn(
                            incomeDetails[index]?.receivedHsaOrMsaDistribution,
                            spouseIncomeDetails[index]?.spouseReceivedHsaOrMsaDistribution
                        ) && (
                                <p className="text-red-500 text-xs mt-1">
                                    *Please upload Form 1099-SA.
                                </p>
                            )}
                    </div>
                    <div className="bg-red-00 flex items-center gap-5">
                        <ToggleSwitch labelLeft="No" labelRight="Yes"
                            value={spouseIncomeDetails[index]?.spouseReceivedHsaOrMsaDistribution || false}
                            onToggle={(val) => handleSpouseToggleChange(index, "spouseReceivedHsaOrMsaDistribution", val)}
                        />
                        <ToggleSwitch labelLeft="No" labelRight="Yes"
                            value={incomeDetails[index]?.receivedHsaOrMsaDistribution || false}
                            onToggle={(val) => handleToggleChange(index, "receivedHsaOrMsaDistribution", val)}
                        />
                    </div>
                </div>
                <div className="flex items-center justify-between py-1">
                    <div>
                        <h5 className="text-[#616161] font-medium text-sm">Did you distributions any amount from an IRA?</h5>
                        {eitherOn(
                            incomeDetails[index]?.receivedIraDistribution,
                            spouseIncomeDetails[index]?.spouseReceivedIraDistribution
                        ) && (
                                <p className="text-red-500 text-xs mt-1">
                                    *Please upload Form 1099-R.
                                </p>
                            )}
                    </div>
                    <div className="bg-red-00 flex items-center gap-5">
                        <ToggleSwitch labelLeft="No" labelRight="Yes"
                            value={spouseIncomeDetails[index]?.spouseReceivedIraDistribution || false}
                            onToggle={(val) => handleSpouseToggleChange(index, "spouseReceivedIraDistribution", val)}
                        />
                        <ToggleSwitch labelLeft="No" labelRight="Yes"
                            value={incomeDetails[index]?.receivedIraDistribution || false}
                            onToggle={(val) => handleToggleChange(index, "receivedIraDistribution", val)}
                        />
                    </div>
                </div>
                <div className="flex items-center justify-between py-1">
                    <div>
                        <h5 className="text-[#616161] font-medium text-sm">Did you sell any stocks, cryptocurrency, property, or other investments in {selectedYear}?</h5>
                        {eitherOn(
                            incomeDetails[index]?.soldInvestments,
                            spouseIncomeDetails[index]?.spouseSoldInvestments
                        ) && (
                                <p className="text-red-500 text-xs mt-1">
                                    *Please upload Form 1099-B or capital gain statements.
                                </p>
                            )}
                    </div>
                    <div className="bg-red-00 flex items-center gap-5">
                        <ToggleSwitch labelLeft="No" labelRight="Yes"
                            value={spouseIncomeDetails[index]?.spouseSoldInvestments || false}
                            onToggle={(val) => handleSpouseToggleChange(index, "spouseSoldInvestments", val)}
                        />
                        <ToggleSwitch labelLeft="No" labelRight="Yes"
                            value={incomeDetails[index]?.soldInvestments || false}
                            onToggle={(val) => handleToggleChange(index, "soldInvestments", val)}
                        />
                    </div>
                </div>
                <div className="flex items-center justify-between py-1">
                    <div>
                        <h5 className="text-[#616161] font-medium text-sm">Did you receive interest from banks or financial institutions?</h5>
                        {eitherOn(
                            incomeDetails[index]?.receivedInterestIncome,
                            spouseIncomeDetails[index]?.spouseReceivedInterestIncome
                        ) && (
                                <p className="text-red-500 text-xs mt-1">
                                    *Please upload Form 1099-INT.
                                </p>
                            )}
                    </div>
                    <div className="bg-red-00 flex items-center gap-5">
                        <ToggleSwitch labelLeft="No" labelRight="Yes"
                            value={spouseIncomeDetails[index]?.spouseReceivedInterestIncome || false}
                            onToggle={(val) => handleSpouseToggleChange(index, "spouseReceivedInterestIncome", val)}
                        />
                        <ToggleSwitch labelLeft="No" labelRight="Yes"
                            value={incomeDetails[index]?.receivedInterestIncome || false}
                            onToggle={(val) => handleToggleChange(index, "receivedInterestIncome", val)}
                        />
                    </div>
                </div>
                <div className="flex items-center justify-between py-1">
                    <div>
                        <h5 className="text-[#616161] font-medium text-sm">Did you receive any dividends from stocks, ETFs, or mutual funds?</h5>
                        {eitherOn(
                            incomeDetails[index]?.receivedDividendIncome,
                            spouseIncomeDetails[index]?.spouseReceivedDividendIncome
                        ) && (
                                <p className="text-red-500 text-xs mt-1">
                                    *Please upload Form 1099-DIV.
                                </p>
                            )}
                    </div>
                    <div className="bg-red-00 flex items-center gap-5">
                        <ToggleSwitch labelLeft="No" labelRight="Yes"
                            value={spouseIncomeDetails[index]?.spouseReceivedDividendIncome || false}
                            onToggle={(val) => handleSpouseToggleChange(index, "spouseReceivedDividendIncome", val)}
                        />
                        <ToggleSwitch labelLeft="No" labelRight="Yes"
                            value={incomeDetails[index]?.receivedDividendIncome || false}
                            onToggle={(val) => handleToggleChange(index, "receivedDividendIncome", val)}
                        />
                    </div>
                </div>
                <div className="flex items-center justify-between py-1">
                    <div>
                        <h5 className="text-[#616161] font-medium text-sm">Did you receive a refund from your {Number(selectedYear) - 1} state or city tax return?</h5>
                        {eitherOn(
                            incomeDetails[index]?.receivedPriorYearStateRefund,
                            spouseIncomeDetails[index]?.spouseReceivedPriorYearStateRefund
                        ) && (
                                <p className="text-red-500 text-xs mt-1">
                                    *Please upload Form 1099-G (if available).
                                </p>
                            )}
                    </div>
                    <div className="bg-red-00 flex items-center gap-5">
                        <ToggleSwitch labelLeft="No" labelRight="Yes"
                            value={spouseIncomeDetails[index]?.spouseReceivedPriorYearStateRefund || false}
                            onToggle={(val) => handleSpouseToggleChange(index, "spouseReceivedPriorYearStateRefund", val)}
                        />
                        <ToggleSwitch labelLeft="No" labelRight="Yes"
                            value={incomeDetails[index]?.receivedPriorYearStateRefund || false}
                            onToggle={(val) => handleToggleChange(index, "receivedPriorYearStateRefund", val)}
                        />
                    </div>
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