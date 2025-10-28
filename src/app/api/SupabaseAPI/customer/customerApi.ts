/* eslint-disable @typescript-eslint/no-explicit-any */
import { supabase } from "../../../../../utils/supabase/client"

export const getCustomer = async () => {
  try {
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()
    if (authError || !user) throw new Error("Not authenticated")
    const customerId = user.id
    const { data, error } = await supabase
      .from("vertixcustomers")
      .select("*")
      .eq("auth_id", customerId)
      .single()
    if (error) throw error
    return data
  } catch (error: any) {
    console.error("Error fetching customer:", error.message)
    throw error
  }
}

export const insertCustomer = async (customerData: {
  auth_id: string
  firstname: string
  lastname: string
  phone: string
  email: string
  timezone?: string | null
}) => {
  try {
    const now = new Date()

    const { error } = await supabase.from("vertixcustomers").insert([
      {
        auth_id: customerData.auth_id,
        firstname: customerData.firstname,
        lastname: customerData.lastname,
        phone: customerData.phone,
        email: customerData.email,
        timezone: customerData.timezone ?? null,
        createdAt: now,
        updatedAt: now,
      },
    ])

    if (error) throw error
    return true
  } catch (error: any) {
    console.error("Error inserting customer:", error.message)
    throw error
  }
}
