// // // // // // import { cookies } from 'next/headers'
// // // // // // import { NextResponse } from 'next/server'
// // // // // // import { verify } from 'jsonwebtoken'
// // // // // // import { supabaseServer } from '@/lib/supabase/server'

// // // // // // export async function GET() {
// // // // // //   try {
// // // // // //     const token = (await cookies()).get('token')?.value
// // // // // //     if (!token) throw new Error('Not authenticated')

// // // // // //     const { id, role } = verify(token, process.env.JWT_SECRET!) as { id:number; role?:string }

// // // // // //     const supabase = supabaseServer(role === 'admin')

// // // // // //     const { data, error } = role === 'admin'
// // // // // //       ? await supabase.from('invoices').select('*').order('issued_at', { ascending:false })
// // // // // //       : await supabase
// // // // // //           .from('invoices')
// // // // // //           .select('*, visa_applications!inner(user_id)')
// // // // // //           .eq('visa_applications.user_id', id)
// // // // // //           .order('issued_at', { ascending:false })

// // // // // //     if (error) throw error
// // // // // //     return NextResponse.json({ data })
// // // // // //   } catch (err:any) {
// // // // // //     return NextResponse.json({ error: err.message }, { status: 401 })
// // // // // //   }
// // // // // // }


// // // // // import { cookies } from 'next/headers'
// // // // // import { NextResponse } from 'next/server'
// // // // // import { verify } from 'jsonwebtoken'
// // // // // import { createClient } from '@supabase/supabase-js'

// // // // // export async function GET() {
// // // // //   try {
// // // // //     const token = (await cookies()).get('token')?.value
// // // // //     if (!token) throw new Error('Not authenticated')

// // // // //     const { email, role } = verify(token, process.env.JWT_SECRET!) as {
// // // // //       email: string
// // // // //       role?: string
// // // // //     }

// // // // //     const supabase = createClient(
// // // // //       process.env.NEXT_PUBLIC_SUPABASE_URL!,
// // // // //       process.env.SUPABASE_SERVICE_ROLE_KEY!
// // // // //     )

// // // // //     let { data, error } =
// // // // //       role === 'admin'
// // // // //         ? await supabase.from('invoices').select('*').order('issued_at', { ascending: false })
// // // // //         : await supabase
// // // // //             .from('invoices')
// // // // //             .select('*, visa_applications!inner(email)')
// // // // //             .eq('visa_applications.email', email)
// // // // //             .order('issued_at', { ascending: false })

// // // // //     if (error) throw error
// // // // //     return NextResponse.json({ data })
// // // // //   } catch (err: any) {
// // // // //     return NextResponse.json({ error: err.message }, { status: 401 })
// // // // //   }
// // // // // }


// // // // import { cookies } from 'next/headers'
// // // // import { NextResponse } from 'next/server'
// // // // import { verify } from 'jsonwebtoken'
// // // // import { supabaseServer } from '@/lib/supabase/server'

// // // // export async function GET() {
// // // //   try {
// // // //     const token = (await cookies()).get('token')?.value
// // // //     if (!token) throw new Error('Not authenticated')

// // // //     const { id, role } = verify(token, process.env.JWT_SECRET!) as { id: number; role?: string }
// // // //     const supabase     = supabaseServer(true)

// // // //     const { data, error } =
// // // //       role === 'admin'
// // // //         ? await supabase.from('invoices').select('*').order('issued_at', { ascending: false })
// // // //         : await supabase
// // // //             .from('invoices')
// // // //             .select('*, visa_applications!inner(user_id)')
// // // //             .eq('visa_applications.user_id', id)          // 🔑 correct join column
// // // //             .order('issued_at', { ascending: false })

// // // //     if (error) throw error
// // // //     return NextResponse.json({ data })
// // // //   } catch (err: any) {
// // // //     return NextResponse.json({ error: err.message }, { status: 401 })
// // // //   }
// // // // }


// // // /* ------------------------------------------------------------------
// // //  * POST /api/invoice
// // //  * Marks a booking “paid”, reads the exact ₹ amount we already stored
// // //  * in visa_applications.total_amount, generates the PDF, uploads it,
// // //  * inserts the invoice row, and mirrors the link back to the booking.
// // //  * ------------------------------------------------------------------ */
// // // import { NextRequest, NextResponse } from 'next/server'
// // // import { createClient } from '@supabase/supabase-js'
// // // import { generateInvoicePDF } from '@/lib/pdf/generateInvoice'

// // // export async function POST(req: NextRequest) {
// // //   const { paymentId, sessionId } = await req.json()

