import { supabase } from "../../../../../utils/supabase/client";
import { Dependent } from "./types";

export const getDependents = async () => {
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
      .from("dependents")
      .select("*")
      .eq("customerId", customerId);

    if (error) throw error;
    return data || [];
  } catch (error: any) {
    console.error("Error fetching dependents:", error.message);
    throw error;
  }
};

export const upsertDependents = async (
  dependents: Omit<
    Dependent,
    | "dependentId"
  >[]
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

    const dbDependents = dependents.map((dep) => ({
      customerId,
      firstName: dep.firstName,
      middleName: dep.middleName || null,
      lastName: dep.lastName,
      dob: dep.dob ? new Date(dep.dob) : null,
      months: dep.months ? parseInt(dep.months, 10) : null,
      depOneSSN: dep.depOneSSN || null,
      firstEntryDate: dep.date ? new Date(dep.date) : null,
      isUSCitizen: dep.isUSCitizen,
      idType: dep.idType,
      hasChildcare: dep.hasChildcare,
      notes: dep.notes,
      createdAt: now,
      updatedAt: now,
    }));

    const { data, error } = await supabase
      .from("dependents")
      .upsert(dbDependents)
      .select();

    if (error) throw error;
    return data || [];
  } catch (error: any) {
    console.error("Error upserting dependents:", error.message);
    throw error;
  }
};
