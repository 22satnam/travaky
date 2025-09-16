
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
//     const body   = await req.json()
//     const token  = req.cookies.get('token')?.value
//     const { id: userId, email: userEmail } =
//       verify(token!, process.env.JWT_SECRET!) as { id: number; email: string }

//     const sessionId = randomUUID()

//     const {
//       travelers,
//       selectedPlan,
//       appointmentDate,
//       appointmentTime,
//       appointmentAddress,
//       appointmentPincode,
//       appointmentContact,
//       email,          // user might edit; fall back to token e-mail
//       phone,
//       country
//     } = body

//     if (!travelers || travelers.length === 0) {
//       return NextResponse.json({ error: 'No traveler data' }, { status: 400 })
//     }

//     /* 1️⃣  Generate + upload PDFs */
//     const pdfUrls: string[] = []

//     for (let i = 0; i < travelers.length; i++) {
//       const traveler  = travelers[i]
//       const pdfBuffer = await generateVisaPDF(country.toLowerCase(), traveler)
//       const uploadKey = `visas/${sessionId}_traveler${i + 1}.pdf`

//       const { error: upErr } = await supabase
//         .storage
//         .from('filled-visas')
//         .upload(uploadKey, pdfBuffer, {
//           contentType: 'application/pdf',
//           upsert     : true,
//         })

//       if (upErr) {
//         console.error(`PDF upload error (traveller ${i + 1}):`, upErr)
//         return NextResponse.json({ error: 'Failed to upload PDFs' }, { status: 500 })
//       }

//       const { data: urlData } = supabase.storage
//         .from('filled-visas')
//         .getPublicUrl(uploadKey)

//       pdfUrls.push(urlData.publicUrl)
//     }

//     /* 2️⃣  Insert booking row */
//     const { error: dbErr } = await supabase
//       .from('visa_applications')
//       .insert({
//         user_id        : userId,                         // 🔑  correct variable
//         session_id     : sessionId,
//         email          : email || userEmail,             // prefer form e-mail, else token
//         phone,
//         country,
//         plan           : selectedPlan,
//         appointment_date    : appointmentDate,
//         appointment_time    : appointmentTime,
//         appointment_address : appointmentAddress,
//         appointment_pincode : appointmentPincode,
//         appointment_contact : appointmentContact,
//         traveler_data  : travelers,
//         traveler_count : travelers.length,
//         pdfs           : pdfUrls,
//         status         : 'unpaid',
//         created_at     : new Date().toISOString(),
//       })

//     if (dbErr) {
//       console.error('DB insert error:', dbErr)
//       return NextResponse.json({ error: 'Failed to insert booking' }, { status: 500 })
//     }

//     /* 3️⃣  Success payload */
//     return NextResponse.json({
//       success : true,
//       sessionId,
//       pdfs    : pdfUrls,
//       redirect: `/confirmation?id=${sessionId}`,
//     })
//   } catch (err) {
//     console.error('submit-form error:', err)
//     return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
//   }
// }


import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { randomUUID, createHash } from 'crypto'
import { verify } from 'jsonwebtoken'
import { generateVisaPDF } from '@/lib/pdf/generate'

/** Slugify for filenames/paths */
function slugify(input: string): string {
  return (input || '')
    .toString()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')         // strip diacritics
    .replace(/[^a-zA-Z0-9]+/g, '-')          // non-alnum -> dashes
    .replace(/^-+|-+$/g, '')                 // trim dashes
    .replace(/--+/g, '-')                    // collapse
    .toLowerCase()
}

/** Get safe first/last names from traveler record (handles various key styles) */
function readNameParts(traveler: any) {
  const first =
    traveler?.firstName ??
    traveler?.firstname ??
    traveler?.given_name ??
    traveler?.givenName ??
    traveler?.first ?? ''
  const last =
    traveler?.lastName ??
    traveler?.lastname ??
    traveler?.surname ??
    traveler?.family_name ??
    traveler?.last ?? ''
  return { first: (first || '').trim(), last: (last || '').trim() }
}

/** Short, non-identifying token to de-duplicate filenames (derived from session) */
function shortId(source: string) {
  return createHash('sha1').update(source).digest('hex').slice(0, 6).toUpperCase()
}

