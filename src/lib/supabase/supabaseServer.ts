// // import { createClient } from "@supabase/supabase-js";

// // export const supabase = createClient(
// //   process.env.NEXT_PUBLIC_SUPABASE_URL!,
// //   process.env.SUPABASE_SERVICE_ROLE_KEY!, // full access on server
// //   { auth: { persistSession: false } }
// // );
// // src/lib/supabase-server.ts  (SERVER-ONLY)
// import { createClient } from '@supabase/supabase-js';
// import { createServerClient } from '@supabase/ssr';
// import { cookies } from 'next/headers';

// const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
// const SERVICE_ROLE = process.env.SUPABASE_SERVICE_ROLE_KEY!;

// if (!SUPABASE_URL || !SERVICE_ROLE) {
//   throw new Error('Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY');
// }
// const cookieStore = cookies();
// /** Service-role client for server routes (NEVER import in client components). */
// export const supabase = createServerClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//   process.env.NEXT_PUBLIC_SUPABASE_SERVICE_KEY!,
//   { cookies: { getAll: () => cookieStore.getAll() } }
// );

// /** Some files import `db` – provide alias to avoid refactors right now. */
// export const db = supabase;

// // src/lib/supabase-server.ts (SERVER-ONLY)
// import { createServerClient, type CookieOptions } from '@supabase/ssr'
// import { cookies } from 'next/headers'

// /**
//  * Creates a Supabase client for use in Server Components, Server Actions, and Route Handlers.
//  * This ensures that the user's session is correctly passed along.
//  *
//  * It is a factory function that should be called within the request lifecycle.
//  */
// export function createSupabaseServerClient() {
//   const cookieStore = cookies()

//   return createServerClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL!,
//     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, // Use the anon key for browser-like context
//     {
//       cookies: {
//         get(name: string) {
//           return cookieStore.get(name)?.value
//         },
//         set(name: string, value: string, options: CookieOptions) {
//           cookieStore.set({ name, value, ...options })
//         },
//         remove(name: string, options: CookieOptions) {
//           cookieStore.delete({ name, ...options })
//         },
//       },
//     }
//   )
// }

// /**
//  * Creates a Supabase client with SERVICE_ROLE privileges.
//  * This should ONLY be used for operations that require bypassing RLS,
//  * like admin tasks or backend processes.
//  *
//  * Be very careful where you use this.
//  */
// import { createClient } from '@supabase/supabase-js'
// export const supabaseAdmin = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//   process.env.SUPABASE_SERVICE_ROLE_KEY!
// )


import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  throw new Error('Missing Supabase URL or Service Role Key in .env.local');
}

// Create and export a single Supabase client for server-side use.
export const supabase = createClient(supabaseUrl, supabaseServiceKey);

// Also export as `db` for any files that might use that alias.
export const db = supabase;