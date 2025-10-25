import { supabase } from "../../../../../utils/supabase/client";

export interface UserDocument {
  documentId?: number;
  customerId: number;
  doc_type: string;
  file_path: string;
  public_url: string;
  description?: string | null;
  createdAt?: string;
  updatedAt?: string;
}


export const getUserDocuments = async (): Promise<UserDocument[]> => {
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
      .from("userdocuments")
      .select("*")
      .eq("customerId", customerId)
      .order("createdAt", { ascending: false });

    if (error) throw error;

    return data || [];
  } catch (error: any) {
    console.error("Error fetching user documents:", error.message);
    throw error;
  }
};


export const uploadUserDocument = async (
  file: File,
  doc_type: string,
  description: string | null = null
): Promise<UserDocument | null> => {
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

    const sanitizedFileName = file.name.replace(/\s+/g, "_");
    const filePath = `${customerId}/${doc_type}/${sanitizedFileName}`;

    const { error: uploadError } = await supabase.storage
      .from("user-uploads")
      .upload(filePath, file, { upsert: true });

    if (uploadError) throw uploadError;

    const { data: publicData } = supabase.storage
      .from("user-uploads")
      .getPublicUrl(filePath);

    const publicUrl = publicData.publicUrl;

    const now = new Date().toISOString();

    const { data: documentData, error: insertError } = await supabase
      .from("userdocuments")
      .insert([
        {
          customerId,
          doc_type,
          file_path: filePath,
          public_url: publicUrl,
          description,
          createdAt: now,
          updatedAt: now,
        },
      ])
      .select()
      .single();

    if (insertError) throw insertError;

    return documentData;
  } catch (error: any) {
    console.error("Error uploading document:", error.message);
    throw error;
  }
};

export const getDocumentDownloadUrl = async (filePath: string, expiresIn = 60) => {
  try {
    const { data, error } = await supabase.storage
      .from("user-uploads")
      .createSignedUrl(filePath, expiresIn);

    if (error || !data?.signedUrl) throw new Error(error?.message || "Failed to create signed URL");

    return data.signedUrl;
  } catch (err: any) {
    console.error("Error generating signed URL:", err.message);
    throw err;
  }
};

export const deleteUserDocument = async (file_path: string): Promise<boolean> => {
  try {
    const { error: storageError } = await supabase.storage
      .from("user-uploads")
      .remove([file_path]);

    if (storageError) throw new Error(storageError.message);

    const { error: dbError } = await supabase
      .from("userdocuments")
      .delete()
      .eq("file_path", file_path);

    if (dbError) throw new Error(dbError.message);

    return true;
  } catch (error: any) {
    console.error("Delete failed:", error.message);
    throw error;
  }
};
