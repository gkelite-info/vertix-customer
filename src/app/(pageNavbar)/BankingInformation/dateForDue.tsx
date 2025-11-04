"use client";

import { useEffect, useState } from "react";
import { State } from "country-state-city";
import toast from "react-hot-toast";
import DatePickerWithRestriction from "../../../../utils/datePicker";
import { useYear } from "@/app/api/context/yearContext";
import { upsertDateForDue, getDateForDue } from "@/app/api/SupabaseAPI/customer/dueDate";

type Prop = {
    style?: string;
    readonly?: boolean;
};

export default function DateForDue({ style = "", readonly = false }: Prop) {
    const [usStates, setUsStates] = useState<{ name: string; isoCode: string }[]>([]);
    const { filingYearId } = useYear();

    const [selectedDate, setSelectedDate] = useState<string>("");
    const [federal, setFederal] = useState<"Paid" | "Unpaid" | "">("");
    const [state1, setState1] = useState("");
    const [state2, setState2] = useState("");
    const [state3, setState3] = useState("");
    const [state4, setState4] = useState("");
    const [state5, setState5] = useState("");
    const [state6, setState6] = useState("");

    useEffect(() => {
        const states = State.getStatesOfCountry("US");
        setUsStates(states);
    }, []);

    useEffect(() => {
        if (!filingYearId) return;

        const fetchData = async () => {
            try {
                const data = await getDateForDue(filingYearId);
                if (data) {
                    setSelectedDate(data.dueDate || "");
                    setFederal(data.federalStatus || "");
                    setState1(data.state1 || "");
                    setState2(data.state2 || "");
                    setState3(data.state3 || "");
                    setState4(data.state4 || "");
                    setState5(data.state5 || "");
                    setState6(data.state6 || "");
                }
            } catch (err) {
                console.error("Failed to fetch Date for Due:", err);
            }
        };

        fetchData();
    }, [filingYearId]);


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (readonly) return;

        if (!filingYearId) return toast.error("Filing year not selected.");
        if (!selectedDate) return toast.error("Please select a date.");
        if (!federal) return toast.error("Please select Federal status.");
        if (!state1) return toast.error("State 1 is mandatory.");

        try {
            const payload = {
                filingYearId,
                date: selectedDate,
                federal,
                state1,
                state2: state2 || null,
                state3: state3 || null,
                state4: state4 || null,
                state5: state5 || null,
                state6: state6 || null,
            };

            await upsertDateForDue(payload);
            toast.success("Date for Due saved successfully!");
        } catch (err: any) {
            console.error(err);
            toast.error(err.message || "Failed to save Date for Due.");
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className={`bg-white w-full mt-7 pb-7 rounded-md p-5 ${style}`}
        >
            <h3 className="text-[#1D2B48] font-semibold mb-3">
                Date for Due {readonly && <span className="text-xs text-gray-400">(View Only)</span>}
            </h3>

            <div className="flex flex-wrap gap-4">
                <div className="flex flex-col">
                    <label className="text-xs text-[#1D2B48] mb-1">
                        Date <span className="text-red-500 font-medium">*</span>
                    </label>
                    <DatePickerWithRestriction
                        onChange={(val: string) => setSelectedDate(val)}
                        disabled={readonly}
                        value={selectedDate}
                    />
                </div>

                <div className="flex flex-col">
                    <label className="text-xs text-[#1D2B48] mb-1">
                        Federal <span className="text-red-500 font-medium">*</span>
                    </label>
                    <select
                        value={federal}
                        onChange={(e) => setFederal(e.target.value as "Paid" | "Unpaid" | "")}
                        disabled={readonly}
                        className="w-[10rem] h-[40px] text-black border border-gray-300 rounded-sm p-1 text-sm focus:outline-none"
                    >
                        <option value="">Select one</option>
                        <option value="Paid">Paid</option>
                        <option value="Unpaid">Unpaid</option>
                    </select>
                </div>

                {[
                    { label: "State 1", value: state1, setter: setState1 },
                    { label: "State 2", value: state2, setter: setState2 },
                    { label: "State 3", value: state3, setter: setState3 },
                    { label: "State 4", value: state4, setter: setState4 },
                    { label: "State 5", value: state5, setter: setState5 },
                    { label: "State 6", value: state6, setter: setState6 },
                ].map(({ label, value, setter }, index) => (
                    <div key={index} className="flex flex-col">
                        <label className="text-xs text-[#1D2B48] mb-1">
                            {label}
                            {label === "State 1" && (
                                <span className="text-red-500 font-medium">*</span>
                            )}
                        </label>
                        <select
                            value={value}
                            onChange={(e) => setter(e.target.value)}
                            disabled={readonly}
                            className="w-[10rem] h-[40px] text-black border border-gray-300 rounded-sm p-1 text-sm focus:outline-none"
                        >
                            <option value="">Select one</option>
                            {usStates.map((state) => (
                                <option key={state.isoCode} value={state.name}>
                                    {state.name}
                                </option>
                            ))}
                        </select>
                    </div>
                ))}
            </div>

            {!readonly && (
                <div className="mt-6">
                    <button
                        type="submit"
                        className="bg-[#1D2B48] cursor-pointer text-white font-medium py-2 px-6 rounded-md text-sm transition-all"
                    >
                        Submit
                    </button>
                </div>
            )}
        </form>
    );
}
