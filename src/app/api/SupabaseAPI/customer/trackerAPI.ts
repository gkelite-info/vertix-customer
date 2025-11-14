import { supabase } from "../../../../../utils/supabase/client";

export interface FilingYearStatus {
  filingYearId: number;
  status: string | null;
  sub_status: string | null;
  updatedAt: string;
}

export const getFilingYearStatus = async (filingYearId: number) => {
  try {
    const { data, error } = await supabase
      .from("filing_year")
      .select("status, sub_status, last_actor")
      .eq("filingYearId", filingYearId)
      .limit(1)
      .maybeSingle();

    if (error) throw error;

    return data || null;
  } catch (err: any) {
    console.error("Error fetching filing year status:", err.message);
    throw err;
  }
};
