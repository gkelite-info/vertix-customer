// src/utils/supabase/client.ts

import { createBrowserClient } from '@supabase/ssr'

// These variables must be set in your .env file
// NEXT_PUBLIC_SUPABASE_URL
// NEXT_PUBLIC_SUPABASE_ANON_KEY (this is the public key)

export const supabase = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)