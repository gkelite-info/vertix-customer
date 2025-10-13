"use client"

import YearSelect from "../../../../utils/yearSelect"

export default function ManageFilingYear() {

  return (
    <>
      <div className="bg-white lg:h-[100vh] flex flex-col items-center">
        <YearSelect />
        <div className="bg-red-00 flex justify-center items-start lg:h-[80%] lg:w-[100%] lg:pt-5">
          <div className="bg-green-00 flex flex-col justify-between items-center text-center lg:h-[39%] lg:w-[50%] lg:gap-2">
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
            <button className="bg-[#1D2B48] text-white font-medium lg:w-[40%] lg:h-[25%] cursor-pointer hover:bg-[#2c3e65] rounded-lg text-sm">
              ADD NEW SERVICE
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
