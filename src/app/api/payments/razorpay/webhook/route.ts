// import { NextResponse } from 'next/server'
// import crypto from 'crypto'
// import { db } from '@/lib/supabase-server'

// export async function POST(req: Request) {
//   const payload = await req.text()
//   const signature = req.headers.get('x-razorpay-signature') || ''
//   const secret = process.env.RAZORPAY_WEBHOOK_SECRET!
//   const expected = crypto.createHmac('sha256', secret).update(payload).digest('hex')
//   if (expected !== signature) return NextResponse.json({ ok: false }, { status: 401 })

//   const event = JSON.parse(payload)

//   // handle a few key events
//   if (event.event === 'payment.captured' || event.event === 'order.paid') {
//     const orderId = event.payload?.payment?.entity?.order_id || event.payload?.order?.entity?.id
//     const paymentId = event.payload?.payment?.entity?.id
//     if (orderId) {
//       // find invoice by order id
//       const { data: inv } = await db.from('invoices').select('*').eq('razorpay_order_id', orderId).single()
//       if (inv) {
//         await db
//           .from('invoices')
//           .update({ status: 'paid', razorpay_payment_id: paymentId, updated_at: new Date().toISOString() })
//           .eq('id', inv.id)
//         if (inv.application_id) {
//           await db.from('applications').update({ status: 'in_progress', updated_at: new Date().toISOString() }).eq('id', inv.application_id)
//         }
//       }
//     }
//   }

//   if (event.event === 'payment.failed') {
//     const orderId = event.payload?.payment?.entity?.order_id
//     if (orderId) {
//       await db.from('invoices').update({ status: 'failed', updated_at: new Date().toISOString() }).eq('razorpay_order_id', orderId)
//     }
//   }

//   return NextResponse.json({ ok: true })
// }


import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase/admin'

export async function POST(req: NextRequest) {
  const payload = await req.json()
  const evt = payload?.event

  if (evt === 'payment.captured') {
    const paymentId = payload?.payload?.payment?.entity?.id
    const amount = (payload?.payload?.payment?.entity?.amount || 0) / 100

    // find invoice by razorpay id or match amount+pending (adapt to your mapping)
    const { data: invoices } = await supabaseAdmin
      .from('invoices')
      .select('id, application_id')
      .eq('razorpay_payment_id', paymentId)
      .limit(1)

    const inv = invoices?.[0]
    if (inv) {
      await supabaseAdmin.from('invoices').update({ status: 'paid', updated_at: new Date().toISOString() }).eq('id', inv.id)
      await supabaseAdmin.from('applications').update({ status: 'in_progress' }).eq('id', inv.application_id)
    }
  }

  return NextResponse.json({ ok: true })
}
