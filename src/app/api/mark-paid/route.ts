// // // import { NextRequest, NextResponse } from 'next/server'
// // // import { createClient } from '@supabase/supabase-js'

// // // const supabase = createClient(
// // //   process.env.NEXT_PUBLIC_SUPABASE_URL!,
// // //   process.env.SUPABASE_SERVICE_ROLE_KEY!
// // // )

// // // export async function POST(req: NextRequest) {
// // //   try {
// // //     const { paymentId } = await req.json()

// // //     const { error } = await supabase
// // //       .from('visa_applications')
// // //       .update({ status: 'paid' })
// // //       .eq('session_id', paymentId)

// // //     if (error) {
// // //       console.error('❌ Failed to mark paid:', error)
// // //       return NextResponse.json({ success: false, error: error.message }, { status: 500 })
// // //     }

// // //     return NextResponse.json({ success: true })
// // //   } catch (err) {
// // //     return NextResponse.json({ success: false, error: 'Server Error' }, { status: 500 })
// // //   }
// // // }

// // import { NextRequest, NextResponse } from 'next/server'
// // import { createClient } from '@supabase/supabase-js'
// // import { generateInvoicePDF } from '@/lib/pdf/generateInvoice'

// // export async function POST(req:NextRequest){
// //   const { paymentId, sessionId } = await req.json()
// //   const supabase = createClient(
// //     process.env.NEXT_PUBLIC_SUPABASE_URL!,
// //     process.env.SUPABASE_SERVICE_ROLE_KEY!
// //   )

// //   /* 1️⃣  mark booking paid */
// //   const { data: booking } = await supabase
// //     .from('visa_applications')
// //     .update({ status:'paid' })
// //     .eq('session_id', sessionId)
// //     .select()
// //     .single()

// //   /* 2️⃣ generate invoice PDF */
// //   const pdfBytes = await generateInvoicePDF({
// //     invoiceNo : `INV-${paymentId.slice(-6)}`,
// //     date      : new Date().toLocaleDateString('en-IN'),
// //     name      : booking.traveler_data?.[0]?.firstName ?? 'Traveller',
// //     travelers : booking.traveler_count,
// //     service   : booking.plan,
// //     appointmentFees: 1950 * booking.traveler_count,
// //     travakyFees    : booking.total_per_person * booking.traveler_count - 1950,
// //   })

// //   const fileKey = `invoices/${sessionId}.pdf`
// //   await supabase.storage
// //     .from('filled-visas')
// //     .upload(fileKey, pdfBytes, { contentType:'application/pdf', upsert:true })

// //   const { data:urlData } = supabase.storage.from('filled-visas').getPublicUrl(fileKey)

// //   /* 3️⃣ insert invoice row */
// //   await supabase.from('invoices').insert({
// //     booking_id: booking.id,
// //     pdf_url   : urlData.publicUrl,
// //     amount    : booking.traveler_count * booking.total_per_person,
// //     status    : 'paid',
// //   })

// //   return NextResponse.json({ ok:true, invoice_url: urlData.publicUrl })
// // }


// import { NextRequest, NextResponse } from 'next/server'
// import { createClient } from '@supabase/supabase-js'
// import { generateInvoicePDF } from '@/lib/pdf/generateInvoice'

// export async function POST(req: NextRequest) {
//   const { paymentId, sessionId } = await req.json()

//   const supabase = createClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL!,
//     process.env.SUPABASE_SERVICE_ROLE_KEY!
//   )

//   /* 1️⃣ mark the booking row “paid” and fetch it */
//   const { data: booking, error: upErr } = await supabase
//     .from('visa_applications')
//     .update({ status: 'paid' })
//     .eq('session_id', sessionId)
//     .select()
//     .single()

//   if (upErr || !booking) {
//     return NextResponse.json({ error: 'Booking not found' }, { status: 404 })
//   }

