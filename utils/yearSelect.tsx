"use client";

import { useEffect, useState } from "react";
import { useYear } from "@/app/api/context/yearContext";
import { getCustomer } from "@/app/api/SupabaseAPI/customer/customerApi";

interface YearSelectProps {
  style?: string;
}

export default function YearSelect({ style = "" }: YearSelectProps) {
  const [name, setName] = useState("");
  const [customerId, setCustomerId] = useState<string | number>("");
  const { selectedYear, setSelectedYear } = useYear();

  const currentYear = new Date().getFullYear();
  const startYear = 2020;
  const years = Array.from(
    { length: currentYear - startYear + 1 },
    (_, i) => currentYear - i
  );

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const customer = await getCustomer();
        setName(customer.firstname);
        setCustomerId(customer.customerId);
      } catch (error) {
        console.error("Failed to fetch customer", error);
      }
    };
    fetchCustomer();
  }, []);

  return (
    <div className="bg-red-00 lg:h-30 lg:w-[100%] flex justify-center items-center lg:px-10 shadow-lg">
      <div
        className={`bg-red-00 h-[100%] lg:w-[68%] flex items-center justify-start ${style} w-[65%]`}
      >
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className="text-black border rounded-sm p-1"
        >
          <option value="">Select Year</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <div className="bg-indigo-00 h-[100%] w-[27%] flex items-center justify-end">
        <div className="bg-red-00 lg:h-[70%] lg:px-3 lg:gap-2 flex flex-col items-center justify-center rounded-lg shadow-lg">
          <h3
            style={{
              color: "#1D2B48",
              fontWeight: "600",
              fontSize: 12,
            }}
          >
            Tax Management Dashboard
          </h3>
          <div className="flex justify-between lg:gap-0 bg-green-00 lg:w-[100%]">
            <div className="flex flex-col bg-indigo-00 w-[50%]">
              <h5 className="text-[#585E68] font-semibold text-xs">Name</h5>
              <p className="text-xs text-[#585E68] font-medium">{name}</p>
            </div>
            <div className="flex flex-col bg-gray-00 text-end w-[50%]">
              <h5 className="text-[#585E68] font-semibold text-xs">
                Client Id
              </h5>
              <p className="text-xs text-[#585E68] font-medium">{customerId}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
