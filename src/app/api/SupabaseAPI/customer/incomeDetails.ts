import { supabase } from "../../../../../utils/supabase/client";

interface IncomeDetailsInput {
  createdAt: Date;
  filingYearId: number;
  hasWagesSalaryTipsTaxpayer: boolean;
  taxpayerEmployer?: string[] | null;
  hasWagesSalaryTipsSpouse: boolean;
  spouseEmployer?: string[] | null;
  earnedWagesOrSalary: boolean;
  receivedBusinessEntityIncome: boolean;
  receivedContractOrGigIncome: boolean;
  hadRentalPropertyIncomeOrLoss: boolean;
  receivedHsaOrMsaDistribution: boolean;
  receivedIraDistribution: boolean;
  soldInvestments?: boolean;
  receivedInterestIncome?: boolean;
  receivedDividendIncome?: boolean;
  receivedPriorYearStateRefund?: boolean;
  additionalIncome?: string | null;
}

export const getIncomeDetails = async (filingYearId?: number | null) => {
  if (!filingYearId) return null;

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

    const { data, error } = await supabase
      .from("incomedetails")
      .select("*")
      .eq("customerId", customerId)
      .eq("filingYearId", filingYearId)
      .maybeSingle();

    if (error) throw error;

    // return data || [];
    return data ?? null;
  } catch (error: any) {
    console.error("Error fetching income details:", error.message);
    throw error;
  }
};

export const upsertIncomeDetails = async (
  incomeDetailsArray: IncomeDetailsInput[]
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

    const dbIncomeDetails = incomeDetailsArray.map((income) => ({
      customerId,
      filingYearId: income.filingYearId,
      hasWagesSalaryTipsTaxpayer: income.hasWagesSalaryTipsTaxpayer ?? false,
      taxpayerEmployer: income.taxpayerEmployer ?? [],
      hasWagesSalaryTipsSpouse: income.hasWagesSalaryTipsSpouse ?? false,
      spouseEmployer: income.spouseEmployer ?? [],
      earnedWagesOrSalary: income.earnedWagesOrSalary ?? false,
      receivedBusinessEntityIncome: income.receivedBusinessEntityIncome ?? false,
      receivedContractOrGigIncome: income.receivedContractOrGigIncome ?? false,
      hadRentalPropertyIncomeOrLoss: income.hadRentalPropertyIncomeOrLoss ?? false,
      receivedHsaOrMsaDistribution: income.receivedHsaOrMsaDistribution ?? false,
      receivedIraDistribution: income.receivedIraDistribution ?? false,
      soldInvestments: income.soldInvestments ?? false,
      receivedInterestIncome: income.receivedInterestIncome ?? false,
      receivedDividendIncome: income.receivedDividendIncome ?? false,
      receivedPriorYearStateRefund: income.receivedPriorYearStateRefund ?? false,
      additionalIncome: income.additionalIncome ?? null,
      createdAt: income.createdAt ?? new Date(),
      updatedAt: now,
    }));

    const { data, error } = await supabase
      .from("incomedetails")
      .upsert(dbIncomeDetails, {
        onConflict: "customerId,filingYearId",
      })
      .select();

    return { success: true, data };
    // return data || [];
  } catch (error: any) {
    console.error("Error upserting income details:", error.message);
    throw error;
  }
};
