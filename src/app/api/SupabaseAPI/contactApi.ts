import { supabase } from "../../../../utils/supabase/client";

export const insertContact = async (formData: {
    name: string;
    email: string;
    subject: string;
    message: string;
}) => {
    try {
        const { error } = await supabase.from("contacts").insert({
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
            createdAt: new Date(),
            updatedAt: new Date(),
        });

        if (error) throw error;
        return { success: true };
    } catch (error: any) {
        console.error("Insert Contact Error:", error);
        return { success: false, error: error.message };
    }
};
