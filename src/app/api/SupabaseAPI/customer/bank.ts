import { supabase } from "../../../../../utils/supabase/client";

export const getBankInformation = async () => {
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
      .single();

    if (error && error.code !== "PGRST116") throw error; 
    return data || null;
  } catch (error: any) {
    console.error("Error fetching bank information:", error.message);
    throw error;
  }
};

export const postBankInformation = async (bankData: {
  belongsTo?: string;
  holderName: string;
  bankName: string;
  accountNumber: string;
  routingNumber?: string;
  accountType: string;
}) => {
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
      .upsert([
        {
          customerId,
          ...bankData,
          updatedAt: new Date(),
        },
      ])
      .select();

    if (error) throw error;
    return data ? data[0] : null;
  } catch (error: any) {
    console.error("Error inserting/updating bank info:", error.message);
    throw error;
  }
};

export const deleteBankInformation = async () => {
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
      .eq("customerId", customerId);

    if (error) throw error;
    return { message: "Bank information deleted successfully" };
  } catch (error: any) {
    console.error("Error deleting bank information:", error.message);
    throw error;
  }
};