import { supabase } from "../../../../../utils/supabase/client";

export interface Message {
  messageId?: number;
  customerId: number;
  filingYearId?: number;
  content: string;
  status?: "sent" | "read" | "archived";
  createdAt?: string;
  updatedAt?: string;
}

export const getMessages = async (filingYearId?: number): Promise<Message[]> => {
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
      .from("messages")
      .select("*")
      .eq("customerId", customer.customerId)
      .order("createdAt", { ascending: false });

    if (filingYearId) query = query.eq("filingYearId", filingYearId);

    const { data, error } = await query;
    if (error) throw error;

    return data || [];
  } catch (error: any) {
    console.error("Error fetching messages:", error.message);
    throw error;
  }
};

export const upsertMessage = async (
  content: string,
  filingYearId?: number,
  status: "sent" | "read" | "archived" = "sent"
): Promise<Message | null> => {
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
      .from("messages")
      .insert([
        {
          customerId: customer.customerId,
          filingYearId,
          content,
          status,
          updatedAt: now,
          createdAt: now,
        },
      ])
      .select()
      .single();

    if (error) throw error;
    return data;
  } catch (error: any) {
    console.error("Error inserting message:", error.message);
    throw error;
  }
};