// // //   const supabase = createClient(
// // //     process.env.NEXT_PUBLIC_SUPABASE_URL!,
// // //     process.env.SUPABASE_SERVICE_ROLE_KEY!
// // //   )

// // //   /* 1️⃣  mark the booking row “paid” and fetch it (contains total_amount) */
// // //   const { data: booking, error } = await supabase
// // //     .from('visa_applications')
// // //     .update({ status: 'paid' })
// // //     .eq('session_id', sessionId)
// // //     .select()
// // //     .single()

// // //   if (error || !booking) {
// // //     return NextResponse.json({ error: 'Booking not found' }, { status: 404 })
// // //   }

// // //   /* 2️⃣  split the stored total_amount into its two parts */
// // //   const totalPrice      = booking.total_amount ?? 0          // ← SINGLE SOURCE
// // //   const appointmentFees = 1950 * booking.traveler_count
// // //   const travakyFees     = totalPrice - appointmentFees

// // //   /* 3️⃣  make the PDF */
// // //   const pdfBytes = await generateInvoicePDF({
// // //     invoiceNo      : `INV-${paymentId.slice(-6)}`,
// // //     date           : new Date().toLocaleDateString('en-IN'),
// // //     name           : booking.traveler_data?.[0]?.firstName ?? 'Traveller',
// // //     travelers      : booking.traveler_count,
// // //     service        : booking.plan,
// // //     appointmentFees,
// // //     travakyFees,
// // //   })

// // //   /* 4️⃣  upload to Supabase Storage */
// // //   const fileKey = `invoices/${sessionId}.pdf`
// // //   const { error: storageErr } = await supabase.storage
// // //     .from('filled-visas')
// // //     .upload(fileKey, pdfBytes, {
// // //       contentType: 'application/pdf',
// // //       upsert: true,
// // //     })
// // //   if (storageErr) {
// // //     console.error('Storage upload error:', storageErr)
// // //     return NextResponse.json({ error: 'Failed to upload invoice' }, { status: 500 })
// // //   }
// // //   const { data: urlData } = supabase.storage.from('filled-visas').getPublicUrl(fileKey)
// // //   const invoiceUrl = urlData.publicUrl

// // //   /* 5️⃣  create invoice row & mirror link back to booking */
// // //   await supabase.from('invoices').insert({
// // //     booking_id : booking.id,
// // //     pdf_url    : invoiceUrl,
// // //     amount     : totalPrice,   // exact amount, never 0
// // //     status     : 'paid',
// // //   })
// // //   await supabase
// // //     .from('visa_applications')
// // //     .update({ invoice_url: invoiceUrl })
// // //     .eq('id', booking.id)

// // //   return NextResponse.json({ ok: true, invoice_url: invoiceUrl })
// // // }


// // /* src/app/api/invoice/route.ts
// //  * ------------------------------------------------------------------
// //  * Handles POST only. Any other verb returns a JSON 405, so .json()
// //  * never crashes on the client.
// //  * ------------------------------------------------------------------ */
// // import { NextRequest, NextResponse } from 'next/server'
// // import { createClient } from '@supabase/supabase-js'
// // import { generateInvoicePDF } from '@/lib/pdf/generateInvoice'

// // /* ---------- helper to respond 405 for non-POST ------------------ */
// // export async function GET() {
// //   return NextResponse.json({ error: 'Method GET not allowed' }, { status: 405 })
// // }
// // export const PUT    = GET
// // export const DELETE = GET

// // /* ---------- actual POST logic ----------------------------------- */
// // export async function POST(req: NextRequest) {
// //   const { paymentId, sessionId } = await req.json()

// //   /* connect */
// //   const supabase = createClient(
// //     process.env.NEXT_PUBLIC_SUPABASE_URL!,
// //     process.env.SUPABASE_SERVICE_ROLE_KEY!
// //   )

// //   /* fetch & mark booking paid */
// //   const { data: booking, error } = await supabase
// //     .from('visa_applications')
// //     .update({ status: 'paid' })
// //     .eq('session_id', sessionId)
// //     .select()
// //     .single()

// //   if (error || !booking) {
// //     return NextResponse.json({ error: 'Booking not found' }, { status: 404 })
// //   }

// //   /* totals already stored at order-creation time */
// //   const totalPrice      = booking.total_amount ?? 0
// //   const appointmentFees = 1950 * booking.traveler_count
// //   const travakyFees     = totalPrice - appointmentFees

