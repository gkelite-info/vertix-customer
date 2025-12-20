import { supabase } from "../../../../../utils/supabase/client";

type UpsertResult =
    | { success: true; data: AddressPayload }
    | { alreadyExists: true };

export interface AddressPayload {
    customerId: number;

    street: string;
    city: string;
    state: string;
    zipcode: string;
    note?: string | null;

    createdAt?: string;
    updatedAt?: string;
}

export const getAddress = async (
    customerId: number
): Promise<AddressPayload | null> => {
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
            .from("addresses")
            .select("*")
            .eq("customerId", customer.customerId)
            .is("deletedAt", null)
            .single();

        if (error && error.code !== "PGRST116") throw error;

        return data;
    } catch (error: any) {
        console.error("Error getting address:", error.message);
        throw error;
    }
};


export const upsertAddress = async (
    payload: AddressPayload
): Promise<UpsertResult> => {
    try {
        const { data, error } = await supabase
            .from("addresses")
            .insert(
                [
                    {
                        ...payload,
                        updatedAt: new Date().toISOString(),
                    },
                ],
            )
            .select()
            .single();

        if (error) {
            if (error.code === "23505") {
                return { alreadyExists: true };
            }
            throw error;
        }

        return { success: true, data };
    } catch (error: any) {
        console.error("Error saving address:", error.message);
        throw error;
    }
};
