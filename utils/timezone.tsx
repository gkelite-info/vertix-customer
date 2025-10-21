"use client";
import { SetStateAction, useState } from "react";

type TimezoneSelectProps = {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    width: string
};

export default function TimezoneSelect({ value, onChange, width = "w-[100%] mb-0" }: TimezoneSelectProps) {
    const [timezone, setTimezone] = useState("");

    const handleChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setTimezone(e.target.value);
    };

    return (
        <div className={`bg-red-00 flex flex-col ${width}`}>
            <div className="flex items-center gap-2.5">
                <label className="text-sm font-semibold text-[#1D2B48] w-[40%]">
                    Select Timezone
                </label>
                <select
                    value={value}
                    onChange={onChange}
                    className="border border-gray-300 w-[90%] rounded text-[#1D2B48] px-2 py-2 mt-1 focus:outline-none w-full text-sm"
                >
                    <option>Choose</option>
                    <option value="America/New_York">New York (UTC-05:00)</option>
                    <option value="Europe/London">London (UTC+00:00)</option>
                    <option value="Asia/Kolkata">India (UTC+05:30)</option>
                    <option value="Asia/Dubai">Dubai (UTC+04:00)</option>
                    <option value="Australia/Sydney">Sydney (UTC+10:00)</option>
                </select>
            </div>
        </div>
    );
}
