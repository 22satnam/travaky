import { NextResponse } from 'next/server'
import Razorpay from 'razorpay'
import { db } from '@/lib/supabase-server'

// export async function POST(req: Request) {
//   const body = await req.json().catch(() => ({}))
//   const { invoiceId } = body as { invoiceId: string }
//   if (!invoiceId) return NextResponse.json({ error: 'invoiceId required' }, { status: 400 })

//   // read invoice (RLS: user can only read own invoice)
//   const { data: inv, error } = await db.from('invoices').select('*').eq('id', invoiceId).single()
//   if (error || !inv) return NextResponse.json({ error: 'invoice not found' }, { status: 404 })
//   if (inv.status !== 'pending') return NextResponse.json({ error: 'invoice not payable' }, { status: 400 })

//   const instance = new Razorpay({
//     key_id: process.env.RAZORPAY_KEY_ID!,
//     key_secret: process.env.RAZORPAY_KEY_SECRET!,
//   })

//   const order = await instance.orders.create({
//     amount: inv.amount_cents,       // INR paise
//     currency: inv.currency || 'INR',
//     receipt: inv.id,                // map to invoice id
//     notes: { application_id: inv.application_id || '' },
//   })

//   // store order id on invoice
//   await db.from('invoices').update({ razorpay_order_id: order.id }).eq('id', inv.id)

//   return NextResponse.json({
//     orderId: order.id,
//     amount: order.amount,
//     currency: order.currency,
//     key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
//   })
// }


// ...imports same as before
export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}))
  const { invoiceId } = body as { invoiceId: number }  // bigint in DB

  if (!invoiceId) return NextResponse.json({ error: 'invoiceId required' }, { status: 400 })

  // user-scoped read (RLS)
  const { data: inv, error } = await db
    .from('invoices')
    .select('*')
    .eq('id', invoiceId)
    .single()

  if (error || !inv) return NextResponse.json({ error: 'invoice not found' }, { status: 404 })
  if (inv.status !== 'pending' && inv.status !== 'unpaid')
    return NextResponse.json({ error: 'invoice not payable' }, { status: 400 })

  const instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID!,
    key_secret: process.env.RAZORPAY_KEY_SECRET!,
  })

  const amountPaise = Number(inv.amount) * 100

  const order = await instance.orders.create({
    amount: amountPaise,
    currency: 'INR',
    receipt: String(inv.id),
    notes: { booking_id: String(inv.booking_id ?? '') },
  })

  // OPTIONAL: store order id (requires columns below; see Section 4)
  // await db.from('invoices').update({ razorpay_order_id: order.id }).eq('id', inv.id)

  return NextResponse.json({
    orderId: order.id,
    amount: order.amount,
    currency: order.currency,
    key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
  })
}
