'use client';

import { useState } from "react";



export default function ResidencyDetails() {

    const [citizen, setCitizen] = useState(false);

    return (
        <>
            <div className="bg-red-00 ">
                <div className="flex flex-col items-start">
                    <h4 className="text-[#1D2B48] font-semibold">Tax Payers Residency</h4>
                    <div className="bg-green-00 w-[90%] p-2 h-30 mt-4 rounded-lg border-1 border-[#B5B5B5] flex flex-col justify-between">
                        <div className="h-[20%] bg-indigo-00 p-1 text-start">
                            <h3 className="text-[#1D2B48] font-semibold text-sm">2025</h3>
                        </div>
                        <div className="h-[80%] bg-yellow-00 gap-3 flex items-end rounded-b-lg text-start">
                            <div className="flex flex-col justify-between bg-pink-00 w-[20%] h-[75%] rounded-md p-1">
                                <p className="text-[#2F3F5F] font-medium text-sm">From Date</p>
                                <div className="bg-green-00 h-[60%] flex items-center shadow-lg rounded-md p-1">
                                    <p className="text-[#666A74]">DD</p> <span className="text-[#666A74]">/</span>
                                    <p className="text-[#666A74]">MM</p> <span className="text-[#666A74]">/</span>
                                    <p className="text-[#666A74]">YYYY</p>
                                </div>
                            </div>
                            <div className="flex flex-col justify-between bg-pink-00 w-[20%] h-[75%] rounded-md p-1">
                                <p className="text-[#2F3F5F] font-medium text-sm">To Date</p>
                                <div className="bg-green-00 h-[60%] flex items-center shadow-lg rounded-md p-1">
                                    <p className="text-[#666A74]">DD</p> <span className="text-[#666A74]">/</span>
                                    <p className="text-[#666A74]">MM</p> <span className="text-[#666A74]">/</span>
                                    <p className="text-[#666A74]">YYYY</p>
                                </div>
                            </div>
                            <div className="flex flex-col justify-between bg-pink-00 w-[20%] h-[75%] rounded-md p-1">
                                <p className="text-[#2F3F5F] font-medium text-sm">State</p>
                                <div className="bg-green-00 h-[60%] flex items-center shadow-lg rounded-md p-1">
                                    <p className="text-[#666A74]">DD</p> <span className="text-[#666A74]">/</span>
                                    <p className="text-[#666A74]">MM</p> <span className="text-[#666A74]">/</span>
                                    <p className="text-[#666A74]">YYYY</p>
                                </div>
                            </div>
                            <div className="flex flex-col justify-between bg-pink-00 w-[20%] h-[75%] rounded-md p-1">
                                <p className="text-[#2F3F5F] font-medium text-sm">Country</p>
                                <div className="bg-green-00 h-[60%] flex items-center shadow-lg rounded-md p-1">
                                    <p className="text-[#666A74]">DD</p> <span className="text-[#666A74]">/</span>
                                    <p className="text-[#666A74]">MM</p> <span className="text-[#666A74]">/</span>
                                    <p className="text-[#666A74]">YYYY</p>
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
                        <div className="rounded-md h-30 border border-[#B5B5B5] mt-2">
                        </div>
                    </div>
                    {/* <div className="bg-red-00 w-[90%] mt-3 flex items-center justify-center gap-3">
                        <button className="bg-[#1D2B48] rounded-md p-2 py-3 w-[25%] text-[#FFFEFE] font-medium text-sm">Previous</button>
                        <button className="bg-[#1D2B48] rounded-md p-2 py-3 w-[25%] text-[#FFFEFE] font-medium text-sm">Next</button>
                    </div> */}
                </div>
            </div>
        </>
    )
}