// // // // src/lib/twilio.ts
// // // import twilio from 'twilio';

// // // const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_VERIFY_SERVICE_SID } = process.env;
// // // if (!TWILIO_ACCOUNT_SID || !TWILIO_AUTH_TOKEN || !TWILIO_VERIFY_SERVICE_SID) {
// // //   // Don't throw on import (vercel builds) — we validate inside route handlers.
// // //   // console.warn('Twilio env vars missing');
// // // }

// // // export const getTwilio = () => {
// // //   if (!TWILIO_ACCOUNT_SID || !TWILIO_AUTH_TOKEN || !TWILIO_VERIFY_SERVICE_SID) {
// // //     throw new Error('Twilio config missing (env)');
// // //   }
// // //   const client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);
// // //   return { client, verifySid: TWILIO_VERIFY_SERVICE_SID };
// // // };


// // // src/lib/twilio.ts
// // import twilio from "twilio";

// // const accountSid = process.env.TWILIO_ACCOUNT_SID!;
// // const authToken = process.env.TWILIO_AUTH_TOKEN!;
// // const client = twilio(accountSid, authToken);

// // export async function sendOtpWhatsApp(phone: string, code: string) {
// //   const from = "whatsapp:+14155238886"; // your sandbox / business number
// //   return client.messages.create({
// //     from,
// //     to: `whatsapp:${phone}`,
// //     body: `Your Travaky OTP is ${code}. It will expire in 10 minutes.`,
// //   });
// // }

// // export async function sendOtpSMS(phone: string, code: string) {
// //   const from = process.env.TWILIO_SMS_FROM!; // e.g. +12051234567
// //   return client.messages.create({
// //     from,
// //     to: phone,
// //     body: `Your Travaky OTP is ${code}. It will expire in 10 minutes.`,
// //   });
// // }


// // import twilio from 'twilio';

// // const SID  = process.env.TWILIO_ACCOUNT_SID!;
// // const KEY  = process.env.TWILIO_AUTH_TOKEN!;
// // const SMS_FROM = process.env.TWILIO_SMS_FROM;          // e.g. +12051234567
// // const WA_FROM  = process.env.TWILIO_WA_FROM || 'whatsapp:+14155238886';

// // const client = twilio(SID, KEY);

// // export async function sendOtpSMS(to: string, code: string) {
// //   if (!SMS_FROM) throw new Error('TWILIO_SMS_FROM not set');
// //   return client.messages.create({
// //     from: SMS_FROM,
// //     to,
// //     body: `Your Travaky OTP is ${code}. It expires in 10 minutes.`,
// //   });
// // }

// // export async function sendOtpWhatsApp(to: string, code: string) {
// //   return client.messages.create({
// //     from: WA_FROM,
// //     to: `whatsapp:${to.replace(/^whatsapp:/,'')}`,
// //     body: `Your Travaky OTP is ${code}. It expires in 10 minutes.`,
// //   });
// // }
// import Twilio from 'twilio';

// export function getTwilioClient() {
//   const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN } = process.env;
//   if (!TWILIO_ACCOUNT_SID || !TWILIO_AUTH_TOKEN) {
//     throw new Error('Missing TWILIO_ACCOUNT_SID/TWILIO_AUTH_TOKEN');
//   }
//   return new Twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);
// }


// src/lib/twilio.ts
import { Twilio } from 'twilio';

function getTwilioClient() {
  const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN } = process.env;
  if (!TWILIO_ACCOUNT_SID || !TWILIO_AUTH_TOKEN) {
    throw new Error('Missing TWILIO_ACCOUNT_SID/TWILIO_AUTH_TOKEN');
  }
  return new Twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);
}

/** Send OTP over regular SMS */
export async function sendOtpSMS(toPhoneE164: string, message: string) {
  const from = process.env.TWILIO_SMS_FROM; // e.g. +12025550123
  if (!from) throw new Error('Missing TWILIO_SMS_FROM');
  const client = getTwilioClient();
  return client.messages.create({
    from,
    to: toPhoneE164,
    body: message,
  });
}

/** Send OTP over WhatsApp */
export async function sendOtpWhatsApp(toPhoneE164: string, message: string) {
  const fromWa = process.env.TWILIO_WA_FROM; // e.g. whatsapp:+14155238886
  if (!fromWa) throw new Error('Missing TWILIO_WA_FROM');
  const client = getTwilioClient();
  return client.messages.create({
    from: fromWa,                 // must include whatsapp: prefix
    to: `whatsapp:${toPhoneE164}`,// must include whatsapp: prefix
    body: message,
  });
}
