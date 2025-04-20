// // // // // import { generateVisaPDF } from '@/lib/pdf/generate';
// // // // // import { NextRequest, NextResponse } from "next/server";
// // // // // import { createClient } from "@supabase/supabase-js";
// // // // // import { PDFDocument } from "pdf-lib";
// // // // // import fs from "fs/promises";
// // // // // import path from "path";
// // // // // import { randomUUID } from "crypto";
// // // // // import {generateVisaPDF} from "@/lib/pdf/generate";

// // // // // const supabase = createClient(
// // // // //   process.env.NEXT_PUBLIC_SUPABASE_URL!,
// // // // //   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
// // // // // );

// // // // // export async function POST(req: NextRequest) {
// // // // //   try {
// // // // //     const raw = await req.text();
// // // // //     console.log("🔥 Raw Body:", raw);

// // // // //     const data = JSON.parse(raw);
// // // // //     const formFields = data.submission || {};
// // // // //     console.log("📦 Form Data:", formFields);

// // // // //     const sessionId = randomUUID();

// // // // //     // Get country from form, fallback to "default"
// // // // //     const countryRaw =
// // // // //       formFields["Issued by Country"] ||
// // // // //       formFields["Country"] ||
// // // // //       "default";

// // // // //     const pdfTemplatePath = `pdf-templates/${countryRaw.toLowerCase()}.pdf`;
// // // // //     console.log("📄 Using template:", pdfTemplatePath);

// // // // //     // Load and fill PDF
// // // // //     const template = await fs.readFile(path.resolve(process.cwd(), pdfTemplatePath));
// // // // //     const pdfDoc = await PDFDocument.load(template);
// // // // //     const form = pdfDoc.getForm();

// // // // //     Object.entries(formFields).forEach(([key, value]) => {
// // // // //       try {
// // // // //         form.getTextField(key).setText(String(value));
// // // // //       } catch {
// // // // //         console.warn(`⚠️ Field not found in PDF: ${key}`);
// // // // //       }
// // // // //     });

// // // // //     form.flatten();
// // // // //     const pdfBytes = await pdfDoc.save();

// // // // //     // Upload to Supabase Storage
// // // // //     const uploadPath = `visas/${sessionId}.pdf`;
// // // // //     const { error: uploadError } = await supabase.storage
// // // // //       .from("filled-visas")
// // // // //       .upload(uploadPath, pdfBytes, {
// // // // //         contentType: "application/pdf",
// // // // //         upsert: true,
// // // // //       });

// // // // //     if (uploadError) {
// // // // //       console.error("❌ Upload failed:", uploadError);
// // // // //       return NextResponse.json({ error: "Upload failed" }, { status: 500 });
// // // // //     }

// // // // //     const { data: urlData } = supabase.storage
// // // // //       .from("filled-visas")
// // // // //       .getPublicUrl(uploadPath);

// // // // //     // Save metadata to Supabase table
// // // // //     await supabase.from("visa_applications").insert({
// // // // //       session_id: sessionId,
// // // // //       pdf_url: urlData.publicUrl,
// // // // //       email: formFields["Email Address"],
// // // // //       country: countryRaw,
// // // // //       first_name: formFields["First Name"],
// // // // //       created_at: new Date().toISOString(),
// // // // //     });

// // // // //     // Send confirmation email
// // // // //     await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/send-email`, {
// // // // //       method: "POST",
// // // // //       headers: { "Content-Type": "application/json" },
// // // // //       body: JSON.stringify({
// // // // //         sessionId,
// // // // //         email: formFields["Email Address"],
// // // // //         pdfUrl: urlData.publicUrl,
// // // // //         name: formFields["First Name"],
// // // // //         country: countryRaw,
// // // // //       }),
// // // // //     });

