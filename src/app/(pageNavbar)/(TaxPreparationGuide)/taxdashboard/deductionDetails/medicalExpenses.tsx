
import { useYear } from "@/app/api/context/yearContext";
import ToggleSwitch from "../../../../../../utils/toggleSwitch";

type MedicalExpensesProps = {
    ownHomeUSA: boolean;
    setOwnHomeUSA: (val: boolean) => void;
    ownHomeAbroad: boolean;
    setOwnHomeAbroad: (val: boolean) => void;
    familyInsurance: boolean;
    setFamilyInsurance: (val: boolean) => void;
    medicalExpenses: boolean;
    setMedicalExpenses: (val: boolean) => void;
    paidPropertyTax: boolean;
    setPaidPropertyTax: (val: boolean) => void;
    propertyTaxName: string;
    setPropertyTaxName: (val: string) => void;
    propertyTaxDescription: string;
    setPropertyTaxDescription: (val: string) => void;
    propertyTaxAmount: string;
    setPropertyTaxAmount: (val: string) => void;
};

export default function MedicalExpenses({
    ownHomeUSA,
    setOwnHomeUSA,
    ownHomeAbroad,
    setOwnHomeAbroad,
    familyInsurance,
    setFamilyInsurance,
    medicalExpenses,
    setMedicalExpenses,
    paidPropertyTax,
    setPaidPropertyTax,
    propertyTaxName,
    setPropertyTaxName,
    propertyTaxDescription,
    setPropertyTaxDescription,
    propertyTaxAmount,
    setPropertyTaxAmount,
}: MedicalExpensesProps) {

    const { selectedYear } = useYear();

    return (
        <>
            <div className="bg-pink-00 w-[100%] mt-5">
                <h3 className="text-[#3E3E3E] font-medium text-sm text-start">Did you incur medical expenses for the {Number(selectedYear) - 1}?</h3>
                <div className="flex items-center justify-between py-1 mt-2">
                    <div className="flex flex-col justify-center">
                        <h5 className="text-[#616161] font-medium text-sm">Do you own a home in the U.S. that you use as your personal residence?</h5>
                        {ownHomeUSA && (
                            <p className="text-red-500 text-xs mt-0.5">Please upload Form 1098 (Mortgage Interest Statement).</p>
                        )}
                    </div>
                    <ToggleSwitch labelLeft="No" labelRight="Yes"
                        value={ownHomeUSA} onToggle={setOwnHomeUSA}
                    />
                </div>
                <div className="flex items-center justify-between py-1 mt-2">
                    <div className="flex flex-col justify-center">
                        <h5 className="text-[#616161] font-medium text-sm">Do you own a home in India or any other country used as your personal residence?</h5>
                        {ownHomeAbroad && (
                            <p className="text-red-500 text-xs mt-0.5">Please upload property tax receipts or ownership proof.</p>
                        )}
                    </div>
                    <ToggleSwitch labelLeft="No" labelRight="Yes"
                        value={ownHomeAbroad} onToggle={setOwnHomeAbroad}
                    />
                </div>
                <div className="flex items-center justify-between py-1 mt-2">
                    <div className="flex flex-col justify-center">
                        <h5 className="text-[#616161] font-medium text-sm">Did you and your family have health insurance coverage for the entire year {Number(selectedYear) - 1}?</h5>
                        {familyInsurance && (
                            <p className="text-red-500 text-xs mt-0.5">Please upload Form 1095-A / 1095-B if available.</p>
                        )}
                    </div>
                    <ToggleSwitch labelLeft="No" labelRight="Yes"
                        value={familyInsurance} onToggle={setFamilyInsurance}
                    />
                </div>
                <div className="flex items-center justify-between py-1 mt-2">
                    <div className="flex flex-col justify-center">
                        <h5 className="text-[#616161] font-medium text-sm">Did you have any qualified medical expenses during {Number(selectedYear) - 1}?</h5>
                        {medicalExpenses && (
                            <p className="text-red-500 text-xs mt-0.5">Please upload medical bills or payment receipts.</p>
                        )}
                    </div>
                    <ToggleSwitch labelLeft="No" labelRight="Yes"
                        value={medicalExpenses} onToggle={setMedicalExpenses}
                    />
                </div>
                <div className="flex items-center justify-between py-1 mt-2">
                    <div className="flex flex-col justify-center">
                        <h5 className="text-[#616161] font-medium text-sm">Did you pay personal property tax (e.g., annual car registration) in {Number(selectedYear) - 1}?</h5>
                        {paidPropertyTax && (
                            <p className="text-red-500 text-xs mt-0.5">Please upload receipts or renewal statements.</p>
                        )}
                    </div>
                    <ToggleSwitch labelLeft="No" labelRight="Yes"
                        value={paidPropertyTax} onToggle={setPaidPropertyTax}
                    />
                </div>

                <div className="border border-[#9E9E9E] w-[100%] h-25 mt-5 flex flex-col justify-between rounded-md">
                    <div className="bg-pink-00 h-[35%] flex justify-between border-b-1 border-[#9E9E9E] rounded-t-md">
                        <div className="border-r-1 border-[#9E9E9E] rounded-l-lg w-[33%] h-[100%] flex items-center justify-center">
                            <h5 className="text-[#2F3F5F] font-semibold text-sm">IN THE NAME OF</h5>
                        </div>
                        <div className="border-r-1 border-[#9E9E9E] w-[34%] h-[100%] flex items-center justify-center">
                            <h5 className="text-[#2F3F5F] font-semibold text-sm">DESCRIPTION</h5>
                        </div>
                        <div className="w-[33%] h-[100%] flex items-center justify-center">
                            <h5 className="text-[#2F3F5F] font-semibold text-sm">AMOUNT PAID</h5>
                        </div>
                    </div>
                    <div className="bg-indigo-00 h-[65%] rounded-b-md flex justify-between items-center">
                        <div className="w-[33%] h-[80%] bg-green-00 flex items-start justify-center">
                            <div className="bg-white shadow-md w-[70%] p-2 rounded-md flex items-center justify-center">
                                <input
                                    type="text"
                                    className="focus:outline-none text-[#2F3F5F] text-sm w-[100%]"
                                    placeholder="State"
                                    value={propertyTaxName}
                                    onChange={(e) => {
                                        const val = e.target.value;
                                        if (/^[a-zA-Z\s]*$/.test(val)) {
                                            setPropertyTaxName(val);
                                        }
                                    }}
                                />
                            </div>
                        </div>
                        <div className="w-[34%] h-[80%] bg-red-00 flex items-start justify-center">
                            <div className="bg-white shadow-md w-[70%] p-2 rounded-md flex text-center items-center justify-center">
                                <input
                                    type="text"
                                    className="focus:outline-none text-[#2F3F5F] text-sm w-[100%]"
                                    placeholder="Enter property tax description"
                                    value={propertyTaxDescription}
                                    onChange={(e) => {
                                        const val = e.target.value;
                                        if (/^[a-zA-Z\s]*$/.test(val)) {
                                            setPropertyTaxDescription(val);
                                        }
                                    }}
                                />

                            </div>
                        </div>
                        <div className="w-[33%] h-[80%] bg-red-00 flex items-start justify-center">
                            <div className="bg-white shadow-md w-[70%] p-2 rounded-md flex items-center justify-center">
                                <input
                                    type="text"
                                    className="focus:outline-none text-[#2F3F5F] text-sm w-[100%]"
                                    placeholder="$USD"
                                    value={propertyTaxAmount}
                                    onChange={(e) => {
                                        let val = e.target.value.replace("$", "");
                                        if (/^\d*\.?\d*$/.test(val)) {
                                            setPropertyTaxAmount("$" + val);
                                        }
                                    }}

                                    inputMode="decimal"
                                    pattern="\d*"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}