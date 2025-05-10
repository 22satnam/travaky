
// import { NextRequest, NextResponse } from 'next/server'
// import { createClient } from '@supabase/supabase-js'
// import { randomUUID } from 'crypto'
// import { verify } from 'jsonwebtoken'
// import { generateVisaPDF } from '@/lib/pdf/generate'



// export async function POST(req: NextRequest) {
//   const supabase = createClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL!,
//     process.env.SUPABASE_SERVICE_ROLE_KEY!
//   )

//   try {
//     const body = await req.json()
//     const sessionId = randomUUID()
//     const token = req.cookies.get('token')?.value
//     const { id:userId } = verify(token!, process.env.JWT_SECRET!) as { id:number }

//     const {
//       travelers,
//       selectedPlan,
//       appointmentDate,
//       appointmentTime,
//       appointmentAddress,
//       appointmentPincode,
//       appointmentContact,
//       email,
//       phone,
//       country
//     } = body

//     if (!travelers || travelers.length === 0) {
//       return NextResponse.json({ error: 'No traveler data' }, { status: 400 })
//     }

//     // 1️⃣ Generate and Upload PDFs for each traveler
//     const pdfUrls: string[] = []

//     for (let i = 0; i < travelers.length; i++) {
//       const traveler = travelers[i]
//       const pdfBuffer = await generateVisaPDF(country.toLowerCase(), traveler)

//       const uploadPath = `visas/${sessionId}_traveler${i + 1}.pdf`

//       const { error: uploadError } = await supabase.storage
//         .from('filled-visas')
//         .upload(uploadPath, pdfBuffer, {
//           contentType: 'application/pdf',
//           upsert: true,
//         })

//       if (uploadError) {
//         console.error(`❌ PDF Upload Error (Traveler ${i + 1}):`, uploadError)
//         return NextResponse.json({ error: 'Failed to upload one of the PDFs' }, { status: 500 })
//       }

//       const { data: urlData } = supabase.storage
//         .from('filled-visas')
//         .getPublicUrl(uploadPath)

//       pdfUrls.push(urlData.publicUrl)
//     }

//     // 2️⃣ Insert into DB
//     const { error: dbError } = await supabase
//       .from('visa_applications')
//       .insert({
//         user_id ,
//         auth_uid: user.id,
//         session_id: sessionId,
//         email,
//         phone,
//         country,
//         plan: selectedPlan,
//         appointment_date: appointmentDate,
//         appointment_time: appointmentTime,
//         appointment_address: appointmentAddress,
//         appointment_pincode: appointmentPincode,
//         appointment_contact: appointmentContact,
//         traveler_data: travelers,
//         traveler_count: travelers.length,
//         pdfs: pdfUrls, // store array of PDFs
//         status: 'unpaid',
//         created_at: new Date().toISOString(),
//       })

//     if (dbError) {
//       console.error('❌ DB Insert Error:', dbError)
//       return NextResponse.json({ error: 'Failed to insert into Supabase' }, { status: 500 })
//     }

//     // 3️⃣ Return response to frontend
//     return NextResponse.json({
//       success: true,
//       sessionId,
//       pdfs: pdfUrls, // return all PDF links
//       redirect: `/confirmation?id=${sessionId}`,
//     })
//   } catch (err) {
//     console.error('❌ submit-form API Error:', err)
//     return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
//   }
// }


import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { randomUUID } from 'crypto'
import { verify } from 'jsonwebtoken'
import { generateVisaPDF } from '@/lib/pdf/generate'

export async function POST(req: NextRequest) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )

  try {
    const body   = await req.json()
    const token  = req.cookies.get('token')?.value
    const { id: userId, email: userEmail } =
      verify(token!, process.env.JWT_SECRET!) as { id: number; email: string }

    const sessionId = randomUUID()

    const {
      travelers,
      selectedPlan,
      appointmentDate,
      appointmentTime,
      appointmentAddress,
      appointmentPincode,
      appointmentContact,
      email,          // user might edit; fall back to token e-mail
      phone,
      country
    } = body

    if (!travelers || travelers.length === 0) {
      return NextResponse.json({ error: 'No traveler data' }, { status: 400 })
    }

    /* 1️⃣  Generate + upload PDFs */
    const pdfUrls: string[] = []

    for (let i = 0; i < travelers.length; i++) {
      const traveler  = travelers[i]
      const pdfBuffer = await generateVisaPDF(country.toLowerCase(), traveler)
      const uploadKey = `visas/${sessionId}_traveler${i + 1}.pdf`

      const { error: upErr } = await supabase
        .storage
        .from('filled-visas')
        .upload(uploadKey, pdfBuffer, {
          contentType: 'application/pdf',
          upsert     : true,
        })

      if (upErr) {
        console.error(`PDF upload error (traveller ${i + 1}):`, upErr)
        return NextResponse.json({ error: 'Failed to upload PDFs' }, { status: 500 })
      }

      const { data: urlData } = supabase.storage
        .from('filled-visas')
        .getPublicUrl(uploadKey)

      pdfUrls.push(urlData.publicUrl)
    }

    /* 2️⃣  Insert booking row */
    const { error: dbErr } = await supabase
      .from('visa_applications')
      .insert({
        user_id        : userId,                         // 🔑  correct variable
        session_id     : sessionId,
        email          : email || userEmail,             // prefer form e-mail, else token
        phone,
        country,
        plan           : selectedPlan,
        appointment_date    : appointmentDate,
        appointment_time    : appointmentTime,
        appointment_address : appointmentAddress,
        appointment_pincode : appointmentPincode,
        appointment_contact : appointmentContact,
        traveler_data  : travelers,
        traveler_count : travelers.length,
        pdfs           : pdfUrls,
        status         : 'unpaid',
        created_at     : new Date().toISOString(),
      })

    if (dbErr) {
      console.error('DB insert error:', dbErr)
      return NextResponse.json({ error: 'Failed to insert booking' }, { status: 500 })
    }

    /* 3️⃣  Success payload */
    return NextResponse.json({
      success : true,
      sessionId,
      pdfs    : pdfUrls,
      redirect: `/confirmation?id=${sessionId}`,
    })
  } catch (err) {
    console.error('submit-form error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
