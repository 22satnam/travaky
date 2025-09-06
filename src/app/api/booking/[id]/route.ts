import { supabase } from '@/lib/supabase/client';
// // import { cookies } from 'next/headers'
// // import { NextRequest, NextResponse } from 'next/server'
// // import { verify } from 'jsonwebtoken'
// // import { supabaseServer } from '@/lib/supabase/server'

// // export async function GET(req: NextRequest, { params }: { params:{ id:string } }) {
// //   try {
// //     const token = (await cookies()).get('token')?.value
// //     if (!token) throw new Error('Not authenticated')

// //     const { id:userId, role } = verify(token, process.env.JWT_SECRET!) as { id:number; role?:string }
// //     const supabase = supabaseServer(role === 'admin')

// //     const query = supabase
// //       .from('visa_applications')
// //       .select('*, invoices(*)')
// //       .eq('id', params.id)
// //       .single()

// //     if (role !== 'admin') query.eq('user_id', userId)

// //     const { data, error } = await query
// //     if (error || !data) throw error || new Error('Not found')

// //     return NextResponse.json({ data })
// //   } catch (err:any) {
// //     return NextResponse.json({ error: err.message }, { status: 401 })
// //   }
// // }
// import { cookies } from 'next/headers';
// import { NextResponse } from 'next/server';
// import { verify } from 'jsonwebtoken';
// import { supabase } from '@/lib/supabase-server';

// export const runtime = 'nodejs';

// type JwtPayload = { id: number | string; role?: string };

// export async function GET(req: Request, ctx: any) {
//   try {
//     // auth
//     const token = cookies().get('token')?.value;
//     if (!token) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

//     const decoded = verify(token, process.env.JWT_SECRET!) as JwtPayload;
//     const userId = Number(decoded.id);
//     const role = decoded.role;
//     if (!userId || Number.isNaN(userId)) {
//       return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
//     }

//     // params (loosened typing to dodge Next 15 param check)
//     const { id } = (ctx?.params ?? {}) as { id?: string };
//     const bookingId = Number(id);
//     if (!id || Number.isNaN(bookingId)) {
//       return NextResponse.json({ error: 'Invalid booking id' }, { status: 400 });
//     }

//     // query
//     let query = supabase
//       .from('visa_applications')
//       .select(`
//         *,
//         invoices(*),
//         flight_options(*),
//         hotel_options(*),
//         user_documents(*)
//       `)
//       .eq('id', bookingId);

//     if (role !== 'admin') query = query.eq('user_id', userId);

//     const { data, error } = await query.single();
//     if (error) {
//       if ((error as any).code === 'PGRST116' || /No rows/i.test(error.message || '')) {
//         return NextResponse.json({ error: 'Not found' }, { status: 404 });
//       }
//       console.error('Supabase error:', error);
//       return NextResponse.json({ error: 'Query failed' }, { status: 500 });
//     }

//     return NextResponse.json({ data }, { status: 200 });
//   } catch (err: any) {
//     console.error('booking GET error:', err);
//     const msg = String(err?.message ?? 'Unexpected error');
//     const status = /unauthor/i.test(msg) ? 401 : 500;
//     return NextResponse.json({ error: msg }, { status });
//   }
// }

// import { NextRequest, NextResponse } from 'next/server';
// import { cookies } from 'next/headers';
// import { verify } from 'jsonwebtoken';
// // Import the single supabase instance from our simplified file
// import { supabase } from '@/lib/supabase-server';

// type JwtPayload = { id: number | string; role?: string };

// export async function GET(
//   req: NextRequest,
//   { params }: { params: { id: string } }
// ) {
//   try {
//     const token = cookies().get('token')?.value;
//     if (!token) {
//       return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
//     }

//     const decoded = verify(token, process.env.JWT_SECRET!) as JwtPayload;
//     const userId = Number(decoded.id);
//     const role = decoded.role;
//     if (!userId || isNaN(userId)) {
//       return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
//     }

//     const { id } = params;
//     const bookingId = Number(id);
//     if (isNaN(bookingId)) {
//       return NextResponse.json({ error: 'Invalid booking id' }, { status: 400 });
//     }

//     // We no longer create a client, we just use the imported one.
//     let query = supabase
//       .from('visa_applications')
//       .select('*, invoices(*), flight_options(*), hotel_options(*), user_documents(*)')
//       .eq('id', bookingId);

//     if (role !== 'admin') {
//       query = query.eq('user_id', userId);
//     }

//     const { data, error } = await query.single();

//     if (error) {
//       if (error.code === 'PGRST116') { // Not found
//         return NextResponse.json({ error: 'Not found' }, { status: 404 });
//       }
//       throw error; // Let the catch block handle other DB errors
//     }

//     return NextResponse.json({ data });

//   } catch (err: any) {
//     console.error('API Error in /api/booking/[id]:', err);
//     const message = err.message || 'An unexpected error occurred.';
//     const status = /invalid signature|jwt/i.test(message) ? 401 : 500;
//     return NextResponse.json({ error: message }, { status });
//   }
// }

import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { verify } from 'jsonwebtoken';

// ✅ Import under a different local name to avoid any shadowing
import { supabase as db } from '@/lib/supabase-server';

export const runtime = 'nodejs';

type JwtPayload = { id: number | string; role?: string };

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // --- auth ---
    const token = (await cookies()).get('token')?.value;
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const decoded = verify(token, process.env.JWT_SECRET!) as JwtPayload;
    const userId = Number(decoded.id);
    const role = decoded.role;
    if (!userId || Number.isNaN(userId)) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
    }

    // --- params ---
    const resolvedParams = await params;
    const bookingId = Number(resolvedParams.id);
    if (Number.isNaN(bookingId)) {
      return NextResponse.json({ error: 'Invalid booking id' }, { status: 400 });
    }

    // --- query (use `db`, not `supabase`) ---
    let query = db
      .from('visa_applications')
      .select('*, invoices(*), flight_options(*), hotel_options(*), user_documents(*)')
      .eq('id', bookingId);

    if (role !== 'admin') {
      query = query.eq('user_id', userId);
    }

    const { data, error } = await query.single();

    if (error) {
      if ((error as any).code === 'PGRST116' || /No rows/i.test(error.message || '')) {
        return NextResponse.json({ error: 'Not found' }, { status: 404 });
      }
      throw error;
    }

    return NextResponse.json({ data });
  } catch (err: any) {
    console.error('API Error in /api/booking/[id]:', err);
    const message = err?.message || 'An unexpected error occurred.';
    const status = /invalid signature|jwt/i.test(message) ? 401 : 500;
    return NextResponse.json({ error: message }, { status });
  }
}
