import { supabase } from "../../../../../utils/supabase/client";

export type MigrationRow = {
    fromDate: string;
    toDate: string;
    state: string;
    country: string;
};

export type ResidencyPayload = {
    migrations: MigrationRow[];
    spouseMigrations?: MigrationRow[];
    spouseId?: number;
    notes: string;
    spouseResidency: boolean;
    filingYearId: number
};


export const upsertResidencyDetails = async (payload: ResidencyPayload) => {
    try {
        const { data: { user }, error: authError } = await supabase.auth.getUser();
        if (authError || !user) throw new Error("Not authenticated");

        const { data: customer, error: customerError } = await supabase
            .from("vertixcustomers")
            .select("customerId")
            .eq("auth_id", user.id)
            .single();

        if (customerError || !customer) throw new Error("Customer not found");

        const customerId = customer.customerId;

        const now = new Date().toISOString();

        const { data: spouse, error: spouseError } = await supabase
            .from("spouses")
            .select("spouseId")
            .eq("customerId", customerId)
            .single();

        if (spouseError && spouseError.code !== 'PGRST116') {
            console.warn("Spouse fetch error:", spouseError.message);
        }

        const spouseId = spouse?.spouseId ?? null;

        const first = payload.migrations[0];
        const { data: residencyRow, error: residencyError } = await supabase
            .from("residencydetails")
            .upsert([
                {
                    customerId,
                    filingYearId: payload.filingYearId,
                    fromDate: first.fromDate,
                    toDate: first.toDate,
                    state: first.state,
                    country: first.country,
                    notes: payload.notes || null,
                    spouseResidency: payload.spouseResidency,
                    updatedAt: now,
                    createdAt: now,
                    deletedAt: null,
                }
            ], {
                onConflict: "customerId,filingYearId"
            })
            .select()
            .single();

        if (residencyError) throw residencyError;

        const residencyId = residencyRow.residencyId;

        await supabase
            .from("residencymigrations")
            .delete()
            .eq("residencyId", residencyId);

        const rowsToInsert = payload.migrations.map((m) => ({
            residencyId,
            filingYearId: payload.filingYearId,
            fromDate: m.fromDate,
            toDate: m.toDate,
            state: m.state,
            country: m.country,
            createdAt: now,
            updatedAt: now,
            isSpouse: false,
            spouseId: null
        }));

        const { error: migrationError } = await supabase
            .from("residencymigrations")
            .insert(rowsToInsert);

        if (migrationError) throw migrationError;

        if (!payload.spouseResidency && payload.spouseMigrations?.length) {
            const spouseRows = payload.spouseMigrations.map(m => ({
                residencyId,
                filingYearId: payload.filingYearId,
                fromDate: m.fromDate,
                toDate: m.toDate,
                state: m.state,
                country: m.country,
                createdAt: now,
                updatedAt: now,
                isSpouse: true,
                spouseId: payload.spouseId ?? spouseId ?? null,
            }));

            const { error: spouseError } = await supabase
                .from("residencymigrations")
                .insert(spouseRows);

            if (spouseError) throw spouseError;
        }

        return { success: true };
    } catch (error: any) {
        console.error("Error in residency save:", error.message);
        throw error;
    }
};
