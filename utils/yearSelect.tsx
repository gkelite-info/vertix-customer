'use client';
import YearSelector from "@/app/(pageNavbar)/YearSelector/page";
import { useState } from "react";



export default function YearSelect() {
    
    const [selectedYear, setSelectedYear] = useState<number | null>(null);

    return (
        <>
            <div className="bg-red-00 lg:h-30 lg:w-[100%] flex justify-center items-center lg:px-10 shadow-lg">
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
        </>
    )
}