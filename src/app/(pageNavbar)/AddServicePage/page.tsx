"use client"

import { useState } from "react"
import YearSelector from "../YearSelector/YearSelector"

function AddServicePage() {
  const [selectedYear, setSelectedYear] = useState<number | null>(null)
  console.log("selectedYear", selectedYear)

  return (
    <>
      <div className="bg-white lg:h-[100vh] flex flex-col items-center">
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
        <div className="bg-red-00 flex justify-center items-start lg:h-[80%] lg:w-[100%] lg:pt-5">
          <div className="bg-green-00 flex flex-col justify-between items-center text-center lg:h-[39%] lg:w-[40%] lg:gap-2">
            <div className="flex flex-col lg:gap-1">
              <h3 className="text-[#1D2B48] font-semibold text-lg">
                Add Service
              </h3>
              <p className="text-[#2B2B2B] text-xs font-medium">
                To proceed further, add service year for which you want to file
                tax return.
              </p>
            </div>
            <div className="flex bg-pink-00 lg:h-[25%] items-center lg:w-[100%] justify-center lg:gap-4">
              <p className="text-sm text-[#4F4F4F]">Selected Service Year :</p>
              <select className="border w-40 text-[#2F3F5F] font-medium lg:w-[60%] lg:h-[85%] rounded cursor-pointer">
                <option value="">SELECT ONE</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
              </select>
            </div>
            <button className="bg-[#1D2B48] font-medium lg:w-[40%] lg:h-[25%] cursor-pointer hover:bg-[#2c3e65] rounded-lg text-sm">
              ADD NEW SERVICE
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
export default AddServicePage
