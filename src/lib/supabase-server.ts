// // import { cookies } from 'next/headers'
// // import { createServerClient } from '@supabase/ssr'

// // export function createSupabaseServer() {
// //   const cookieStore = cookies()
// //   return createServerClient(
// //     process.env.NEXT_PUBLIC_SUPABASE_URL!,
// //     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
// //     { cookies: { get: (name) => cookieStore.get(name)?.value } }
// //   )
// // }
// // export const db = createSupabaseServer()
// import { createClient, SupabaseClient } from '@supabase/supabase-js';

// // This helper is server-only. Never import from client components.
// const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
// const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
// const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!;

// /**
//  * Create a Supabase client for server routes.
//  * @param useServiceRole when true, uses service key (server-only, trusted code)
//  */
// export function supabaseServer(useServiceRole: boolean = false): SupabaseClient {
//   if (!SUPABASE_URL) throw new Error('Missing NEXT_PUBLIC_SUPABASE_URL');

//   if (useServiceRole) {
//     if (!SUPABASE_SERVICE_ROLE_KEY) throw new Error('Missing SUPABASE_SERVICE_ROLE_KEY');
//     return createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
//       auth: { persistSession: false },
//     });
//   }

//   if (!SUPABASE_ANON_KEY) throw new Error('Missing NEXT_PUBLIC_SUPABASE_ANON_KEY');
//   return createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
//     auth: { persistSession: false },
//   });
// }
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  throw new Error('Missing Supabase URL or Service Role Key');
}

// Create a single Supabase client for server-side operations
// This uses the SERVICE_ROLE_KEY to bypass RLS, which is what your code was doing.
export const supabase = createClient(supabaseUrl, supabaseServiceKey);

// Provide an alias for files that import `db`
export const db = supabase;