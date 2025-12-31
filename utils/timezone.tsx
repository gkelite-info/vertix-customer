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
                    <option value="America/New_York">(GMT -05:00) New York (EST)</option>
                    <option value="Europe/London">(GMT +00:00) London (GMT)</option>
                    <option value="Asia/Kolkata">(GMT +05:30) India (IST)</option>
                    <option value="Asia/Dubai">(GMT +04:00) Dubai (GST)</option>
                    <option value="Australia/Sydney">(GMT +10:00) Sydney (AEST)</option>
                </select>
            </div>
        </div>
    );
}
