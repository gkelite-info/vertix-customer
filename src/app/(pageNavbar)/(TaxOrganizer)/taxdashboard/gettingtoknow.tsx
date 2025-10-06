'use client';

import { useState } from "react";


export default function GettingToKnow() {
    const [isMarried, setIsMarried] = useState(false);
    const [citizen, setCitizen] = useState(false);

    return (
        <>
            <div className="bg-red-00 flex flex-col items-center h-auto">
                <h2 className="text-[#1D2B48] font-semibold text-xl">GETTING TO KNOW YOU</h2>
                <div className="flex flex-col bg-white w-[100%] items-center">
                    <div className="flex bg-green-00 w-[90%] mt-5 h-10 items-center justify-between">
                        <h4 className="text-[#1D2B48] font-medium">First Name</h4>
                        <input type="text"
                            placeholder="Enter First Name"
                            className="border bg-red-00 rounded-md text-[#616161] border-[#B5B5B5] w-[50%] h-[100%] px-3 text-sm focus:outline-none"
                        />
                    </div>
                    <div className="flex bg-green-00 w-[90%] mt-5 h-10 items-center justify-between">
                        <h4 className="text-[#1D2B48] font-medium">Middle Name</h4>
                        <input type="text"
                            placeholder="Enter Middle Name"
                            className="border bg-red-00 rounded-md text-[#616161] border-[#B5B5B5] w-[50%] h-[100%] px-3 text-sm focus:outline-none"
                        />
                    </div>
                    <div className="flex bg-green-00 w-[90%] mt-5 h-10 items-center justify-between">
                        <h4 className="text-[#1D2B48] font-medium">Last Name</h4>
                        <input type="text"
                            placeholder="Enter Last Name"
                            className="border bg-red-00 rounded-md text-[#616161] border-[#B5B5B5] w-[50%] h-[100%] px-3 text-sm focus:outline-none"
                        />
                    </div>
                    <div className="flex bg-green-00 w-[90%] mt-5 h-10 items-center justify-between">
                        <h4 className="text-[#1D2B48] font-medium">Date of Birth</h4>
                        <input type="text"
                            placeholder="DD/MM/YYYY"
                            className="border bg-red-00 rounded-md text-[#616161] border-[#B5B5B5] w-[50%] h-[100%] px-3 text-sm focus:outline-none"
                        />
                    </div>
                    <div className="flex bg-green-00 w-[90%] mt-5 h-10 items-center justify-between">
                        <h4 className="text-[#1D2B48] font-medium">Occupation</h4>
                        <input type="text"
                            placeholder="Sofware Engineer"
                            className="border bg-red-00 rounded-md text-[#616161] border-[#B5B5B5] w-[50%] h-[100%] px-3 text-sm focus:outline-none"
                        />
                    </div>
                    <div className="bg-red-00 flex gap-28 w-[90%] items-center mt-4">
                        <h4 className="text-[#3E3E3E] font-medium text-sm">US Citizen / Green Card Holder</h4>
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
                            <h3 className="text-[#1D2B48] font-medium">Do you have</h3>
                            <div className="flex w-[50%] h-[100%] bg-blue-400 rounded-md">
                                <div className="flex items-center justify-center rounded-l-md h-[100%] w-[33%] bg-[#2F3F5F]">
                                    <h4 className="text-sm">SSN</h4>
                                </div>
                                <div className="flex items-center justify-center h-[100%] w-[33%] bg-[#E8E8E8] border-[#BCBCBC]">
                                    <h4 className="text-[#3E3E3E] text-sm">ITIN</h4>
                                </div>
                                <div className="flex items-center rounded-r-md justify-center h-[100%] w-[34%] bg-[#E8E8E8] border-[#BCBCBC]">
                                    <h4 className="text-[#3E3E3E] text-sm">NEED TO APPLY</h4>
                                </div>
                            </div>
                        </div>
                    <div className="flex bg-green-00 w-[90%] mt-5 h-10 items-center justify-between">
                        <h4 className="text-[#1D2B48] font-medium">SSN/ITIN Number</h4>
                        <input type="text"
                            placeholder="XXX-XXX-XXXX"
                            className="border bg-red-00 rounded-md text-[#616161] border-[#B5B5B5] w-[50%] h-[100%] px-3 text-sm focus:outline-none"
                        />
                    </div>
                    <div className="flex bg-green-00 w-[90%] mt-5 h-10 items-center justify-between">
                        <h4 className="text-[#1D2B48] font-medium">Visa type as on Jan 1 2024</h4>
                        <select
                            className="border bg-red-00 rounded-md text-[#616161] border-[#B5B5B5] w-[50%] h-[100%] px-3 text-sm focus:outline-none"
                        >
                            <option value="option1">L1</option>
                            <option value="option2">L2</option>
                            <option value="option3">L3</option>
                        </select>
                    </div>
                    <div className="flex bg-green-00 w-[90%] mt-5 h-10 items-center justify-between">
                        <h4 className="text-[#1D2B48] font-medium">Visa type as on Dec 31 2024</h4>
                        <select
                            className="border bg-red-00 rounded-md text-[#616161] border-[#B5B5B5] w-[50%] h-[100%] px-3 text-sm focus:outline-none"
                        >
                            <option value="option1">L1</option>
                            <option value="option2">L2</option>
                            <option value="option3">L3</option>
                        </select>
                    </div>
                    <div className="flex bg-green-00 w-[90%] mt-5 h-10 items-center justify-between">
                        <h4 className="text-[#1D2B48] font-medium">First Date of entry in US</h4>
                        <input type="text"
                            placeholder="09/05/2021"
                            className="border bg-red-00 rounded-md text-[#3E3E3E] border-[#B5B5B5] w-[50%] h-[100%] px-3 text-sm focus:outline-none"
                        />
                    </div>
                    <div className="flex bg-green-00 w-[90%] mt-5 h-10 items-center justify-between">
                        <h4 className="text-[#1D2B48] font-medium">No. of months stayed in US in 2024</h4>
                        <select
                            className="border bg-red-00 rounded-md text-[#616161] border-[#B5B5B5] w-[50%] h-[100%] px-3 text-sm focus:outline-none"
                        >
                            <option value="option1">12</option>
                            <option value="option2">13</option>
                            <option value="option3">14</option>
                        </select>
                    </div>
                    <div className="flex bg-green-00 w-[90%] mt-5 h-10 items-center justify-between">
                        <h4 className="text-[#1D2B48] font-medium">Country of Citizenship</h4>
                        <input type="text"
                            placeholder="India"
                            className="border bg-red-00 rounded-md text-[#3E3E3E] border-[#B5B5B5] w-[50%] h-[100%] px-3 text-sm focus:outline-none"
                        />
                    </div>
                </div>
                <div className="bg-green-00 w-[90%] mt-15">
                    <h3 className="text-[#1D2B48] font-semibold">File Status :</h3>
                    <div className="bg-red-00 flex gap-9 items-center mt-2">
                        <h4 className="text-[#3E3E3E] font-medium text-sm">Were you married on the last day of 2024 tax year ?</h4>
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
                            <h4 className="text-[#1D2B48] font-medium">First Name</h4>
                            <input type="text"
                                placeholder="Dynamic user"
                                className="border bg-red-00 rounded-md text-[#616161] border-[#B5B5B5] w-[50%] h-[100%] px-3 text-sm focus:outline-none"
                            />
                        </div>
                        <div className="flex bg-green-00 w-[100%] mt-5 h-10 items-center justify-between">
                            <h4 className="text-[#1D2B48] font-medium">Middle Name</h4>
                            <input type="text"
                                placeholder="Dynamic user"
                                className="border bg-red-00 rounded-md text-[#616161] border-[#B5B5B5] w-[50%] h-[100%] px-3 text-sm focus:outline-none"
                            />
                        </div>
                        <div className="flex bg-green-00 w-[100%] mt-5 h-10 items-center justify-between">
                            <h4 className="text-[#1D2B48] font-medium">Last Name</h4>
                            <input type="text"
                                placeholder="Dynamic user"
                                className="border bg-red-00 rounded-md text-[#616161] border-[#B5B5B5] w-[50%] h-[100%] px-3 text-sm focus:outline-none"
                            />
                        </div>
                        <div className="flex bg-green-00 w-[100%] mt-5 h-10 items-center justify-between">
                            <h4 className="text-[#1D2B48] font-medium">Date of Birth</h4>
                            <input type="text"
                                placeholder="DD/MM/YYYY"
                                className="border bg-red-00 rounded-md text-[#616161] border-[#B5B5B5] w-[50%] h-[100%] px-3 text-sm focus:outline-none"
                            />
                        </div>
                        <div className="flex bg-green-00 w-[100%] mt-5 h-10 items-center justify-between">
                            <h4 className="text-[#1D2B48] font-medium">Occupation</h4>
                            <input type="text"
                                placeholder="Sofware Engineer"
                                className="border bg-red-00 rounded-md text-[#616161] border-[#B5B5B5] w-[50%] h-[100%] px-3 text-sm focus:outline-none"
                            />
                        </div>
                        <div className="bg-red-00 flex gap-28 w-[100%] items-center mt-4">
                            <h4 className="text-[#3E3E3E] font-medium text-sm">US Citizen / Green Card Holder</h4>
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

                        <div className="bg-red-00 w-[100%] h-8 flex justify-between items-center mt-5">
                            <h3 className="text-[#1D2B48] font-medium">Do your Spouse have</h3>
                            <div className="flex w-[50%] h-[100%] bg-blue-400 rounded-md">
                                <div className="flex items-center justify-center rounded-l-md h-[100%] w-[33%] bg-[#2F3F5F]">
                                    <h4 className="text-sm">SSN</h4>
                                </div>
                                <div className="flex items-center justify-center h-[100%] w-[33%] bg-[#E8E8E8] border-[#BCBCBC]">
                                    <h4 className="text-[#3E3E3E] text-sm">ITIN</h4>
                                </div>
                                <div className="flex items-center rounded-r-md justify-center h-[100%] w-[34%] bg-[#E8E8E8] border-[#BCBCBC]">
                                    <h4 className="text-[#3E3E3E] text-sm">NEED TO APPLY</h4>
                                </div>
                            </div>
                        </div>

                        <div className="flex bg-green-00 w-[100%] mt-5 h-10 items-center justify-between">
                            <h4 className="text-[#1D2B48] font-medium">SSN/ ITIN Number</h4>
                            <input type="text"
                                placeholder="XXX-XXX-XXXX"
                                className="border bg-red-00 rounded-md text-[#616161] border-[#B5B5B5] w-[50%] h-[100%] px-3 text-sm focus:outline-none"
                            />
                        </div>
                        <div className="flex bg-green-00 w-[100%] mt-5 h-10 items-center justify-between">
                            <h4 className="text-[#1D2B48] font-medium">Visa type as on Jan 1 2024</h4>
                            <select
                                className="border bg-red-00 rounded-md text-[#616161] border-[#B5B5B5] w-[50%] h-[100%] px-3 text-sm focus:outline-none"
                            >
                                <option value="option1">L1</option>
                                <option value="option2">L2</option>
                                <option value="option3">L3</option>
                            </select>
                        </div>
                        <div className="flex bg-green-00 w-[100%] mt-5 h-10 items-center justify-between">
                            <h4 className="text-[#1D2B48] font-medium">Visa type as on Dec 31 2024</h4>
                            <select
                                className="border bg-red-00 rounded-md text-[#616161] border-[#B5B5B5] w-[50%] h-[100%] px-3 text-sm focus:outline-none"
                            >
                                <option value="option1">L1</option>
                                <option value="option2">L2</option>
                                <option value="option3">L3</option>
                            </select>
                        </div>
                        <div className="flex bg-green-00 w-[100%] mt-5 h-10 items-center justify-between">
                            <h4 className="text-[#1D2B48] font-medium">First Date of entry in US</h4>
                            <input type="text"
                                placeholder="09/05/2021"
                                className="border bg-red-00 rounded-md text-[#3E3E3E] border-[#B5B5B5] w-[50%] h-[100%] px-3 text-sm focus:outline-none"
                            />
                        </div>
                        <div className="flex bg-green-00 w-[100%] mt-5 h-10 items-center justify-between">
                            <h4 className="text-[#1D2B48] font-medium">No. of months stayed in US in 2024</h4>
                            <select
                                className="border bg-red-00 rounded-md text-[#616161] border-[#B5B5B5] w-[50%] h-[100%] px-3 text-sm focus:outline-none"
                            >
                                <option value="option1">12</option>
                                <option value="option2">13</option>
                                <option value="option3">14</option>
                            </select>
                        </div>
                    </div>
                    <div className="bg-red-00 mt-4 flex flex-col gap-2">
                        <h3 className="text-[#1D2B48] font-semibold">Address Details</h3>
                        <p className="text-xs text-[#1D2B48] font-medium">Please input address to be reported on tax returns. This is used for communication purpose, so request you to input your current address.</p>
                    </div>
                </div>
            </div>
        </>
    )
}