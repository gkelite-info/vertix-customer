import { supabase } from "../../../../../utils/supabase/client";

/* ============================================================
   1️⃣ Check if email exists in vertixcustomers table
   ============================================================ */
export const checkCustomerEmailExists = async (email: string) => {
  try {
    const { data, error } = await supabase
      .from("vertixcustomers")
      .select("email")
      .eq("email", email)
      .eq("is_deleted", false)
      .single();

    // ❌ No record found
    if (error && error.code === "PGRST116") {
      return false;
    }

    if (error) throw error;

    return true;
  } catch (error: any) {
    console.error("Email existence check failed:", error.message);
    throw error;
  }
};

/* ============================================================
   2️⃣ Send password reset link (EMAIL)
   ============================================================ */
export const sendPasswordResetLink = async (email: string) => {
  try {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `https://www.vertixtax.com/new_password`,
    });

    if (error) throw error;
    return true;
  } catch (error: any) {
    console.error("Send reset link failed:", error.message);
    throw error;
  }
};

/* ============================================================
   3️⃣ Update password (called on reset page)
   ============================================================ */
export const updatePassword = async (newPassword: string) => {
  try {
    const { error } = await supabase.auth.updateUser({
      password: newPassword,
    });

    if (error) throw error;
    return true;
  } catch (error: any) {
    console.error("Password update failed:", error.message);
    throw error;
  }
};

/* ============================================================
   4️⃣ Validate reset session (route guard)
   ============================================================ */
export const getResetSession = async () => {
  try {
    const {
      data: { session },
      error,
    } = await supabase.auth.getSession();

    if (error) throw error;
    return session;
  } catch (error: any) {
    console.error("Session fetch failed:", error.message);
    return null;
  }
};

/* ============================================================
   5️⃣ Logout after password reset (security)
   ============================================================ */
export const logoutAfterReset = async () => {
  await supabase.auth.signOut();
};
