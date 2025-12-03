'use client';

import { useYear } from "@/app/api/context/yearContext";
import { upsertResidencyDetails } from "@/app/api/SupabaseAPI/customer/residency";
import { useState } from "react";
import toast from "react-hot-toast";
import MigrationCard from "./migrationCard";

type Tab = "Dependents" | "Residency Details" | "Income Details";

type MigrationField = "fromDate" | "toDate" | "state" | "country";

export default function ResidencyDetails({ setActiveTab }: { setActiveTab: (tab: Tab) => void }) {

    const { selectedYear } = useYear();
    const [citizen, setCitizen] = useState(false);
    const [notes, setNotes] = useState("");

    const [migrationList, setMigrationList] = useState([
        { fromDate: "", toDate: "", state: "", country: "" }
    ]);

    const updateField = (index: number, field: MigrationField, value: string) => {
        const updated = [...migrationList];
        updated[index][field] = value;
        setMigrationList(updated);
    };

    const deleteRow = (index: number) => {
        if (migrationList.length === 1) return;
        setMigrationList(migrationList.filter((_, i) => i !== index));
    };

    const addMore = () => {
        setMigrationList([
            ...migrationList,
            { fromDate: "", toDate: "", state: "", country: "" }
        ]);
    };

    const handleSave = async () => {
        try {
            await upsertResidencyDetails({
                migrations: migrationList,
                notes,
            });

            toast.success("Residency details saved successfully!");
        } catch (error) {
            console.error(error);
            toast.error("Failed to save residency details");
        }
    };

    return (
        <>
            <div className="bg-red-00">
                <div className="flex flex-col items-start">
                    <h4 className="text-[#1D2B48] font-semibold">Tax Payers Residency</h4>
                    <div className="bg-green-00 w-[90%] p-2 mt-4 rounded-lg border-1 border-[#B5B5B5] flex flex-col justify-between">
                        <div className="h-[20%] bg-indigo-00 p-1 text-start">
                            <h3 className="text-[#1D2B48] font-semibold text-sm">{selectedYear || "No year selected"}</h3>
                        </div>
                        {migrationList.map((item, index) => (
                            <MigrationCard
                                key={index}
                                fromDate={item.fromDate}
                                toDate={item.toDate}
                                state={item.state}
                                country={item.country}
                                setFromDate={(v) => updateField(index, "fromDate", v)}
                                setToDate={(v) => updateField(index, "toDate", v)}
                                setState={(v) => updateField(index, "state", v)}
                                setCountry={(v) => updateField(index, "country", v)}
                                onAddMore={index === migrationList.length - 1 ? addMore : undefined}
                                onDelete={index !== 0 ? () => deleteRow(index) : undefined}
                            />
                        ))}
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
                        />
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