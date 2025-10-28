"use client"
import { useState } from "react"
import { useYear } from "@/app/api/context/yearContext"
import YearSelect from "../../../../utils/yearSelect"
import toast from "react-hot-toast"
import { createFilingYearRecord } from "@/app/api/SupabaseAPI/customer/filingYearAPI"

export default function ManageFilingYear() {
  const { selectedYear, setSelectedYear } = useYear()
  const [tempYear, setTempYear] = useState(selectedYear || "")
  const [isLoading, setIsLoading] = useState(false)

  const currentYear = new Date().getFullYear();
  const startYear = 2020;
  const years = Array.from(
    { length: currentYear - startYear + 1 },
    (_, i) => currentYear - i
  );

  const handleAddService = async () => {
    if (!tempYear) {
      toast.error("Please select a year")
      return
    }

    setIsLoading(true)

    try {
      const result = await createFilingYearRecord(parseInt(tempYear))

      console.log("Filing year record created:", result)

      setSelectedYear(tempYear)
      toast.success(`Service year ${tempYear} added successfully!`)
    } catch (error: any) {
      console.error("Error adding service year:", error)
      toast.error(error.message || "Failed to add service year")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="bg-white lg:h-[100vh] flex flex-col items-center">
      <YearSelect style="justify-end" />
      <div className="bg-red-00 flex justify-center items-start lg:h-[80%] lg:w-[100%] lg:pt-5">
        <div className="bg-green-00 flex flex-col justify-between items-center text-center lg:h-[39%] lg:w-[50%] lg:gap-2">
          <div className="flex flex-col lg:gap-1">
            <h3 className="text-[#1D2B48] font-semibold text-lg">Add Service</h3>
            <p className="text-[#2B2B2B] text-xs font-medium">
              To proceed further, add service year for which you want to file tax return.
            </p>
          </div>

          <div className="flex bg-pink-00 lg:h-[25%] items-center lg:w-[100%] justify-center lg:gap-4">
            <p className="text-sm text-[#4F4F4F]">Selected Service Year :</p>
            <select
              value={tempYear}
              onChange={(e) => setTempYear(e.target.value)}
              className="border w-40 text-[#2F3F5F] font-medium lg:w-[60%] lg:h-[85%] rounded cursor-pointer"
            >
              <option value="">SELECT YEAR</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={handleAddService}
            className="bg-[#1D2B48] text-white font-medium lg:w-[40%] lg:h-[25%] cursor-pointer rounded-lg text-sm"
          >
            {isLoading ? "ADDING..." : "ADD NEW SERVICE"}
          </button>
        </div>
      </div>
    </div>
  )
}
