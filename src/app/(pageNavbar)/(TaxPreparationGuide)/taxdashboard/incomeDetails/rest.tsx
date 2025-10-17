'use client'
import { useState } from "react";
import ToggleSwitch from "../../../../../../utils/toggleSwitch";


export default function Rest() {

    const [llcIncome, setLlcIncome] = useState(false)
    const [selfEmployment, setSelfEmployment] = useState(false)
    const [rentalIncome, setRentalIncome] = useState(false)
    const [hsaDistribution, setHsaDistribution] = useState(false)
    const [dividendIncome, setDividendIncome] = useState(false)
    const [taxRefund, setTaxRefund] = useState(false)

    return (
        <>
            <div className="bg-blue-00 mt-2 w-[100%] flex flex-col gap-3">
                <div className="flex items-center justify-between py-1">
                    <h5 className="text-[#616161] font-medium text-sm">Income from LLC /S Corp / C Corp / Partnership business?</h5>
                    <ToggleSwitch labelLeft="No" labelRight="Yes" value={llcIncome} onToggle={setLlcIncome} />
                </div>
                <div className="flex items-center justify-between py-1">
                    <h5 className="text-[#616161] font-medium text-sm">Self-employment Income i.e., Uber /Lyft / Worked as contractor?</h5>
                    <ToggleSwitch labelLeft="No" labelRight="Yes" value={selfEmployment} onToggle={setSelfEmployment} />
                </div>
                <div className="flex items-center justify-between py-1">
                    <h5 className="text-[#616161] font-medium text-sm">Income / Loss from Rental Property?</h5>
                    <ToggleSwitch labelLeft="No" labelRight="Yes" value={rentalIncome} onToggle={setRentalIncome} />
                </div>
                <div className="flex items-center justify-between py-1">
                    <h5 className="text-[#616161] font-medium text-sm">Distributed any amount from HSA/MSA account in 2024?</h5>
                    <ToggleSwitch labelLeft="No" labelRight="Yes" value={hsaDistribution} onToggle={setHsaDistribution} />
                </div>
                <div className="flex items-center justify-between py-1">
                    <h5 className="text-[#616161] font-medium text-sm">Did you receive Dividend Income in 2024?</h5>
                    <ToggleSwitch labelLeft="No" labelRight="Yes" value={dividendIncome} onToggle={setDividendIncome} />
                </div>
                <div className="flex items-center justify-between py-1">
                    <h5 className="text-[#616161] font-medium text-sm">Did you receive refund from last year's state/city tax return</h5>
                    <ToggleSwitch labelLeft="No" labelRight="Yes" value={taxRefund} onToggle={setTaxRefund} />
                </div>
            </div>
        </>
    )
}