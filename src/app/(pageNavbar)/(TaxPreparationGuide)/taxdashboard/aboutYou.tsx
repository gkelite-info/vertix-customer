'use client';

import { useEffect, useState } from "react";
import ThreeOptionToggle from "../../../../../utils/threeOptionToggle";
import { supabase } from "../../../../../utils/supabase/client";
import { getCustomer } from "@/app/api/SupabaseAPI/customerApi";
import toast from "react-hot-toast";

const VISA_OPTIONS = ["L1", "L2", "L3"];

export default function AboutYou(): React.ReactElement {

    const [firstName, setFirstName] = useState("");
    const [middleName, setMiddleName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dob, setDob] = useState("");
    const [occupation, setOccupation] = useState("");
    const [citizen, setCitizen] = useState(false);
    const [isMarried, setIsMarried] = useState(false);

    const [yourSSN, setYourSSN] = useState("");
    const [yourSSNValue, setYourSSNValue] = useState("");
    const [visaJan, setVisaJan] = useState(VISA_OPTIONS[0]);
    const [visaDec, setVisaDec] = useState(VISA_OPTIONS[0]);
    const [firstEntryDate, setFirstEntryDate] = useState("");
    const [monthsInUS, setMonthsInUS] = useState("12");
    const [citizenshipCountry, setCitizenshipCountry] = useState("");

    const [spouseFirstName, setSpouseFirstName] = useState("");
    const [spouseMiddleName, setSpouseMiddleName] = useState("");
    const [spouseLastName, setSpouseLastName] = useState("");
    const [spouseDOB, setSpouseDOB] = useState("");
    const [spouseCitizen, setSpouseCitizen] = useState(false);
    const [spouseOccupation, setSpouseOccupation] = useState("");
    const [spouseUsStatus, setSpouseUsStatus] = useState<"none" | "citizen" | "green_card">("none");
    const [spouseSSN, setSpouseSSN] = useState("");
    const [spouseSSNValue, setSpouseSSNValue] = useState("");

    const [spouseVisaJan, setSpouseVisaJan] = useState(VISA_OPTIONS[0]);
    const [spouseVisaDec, setSpouseVisaDec] = useState(VISA_OPTIONS[0]);
    const [spouseFirstEntryDate, setSpouseFirstEntryDate] = useState("");
    const [spouseMonthsInUS, setSpouseMonthsInUS] = useState("12");




    useEffect(() => {
        const fetchCustomer = async () => {
            try {
                const customer = await getCustomer();
                if (customer) {
                    setFirstName(customer.firstname);
                    setLastName(customer.lastname);
                }
            } catch (error) {
                console.error("Failed to load customer data", error);
            }
        };

        fetchCustomer();
    }, []);


    const validateBeforeSubmit = () => {

        if (!firstName || !lastName) return "First and Last Name are required";
        if (!dob) return "Date of Birth is required";
        if (!occupation) return "Occupation is required";

        if (!yourSSN) return "SSN / ITIN type is required";
        if (!yourSSNValue) return "SSN / ITIN value is required";

        if (!visaJan || !visaDec) return "Visa type selections are required";

        if (!firstEntryDate) return "First entry date is required";
        if (!monthsInUS || isNaN(Number(monthsInUS))) return "Months in US must be a number";

        if (isMarried) {
            if (!spouseFirstName || !spouseLastName) return "Spouse First and Last Name are required";
            if (!spouseDOB) return "Spouse Date of Birth is required";
            if (!spouseUsStatus) return "Spouse US status is required";
            if (!spouseSSN) return "Spouse SSN / ITIN type is required";
            if (!spouseSSNValue) return "Spouse SSN / ITIN value is required";
        }

        return null;
    };

    const handleSave = async () => {
        const validationError = validateBeforeSubmit();
        if (validationError) {
            toast.error(validationError);
            return;
        }

        try {
            const customer = await getCustomer();
            if (!customer) throw new Error("Customer not found or not authenticated");

            const customerId = customer.customerId;

            console.log("customer is", customer)

            let spouseId: number | null = null;
            if (isMarried) {
                const { data: spouseData, error: spouseError } = await supabase
                    .from("spouses")
                    .insert([{
                        customerId,
                        firstname: spouseFirstName,
                        middlename: spouseMiddleName || null,
                        lastname: spouseLastName,
                        dob: spouseDOB ? new Date(spouseDOB).toISOString() : null,
                        occupation: spouseOccupation || null,
                        us_status: spouseUsStatus || "none",
                        createdAt: new Date().toISOString(),
                        updatedAt: new Date().toISOString()
                    }])
                    .select("spouseId")
                    .single();

                if (spouseError) throw spouseError;

                spouseId = spouseData?.spouseId || null;
                console.log("Inserted SpouseId:", spouseId);
            }


            const payload = {
                customerId,
                spouseId: isMarried ? spouseId : null,
                isMarried,
                yourSSNType: yourSSN || null,
                yourSSNValue: yourSSNValue || null,
                visaTypeJan: visaJan || null,
                visaTypeDec: visaDec || null,
                firstEntryDate: firstEntryDate ? new Date(firstEntryDate).toISOString() : null,
                monthsInUS: monthsInUS ? Number(monthsInUS) : null,
                citizenshipCountry: citizenshipCountry || null,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
            };
            console.log("AboutYou payload:", payload);

            const { data: aboutData, error: aboutError } = await supabase
                .from("aboutyou")
                .upsert([payload]);

            if (aboutError) throw aboutError;

            toast.success("Details saved successfully!");
        } catch (error) {
            console.error("Error saving data:", error);
            toast.error("Failed to save details.");
        }
    };


    return (
        <>
            <div className="bg-red-00 flex flex-col items-center">
                <h2 className="text-[#1D2B48] font-semibold text-xl">About You</h2>
                <div className="flex flex-col bg-white w-[100%] items-center">
                    <div className="flex bg-green-00 w-[90%] mt-5 h-10 items-center justify-between">
                        <h4 className="text-[#1D2B48] font-medium">First Name</h4>
                        <div
                            className="border bg-red-00 rounded-md text-[#616161] border-[#B5B5B5] w-[50%] h-[100%] px-3 text-sm flex items-center"
                        >
                            {firstName}
                        </div>
                    </div>
                    <div className="flex bg-green-00 w-[90%] mt-5 h-10 items-center justify-between">
                        <h4 className="text-[#1D2B48] font-medium">Middle Name</h4>
                        <input type="text"
                            value={middleName}
                            onChange={(e) => {
                                const newValue = e.target.value;
                                const filteredValue = newValue.replace(/[^a-zA-Z\s]/g, '');
                                setMiddleName(filteredValue)
                            }}
                            placeholder="Enter Middle Name"
                            className="border bg-red-00 rounded-md text-[#616161] border-[#B5B5B5] w-[50%] h-[100%] px-3 text-sm focus:outline-none"
                        />
                    </div>
                    <div className="flex bg-green-00 w-[90%] mt-5 h-10 items-center justify-between">
                        <h4 className="text-[#1D2B48] font-medium">Last Name</h4>
                        <div
                            className="border bg-red-00 rounded-md text-[#616161] border-[#B5B5B5] w-[50%] h-[100%] px-3 text-sm flex items-center"
                        >
                            {lastName}
                        </div>
                    </div>
                    <div className="flex bg-green-00 w-[90%] mt-5 h-10 items-center justify-between">
                        <h4 className="text-[#1D2B48] font-medium">Date of Birth <span className="text-red-500">*</span></h4>
                        <input
                            value={dob}
                            onChange={(e) => {
                                const newValue = e.target.value;
                                const filteredValue = newValue.replace(/[^0-9/]/g, '');
                                setDob(filteredValue);
                            }}
                            placeholder="DD/MM/YYYY"
                            className="border bg-red-00 rounded-md text-[#616161] border-[#B5B5B5] w-[50%] h-[100%] px-3 text-sm focus:outline-none"
                        />
                    </div>
                    <div className="flex bg-green-00 w-[90%] mt-5 h-10 items-center justify-between">
                        <h4 className="text-[#1D2B48] font-medium">Occupation <span className="text-red-500">*</span></h4>
                        <input type="text"
                            value={occupation}
                            onChange={(e) => {
                                const newValue = e.target.value;
                                const filteredValue = newValue.replace(/[^a-zA-Z\s]/g, '');
                                setOccupation(filteredValue)
                            }}
                            placeholder="Software Engineer"
                            className="border bg-red-00 rounded-md text-[#616161] border-[#B5B5B5] w-[50%] h-[100%] px-3 text-sm focus:outline-none"
                        />
                    </div>
                    <div className="bg-red-00 flex gap-28 w-[90%] items-center mt-4">
                        <h4 className="text-[#3E3E3E] font-medium text-sm">US Citizen / Green Card Holder <span className="text-red-500">*</span></h4>
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
                    <div className="bg-red-00 w-[90%] h-8 flex justify-between items-center mt-5">
                        <h3 className="text-[#1D2B48] font-medium">Do you have <span className="text-red-500">*</span></h3>
                        <div className="flex w-[50%] h-[100%] bg-blue-400 rounded-md">
                            <ThreeOptionToggle
                                options={["SSN", "ITIN", "NEED TO APPLY"]}
                                initial={yourSSN}
                                onChange={(value) => setYourSSN(value)}
                                style="w-[100%]"
                            />
                        </div>
                    </div>
                    <div className="flex bg-green-00 w-[90%] mt-5 h-10 items-center justify-between">
                        <h4 className="text-[#1D2B48] font-medium">SSN/ITIN Number <span className="text-red-500">*</span></h4>
                        <input type="text"
                            value={yourSSNValue}
                            onChange={(e) => setYourSSNValue(e.target.value)}
                            placeholder="XXX-XX-XXXX"
                            className="border bg-red-00 rounded-md text-[#616161] border-[#B5B5B5] w-[50%] h-[100%] px-3 text-sm focus:outline-none"
                        />
                    </div>
                    <div className="flex bg-green-00 w-[90%] mt-5 h-10 items-center justify-between">
                        <h4 className="text-[#1D2B48] font-medium">Visa type as on Jan 1 2024</h4>
                        <select
                            value={visaJan}
                            onChange={(e) => setVisaJan(e.target.value)}
                            className="border bg-red-00 rounded-md text-[#616161] border-[#B5B5B5] w-[50%] h-[100%] px-3 text-sm focus:outline-none"
                        >
                            {VISA_OPTIONS.map(v => (
                                <option key={v} value={v}>{v}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex bg-green-00 w-[90%] mt-5 h-10 items-center justify-between">
                        <h4 className="text-[#1D2B48] font-medium">Visa type as on Dec 31 2024</h4>
                        <select
                            value={visaDec}
                            onChange={(e) => setVisaDec(e.target.value)}
                            className="border bg-red-00 rounded-md text-[#616161] border-[#B5B5B5] w-[50%] h-[100%] px-3 text-sm focus:outline-none"
                        >
                            {VISA_OPTIONS.map(v => (
                                <option key={v} value={v}>{v}</option>
                            ))}
                        </select>

                    </div>
                    <div className="flex bg-green-00 w-[90%] mt-5 h-10 items-center justify-between">
                        <h4 className="text-[#1D2B48] font-medium">First Date of entry in US</h4>
                        <input type="text"
                            value={firstEntryDate}
                            onChange={(e) => setFirstEntryDate(e.target.value)}
                            placeholder="09/05/2021"
                            className="border bg-red-00 rounded-md text-[#3E3E3E] border-[#B5B5B5] w-[50%] h-[100%] px-3 text-sm focus:outline-none"
                        />
                    </div>
                    <div className="flex bg-green-00 w-[90%] mt-5 h-10 items-center justify-between">
                        <h4 className="text-[#1D2B48] font-medium">No. of months stayed in US in 2024</h4>
                        <select
                            value={monthsInUS}
                            onChange={(e) => setMonthsInUS(e.target.value)}
                            className="border bg-red-00 rounded-md text-[#616161] border-[#B5B5B5] w-[50%] h-[100%] px-3 text-sm focus:outline-none"
                        >
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                        </select>
                    </div>
                    <div className="flex bg-green-00 w-[90%] mt-5 h-10 items-center justify-between">
                        <h4 className="text-[#1D2B48] font-medium">Country of Citizenship</h4>
                        <input type="text"
                            placeholder="India"
                            value={citizenshipCountry}
                            onChange={(e) => setCitizenshipCountry(e.target.value)}
                            className="border bg-red-00 rounded-md text-[#3E3E3E] border-[#B5B5B5] w-[50%] h-[100%] px-3 text-sm focus:outline-none"
                        />
                    </div>
                </div>
                <div className="bg-green-00 w-[90%] mt-10">
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

                    <div className="flex flex-col bg-white w-[100%] items-center text-start">
                        <div className="flex justify-start bg-red-00 w-[100%] mt-5">
                            <h3 className="text-[#1D2B48] font-semibold text-start">Spouse Details</h3>
                        </div>
                        <div className="flex bg-green-00 w-[100%] mt-5 h-10 items-center justify-between">
                            <h4 className="text-[#1D2B48] font-medium">First Name <span className="text-red-500">*</span></h4>
                            <input type="text"
                                value={spouseFirstName}
                                onChange={(e) => setSpouseFirstName(e.target.value)}
                                placeholder="Dynamic user"
                                className="border bg-red-00 rounded-md text-[#616161] border-[#B5B5B5] w-[50%] h-[100%] px-3 text-sm focus:outline-none"
                            />
                        </div>
                        <div className="flex bg-green-00 w-[100%] mt-5 h-10 items-center justify-between">
                            <h4 className="text-[#1D2B48] font-medium">Middle Name</h4>
                            <input type="text"
                                value={spouseMiddleName}
                                onChange={(e) => setSpouseMiddleName(e.target.value)}
                                placeholder="Dynamic user"
                                className="border bg-red-00 rounded-md text-[#616161] border-[#B5B5B5] w-[50%] h-[100%] px-3 text-sm focus:outline-none"
                            />
                        </div>
                        <div className="flex bg-green-00 w-[100%] mt-5 h-10 items-center justify-between">
                            <h4 className="text-[#1D2B48] font-medium">Last Name <span className="text-red-500">*</span></h4>
                            <input type="text"
                                value={spouseLastName}
                                onChange={(e) => setSpouseLastName(e.target.value)}
                                placeholder="Dynamic user"
                                className="border bg-red-00 rounded-md text-[#616161] border-[#B5B5B5] w-[50%] h-[100%] px-3 text-sm focus:outline-none"
                            />
                        </div>
                        <div className="flex bg-green-00 w-[100%] mt-5 h-10 items-center justify-between">
                            <h4 className="text-[#1D2B48] font-medium">Date of Birth <span className="text-red-500">*</span></h4>
                            <input type="text"
                                value={spouseDOB}
                                onChange={(e) => setSpouseDOB(e.target.value)}
                                placeholder="DD/MM/YYYY"
                                className="border bg-red-00 rounded-md text-[#616161] border-[#B5B5B5] w-[50%] h-[100%] px-3 text-sm focus:outline-none"
                            />
                        </div>
                        <div className="flex bg-green-00 w-[100%] mt-5 h-10 items-center justify-between">
                            <h4 className="text-[#1D2B48] font-medium">Occupation</h4>
                            <input type="text"
                                value={spouseOccupation}
                                onChange={(e) => setSpouseOccupation(e.target.value)}
                                placeholder="Sofware Engineer"
                                className="border bg-red-00 rounded-md text-[#616161] border-[#B5B5B5] w-[50%] h-[100%] px-3 text-sm focus:outline-none"
                            />
                        </div>
                        <div className="bg-red-00 flex gap-28 w-[100%] items-center mt-4">
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

                        <div className="bg-red-00 w-[100%] h-8 flex justify-between items-center mt-5">
                            <h3 className="text-[#1D2B48] font-medium">Do your Spouse have <span className="text-red-500">*</span></h3>
                            <div className="flex w-[50%] h-[100%] bg-blue-400 rounded-md">
                                <ThreeOptionToggle
                                    options={["SSN", "ITIN", "NEED TO APPLY"]}
                                    initial={spouseSSN}
                                    onChange={(value) => setSpouseSSN(value)}
                                    style="w-[100%]"
                                />
                            </div>
                        </div>

                        <div className="flex bg-green-00 w-[100%] mt-5 h-10 items-center justify-between">
                            <h4 className="text-[#1D2B48] font-medium">SSN/ ITIN Number <span className="text-red-500">*</span></h4>
                            <input type="text"
                                value={spouseSSNValue}
                                onChange={(e) => setSpouseSSNValue(e.target.value)}
                                placeholder="XXX-XX-XXXX"
                                className="border bg-red-00 rounded-md text-[#616161] border-[#B5B5B5] w-[50%] h-[100%] px-3 text-sm focus:outline-none"
                            />
                        </div>
                        <div className="flex bg-green-00 w-[100%] mt-5 h-10 items-center justify-between">
                            <h4 className="text-[#1D2B48] font-medium">Visa type as on Jan 1 2024</h4>
                            <select
                                value={spouseVisaJan}
                                onChange={(e) => setSpouseVisaJan(e.target.value)}
                                className="border bg-red-00 rounded-md text-[#616161] border-[#B5B5B5] w-[50%] h-[100%] px-3 text-sm focus:outline-none"
                            >
                                {VISA_OPTIONS.map(v => (
                                    <option key={v} value={v}>{v}</option>
                                ))}
                            </select>
                        </div>
                        <div className="flex bg-green-00 w-[100%] mt-5 h-10 items-center justify-between">
                            <h4 className="text-[#1D2B48] font-medium">Visa type as on Dec 31 2024</h4>
                            <select
                                value={spouseVisaDec}
                                onChange={(e) => setSpouseVisaDec(e.target.value)}
                                className="border bg-red-00 rounded-md text-[#616161] border-[#B5B5B5] w-[50%] h-[100%] px-3 text-sm focus:outline-none"
                            >
                                {VISA_OPTIONS.map(v => (
                                    <option key={v} value={v}>{v}</option>
                                ))}
                            </select>
                        </div>
                        <div className="flex bg-green-00 w-[100%] mt-5 h-10 items-center justify-between">
                            <h4 className="text-[#1D2B48] font-medium">First Date of entry in US</h4>
                            <input type="text"
                                value={spouseFirstEntryDate}
                                onChange={(e) => setSpouseFirstEntryDate(e.target.value)}
                                placeholder="09/05/2021"
                                className="border bg-red-00 rounded-md text-[#3E3E3E] border-[#B5B5B5] w-[50%] h-[100%] px-3 text-sm focus:outline-none"
                            />
                        </div>
                        <div className="flex bg-green-00 w-[100%] mt-5 h-10 items-center justify-between">
                            <h4 className="text-[#1D2B48] font-medium">No. of months stayed in US in 2024</h4>
                            <select
                                value={spouseMonthsInUS}
                                onChange={(e) => setSpouseMonthsInUS(e.target.value)}
                                className="border bg-red-00 rounded-md text-[#616161] border-[#B5B5B5] w-[50%] h-[100%] px-3 text-sm focus:outline-none"
                            >
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                            </select>
                        </div>
                    </div>
                    <div className="bg-red-00 mt-10 flex flex-col gap-2 text-start">
                        <h3 className="text-[#1D2B48] font-semibold ">Address Details</h3>
                        <p className="text-xs text-[#1D2B48] font-medium">Please input address to be reported on tax returns. This is used for communication purpose, so request you to input your current address.</p>
                    </div>
                    <button onClick={handleSave} className="mt-5 bg-blue-500 text-white px-4 py-2 rounded">
                        Save
                    </button>
                </div>
            </div>
        </>
    )
}