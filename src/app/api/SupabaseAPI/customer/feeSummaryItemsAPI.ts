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

    // const payload = {
    //   summaryId: item.summaryId,
    //   description: item.description,
    //   status: item.status ?? null,
    //   fee: item.fee,
    //   total: item.total,
    //   createdAt: now,
    //   updatedAt: now,
    // }

    // const { data, error } = await supabase
    //   .from("fee_summary_items")
    //   .upsert(payload)
    //   .select()
    //   .single()

    // if (error) throw error
    // return data
    
    const { data: updated, error: updateError } = await supabase
      .from("fee_summary_items")
      .update({
        status: item.status ?? null,
        fee: item.fee,
        total: item.total,
        updatedAt: now,
      })
      .eq("summaryId", item.summaryId)
      .eq("description", item.description)
      .is("deletedAt", null)
      .select("itemId");

    if (updateError) throw updateError;

    // 🔹 STEP 2: If updated → done
    if (updated && updated.length > 0) {
      return updated[0];
    }

    // 🔹 STEP 3: Else INSERT
    const { data: inserted, error: insertError } = await supabase
      .from("fee_summary_items")
      .insert({
        summaryId: item.summaryId,
        description: item.description,
        status: item.status ?? null,
        fee: item.fee,
        total: item.total,
        createdAt: now,
        updatedAt: now,
      })
      .select()
      .single();

    if (insertError) throw insertError;

    return inserted;
  } catch (error: any) {
    console.error("Error upserting fee summary item:", error.message)
    throw error
  }
}