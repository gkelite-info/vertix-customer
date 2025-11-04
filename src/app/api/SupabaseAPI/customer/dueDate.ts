import { supabase } from "../../../../../utils/supabase/client";

export interface DateForDueInput {
  filingYearId: number;
  date: string;
  federal: "Paid" | "Unpaid";
  state1: string;
  state2?: string | null;
  state3?: string | null;
  state4?: string | null;
  state5?: string | null;
  state6?: string | null;
}

export const upsertDateForDue = async (input: DateForDueInput) => {
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
    if (!input.state1) throw new Error("State 1 is required");

    const now = new Date().toISOString();

    const payload = {
      customerId: customer.customerId,
      filingYearId: input.filingYearId,
      dueDate: input.date,
      federalStatus: input.federal,
      state1: input.state1,
      state2: input.state2 ?? null,
      state3: input.state3 ?? null,
      state4: input.state4 ?? null,
      state5: input.state5 ?? null,
      state6: input.state6 ?? null,
      createdAt: now,
      updatedAt: now,
    };

    const { data, error } = await supabase
      .from("date_for_due")
      .upsert(payload, { onConflict: "customerId, filingYearId" })
      .select()
      .single();

    if (error) throw error;
    return data;
  } catch (error: any) {
    console.error("Error upserting date for due:", error.message);
    throw error;
  }
};

export const getDateForDue = async (filingYearId: number) => {
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
      .from("date_for_due")
      .select("*")
      .eq("customerId", customer.customerId)
      .eq("filingYearId", filingYearId)
      .maybeSingle();

    if (error) throw error;
    return data;
  } catch (error: any) {
    console.error("Error fetching date for due:", error.message);
    throw error;
  }
};
