// src/app/api/auth/password/reset/route.ts
import { NextResponse } from 'next/server';
import { z } from 'zod';
import { supabase } from '@/lib/db';
import { hash } from '@/lib/crypto';
import bcrypt from 'bcryptjs';

const Body = z.object({
  token: z.string().min(16),
  newPassword: z.string().min(8),
});

export async function POST(req: Request) {
  try {
    const { token, newPassword } = Body.parse(await req.json());
    const tokenHash = hash(token);

    const { data: row, error } = await supabase
      .from('auth_password_resets')
      .select('id, user_id, used, expires_at')
      .eq('token_hash', tokenHash)
      .order('id', { ascending: false })
      .limit(1)
      .maybeSingle();
    if (error) throw error;

    if (!row) return NextResponse.json({ ok:false, error:'Invalid token' }, { status: 400 });
    if (row.used) return NextResponse.json({ ok:false, error:'Token already used' }, { status: 410 });
    if (new Date(row.expires_at).getTime() < Date.now())
      return NextResponse.json({ ok:false, error:'Token expired' }, { status: 410 });

    const passwordHashed = await bcrypt.hash(newPassword, 10);

    // YOUR schema uses column `password`
    const { error: upErr } = await supabase
      .from('users')
      .update({ password: passwordHashed })
      .eq('id', row.user_id);
    if (upErr) throw upErr;

    await supabase.from('auth_password_resets').update({ used: true }).eq('id', row.id);
    return NextResponse.json({ ok:true });
  } catch (e:any) {
    return NextResponse.json({ ok:false, error: e?.message ?? 'Reset failed' }, { status: 400 });
  }
}
