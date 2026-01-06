import { supabase } from "../../../../../utils/supabase/client";

interface SpouseIncomeDetailsInput {
    filingYearId: number;
    spouseEarnedWagesOrSalary?: boolean;
    spouseReceivedBusinessEntityIncome?: boolean;
    spouseReceivedContractOrGigIncome?: boolean;
    spouseHadRentalPropertyIncomeOrLoss?: boolean;
    spouseReceivedHsaOrMsaDistribution?: boolean;
    spouseReceivedIraDistribution?: boolean;
    spouseSoldInvestments?: boolean;
    spouseReceivedInterestIncome?: boolean;
    spouseReceivedDividendIncome?: boolean;
    spouseReceivedPriorYearStateRefund?: boolean;
}

export const getSpouseIncomeDetails = async (filingYearId: number) => {
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

        const { data, error } = await supabase
            .from("spouse_income_details")
            .select("*")
            .eq("customerId", customer.customerId)
            .eq("filingYearId", filingYearId)
            .maybeSingle();

        if (error) throw error;

        return data ?? null;
    } catch (error: any) {
        console.error("Error fetching spouse income details:", error.message);
        throw error;
    }
};

export const upsertSpouseIncomeDetails = async (
    spouseIncomeDetailsArray: SpouseIncomeDetailsInput[]
) => {
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

        const dbPayload = spouseIncomeDetailsArray.map((spouse) => ({
            customerId,
            filingYearId: spouse.filingYearId,

            spouseEarnedWagesOrSalary: spouse.spouseEarnedWagesOrSalary ?? false,
            spouseReceivedBusinessEntityIncome:
                spouse.spouseReceivedBusinessEntityIncome ?? false,
            spouseReceivedContractOrGigIncome:
                spouse.spouseReceivedContractOrGigIncome ?? false,
            spouseHadRentalPropertyIncomeOrLoss:
                spouse.spouseHadRentalPropertyIncomeOrLoss ?? false,
            spouseReceivedHsaOrMsaDistribution:
                spouse.spouseReceivedHsaOrMsaDistribution ?? false,
            spouseReceivedIraDistribution:
                spouse.spouseReceivedIraDistribution ?? false,
            spouseSoldInvestments: spouse.spouseSoldInvestments ?? false,
            spouseReceivedInterestIncome:
                spouse.spouseReceivedInterestIncome ?? false,
            spouseReceivedDividendIncome:
                spouse.spouseReceivedDividendIncome ?? false,
            spouseReceivedPriorYearStateRefund:
                spouse.spouseReceivedPriorYearStateRefund ?? false,
            updatedAt: now
        }));

        const { data, error } = await supabase
            .from("spouse_income_details")
            .upsert(dbPayload, {
                onConflict: "customerId,filingYearId",
            })
            .select();

        if (error) throw error;

        return { success: true, data };
    } catch (error: any) {
        console.error("Error upserting spouse income details:", error.message);
        throw error;
    }
};
