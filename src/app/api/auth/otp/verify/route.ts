// // src/app/api/auth/otp/verify/route.ts
// import { NextResponse } from 'next/server';
// import { z } from 'zod';
// import { getTwilio } from '@/lib/twilio';
// import { supabase } from '@/lib/db';
// import { signAuthToken } from '@/lib/jwt';
// import { cookies } from 'next/headers';

// const Body = z.object({
//   phone: z.string().min(8),
//   channel: z.enum(['sms','whatsapp']),
//   code: z.string().min(4),
//   purpose: z.enum(['signup','login']),
//   firstname: z.string().optional(),
//   lastname: z.string().optional(),
//   email: z.string().optional(),      // optional for signup if user enters it
// });

// export async function POST(req: Request) {
//   try {
//     const { phone, channel, code, purpose, firstname, lastname, email } = Body.parse(await req.json());
//     const { client, verifySid } = getTwilio();

//     const check = await client.verify.v2.services(verifySid).verificationChecks.create({
//       to: channel === 'whatsapp' ? `whatsapp:${phone}` : phone,
//       code,
//     });
//     if (check.status !== 'approved') {
//       return NextResponse.json({ ok:false, error:'Invalid or expired code' }, { status: 401 });
//     }

//     // 1) Lookup by phone
//     const { data: existing, error: selErr } = await supabase
//       .from('users')
//       .select('id, email, phone, firstname, lastname')
//       .eq('phone', phone)
//       .maybeSingle();
//     if (selErr) throw selErr;

//     let userId: number | undefined = existing?.id;

//     // 2) If signup and not found, create user
//     if (!existing && purpose === 'signup') {
//       const newEmail = (email ?? '').trim(); // may be '' (allowed by your schema)
//       const { data: created, error: insErr } = await supabase
//         .from('users')
//         .insert([{
//           email: newEmail,           // your schema requires NOT NULL; '' is allowed
//           password: null,            // password-less account for OTP flow
//           firstname: firstname ?? null,
//           lastname: lastname ?? null,
//           phone
//         }])
//         .select('id')
//         .single();
//       if (insErr) throw insErr;
//       userId = created.id;
//     }

//     if (!userId) {
//       return NextResponse.json({ ok:false, error:'User not found. Sign up first.' }, { status: 404 });
//     }

//     // 3) Issue session JWT cookie
//     const token = signAuthToken({ uid: userId });
//     cookies().set('travaky_token', token, {
//       httpOnly: true, sameSite: 'lax', path: '/', maxAge: 60*60*24*7
//     });

//     return NextResponse.json({ ok:true, userId });
//   } catch (e:any) {
//     return NextResponse.json({ ok:false, error: e?.message ?? 'OTP verify failed' }, { status: 400 });
//   }
// }
import { NextResponse } from 'next/server';
import { z } from 'zod';
import { supabase } from '@/lib/db';
import { hash } from '@/lib/crypto';
import { signAuthToken } from '@/lib/jwt';
import { cookies } from 'next/headers';

const Body = z.object({
  phone: z.string().min(8),
  code: z.string().min(4),
  purpose: z.enum(['login','signup']),
  firstname: z.string().optional(),
  lastname: z.string().optional(),
  email: z.string().optional(),
});

export async function POST(req: Request) {
  try {
    const { phone, code, purpose, firstname, lastname, email } = Body.parse(await req.json());
    const code_hash = hash(code);

    // fetch latest valid code
    const { data: row, error } = await supabase
      .from('auth_phone_otp')
      .select('id, used, expires_at')
      .eq('phone', phone)
      .eq('code_hash', code_hash)
      .order('id', { ascending: false })
      .limit(1)
      .maybeSingle();

    if (error) throw error;
    if (!row) return NextResponse.json({ ok: false, error: 'Invalid code' }, { status: 401 });
    if (row.used) return NextResponse.json({ ok: false, error: 'Code already used' }, { status: 410 });
    if (new Date(row.expires_at).getTime() < Date.now())
      return NextResponse.json({ ok: false, error: 'Code expired' }, { status: 410 });

    // mark used
    await supabase.from('auth_phone_otp').update({ used: true }).eq('id', row.id);

    // upsert user by phone
    const { data: existing, error: selErr } = await supabase
      .from('users')
      .select('id')
      .eq('phone', phone)
      .maybeSingle();
    if (selErr) throw selErr;

    let userId: number | undefined = existing?.id;
    if (!existing && purpose === 'signup') {
      const safeEmail = (email ?? '').trim(); // your schema allows '' (NOT NULL DEFAULT '')
      const { data: created, error: insErr } = await supabase
        .from('users')
        .insert([{
          email: safeEmail,      // '' allowed
          password: null,
          firstname: firstname ?? null,
          lastname:  lastname  ?? null,
          role: 'user',
          phone
        }])
        .select('id')
        .single();
      if (insErr) throw insErr;
      userId = created.id;
    }
    if (!userId) return NextResponse.json({ ok: false, error: 'User not found' }, { status: 404 });

    const token = signAuthToken({ uid: userId });
    cookies().set('travaky_token', token, { httpOnly: true, sameSite: 'lax', path: '/', maxAge: 60 * 60 * 24 * 7 });

    return NextResponse.json({ ok: true, userId });
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e?.message ?? 'OTP verify failed' }, { status: 400 });
  }
}
