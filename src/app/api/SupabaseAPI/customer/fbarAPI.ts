import { supabase } from "../../../../../utils/supabase/client";

export interface FbarFatcaData {
    fbarFatcaId?: number;
    customerId: number;
    year: number;
    hasForeignAccount: boolean;
    exceededLimit: string;
    createdAt?: string;
    updatedAt?: string;
    deletedAt?: string | null;
}

export interface FilingYearData {
    filingYearId?: number;
    customerId: number;
    AboutId?: number;
    dependentId?: number;
    residencyId?: number;
    incomeDetailsId?: number;
    deductionDetailsId?: number;
    fbarFatcaId: number;
    status?: string;
    year: number;
    updatedAt?: string;
}

export const updateFilingYearWithDetails = async (
    year: number,
    hasForeignAccount: boolean,
    exceededLimit: string,
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

        const { data: fbarData, error: fbarError } = await supabase
            .from("fbar_fatca")
            .upsert([
                {
                    customerId,
                    year,
                    hasForeignAccount,
                    exceededLimit,
                    updatedAt: now,
                    createdAt: now,
                }
            ], { onConflict: "customerId, year" })
            .select()
            .single();

        if (fbarError || !fbarData)
            throw new Error(fbarError?.message || "Failed to upsert FBAR/FATCA");

        const [
            { data: aboutData },
            { data: dependentsData },
            { data: residencyData },
            { data: incomeData },
            { data: deductionData },
        ] = await Promise.all([
            supabase
                .from("aboutyou")
                .select('"AboutId"')
                .eq("customerId", customerId)
                .single(),
            supabase
                .from("dependents")
                .select("dependentId")
                .eq("customerId", customerId)
                .single(),
            supabase
                .from("residencydetails")
                .select("residencyId")
                .eq("customerId", customerId)
                .single(),
            supabase
                .from("incomedetails")
                .select("incomeDetailsId")
                .eq("customerId", customerId)
                .single(),
            supabase
                .from("deductiondetails")
                .select("deductionDetailsId")
                .eq("customerId", customerId)
                .single(),
        ]);

        const { data: filingData, error: filingError } = await supabase
            .from("filing_year")
            .update({
                AboutId: aboutData?.AboutId ?? null,
                dependentId: dependentsData?.dependentId ?? null,
                residencyId: residencyData?.residencyId ?? null,
                incomeDetailsId: incomeData?.incomeDetailsId ?? null,
                deductionDetailsId: deductionData?.deductionDetailsId ?? null,
                fbarFatcaId: fbarData.fbarFatcaId,
                status: "Documents Pending",
                updatedAt: now,
            })
            .eq("customerId", customerId)
            .eq("year", year)
            .select()
            .single();

        if (filingError || !filingData)
            throw new Error(filingError?.message || "Failed to update filing_year");

        return filingData;
    } catch (error: any) {
        console.error("Error updating filing year details:", error.message);
        throw error;
    }
};
