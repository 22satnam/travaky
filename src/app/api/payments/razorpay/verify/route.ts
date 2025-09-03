import { NextResponse } from 'next/server'
import crypto from 'crypto'
import { db } from '@/lib/supabase-server'

export async function POST(req: Request) {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature, invoiceId } =
    await req.json()

  if (!invoiceId || !razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
    return NextResponse.json({ error: 'missing fields' }, { status: 400 })
  }

  const expected = crypto
    .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET!)
    .update(`${razorpay_order_id}|${razorpay_payment_id}`)
    .digest('hex')

  const valid = expected === razorpay_signature
  if (!valid) return NextResponse.json({ error: 'invalid signature' }, { status: 400 })

  // mark paid
 await db
    .from('invoices')
    .update({ status: 'paid', created_at: new Date().toISOString() })
    .eq('id', invoiceId)

  return NextResponse.json({ ok: true })
}