// // // // //     return NextResponse.json({ sessionId, pdfUrl: urlData.publicUrl });
// // // // //   } catch (err) {
// // // // //     console.error("❌ Error in /submit-form:", err);
// // // // //     return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
// // // // //   }
// // // // // }
// // // // import { NextRequest, NextResponse } from "next/server";
// // // // import { createClient } from "@supabase/supabase-js";
// // // // import { randomUUID } from "crypto";
// // // // import fs from "fs/promises";
// // // // import path from "path";
// // // // import { generateVisaPDF } from "@/lib/pdf/generate"; // <-- NEW generate method

// // // // const supabase = createClient(
// // // //   process.env.NEXT_PUBLIC_SUPABASE_URL!,
// // // //   process.env.SUPABASE_SERVICE_ROLE_KEY!
// // // // );

// // // // export async function POST(req: NextRequest) {
// // // //   try {
// // // //     const raw = await req.text();
// // // //     console.log("🔥 Raw Body:", raw);

// // // //     const data = JSON.parse(raw);
// // // //     const formFields = data.submission || {};
// // // //     console.log("📦 Form Data:", formFields);

// // // //     const sessionId = randomUUID();

// // // //     // Get country for picking the correct template
// // // //     const countryRaw =
// // // //       formFields["Issued by Country"] ||
// // // //       formFields["Country"] ||
// // // //       "default";

// // // //     const pdfTemplatePath = `pdf-templates/${countryRaw.toLowerCase()}.pdf`;
// // // //     console.log("📄 Using template:", pdfTemplatePath);

// // // //     // ✅ Use updated coordinate-based PDF filler
// // // //     const pdfBuffer = await generateVisaPDF(pdfTemplatePath, formFields);

// // // //     // 📤 Upload to Supabase Storage
// // // //     const uploadPath = `visas/${sessionId}.pdf`;
// // // //     const { error: uploadError } = await supabase.storage
// // // //       .from("filled-visas")
// // // //       .upload(uploadPath, pdfBuffer, {
// // // //         contentType: "application/pdf",
// // // //         upsert: true,
// // // //       });

// // // //     if (uploadError) {
// // // //       console.error("❌ Upload failed:", uploadError);
// // // //       return NextResponse.json({ error: "Upload failed" }, { status: 500 });
// // // //     }

// // // //     const { data: urlData } = supabase.storage
// // // //       .from("filled-visas")
// // // //       .getPublicUrl(uploadPath);

// // // //     // 📝 Save metadata to table
// // // //     await supabase.from("visa_applications").insert({
// // // //       session_id: sessionId,
// // // //       pdf_url: urlData.publicUrl,
// // // //       email: formFields["Email Address"],
// // // //       country: countryRaw,
// // // //       first_name: formFields["First Name"],
// // // //       created_at: new Date().toISOString(),
// // // //     });

// // // //     // 📧 Send confirmation email
// // // //     await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/send-email`, {
// // // //       method: "POST",
// // // //       headers: { "Content-Type": "application/json" },
// // // //       body: JSON.stringify({
// // // //         sessionId,
// // // //         email: formFields["Email Address"],
// // // //         pdfUrl: urlData.publicUrl,
// // // //         name: formFields["First Name"],
// // // //         country: countryRaw,
// // // //       }),
// // // //     });

// // // //     const redirectParams = new URLSearchParams({
// // // //       plan: formFields["selectedPlan"] ?? "Docs on Call",
// // // //       name: `${formFields["First Name"] ?? ""} ${formFields["Last Name"] ?? ""}`,
// // // //       country: countryRaw,
// // // //       date: formFields["Appointment Date"] ?? "N/A",
// // // //       time: formFields["Appointment Time"] ?? "N/A",
// // // //       address: formFields["Current Address"] ?? "N/A",
// // // //       pdf: urlData.publicUrl,
// // // //       id: sessionId,
// // // //     }).toString();
    
// // // //     return NextResponse.json({
// // // //       success: true,
// // // //       sessionId,
// // // //       pdfUrl: urlData.publicUrl,
// // // //       redirect: `/confirmation?${redirectParams}`,
// // // //     })
    
