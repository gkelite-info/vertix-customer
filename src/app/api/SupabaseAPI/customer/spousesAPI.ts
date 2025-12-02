import { supabase } from "../../../../../utils/supabase/client";

export interface SpousePayload {
  customerId: number;

  firstname: string;
  middlename?: string | null;
  lastname: string;

  dob?: string | null;
  occupation?: string | null;

  yourSSNType?: string | null;
  yourSSNValue?: string | null;

  visaTypeJan?: string | null;
  visaTypeDec?: string | null;

  firstEntryDate?: string | null;
  monthsInUS?: number | null;

  createdAt?: string;
  updatedAt?: string;
}

export const getSpouse = async (customerId: any): Promise<any | null> => {
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

    const { data, error } = await supabase
      .from("spouses")
      .select("*")
      .eq("customerId", customer.customerId)
      .single();

    if (error && error.code !== "PGRST116") throw error;
    return data;
  } catch (error: any) {
    console.error("Error getting spouse:", error.message);
    throw error;
  }
};

export const upsertSpouse = async (
  payload: SpousePayload
): Promise<any | null> => {
  try {
    const { data, error } = await supabase
      .from("spouses")
      .upsert([payload])
      .select()
      .single();

    if (error) throw error;

    return data;
  } catch (error: any) {
    console.error("Error saving spouse:", error.message);
    throw error;
  }
};
