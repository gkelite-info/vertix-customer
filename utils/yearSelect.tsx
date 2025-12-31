"use client";

import { useEffect, useState } from "react";
import { useYear } from "@/app/api/context/yearContext";
import { getCustomer } from "@/app/api/SupabaseAPI/customer/customerApi";
import { getLatestFilingYearRecord } from "@/app/api/SupabaseAPI/customer/filingYearAPI";
import { supabase } from "@/api-requests/supabaseClient";

interface YearSelectProps {
  style?: string;
}

export default function YearSelect({ style = "" }: YearSelectProps) {
  console.log("YearSelect rendered");

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
    const token = localStorage.getItem("sb-wieinzdarxemefrzitog-auth-token");
    if (!token) return;
    const fetchCustomer = async () => {
      await supabase.auth.setSession({
        access_token: token,
        refresh_token: ""
      });
      const customer = await getCustomer();
      setName(customer.firstname);
      setCustomerId(customer.customerId);
    };
    fetchCustomer();
  }, []);

  useEffect(() => {
    if (!customerId) return;
    if (selectedYear) return;

    const fetchLatestYear = async () => {
      try {
        const latestRecord = await getLatestFilingYearRecord();
        if (latestRecord?.year) {
          const yearString = latestRecord.year.toString();
          setSelectedYear(yearString);
          localStorage.setItem("selectedYear", yearString);
          //console.log("Auto-selected latest year:", yearString);
        }
      } catch (error) {
        console.error("Error fetching latest filing year:", error);
      }
    };
    fetchLatestYear();
  }, [customerId, selectedYear, setSelectedYear]);

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const year = e.target.value;
    setSelectedYear(year);
    localStorage.setItem("selectedYear", year);
    //console.log("Year manually selected:", year);
  };

  return (
    <div className="bg-red-00 lg:h-30 lg:w-[100%] flex justify-center items-center lg:px-10 shadow-lg">
      <div className={`bg-red-00 h-[100%] lg:w-[68%] flex items-center justify-start ${style} w-[65%]`}>
        <select
          value={selectedYear}
          onChange={handleYearChange}
          className="text-black border rounded-sm p-1 focus:outline-none"
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
        <div className="bg-red-00 lg:h-[70%] w-[80%] lg:px-3 flex flex-col items-center justify-center rounded-lg shadow-lg">
          <div className="flex justify-between lg:gap-5 bg-green-00 lg:w-[100%]">
            <div className="flex flex-col bg-indigo-00 w-[50%]">
              <h5 className="text-[#585E68] font-semibold text-xs">Name</h5>
              <p className="text-xs text-[#585E68] font-medium">{name}</p>
            </div>
            <div className="flex flex-col bg-gray-00 text-end w-[50%] box-border overflow-x-auto">
              <h5 className="text-[#585E68] font-semibold text-xs w-[100%] bg-red-00">
                Client ID
              </h5>
              <p className="text-xs text-[#585E68] font-medium">{customerId}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}