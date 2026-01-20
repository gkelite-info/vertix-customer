'use client'
import { MinusCircle, PlusCircle } from "phosphor-react";
import { useRef } from "react";

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
    onDelete,
    disabled = false,
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
    disabled?: boolean;
}) {
    const prevValueRef = useRef("");

    const handleDateChange =
        (setter: (val: string) => void) =>
            (e: React.ChangeEvent<HTMLInputElement>) => {
                const raw = e.target.value;
                const prev = prevValueRef.current;

                const isDeleting = raw.length < prev.length;

                if (isDeleting) {
                    prevValueRef.current = raw;
                    setter(raw);
                    return;
                }

                let input = raw.replace(/\D/g, "");
                if (input.length > 8) input = input.slice(0, 8);

                let mm = input.slice(0, 2);
                let dd = input.slice(2, 4);
                let yyyy = input.slice(4, 8);

                if (mm.length === 2) {
                    let m = parseInt(mm, 10);
                    mm = Math.min(Math.max(m, 1), 12).toString().padStart(2, "0");
                }

                if (dd.length === 2) {
                    let d = parseInt(dd, 10);
                    dd = Math.min(Math.max(d, 1), 31).toString().padStart(2, "0");
                }

                let formatted = mm;
                if (mm.length === 2) formatted += "/";
                if (dd) formatted += dd;
                if (dd.length === 2) formatted += "/";
                if (yyyy) formatted += yyyy;

                prevValueRef.current = formatted;
                setter(formatted);
            };

    // const handleDateChange = (setter: (val: string) => void) =>
    //     (e: React.ChangeEvent<HTMLInputElement>) => {
    //         let input = e.target.value.replace(/\D/g, "");

    //         if (input.length > 8) input = input.slice(0, 8);

    //         let mm = input.slice(0, 2);
    //         let dd = input.slice(2, 4);
    //         let yyyy = input.slice(4, 8);

    //         if (mm.length === 2) {
    //             let m = parseInt(mm, 10);
    //             if (m < 1) m = 1;
    //             if (m > 12) m = 12;
    //             mm = m.toString().padStart(2, "0");
    //         }

    //         if (dd.length === 2) {
    //             let d = parseInt(dd, 10);
    //             if (d < 1) d = 1;
    //             if (d > 31) d = 31;
    //             dd = d.toString().padStart(2, "0");
    //         }

    //         let formatted = "";
    //         if (mm) {
    //             formatted = mm.length === 2 ? mm + "/" : mm;
    //         }
    //         if (dd) {
    //             formatted += dd.length === 2 ? dd + "/" : dd;
    //         }
    //         if (yyyy) {
    //             formatted += yyyy;
    //         }
    //         setter(formatted);
    //     };

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
            <div className="h-[80%] bg-yellow-00 gap-3 flex flex-col justify-end items-between text-start">
                <div className="flex items-end justify-between bg-red-00">
                    <div className="flex items-end bg-red-00 gap-2">
                        <div className="flex flex-col justify-between bg-pink-00 w-[20%] h-[75%] rounded-md p-1">
                            <p className="text-[#2F3F5F] font-medium text-sm">From Date</p>
                            <div className="bg-green-00 flex items-center shadow-lg rounded-md p-1">
                                <input
                                    type="text"
                                    placeholder="MM/DD/YYYY"
                                    value={fromDate}
                                    disabled={disabled}
                                    onChange={handleDateChange(setFromDate)}
                                    className={`w-full text-[#666A74] bg-transparent text-sm outline-none placeholder-[#666A74] ${disabled && "cursor-not-allowed"}`}
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
                                    disabled={disabled}
                                    onChange={handleDateChange(setToDate)}
                                    className={`w-full text-[#666A74] bg-transparent text-sm outline-none placeholder-[#666A74] ${disabled && "cursor-not-allowed"}`}
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
                                    disabled={disabled}
                                    onChange={handleTextInput(setState)}
                                    className={`w-full text-[#666A74] bg-transparent text-sm outline-none placeholder-[#666A74] ${disabled && "cursor-not-allowed"}`}
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
                                    disabled={disabled}
                                    onChange={handleTextInput(setCountry)}
                                    className={`w-full text-[#666A74] bg-transparent text-sm outline-none placeholder-[#666A74] ${disabled && "cursor-not-allowed"}`}
                                />
                            </div>
                        </div>
                    </div>
                    {onDelete && (
                        <button
                            onClick={disabled ? undefined : onDelete}
                            disabled={disabled}
                            className={`p-2 rounded-full cursor-pointer ${disabled && "cursor-not-allowed"}`}
                        >
                            <MinusCircle size={20} color="#CC0000" className={`${disabled && "cursor-not-allowed"}`}/>
                        </button>
                    )}
                </div>
                {onAddMore && (
                    <div className="flex items-end bg-green-00 gap-1 justify-start cursor-pointer"
                        onClick={ disabled ? undefined : onAddMore}
                    >
                        <p className={`text-xs font-medium text-[#1D2B48] ${disabled && "cursor-not-allowed"}`}>Add more</p>
                        <PlusCircle size={16} weight="fill" color="#1D2B48" className={`${disabled && "cursor-not-allowed"}`}/>
                    </div>
                )}
            </div>
        </>
    )
}