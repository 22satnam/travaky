
import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { randomUUID } from 'crypto'
import { generateVisaPDF } from '@/lib/pdf/generate'

export async function POST(req: NextRequest) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )

  try {
    const body = await req.json()
    const sessionId = randomUUID()

    const {
      travelers,
      selectedPlan,
      appointmentDate,
      appointmentTime,
      appointmentAddress,
      appointmentPincode,
      appointmentContact,
      email,
      phone,
      country
    } = body

    if (!travelers || travelers.length === 0) {
      return NextResponse.json({ error: 'No traveler data' }, { status: 400 })
    }

    // 1️⃣ Generate and Upload PDFs for each traveler
    const pdfUrls: string[] = []

    for (let i = 0; i < travelers.length; i++) {
      const traveler = travelers[i]
      const pdfBuffer = await generateVisaPDF(country.toLowerCase(), traveler)

      const uploadPath = `visas/${sessionId}_traveler${i + 1}.pdf`

      const { error: uploadError } = await supabase.storage
        .from('filled-visas')
        .upload(uploadPath, pdfBuffer, {
          contentType: 'application/pdf',
          upsert: true,
        })

      if (uploadError) {
        console.error(`❌ PDF Upload Error (Traveler ${i + 1}):`, uploadError)
        return NextResponse.json({ error: 'Failed to upload one of the PDFs' }, { status: 500 })
      }

      const { data: urlData } = supabase.storage
        .from('filled-visas')
        .getPublicUrl(uploadPath)

      pdfUrls.push(urlData.publicUrl)
    }

    // 2️⃣ Insert into DB
    const { error: dbError } = await supabase
      .from('visa_applications')
      .insert({
        session_id: sessionId,
        email,
        phone,
        country,
        plan: selectedPlan,
        appointment_date: appointmentDate,
        appointment_time: appointmentTime,
        appointment_address: appointmentAddress,
        appointment_pincode: appointmentPincode,
        appointment_contact: appointmentContact,
        traveler_data: travelers,
        traveler_count: travelers.length,
        pdfs: pdfUrls, // store array of PDFs
        status: 'unpaid',
        created_at: new Date().toISOString(),
      })

    if (dbError) {
      console.error('❌ DB Insert Error:', dbError)
      return NextResponse.json({ error: 'Failed to insert into Supabase' }, { status: 500 })
    }

    // 3️⃣ Return response to frontend
    return NextResponse.json({
      success: true,
      sessionId,
      pdfs: pdfUrls, // return all PDF links
      redirect: `/confirmation?id=${sessionId}`,
    })
  } catch (err) {
    console.error('❌ submit-form API Error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
