'use client';

import { useEffect, useState } from "react";
import ThreeOptionToggle from "../../../../../../utils/threeOptionToggle";
import { getCustomer } from "@/app/api/SupabaseAPI/customer/customerApi";
import toast from "react-hot-toast";
import { useYear } from "@/app/api/context/yearContext";
import AddressAboutYou from "./address";
import { getAboutYou, upsertAboutYou } from "@/app/api/SupabaseAPI/customer/aboutyouAPI";
import { getSpouse, upsertSpouse } from "@/app/api/SupabaseAPI/customer/spousesAPI";

const VISA_OPTIONS = ["L1", "L2", "L3"];

export type Tab =
    | "About You"
    | "Dependents"
    | "Residency Details"
    | "Income Details"
    | "Deduction Details"
    | "FBAR/FATCA";

type AboutYouProps = {
    setActiveTab: (tab: Tab) => void;
    setHasDependents: (val: boolean) => void;
};

type Buttontype = "Save" | "Next";


export default function AboutYou({ setActiveTab, setHasDependents }: AboutYouProps): React.ReactElement {
    const { selectedYear } = useYear();
    const [loading, setLoading] = useState(false);

    const [firstName, setFirstName] = useState("");
    const [middleName, setMiddleName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dob, setDob] = useState("");
    const [occupation, setOccupation] = useState("");
    const [citizen, setCitizen] = useState(false);
    const [isMarried, setIsMarried] = useState(false);

    const [yourSSN, setYourSSN] = useState("");
    const [yourSSNValue, setYourSSNValue] = useState("");
    const [visaJan, setVisaJan] = useState("");
    const [visaDec, setVisaDec] = useState("");
    const [firstEntryDate, setFirstEntryDate] = useState("");
    const [monthsInUS, setMonthsInUS] = useState("");
    const [citizenshipCountry, setCitizenshipCountry] = useState("");
    const [greenCardConditional, setGreenCardConditional] = useState(false)

    const [spouseFirstName, setSpouseFirstName] = useState("");
    const [spouseMiddleName, setSpouseMiddleName] = useState("");
    const [spouseLastName, setSpouseLastName] = useState("");
    const [spouseDOB, setSpouseDOB] = useState("");
    const [spouseCitizen, setSpouseCitizen] = useState(false);
    const [spouseOccupation, setSpouseOccupation] = useState("");
    const [spouseUsStatus, setSpouseUsStatus] = useState<"none" | "citizen" | "green_card">("none");
    const [spouseSSN, setSpouseSSN] = useState("");
    const [spouseSSNValue, setSpouseSSNValue] = useState("");

    const [spouseVisaJan, setSpouseVisaJan] = useState("");
    const [spouseVisaDec, setSpouseVisaDec] = useState("");
    const [spouseFirstEntryDate, setSpouseFirstEntryDate] = useState("");
    const [spouseMonthsInUS, setSpouseMonthsInUS] = useState("");
    const [isReadOnly, setIsReadOnly] = useState(false);


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

    const validateBeforeSubmit = () => {

        if (!firstName || !lastName) return "First and Last Name are required";
        if (!dob) return "Date of Birth is required";
        if (!occupation) return "Occupation is required";
        if (!yourSSNValue) return "SSN / ITIN value is required";
        if (!firstEntryDate) return "First entry date is required";
        if (!monthsInUS || isNaN(Number(monthsInUS))) return "Months in US must be a number";

        if (isMarried) {
            if (!spouseFirstName || !spouseLastName) return "Spouse First and Last Name are required";
            if (!spouseDOB) return "Spouse Date of Birth is required";
            if (!spouseSSN) return "Spouse SSN / ITIN type is required";
        }
        return null;
    };

    function parseDateToISOString(dateStr: string): string | null {
        if (!dateStr) return null;
        const parts = dateStr.split("/");
        if (parts.length !== 3) return null;
        const [month, day, year] = parts.map(Number);
        if (!year || !month || !day || year < 1000 || month < 1 || month > 12 || day < 1 || day > 31) return null;
        const date = new Date(Date.UTC(year, month - 1, day));
        return isNaN(date.getTime()) ? null : date.toISOString();
    }

    const safeToISOString = (dateStr?: string | null) => {
        if (!dateStr) return null;
        return parseDateToISOString(dateStr);
    };


    const handleSave = async (button: Buttontype) => {
        const validationError = validateBeforeSubmit();
        if (validationError) {
            toast.error(validationError);
            return;
        }

        setLoading(true);

        try {
            const customer = await getCustomer();
            if (!customer) throw new Error("Customer not found or not authenticated");

            const customerId = customer.customerId;

            const existingAbout = await getAboutYou(customerId);

            if (existingAbout) {
                toast.error("Your personal details already exist. You cannot submit again.");
                return;
            }

            if (isMarried) {
                const existingSpouse = await getSpouse(customerId);

                if (existingSpouse) {
                    toast.error("Spouse details already exist. You cannot submit again.");
                    return;
                }
            }

            let spouseId: number | null = null;

            if (isMarried) {
                const spousePayload = {
                    customerId,
                    firstname: spouseFirstName?.trim(),
                    middlename: spouseMiddleName?.trim() || null,
                    lastname: spouseLastName?.trim(),

                    dob: safeToISOString(spouseDOB),
                    occupation: spouseOccupation || null,

                    yourSSNType: spouseSSN || null,
                    yourSSNValue: spouseSSNValue || null,

                    visaTypeJan: spouseVisaJan || null,
                    visaTypeDec: spouseVisaDec || null,

                    firstEntryDate: safeToISOString(spouseFirstEntryDate),
                    monthsInUS: spouseMonthsInUS ? Number(spouseMonthsInUS) : null,

                    createdAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString(),
                };

                const spouseRes = await upsertSpouse(spousePayload);
                spouseId = spouseRes?.spouseId ?? null;
            }

            const aboutPayload = {
                customerId,
                spouseId: isMarried ? spouseId : null,

                isMarried,
                dob: safeToISOString(dob),
                occupation: occupation || null,
                isCitizen: citizen,
                greenCardConditional,

                firstName: firstName?.trim() || (() => { throw new Error("firstName is required"); })(),
                middleName: middleName?.trim() || null,
                lastName: lastName?.trim() || (() => { throw new Error("lastName is required"); })(),

                yourSSNType: yourSSN || null,
                yourSSNValue: yourSSNValue || null,

                visaTypeJan: visaJan || null,
                visaTypeDec: visaDec || null,

                firstEntryDate: safeToISOString(firstEntryDate),
                monthsInUS: monthsInUS ? Number(monthsInUS) : null,

                citizenshipCountry: citizenshipCountry || null,

                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
            };

            const res = await upsertAboutYou(aboutPayload);

            if ("alreadyExists" in res) {
                toast.error("Data already exists");
                return;
            }
            toast.success("Details saved successfully!");
        } catch (error) {
            console.error("Error saving data:", error);
            toast.error("Failed to save details.");
            return false;
        } finally {
            setLoading(false);
        }
    };


    const handleNameInput = (setter: (v: string) => void) =>
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const value = e.target.value;
            const filtered = value.replace(/[^a-zA-Z\s]/g, "");
            const capitalized = filtered.replace(/\b\w/g, (char) =>
                char.toUpperCase()
            );

            setter(capitalized);
        };


    const handleTextOnly = (setter: (v: string) => void) =>
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
            <div className="bg-red-00 flex flex-col items-center">
                <h2 className="text-[#1D2B48] font-semibold text-xl">About You</h2>
                <div className="flex flex-col bg-red-00 w-[95%] items-start">
                    <div className="flex bg-green-00 w-[90%] mt-5 h-10 items-center justify-start gap-9">
                        <h4 className="text-[#1D2B48] font-medium text-sm">First Name <span className="text-red-500">*</span></h4>
                        <input
                            type="text"
                            value={firstName}
                            onChange={handleNameInput(setFirstName)}
                            placeholder="Enter first name"
                            className="border bg-red-00 rounded-md text-[#616161] border-[#B5B5B5] w-[45%] h-[100%] px-3 text-sm flex items-center focus:outline-none"
                        />
                    </div>
                    <div className="flex bg-pink-00 w-[90%] mt-5 h-10 items-center justify-start gap-7.5">
                        <h4 className="text-[#1D2B48] font-medium text-sm">Middle Name</h4>
                        <input type="text"
                            value={middleName}
                            onChange={handleNameInput(setMiddleName)}
                            placeholder="Enter middle name"
                            className="border bg-red-00 rounded-md text-[#616161] border-[#B5B5B5] w-[45%] h-[100%] px-3 text-sm focus:outline-none"
                        />
                    </div>

                    <div className="flex bg-green-00 w-[90%] mt-5 h-10 items-center justify-start gap-9.5">
                        <h4 className="text-[#1D2B48] font-medium text-sm">Last Name <span className="text-red-500">*</span></h4>
                        <input
                            type="text"
                            value={lastName}
                            onChange={handleNameInput(setLastName)}
                            placeholder="Enter last name"
                            className="border bg-red-00 rounded-md text-[#616161] border-[#B5B5B5] w-[45%] h-[100%] px-3 text-sm flex items-center focus:outline-none"
                        />
                    </div>
                    <div className="flex bg-green-00 w-[90%] mt-5 h-10 items-center justify-start gap-6.5">
                        <h4 className="text-[#1D2B48] font-medium text-sm">Date of Birth <span className="text-red-500">*</span></h4>
                        <input
                            type="text"
                            value={dob}
                            onChange={handleDateChange(setDob)}
                            placeholder="MM/DD/YYYY"
                            className="border bg-red-00 rounded-md text-[#616161] border-[#B5B5B5] w-[45%] h-[100%] px-3 text-sm focus:outline-none"
                        />
                    </div>

                    <div className="flex bg-green-00 w-[90%] mt-5 h-10 items-center justify-start gap-7.5">
                        <h4 className="text-[#1D2B48] font-medium text-sm">Occupation <span className="text-red-500">*</span></h4>
                        <input type="text"
                            value={occupation}
                            onChange={handleTextOnly(setOccupation)}
                            placeholder="Software engineer"
                            className="border bg-red-00 rounded-md text-[#616161] border-[#B5B5B5] w-[45%] h-[100%] px-3 text-sm focus:outline-none"
                        />
                    </div>
                    <div className="bg-red-00 flex items-center justify-start w-[90%] mt-4 gap-7.5">
                        <h4 className="text-[#3E3E3E] font-medium text-sm">US Citizen / Green Card Holder</h4>
                        <div className="flex items-center bg-blue-00 gap-2">
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

                    {!citizen && (
                        <div className="bg-red-00 w-[90%] h-8 flex justify-start gap-7 items-center mt-5">
                            <h3 className="text-[#1D2B48] font-medium text-sm">Do you have <span className="text-red-500">*</span></h3>
                            <div className="flex w-[50%] h-[100%] bg-blue-00 rounded-md">
                                <ThreeOptionToggle
                                    options={["SSN", "ITIN", "NEED TO APPLY"]}
                                    value={yourSSN}
                                    onChange={(value) => setYourSSN(value)}
                                    style="w-[100%]"
                                />

                            </div>
                        </div>
                    )}
                    <div className="flex bg-green-00 w-[90%] h-10 mt-5 items-center justify-start gap-6">
                        <h4 className="text-[#1D2B48] font-medium text-sm">SSN/ITIN Number</h4>
                        <input
                            type="text"
                            value={yourSSNValue}
                            onChange={(e) => {
                                const newValue = e.target.value;
                                let filteredValue = newValue.replace(/[^0-9-]/g, '');
                                filteredValue = filteredValue.slice(0, 11);
                                setYourSSNValue(filteredValue);
                            }}
                            placeholder="XXX-XX-XXXX"
                            className="border bg-red-00 rounded-md text-[#616161] border-[#B5B5B5] w-[45%] h-[100%] px-3 text-sm focus:outline-none"
                            inputMode="numeric"
                        />

                    </div>

                    {!citizen && (
                        <div className="flex bg-green-00 w-[90%] mt-5 h-10 items-center justify-start gap-7">
                            <h4 className="text-[#1D2B48] font-medium text-sm">Visa type as on Jan 1 {selectedYear}</h4>
                            <input
                                type="text"
                                list="visaJanOptions"
                                value={visaJan}
                                onChange={(e) => setVisaJan(e.target.value)}
                                placeholder="Enter visa type"
                                className="border bg-red-00 rounded-md text-[#616161] border-[#B5B5B5] w-[45%] h-[100%] px-3 text-sm focus:outline-none"
                            />

                            <datalist id="visaJanOptions">
                                {VISA_OPTIONS.map(v => (
                                    <option key={v} value={v} />
                                ))}
                            </datalist>
                        </div>
                    )}

                    {!citizen && (
                        <div className="flex bg-green-00 w-[90%] mt-5 h-10 items-center justify-start gap-7">
                            <h4 className="text-[#1D2B48] font-medium text-sm">Visa type as on Dec 31 {selectedYear}</h4>
                            <input
                                type="text"
                                list="visaDecOptions"
                                value={visaDec}
                                onChange={(e) => setVisaDec(e.target.value)}
                                placeholder="Enter visa type"
                                className="border bg-red-00 rounded-md text-[#616161] border-[#B5B5B5] w-[45%] h-[100%] px-3 text-sm focus:outline-none"
                            />

                            <datalist id="visaDecOptions">
                                {VISA_OPTIONS.map(v => (
                                    <option key={v} value={v} />
                                ))}
                            </datalist>

                        </div>
                    )}
                    <div className="flex bg-green-00 w-[90%] mt-5 h-10 items-center justify-start gap-7">
                        <h4 className="text-[#1D2B48] font-medium text-sm">First Date of entry in US</h4>
                        <input type="text"
                            value={firstEntryDate}
                            onChange={handleDateChange(setFirstEntryDate)}
                            placeholder="MM/DD/YYYY"
                            className="border bg-red-00 rounded-md text-[#3E3E3E] border-[#B5B5B5] w-[45%] h-[100%] px-3 text-sm focus:outline-none"
                        />
                    </div>
                    <div className="flex bg-green-00 w-[90%] mt-5 h-10 items-center justify-start gap-7">
                        <h4 className="text-[#1D2B48] font-medium text-sm">No. of months stayed in US in {selectedYear}</h4>
                        <input
                            type="number"
                            value={monthsInUS}
                            onChange={(e) => setMonthsInUS(e.target.value)}
                            placeholder="Enter months"
                            className="border bg-red-00 rounded-md text-[#616161] border-[#B5B5B5] w-[45%] h-[100%] px-3 text-sm focus:outline-none"
                        />
                    </div>
                    <div className="flex bg-green-00 w-[90%] mt-5 h-10 items-center justify-start gap-7">
                        <h4 className="text-[#1D2B48] font-medium text-sm">Country of Citizenship</h4>
                        <input type="text"
                            placeholder="Enter country"
                            value={citizenshipCountry}
                            onChange={handleTextOnly(setCitizenshipCountry)}
                            className="border bg-red-00 rounded-md text-[#3E3E3E] border-[#B5B5B5] w-[45%] h-[100%] px-3 text-sm focus:outline-none"
                        />
                    </div>
                </div>
                <div className="bg-green-00 w-[95%] mt-10">
                    <h3 className="text-[#1D2B48] font-semibold text-start">File Status :</h3>
                    <div className="bg-red-00 flex gap-9 items-center mt-2">
                        <h4 className="text-[#3E3E3E] font-medium text-sm">Were you married on the last day of previous tax year ?</h4>
                        <div className="flex items-center gap-2">
                            <span className={`text-sm font-semibold ${!isMarried ? 'text-[#2F3F5F]' : 'text-[#2F3F5F]'}`}>
                                No
                            </span>

                            <button
                                onClick={() => setIsMarried(!isMarried)}
                                className={`w-12 h-6 cursor-pointer flex items-center rounded-full p-1 transition-colors duration-300
            ${isMarried ? 'bg-blue-500' : 'bg-gray-300'}`}
                            >
                                <div
                                    className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300
              ${isMarried ? 'translate-x-6' : 'translate-x-0'}`}
                                ></div>
                            </button>

                            <span className={`text-sm font-semibold ${isMarried ? 'text-[#2F3F5F]' : 'text-[#2F3F5F]'}`}>
                                Yes
                            </span>
                        </div>
                    </div>

                    {isMarried && (
                        <div className="flex flex-col">
                            <div className="flex flex-col bg-white w-[100%] items-center text-start">
                                <div className="flex justify-start bg-red-00 w-[100%] mt-5">
                                    <h3 className="text-[#1D2B48] font-semibold text-start">Spouse Details</h3>
                                </div>
                                <div className="flex bg-green-00 w-[100%] mt-3 h-10 items-center justify-start gap-9">
                                    <h4 className="text-[#1D2B48] font-medium text-sm">First Name <span className="text-red-500">*</span></h4>
                                    <input type="text"
                                        value={spouseFirstName}
                                        onChange={handleNameInput(setSpouseFirstName)}
                                        placeholder="Enter first name"
                                        className="border bg-red-00 rounded-md text-[#616161] border-[#B5B5B5] w-[45%] h-[100%] px-3 text-sm focus:outline-none"
                                    />
                                </div>
                                <div className="flex bg-green-00 w-[100%] mt-5 h-10 items-center justify-start gap-7">
                                    <h4 className="text-[#1D2B48] font-medium text-sm">Middle Name</h4>
                                    <input type="text"
                                        value={spouseMiddleName}
                                        onChange={handleNameInput(setSpouseMiddleName)}
                                        placeholder="Enter middle name"
                                        className="border bg-red-00 rounded-md text-[#616161] border-[#B5B5B5] w-[45%] h-[100%] px-3 text-sm focus:outline-none"
                                    />
                                </div>
                                <div className="flex bg-green-00 w-[100%] mt-5 h-10 items-center justify-start gap-9">
                                    <h4 className="text-[#1D2B48] font-medium text-sm">Last Name <span className="text-red-500">*</span></h4>
                                    <input type="text"
                                        value={spouseLastName}
                                        onChange={handleNameInput(setSpouseLastName)}
                                        placeholder="Enter last name"
                                        className="border bg-red-00 rounded-md text-[#616161] border-[#B5B5B5] w-[45%] h-[100%] px-3 text-sm focus:outline-none"
                                    />
                                </div>
                                <div className="flex bg-green-00 w-[100%] mt-5 h-10 items-center justify-start gap-6">
                                    <h4 className="text-[#1D2B48] font-medium text-sm">Date of Birth <span className="text-red-500">*</span></h4>
                                    <input type="text"
                                        value={spouseDOB}
                                        onChange={handleDateChange(setSpouseDOB)}
                                        placeholder="MM/DD/YYYY"
                                        className="border bg-red-00 rounded-md text-[#616161] border-[#B5B5B5] w-[45%] h-[100%] px-3 text-sm focus:outline-none"
                                    />
                                </div>
                                <div className="flex bg-green-00 w-[100%] mt-5 h-10 items-center justify-start gap-9.5">
                                    <h4 className="text-[#1D2B48] font-medium text-sm">Occupation</h4>
                                    <input type="text"
                                        value={spouseOccupation}
                                        onChange={handleTextOnly(setSpouseOccupation)}
                                        placeholder="Software engineer"
                                        className="border bg-red-00 rounded-md text-[#616161] border-[#B5B5B5] w-[45%] h-[100%] px-3 text-sm focus:outline-none"
                                    />
                                </div>
                                <div className="bg-red-00 flex gap-15 w-[100%] items-center mt-4">
                                    <h4 className="text-[#3E3E3E] font-medium text-sm">US Citizen / Green Card Holder</h4>
                                    <div className="flex items-center gap-2">
                                        <span className={`text-sm font-semibold ${!spouseCitizen ? 'text-[#2F3F5F]' : 'text-[#2F3F5F]'}`}>
                                            No
                                        </span>

                                        <button
                                            onClick={() => setSpouseCitizen(!spouseCitizen)}
                                            className={`w-12 h-6 flex cursor-pointer items-center rounded-full p-1 transition-colors duration-300
            ${spouseCitizen ? 'bg-blue-500' : 'bg-gray-300'}`}
                                        >
                                            <div
                                                className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300
              ${spouseCitizen ? 'translate-x-6' : 'translate-x-0'}`}
                                            ></div>
                                        </button>

                                        <span className={`text-sm font-semibold ${spouseCitizen ? 'text-[#2F3F5F]' : 'text-[#2F3F5F]'}`}>
                                            Yes
                                        </span>
                                    </div>
                                </div>

                                {!spouseCitizen && (
                                    <div className="bg-red-00 w-[100%] h-8 flex justify-start gap-7 items-center mt-5">
                                        <h3 className="text-[#1D2B48] font-medium text-sm">Do your Spouse have <span className="text-red-500">*</span></h3>
                                        <div className="flex w-[50%] h-[100%] bg-blue-400 rounded-md">
                                            <ThreeOptionToggle
                                                options={["SSN", "ITIN", "NEED TO APPLY"]}
                                                value={spouseSSN}
                                                onChange={(value) => setSpouseSSN(value)}
                                                style="w-[100%]"
                                            />
                                        </div>
                                    </div>
                                )}

                                <div className="flex bg-green-00 w-[100%] mt-5 h-10 items-center justify-start gap-7">
                                    <h4 className="text-[#1D2B48] font-medium text-sm">SSN/ITIN Number</h4>
                                    <input
                                        type="text"
                                        value={spouseSSNValue}
                                        onChange={(e) => {
                                            const newValue = e.target.value;
                                            let filteredValue = newValue.replace(/[^0-9-]/g, '');
                                            filteredValue = filteredValue.slice(0, 11);
                                            setSpouseSSNValue(filteredValue);
                                        }}
                                        placeholder="XXX-XX-XXXX"
                                        className="border bg-red-00 rounded-md text-[#616161] border-[#B5B5B5] w-[45%] h-[100%] px-3 text-sm focus:outline-none"
                                        inputMode="numeric"
                                    />

                                </div>
                                {!spouseCitizen && (
                                    <div className="flex bg-green-00 w-[100%] mt-5 h-10 items-center justify-start gap-7">
                                        <h4 className="text-[#1D2B48] font-medium text-sm">Visa type as on Jan 1 {selectedYear}</h4>
                                        <input
                                            list="visaOptionsJan"
                                            value={spouseVisaJan}
                                            onChange={(e) => setSpouseVisaJan(e.target.value)}
                                            className="border rounded-md text-[#616161] border-[#B5B5B5] w-[45%] h-[100%] px-3 text-sm focus:outline-none"
                                            placeholder="Enter visa type"
                                        />

                                        <datalist id="visaOptionsJan">
                                            {VISA_OPTIONS.map((v) => (
                                                <option key={v} value={v} />
                                            ))}
                                        </datalist>
                                    </div>
                                )}

                                {!spouseCitizen && (
                                    <div className="flex bg-green-00 w-[100%] mt-5 h-10 items-center justify-start gap-7">
                                        <h4 className="text-[#1D2B48] font-medium text-sm">Visa type as on Dec 31 {selectedYear}</h4>
                                        <input
                                            list="visaOptions"
                                            value={spouseVisaDec}
                                            onChange={(e) => setSpouseVisaDec(e.target.value)}
                                            className="border rounded-md text-[#616161] border-[#B5B5B5] w-[45%] h-[100%] px-3 text-sm focus:outline-none"
                                            placeholder="Enter visa type"
                                        />

                                        <datalist id="visaOptions">
                                            {VISA_OPTIONS.map((v) => (
                                                <option key={v} value={v} />
                                            ))}
                                        </datalist>

                                    </div>
                                )}

                                <div className="flex bg-green-00 w-[100%] mt-5 h-10 items-center justify-start gap-7">
                                    <h4 className="text-[#1D2B48] font-medium text-sm">First Date of entry in US</h4>
                                    <input
                                        type="text"
                                        value={spouseFirstEntryDate}
                                        onChange={handleDateChange(setSpouseFirstEntryDate)}
                                        placeholder="MM/DD/YYYY"
                                        className="border bg-red-00 rounded-md text-[#3E3E3E] border-[#B5B5B5] w-[45%] h-[100%] px-3 text-sm focus:outline-none"
                                    />

                                </div>
                                <div className="flex bg-green-00 w-[100%] mt-5 h-10 items-center justify-start gap-7">
                                    <h4 className="text-[#1D2B48] font-medium text-sm">No. of months stayed in US in {selectedYear}</h4>
                                    <input
                                        type="number"
                                        value={spouseMonthsInUS}
                                        onChange={(e) => setSpouseMonthsInUS(e.target.value)}
                                        placeholder="Enter months"
                                        className="border bg-red-00 rounded-md text-[#616161] border-[#B5B5B5] w-[45%] h-[100%] px-3 text-sm focus:outline-none"
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="bg-red-00 mt-7 flex flex-col gap-2 text-start">
                        <h3 className="text-[#1D2B48] font-semibold ">Address Details</h3>
                        <p className="text-xs text-[#1D2B48] font-medium">Please input address to be reported on tax returns. This is used for communication purpose, so request you to input your current address.</p>
                        <AddressAboutYou setHasDependents={setHasDependents} />
                    </div>

                    <div className="bg-pink-00 flex items-end justify-center gap-5 mt-2">
                        <button onClick={() => handleSave("Save")}
                            disabled={loading}
                            className="mt-5 w-[15%] bg-[#1D2A46] text-white font-medium text-sm cursor-pointer py-2 rounded">
                            {loading ? "Saving..." : "Save"}
                        </button>

                        <button
                            onClick={async () => {
                                const ok = await handleSave("Next");
                                if (ok) {
                                    setActiveTab("Dependents");
                                }
                            }}
                            className="mt-5 w-[15%] bg-[#1D2A46] text-white py-2 text-sm font-medium cursor-pointer rounded">
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}