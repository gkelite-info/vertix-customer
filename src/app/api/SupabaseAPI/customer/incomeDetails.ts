import { supabase } from "../../../../../utils/supabase/client";

interface IncomeDetailsInput {
  createdAt: Date;
  filingYearId: number;
  hasWagesSalaryTipsTaxpayer: boolean;
  taxpayerEmployer?: string[] | null;
  hasWagesSalaryTipsSpouse: boolean;
  spouseEmployer?: string[] | null;
  hasBusinessIncome: boolean;
  hasSelfEmploymentIncome: boolean;
  hasRentalIncome: boolean;
  hasHsaDistribution: boolean;
  hasDividendIncome: boolean;
  hasStateTaxRefund: boolean;
  w2UploadPath?: string | null;
}

export const getIncomeDetails = async () => {
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
      .eq("customerId", customerId);

    if (error) throw error;

    return data || [];
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
      hasWagesSalaryTipsTaxpayer: income.hasWagesSalaryTipsTaxpayer,
      taxpayerEmployer: income.taxpayerEmployer ?? [],
      hasWagesSalaryTipsSpouse: income.hasWagesSalaryTipsSpouse,
      spouseEmployer: income.spouseEmployer ?? [],
      hasBusinessIncome: income.hasBusinessIncome,
      hasSelfEmploymentIncome: income.hasSelfEmploymentIncome,
      hasRentalIncome: income.hasRentalIncome,
      hasHsaDistribution: income.hasHsaDistribution,
      hasDividendIncome: income.hasDividendIncome,
      hasStateTaxRefund: income.hasStateTaxRefund,
      w2UploadPath: income.w2UploadPath ?? null,
      createdAt: income.createdAt ?? new Date(),
      updatedAt: now,
    }));

    const { data, error } = await supabase
      .from("incomedetails")
      .upsert(dbIncomeDetails, {
        onConflict: "filingYearId"
      })
      .select();

    if (error) throw error;

    return data || [];
  } catch (error: any) {
    console.error("Error upserting income details:", error.message);
    throw error;
  }
};