//   /* 2️⃣ generate invoice PDF */
//   const appointmentFees = 1950 * booking.traveler_count
//   const travakyFees     =
//     (booking.total_per_person ?? 0) * booking.traveler_count - appointmentFees
//   const pdfBytes = await generateInvoicePDF({
//     invoiceNo      : `INV-${paymentId.slice(-6)}`,
//     date           : new Date().toLocaleDateString('en-IN'),
//     name           : booking.traveler_data?.[0]?.firstName ?? 'Traveller',
//     travelers      : booking.traveler_count,
//     service        : booking.plan,
//     appointmentFees,
//     travakyFees,
//   })

//   /* 3️⃣ upload PDF to storage */
//   const fileKey = `invoices/${sessionId}.pdf`
//   const { error: storageErr } = await supabase.storage
//     .from('filled-visas')
//     .upload(fileKey, pdfBytes, {
//       contentType: 'application/pdf',
//       upsert: true,
//     })

//   if (storageErr) {
//     console.error('Storage upload error:', storageErr)
//     return NextResponse.json({ error: 'Failed to upload invoice' }, { status: 500 })
//   }

//   const { data: urlData } = supabase.storage.from('filled-visas').getPublicUrl(fileKey)
//   const invoiceUrl = urlData.publicUrl

//   /* 4️⃣ insert invoice row & mirror link back to booking */
//   await supabase.from('invoices').insert({
//     booking_id: booking.id,
//     pdf_url: invoiceUrl,
//     amount: appointmentFees + travakyFees,
//     status: 'paid',
//   })
//   await supabase
//     .from('visa_applications')
//     .update({ invoice_url: invoiceUrl })
//     .eq('id', booking.id)

//   return NextResponse.json({ ok: true, invoice_url: invoiceUrl })
// }


// src/app/api/mark-paid/route.ts

import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { generateInvoicePDF } from '@/lib/pdf/generateInvoice'
import { calcPrice, PlanName } from '@/config/pricing'

export async function POST(req: NextRequest) {
  const { paymentId, sessionId } = await req.json()

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )

  const { data: booking, error: upErr } = await supabase
    .from('visa_applications')
    .update({ status: 'paid' })
    .eq('session_id', sessionId)
    .select()
    .single()

  if (upErr || !booking) {
    return NextResponse.json({ error: 'Booking not found' }, { status: 404 })
  }

  // Use the centralized pricing logic
  const { breakUp, total } = calcPrice({
    plan: booking.plan as PlanName,
    travellers: booking.traveler_count,
    promoCode: booking.promo_code,
  });

  const pdfBytes = await generateInvoicePDF({
    invoiceNo      : `INV-${paymentId.slice(-6)}`,
    date           : new Date().toLocaleDateString('en-IN'),
    name           : booking.traveler_data?.[0]?.firstName ?? 'Traveller',
    travelers      : booking.traveler_count,
    service        : booking.plan,
    appointmentFees: breakUp.appoint,
    travakyFees    : breakUp.service + breakUp.conven,
  })

  const fileKey = `invoices/${sessionId}.pdf`
  const { error: storageErr } = await supabase.storage
    .from('filled-visas')
    .upload(fileKey, pdfBytes, {
      contentType: 'application/pdf',
      upsert: true,
    })

  if (storageErr) {
    console.error('Storage upload error:', storageErr)
    return NextResponse.json({ error: 'Failed to upload invoice' }, { status: 500 })
  }

  const { data: urlData } = supabase.storage.from('filled-visas').getPublicUrl(fileKey)
  const invoiceUrl = urlData.publicUrl

  await supabase.from('invoices').insert({
    booking_id: booking.id,
    pdf_url: invoiceUrl,
    amount: total,
    status: 'paid',
  })
  await supabase
    .from('visa_applications')
    .update({ invoice_url: invoiceUrl })
    .eq('id', booking.id)
  
  // Send confirmation email
  await fetch(`${process.env.APP_URL}/api/send-email`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
          email: booking.email,
          name: booking.traveler_data?.[0]?.firstName ?? 'Traveller',
          sessionId: sessionId,
          pdfUrl: booking.pdfs[0],
          country: booking.country,
          type: 'confirmation'
      })
  });

  return NextResponse.json({ ok: true, invoice_url: invoiceUrl })
}