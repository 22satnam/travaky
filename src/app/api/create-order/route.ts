// const PRICE_TABLE: Record<string, number> = {
//     "Docs on Call": 7500,
//     "Docs on Door": 9500,
//     "Visa at Door": 12500,
//   }
  
//   const rupees = PRICE_TABLE[plan] * travelerCount
//   const paise  = rupees * 100          // Razorpay wants paise
  
//   /* 1️⃣  update the booking record right now -------------------- */
//   await supabase
//     .from("visa_applications")
//     .update({ total_amount: rupees })
//     .eq("id", bookingId)
  
//   /* 2️⃣  send amount to Razorpay -------------------------------- */
//   const razorpayOrder = await razorpay.orders.create({
//     amount   : paise,
//     currency : "INR",
//     receipt  : `va_${bookingId}`,
//   })
  

import { createClient } from '@supabase/supabase-js'
import Razorpay from 'razorpay'
import { calcPrice, PlanName } from '@/config/pricing'

/* ...inside your handler ------------------------------------------------- */
const { plan, travelerCount, bookingId } = await req.json() as {
  plan: PlanName
  travelerCount: number
  bookingId: number
  promoCode?: string | null
}

const { total } = calcPrice({
  plan,
  travellers: travelerCount,
  promoCode : null,          // or pass the code from body if you support it here
})

const rupees = total                 // already rounded
const paise  = rupees * 100          // Razorpay needs paise

/* 1️⃣  store amount in DB ----------------------------------- */
await supabase
  .from('visa_applications')
  .update({ total_amount: rupees })
  .eq('id', bookingId)

/* 2️⃣  create Razorpay order -------------------------------- */
const razorpayOrder = await razorpay.orders.create({
  amount  : paise,
  currency: 'INR',
  receipt : `va_${bookingId}`,
})

return NextResponse.json({ order: razorpayOrder })
