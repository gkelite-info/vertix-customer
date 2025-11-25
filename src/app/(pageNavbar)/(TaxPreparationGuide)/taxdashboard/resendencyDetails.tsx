'use client';

import { useYear } from "@/app/api/context/yearContext";
import { upsertResidencyDetails } from "@/app/api/SupabaseAPI/customer/residency";
import { useState } from "react";
import toast from "react-hot-toast";

type Tab =
    | "Dependents"
    | "Residency Details"
    | "Income Details"

type ResidencyDetailsProps = {
    setActiveTab: (tab: Tab) => void
}


export default function ResidencyDetails({ setActiveTab }: ResidencyDetailsProps) {
    const { selectedYear } = useYear();
    const [citizen, setCitizen] = useState(false);

    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const [notes, setNotes] = useState("");

    const handleDateChange = (setter: React.Dispatch<React.SetStateAction<string>>) =>
        (e: React.ChangeEvent<HTMLInputElement>) => {
            let input = e.target.value.replace(/\D/g, "");
            if (input.length > 8) input = input.slice(0, 8);

            let formatted = "";
            if (input.length <= 2) {
                formatted = input;
                if (input.length === 2) formatted += "/";
            } else if (input.length <= 4) {
                formatted = input.slice(0, 2) + "/" + input.slice(2);
                if (input.length === 4) formatted += "/";
            } else {
                formatted = input.slice(0, 2) + "/" + input.slice(2, 4) + "/" + input.slice(4);
            }

            setter(formatted);
        };


    const handleTextInput = (setter: React.Dispatch<React.SetStateAction<string>>) =>
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const value = e.target.value;
            if (/^[A-Za-z ]*$/.test(value)) {
                setter(value);
            }
        };


    const handleSave = async () => {
        try {
            await upsertResidencyDetails({
                fromDate,
                toDate,
                state,
                country,
                notes,
                residencyType: "home",
                spouseSameResidency: citizen,
            });
            toast.success("Successfully saved Residency Details");
        } catch (error) {
            console.error(error);
            toast.error("Failed to save Residency Details");
        }
    };

    return (
        <>
            <div className="bg-red-00">
                <div className="flex flex-col items-start">
                    <h4 className="text-[#1D2B48] font-semibold">Tax Payers Residency</h4>
                    <div className="bg-green-00 w-[90%] p-2 h-30 mt-4 rounded-lg border-1 border-[#B5B5B5] flex flex-col justify-between">
                        <div className="h-[20%] bg-indigo-00 p-1 text-start">
                            <h3 className="text-[#1D2B48] font-semibold text-sm">{selectedYear || "No year selected"}</h3>
                        </div>
                        <div className="h-[80%] bg-yellow-00 gap-3 flex items-end rounded-b-lg text-start">
                            <div className="flex flex-col justify-between bg-pink-00 w-[20%] h-[75%] rounded-md p-1">
                                <p className="text-[#2F3F5F] font-medium text-sm">From Date</p>
                                <div className="bg-green-00 h-[60%] flex items-center shadow-lg rounded-md p-2">
                                    <input
                                        type="text"
                                        placeholder="DD/MM/YYYY"
                                        value={fromDate}
                                        onChange={handleDateChange(setFromDate)}
                                        className="w-full text-[#666A74] bg-transparent text-sm outline-none placeholder-[#666A74]"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col justify-between bg-pink-00 w-[20%] h-[75%] rounded-md p-1">
                                <p className="text-[#2F3F5F] font-medium text-sm">To Date</p>
                                <div className="bg-green-00 h-[60%] flex items-center shadow-lg rounded-md p-1">
                                    <input
                                        type="text"
                                        placeholder="DD/MM/YYYY"
                                        value={toDate}
                                        onChange={handleDateChange(setToDate)}
                                        className="w-full text-[#666A74] bg-transparent text-sm outline-none placeholder-[#666A74]"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col justify-between bg-pink-00 w-[20%] h-[75%] rounded-md p-1">
                                <p className="text-[#2F3F5F] font-medium text-sm">State</p>
                                <div className="bg-green-00 h-[60%] flex items-center shadow-lg rounded-md p-1">
                                    <input
                                        type="text"
                                        placeholder="Enter state"
                                        value={state}
                                        onChange={handleTextInput(setState)}
                                        className="w-full text-[#666A74] bg-transparent text-sm outline-none placeholder-[#666A74]"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col justify-between bg-pink-00 w-[20%] h-[75%] rounded-md p-1">
                                <p className="text-[#2F3F5F] font-medium text-sm">Country</p>
                                <div className="bg-green-00 h-[60%] flex items-center shadow-lg rounded-md p-1">
                                    <input
                                        type="text"
                                        placeholder="Enter country"
                                        value={country}
                                        onChange={handleTextInput(setCountry)}
                                        className="w-full text-[#666A74] bg-transparent text-sm outline-none placeholder-[#666A74]"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <h4 className="text-[#1D2B48] font-semibold mt-5">Spouser Residency</h4>
                    <div className="bg-red-00 flex gap-28 w-[100%] items-center mt-4">
                        <h4 className="text-[#3E3E3E] font-medium text-sm">Same details applicable for your spouse ?</h4>
                        <div className="flex items-center gap-2">
                            <span className={`text-sm font-semibold ${!citizen ? 'text-[#2F3F5F]' : 'text-[#2F3F5F]'}`}>
                                No
                            </span>

                            <button
                                onClick={() => setCitizen(!citizen)}
                                className={`w-12 h-6 flex cursor-pointer items-center rounded-full p-1 transition-colors duration-300
            ${citizen ? 'bg-blue-500' : 'bg-gray-300'}`}
                            >
                                <div
                                    className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300
              ${citizen ? 'translate-x-6' : 'translate-x-0'}`}
                                ></div>
                            </button>

                            <span className={`text-sm font-semibold ${citizen ? 'text-[#2F3F5F]' : 'text-[#2F3F5F]'}`}>
                                Yes
                            </span>
                        </div>
                    </div>
                    <div className="bg-green-00 mt-5 w-[90%]">
                        <h3 className="text-[#1D2B48] font-semibold text-start">Notes</h3>
                        <textarea
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                            rows={6}
                            className="w-full p-2 rounded-md border border-[#B5B5B5] text-[#616A74] text-sm mt-2 resize-none outline-none"
                            placeholder="Enter any notes here"
                        ></textarea>
                    </div>
                    <div className="bg-red-00 w-[90%] mt-3 flex items-center justify-center gap-3">
                        <button
                            onClick={() => setActiveTab("Dependents")}
                            className="bg-[#1D2B48] rounded-md px-4 py-2 w-[15%] text-[#FFFEFE] cursor-pointer font-medium text-sm">Previous</button>
                        <button
                            onClick={handleSave}
                            className="bg-[#1D2B48] rounded-md px-4 py-2 w-[15%] text-[#FFFEFE] cursor-pointer font-medium text-sm">Save</button>
                        <button
                            onClick={() => setActiveTab("Income Details")}
                            className="bg-[#1D2B48] rounded-md px-4 py-2 w-[15%] text-[#FFFEFE] cursor-pointer font-medium text-sm">Next</button>
                    </div>
                </div>
            </div>
        </>
    )
}