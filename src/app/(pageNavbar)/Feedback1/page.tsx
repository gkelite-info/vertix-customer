'use client';

import { useState } from "react";
import YearSelector from "../YearSelector/page"
import { PaperPlaneTilt } from "phosphor-react";

function Feedback() {
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
                    <div className="bg-red-00 flex items-center justify-start gap-3 lg:pl-11 h-[10%] w-[35%]">
                        <h5 className="text-[#1D2B48] font-medium">Service :</h5>
                        <select className="border border-gray-300 text-[#616161] font-medium lg:w-[77.5%] px-2 text-sm lg:h-[85%] rounded cursor-pointer shadow-sm">
                            <option value="">SELECT ONE</option>
                            <option value="2021">2021</option>
                            <option value="2022">2022</option>
                            <option value="2023">2023</option>
                            <option value="2024">2024</option>
                            <option value="2025">2025</option>
                        </select>
                    </div>
                    <div className="flex bg-pink-00 w-[35%] justify-center gap-3 mt-3">
                        <h5 className="mt-3 font-medium text-[#1D2B48]">Description :</h5>
                        <div className="bg-green-00 w-[70%] flex flex-col items-center">
                            <textarea
                                placeholder="Enter your text"
                                className="w-[100%] text-sm h-32 p-3 text-[#616161] border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                            <button className="mt-4 font-medium w-[60%] text-sm bg-[#1D2B48] text-white px-5 py-2 rounded-lg flex gap-2 justify-center hover:bg-[#2c3e65] items-center cursor-pointer">
                                SUBMIT FEEDBACK
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Feedback