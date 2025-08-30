// src/app/api/auth/email-otp/request/route.ts
import { NextResponse } from 'next/server';
import { z } from 'zod';
import { supabase } from '@/lib/db';
import { hash, randomSixDigit } from '@/lib/crypto';
import { resendClient } from '@/lib/resend';

const Body = z.object({
  email: z.string().email(),
  purpose: z.enum(['signup','login']),
  name: z.string().optional(), // for branding
});

export async function POST(req: Request) {
  try {
    const { email, purpose, name } = Body.parse(await req.json());
    const code = randomSixDigit();
    const codeHash = hash(code);
    const expiresAt = new Date(Date.now() + 1000*60*10).toISOString(); // 10 min

    const { error } = await supabase.from('auth_email_otp').insert({
      email, code_hash: codeHash, purpose, expires_at: expiresAt
    });
    if (error) throw error;

    const { resend, from } = resendClient();
    await resend.emails.send({
      from,
      to: email,
      subject: `Your Travaky verification code`,
      html: `
        <div style="font-family:Inter,Arial,sans-serif">
          <h2>Verify your email</h2>
          <p>Hi ${name ?? 'there'},</p>
          <p>Your one-time code for <b>Travaky</b> is:</p>
          <div style="font-size:28px;font-weight:700;letter-spacing:6px;margin:16px 0">${code}</div>
          <p>This code expires in 10 minutes. If you didn’t request it, you can safely ignore this email.</p>
          <p style="color:#64748b">– Team Travaky</p>
        </div>`,
    });

    return NextResponse.json({ ok: true });
  } catch (e:any) {
    return NextResponse.json({ ok:false, error: e?.message ?? 'Email OTP request failed' }, { status: 400 });
  }
}