// // // //   } catch (err) {
// // // //     console.error("❌ Error in /submit-form:", err);
// // // //     return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
// // // //   }
// // // // }
// // // import { NextRequest, NextResponse } from 'next/server'
// // // import { uploadPDFToSupabase } from '@/lib/supabase/upload'
// // // import { generateVisaPDF } from '@/lib/pdf/generate'
// // // import { createVisaApplication } from '@/lib/supabase/db'

// // // export async function POST(req: NextRequest) {
// // //   const body = await req.json()
// // //   const formFields = body.submission ?? {}

// // //   const countryRaw = formFields["visaCountry"] || formFields["Country"]
// // //   const pdfBytes = await generateVisaPDF(countryRaw, formFields)

// // //   const pdfFileName = `${formFields["First Name"] ?? "User"}_${countryRaw}_${Date.now()}.pdf`
// // //   const urlData = await uploadPDFToSupabase(pdfFileName, pdfBytes)

// // //   const sessionId = crypto.randomUUID()
// // //   await createVisaApplication(formFields, urlData.publicUrl, sessionId)


// // //   const redirectParams = new URLSearchParams({
// // //     plan: formFields["selectedPlan"] ?? "Docs on Call",
// // //     name: `${formFields["First Name"] ?? ""} ${formFields["Last Name"] ?? ""}`,
// // //     country: countryRaw,
// // //     date: formFields["Appointment Date"] ?? "N/A",
// // //     time: formFields["Appointment Time"] ?? "N/A",
// // //     address: formFields["Current Address"] ?? "N/A",
// // //     pdf: urlData.publicUrl,
// // //     id: sessionId,
// // //   }).toString()

// // //   return NextResponse.json({
// // //     success: true,
// // //     sessionId,
// // //     pdfUrl: urlData.publicUrl,
// // //     redirect: `/confirmation?${redirectParams}`,
// // //   })
// // // }
// // // File: src/app/api/submit-form/route.ts

// // import { NextRequest, NextResponse } from 'next/server'
// // import { uploadPDFToSupabase } from '@/lib/supabase/upload'
// // import { generateVisaPDF } from '@/lib/pdf/generate'
// // import { createClient } from '@supabase/supabase-js'

// // const supabase = createClient(
// //   process.env.NEXT_PUBLIC_SUPABASE_URL!,
// //   process.env.SUPABASE_SERVICE_ROLE_KEY!
// // )

// // export async function POST(req: NextRequest) {
// //   try {
// //     const body = await req.json()
// //     const { travelers, email, country, selectedPlan } = body

// //     const sessionId = crypto.randomUUID()
// //     const storedPDFUrls: string[] = []

// //     for (let i = 0; i < travelers.length; i++) {
// //       const traveler = travelers[i]
// //       const pdfBytes = await generateVisaPDF(country, traveler)
// //       const filename = `travaky/${sessionId}/traveler-${i + 1}.pdf`
// //       const { publicUrl } = await uploadPDFToSupabase(filename, pdfBytes)
// //       storedPDFUrls.push(publicUrl)
// //     }

// //     const { error } = await supabase.from('visa_applications').insert([
// //       {
// //         session_id: sessionId,
// //         email,
// //         country,
// //         plan: selectedPlan,
// //         travelers: JSON.stringify(travelers),
// //         pdf_urls: JSON.stringify(storedPDFUrls),
// //         created_at: new Date().toISOString()
// //       }
// //     ])

// //     if (error) {
// //       console.error(error)
// //       return NextResponse.json({ success: false, error: error.message }, { status: 500 })
// //     }

// //     return NextResponse.json({ success: true, sessionId, pdfs: storedPDFUrls })
// //   } catch (err: any) {
// //     console.error(err)
// //     return NextResponse.json({ success: false, error: err.message }, { status: 500 })
// //   }
// // }
// import { NextRequest, NextResponse } from 'next/server'
// import { uploadPDFToSupabase } from '@/lib/supabase/upload'
// import { generateVisaPDF } from '@/lib/pdf/generate'
// import { createVisaApplication } from '@/lib/supabase/db'

