'use client';

import { useState } from "react";
import YearSelector from "../YearSelector/page"

function OrganizerPage() {
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
                <div className="bg-red-00 flex flex-col justify-start items-center lg:h-[80%] text-center">
                    <p className="text-[#1C2945] text-sm font-medium lg:mt-5">Please click on the link below to fill online organizer. Should you need <br/> any assistance in filing up the organizer, do not hesistate to call us <br/> at +1 478-205-678 +91097568374 to schedule and appointment </p>
                    <button className="bg-[#1D2B47] text-sm font-medium h-10 lg:mt-7 rounded-lg p-2 cursor-pointer">TAX ORGANIXER FOR 2024 TAX YEAR</button>
                </div>
            </div>
        </>
    )
}
export default OrganizerPage