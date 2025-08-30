// src/lib/resend.ts
import { Resend } from 'resend';

const { RESEND_API_KEY, RESEND_FROM } = process.env;

export const resendClient = () => {
  if (!RESEND_API_KEY || !RESEND_FROM) throw new Error('Resend config missing');
  return { resend: new Resend(RESEND_API_KEY), from: RESEND_FROM };
};
