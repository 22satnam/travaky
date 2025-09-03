// // src/lib/db.ts
// import { createClient } from '@supabase/supabase-js';

// const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
// const key = process.env.SUPABASE_SERVICE_ROLE!; // server-side only

// export const supabase = createClient(url, key, { auth: { persistSession: false } });
// Server + client Supabase helpers.
// Provides: db (server-side admin client), supabase (client), supabaseAdmin (named)

import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL  = process.env.NEXT_PUBLIC_SUPABASE_URL!
const ANON_KEY      = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const SERVICE_KEY   = process.env.SUPABASE_SERVICE_ROLE_KEY!

// Browser-safe client (anon)
export const supabase = createClient(SUPABASE_URL, ANON_KEY, {
  auth: { persistSession: false, autoRefreshToken: false },
})

// Server-only admin client (bypasses RLS). Use ONLY in server routes.
export const supabaseAdmin = createClient(SUPABASE_URL, SERVICE_KEY, {
  auth: { persistSession: false, autoRefreshToken: false },
})

// Alias for existing code that expects `db`
export const db = supabaseAdmin
