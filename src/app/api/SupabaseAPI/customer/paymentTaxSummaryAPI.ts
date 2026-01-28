import { supabase } from "../../../../../utils/supabase/client";

export interface PaymentTaxSummaryInput {
  filingYearId: number;
  taxType: string;
  state: string;
  beforePlanning: number;
  afterPlanning: number;
  typeOfFiling: "Paper Filing" | "E-Filing";
  originalUpdated: "Original" | "Updated";
  belongsTo:
  | "Joint"
  | "Single"
  | "Marriage Filing Separately"
  | "Marriage Filing Separately - TP"
  | "Marriage Filing Separately - SP";
  payment_status?: "Accepted" | "Rejected" | null;
}

export const getPaymentTaxSummary = async (filingYearId: number) => {
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
      .from("payment_tax_summary")
      .select("*")
      .eq("customerId", customer.customerId)
      .eq("filingYearId", filingYearId)
      .eq("isDeleted", false)
      .order("createdAt", { ascending: true });

    if (error) throw error;

    return data || [];
  } catch (error: any) {
    console.error("Error fetching payment tax summary:", error.message);
    throw error;
  }
};

export const upsertPaymentTaxSummary = async (summary: PaymentTaxSummaryInput & { taxsummaryId?: number }) => {
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

    if (summary.beforePlanning === undefined || summary.afterPlanning === undefined) {
      throw new Error("Both 'beforePlanning' and 'afterPlanning' are required.");
    }

    const now = new Date().toISOString();

    const payload = {
      taxsummaryId: summary.taxsummaryId,
      customerId,
      filingYearId: summary.filingYearId,
      taxType: summary.taxType,
      state: summary.state,
      beforePlanning: summary.beforePlanning,
      afterPlanning: summary.afterPlanning,
      typeOfFiling: summary.typeOfFiling,
      originalUpdated: summary.originalUpdated,
      belongsTo: summary.belongsTo,
      payment_status: summary.payment_status ?? null,
      createdAt: now,
      updatedAt: now,
    };

    const { data, error } = await supabase
      .from("payment_tax_summary")
      .upsert(payload)
      .select()
      .single();

    if (error) throw error;

    return data;
  } catch (error: any) {
    console.error("Error upserting payment tax summary:", error.message);
    throw error;
  }
};

export const upsertComment = async (taxsummaryId: number, comment: string) => {
  try {
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) throw new Error("Not authenticated");

    const now = new Date().toISOString();

    const { data, error } = await supabase
      .from("payment_tax_summary")
      .update({
        comment,
        payment_status: "Rejected",
        updatedAt: now,
      })
      .eq("taxsummaryId", taxsummaryId)
      .select()
      .single();

    if (error) throw error;

    return data;
  } catch (error: any) {
    console.error("Error updating comment:", error.message);
    throw error;
  }
};

export const updatePaymentStatus = async (
  taxsummaryId: number,
  payment_status: string,
  comment?: string
) => {
  try {
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) throw new Error("Not authenticated");

    const now = new Date().toISOString();

    const { data, error } = await supabase
      .from("payment_tax_summary")
      .update({
        payment_status,
        ...(comment && { comment }),
        updatedAt: now,
      })
      .eq("taxsummaryId", taxsummaryId)
      .select()
      .single();

    if (error) throw error;

    return data;
  } catch (error: any) {
    console.error("Error updating payment status:", error.message);
    throw error;
  }
};

export const acceptPaymentSummary = async (taxsummaryId: number) => {
  try {
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) throw new Error("Not authenticated");

    const now = new Date().toISOString();

    const { data, error } = await supabase
      .from("payment_tax_summary")
      .update({
        payment_status: "Accepted",
        comment: null,
        updatedAt: now,
      })
      .eq("taxsummaryId", taxsummaryId)
      .select()
      .single();

    if (error) throw error;

    return data;
  } catch (err: any) {
    console.error("Error accepting payment summary:", err.message);
    throw err;
  }
};

export const softDeletePaymentTaxSummary = async (taxsummaryId: number) => {
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) throw new Error("Not authenticated");

  const now = new Date().toISOString();

  const { data, error } = await supabase
    .from("payment_tax_summary")
    .update({
      isDeleted: true,
      updatedAt: now,
    })
    .eq("taxsummaryId", taxsummaryId)
    .select()
    .single();

  if (error) throw error;
  return data;
};

