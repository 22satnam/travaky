// import { generateVisaPDF } from '@/lib/pdf/generate';
// import { NextRequest, NextResponse } from "next/server";
// import { createClient } from "@supabase/supabase-js";
// import { PDFDocument } from "pdf-lib";
// import fs from "fs/promises";
// import path from "path";
// import { randomUUID } from "crypto";
// import {generateVisaPDF} from "@/lib/pdf/generate";

// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
// );

// export async function POST(req: NextRequest) {
//   try {
//     const raw = await req.text();
//     console.log("🔥 Raw Body:", raw);

//     const data = JSON.parse(raw);
//     const formFields = data.submission || {};
//     console.log("📦 Form Data:", formFields);

//     const sessionId = randomUUID();

//     // Get country from form, fallback to "default"
//     const countryRaw =
//       formFields["Issued by Country"] ||
//       formFields["Country"] ||
//       "default";

//     const pdfTemplatePath = `pdf-templates/${countryRaw.toLowerCase()}.pdf`;
//     console.log("📄 Using template:", pdfTemplatePath);

//     // Load and fill PDF
//     const template = await fs.readFile(path.resolve(process.cwd(), pdfTemplatePath));
//     const pdfDoc = await PDFDocument.load(template);
//     const form = pdfDoc.getForm();

//     Object.entries(formFields).forEach(([key, value]) => {
//       try {
//         form.getTextField(key).setText(String(value));
//       } catch {
//         console.warn(`⚠️ Field not found in PDF: ${key}`);
//       }
//     });

//     form.flatten();
//     const pdfBytes = await pdfDoc.save();

//     // Upload to Supabase Storage
//     const uploadPath = `visas/${sessionId}.pdf`;
//     const { error: uploadError } = await supabase.storage
//       .from("filled-visas")
//       .upload(uploadPath, pdfBytes, {
//         contentType: "application/pdf",
//         upsert: true,
//       });

//     if (uploadError) {
//       console.error("❌ Upload failed:", uploadError);
//       return NextResponse.json({ error: "Upload failed" }, { status: 500 });
//     }

//     const { data: urlData } = supabase.storage
//       .from("filled-visas")
//       .getPublicUrl(uploadPath);

//     // Save metadata to Supabase table
//     await supabase.from("visa_applications").insert({
//       session_id: sessionId,
//       pdf_url: urlData.publicUrl,
//       email: formFields["Email Address"],
//       country: countryRaw,
//       first_name: formFields["First Name"],
//       created_at: new Date().toISOString(),
//     });

//     // Send confirmation email
//     await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/send-email`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         sessionId,
//         email: formFields["Email Address"],
//         pdfUrl: urlData.publicUrl,
//         name: formFields["First Name"],
//         country: countryRaw,
//       }),
//     });

//     return NextResponse.json({ sessionId, pdfUrl: urlData.publicUrl });
//   } catch (err) {
//     console.error("❌ Error in /submit-form:", err);
//     return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
//   }
// }
import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { randomUUID } from "crypto";
import fs from "fs/promises";
import path from "path";
import { generateVisaPDF } from "@/lib/pdf/generate"; // <-- NEW generate method

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: NextRequest) {
  try {
    const raw = await req.text();
    console.log("🔥 Raw Body:", raw);

    const data = JSON.parse(raw);
    const formFields = data.submission || {};
    console.log("📦 Form Data:", formFields);

    const sessionId = randomUUID();

    // Get country for picking the correct template
    const countryRaw =
      formFields["Issued by Country"] ||
      formFields["Country"] ||
      "default";

    const pdfTemplatePath = `pdf-templates/${countryRaw.toLowerCase()}.pdf`;
    console.log("📄 Using template:", pdfTemplatePath);

    // ✅ Use updated coordinate-based PDF filler
    const pdfBuffer = await generateVisaPDF(pdfTemplatePath, formFields);

    // 📤 Upload to Supabase Storage
    const uploadPath = `visas/${sessionId}.pdf`;
    const { error: uploadError } = await supabase.storage
      .from("filled-visas")
      .upload(uploadPath, pdfBuffer, {
        contentType: "application/pdf",
        upsert: true,
      });

    if (uploadError) {
      console.error("❌ Upload failed:", uploadError);
      return NextResponse.json({ error: "Upload failed" }, { status: 500 });
    }

    const { data: urlData } = supabase.storage
      .from("filled-visas")
      .getPublicUrl(uploadPath);

    // 📝 Save metadata to table
    await supabase.from("visa_applications").insert({
      session_id: sessionId,
      pdf_url: urlData.publicUrl,
      email: formFields["Email Address"],
      country: countryRaw,
      first_name: formFields["First Name"],
      created_at: new Date().toISOString(),
    });

    // 📧 Send confirmation email
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/send-email`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        sessionId,
        email: formFields["Email Address"],
        pdfUrl: urlData.publicUrl,
        name: formFields["First Name"],
        country: countryRaw,
      }),
    });

    return NextResponse.json({ sessionId, pdfUrl: urlData.publicUrl });
  } catch (err) {
    console.error("❌ Error in /submit-form:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
