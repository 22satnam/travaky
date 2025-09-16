// src/app/api/auth/sms-otp/verify/route.ts
import { NextResponse } from 'next/server';
import { z } from 'zod';
import { supabase } from '@/lib/db';
import { hash } from '@/lib/crypto';
import { signAuthToken } from '@/lib/jwt';
import { cookies } from 'next/headers';

const Body = z.object({
  phone: z.string().min(10),
  code: z.string().min(4),
  purpose: z.enum(['signup','login']),
  firstname: z.string().optional(),
  lastname: z.string().optional(),
});

export async function POST(req: Request) {
  try {
    const { phone, code, purpose, firstname, lastname } = Body.parse(await req.json());
    const codeHash = hash(code);

    const { data: row, error } = await supabase
      .from('auth_sms_otp')
      .select('id, used, expires_at')
      .eq('phone', phone)
      .eq('code_hash', codeHash)
      .eq('purpose', purpose)
      .order('id', { ascending: false })
      .limit(1)
      .maybeSingle();
    if (error) throw error;
    if (!row) return NextResponse.json({ ok: false, error: 'Invalid code' }, { status: 401 });
    if (row.used) return NextResponse.json({ ok: false, error: 'Code already used' }, { status: 410 });
    if (new Date(row.expires_at).getTime() < Date.now())
      return NextResponse.json({ ok: false, error: 'Code expired' }, { status: 410 });

    await supabase.from('auth_sms_otp').update({ used: true }).eq('id', row.id);

    // Upsert into users table using phone number
    const { data: existing, error: selErr } = await supabase
      .from('users')
      .select('id')
      .eq('phone', phone)
      .maybeSingle();
    if (selErr) throw selErr;

    let userId: number | undefined = existing?.id;
    if (!existing && purpose === 'signup') {
      const { data: created, error: insErr } = await supabase
        .from('users')
        .insert([{
          phone,
          password: null,
          firstname: firstname ?? null,
          lastname: lastname ?? null
        }])
        .select('id')
        .single();
      if (insErr) throw insErr;
      userId = created.id;
    }
    if (!userId) {
      return NextResponse.json({ ok: false, error: 'User not found. Sign up first.' }, { status: 404 });
    }

    const token = signAuthToken({ uid: userId });
    (await cookies()).set('travaky_token', token, { httpOnly: true, sameSite: 'lax', path: '/', maxAge: 60*60*24*7 });

    return NextResponse.json({ ok: true, userId });
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e?.message ?? 'SMS OTP verify failed' }, { status: 400 });
  }
}
