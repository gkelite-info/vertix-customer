import { supabase } from "../../../../../utils/supabase/client"

export interface FeePaymentInput {
  summaryId: number
  paymentDate: string
  amountPaid: number
  paymentMode: string
  transactionId?: string | null
  notes?: string | null
}

export const insertFeePayment = async (payment: FeePaymentInput) => {
  try {
    const payload = {
      summaryId: payment.summaryId,
      paymentDate: payment.paymentDate,
      amountPaid: payment.amountPaid,
      paymentMode: payment.paymentMode,
      transactionId: payment.transactionId ?? null,
      notes: payment.notes ?? null,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }

    const { data, error } = await supabase
      .from("fee_payments")
      .insert(payload)
      .select()
      .single()

    if (error) throw error
    return data
  } catch (error: any) {
    console.error("Error inserting fee payment:", error.message)
    throw error
  }
}

export const getFeePayments = async (summaryId: number) => {
  try {
    const { data, error } = await supabase
      .from("fee_payments")
      .select("*")
      .eq("summaryId", summaryId)
      .order("paymentDate", { ascending: false })

    if (error) throw error
    return data
  } catch (error: any) {
    console.error("Error fetching fee payments:", error.message)
    throw error
  }
}
