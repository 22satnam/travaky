// // src/app/api/auth/otp/request/route.ts
// import { NextResponse } from 'next/server';
// import { z } from 'zod';
// import { getTwilio } from '@/lib/twilio';

// const Body = z.object({
//   phone: z.string().min(8),           // E.164 preferred; we’ll normalize on client
//   channel: z.enum(['sms', 'whatsapp']),
//   purpose: z.enum(['signup','login']),
// });

// export async function POST(req: Request) {
//   try {
//     const { phone, channel, purpose } = Body.parse(await req.json());
//     const { client, verifySid } = getTwilio();

//     // Twilio Verify handles code generation, expiry, throttling.
//     await client.verify.v2.services(verifySid).verifications.create({
//       to: channel === 'whatsapp' ? `whatsapp:${phone}` : phone,
//       channel,
//       customCode: undefined, // let Verify generate
//       locale: 'en',
//       // Friendly branding (shows in WhatsApp)
//       friendlyName: 'Travaky',
//     });

//     return NextResponse.json({ ok: true, purpose });
//   } catch (e: any) {
//     return NextResponse.json({ ok: false, error: e?.message ?? 'OTP request failed' }, { status: 400 });
//   }
// }


import { NextResponse } from 'next/server';
import { z } from 'zod';
import { randomSixDigit, hash } from '@/lib/crypto';
import { supabase } from '@/lib/db';
import { sendOtpSMS, sendOtpWhatsApp } from '@/lib/twilio';

const Body = z.object({
  phone: z.string().min(8),
  channel: z.enum(['sms','whatsapp']),
});

export async function POST(req: Request) {
  try {
    const { phone, channel } = Body.parse(await req.json());
    const code = randomSixDigit();
    const code_hash = hash(code);
    const expires_at = new Date(Date.now() + 10 * 60 * 1000).toISOString();

    // store hashed code
    const { error } = await supabase
      .from('auth_phone_otp')
      .insert({ phone, code_hash, expires_at });
    if (error) throw error;

    if (channel === 'sms') await sendOtpSMS(phone, code);
    else await sendOtpWhatsApp(phone, code);

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e?.message ?? 'OTP send failed' }, { status: 400 });
  }
}
