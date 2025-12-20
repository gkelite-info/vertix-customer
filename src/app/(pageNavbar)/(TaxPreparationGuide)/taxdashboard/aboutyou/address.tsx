'use client'
import { useState } from "react";

type Props = {
    street: string;
    setStreet: (v: string) => void;

    city: string;
    setCity: (v: string) => void;

    state: string;
    setState: (v: string) => void;

    zipcode: string;
    setZipcode: (v: string) => void;

    note: string;
    setNote: (v: string) => void;

    setHasDependents?: (val: boolean) => void;
    setActiveTab?: (tab: string) => void
}

export default function AddressAboutYou({ street,
    setStreet,
    city,
    setCity,
    state,
    setState,
    zipcode,
    setZipcode,
    note,
    setNote,
    setHasDependents,
    setActiveTab, }: Props) {

    const [dependent, setDependent] = useState(false);


    const handleOnlyLetters = (setter: (v: string) => void) =>
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const value = e.target.value;
            const filtered = value.replace(/[^A-Za-z\s]/g, "");
            const capitalized =
                filtered.charAt(0).toUpperCase() + filtered.slice(1);
            setter(capitalized);
        };

    const allowOnlyNumbers = (setter: (v: string) => void) =>
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const filtered = e.target.value.replace(/\D/g, "");
            setter(filtered);
        };

    const handleToggleDependents = () => {
        const newVal = !dependent;
        setDependent(newVal);
        if (setHasDependents) setHasDependents(newVal);
    };

    return (
        <>
            <div className="bg-red-00 flex flex-col h-fit w-[95%]">
                <div className="flex bg-green-00 w-[100%] mt-4 h-10 items-center justify-start gap-7">
                    <h4 className="text-[#1D2B48] font-medium text-sm">Street/Apartment</h4>
                    <input
                        value={street}
                        onChange={handleOnlyLetters(setStreet)}
                        className="border rounded-md text-[#616161] border-[#B5B5B5] w-[45%] h-[100%] px-3 text-sm focus:outline-none"
                        placeholder="Enter street/apartment"
                    />
                </div>
                <div className="flex bg-green-00 w-[100%] mt-5 h-10 items-center justify-start gap-7">
                    <h4 className="text-[#1D2B48] font-medium text-sm">City</h4>
                    <input
                        value={city}
                        onChange={handleOnlyLetters(setCity)}
                        className="border rounded-md text-[#616161] border-[#B5B5B5] w-[45%] h-[100%] px-3 text-sm focus:outline-none"
                        placeholder="Enter city"
                    />
                </div>
                <div className="flex bg-green-00 w-[100%] mt-5 h-10 items-center justify-start gap-7">
                    <h4 className="text-[#1D2B48] font-medium text-sm">State</h4>
                    <input
                        value={state}
                        onChange={handleOnlyLetters(setState)}
                        className="border rounded-md text-[#616161] border-[#B5B5B5] w-[45%] h-[100%] px-3 text-sm focus:outline-none"
                        placeholder="Enter state"
                    />
                </div>
                <div className="flex bg-green-00 w-[100%] mt-5 h-10 items-center justify-start gap-7">
                    <h4 className="text-[#1D2B48] font-medium text-sm">Zipcode</h4>
                    <input
                        value={zipcode}
                        onChange={allowOnlyNumbers(setZipcode)}
                        className="border rounded-md text-[#616161] border-[#B5B5B5] w-[45%] h-[100%] px-3 text-sm focus:outline-none"
                        placeholder="Enter zipcode"
                    />
                </div>
                <div className="flex flex-col bg-green-00 w-[100%] mt-5 items-start justify-center">
                    <h4 className="text-[#1D2B48] font-medium text-sm mb-2">Note</h4>
                    <textarea
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        className="flex items-start justify-start border rounded-md text-[#616161] border-[#B5B5B5] w-[45%] p-2 text-sm focus:outline-none"
                        placeholder="Enter note"
                        rows={5}
                    />
                </div>
                <div className="flex items-center gap-3 mt-6">
                    <h4 className="text-[#3E3E3E] font-medium text-sm">Do you have dependent?</h4>
                    <span className="text-sm font-semibold text-[#2F3F5F]">No</span>
                    <button
                        onClick={handleToggleDependents}
                        className={`w-12 h-6 flex items-center p-1 rounded-full cursor-pointer transition-colors duration-300
                        ${dependent ? 'bg-blue-500' : 'bg-gray-300'}`}
                    >
                        <div className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300
                        ${dependent ? 'translate-x-6' : 'translate-x-0'}`}
                        ></div>
                    </button>

                    <span className="text-sm font-semibold text-[#2F3F5F]">Yes</span>
                </div>
            </div>
        </>
    )
}