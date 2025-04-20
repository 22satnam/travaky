// // // // // // // lib/pdf/generate.ts
// // // // // // import fs from "fs/promises"
// // // // // // import path from "path"
// // // // // // import { PDFDocument, rgb, StandardFonts } from "pdf-lib"

// // // // // // export async function generateVisaPDF(templatePath: string, formData: any) {
// // // // // //   const filePath = path.join(process.cwd(), templatePath)
// // // // // //   const templateBytes = await fs.readFile(filePath)

// // // // // //   const pdfDoc = await PDFDocument.load(templateBytes)
// // // // // //   const pages = pdfDoc.getPages()
// // // // // //   const page = pages[0]
// // // // // //   const font = await pdfDoc.embedFont(StandardFonts.Helvetica)

// // // // // //   const drawText = (text: string, x: number, y: number) => {
// // // // // //     page.drawText(text || '', {
// // // // // //       x,
// // // // // //       y,
// // // // // //       size: 12,
// // // // // //       font,
// // // // // //       color: rgb(0, 0, 0),
// // // // // //     })
// // // // // //   }

// // // // // //   // Example values (adjust these based on your country-specific template)
// // // // // //   drawText(formData.firstName, 80, 700)
// // // // // //   drawText(formData.lastName, 280, 700)
// // // // // //   drawText(formData.email, 80, 680)
// // // // // //   drawText(formData.phone, 280, 680)
// // // // // //   drawText(formData.passportNumber, 80, 660)
// // // // // //   drawText(formData.country, 280, 660)
// // // // // //   drawText(formData.appointmentDate, 80, 640)
// // // // // //   drawText(formData.appointmentTime, 280, 640)

// // // // // //   const pdfBytes = await pdfDoc.save()

// // // // // //   return Buffer.from(pdfBytes)
// // // // // // }
// // // // // import { PDFDocument } from "pdf-lib";
// // // // // import fs from "fs/promises";
// // // // // import path from "path";

// // // // // export async function generateVisaPDF(templatePath: string, data: Record<string, any>) {
// // // // //   const filePath = path.resolve(process.cwd(), templatePath);
// // // // //   const existingPdfBytes = await fs.readFile(filePath);
// // // // //   const pdfDoc = await PDFDocument.load(existingPdfBytes);

// // // // //   const form = pdfDoc.getForm();

// // // // //   // Assuming form field names match the data keys
// // // // //   Object.keys(data).forEach((key) => {
// // // // //     try {
// // // // //       const field = form.getTextField(key);
// // // // //       field.setText(data[key]);
// // // // //     } catch (err) {
// // // // //       console.warn(`Field "${key}" not found in PDF.`);
// // // // //     }
// // // // //   });

// // // // //   form.flatten();
// // // // //   return await pdfDoc.save();
// // // // // }
// // // // import { PDFDocument, StandardFonts } from "pdf-lib";
// // // // import fs from "fs/promises";
// // // // import path from "path";

// // // // const coordMap: Record<string, { x: number; y: number; page?: number }> = {
// // // //   "First Name": { x: 100, y: 650 },
// // // //   "Last Name": { x: 300, y: 650 },
// // // //   "Date of Birth": { x: 100, y: 620 },
// // // //   "Place of Birth": { x: 300, y: 620 },
// // // //   "Country of Birth": { x: 100, y: 600 },
// // // //   "Nationality": { x: 300, y: 600 },
// // // //   "Email Address": { x: 100, y: 580 },
// // // //   "Contact Number": { x: 300, y: 580 },
// // // //   "Gender": { x: 100, y: 560 },
// // // //   "Marital Status": { x: 300, y: 560 },
// // // //   "Passport Number": { x: 100, y: 530 },
// // // //   "Type of Passport": { x: 300, y: 530 },
// // // //   "Date of Issue": { x: 100, y: 510 },
// // // //   "Date of Expiry": { x: 300, y: 510 },
// // // //   "Issued by Country": { x: 100, y: 490 },
// // // //   "Current Address": { x: 100, y: 460 },
// // // //   "Residence Permit": { x: 300, y: 460 },
// // // //   "Resident Permit Validity": { x: 100, y: 440 },
// // // //   "Occupation": { x: 300, y: 440 },
// // // //   "Company Address": { x: 100, y: 420 },
// // // //   "Company Contact Number": { x: 300, y: 420 },
// // // //   "Company Email": { x: 100, y: 400 },
// // // //   "Purpose of Travel": { x: 300, y: 400 },
// // // //   "Date of Travel Arrival": { x: 100, y: 370 },
// // // //   "Date of Departure": { x: 300, y: 370 },
// // // //   "Accommodation Required": { x: 100, y: 350 },
// // // //   "Date": { x: 300, y: 350 },
// // // //   "Pincode": { x: 100, y: 320 },
// // // //   "Address": { x: 300, y: 320 },
// // // //   "Contact Details": { x: 100, y: 300 },
// // // //   "Attach front side of passport": { x: 100, y: 250, page: 1 },
// // // //   "Attach back side of passport": { x: 300, y: 250, page: 1 },
// // // //   "I agree to the collection and use of my data as outlined in the privacy consent": {x: 100,y: 230,page: 3},

