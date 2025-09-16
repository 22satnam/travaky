// src/app/api/auth/sms-otp/request/route.ts
import { NextResponse } from 'next/server';
import { z } from 'zod';
import { supabase } from '@/lib/db';
import { hash, randomSixDigit } from '@/lib/crypto';

const Body = z.object({
  phone: z.string().min(10),
  purpose: z.enum(['signup','login']),
  name: z.string().optional(), // for branding
});

export async function POST(req: Request) {
  try {
    const { phone, purpose, name } = Body.parse(await req.json());
    const code = randomSixDigit();
    const codeHash = hash(code);
    const expiresAt = new Date(Date.now() + 1000*60*10).toISOString(); // 10 min

    const { error } = await supabase.from('auth_sms_otp').insert({
      phone, code_hash: codeHash, purpose, expires_at: expiresAt
    });
    if (error) throw error;

    // TODO: Integrate with SMS provider (Twilio, AWS SNS, etc.)
    // For now, we'll log the code for development
    console.log(`SMS OTP for ${phone}: ${code}`);
    
    // In production, send SMS here:
    // await sendSMS(phone, `Your Travaky verification code is: ${code}. Valid for 10 minutes.`);

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e?.message ?? 'SMS OTP request failed' }, { status: 400 });
  }
}
