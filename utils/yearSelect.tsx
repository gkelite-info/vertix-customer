"use client"
import { getCustomer } from "@/api-requests/customers/customerApi";
import YearSelector from "@/app/(pageNavbar)/YearSelector/YearSelector"
import { useEffect, useState } from "react"

export default function YearSelect({ style = "justify-end" }: { style?: string }) {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [name, setName] = useState("");
  const [customerId, setCustomerId] = useState<string | number>("");

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const res = await getCustomer();
        setName(res.firstname);
        setCustomerId(res.customerId);
      } catch (error) {
        console.error("Failed to fetch customer")
        throw error
      }
    }
    fetchCustomer();
  }, []);


  return (
    <>
      <div className="bg-red-00 lg:h-30 lg:w-[100%] flex justify-center items-center lg:px-10 shadow-lg">
        <div className={`bg-red-00 h-[100%] lg:w-[68%] flex items-center justify-start ${style} w-[65%]`}>
          <select name="" id="" className="text-black border rounded-sm p-1">
            <option value="">Select Year</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
          </select>
          {/* <YearSelector
            years={[2020, 2021, 2022, 2023, 2024, 2025]}
            onYearSelect={(year) => setSelectedYear(year)}
          /> */}
        </div>
        <div className="bg-indigo-00 h-[100%] w-[27%] flex items-center justify-end">
          <div className="bg-red-00 lg:h-[70%] lg:px-3 lg:gap-2 flex flex-col items-center justify-center rounded-lg shadow-lg">
            <h3 style={{ color: "#1D2B48", fontWeight: "600", fontSize: 12 }}>
              Tax Management Dashboard
            </h3>
            <div className="flex justify-between lg:gap-0 bg-green-00 lg:w-[100%]">
              <div className="flex flex-col bg-indigo-00 w-[50%]">
                <h5 className="text-[#585E68] font-semibold text-xs">Name</h5>
                <p className="text-xs text-[#585E68] font-medium">{name}</p>
              </div>
              <div className="flex flex-col bg-gray-00 text-end w-[50%]">
                <h5 className="text-[#585E68] font-semibold text-xs">Client Id</h5>
                <p className="text-xs text-[#585E68] font-medium">{customerId}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
