import { supabase } from "../../../../../utils/supabase/client"

export interface FeeSummaryInput {
  filingYearId: number
  totalAmount: number
  discount?: number
  referral?: number
  netFee: number
  feePaid?: number
  dueAmount?: number
  code?: string | null
}

export const getFeeSummary = async (filingYearId: number) => {
  try {
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()
    if (authError || !user) throw new Error("Not authenticated")

    const { data: customer, error: customerError } = await supabase
      .from("vertixcustomers")
      .select("customerId")
      .eq("auth_id", user.id)
      .single()
    if (customerError || !customer) throw new Error("Customer not found")

    const { data, error } = await supabase
      .from("fee_summary")
      .select("*, fee_summary_items(*), fee_payments(*)")
      .eq("customerId", customer.customerId)
      .eq("filingYearId", filingYearId)
      .order("createdAt", { ascending: false })

    if (error) throw error
    return data || []
  } catch (error: any) {
    console.error("Error fetching fee summary:", error.message)
    throw error
  }
}

export const upsertFeeSummary = async (summary: FeeSummaryInput) => {
  try {
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()
    if (authError || !user) throw new Error("Not authenticated")

    const { data: customer, error: customerError } = await supabase
      .from("vertixcustomers")
      .select("customerId")
      .eq("auth_id", user.id)
      .single()
    if (customerError || !customer) throw new Error("Customer not found")

    const customerId = customer.customerId
    const now = new Date().toISOString()

    const payload = {
      customerId,
      filingYearId: summary.filingYearId,
      totalAmount: summary.totalAmount,
      discount: summary.discount ?? 0,
      referral: summary.referral ?? 0,
      netFee: summary.netFee,
      feePaid: summary.feePaid ?? 0,
      dueAmount: summary.dueAmount ?? 0,
      code: summary.code ?? null,
      updatedAt: now,
      createdAt: now,
    }

    const { data, error } = await supabase
      .from("fee_summary")
      .upsert([payload], { onConflict: "customerId,filingYearId" })
      .select("summaryId")
      .single()

    if (error) throw error
    return data
  } catch (error: any) {
    console.error("Error upserting fee summary:", error.message)
    throw error
  }
}