// // // // };

// // // // export async function generateVisaPDF(templatePath: string, data: Record<string, any>) {
// // // //   const pdfPath = path.resolve(process.cwd(), templatePath);
// // // //   const existingPdfBytes = await fs.readFile(pdfPath);
// // // //   const pdfDoc = await PDFDocument.load(existingPdfBytes);
// // // //   const pages = pdfDoc.getPages();

// // // //   const defaultFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

// // // //   Object.entries(data).forEach(([label, value]) => {
// // // //     const coords = coordMap[label];
// // // //     if (!coords) {
// // // //       console.warn(`⚠️ No coordinates defined for "${label}"`);
// // // //       return;
// // // //     }

// // // //     const page = pages[coords.page ?? 0];
// // // //     // const safeValue = String(value ?? "-");

// // // //     let safeValue = String(value ?? "");

// // // //     if (Array.isArray(value)) {
// // // //       safeValue = "[Attached]";
// // // //     }


// // // //     page.drawText(safeValue, {
// // // //       x: coords.x,
// // // //       y: coords.y,
// // // //       size: 10,
// // // //       font: defaultFont,
// // // //     });
// // // //   });

// // // //   return await pdfDoc.save();
// // // // }
// // // import { PDFDocument, StandardFonts } from "pdf-lib"
// // // import fs from "fs/promises"
// // // import path from "path"

// // // const coordMap: Record<string, { x: number; y: number; page?: number }> = {
// // //   "First Name": { x: 75, y: 685 },
// // //   "Last Name": { x: 75, y: 735 },
// // //   "Date of Birth": { x: 75, y: 660 },
// // //   "Place of Birth": { x: 75, y: 635 },
// // //   "Country of Birth": { x: 75, y: 610 },
// // //   "Nationality": { x: 75, y: 585 },
// // //   "Email Address": { x: 75, y: 135 },
// // //   "Contact Number": { x: 75, y: 110 },
// // //   "Gender": { x: 75, y: 510 },
// // //   "Marital Status": { x: 75, y: 485 },
// // //   "Passport Number": { x: 75, y: 435 },
// // //   "Type of Passport": { x: 75, y: 410 },
// // //   "Date of Issue": { x: 75, y: 360 },
// // //   "Date of Expiry": { x: 75, y: 335 },
// // //   "Issued by Country": { x: 75, y: 310 },

// // //   "Current Address": { x: 75, y: 135, page: 2 },
// // //   "Residence Permit": { x: 75, y: 90, page: 2 },
// // //   "Resident Permit Validity": { x: 300, y: 485, page: 2 },
// // //   "Occupation": { x: 300, y: 735, page: 2 },
// // //   "Company Address": { x: 300, y: 710, page: 2 },
// // //   "Company Contact Number": { x: 300, y: 755, page: 2 },
// // //   "Company Email": { x: 300, y: 760, page: 2 },

// // //   "Purpose of Travel": { x: 75, y: 735, page: 3 },
// // //   "Date of Travel Arrival": { x: 75, y: 610, page: 3 },
// // //   "Date of Departure": { x: 75, y: 585, page: 3 },

// // //   "Accommodation Required": { x: 300, y: 460, page: 3 },
// // //   "Date": { x: 300, y: 350 },
// // //   "Pincode": { x: 100, y: 320 },
// // //   "Address": { x: 300, y: 320 },
// // //   "Contact Details": { x: 100, y: 300 },

// // //   "Attach front side of passport": { x: 100, y: 250, page: 1 },
// // //   "Attach back side of passport": { x: 300, y: 250, page: 1 },
// // //   "I agree to the collection and use of my data as outlined in the privacy consent": { x: 100, y: 230, page: 5 },

// // //   "Signature of applicant": { x: 400, y: 150, page: 5 },
// // //   "Place and date": { x: 75, y: 150, page: 5 },
// // // }

// // // export async function generateVisaPDF(templatePath: string, data: Record<string, any>) {
// // //   const pdfPath = path.resolve(process.cwd(), templatePath)
// // //   const existingPdfBytes = await fs.readFile(pdfPath)
// // //   const pdfDoc = await PDFDocument.load(existingPdfBytes)
// // //   const pages = pdfDoc.getPages()
// // //   const font = await pdfDoc.embedFont(StandardFonts.Helvetica)

