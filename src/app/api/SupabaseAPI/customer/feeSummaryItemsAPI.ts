import { supabase } from "../../../../../utils/supabase/client"

export interface FeeSummaryItemRow {
  itemId: number;
  summaryId: number;
  description: string;
  status: number | null;
  fee: number;
  total: number;
  hasStatus: boolean;
}
export interface FeeSummaryItemInput {
  summaryId: number
  description: string
  status?: number | null
  fee: number
  total: number
}

export const getFeeSummaryItems = async (summaryId: number) => {
  try {
    const { data, error } = await supabase
      .from("fee_summary_items")
      .select(`
        itemId,
        summaryId,
        description,
        status,
        fee,
        total,
        hasStatus
      `)
      .eq("summaryId", summaryId)
      .is("deletedAt", null)
      .order("itemId");

    if (error) throw error;
    return data as FeeSummaryItemRow[];
  } catch (error: any) {
    console.error("Error fetching fee summary items:", error.message);
    throw error;
  }
};

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