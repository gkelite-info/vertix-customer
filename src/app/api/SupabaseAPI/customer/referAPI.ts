import { supabase } from "../../../../../utils/supabase/client";

interface ReferralInput {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  alternatePhone?: string | null;
  timezone: string;
  filingYearId: number;
}

export const upsertReferral = async (referral: ReferralInput) => {
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

    const { data: existingCustomer, error: emailCheckError } = await supabase
      .from("vertixcustomers")
      .select("customerId")
      .eq("email", referral.email)
      .maybeSingle();

    if (emailCheckError) throw emailCheckError;

    if (existingCustomer) {
      throw new Error("User already exists with this email");
    }

    const customerId = customer.customerId;
    const now = new Date();

    const referralData = {
      customerId,
      filingYearId: referral.filingYearId,
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

export const getReferrals = async (filingYearId: number) => {
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
      .from("referrals")
      .select("*")
      .eq("customerId", customer.customerId)
      .eq("filingYearId", filingYearId)
      .order("createdAt", { ascending: false });

    if (error) throw error;

    return data;
  } catch (error: any) {
    console.error("Error fetching referrals:", error.message);
    throw error;
  }
};

export const createReferral = async (payload: {
  customerId: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  alternatePhone?: string | null;
  timezone: string;
}) => {

  const { data: client, error: clientError } = await supabase
    .from("vertixcustomers")
    .select("customerId")
    .eq("customerId", payload.customerId)
    .single();

  if (clientError || !client) {
    throw new Error("Client not found. Please check the Client ID.");
  }

  const { error } = await supabase.from("referrals").insert({
    customerId: payload.customerId,
    firstName: payload.firstName,
    lastName: payload.lastName,
    email: payload.email,
    phone: payload.phone,
    alternatePhone: payload.alternatePhone ?? null,
    timezone: payload.timezone,
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  if (error) throw error;
};

export const markReferralAsDeletedByEmail = async (email: string) => {
  const { error } = await supabase
    .from("referrals")
    .update({
      is_deleted: true,
      updatedAt: new Date(),
    })
    .eq("email", email)
    .eq("is_deleted", false);

  if (error) throw error;
};
