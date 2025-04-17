import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { randomUUID } from "crypto";
import { generateVisaPDF } from "@/lib/pdf/generate";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(req: NextRequest) {
  try {
    const formData = await req.json();
    const sessionId = randomUUID();
    const country = formData.country?.toLowerCase();

    const { error: dbError } = await supabase.from("visa_applications").insert({
      session_id: sessionId,
      ...formData,
    });

    if (dbError) throw dbError;

    // Fill the form
    const pdfBuffer = await generateVisaPDF(`pdf-templates/${country}.pdf`, formData);

    // Upload to Supabase
    const { data: upload, error: uploadError } = await supabase.storage
      .from("filled-visas")
      .upload(`visas/${sessionId}.pdf`, pdfBuffer, {
        contentType: "application/pdf",
        upsert: true,
      });

    if (uploadError) throw uploadError;

    const { data: urlData } = supabase.storage
      .from("filled-visas")
      .getPublicUrl(`visas/${sessionId}.pdf`);

    // Update row with URL
    await supabase
      .from("visa_applications")
      .update({ pdf_url: urlData.publicUrl })
      .eq("session_id", sessionId);

    // Send email
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/send-email`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: formData.email,
        name: formData.firstName,
        sessionId,
        pdfUrl: urlData.publicUrl,
        country: formData.country,
      }),
    });

    return NextResponse.json({ sessionId });
  } catch (err) {
    console.error("Submit + PDF error:", err);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
