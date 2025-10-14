const env = "dev";

export const origin = env == "dev" ? process.env.NEXT_PUBLIC_SUPABASE_URL : "http://localhost:5000";