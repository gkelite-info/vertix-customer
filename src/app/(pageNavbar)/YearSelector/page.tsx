"use client";
import { useState } from "react";

interface YearSelectorProps {
    years: number[];
    onYearSelect: (year: number) => void;
}

export default function YearSelector({ years, onYearSelect }: YearSelectorProps) {
    const [selectedYear, setSelectedYear] = useState<number | null>(null);

    const handleClick = (year: number) => {
        setSelectedYear(year);
        onYearSelect(year);
    };

    return (
        <div className="flex gap-3 p-2 rounded-lg">
            {years.map((year) => (
                <button
                    key={year}
                    onClick={() => handleClick(year)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition
            ${selectedYear === year
                            ? "bg-[#1D2A46] text-white"
                            : "bg-[#E8E8E8] border border-gray-300 text-gray-700 hover:bg-white hover:text-[#1D2A46] hover:border-1 hover:border-[#1D2A46] transition hover:-translate-y-1 hover:duration-200"
                        }`}
                >
                    {year}
                </button>
            ))}
        </div>
    );
}