// export async function POST(req: NextRequest) {
//   try {
//     const body = await req.json()
//     const travelers = body.travelers ?? []
//     const formFields = travelers[0] ?? {} // use first traveler for fallback fields

//     const countryRaw = body.country || formFields["visaCountry"] || formFields["Country"]
//     const selectedPlan = body.selectedPlan || formFields["selectedPlan"] || "Docs on Call"
//     const email = body.email || formFields["Email Address"]

//     const sessionId = crypto.randomUUID()
//     const pdfUrls: string[] = []

//     // generate & upload PDF for each traveler
//     for (let i = 0; i < travelers.length; i++) {
//       const traveler = travelers[i]
//       const pdfBytes = await generateVisaPDF(countryRaw, traveler)
//       const pdfFileName = `${traveler["First Name"] ?? "Traveler"}_${countryRaw}_#${i + 1}_${Date.now()}.pdf`
//       const { publicUrl } = await uploadPDFToSupabase(pdfFileName, pdfBytes)
//       pdfUrls.push(publicUrl)
//     }

//     // save record to DB
//     await createVisaApplication({
//       sessionId,
//       email,
//       plan: selectedPlan,
//       country: countryRaw,
//       travelers,
//       pdfUrls
//     })

//     const redirectParams = new URLSearchParams({
//       plan: selectedPlan,
//       name: `${formFields["First Name"] ?? ""} ${formFields["Last Name"] ?? ""}`,
//       country: countryRaw,
//       count: String(travelers.length),
//       pdfs: JSON.stringify(pdfUrls),
//       id: sessionId
//     }).toString()

//     return NextResponse.json({
//       success: true,
//       sessionId,
//       pdfs: pdfUrls,
//       redirect: `/confirmation?${redirectParams}`,
//     })
//   } catch (err: any) {
//     console.error('Form submit error:', err)
//     return NextResponse.json({ success: false, error: err.message }, { status: 500 })
//   }
// }
import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { randomUUID } from 'crypto'
import { generateVisaPDF } from '@/lib/pdf/generate' // your existing logic
import { Buffer } from 'buffer'

export async function POST(req: NextRequest) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )

  try {
    const body = await req.json()
    const sessionId = randomUUID()

    const { travelers, selectedPlan, appointmentDate, appointmentTime, appointmentAddress, appointmentPincode, appointmentContact, email, phone, country } = body

    if (!travelers || travelers.length === 0) {
      return NextResponse.json({ error: 'No traveler data' }, { status: 400 })
    }

    // For now: generate 1 PDF based on first traveler
    const pdfBuffer = await generateVisaPDF(country.toLowerCase(), travelers[0])

    const uploadPath = `visas/${sessionId}.pdf`
    const { error: uploadError } = await supabase.storage
      .from('filled-visas')
      .upload(uploadPath, pdfBuffer, {
        contentType: 'application/pdf',
        upsert: true,
      })

    if (uploadError) {
      console.error('❌ Upload Error:', uploadError)
      return NextResponse.json({ error: 'Failed to upload PDF' }, { status: 500 })
    }

    const { data: urlData } = supabase.storage
      .from('filled-visas')
      .getPublicUrl(uploadPath)

    const traveler_count = travelers.length

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
        traveler_count,
        pdf_url: urlData.publicUrl,
        status: 'unpaid',
        created_at: new Date().toISOString(),
      })

    if (dbError) {
      console.error('❌ DB Error:', dbError)
      return NextResponse.json({ error: 'Failed to insert into Supabase' }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      sessionId,
      pdfUrl: urlData.publicUrl,
    })
  } catch (err) {
    console.error('❌ Error in submit-form:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