// //   /* generate PDF */
// //   const pdfBytes = await generateInvoicePDF({
// //     invoiceNo : `INV-${paymentId.slice(-6)}`,
// //     date      : new Date().toLocaleDateString('en-IN'),
// //     name      : booking.traveler_data?.[0]?.firstName ?? 'Traveller',
// //     travelers : booking.traveler_count,
// //     service   : booking.plan,
// //     appointmentFees,
// //     travakyFees,
// //   })

// //   /* upload */
// //   const key = `invoices/${sessionId}.pdf`
// //   const { error: uploadErr } = await supabase.storage
// //     .from('filled-visas')
// //     .upload(key, pdfBytes, {
// //       contentType: 'application/pdf',
// //       upsert: true,
// //     })
// //   if (uploadErr) {
// //     return NextResponse.json({ error: 'Upload failed' }, { status: 500 })
// //   }
// //   const { data: urlData } = supabase.storage.from('filled-visas').getPublicUrl(key)
// //   const invoiceUrl = urlData.publicUrl

// //   /* insert invoice row & mirror link */
// //   await supabase.from('invoices').insert({
// //     booking_id : booking.id,
// //     pdf_url    : invoiceUrl,
// //     amount     : totalPrice,
// //     status     : 'paid',
// //   })
// //   await supabase
// //     .from('visa_applications')
// //     .update({ invoice_url: invoiceUrl })
// //     .eq('id', booking.id)

// //   return NextResponse.json({ ok: true, invoice_url: invoiceUrl })
// // }


// /* GET /api/invoices  -------------------------------------------
//  * Returns all invoices for the signed-in user.
//  * -------------------------------------------------------------- */
// import { NextRequest, NextResponse } from 'next/server'
// import { cookies } from 'next/headers'
// import { verify } from 'jsonwebtoken'
// import { createClient } from '@supabase/supabase-js'

// export async function GET(_: NextRequest) {
//   /* auth */
//   const cookieStore = await cookies()
//   const token = cookieStore.get('token')?.value
//   if (!token) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

//   const { id: userId } = verify(token, process.env.JWT_SECRET!) as { id: number }

//   /* db */
//   const supabase = createClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL!,
//     process.env.SUPABASE_SERVICE_ROLE_KEY!
//   )

//   const { data, error } = await supabase
//     .from('invoices')
//     .select(
//       `id, pdf_url, amount, status, created_at,
//        visa_applications(id,country,appointment_date)`
//     )
//     .eq('visa_applications.user_id', userId)
//     .order('created_at', { ascending: false })

//   if (error) {
//     return NextResponse.json({ error: error.message }, { status: 500 })
//   }
//   return NextResponse.json(data)
// }

// /* no POST/PUT/DELETE here — those stay in /api/invoice (singular) */


/* GET /api/invoices
 * --------------------------------------------------------------
 * Returns this user’s invoices.  We pull the join, then filter
 * in JS instead of relying on Supabase cross-table `.eq()`.
 * -------------------------------------------------------------- */
import { NextResponse, NextRequest } from 'next/server'
import { cookies } from 'next/headers'
import { verify }  from 'jsonwebtoken'
import { createClient } from '@supabase/supabase-js'

export async function GET(_: NextRequest) {
  try {
    /* ── auth ── */
    const cookieStore = await cookies()
    const token = cookieStore.get('token')?.value
    if (!token) {
      if (process.env.NODE_ENV !== 'production') return NextResponse.json([])
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { id: userId } = verify(token, process.env.JWT_SECRET!) as { id: number }

    /* ── db ── */
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    const { data, error } = await supabase
      .from('invoices')
      .select(
        `id, 
         booking_id,
         pdf_url, 
         amount, 
         status, 
         issued_at,
         visa_applications(id, user_id, country, reference_id)`
      )
      .order('issued_at', { ascending: false })

    if (error) {
      console.error('Database error:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    console.log('Found invoices:', data?.length || 0)


    /* ── filter and transform ── */
    const userInvoices = (data ?? [])
      .filter((inv: any) => inv.visa_applications?.user_id === userId)
      .map((inv: any) => ({
        id: inv.id.toString(),
        booking_id: inv.booking_id?.toString() || '',
        amount: inv.amount || 0,
        status: inv.status || 'pending',
        issued_at: inv.issued_at,
        pdf_url: inv.pdf_url,
        application: inv.visa_applications ? {
          country: inv.visa_applications.country || 'Unknown',
          reference_code: inv.visa_applications.reference_id || `TVK-${inv.visa_applications.id}`,
          visa_type: 'Tourist' // Default since not in schema
        } : null
      }))

    return NextResponse.json(userInvoices)
  } catch (error: any) {
    console.error('API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

/* no POST/PUT/DELETE here — keep those in /api/invoice (singular) */
