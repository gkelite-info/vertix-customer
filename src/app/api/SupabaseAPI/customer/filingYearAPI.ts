import { supabase } from "../../../../../utils/supabase/client";

export interface FilingYearData {
    filingYearId?: number;
    customerId: number;
    year: number;
    status?: string;
    createdAt?: string;
    updatedAt?: string;
    deletedAt?: string | null;
}

export const createFilingYearRecord = async (
    year: number
): Promise<FilingYearData> => {
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

        const { data: filingData, error: filingError } = await supabase
            .from("filing_year")
            .insert([
                {
                    customerId,
                    year,
                    createdAt: now,
                    updatedAt: now,
                }
            ])
            .select()
            .single();

        if (filingError || !filingData)
            throw new Error(filingError?.message || "Failed to create filing year record");

        return filingData;
    } catch (error: any) {
        console.error("Error creating filing year record:", error.message);
        throw error;
    }
};
