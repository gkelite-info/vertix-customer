import { supabase } from "../../../../../utils/supabase/client";

interface DeductionsInput {
    hasHealthCoverage: boolean;
    paidRent: boolean;
    rentState?: string | null;
    rentAmount?: number | null;
    incurredMedicalExpenses: boolean;
    ownHomeUSA: boolean;
    ownHomeAbroad: boolean;
    paidPropertyTax: boolean;
    propertyTaxName?: string | null;
    propertyTaxDescription?: string | null;
    propertyTaxAmount?: number | null;
    paidCashCharity: boolean;
    paidNonCashCharity: boolean;
    contributedIRA: boolean;
    contributedHSA: boolean;
    paidTuition: boolean;
    paidPriorStateTaxes: boolean;
    haveBadDebts: boolean;
    additionalExpenses?: string | null;
}

export const getDeductionDetails = async () => {
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

        const { data, error } = await supabase
            .from("deductiondetails")
            .select("*")
            .eq("customerId", customerId);
        if (error) throw error;
        return data || [];
    } catch (error: any) {
        console.error("Error fetching deduction details:", error.message);
        throw error;
    }
};

export const upsertDeductionDetails = async (
    deductionDetailsArray: DeductionsInput[]
) => {
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
        const now = new Date();

        const dbDeductionDetails = deductionDetailsArray.map((detail) => ({
            customerId,
            hasHealthCoverage: detail.hasHealthCoverage,
            paidRent: detail.paidRent,
            rentState: detail.rentState ?? null,
            rentAmount: detail.rentAmount ?? null,
            incurredMedicalExpenses: detail.incurredMedicalExpenses,
            ownHomeUSA: detail.ownHomeUSA,
            ownHomeAbroad: detail.ownHomeAbroad,
            paidPropertyTax: detail.paidPropertyTax,
            propertyTaxName: detail.propertyTaxName ?? null,
            propertyTaxDescription: detail.propertyTaxDescription ?? null,
            propertyTaxAmount: detail.propertyTaxAmount ?? null,
            paidCashCharity: detail.paidCashCharity,
            paidNonCashCharity: detail.paidNonCashCharity,
            contributedIRA: detail.contributedIRA,
            contributedHSA: detail.contributedHSA,
            paidTuition: detail.paidTuition,
            paidPriorStateTaxes: detail.paidPriorStateTaxes,
            haveBadDebts: detail.haveBadDebts,
            additionalExpenses: detail.additionalExpenses ?? null,
            createdAt: now,
            updatedAt: now,
        }));

        const { data, error } = await supabase
            .from("deductiondetails")
            .upsert(dbDeductionDetails)
            .select();

        if (error) throw error;
        return data || [];
    } catch (error: any) {
        console.error("Error upserting deduction details:", error.message);
        throw error;
    }
};
