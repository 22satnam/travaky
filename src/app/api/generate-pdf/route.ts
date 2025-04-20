// // // app/api/generate-pdf/route.ts
// // import { NextRequest, NextResponse } from "next/server"
// // import { createClient } from "@supabase/supabase-js"
// // import { generateVisaPDF } from "@/lib/pdf/generate"
// // import path from "path"

// // const supabase = createClient(
// //   process.env.NEXT_PUBLIC_SUPABASE_URL!,
// //   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
// // )

// // export async function POST(req: NextRequest) {
// //   try {
// //     const data = await req.json()
// //     const sessionId = data.session_id
// //     const country = data.country.toLowerCase()

// //     const pdfBuffer = await generateVisaPDF(`pdf-templates/${country}.pdf`, data)

// //     const { data: upload, error } = await supabase.storage
// //       .from("filled-visas")
// //       .upload(`visas/${sessionId}.pdf`, pdfBuffer, {
// //         contentType: "application/pdf",
// //         upsert: true,
// //       })

// //     if (error) throw error

// //     const { data: urlData } = supabase.storage.from("filled-visas").getPublicUrl(`visas/${sessionId}.pdf`)

// //     await supabase.from("visa_applications")
// //       .update({ pdf_url: urlData.publicUrl })
// //       .eq("session_id", sessionId)

// //     // Send confirmation email
// //     await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/send-email`, {
// //       method: "POST",
// //       headers: { "Content-Type": "application/json" },
// //       body: JSON.stringify({
// //         email: data.email,
// //         name: data.firstName,
// //         sessionId,
// //         pdfUrl: urlData.publicUrl,
// //         country: data.country,
// //       })
// //     })

// //     return NextResponse.json({ success: true, url: urlData.publicUrl })
// //   } catch (err) {
// //     console.error("PDF generation/upload error:", err)
// //     return NextResponse.json({ error: "Failed to generate PDF" }, { status: 500 })
// //   }
// // }

// import { NextRequest, NextResponse } from 'next/server'
// import { createClient } from '@supabase/supabase-js'
// import { generateVisaPDF } from '@/lib/pdf/generate'
// import { Buffer } from 'buffer'

// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//   process.env.SUPABASE_SERVICE_ROLE_KEY!
// )

// export async function POST(req: NextRequest) {
//   try {
//     const body = await req.json()
//     const { session_id, email, country = 'switzerland', ...rest } = body

//     const normalizedCountry = country.toLowerCase().replace(/\s+/g, '')

//     const pdfBytes = await generateVisaPDF(normalizedCountry, body)

//     const fileName = `visas/${session_id}.pdf`

//     const { error: uploadError } = await supabase.storage
//       .from('filled-visas')
//       .upload(fileName, Buffer.from(pdfBytes), {
//         contentType: 'application/pdf',
//         upsert: true,
//       })

//     if (uploadError) throw uploadError

//     const { data: urlData } = supabase.storage
//       .from('filled-visas')
//       .getPublicUrl(fileName)

//     await supabase
//       .from('visa_applications')
//       .update({ pdf_url: urlData.publicUrl })
//       .eq('session_id', session_id)

//     // (Optional) Send confirmation email
//     await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/send-email`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         email,
//         name: body.firstName,
//         sessionId: session_id,
//         pdfUrl: urlData.publicUrl,
//         country,
//       }),
//     })

//     return NextResponse.json({ success: true, url: urlData.publicUrl })
//   } catch (err) {
//     console.error('❌ PDF generation/upload error:', err)
//     return NextResponse.json({ error: 'Failed to generate PDF' }, { status: 500 })
//   }
// }
import { PDFDocument, StandardFonts } from "pdf-lib"
import fs from "fs/promises"
import path from "path"

export async function generateVisaPDF(country: string, data: Record<string, any>) {
  const countryKey = country.toLowerCase().replace(/\s+/g, '')

  const mappingModule = await import(`./mappings/${countryKey}.ts`)
  const coordMap = mappingModule[`${countryKey}CoordMap`] as Record<string, { x: number; y: number; page?: number }>

  const pdfPath = path.resolve(process.cwd(), `pdf-templates/${countryKey}.pdf`)
  const existingPdfBytes = await fs.readFile(pdfPath)
  const pdfDoc = await PDFDocument.load(existingPdfBytes)
  const pages = pdfDoc.getPages()
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica)

  const unmatchedKeys: string[] = []

  for (const [label, val] of Object.entries(data)) {
    const coords = coordMap[label]
    if (!coords) {
      unmatchedKeys.push(label)
      continue
    }

    const page = pages[coords.page ?? 0]
    const value = Array.isArray(val) ? '[Attached]' : String(val ?? '')

    page.drawText(value, {
      x: coords.x,
      y: coords.y,
      size: 10,
      font,
    })
  }

  if (unmatchedKeys.length) {
    console.warn(`⚠️ The following fields were not mapped in ${countryKey}.ts:`, unmatchedKeys.join(', '))
  }

  return await pdfDoc.save()
}
