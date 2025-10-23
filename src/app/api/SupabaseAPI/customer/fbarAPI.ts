import { supabase } from "../../../../../utils/supabase/client";

export interface FbarFatcaData {
    fbarFatcaId?: number;
    customerId: number;
    year: number;
    hasForeignAccount: boolean;
    createdAt?: string;
    updatedAt?: string;
    deletedAt?: string | null;
}

export const upsertFbarFatcaDetails = async (
    year: number,
    hasForeignAccount: boolean
): Promise<FbarFatcaData> => {
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
        const now = new Date().toISOString();

        const fbarFatcaRecord = {
            customerId: customerId,
            year,
            hasForeignAccount,
            createdAt: now,
            updatedAt: now,
        };

        const { data: upsertedData, error: upsertError } = await supabase
            .from("fbar_fatca")
            .upsert(fbarFatcaRecord, {
                onConflict: "customerId, year",
            })
            .select()
            .single();

        if (upsertError) throw upsertError;

        return upsertedData;
    } catch (error: any) {
        console.error("Error upserting FBAR/FATCA details:", error.message);
        throw error;
    }
};