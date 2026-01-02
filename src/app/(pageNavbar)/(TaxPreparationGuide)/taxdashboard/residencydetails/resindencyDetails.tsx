'use client';

import { useYear } from "@/app/api/context/yearContext";
import { upsertResidencyDetails } from "@/app/api/SupabaseAPI/customer/residency";
import { useState } from "react";
import toast from "react-hot-toast";
import MigrationCard from "./migrationCard";

type Tab = "Dependents" | "Residency Details" | "Income Details";

type MigrationField = "fromDate" | "toDate" | "state" | "country";

type ButtonType = "Save" | "Next";

export default function ResidencyDetails({ setActiveTab }: { setActiveTab: (tab: Tab) => void }) {

    const { filingYearId, selectedYear } = useYear();

    const [spouseResidency, setSpouseResidency] = useState(true);
    const [notes, setNotes] = useState("");
    const [loading, setLoading] = useState(false);

    const [migrationList, setMigrationList] = useState([
        { fromDate: "", toDate: "", state: "", country: "" }
    ]);

    const [spouseMigrationList, setSpouseMigrationList] = useState([
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

    const updateSpouseField = (index: number, field: MigrationField, value: string) => {
        const updated = [...spouseMigrationList];
        updated[index][field] = value;
        setSpouseMigrationList(updated);
    };

    const deleteSpouseRow = (index: number) => {
        if (spouseMigrationList.length === 1) return;
        setSpouseMigrationList(spouseMigrationList.filter((_, i) => i !== index));
    };

    const addSpouseMore = () => {
        setSpouseMigrationList([
            ...spouseMigrationList,
            { fromDate: "", toDate: "", state: "", country: "" }
        ]);
    };

    const handleSave = async (button: ButtonType) => {
        if (!filingYearId) {
            toast.error("Please select a filing year first!")
            return;
        }
        setLoading(true);
        try {
            const isValidMigration = migrationList.every(m =>
                m.fromDate && m.toDate && m.state && m.country
            );

            if (!isValidMigration) {
                toast.error("Please fill all residency details");
                return;
            }

            const res = await upsertResidencyDetails({
                migrations: migrationList,
                spouseMigrations: spouseResidency ? [] : spouseMigrationList,
                notes,
                spouseResidency,
                filingYearId

            });
            if (res?.alreadyExists) {
                toast.error("Data already exists");
                return;
            }
            toast.success("Residency details saved successfully!");
            if (button === "Next") {
                setActiveTab("Income Details")
            }
        } catch (error: any) {
            toast.error(error.message || "Failed to save residency details");
        }
        finally {
            setLoading(false);
            return
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
                            <span className={`text-sm font-semibold ${!spouseResidency ? 'text-[#2F3F5F]' : 'text-[#2F3F5F]'}`}>
                                No
                            </span>

                            <button
                                onClick={() => setSpouseResidency(!spouseResidency)}
                                className={`w-12 h-6 flex cursor-pointer items-center rounded-full p-1 transition-colors duration-300
            ${spouseResidency ? 'bg-blue-500' : 'bg-gray-300'}`}
                            >
                                <div
                                    className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300
              ${spouseResidency ? 'translate-x-6' : 'translate-x-0'}`}
                                ></div>
                            </button>

                            <span className={`text-sm font-semibold ${spouseResidency ? 'text-[#2F3F5F]' : 'text-[#2F3F5F]'}`}>
                                Yes
                            </span>
                        </div>
                    </div>
                    {!spouseResidency && (
                        <div className="bg-green-00 w-[90%] p-2 mt-4 rounded-lg border-1 border-[#B5B5B5] flex flex-col justify-between">
                            <div className="h-[20%] bg-indigo-00 p-1 text-start">
                                <h3 className="text-[#1D2B48] font-semibold text-sm">{selectedYear || "No year selected"}</h3>
                            </div>
                            {spouseMigrationList.map((item, index) => (
                                <MigrationCard
                                    key={index}
                                    fromDate={item.fromDate}
                                    toDate={item.toDate}
                                    state={item.state}
                                    country={item.country}
                                    setFromDate={(v) => updateSpouseField(index, "fromDate", v)}
                                    setToDate={(v) => updateSpouseField(index, "toDate", v)}
                                    setState={(v) => updateSpouseField(index, "state", v)}
                                    setCountry={(v) => updateSpouseField(index, "country", v)}
                                    onAddMore={index === spouseMigrationList.length - 1 ? addSpouseMore : undefined}
                                    onDelete={index !== 0 ? () => deleteSpouseRow(index) : undefined}
                                />
                            ))}
                        </div>
                    )}

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
                            className="bg-[#1D2B48] rounded-md px-4 py-2 w-[15%] text-[#FFFEFE] cursor-pointer font-medium text-sm">
                            Previous
                        </button>
                        <button
                            onClick={() => handleSave("Save")}
                            className="bg-[#1D2B48] rounded-md px-4 py-2 w-[15%] text-[#FFFEFE] cursor-pointer font-medium text-sm"
                            disabled={loading}
                        >
                            {loading ? "Saving..." : "Save"}
                        </button>
                        <button
                            onClick={() => {
                                handleSave("Next");
                            }}
                            className="bg-[#1D2B48] rounded-md px-4 py-2 w-[15%] text-[#FFFEFE] cursor-pointer font-medium text-sm">
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}