// // //   for (const [label, val] of Object.entries(data)) {
// // //     const coords = coordMap[label]
// // //     if (!coords) {
// // //       console.warn(`⚠️ No coordinates defined for "${label}"`)
// // //       continue
// // //     }

// // //     const page = pages[coords.page ?? 0]
// // //     let value = Array.isArray(val) ? '[Attached]' : String(val ?? '')

// // //     page.drawText(value, {
// // //       x: coords.x,
// // //       y: coords.y,
// // //       size: 10,
// // //       font,
// // //     })
// // //   }

// // //   return await pdfDoc.save()
// // // }
// // export async function generateVisaPDF(country: string, data: Record<string, any>) {
// //   const mappingModule = await import(`./mappings/${country}.ts`)
// //   const coordMap = mappingModule[`${country}CoordMap`] || {}

// //   const pdfPath = path.resolve(process.cwd(), `pdf-templates/${country}.pdf`)
// //   const existingPdfBytes = await fs.readFile(pdfPath)
// //   const pdfDoc = await PDFDocument.load(existingPdfBytes)
// //   const pages = pdfDoc.getPages()
// //   const font = await pdfDoc.embedFont(StandardFonts.Helvetica)

// //   for (const [label, val] of Object.entries(data)) {
// //     const coords = coordMap[label]
// //     if (!coords) continue
// //     const page = pages[coords.page ?? 0]
// //     let value = Array.isArray(val) ? '[Attached]' : String(val ?? '')
// //     page.drawText(value, { x: coords.x, y: coords.y, size: 10, font })
// //   }

// //   return await pdfDoc.save()
// // }
// import { PDFDocument, StandardFonts } from "pdf-lib"
// import fs from "fs/promises"
// import path from "path"
// import { normalizeFormDataForPDF } from './helpers'



// export async function generateVisaPDF(country: string, data: Record<string, any>) {
//   const countryKey = country.toLowerCase().replace(/\s+/g, '') // e.g. "Switzerland" → "switzerland"

//   // Dynamic import of correct mapping
//   const mappingModule = await import(`./mappings/${countryKey}.ts`)
//   const coordMap = mappingModule[`${countryKey}CoordMap`] as Record<string, { x: number; y: number; page?: number }>

//   const pdfPath = path.resolve(process.cwd(), `pdf-templates/${countryKey}.pdf`)
//   const existingPdfBytes = await fs.readFile(pdfPath)
//   const pdfDoc = await PDFDocument.load(existingPdfBytes)
//   const pages = pdfDoc.getPages()
//   const font = await pdfDoc.embedFont(StandardFonts.Helvetica)

//   for (const [label, val] of Object.entries(data)) {
//     const coords = coordMap[label]
//     if (!coords) {
//       console.warn(`⚠️ No coordinates defined for "${label}"`)
//       continue
//     }

//     const page = pages[coords.page ?? 0]
//     const value = Array.isArray(val) ? "[Attached]" : String(val ?? "")

//     page.drawText(value, {
//       x: coords.x,
//       y: coords.y,
//       size: 10,
//       font,
//     })
//   }

//   return await pdfDoc.save()
// }
import { PDFDocument, StandardFonts } from "pdf-lib"
import fs from "fs/promises"
import path from "path"
import { normalizeFormDataForPDF } from './helpers'

export async function generateVisaPDF(country: string, rawData: Record<string, any>) {
  const countryKey = country.toLowerCase().replace(/\s+/g, '') // Normalize "Switzerland" → "switzerland"

  // ✅ Normalize form data before drawing
  const data = normalizeFormDataForPDF(rawData)

  // 🔁 Dynamic import of coordinate map
  const mappingModule = await import(`./mappings/${countryKey}.ts`)
  const coordMap = mappingModule[`${countryKey}CoordMap`] as Record<string, { x: number; y: number; page?: number }>

  const pdfPath = path.resolve(process.cwd(), `pdf-templates/${countryKey}.pdf`)
  const existingPdfBytes = await fs.readFile(pdfPath)
  const pdfDoc = await PDFDocument.load(existingPdfBytes)
  const pages = pdfDoc.getPages()
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica)

  const unmatched: string[] = []

  for (const [label, val] of Object.entries(data)) {
    const coords = coordMap[label]
    if (!coords) {
      unmatched.push(label)
      continue
    }

    const page = pages[coords.page ?? 0]
    const value = Array.isArray(val) ? "[Attached]" : String(val ?? "")

    page.drawText(value, {
      x: coords.x,
      y: coords.y,
      size: 10,
      font,
    })
  }

  if (unmatched.length) {
    console.warn(`⚠️ Unmapped PDF fields for ${countryKey}:`, unmatched.join(", "))
  }

  return await pdfDoc.save()
}
