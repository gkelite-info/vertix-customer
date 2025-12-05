import { supabase } from "../../../../../utils/supabase/client"

export interface FeeSummaryItemInput {
  summaryId: number
  description: string
  status?: number | null
  fee: number
  total: number
}

export const upsertFeeSummaryItem = async (item: FeeSummaryItemInput) => {
  try {
    const now = new Date().toISOString()

    const payload = {
      summaryId: item.summaryId,
      description: item.description,
      status: item.status ?? null,
      fee: item.fee,
      total: item.total,
      createdAt: now,
      updatedAt: now,
    }

    const { data, error } = await supabase
      .from("fee_summary_items")
      .upsert(payload)
      .select()
      .single()

    if (error) throw error
    return data
  } catch (error: any) {
    console.error("Error upserting fee summary item:", error.message)
    throw error
  }
}