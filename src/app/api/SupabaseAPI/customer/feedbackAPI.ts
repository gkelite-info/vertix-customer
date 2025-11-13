import { supabase } from "../../../../../utils/supabase/client";

export interface Feedback {
  feedbackId?: number;
  customerId: number;
  filingYearId?: number;
  serviceType: string;
  message: string;
  rating?: number;
  status?: "new" | "reviewed" | "resolved";
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string | null;
}

export const getFeedbacks = async (filingYearId?: number): Promise<Feedback[]> => {
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

    let query = supabase
      .from("feedbacks")
      .select("*")
      .eq("customerId", customer.customerId)
      .order("createdAt", { ascending: false });

    if (filingYearId) query = query.eq("filingYearId", filingYearId);

    const { data, error } = await query;
    if (error) throw error;

    return data || [];
  } catch (error: any) {
    console.error("Error fetching feedbacks:", error.message);
    throw error;
  }
};

export const upsertFeedback = async (
  serviceType: string,
  message: string,
  filingYearId?: number,
  rating?: number,
  status: "new" | "reviewed" | "resolved" = "new"
): Promise<Feedback | null> => {
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

    const now = new Date().toISOString();

    const { data, error } = await supabase
      .from("feedbacks")
      .insert([
        {
          customerId: customer.customerId,
          filingYearId,
          serviceType,
          message,
          rating,
          status,
          createdAt: now,
          updatedAt: now,
        },
      ])
      .select()
      .single();

    if (error) throw error;
    return data;
  } catch (error: any) {
    console.error("Error inserting feedback:", error.message);
    throw error;
  }
};
