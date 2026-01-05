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
      .eq("customerId", customerId)
      .order("createdAt", { ascending: true })  
      .order("dependentId", { ascending: true });

    if (error) throw error;
    return {
      dependents: data ?? [],
      latestNote: data?.[data.length - 1]?.notes ?? "",
    };
  } catch (error: any) {
    console.error("Error fetching dependents:", error.message);
    throw error;
  }
};

export const deleteDependentById = async (dependentId: number) => {
  try {
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();
    if (authError || !user) throw new Error("Not authenticated");

    const { error } = await supabase
      .from("dependents")
      .delete()
      .eq("dependentId", dependentId);

    if (error) throw error;

    return true;
  } catch (error) {
    console.error("Delete dependent failed:", error);
    throw error;
  }
};

export const upsertDependents = async (
  dependents: Dependent[],
  deletedIds: number[]
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

    if (deletedIds.length > 0) {
      const { error: deleteError } = await supabase
        .from("dependents")
        .delete()
        .in("dependentId", deletedIds);

      if (deleteError) throw deleteError;
    }

    const now = new Date().toISOString();

    const newDependents = dependents.filter(dep => !dep.dependentId);
    const existingDependents = dependents.filter(dep => dep.dependentId && typeof dep.dependentId === "number");

    let allResults: any[] = [];

    if (newDependents.length > 0) {
      const newDbDependents = newDependents.map(dep => ({
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
        notes: dep.notes || null,
      }));

      const { data: insertData, error: insertError } = await supabase
        .from("dependents")
        .insert(newDbDependents)
        .select();

      if (insertError) throw insertError;
      allResults = [...allResults, ...(insertData || [])];
    }

    if (existingDependents.length > 0) {
      const updateDbDependents = existingDependents.map((dep) => ({
        dependentId: dep.dependentId,
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
        notes: dep.notes || null,
        updatedAt: now,
      }));

      const { data: updateData, error: updateError } = await supabase
        .from("dependents")
        .upsert(updateDbDependents, {
          onConflict: "dependentId",
        })
        .select();

      if (updateError) throw updateError;
      allResults = [...allResults, ...(updateData || [])];
    }

    return allResults;
  } catch (error: any) {
    console.error("Error upserting dependents:", error.message);
    throw error;
  }
};