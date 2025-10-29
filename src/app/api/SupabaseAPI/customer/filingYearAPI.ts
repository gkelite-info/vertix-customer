import { supabase } from "../../../../../utils/supabase/client";

export interface FilingYearData {
  existing: boolean;
  filingYearId: number;
  customerId: number;
  year: number;
  status?: string;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string | null;
}

export const getLatestFilingYearRecord = async (): Promise<FilingYearData | null> => {
  try {
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) throw new Error("Not authenticated");

    const { data: customer, error: customerError } = await supabase
      .from("vertixcustomers")
      .select("customerId")
      .eq("auth_id", user.id)
      .single();

    if (customerError || !customer) throw new Error("Customer not found");

    const customerId = customer.customerId;

    const { data: filingYear, error: filingError } = await supabase
      .from("filing_year")
      .select("*")
      .eq("customerId", customerId)
      .order("filingYearId", { ascending: false })
      .limit(1)
      .single();

    if (filingError) throw new Error(filingError.message);

    return filingYear || null;
  } catch (error: any) {
    console.error("Error fetching latest filing year record:", error.message);
    throw error;
  }
};

export const createFilingYearRecord = async (year: number): Promise<FilingYearData> => {
  try {
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();
    if (authError || !user) throw new Error("Not authenticated");

    const { data: customer, error: customerError } = await supabase
      .from("vertixcustomers")
      .select("customerId")
      .eq("auth_id", user.id)
      .single();
    if (customerError || !customer) throw new Error("Customer not found");

    const customerId = customer.customerId;

    const { data: existing, error: checkError } = await supabase
      .from("filing_year")
      .select("*")
      .eq("customerId", customerId)
      .eq("year", year)
      .maybeSingle();

    if (checkError) throw new Error(checkError.message);

    if (existing) {
      throw new Error("Year already exists");
    }

    const now = new Date().toISOString();
    const { data: filingData, error: filingError } = await supabase
      .from("filing_year")
      .insert([{ customerId, year, createdAt: now, updatedAt: now }])
      .select()
      .single();

    if (filingError || !filingData)
      throw new Error(filingError?.message || "Failed to create filing year record");

    return filingData;
  } catch (error: any) {
    console.error("Error creating filing year record:", error.message);
    throw error;
  }
};

export const getFilingYearIdForCustomerAndYear = async (
  customerId: string,
  year: number
): Promise<number | null> => {
  try {
    const { data, error } = await supabase
      .from("filing_year")
      .select("filingYearId")
      .eq("customerId", customerId)
      .eq("year", year)
      .single();

    if (error || !data) {
      console.warn(`No filing year for customerId=${customerId} year=${year}`);
      return null;
    }

    return data.filingYearId;
  } catch (error) {
    console.error("Error in getFilingYearIdForCustomerAndYear:", error);
    return null;
  }
};
