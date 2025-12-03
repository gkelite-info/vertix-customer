'use client'
import { MinusCircle, PlusCircle } from "phosphor-react";

export default function MigrationCard({
    fromDate,
    toDate,
    state,
    country,
    setFromDate,
    setToDate,
    setState,
    setCountry,
    onAddMore,
    onDelete
}: {
    fromDate: string;
    toDate: string;
    state: string;
    country: string;
    setFromDate: (val: string) => void;
    setToDate: (val: string) => void;
    setState: (val: string) => void;
    setCountry: (val: string) => void;
    onAddMore?: () => void;
    onDelete?: () => void;
}) {


    const handleDateChange = (setter: (val: string) => void) =>
        (e: React.ChangeEvent<HTMLInputElement>) => {
            let input = e.target.value.replace(/\D/g, "");

            if (input.length > 8) input = input.slice(0, 8);

            let mm = input.slice(0, 2);
            let dd = input.slice(2, 4);
            let yyyy = input.slice(4, 8);

            if (mm.length === 2) {
                let m = parseInt(mm, 10);
                if (m < 1) m = 1;
                if (m > 12) m = 12;
                mm = m.toString().padStart(2, "0");
            }

            if (dd.length === 2) {
                let d = parseInt(dd, 10);
                if (d < 1) d = 1;
                if (d > 31) d = 31;
                dd = d.toString().padStart(2, "0");
            }

            let formatted = "";
            if (mm) {
                formatted = mm.length === 2 ? mm + "/" : mm;
            }
            if (dd) {
                formatted += dd.length === 2 ? dd + "/" : dd;
            }
            if (yyyy) {
                formatted += yyyy;
            }
            setter(formatted);
        };

    const handleTextInput = (setter: (v: string) => void) =>
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const value = e.target.value;
            const filtered = value.replace(/[^a-zA-Z\s]/g, "");
            const capitalized = filtered.replace(/\b\w/g, (char) =>
                char.toUpperCase()
            );
            setter(capitalized);
        };

    return (
        <>
            <div className="h-[80%] bg-yellow-00 gap-3 flex flex-col justify-end items-between rounded-b-lg text-start">
                <div className="flex items-end justify-between bg-red-00">
                    <div className="flex items-end bg-red-00">
                        <div className="flex flex-col justify-between bg-pink-00 w-[20%] h-[75%] rounded-md p-1">
                            <p className="text-[#2F3F5F] font-medium text-sm">From Date</p>
                            <div className="bg-green-00 flex items-center shadow-lg rounded-md p-1">
                                <input
                                    type="text"
                                    placeholder="MM/DD/YYYY"
                                    value={fromDate}
                                    onChange={handleDateChange(setFromDate)}
                                    className="w-full text-[#666A74] bg-transparent text-sm outline-none placeholder-[#666A74]"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col justify-between bg-pink-00 w-[20%] h-[75%] rounded-md p-1">
                            <p className="text-[#2F3F5F] font-medium text-sm">To Date</p>
                            <div className="bg-green-00 flex items-center shadow-lg rounded-md p-1">
                                <input
                                    type="text"
                                    placeholder="MM/DD/YYYY"
                                    value={toDate}
                                    onChange={handleDateChange(setToDate)}
                                    className="w-full text-[#666A74] bg-transparent text-sm outline-none placeholder-[#666A74]"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col justify-between bg-pink-00 w-[20%] h-[75%] rounded-md p-1">
                            <p className="text-[#2F3F5F] font-medium text-sm">State</p>
                            <div className="bg-green-00 flex items-center shadow-lg rounded-md p-1">
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
                            <div className="bg-green-00 flex items-center shadow-lg rounded-md p-1">
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
                    {onDelete && (
                        <button
                            onClick={onDelete}
                            className="p-2 rounded-full cursor-pointer"
                        >
                            <MinusCircle size={20} color="#CC0000" />
                        </button>
                    )}
                </div>
                {onAddMore && (
                    <div className="flex items-end bg-green-00 gap-1 justify-start cursor-pointer"
                        onClick={onAddMore}
                    >
                        <p className="text-xs font-medium text-[#1D2B48]">Add more</p>
                        <PlusCircle size={16} weight="fill" color="#1D2B48" />
                    </div>
                )}
            </div>
        </>
    )
}