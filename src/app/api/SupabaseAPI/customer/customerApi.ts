import { supabase } from "../../../../../utils/supabase/client"


export const getCustomer = async () => {
  try {
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();
    if (authError || !user) throw new Error("Not authenticated");
    const customerId = user.id;
    const { data, error } = await supabase
      .from("vertixcustomers")
      .select("*")
      .eq("auth_id", customerId)
      .single();
    if (error) throw error;
    return data;
  } catch (error: any) {
    console.error("Error fetching customer:", error.message);
    throw error;
  }
};


