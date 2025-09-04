'use client';

import { useState } from "react";
import YearSelector from "../YearSelector/page"

function VertixTaxPage() {
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
                <div className="bg-red-00 flex flex-col justify-start items-center lg:h-[80%] lg:pt-5 text-center">
                    <div className="bg-green-00 w-[60%] flex flex-col items-start">
                        <h2 className="text-[#1D2B48] font-semibold">Files for review documents</h2>
                        <div className="w-[100%] h-15 mt-2">
                            <table className="w-full border-collapse border border-gray-300 bg-white shadow-md">
                                <thead>
                                    <tr className="bg-[#4B5873] text-center">
                                        <th className="border border-gray-300 px-4 py-2 text-sm font-semibold">S.No</th>
                                        <th className="border border-gray-300 px-4 py-2 text-sm font-semibold">Description</th>
                                        <th className="border border-gray-300 px-4 py-2 text-sm font-semibold">Action</th>
                                        <th className="border border-gray-300 px-4 py-2 text-sm font-semibold">Downloaded Time</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-[#E9E9E9] text-black">
                                        <td className="border border-gray-300 px-4 py-2 text-center text-sm">1</td>
                                        <td className="border border-gray-300 px-4 py-2 text-sm">Your Description</td>
                                        <td className="border border-gray-300 px-4 py-2 text-center text-sm">
                                            Download (password will be last four Digits of your SSN Number)
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2 text-center text-sm">
                                            2025-02-23 08:30:38
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="bg-green-00 w-[60%] flex flex-col items-start mt-15">
                        <h2 className="text-[#1D2B48] font-semibold">Files for documents for your records</h2>
                        <div className="w-[100%] h-15 mt-2">
                            <table className="w-full border-collapse border border-gray-300 bg-white shadow-md">
                                <thead>
                                    <tr className="bg-[#4B5873] text-center">
                                        <th className="border border-gray-300 px-4 py-2 text-sm font-semibold">S.No</th>
                                        <th className="border border-gray-300 px-4 py-2 text-sm font-semibold">Description</th>
                                        <th className="border border-gray-300 px-4 py-2 text-sm font-semibold">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-[#E9E9E9] text-black">
                                        <td className="border border-gray-300 px-4 py-2 text-center text-sm">1</td>
                                        <td className="border border-gray-300 px-4 py-2 text-sm">Your Description</td>
                                        <td className="border border-gray-300 px-4 py-2 text-center text-sm">
                                            Download (password will be last four Digits of your SSN Number)
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default VertixTaxPage