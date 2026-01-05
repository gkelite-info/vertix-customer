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

        // ✅ Fetch residencydetails
        const { data: residency, error: residencyError } = await supabase
            .from("residencydetails")
            .select("*")
            .eq("customerId", customerId)
            .eq("filingYearId", filingYearId)
            .is("deletedAt", null)
            .single();

        // ✅ No data yet → safe empty state
        if (residencyError?.code === "PGRST116") {
            return null;
        }
        if (residencyError) throw residencyError;

        // ✅ Fetch migrations
        const { data: migrations, error: migrationError } = await supabase
            .from("residencymigrations")
            .select("*")
            .eq("residencyId", residency.residencyId)
            .order("fromDate", { ascending: true });

        if (migrationError) throw migrationError;

        // ✅ Split taxpayer & spouse migrations
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
        // if (!first.fromDate || !first.toDate) {
        //     throw new Error("Residency dates are required");
        // }
        const { data: residencyRow, error: residencyError } = await supabase
            .from("residencydetails")
            .insert([
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
            ])
            .select()
            .single();
        if (residencyError) {
            if (residencyError.code === "23505") {
                return { alreadyExists: true };
            }
            throw residencyError;
        }

        // return { success: true, residencyId: residencyRow.residencyId };
        // if (residencyError) throw residencyError;

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
