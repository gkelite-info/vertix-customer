import { supabase } from "../../../../../utils/supabase/client";

export type MigrationRow = {
    fromDate: string;
    toDate: string;
    state: string;
    country: string;
};

export type ResidencyPayload = {
    migrations: MigrationRow[];
    notes: string;
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

        const { data: residencyRow, error: residencyError } = await supabase
            .from("residencydetails")
            .upsert([
                {
                    customerId,
                    notes: payload.notes || null,
                    updatedAt: now,
                    createdAt: now,
                    deletedAt: null,
                }
            ])
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
            fromDate: m.fromDate,
            toDate: m.toDate,
            state: m.state,
            country: m.country,
            createdAt: now,
            updatedAt: now,
        }));

        const { error: migrationError } = await supabase
            .from("residencymigrations")
            .insert(rowsToInsert);

        if (migrationError) throw migrationError;

        return { success: true };
    } catch (error: any) {
        console.error("Error in residency save:", error.message);
        throw error;
    }
};
