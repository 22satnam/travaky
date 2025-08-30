// src/app/api/auth/password/forgot/route.ts
import { NextResponse } from 'next/server';
import { z } from 'zod';
import { supabase } from '@/lib/db';
import { hash, randomToken } from '@/lib/crypto';
import { resendClient } from '@/lib/resend';

const Body = z.object({ email: z.string().email() });

export async function POST(req: Request) {
  try {
    const { email } = Body.parse(await req.json());

    const { data: user, error } = await supabase
      .from('users')
      .select('id, firstname')
      .eq('email', email)
      .maybeSingle();
    if (error) throw error;

    // Always 200; send mail only if account exists
    if (!user) return NextResponse.json({ ok: true });

    const token = randomToken();
    const tokenHash = hash(token);
    const expiresAt = new Date(Date.now() + 1000*60*30).toISOString();

    const { error: insErr } = await supabase.from('auth_password_resets').insert({
      user_id: user.id, token_hash: tokenHash, expires_at: expiresAt
    });
    if (insErr) throw insErr;

    const resetUrl = `${process.env.APP_URL}/reset-password?token=${token}`;
    const { resend, from } = resendClient();
    await resend.emails.send({
      from,
      to: email,
      subject: 'Reset your Travaky password',
      html: `
        <div style="font-family:Inter,Arial,sans-serif">
          <h2>Reset your password</h2>
          <p>Hi ${user.firstname ?? 'there'},</p>
          <p>Click the button below to set a new password. This link expires in 30 minutes.</p>
          <p><a href="${resetUrl}" style="background:#111827;color:#fff;padding:12px 16px;border-radius:8px;text-decoration:none">Set new password</a></p>
          <p>If you did not request this, please ignore this email.</p>
          <p style="color:#64748b">– Team Travaky</p>
        </div>`,
    });

    return NextResponse.json({ ok: true });
  } catch (e:any) {
    return NextResponse.json({ ok:false, error: e?.message ?? 'Could not start reset' }, { status: 400 });
  }
}
