import { supabase } from "../../../../../utils/supabase/client";

export interface AboutYouPayload {
  customerId: number;
  spouseId?: number | null;
  isMarried: boolean;

  firstName: string;
  middleName?: string | null;
  lastName: string;

  yourSSNType?: string | null;
  yourSSNValue?: string | null;

  visaTypeJan?: string | null;
  visaTypeDec?: string | null;

  firstEntryDate?: string | null;
  monthsInUS?: number | null;

  citizenshipCountry?: string | null;

  createdAt?: string;
  updatedAt?: string;
}

export const getAboutYou = async (customerId: any): Promise<AboutYouPayload | null> => {
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
      .from("aboutyou")
      .select("*")
      .eq("customerId", customer.customerId)
      .single();

    if (error && error.code !== "PGRST116") throw error;
    return data;
  } catch (error: any) {
    console.error("Error getting about you:", error.message);
    throw error;
  }
};

export const upsertAboutYou = async (
  payload: AboutYouPayload
): Promise<AboutYouPayload | null> => {
  try {
    const { data, error } = await supabase
      .from("aboutyou")
      .upsert([payload])
      .select()
      .single();

    if (error) throw error;

    return data;
  } catch (error: any) {
    console.error("Error saving about you:", error.message);
    throw error;
  }
};
