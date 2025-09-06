// // const PRICE_TABLE: Record<string, number> = {
// //     "Docs on Call": 7500,
// //     "Docs on Door": 9500,
// //     "Visa at Door": 12500,
// //   }
  
// //   const rupees = PRICE_TABLE[plan] * travelerCount
// //   const paise  = rupees * 100          // Razorpay wants paise
  
// //   /* 1️⃣  update the booking record right now -------------------- */
// //   await supabase
// //     .from("visa_applications")
// //     .update({ total_amount: rupees })
// //     .eq("id", bookingId)
  
// //   /* 2️⃣  send amount to Razorpay -------------------------------- */
// //   const razorpayOrder = await razorpay.orders.create({
// //     amount   : paise,
// //     currency : "INR",
// //     receipt  : `va_${bookingId}`,
// //   })
  

// import { createClient } from '@supabase/supabase-js'
// import Razorpay from 'razorpay'
// import { calcPrice, PlanName } from '@/config/pricing'

// /* ...inside your handler ------------------------------------------------- */
// const { plan, travelerCount, bookingId } = await req.json() as {
//   plan: PlanName
//   travelerCount: number
//   bookingId: number
//   promoCode?: string | null
// }

// const { total } = calcPrice({
//   plan,
//   travellers: travelerCount,
//   promoCode : null,          // or pass the code from body if you support it here
// })

// const rupees = total                 // already rounded
// const paise  = rupees * 100          // Razorpay needs paise

// /* 1️⃣  store amount in DB ----------------------------------- */
// await supabase
//   .from('visa_applications')
//   .update({ total_amount: rupees })
//   .eq('id', bookingId)

// /* 2️⃣  create Razorpay order -------------------------------- */
// const razorpayOrder = await razorpay.orders.create({
//   amount  : paise,
//   currency: 'INR',
//   receipt : `va_${bookingId}`,
// })

// return NextResponse.json({ order: razorpayOrder })
// src/app/api/create-order/route.ts
import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';
import { calcPrice, PlanName } from '@/config/pricing';
import { supabase } from '@/lib/supabase-server';

export const runtime = 'nodejs'; // Razorpay SDK requires Node runtime

type Body = {
  plan: PlanName;
  travelerCount: number;   // NOTE: incoming name you showed
  bookingId: number;
  promoCode?: string | null;
};

export async function POST(req: Request) {
  try {
    // 1) Parse and validate body
    const { plan, travelerCount, bookingId, promoCode }: Body = await req.json();

    if (!plan || typeof travelerCount !== 'number' || !bookingId) {
      return NextResponse.json(
        { error: 'Missing required fields: plan, travelerCount, bookingId' },
        { status: 400 }
      );
    }

    // 2) Price calculation (your existing util)
    const { total } = calcPrice({
      plan,
      travellers: travelerCount, // your util expects `travellers`
      promoCode: promoCode ?? null,
    });

    const rupees = Math.round(total);
    const paise = rupees * 100;

    // 3) Ensure Razorpay creds exist
    if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
      return NextResponse.json(
        { error: 'Missing RAZORPAY_KEY_ID or RAZORPAY_KEY_SECRET' },
        { status: 500 }
      );
    }

    // 4) Create/update DB record safely
    const { error: dbErr } = await supabase
      .from('visa_applications')
      .update({ total_amount: rupees })
      .eq('id', bookingId);

    if (dbErr) {
      console.error('Supabase update error:', dbErr);
      return NextResponse.json(
        { error: 'Failed to update total amount for booking' },
        { status: 500 }
      );
    }

    // 5) Init Razorpay + create order (amount must be in paise)
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const order = await razorpay.orders.create({
      amount: paise,
      currency: 'INR',
      receipt: `va_${bookingId}`,
      notes: { plan, travelerCount: String(travelerCount), bookingId: String(bookingId) },
    });

    // 6) Respond with order payload
    return NextResponse.json({ order }, { status: 200 });
  } catch (err: any) {
    console.error('create-order error:', err);
    return NextResponse.json(
      { error: err?.message || 'Failed to create order' },
      { status: 500 }
    );
  }
}
