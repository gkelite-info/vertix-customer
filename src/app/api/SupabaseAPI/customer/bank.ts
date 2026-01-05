import { supabase } from "../../../../../utils/supabase/client";

export interface BankInformationInput {
  filingYearId: number;
  belongsTo: string;
  holderName: string;
  bankName: string;
  accountNumber: string;
  routingNumber: string;
  accountType: "checking" | "savings" | "others";
}

export const getBankInformation = async (filingYearId: number) => {
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
      .from("bank_information")
      .select("*")
      .eq("customerId", customerId)
      .eq("filingYearId", filingYearId)

    if (error && error.code !== "PGRST116") throw error;
    return data || null;
  } catch (error: any) {
    console.error("Error fetching bank information:", error.message);
    throw error;
  }
};

export const upsertBankInformation = async (bankData: BankInformationInput) => {
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

    const payload = {
      customerId,
      filingYearId: bankData.filingYearId,
      belongsTo: bankData.belongsTo,
      holderName: bankData.holderName,
      bankName: bankData.bankName,
      accountNumber: bankData.accountNumber,
      routingNumber: bankData.routingNumber,
      accountType: bankData.accountType,
      updatedBy: customerId,
      updatedAt: new Date().toISOString(),
    };

    const { data, error } = await supabase
      .from("bank_information")
      .upsert(payload, { onConflict: "customerId,filingYearId,belongsTo" })
      .select()
      .single();

    if (error) throw error;
    return data;
  } catch (error: any) {
    console.error("Error inserting/updating bank info:", error.message);
    throw error;
  }
};

export const deleteBankInformation = async (filingYearId: number, belongsTo: string) => {
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

    const { error } = await supabase
      .from("bank_information")
      .delete()
      .eq("customerId", customerId)
      .eq("filingYearId", filingYearId)
      .eq("belongsTo", belongsTo);

    if (error) throw error;
    return { message: "Bank information deleted successfully" };
  } catch (error: any) {
    console.error("Error deleting bank information:", error.message);
    throw error;
  }
};
