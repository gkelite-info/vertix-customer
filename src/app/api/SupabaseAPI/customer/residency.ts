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

export const getResidencyDetails = async (filingYearId: number) => {
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

        const { data: residency, error: residencyError } = await supabase
            .from("residencydetails")
            .select("*")
            .eq("customerId", customerId)
            .eq("filingYearId", filingYearId)
            .is("deletedAt", null)
            .single();

        if (residencyError?.code === "PGRST116") {
            return null;
        }
        if (residencyError) throw residencyError;

        const { data: migrations, error: migrationError } = await supabase
            .from("residencymigrations")
            .select("*")
            .eq("residencyId", residency.residencyId)
            // .order("fromDate", { ascending: true });

        if (migrationError) throw migrationError;

        const taxpayerMigrations = migrations.filter(m => !m.isSpouse);
        const spouseMigrations = migrations.filter(m => m.isSpouse);

        return {
            residencyId: residency.residencyId,
            notes: residency.notes ?? "",
            spouseResidency: residency.spouseResidency,
            migrations: taxpayerMigrations,
            spouseMigrations,
        };

    } catch (error: any) {
        console.error("Error fetching residency details:", error.message);
        throw error;
    }
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
        const { data: existingResidency } = await supabase
            .from("residencydetails")
            .select("residencyId")
            .eq("customerId", customerId)
            .eq("filingYearId", payload.filingYearId)
            .is("deletedAt", null)
            .single();

        let residencyId: number;

        if (existingResidency) {
            const { data, error } = await supabase
                .from("residencydetails")
                .update({
                    notes: payload.notes || null,
                    spouseResidency: payload.spouseResidency,
                    updatedAt: now,
                })
                .eq("residencyId", existingResidency.residencyId)
                .select()
                .single();

            if (error) throw error;
            residencyId = data.residencyId;
        } else {
            const { data, error } = await supabase
                .from("residencydetails")
                .insert([{
                    customerId,
                    filingYearId: payload.filingYearId,
                    fromDate: payload.migrations[0].fromDate,
                    toDate: payload.migrations[0].toDate,
                    state: payload.migrations[0].state,
                    country: payload.migrations[0].country,
                    spouseResidency: payload.spouseResidency,
                    notes: payload.notes || null,
                    createdAt: now,
                    updatedAt: now,
                    deletedAt: null
                }])
                .select()
                .single();

            if (error) throw error;
            residencyId = data.residencyId;
        }

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

export const deleteResidencyMigration = async (migrationId: number) => {
    const { error } = await supabase
        .from("residencymigrations")
        .delete()
        .eq("migrationId", migrationId);

    if (error) throw error;
};

