import { supabase } from "../../../../../utils/supabase/client";

interface ReferralInput {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  alternatePhone?: string | null;
  timezone: string;
}

export const upsertReferral = async (referral: ReferralInput) => {
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

    const referralData = {
      customerId,
      firstName: referral.firstName,
      lastName: referral.lastName,
      email: referral.email,
      phone: referral.phone,
      alternatePhone: referral.alternatePhone ?? null,
      timezone: referral.timezone,
      createdAt: now,
      updatedAt: now,
    };

    const { data, error } = await supabase
      .from("referrals")
      .upsert(referralData, { onConflict: "referId" })
      .select();

    if (error) throw error;
    return data;
  } catch (error: any) {
    console.error("Error upserting referral:", error.message);
    throw error;
  }
};

export const getReferrals = async () => {
  try {
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    if (authError || !user) throw new Error("Not authenticated");

    const { data: customer, error: customerError } = await supabase
      .from("vertixcustomers")
      .select("customerId")
      .eq("auth_id", user.id)
      .single();
    if (customerError || !customer) throw new Error("Customer not found");

    const { data, error } = await supabase
      .from("referrals")
      .select("*")
      .eq("customerId", customer.customerId)
      .order("createdAt", { ascending: false });

    if (error) throw error;

    return data;
  } catch (error: any) {
    console.error("Error fetching referrals:", error.message);
    throw error;
  }
};