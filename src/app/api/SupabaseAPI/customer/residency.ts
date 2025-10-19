import { supabase } from "../../../../../utils/supabase/client";

export const upsertResidencyDetails = async (residencyDetails: {
    fromDate: string;
    toDate: string;
    state: string;
    country: string;
    notes?: string;
    residencyType?: string;
    spouseSameResidency?: boolean;
    line1?: string;
    line2?: string | null;
    city?: string | null;
    zip?: string | null;
}) => {
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

        const now = new Date();

        const dbResidencyDetails = {
            customerId,
            residencyType: residencyDetails.residencyType || "home",
            fromDate: residencyDetails.fromDate ? new Date(residencyDetails.fromDate).toISOString().split("T")[0] : null,
            toDate: residencyDetails.toDate ? new Date(residencyDetails.toDate).toISOString().split("T")[0] : null,
            state: residencyDetails.state,
            country: residencyDetails.country,
            notes: residencyDetails.notes || null,
            spouse_same_residency: residencyDetails.spouseSameResidency || false,
            line1: residencyDetails.line1 || "",
            line2: residencyDetails.line2 || null,
            city: residencyDetails.city || null,
            zip: residencyDetails.zip || null,
            createdAt: now.toISOString(),
            updatedAt: now.toISOString(),
            deletedAt: null,
        };

        const { data, error } = await supabase
            .from("residencydetails")
            .upsert([dbResidencyDetails])
            .select();

        if (error) throw error;
        return data || [];
    } catch (error: any) {
        console.error("Error upserting residency details:", error.message);
        throw error;
    }
};