export async function POST(req: NextRequest) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )

  try {
    const body   = await req.json()
    const token  = req.cookies.get('token')?.value
    // Graceful auth handling: require in prod, allow stub in dev
    let userId: number = 0
    let userEmail: string = ''
    try {
      if (!token) throw new Error('no token')
      const v = verify(token, process.env.JWT_SECRET!) as { id: number; email: string }
      userId = v.id
      userEmail = v.email
    } catch {
      if (process.env.NODE_ENV === 'production') {
        return NextResponse.json({ error: 'Unauthenticated' }, { status: 401 })
      }
      userId = 0
      userEmail = body?.email || 'dev@example.com'
    }

    // Create a session id up-front (needed even for dev short-circuit)
    const sessionId = randomUUID()

    // Dev short-circuit: unauthenticated (no JWT)
    if (userId === 0) {
      return NextResponse.json({
        success: true,
        sessionId,
        redirect: `/confirmation?id=${sessionId}`,
      })
    }

    // sessionId already created above

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

    // Build common, readable pieces for the filenames
    const countrySlug = slugify(String(country || 'country'))
    const sessionShort = shortId(sessionId) // small, non-PII suffix like T1A2B3
    // Optional: add date-based subfolders to avoid flat bucket
    const now = new Date()
    const yyyy = String(now.getFullYear())
    const mm = String(now.getMonth() + 1).padStart(2, '0')

    /* 1️⃣  Generate + upload PDFs with readable filenames */
    const pdfUrls: string[] = []

    for (let i = 0; i < travelers.length; i++) {
      const traveler  = travelers[i]
      const { first, last } = readNameParts(traveler)

      // Fallbacks if names missing
      const fslug = slugify(first || `traveler-${i+1}`)
      const lslug = slugify(last || '')
      const baseName = lslug ? `${fslug}-${lslug}` : fslug

      // Final filename: firstname-lastname-country-application-<shortId>.pdf
      const filename = `${baseName}-${countrySlug}-application-${sessionShort}.pdf`

      // Optional: hierarchical path helps when browsing the bucket
      const uploadKey = `visas/${yyyy}/${mm}/${countrySlug}/${filename}`

      // In development or when Supabase is not configured, skip PDF work
      if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
        // Generate
        const pdfBuffer = await generateVisaPDF(countrySlug, traveler)

        // Upload (same bucket you already use)
        const { error: upErr } = await supabase
          .storage
          .from('filled-visas')
          .upload(uploadKey, pdfBuffer, {
            contentType: 'application/pdf',
            upsert     : true,
          })

        if (upErr) {
          if (process.env.NODE_ENV === 'production') {
            console.error(`PDF upload error (traveller ${i + 1}):`, upErr)
            return NextResponse.json({ error: 'Failed to upload PDFs' }, { status: 500 })
          }
        } else {
          // If your bucket is PUBLIC (as in your current code)
          const { data: urlData } = supabase.storage
            .from('filled-visas')
            .getPublicUrl(uploadKey)
          pdfUrls.push(urlData.publicUrl)
        }
      }

      // If you later switch the bucket to PRIVATE, use signed URLs instead:
      // const { data: signed } = await supabase.storage
      //   .from('filled-visas')
      //   .createSignedUrl(uploadKey, 60 * 60 * 24 * 7) // 7 days
      // pdfUrls.push(signed?.signedUrl as string)
    }

    /* 2️⃣  Insert booking row */
    const { error: dbErr } = await supabase
      .from('visa_applications')
      .insert({
        user_id              : userId,
        session_id           : sessionId,
        email                : email || userEmail,
        phone,
        country,
        plan                 : selectedPlan,
        appointment_date     : appointmentDate,
        appointment_time     : appointmentTime,
        appointment_address  : appointmentAddress,
        appointment_pincode  : appointmentPincode,
        appointment_contact  : appointmentContact,
        traveler_data        : travelers,
        traveler_count       : travelers.length,
        pdfs                 : pdfUrls, // keeps URLs in DB for admin/email
        status               : 'unpaid',
        created_at           : new Date().toISOString(),
      })

    if (dbErr) {
      console.error('DB insert error:', dbErr)
      return NextResponse.json({ error: 'Failed to insert booking' }, { status: 500 })
    }

    /* 3️⃣  Success payload
       Privacy: don’t expose raw PDF URLs here unless you intend to.
       Keep user-facing surface = confirmation id.
    */
    return NextResponse.json({
      success : true,
      sessionId,
      redirect: `/confirmation?id=${sessionId}`,
      // If you still want to leak URLs to the UI (not recommended):
      // pdfs: pdfUrls,
    })
  } catch (err) {
    console.error('submit-form error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
