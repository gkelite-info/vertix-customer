'use client';

import { useState } from "react";
import YearSelector from "../YearSelector/page"
import { PaperPlaneTilt } from "phosphor-react";

function Messages() {
    const [selectedYear, setSelectedYear] = useState<number | null>(null);
    return (
        <>
            <div className="bg-white lg:h-[100vh] flex flex-col items-center">
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
                <div className="bg-red-00 flex flex-col justify-start items-center lg:h-[80%] lg:w-[40%] lg:pt-5 text-center">
                    <textarea
                        placeholder="Hello! Please Leave Your Message"
                        className="w-[80%] h-32 p-3 text-[#616161] border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <button className="mt-3 bg-[#1D2B48] text-white px-5 py-2 rounded-lg hover:bg-[#2c3e65] flex gap-2 justify-center items-center cursor-pointer">
                        <PaperPlaneTilt size={17} weight="fill" className="text-white" />
                        Send
                    </button>
                </div>
            </div>
        </>
    )
}
export default Messages