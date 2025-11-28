"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { getCustomer } from "../SupabaseAPI/customer/customerApi";
import { getFilingYearIdForCustomerAndYear } from "../SupabaseAPI/customer/filingYearAPI";
import { supabase } from "../../../../utils/supabase/client";

interface YearContextType {
  selectedYear: string;
  setSelectedYear: (year: string) => void;
  filingYearId: number | null;
  isLoading: boolean;
}

const YearContext = createContext<YearContextType | undefined>(undefined);

export const YearProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedYear, setSelectedYear] = useState<string>("");
  const [filingYearId, setFilingYearId] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const restoreSession = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      try {
        await supabase.auth.setSession({
          access_token: localStorage.getItem("access_token")!,
          refresh_token: localStorage.getItem("refresh_token")!,
        });
        console.log("Supabase session restored");
      } catch (err) {
        console.error("Failed to restore Supabase session:", err);
      }
    };

    restoreSession();
  }, []);

  useEffect(() => {
    const storedYear = localStorage.getItem("selectedYear");
    if (storedYear) setSelectedYear(storedYear);
  }, []);

  useEffect(() => {
    const fetchFilingYear = async () => {
      if (!selectedYear) {
        setFilingYearId(null);
        return;
      }

      setIsLoading(true);
      try {
        const customer = await getCustomer();
        if (!customer?.customerId) throw new Error("Customer not found");

        let filingId = await getFilingYearIdForCustomerAndYear(
          customer.customerId,
          Number(selectedYear)
        );

        setFilingYearId(filingId);
      } catch (error) {
        console.error("Error fetching filing year:", error);
        setFilingYearId(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFilingYear();
  }, [selectedYear]);

  useEffect(() => {
    if (selectedYear) localStorage.setItem("selectedYear", selectedYear);
  }, [selectedYear]);

  return (
    <YearContext.Provider
      value={{
        selectedYear,
        setSelectedYear,
        filingYearId,
        isLoading,
      }}
    >
      {children}
    </YearContext.Provider>
  );
};

export const useYear = () => {
  const context = useContext(YearContext);
  if (!context) throw new Error("useYear must be used within YearProvider");
  return context;
};