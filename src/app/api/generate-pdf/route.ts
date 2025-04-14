// app/api/generate-pdf/route.ts
import { NextRequest, NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"
import { generateVisaPDF } from "@/lib/pdf/generate"
import path from "path"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()
    const sessionId = data.session_id
    const country = data.country.toLowerCase()

    const pdfBuffer = await generateVisaPDF(`pdf-templates/${country}.pdf`, data)

    const { data: upload, error } = await supabase.storage
      .from("filled-visas")
      .upload(`visas/${sessionId}.pdf`, pdfBuffer, {
        contentType: "application/pdf",
        upsert: true,
      })

    if (error) throw error

    const { data: urlData } = supabase.storage.from("filled-visas").getPublicUrl(`visas/${sessionId}.pdf`)

    await supabase.from("visa_applications")
      .update({ pdf_url: urlData.publicUrl })
      .eq("session_id", sessionId)

    // Send confirmation email
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/send-email`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: data.email,
        name: data.firstName,
        sessionId,
        pdfUrl: urlData.publicUrl,
        country: data.country,
      })
    })

    return NextResponse.json({ success: true, url: urlData.publicUrl })
  } catch (err) {
    console.error("PDF generation/upload error:", err)
    return NextResponse.json({ error: "Failed to generate PDF" }, { status: 500 })
  }
}