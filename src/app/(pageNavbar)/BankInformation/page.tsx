"use client"

import { useState } from "react"
import YearSelector from "../YearSelector/YearSelector"

function BankInformation() {
  const [, setSelectedYear] = useState<number | null>(null)

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
        <div className="bg-red-00 flex flex-col justify-start items-center lg:h-[80%] lg:pt-5 text-center">
          <h2 className="font-semibold text-[#1D2B48] text-xl">
            Update Your Bank Details
          </h2>
          <div className="bg-red-00 flex items-center justify-between gap-3 h-[10%] w-[35%] mt-5">
            <div className="w-[35%]">
              <h5 className="text-[#1D2B48] font-medium text-end pr-1.5">
                Belongs To :
              </h5>
            </div>
            <select className="border border-gray-300 text-[#616161] font-medium lg:w-[65%] px-2 text-sm lg:h-[85%] focus:outline-none focus:border-blue-500 rounded cursor-pointer shadow-sm">
              <option value="">SELECT ONE</option>
              <option value="2021">Tax Payer</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
            </select>
          </div>
          <div className="bg-red-00 flex items-center justify-between gap-3 h-[10%] w-[35%] mt-2">
            <div className="w-[35%]">
              <h5 className="text-[#1D2B48] font-medium text-end pr-1.5">
                Holder Name :
              </h5>
            </div>
            <input
              type="text"
              placeholder="Enter Holder Name"
              className="border border-gray-300 text-[#616161] font-medium lg:w-[65%] px-2 text-sm lg:h-[85%] focus:outline-none focus:border-blue-500 rounded cursor-text shadow-sm"
            />
          </div>
          <div className="bg-red-00 flex items-center justify-between gap-3 h-[10%] w-[35%] mt-2">
            <div className="w-[35%]">
              <h5 className="text-[#1D2B48] font-medium text-end pr-1.5">
                Bank Name :
              </h5>
            </div>
            <input
              type="text"
              placeholder="Enter Bank Name"
              className="border border-gray-300 text-[#616161] font-medium lg:w-[65%] px-2 text-sm lg:h-[85%] focus:outline-none focus:border-blue-500 rounded cursor-text shadow-sm"
            />
          </div>
          <div className="bg-red-00 flex items-center justify-between gap-2 h-[10%] w-[35%] mt-2">
            <div className="w-[35%] bg-red-00">
              <h5 className="text-[#1D2B48] font-medium text-end pr-1.5">
                Account Number :
              </h5>
            </div>
            <input
              type="text"
              placeholder="Enter Account Number"
              className="border border-gray-300 text-[#616161] font-medium lg:w-[63.5%] px-2 text-sm lg:h-[85%] focus:outline-none focus:border-blue-500 rounded cursor-text shadow-sm"
            />
          </div>
          <div className="bg-red-00 flex flex-col justify-between h-[13%] w-[35%] mt-2 text-end">
            <div className="flex bg-green-00 w-[100%] h-[70%] justify-between items-center">
              <div className="w-[35%]">
                <h5 className="text-[#1D2B48] font-medium text-end pr-1.5">
                  Routing Number :
                </h5>
              </div>
              <input
                type="text"
                placeholder="Enter Routing Number"
                className="border border-gray-300 text-[#616161] font-medium lg:w-[63.5%] lg:h-[100%] px-2 text-sm lg:h-[85%] focus:outline-none focus:border-blue-500 rounded cursor-text shadow-sm"
              />
            </div>
            <p className="text-xs h-[29%] text-[#1D2B48] bg-indigo-00 text-bottom mt-1">
              (should be Electronic)
            </p>
          </div>
          <div className="bg-red-00 flex items-center justify-between gap-3 h-[10%] w-[35%] mt-2">
            <div className="w-[35%]">
              <h5 className="text-[#1D2B48] font-medium text-end pr-1.5">
                Type of Account :
              </h5>
            </div>
            <select className="border border-gray-300 text-[#616161] font-medium lg:w-[65%] px-2 text-sm lg:h-[85%] focus:outline-none focus:border-blue-500 rounded cursor-pointer shadow-sm">
              <option value="">SELECT ONE</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
            </select>
          </div>

          <div className="mt-4 flex h-[10%] w-[40%] gap-3 rounded-lg">
            <button className="font-medium w-[60%] h-[100%] text-sm bg-[#1D2B48] text-white px-5 py-2 hover:bg-[#2c3e65] rounded-lg flex gap-2 justify-center items-center cursor-pointer">
              UPDATE BANK DETAILS
            </button>
            <button className="font-medium w-[60%] h-[100%] text-sm bg-[#1D2B48] text-white px-5 py-2 hover:bg-[#2c3e65] rounded-lg flex gap-2 justify-center items-center cursor-pointer">
              CANCEL
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
export default BankInformation
