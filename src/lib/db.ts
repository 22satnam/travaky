// src/lib/db.ts
import { createClient } from '@supabase/supabase-js';

const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const key = process.env.SUPABASE_SERVICE_ROLE!; // server-side only

export const supabase = createClient(url, key, { auth: { persistSession: false } });
