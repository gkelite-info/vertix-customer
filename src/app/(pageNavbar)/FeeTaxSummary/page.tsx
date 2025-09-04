'use client';

import { useState } from "react";
import YearSelector from "../YearSelector/page"

function FeeTaxSummary() {
    const [selectedYear, setSelectedYear] = useState<number | null>(null);
    return (
        <>
            <div className="bg-white lg:h-[100vh]">
                <div className="bg-red-00 lg:h-[20%] lg:w-[100%] flex justify-center items-center lg:px-10 shadow-lg">
                    <div className="bg-red-00 h-[100%] lg:w-[68%] flex items-center justify-end w-[65%]">
                        <YearSelector
                            years={[2020, 2021, 2022, 2023, 2024, 2025]}
                            onYearSelect={(year) => setSelectedYear(year)}
                        />
                    </div>
                    <div className="bg-indigo-00 h-[100%] w-[27%] flex items-center justify-end">
                        <div className="bg-red-00 lg:h-[70%] lg:px-3 lg:gap-2 flex flex-col items-center justify-center rounded-lg shadow-lg">
                            <h3 className="text-[#1D2B48] font-semibold">Tax Management Dashboard</h3>
                            <div className="flex justify-between lg:gap-5 bg-green-00 lg:w-[100%]">
                                <h5 className="text-[#585E68] font-medium">Name: User</h5>
                                <h5 className="text-[#585E68] font-medium">Client Id: 12345</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-red-00 flex flex-col justify-start items-center lg:h-[80%] lg:pt-5">
                    <div className="flex w-[90%] h-[10%] justify-center gap-5">
                        <button className="bg-[#1D2B48] font-medium p-3 h-full cursor-pointer rounded-lg text-sm">TAX Return refund/Due Summary</button>
                        <button className="bg-[#1D2B48] font-semibold p-3 lg:w-[24%] h-full cursor-pointer rounded-lg text-sm">FEE Summary</button>
                    </div>
                    <div className="bg-gray-00 w-[60%] flex flex-col items-center p-3">
                        <h2 className="text-[#1D2B48] font-semibold text-xl">Fee Summary</h2>
                        <table className="w-[60%] border-collapse border border-gray-300 bg-white shadow-md mt-3">
                            <thead>
                                <tr className="bg-[#4B5873] text-center">
                                    <th className="border border-gray-300 px-4 py-2 text-sm font-semibold text-start">ADD NEW SERVICE</th>
                                    <th className="border border-gray-300 px-4 py-2 text-sm font-semibold">FEE</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-[#E9E9E9] text-black">
                                    <td className="border border-gray-300 px-4 py-2 text-start text-sm">Federal 1040</td>
                                    <td className="border border-gray-300 px-4 py-2 text-sm text-center">30</td>
                                </tr>
                                <tr className="bg-[#E9E9E9] text-black">
                                    <td className="border border-gray-300 px-4 py-2 text-start text-sm">States</td>
                                    <td className="border border-gray-300 px-4 py-2 text-sm text-center">30</td>
                                </tr>
                                <tr className="bg-[#E9E9E9] text-black">
                                    <td className="border border-gray-300 px-4 py-2 text-start text-sm">SCH B</td>
                                    <td className="border border-gray-300 px-4 py-2 text-sm text-center">20</td>
                                </tr>
                                <tr className="bg-[#E9E9E9] text-black">
                                    <td className="border border-gray-300 px-4 py-2 text-start text-sm">Total</td>
                                    <td className="border border-gray-300 px-4 py-2 text-sm text-center">80</td>
                                </tr>
                                <tr className="bg-[#E9E9E9] text-black">
                                    <td className="border border-gray-300 px-4 py-2 text-start text-sm">Referral</td>
                                    <td className="border border-gray-300 px-4 py-2 text-sm text-center">20</td>
                                </tr>
                                <tr className="bg-[#E9E9E9] text-black">
                                    <td className="border border-gray-300 px-4 py-2 text-start text-sm">Net Fee</td>
                                    <td className="border border-gray-300 px-4 py-2 text-sm text-center">60</td>
                                </tr>
                                <tr className="bg-[#E9E9E9] text-black">
                                    <td className="border border-gray-300 px-4 py-2 text-start text-sm">Fee Paid</td>
                                    <td className="border border-gray-300 px-4 py-2 text-sm text-center">60</td>
                                </tr>
                                <tr className="bg-[#E9E9E9] text-black">
                                    <td className="border border-gray-300 px-4 py-2 text-start text-sm">Due Amount</td>
                                    <td className="border border-gray-300 px-4 py-2 text-sm text-center">0</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
export default FeeTaxSummary