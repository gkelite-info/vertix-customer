
import ToggleSwitch from "../../../../../../utils/toggleSwitch";
import { useYear } from "@/app/api/context/yearContext";

type RestProps = {
    incomeDetails: any[];
    handleToggleChange: (index: number, field: string, value: boolean) => void;
};

export default function Rest({ incomeDetails, handleToggleChange }: RestProps) {
    const index = 0;
    const { selectedYear } = useYear();

    return (
        <>
            <div className="bg-blue-00 mt-2 w-[100%] flex flex-col gap-3">
                <div className="flex items-center justify-between py-1">
                    <h5 className="text-[#616161] font-medium text-sm">Income from LLC /S Corp / C Corp / Partnership business?</h5>
                    <ToggleSwitch labelLeft="No" labelRight="Yes"
                        value={incomeDetails[index]?.hasBusinessIncome || false}
                        onToggle={(val) => handleToggleChange(index, "hasBusinessIncome", val)}
                    />
                </div>
                <div className="flex items-center justify-between py-1">
                    <h5 className="text-[#616161] font-medium text-sm">Self-employment Income i.e., Uber /Lyft / Worked as contractor?</h5>
                    <ToggleSwitch labelLeft="No" labelRight="Yes"
                        value={incomeDetails[index]?.hasSelfEmploymentIncome || false}
                        onToggle={(val) => handleToggleChange(index, "hasSelfEmploymentIncome", val)}
                    />
                </div>
                <div className="flex items-center justify-between py-1">
                    <h5 className="text-[#616161] font-medium text-sm">Income / Loss from Rental Property?</h5>
                    <ToggleSwitch labelLeft="No" labelRight="Yes"
                        value={incomeDetails[index]?.hasRentalIncome || false}
                        onToggle={(val) => handleToggleChange(index, "hasRentalIncome", val)}
                    />
                </div>
                <div className="flex items-center justify-between py-1">
                    <h5 className="text-[#616161] font-medium text-sm">Distributed any amount from HSA/MSA account in {selectedYear}?</h5>
                    <ToggleSwitch labelLeft="No" labelRight="Yes"
                        value={incomeDetails[index]?.hasHsaDistribution || false}
                        onToggle={(val) => handleToggleChange(index, "hasHsaDistribution", val)}
                    />
                </div>
                <div className="flex items-center justify-between py-1">
                    <h5 className="text-[#616161] font-medium text-sm">Did you receive Dividend Income in {selectedYear}?</h5>
                    <ToggleSwitch labelLeft="No" labelRight="Yes"
                        value={incomeDetails[index]?.hasDividendIncome || false}
                        onToggle={(val) => handleToggleChange(index, "hasDividendIncome", val)}
                    />
                </div>
                <div className="flex items-center justify-between py-1">
                    <h5 className="text-[#616161] font-medium text-sm">Did you receive refund from last year's state/city tax return</h5>
                    <ToggleSwitch labelLeft="No" labelRight="Yes"
                        value={incomeDetails[index]?.hasStateTaxRefund || false}
                        onToggle={(val) => handleToggleChange(index, "hasStateTaxRefund", val)}
                    />
                </div>
            </div>
        </>
    )
}