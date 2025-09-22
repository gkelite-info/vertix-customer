"use client"

import { useState } from "react"
import YearSelector from "../YearSelector/YearSelector"

function ReferAFriend() {
  const [, setSelectedYear] = useState<number | null>(null)

  const [activeSection, setActiveSection] = useState<
    "registeredReferrals" | "refer"
  >("refer")

  return (
    <>
      <div className="bg-white lg:h-[100vh]">
        <div className="bg-red-00 lg:h-[20%] lg:w-[100%] flex justify-center items-center lg:px-10 shadow-lg">
          <div className="bg-red-00 h-[100%] lg:w-[68%] flex items-center justify-end w-[65%]">
            <YearSelector
              years={[2020, 2021, 2022, 2023, 2024, 2025]}
              onYearSelect={(year) => setSelectedYear(year)}
            />
          </div>
          <div className="bg-indigo-00 h-[100%] w-[27%] flex items-center justify-end">
            <div className="bg-red-00 lg:h-[70%] lg:px-3 lg:gap-2 flex flex-col items-center justify-center rounded-lg shadow-lg">
              <h3 className="text-[#1D2B48] font-semibold">
                Tax Management Dashboard
              </h3>
              <div className="flex justify-between lg:gap-5 bg-green-00 lg:w-[100%]">
                <h5 className="text-[#585E68] font-medium">Name: User</h5>
                <h5 className="text-[#585E68] font-medium">Client Id: 12345</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-red-00 flex flex-col justify-start items-center lg:h-[80%] lg:pt-5 overflow-y-auto">
          <div className="flex w-[90%] h-[10%] justify-center gap-5">
            <button
              onClick={() => setActiveSection("refer")}
              className={`p-3 lg:w-[24%] h-full cursor-pointer rounded-lg text-sm font-semibold 
                ${
                  activeSection === "refer"
                    ? "bg-[#1D2B48] text-white"
                    : "bg-gray-300 text-black"
                }
              `}
            >
              REFER
            </button>
            <button
              onClick={() => setActiveSection("registeredReferrals")}
              className={`p-3 lg:w-[24%] h-full cursor-pointer rounded-lg text-sm font-semibold 
                ${
                  activeSection === "registeredReferrals"
                    ? "bg-[#1D2B48] text-white"
                    : "bg-gray-300 text-black"
                }
              `}
            >
              REGISTERED REFERRALS
            </button>
          </div>

          {activeSection === "refer" && (
            <div className="bg-gray-00 w-[95%] flex flex-col items-center p-3 mt-5">
              <h2 className="text-[#1D2B48] font-semibold text-xl">
                Refer a Friend
              </h2>
              <form className="w-full max-w-lg mt-3 bg-white shadow-md rounded-lg p-5">
                <div className="mb-4 flex items-center gap-3">
                  <label className="block text-sm font-medium text-[#1D2B48] w-[40%] text-end">
                    FIRSTNAME :
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded text-[#1D2B48] px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                    placeholder="Enter firstname"
                  />
                </div>
                <div className="mb-4 flex items-center gap-3">
                  <label className="block text-sm font-medium text-[#1D2B48] w-[40%] text-end">
                    LASTNAME :
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded text-[#1D2B48] px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                    placeholder="Enter lastname"
                  />
                </div>
                <div className="mb-4 flex items-center gap-3">
                  <label className="block text-sm font-medium text-[#1D2B48] w-[40%] text-end">
                    EMAIL :
                  </label>
                  <input
                    type="email"
                    className="w-full border border-gray-300 rounded text-[#1D2B48] px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                    placeholder="Enter email"
                  />
                </div>
                <div className="mb-4 flex items-center gap-3">
                  <label className="block text-sm font-medium text-[#1D2B48] w-[40%] text-end">
                    PHONE :
                  </label>
                  <select
                    className="border border-gray-300 rounded text-[#1D2B48] px-2 py-2 mt-1 focus:outline-none focus:border-blue-500 w-[20%]"
                    defaultValue="+1"
                  >
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                    <option value="+91">+91</option>
                    <option value="+61">+61</option>
                    <option value="+81">+81</option>
                  </select>
                  <input
                    type="text"
                    className="w-[74.5%] border border-gray-300 rounded text-[#1D2B48] px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                    placeholder="Enter phone"
                  />
                </div>
                <div className="mb-4 flex items-center gap-3">
                  <label className="block text-sm font-medium text-[#1D2B48] w-[40%] text-end">
                    ALTERNATE NUMBER :
                  </label>
                  <select
                    className="border border-gray-300 rounded text-[#1D2B48] px-2 py-2 mt-1 focus:outline-none focus:border-blue-500 w-[20%]"
                    defaultValue="+1"
                  >
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                    <option value="+91">+91</option>
                    <option value="+61">+61</option>
                    <option value="+81">+81</option>
                  </select>
                  <input
                    type="text"
                    className="w-[74.5%] border border-gray-300 rounded text-[#1D2B48] px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                    placeholder="Alternate number"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#1D2B48] text-white font-semibold px-4 py-2 rounded-lg hover:bg-[#2c3e65] cursor-pointer"
                >
                  Submit Referral
                </button>
              </form>
            </div>
          )}

          {activeSection === "registeredReferrals" && (
            <div className="bg-gray-00 w-[90%] flex flex-col items-center p-3 mt-5">
              <h2 className="text-[#1D2B48] font-semibold text-xl">
                Your Referrals
              </h2>
              <table className="w-[100%] border-collapse border border-gray-300 bg-white shadow-md mt-3">
                <thead>
                  <tr className="bg-[#4B5873] text-center">
                    <th className="border border-gray-300 px-4 py-2 text-sm font-semibold w-10">
                      S.No
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-sm font-semibold">
                      Client Id
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-sm font-semibold">
                      First Name
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-sm font-semibold">
                      Email-Id
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-sm font-semibold">
                      Status
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-sm font-semibold">
                      Amount Eligible
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-sm font-semibold">
                      Pay Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-[#E9E9E9] text-black text-center">
                    <td className="border border-gray-300 px-4 py-2 text-sm">
                      1
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-sm">
                      123456789
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-sm">
                      User
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-sm">
                      User@gmail.com
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-sm">
                      Process Completed
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-sm">
                      10
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-sm">
                      Green in Summary
                    </td>
                  </tr>
                  <tr className="bg-[#E9E9E9] text-black text-center">
                    <td className="border border-gray-300 px-4 py-2 text-sm">
                      2
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-sm">
                      123456789
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-sm">
                      User
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-sm">
                      User@outlook.com
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-sm">
                      Already Filed
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-sm">
                      10
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-sm">
                      Green in Summary
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default ReferAFriend
