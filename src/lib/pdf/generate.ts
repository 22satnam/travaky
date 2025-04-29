// // // // // // // // // // // // // // // // // // // // lib/pdf/generate.ts
// // // // // // // // // // // // // // // // // // // import fs from "fs/promises"
// // // // // // // // // // // // // // // // // // // import path from "path"
// // // // // // // // // // // // // // // // // // // import { PDFDocument, rgb, StandardFonts } from "pdf-lib"

// // // // // // // // // // // // // // // // // // // export async function generateVisaPDF(templatePath: string, formData: any) {
// // // // // // // // // // // // // // // // // // //   const filePath = path.join(process.cwd(), templatePath)
// // // // // // // // // // // // // // // // // // //   const templateBytes = await fs.readFile(filePath)

// // // // // // // // // // // // // // // // // // //   const pdfDoc = await PDFDocument.load(templateBytes)
// // // // // // // // // // // // // // // // // // //   const pages = pdfDoc.getPages()
// // // // // // // // // // // // // // // // // // //   const page = pages[0]
// // // // // // // // // // // // // // // // // // //   const font = await pdfDoc.embedFont(StandardFonts.Helvetica)

// // // // // // // // // // // // // // // // // // //   const drawText = (text: string, x: number, y: number) => {
// // // // // // // // // // // // // // // // // // //     page.drawText(text || '', {
// // // // // // // // // // // // // // // // // // //       x,
// // // // // // // // // // // // // // // // // // //       y,
// // // // // // // // // // // // // // // // // // //       size: 12,
// // // // // // // // // // // // // // // // // // //       font,
// // // // // // // // // // // // // // // // // // //       color: rgb(0, 0, 0),
// // // // // // // // // // // // // // // // // // //     })
// // // // // // // // // // // // // // // // // // //   }

// // // // // // // // // // // // // // // // // // //   // Example values (adjust these based on your country-specific template)
// // // // // // // // // // // // // // // // // // //   drawText(formData.firstName, 80, 700)
// // // // // // // // // // // // // // // // // // //   drawText(formData.lastName, 280, 700)
// // // // // // // // // // // // // // // // // // //   drawText(formData.email, 80, 680)
// // // // // // // // // // // // // // // // // // //   drawText(formData.phone, 280, 680)
// // // // // // // // // // // // // // // // // // //   drawText(formData.passportNumber, 80, 660)
// // // // // // // // // // // // // // // // // // //   drawText(formData.country, 280, 660)
// // // // // // // // // // // // // // // // // // //   drawText(formData.appointmentDate, 80, 640)
// // // // // // // // // // // // // // // // // // //   drawText(formData.appointmentTime, 280, 640)

// // // // // // // // // // // // // // // // // // //   const pdfBytes = await pdfDoc.save()

// // // // // // // // // // // // // // // // // // //   return Buffer.from(pdfBytes)
// // // // // // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // // // // import { PDFDocument } from "pdf-lib";
// // // // // // // // // // // // // // // // // // import fs from "fs/promises";
// // // // // // // // // // // // // // // // // // import path from "path";

// // // // // // // // // // // // // // // // // // export async function generateVisaPDF(templatePath: string, data: Record<string, any>) {
// // // // // // // // // // // // // // // // // //   const filePath = path.resolve(process.cwd(), templatePath);
// // // // // // // // // // // // // // // // // //   const existingPdfBytes = await fs.readFile(filePath);
// // // // // // // // // // // // // // // // // //   const pdfDoc = await PDFDocument.load(existingPdfBytes);

// // // // // // // // // // // // // // // // // //   const form = pdfDoc.getForm();

// // // // // // // // // // // // // // // // // //   // Assuming form field names match the data keys
// // // // // // // // // // // // // // // // // //   Object.keys(data).forEach((key) => {
// // // // // // // // // // // // // // // // // //     try {
// // // // // // // // // // // // // // // // // //       const field = form.getTextField(key);
// // // // // // // // // // // // // // // // // //       field.setText(data[key]);
// // // // // // // // // // // // // // // // // //     } catch (err) {
// // // // // // // // // // // // // // // // // //       console.warn(`Field "${key}" not found in PDF.`);
// // // // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // // // //   });

// // // // // // // // // // // // // // // // // //   form.flatten();
// // // // // // // // // // // // // // // // // //   return await pdfDoc.save();
// // // // // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // // // import { PDFDocument, StandardFonts } from "pdf-lib";
// // // // // // // // // // // // // // // // // import fs from "fs/promises";
// // // // // // // // // // // // // // // // // import path from "path";

// // // // // // // // // // // // // // // // // const coordMap: Record<string, { x: number; y: number; page?: number }> = {
// // // // // // // // // // // // // // // // //   "First Name": { x: 100, y: 650 },
// // // // // // // // // // // // // // // // //   "Last Name": { x: 300, y: 650 },
// // // // // // // // // // // // // // // // //   "Date of Birth": { x: 100, y: 620 },
// // // // // // // // // // // // // // // // //   "Place of Birth": { x: 300, y: 620 },
// // // // // // // // // // // // // // // // //   "Country of Birth": { x: 100, y: 600 },
// // // // // // // // // // // // // // // // //   "Nationality": { x: 300, y: 600 },
// // // // // // // // // // // // // // // // //   "Email Address": { x: 100, y: 580 },
// // // // // // // // // // // // // // // // //   "Contact Number": { x: 300, y: 580 },
// // // // // // // // // // // // // // // // //   "Gender": { x: 100, y: 560 },
// // // // // // // // // // // // // // // // //   "Marital Status": { x: 300, y: 560 },
// // // // // // // // // // // // // // // // //   "Passport Number": { x: 100, y: 530 },
// // // // // // // // // // // // // // // // //   "Type of Passport": { x: 300, y: 530 },
// // // // // // // // // // // // // // // // //   "Date of Issue": { x: 100, y: 510 },
// // // // // // // // // // // // // // // // //   "Date of Expiry": { x: 300, y: 510 },
// // // // // // // // // // // // // // // // //   "Issued by Country": { x: 100, y: 490 },
// // // // // // // // // // // // // // // // //   "Current Address": { x: 100, y: 460 },
// // // // // // // // // // // // // // // // //   "Residence Permit": { x: 300, y: 460 },
// // // // // // // // // // // // // // // // //   "Resident Permit Validity": { x: 100, y: 440 },
// // // // // // // // // // // // // // // // //   "Occupation": { x: 300, y: 440 },
// // // // // // // // // // // // // // // // //   "Company Address": { x: 100, y: 420 },
// // // // // // // // // // // // // // // // //   "Company Contact Number": { x: 300, y: 420 },
// // // // // // // // // // // // // // // // //   "Company Email": { x: 100, y: 400 },
// // // // // // // // // // // // // // // // //   "Purpose of Travel": { x: 300, y: 400 },
// // // // // // // // // // // // // // // // //   "Date of Travel Arrival": { x: 100, y: 370 },
// // // // // // // // // // // // // // // // //   "Date of Departure": { x: 300, y: 370 },
// // // // // // // // // // // // // // // // //   "Accommodation Required": { x: 100, y: 350 },
// // // // // // // // // // // // // // // // //   "Date": { x: 300, y: 350 },
// // // // // // // // // // // // // // // // //   "Pincode": { x: 100, y: 320 },
// // // // // // // // // // // // // // // // //   "Address": { x: 300, y: 320 },
// // // // // // // // // // // // // // // // //   "Contact Details": { x: 100, y: 300 },
// // // // // // // // // // // // // // // // //   "Attach front side of passport": { x: 100, y: 250, page: 1 },
// // // // // // // // // // // // // // // // //   "Attach back side of passport": { x: 300, y: 250, page: 1 },
// // // // // // // // // // // // // // // // //   "I agree to the collection and use of my data as outlined in the privacy consent": {x: 100,y: 230,page: 3},

// // // // // // // // // // // // // // // // // };

// // // // // // // // // // // // // // // // // export async function generateVisaPDF(templatePath: string, data: Record<string, any>) {
// // // // // // // // // // // // // // // // //   const pdfPath = path.resolve(process.cwd(), templatePath);
// // // // // // // // // // // // // // // // //   const existingPdfBytes = await fs.readFile(pdfPath);
// // // // // // // // // // // // // // // // //   const pdfDoc = await PDFDocument.load(existingPdfBytes);
// // // // // // // // // // // // // // // // //   const pages = pdfDoc.getPages();

// // // // // // // // // // // // // // // // //   const defaultFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

// // // // // // // // // // // // // // // // //   Object.entries(data).forEach(([label, value]) => {
// // // // // // // // // // // // // // // // //     const coords = coordMap[label];
// // // // // // // // // // // // // // // // //     if (!coords) {
// // // // // // // // // // // // // // // // //       console.warn(`⚠️ No coordinates defined for "${label}"`);
// // // // // // // // // // // // // // // // //       return;
// // // // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // // // //     const page = pages[coords.page ?? 0];
// // // // // // // // // // // // // // // // //     // const safeValue = String(value ?? "-");

// // // // // // // // // // // // // // // // //     let safeValue = String(value ?? "");

// // // // // // // // // // // // // // // // //     if (Array.isArray(value)) {
// // // // // // // // // // // // // // // // //       safeValue = "[Attached]";
// // // // // // // // // // // // // // // // //     }


// // // // // // // // // // // // // // // // //     page.drawText(safeValue, {
// // // // // // // // // // // // // // // // //       x: coords.x,
// // // // // // // // // // // // // // // // //       y: coords.y,
// // // // // // // // // // // // // // // // //       size: 10,
// // // // // // // // // // // // // // // // //       font: defaultFont,
// // // // // // // // // // // // // // // // //     });
// // // // // // // // // // // // // // // // //   });

// // // // // // // // // // // // // // // // //   return await pdfDoc.save();
// // // // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // // import { PDFDocument, StandardFonts } from "pdf-lib"
// // // // // // // // // // // // // // // // import fs from "fs/promises"
// // // // // // // // // // // // // // // // import path from "path"

// // // // // // // // // // // // // // // // const coordMap: Record<string, { x: number; y: number; page?: number }> = {
// // // // // // // // // // // // // // // //   "First Name": { x: 75, y: 685 },
// // // // // // // // // // // // // // // //   "Last Name": { x: 75, y: 735 },
// // // // // // // // // // // // // // // //   "Date of Birth": { x: 75, y: 660 },
// // // // // // // // // // // // // // // //   "Place of Birth": { x: 75, y: 635 },
// // // // // // // // // // // // // // // //   "Country of Birth": { x: 75, y: 610 },
// // // // // // // // // // // // // // // //   "Nationality": { x: 75, y: 585 },
// // // // // // // // // // // // // // // //   "Email Address": { x: 75, y: 135 },
// // // // // // // // // // // // // // // //   "Contact Number": { x: 75, y: 110 },
// // // // // // // // // // // // // // // //   "Gender": { x: 75, y: 510 },
// // // // // // // // // // // // // // // //   "Marital Status": { x: 75, y: 485 },
// // // // // // // // // // // // // // // //   "Passport Number": { x: 75, y: 435 },
// // // // // // // // // // // // // // // //   "Type of Passport": { x: 75, y: 410 },
// // // // // // // // // // // // // // // //   "Date of Issue": { x: 75, y: 360 },
// // // // // // // // // // // // // // // //   "Date of Expiry": { x: 75, y: 335 },
// // // // // // // // // // // // // // // //   "Issued by Country": { x: 75, y: 310 },

// // // // // // // // // // // // // // // //   "Current Address": { x: 75, y: 135, page: 2 },
// // // // // // // // // // // // // // // //   "Residence Permit": { x: 75, y: 90, page: 2 },
// // // // // // // // // // // // // // // //   "Resident Permit Validity": { x: 300, y: 485, page: 2 },
// // // // // // // // // // // // // // // //   "Occupation": { x: 300, y: 735, page: 2 },
// // // // // // // // // // // // // // // //   "Company Address": { x: 300, y: 710, page: 2 },
// // // // // // // // // // // // // // // //   "Company Contact Number": { x: 300, y: 755, page: 2 },
// // // // // // // // // // // // // // // //   "Company Email": { x: 300, y: 760, page: 2 },

// // // // // // // // // // // // // // // //   "Purpose of Travel": { x: 75, y: 735, page: 3 },
// // // // // // // // // // // // // // // //   "Date of Travel Arrival": { x: 75, y: 610, page: 3 },
// // // // // // // // // // // // // // // //   "Date of Departure": { x: 75, y: 585, page: 3 },

// // // // // // // // // // // // // // // //   "Accommodation Required": { x: 300, y: 460, page: 3 },
// // // // // // // // // // // // // // // //   "Date": { x: 300, y: 350 },
// // // // // // // // // // // // // // // //   "Pincode": { x: 100, y: 320 },
// // // // // // // // // // // // // // // //   "Address": { x: 300, y: 320 },
// // // // // // // // // // // // // // // //   "Contact Details": { x: 100, y: 300 },

// // // // // // // // // // // // // // // //   "Attach front side of passport": { x: 100, y: 250, page: 1 },
// // // // // // // // // // // // // // // //   "Attach back side of passport": { x: 300, y: 250, page: 1 },
// // // // // // // // // // // // // // // //   "I agree to the collection and use of my data as outlined in the privacy consent": { x: 100, y: 230, page: 5 },

// // // // // // // // // // // // // // // //   "Signature of applicant": { x: 400, y: 150, page: 5 },
// // // // // // // // // // // // // // // //   "Place and date": { x: 75, y: 150, page: 5 },
// // // // // // // // // // // // // // // // }

// // // // // // // // // // // // // // // // export async function generateVisaPDF(templatePath: string, data: Record<string, any>) {
// // // // // // // // // // // // // // // //   const pdfPath = path.resolve(process.cwd(), templatePath)
// // // // // // // // // // // // // // // //   const existingPdfBytes = await fs.readFile(pdfPath)
// // // // // // // // // // // // // // // //   const pdfDoc = await PDFDocument.load(existingPdfBytes)
// // // // // // // // // // // // // // // //   const pages = pdfDoc.getPages()
// // // // // // // // // // // // // // // //   const font = await pdfDoc.embedFont(StandardFonts.Helvetica)

// // // // // // // // // // // // // // // //   for (const [label, val] of Object.entries(data)) {
// // // // // // // // // // // // // // // //     const coords = coordMap[label]
// // // // // // // // // // // // // // // //     if (!coords) {
// // // // // // // // // // // // // // // //       console.warn(`⚠️ No coordinates defined for "${label}"`)
// // // // // // // // // // // // // // // //       continue
// // // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // // //     const page = pages[coords.page ?? 0]
// // // // // // // // // // // // // // // //     let value = Array.isArray(val) ? '[Attached]' : String(val ?? '')

// // // // // // // // // // // // // // // //     page.drawText(value, {
// // // // // // // // // // // // // // // //       x: coords.x,
// // // // // // // // // // // // // // // //       y: coords.y,
// // // // // // // // // // // // // // // //       size: 10,
// // // // // // // // // // // // // // // //       font,
// // // // // // // // // // // // // // // //     })
// // // // // // // // // // // // // // // //   }

// // // // // // // // // // // // // // // //   return await pdfDoc.save()
// // // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // export async function generateVisaPDF(country: string, data: Record<string, any>) {
// // // // // // // // // // // // // // //   const mappingModule = await import(`./mappings/${country}.ts`)
// // // // // // // // // // // // // // //   const coordMap = mappingModule[`${country}CoordMap`] || {}

// // // // // // // // // // // // // // //   const pdfPath = path.resolve(process.cwd(), `pdf-templates/${country}.pdf`)
// // // // // // // // // // // // // // //   const existingPdfBytes = await fs.readFile(pdfPath)
// // // // // // // // // // // // // // //   const pdfDoc = await PDFDocument.load(existingPdfBytes)
// // // // // // // // // // // // // // //   const pages = pdfDoc.getPages()
// // // // // // // // // // // // // // //   const font = await pdfDoc.embedFont(StandardFonts.Helvetica)

// // // // // // // // // // // // // // //   for (const [label, val] of Object.entries(data)) {
// // // // // // // // // // // // // // //     const coords = coordMap[label]
// // // // // // // // // // // // // // //     if (!coords) continue
// // // // // // // // // // // // // // //     const page = pages[coords.page ?? 0]
// // // // // // // // // // // // // // //     let value = Array.isArray(val) ? '[Attached]' : String(val ?? '')
// // // // // // // // // // // // // // //     page.drawText(value, { x: coords.x, y: coords.y, size: 10, font })
// // // // // // // // // // // // // // //   }

// // // // // // // // // // // // // // //   return await pdfDoc.save()
// // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // import { PDFDocument, StandardFonts } from "pdf-lib"
// // // // // // // // // // // // // // import fs from "fs/promises"
// // // // // // // // // // // // // // import path from "path"
// // // // // // // // // // // // // // import { normalizeFormDataForPDF } from './helpers'



// // // // // // // // // // // // // // export async function generateVisaPDF(country: string, data: Record<string, any>) {
// // // // // // // // // // // // // //   const countryKey = country.toLowerCase().replace(/\s+/g, '') // e.g. "Switzerland" → "switzerland"

// // // // // // // // // // // // // //   // Dynamic import of correct mapping
// // // // // // // // // // // // // //   const mappingModule = await import(`./mappings/${countryKey}.ts`)
// // // // // // // // // // // // // //   const coordMap = mappingModule[`${countryKey}CoordMap`] as Record<string, { x: number; y: number; page?: number }>

// // // // // // // // // // // // // //   const pdfPath = path.resolve(process.cwd(), `pdf-templates/${countryKey}.pdf`)
// // // // // // // // // // // // // //   const existingPdfBytes = await fs.readFile(pdfPath)
// // // // // // // // // // // // // //   const pdfDoc = await PDFDocument.load(existingPdfBytes)
// // // // // // // // // // // // // //   const pages = pdfDoc.getPages()
// // // // // // // // // // // // // //   const font = await pdfDoc.embedFont(StandardFonts.Helvetica)

// // // // // // // // // // // // // //   for (const [label, val] of Object.entries(data)) {
// // // // // // // // // // // // // //     const coords = coordMap[label]
// // // // // // // // // // // // // //     if (!coords) {
// // // // // // // // // // // // // //       console.warn(`⚠️ No coordinates defined for "${label}"`)
// // // // // // // // // // // // // //       continue
// // // // // // // // // // // // // //     }

// // // // // // // // // // // // // //     const page = pages[coords.page ?? 0]
// // // // // // // // // // // // // //     const value = Array.isArray(val) ? "[Attached]" : String(val ?? "")

// // // // // // // // // // // // // //     page.drawText(value, {
// // // // // // // // // // // // // //       x: coords.x,
// // // // // // // // // // // // // //       y: coords.y,
// // // // // // // // // // // // // //       size: 10,
// // // // // // // // // // // // // //       font,
// // // // // // // // // // // // // //     })
// // // // // // // // // // // // // //   }

// // // // // // // // // // // // // //   return await pdfDoc.save()
// // // // // // // // // // // // // // }
// // // // // // // // // // // // // import { PDFDocument, StandardFonts } from "pdf-lib"
// // // // // // // // // // // // // import fs from "fs/promises"
// // // // // // // // // // // // // import path from "path"
// // // // // // // // // // // // // import { normalizeFormDataForPDF } from './helpers'

// // // // // // // // // // // // // export async function generateVisaPDF(country: string, rawData: Record<string, any>) {
// // // // // // // // // // // // //   const countryKey = country.toLowerCase().replace(/\s+/g, '') // Normalize "Switzerland" → "switzerland"

// // // // // // // // // // // // //   // ✅ Normalize form data before drawing
// // // // // // // // // // // // //   const data = normalizeFormDataForPDF(rawData)

// // // // // // // // // // // // //   // 🔁 Dynamic import of coordinate map
// // // // // // // // // // // // //   const mappingModule = await import(`./mappings/${countryKey}.ts`)
// // // // // // // // // // // // //   const coordMap = mappingModule[`${countryKey}CoordMap`] as Record<string, { x: number; y: number; page?: number }>

// // // // // // // // // // // // //   const pdfPath = path.resolve(process.cwd(), `pdf-templates/${countryKey}.pdf`)
// // // // // // // // // // // // //   const existingPdfBytes = await fs.readFile(pdfPath)
// // // // // // // // // // // // //   const pdfDoc = await PDFDocument.load(existingPdfBytes)
// // // // // // // // // // // // //   const pages = pdfDoc.getPages()
// // // // // // // // // // // // //   const font = await pdfDoc.embedFont(StandardFonts.Helvetica)

// // // // // // // // // // // // //   const unmatched: string[] = []

// // // // // // // // // // // // //   for (const [label, val] of Object.entries(data)) {
// // // // // // // // // // // // //     const coords = coordMap[label]
// // // // // // // // // // // // //     if (!coords) {
// // // // // // // // // // // // //       unmatched.push(label)
// // // // // // // // // // // // //       continue
// // // // // // // // // // // // //     }

// // // // // // // // // // // // //     const page = pages[coords.page ?? 0]
// // // // // // // // // // // // //     const value = Array.isArray(val) ? "[Attached]" : String(val ?? "")

// // // // // // // // // // // // //     page.drawText(value, {
// // // // // // // // // // // // //       x: coords.x,
// // // // // // // // // // // // //       y: coords.y,
// // // // // // // // // // // // //       size: 10,
// // // // // // // // // // // // //       font,
// // // // // // // // // // // // //     })
// // // // // // // // // // // // //   }

// // // // // // // // // // // // //   if (unmatched.length) {
// // // // // // // // // // // // //     console.warn(`⚠️ Unmapped PDF fields for ${countryKey}:`, unmatched.join(", "))
// // // // // // // // // // // // //   }

// // // // // // // // // // // // //   return await pdfDoc.save()
// // // // // // // // // // // // // }
// // // // // // // // // // // // // File: src/lib/pdf/generate.ts

// // // // // // // // // // // // import fs from 'fs/promises'
// // // // // // // // // // // // import path from 'path'
// // // // // // // // // // // // import { PDFDocument, PDFFont, StandardFonts } from 'pdf-lib'

// // // // // // // // // // // // /**
// // // // // // // // // // // //  * Loads the PDF form template for the given country, fills all text and checkbox fields
// // // // // // // // // // // //  * whose names match keys in `data`, then flattens and returns the new PDF bytes.
// // // // // // // // // // // //  */
// // // // // // // // // // // // export async function generateVisaPDF(
// // // // // // // // // // // //   country: string,
// // // // // // // // // // // //   data: Record<string, any>
// // // // // // // // // // // // ): Promise<Uint8Array> {
// // // // // // // // // // // //   // normalize country key to match your template filenames
// // // // // // // // // // // //   const key = country.toLowerCase().replace(/\s+/g, '')
// // // // // // // // // // // //   const pdfPath = path.resolve(process.cwd(), `pdf-templates/${key}.pdf`)
// // // // // // // // // // // //   const existing = await fs.readFile(pdfPath)
// // // // // // // // // // // //   const pdfDoc = await PDFDocument.load(existing)

// // // // // // // // // // // //   // get the form so we can fill fields by name
// // // // // // // // // // // //   const form = pdfDoc.getForm()

// // // // // // // // // // // //   // loop through each provided field
// // // // // // // // // // // //   for (const [fieldName, rawValue] of Object.entries(data)) {
// // // // // // // // // // // //     const value = rawValue == null ? '' : String(rawValue)

// // // // // // // // // // // //     // try text fields first
// // // // // // // // // // // //     if (form.getTextFieldMaybe(fieldName)) {
// // // // // // // // // // // //       form.getTextField(fieldName).setText(value)
// // // // // // // // // // // //       continue
// // // // // // // // // // // //     }

// // // // // // // // // // // //     // then checkboxes (expecting boolean or "Yes"/"No")
// // // // // // // // // // // //     if (form.getCheckBoxMaybe(fieldName)) {
// // // // // // // // // // // //       const box = form.getCheckBox(fieldName)
// // // // // // // // // // // //       const truthy =
// // // // // // // // // // // //         value.toLowerCase() === 'true' ||
// // // // // // // // // // // //         value.toLowerCase() === 'yes' ||
// // // // // // // // // // // //         value === '1'
// // // // // // // // // // // //       if (truthy) box.check()
// // // // // // // // // // // //       else box.uncheck()
// // // // // // // // // // // //       continue
// // // // // // // // // // // //     }

// // // // // // // // // // // //     // and radio groups (if you have them)
// // // // // // // // // // // //     if (form.getRadioGroupMaybe(fieldName)) {
// // // // // // // // // // // //       form.getRadioGroup(fieldName).select(value)
// // // // // // // // // // // //       continue
// // // // // // // // // // // //     }

// // // // // // // // // // // //     console.warn(`⚠️ No form field named "${fieldName}" in ${key}.pdf`)
// // // // // // // // // // // //   }

// // // // // // // // // // // //   // flatten so text becomes part of the page
// // // // // // // // // // // //   form.flatten()

// // // // // // // // // // // //   return await pdfDoc.save()
// // // // // // // // // // // // }


// // // // // // // // // // // File: src/lib/pdf/generate.ts
// // // // // // // // // // import fs from 'fs/promises'
// // // // // // // // // // import path from 'path'
// // // // // // // // // // import { PDFDocument } from 'pdf-lib'

// // // // // // // // // // /**
// // // // // // // // // //  * Loads the PDF form template for `country`, fills fields by name,
// // // // // // // // // //  * flattens and returns the resulting PDF bytes.
// // // // // // // // // //  */
// // // // // // // // // // export async function generateVisaPDF(
// // // // // // // // // //   country: string,
// // // // // // // // // //   data: Record<string, any>
// // // // // // // // // // ): Promise<Uint8Array> {
// // // // // // // // // //   // normalize to your template file names
// // // // // // // // // //   const key = country.toLowerCase().replace(/\s+/g, '')
// // // // // // // // // //   const pdfPath = path.resolve(process.cwd(), `pdf-templates/${key}.pdf`)
// // // // // // // // // //   const existing = await fs.readFile(pdfPath)
// // // // // // // // // //   const pdfDoc = await PDFDocument.load(existing)

// // // // // // // // // //   const form = pdfDoc.getForm()

// // // // // // // // // //   for (const [fieldName, rawValue] of Object.entries(data)) {
// // // // // // // // // //     const value = rawValue == null ? '' : String(rawValue).trim()
// // // // // // // // // //     let filled = false

// // // // // // // // // //     // Try text field
// // // // // // // // // //     try {
// // // // // // // // // //       form.getTextField(fieldName).setText(value)
// // // // // // // // // //       filled = true
// // // // // // // // // //     } catch {
// // // // // // // // // //       // not a text field or doesn't exist
// // // // // // // // // //     }
// // // // // // // // // //     if (filled) continue

// // // // // // // // // //     // Try checkbox
// // // // // // // // // //     try {
// // // // // // // // // //       const box = form.getCheckBox(fieldName)
// // // // // // // // // //       // interpret truthy values
// // // // // // // // // //       const truthy =
// // // // // // // // // //         value.toLowerCase() === 'true' ||
// // // // // // // // // //         value.toLowerCase() === 'yes' ||
// // // // // // // // // //         value === '1'
// // // // // // // // // //       if (truthy) box.check()
// // // // // // // // // //       else box.uncheck()
// // // // // // // // // //       filled = true
// // // // // // // // // //     } catch {
// // // // // // // // // //       // not a checkbox
// // // // // // // // // //     }
// // // // // // // // // //     if (filled) continue

// // // // // // // // // //     // Try radio group
// // // // // // // // // //     try {
// // // // // // // // // //       form.getRadioGroup(fieldName).select(value)
// // // // // // // // // //       filled = true
// // // // // // // // // //     } catch {
// // // // // // // // // //       // not a radio group
// // // // // // // // // //     }
// // // // // // // // // //     if (filled) continue

// // // // // // // // // //     // Try dropdown
// // // // // // // // // //     try {
// // // // // // // // // //       form.getDropdown(fieldName).select(value)
// // // // // // // // // //       filled = true
// // // // // // // // // //     } catch {
// // // // // // // // // //       // not a dropdown
// // // // // // // // // //     }
// // // // // // // // // //     if (filled) continue

// // // // // // // // // //     console.warn(`⚠️ No form field named "${fieldName}" in ${key}.pdf`)
// // // // // // // // // //   }

// // // // // // // // // //   // flatten so the fields become part of the page content
// // // // // // // // // //   form.flatten()

// // // // // // // // // //   return await pdfDoc.save()
// // // // // // // // // // }


// // // // // // // // // // // import { PDFDocument } from 'pdf-lib'
// // // // // // // // // // // import fs from 'fs/promises'
// // // // // // // // // // // import path from 'path'

// // // // // // // // // // // const fieldMap: Record<string,string> = {
// // // // // // // // // // //   "First name":           "First name(s)",
// // // // // // // // // // //   "Last name":            "Surname (Family name)",
// // // // // // // // // // //   "Date of birth":        "Date of birth (day-month-year)",
// // // // // // // // // // //   "Place of birth":       "Place of birth",
// // // // // // // // // // //   "Passport number":      "Passport number",
// // // // // // // // // // //   "Date of issue":        "Date of issue",
// // // // // // // // // // //   "Date of expiry":       "Date of expiry",
// // // // // // // // // // //   "Home address":         "Home address", // matches Text11
// // // // // // // // // // //   "Mobile number":        "Mobile number",
// // // // // // // // // // //   "Email address":        "—no matching field—",
// // // // // // // // // // //   "Current occupation":   "Current occupation",
// // // // // // // // // // //   "Employer address":     "Employer and employer’s address and telephone number",
// // // // // // // // // // //   "Date of arrival":      "Intended date of arrival",
// // // // // // // // // // //   "Date of departure":    "Intended date of departure",
// // // // // // // // // // // }

// // // // // // // // // // // export async function generateVisaPDF(country: string, data: Record<string, any>) {
// // // // // // // // // // //   const pdfPath = path.resolve(process.cwd(), `pdf-templates/${country}.pdf`)
// // // // // // // // // // //   const existingPdfBytes = await fs.readFile(pdfPath)
// // // // // // // // // // //   const pdfDoc = await PDFDocument.load(existingPdfBytes)
// // // // // // // // // // //   const form = pdfDoc.getForm()

// // // // // // // // // // //   for (const [label, rawValue] of Object.entries(data)) {
// // // // // // // // // // //     const value = Array.isArray(rawValue) ? rawValue.join(', ') : String(rawValue ?? '')
// // // // // // // // // // //     const pdfFieldName = fieldMap[label]
// // // // // // // // // // //     if (!pdfFieldName) {
// // // // // // // // // // //       console.warn(`⚠️ No mapping for form-field "${label}"`)
// // // // // // // // // // //       continue
// // // // // // // // // // //     }

// // // // // // // // // // //     try {
// // // // // // // // // // //       const textField = form.getTextField(pdfFieldName)
// // // // // // // // // // //       textField.setText(value)
// // // // // // // // // // //     } catch (e) {
// // // // // // // // // // //       console.warn(`⚠️ PDF has no field named "${pdfFieldName}"`)
// // // // // // // // // // //     }
// // // // // // // // // // //   }

// // // // // // // // // // //   // Flatten the form so fields become regular page content:
// // // // // // // // // // //   form.flatten()
// // // // // // // // // // //   return await pdfDoc.save()
// // // // // // // // // // // }
// // // // // // // // // // src/lib/pdf/generate.ts
// // // // // // // // // import { PDFDocument } from 'pdf-lib'
// // // // // // // // // import fs from 'fs/promises'
// // // // // // // // // import path from 'path'

// // // // // // // // // /** map your lowercase/no-space keys → the *exact* PDF field names */
// // // // // // // // // const fieldMap: Record<string,string> = {
// // // // // // // // //   firstname:        'First name(s)',  
// // // // // // // // //   lastname:         'Surname (Family name)',
// // // // // // // // //   dateofbirth:      'Date of birth (day-month-year)',
// // // // // // // // //   placeofbirth:     'Place of birth',
// // // // // // // // //   passportnumber:   'Passport number',
// // // // // // // // //   dateofissue:      'Date of issue',
// // // // // // // // //   dateofexpiry:     'Date of expiry',
// // // // // // // // //   homeaddress:      'Home address',
// // // // // // // // //   mobilenumber:     'Mobile number',
// // // // // // // // //   emailaddress:     'Email address',
// // // // // // // // //   currentoccupation:'Current occupation',
// // // // // // // // //   employeraddress:  'Employer and employer’s address and telephone number',
// // // // // // // // //   dateofarrival:    'Intended date of arrival of the first intended stay in the Schengen area',
// // // // // // // // //   dateofdeparture:  'Intended date of departure from the Schengen area after the first intended stay',
// // // // // // // // // }

// // // // // // // // // export async function generateVisaPDF(countryKey: string, data: Record<string,any>) {
// // // // // // // // //   const pdfPath = path.resolve(process.cwd(), `pdf-templates/${countryKey}.pdf`)
// // // // // // // // //   const bytes   = await fs.readFile(pdfPath)
// // // // // // // // //   const pdf     = await PDFDocument.load(bytes)
// // // // // // // // //   const form    = pdf.getForm()

// // // // // // // // //   for (const [key, raw] of Object.entries(data)) {
// // // // // // // // //     const pdfName = fieldMap[key]
// // // // // // // // //     if (!pdfName) {
// // // // // // // // //       console.warn(`⚠️ no fieldMap entry for "${key}"`)
// // // // // // // // //       continue
// // // // // // // // //     }

// // // // // // // // //     try {
// // // // // // // // //       const txt = form.getTextField(pdfName)
// // // // // // // // //       txt.setText(String(raw ?? ''))
// // // // // // // // //     } catch {
// // // // // // // // //       console.warn(`⚠️ PDF has no form-field named "${pdfName}"`)
// // // // // // // // //     }
// // // // // // // // //   }

// // // // // // // // //   form.flatten()
// // // // // // // // //   return pdf.save()
// // // // // // // // // }

// // // // // // // // import { PDFDocument } from 'pdf-lib'
// // // // // // // // import fs from 'fs/promises'
// // // // // // // // import path from 'path'

// // // // // // // // // 1. map your incoming keys → the exact PDF form-field names
// // // // // // // // const textFieldMap: Record<string,string> = {
// // // // // // // //   surname:           'Surname (Family name)',
// // // // // // // //   firstname:         'First name(s)',
// // // // // // // //   dateofbirth:       'Date of birth (day-month-year)',
// // // // // // // //   placeofbirth:      'Place of birth',
// // // // // // // //   passportnumber:    'Passport number',
// // // // // // // //   dateofissue:       'Date of issue',
// // // // // // // //   dateofexpiry:      'Valid until', // or 'Date of expiry' if that's the actual label
// // // // // // // //   homeaddress:       'Applicant’s home address and e-mail address', 
// // // // // // // //   mobileaddress:     'Telephone no.',
// // // // // // // //   emailaddress:      'Applicant’s home address and e-mail address',
// // // // // // // //   currentoccupation: 'Current occupation',
// // // // // // // //   employeraddress:   'Employer and employer’s address and telephone number',
// // // // // // // //   dateofarrival:     'Intended date of arrival of the first intended stay in the Schengen area',
// // // // // // // //   dateofdeparture:   'Intended date of departure from the Schengen area after the first intended stay',
// // // // // // // // }

// // // // // // // // // 2. if you have any checkboxes, map your keys → their PDF names
// // // // // // // // const checkboxMap: Record<string,string> = {
// // // // // // // //   // example: isMinor: 'Parental authority (in case of minors)',
// // // // // // // //   // sponsorPays: 'Cost of travelling and living… by a sponsor (host, company, organisation)',
// // // // // // // // }

// // // // // // // // export async function generateVisaPDF(countryKey: string, data: Record<string,any>) {
// // // // // // // //   const pdfPath = path.resolve(process.cwd(), `pdf-templates/${countryKey}.pdf`)
// // // // // // // //   const bytes   = await fs.readFile(pdfPath)
// // // // // // // //   const pdf     = await PDFDocument.load(bytes)
// // // // // // // //   const form    = pdf.getForm()

// // // // // // // //   for (const [key, rawValue] of Object.entries(data)) {
// // // // // // // //     const value = rawValue == null ? '' : String(rawValue)

// // // // // // // //     // 2a. Text fields
// // // // // // // //     if (key in textFieldMap) {
// // // // // // // //       const name = textFieldMap[key]
// // // // // // // //       try {
// // // // // // // //         form.getTextField(name).setText(value)
// // // // // // // //       } catch {
// // // // // // // //         console.warn(`⚠️ PDF has no text-field named "${name}"`)
// // // // // // // //       }
// // // // // // // //       continue
// // // // // // // //     }

// // // // // // // //     // 2b. Checkboxes
// // // // // // // //     if (key in checkboxMap) {
// // // // // // // //       const name = checkboxMap[key]
// // // // // // // //       try {
// // // // // // // //         const box = form.getCheckBox(name)
// // // // // // // //         // treat truthy string/boolean as “checked”
// // // // // // // //         if (value === 'true' || value === 'on' || value === '1') {
// // // // // // // //           box.check()
// // // // // // // //         } else {
// // // // // // // //           box.uncheck()
// // // // // // // //         }
// // // // // // // //       } catch {
// // // // // // // //         console.warn(`⚠️ PDF has no checkbox named "${name}"`)
// // // // // // // //       }
// // // // // // // //       continue
// // // // // // // //     }

// // // // // // // //     console.warn(`⚠️ No mapping for incoming key "${key}"`)
// // // // // // // //   }

// // // // // // // //   form.flatten()
// // // // // // // //   return pdf.save()
// // // // // // // // }


// // // // // // // // 2. Update your generate.ts to import and use this JSON:
// // // // // // // //    Path: src/lib/pdf/generate.ts

// // // // // // // import { PDFDocument } from 'pdf-lib';
// // // // // // // import fs from 'fs/promises';
// // // // // // // import path from 'path';

// // // // // // // // Import the JSON mapping
// // // // // // // import fieldsJson from './fields.json';

// // // // // // // type FieldDef = { name: string; type: 'text' | 'checkbox' };
// // // // // // // const FORM_FIELDS: FieldDef[] = (fieldsJson.fields as FieldDef[]);

// // // // // // // export async function generateVisaPDF(
// // // // // // //   countryKey: string,
// // // // // // //   data: Record<string, any>
// // // // // // // ) {
// // // // // // //   // load template
// // // // // // //   const pdfPath = path.resolve(process.cwd(), `pdf-templates/${countryKey}.pdf`);
// // // // // // //   const existingPdfBytes = await fs.readFile(pdfPath);
// // // // // // //   const pdfDoc = await PDFDocument.load(existingPdfBytes);
// // // // // // //   const form = pdfDoc.getForm();

// // // // // // //   // iterate over every declared field
// // // // // // //   for (const { name, type } of FORM_FIELDS) {
// // // // // // //     const value = data[name];
// // // // // // //     if (value == null) continue;

// // // // // // //     try {
// // // // // // //       if (type === 'text') {
// // // // // // //         const field = form.getTextField(name);
// // // // // // //         field.setText(String(value));
// // // // // // //       } else {
// // // // // // //         const field = form.getCheckBox(name);
// // // // // // //         value ? field.check() : field.uncheck();
// // // // // // //       }
// // // // // // //     } catch (e) {
// // // // // // //       console.warn(`⚠️ PDF has no form field named "${name}"`);
// // // // // // //     }
// // // // // // //   }

// // // // // // //   form.flatten();
// // // // // // //   return await pdfDoc.save();
// // // // // // // }

// // // // // // import { PDFDocument, StandardFonts } from 'pdf-lib'
// // // // // // import fs from 'fs/promises'
// // // // // // import path from 'path'
// // // // // // import fieldsConfig from './fields.json'  // ← our new file

// // // // // // export async function generateVisaPDF(countryKey: string, data: Record<string, any>) {
// // // // // //   // load the template…
// // // // // //   const pdfPath = path.resolve(process.cwd(), `pdf-templates/${countryKey}.pdf`)
// // // // // //   const existingPdfBytes = await fs.readFile(pdfPath)
// // // // // //   const pdfDoc = await PDFDocument.load(existingPdfBytes)
// // // // // //   const form = pdfDoc.getForm()
// // // // // //   const font = await pdfDoc.embedFont(StandardFonts.Helvetica)

// // // // // //   // fill every field from our JSON
// // // // // //   for (const { name, type } of fieldsConfig.fields) {
// // // // // //     const value = data[name] ?? ''
// // // // // //     if (type === 'text') {
// // // // // //       // will throw if the field really doesn't exist
// // // // // //       const tf = form.getTextField(name)
// // // // // //       tf.setFont(font)
// // // // // //       tf.setFontSize(10)
// // // // // //       tf.setText(String(value))
// // // // // //     }
// // // // // //     else if (type === 'checkbox') {
// // // // // //       const cb = form.getCheckBox(name)
// // // // // //       if (value) cb.check()
// // // // // //       else       cb.uncheck()
// // // // // //     }
// // // // // //   }

// // // // // //   // flatten & return
// // // // // //   form.flatten()
// // // // // //   return await pdfDoc.save()
// // // // // // }


// // // // // // src/lib/pdf/generate.ts
// // // // // import { PDFDocument, StandardFonts } from 'pdf-lib'
// // // // // import fieldsConfig from './fields.json'

// // // // // export async function generateVisaPDF(countryKey: string, data: Record<string, any>) {
// // // // //   // … load your PDF template into `pdfDoc` …
// // // // //   const pdfDoc = await PDFDocument.load(existingPdfBytes)
// // // // //   const form = pdfDoc.getForm()

// // // // //   // 1. Embed your font once…
// // // // //   const font = await pdfDoc.embedFont(StandardFonts.Helvetica)
// // // // //   // …and apply it to all fields so appearances get updated
// // // // //   form.updateFieldAppearances(font)

// // // // //   // 2. Loop through your JSON field list…
// // // // //   for (const { name, type } of fieldsConfig.fields) {
// // // // //     try {
// // // // //       if (type === 'text') {
// // // // //         const tf = form.getTextField(name)
// // // // //         tf.setFontSize(10)
// // // // //         tf.setText(String(data[name] ?? ''))
// // // // //       } else if (type === 'checkbox') {
// // // // //         const cb = form.getCheckBox(name)
// // // // //         data[name] ? cb.check() : cb.uncheck()
// // // // //       }
// // // // //     } catch (err: any) {
// // // // //       // 3. Warn on missing/mismatched fields but keep going
// // // // //       console.warn(`⚠️ Could not fill field "${name}": ${err.message}`)
// // // // //     }
// // // // //   }

// // // // //   form.flatten()
// // // // //   return await pdfDoc.save()
// // // // // }


// // // // import { PDFDocument, StandardFonts } from 'pdf-lib'
// // // // import fs from 'fs/promises'
// // // // import path from 'path'
// // // // import fieldsConfig from './fields.json'

// // // // export async function generateVisaPDF(countryKey: string, data: Record<string, any>) {
// // // //   // 1️⃣ Read the raw PDF bytes from your template folder
// // // //   const pdfPath = path.resolve(process.cwd(), `pdf-templates/${countryKey}.pdf`)
// // // //   const existingPdfBytes = await fs.readFile(pdfPath)

// // // //   // 2️⃣ Load into PDFDocument
// // // //   const pdfDoc = await PDFDocument.load(existingPdfBytes)
// // // //   const form = pdfDoc.getForm()

// // // //   // 3️⃣ Embed & apply your font globally
// // // //   const font = await pdfDoc.embedFont(StandardFonts.Helvetica)
// // // //   form.updateFieldAppearances(font)

// // // //   // 4️⃣ Loop over your JSON-defined fields (text & checkbox)
// // // //   for (const { name, type } of fieldsConfig.fields) {
// // // //     try {
// // // //       if (type === 'text') {
// // // //         const tf = form.getTextField(name)
// // // //         tf.setFontSize(10)
// // // //         tf.setText(String(data[name] ?? ''))
// // // //       } else if (type === 'checkbox') {
// // // //         const cb = form.getCheckBox(name)
// // // //         data[name] ? cb.check() : cb.uncheck()
// // // //       }
// // // //     } catch (err: any) {
// // // //       console.warn(`⚠️ Could not fill field "${name}": ${err.message}`)
// // // //     }
// // // //   }

// // // //   form.flatten()
// // // //   return await pdfDoc.save()
// // // // }


// // // import { PDFDocument, StandardFonts } from 'pdf-lib'
// // // import fs from 'fs/promises'
// // // import path from 'path'
// // // import fieldsConfig from './fields.json'

// // // export async function generateVisaPDF(countryKey: string, data: Record<string, any>) {
// // //   // load template bytes
// // //   const pdfPath = path.resolve(process.cwd(), `pdf-templates/${countryKey}.pdf`)
// // //   const existingPdfBytes = await fs.readFile(pdfPath)

// // //   // load and get form
// // //   const pdfDoc = await PDFDocument.load(existingPdfBytes)
// // //   const form = pdfDoc.getForm()

// // //   // embed a font and update appearances
// // //   const font = await pdfDoc.embedFont(StandardFonts.Helvetica)
// // //   form.updateFieldAppearances(font)

// // //   // fill each field defined in fields.json
// // //   for (const { name, pdfName, type } of fieldsConfig.fields) {
// // //     try {
// // //       if (type === 'text') {
// // //         const tf = form.getTextField(pdfName)
// // //         tf.setFontSize(10)
// // //         tf.setText(String(data[name] ?? ''))
// // //       } else { // checkbox
// // //         const cb = form.getCheckBox(pdfName)
// // //         data[name] ? cb.check() : cb.uncheck()
// // //       }
// // //     } catch (err: any) {
// // //       console.warn(`⚠️ Could not fill field "${name}" (pdf field "${pdfName}"): ${err.message}`)
// // //       // do not re-throw—just log and continue
// // //     }
// // //   }

// // //   // flatten in a safe way
// // //   try {
// // //     form.flatten()
// // //   } catch (err: any) {
// // //     console.warn(`⚠️ flatten() failed: ${err.message}`)
// // //   }

// // //   return pdfDoc.save()
// // // }


// // import { PDFDocument, StandardFonts } from 'pdf-lib'
// // import fs from 'fs/promises'
// // import path from 'path'
// // import fieldsConfig from './fields.json'

// // export async function generateVisaPDF(countryKey: string, data: Record<string, any>) {
// //   // 1. load your template
// //   const pdfPath = path.resolve(process.cwd(), `pdf-templates/${countryKey}.pdf`)
// //   const existingPdfBytes = await fs.readFile(pdfPath)
// //   const pdfDoc = await PDFDocument.load(existingPdfBytes)

// //   // 2. grab the AcroForm
// //   const form = pdfDoc.getForm()

// //   // 🛠️ DEBUG: list every field name in the PDF
// //   console.log(
// //     '🔍 Detected PDF form fields:',
// //     form.getFields().map(f => f.getName())
// //   )

// //   // 3. embed font & update appearances
// //   const font = await pdfDoc.embedFont(StandardFonts.Helvetica)
// //   form.updateFieldAppearances(font)

// //   // 4. fill per your JSON mapping, but never throw on missing
// //   for (const { name, pdfName, type } of fieldsConfig.fields) {
// //     try {
// //       if (type === 'text') {
// //         const tf = form.getTextField(pdfName)
// //         tf.setFontSize(10)
// //         tf.setText(String(data[name] ?? ''))
// //       } else {
// //         const cb = form.getCheckBox(pdfName)
// //         data[name] ? cb.check() : cb.uncheck()
// //       }
// //     } catch (e: any) {
// //       console.warn(
// //         `⚠️ Could not fill field "${name}" (pdf name="${pdfName}"): ${e.message}`
// //       )
// //     }
// //   }

// //   // 5. flatten in a safe way
// //   try {
// //     form.flatten()
// //   } catch (e: any) {
// //     console.warn(`⚠️ flatten() failed: ${e.message}`)
// //   }

// //   return pdfDoc.save()
// // }



// import fieldsConfig from '@/lib/pdf/fields.json'
// import { PDFDocument, StandardFonts } from 'pdf-lib'
// import fs from 'fs/promises'
// import path from 'path'

// export async function generateVisaPDF(countryKey: string, data: Record<string, any>) {
//   const pdfPath = path.resolve(process.cwd(), `pdf-templates/${countryKey}.pdf`)
//   const existingPdfBytes = await fs.readFile(pdfPath)
//   const pdfDoc = await PDFDocument.load(existingPdfBytes)
//   const form   = pdfDoc.getForm()

//   // DEBUG: dump all actual PDF form-field names
//   console.log(
//     '🔍 Detected PDF form fields:',
//     form.getFields().map(f => f.getName())
//   )

//   // embed font & refresh appearances
//   const font = await pdfDoc.embedFont(StandardFonts.Helvetica)
//   form.updateFieldAppearances(font)

//   for (const { name, pdfName, type } of fieldsConfig.fields) {
//     try {
//       if (type === 'text') {
//         const tf = form.getTextField(pdfName)
//         tf.setFont(font)
//         tf.setFontSize(10)
//         tf.setText(String(data[name] ?? ''))
//       } else {
//         const cb = form.getCheckBox(pdfName)
//         data[name] ? cb.check() : cb.uncheck()
//       }
//     } catch (err: any) {
//       console.warn(`⚠️ Could not fill "${name}"→"${pdfName}": ${err.message}`)
//     }
//   }

//   try {
//     form.flatten()
//   } catch (err: any) {
//     console.warn(`⚠️ flatten() failed: ${err.message}`)
//   }

//   return pdfDoc.save()
// }



// src/lib/pdf/generate.ts
import { loadMapping, CountryMapping } from '@/lib/pdf/fieldMappings'
import { PDFDocument, StandardFonts } from 'pdf-lib'
import fs from 'fs/promises'
import path from 'path'

export async function generateVisaPDF(countryKey: string, data: Record<string, any>) {
  // 1) Load & parse the PDF template
  const pdfPath = path.resolve(process.cwd(), `pdf-templates/${countryKey}.pdf`)
  const existingPdfBytes = await fs.readFile(pdfPath)
  const pdfDoc = await PDFDocument.load(existingPdfBytes)
  const form   = pdfDoc.getForm()

  // DEBUG: dump all actual PDF form-field names
  console.log(
    '🔍 Detected PDF form fields:',
    form.getFields().map(f => f.getName())
  )

  // 2) Embed a font and update appearances
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica)
  form.updateFieldAppearances(font)

  // 3) Load the mapping for this country
  const mapping: CountryMapping = await loadMapping(countryKey.toLowerCase())

  // 4) Fill all text fields
  for (const [key, pdfNames] of Object.entries(mapping.textFields)) {
    const val = data[key]
    if (val != null) {
      for (const pdfName of pdfNames) {
        try {
          const tf = form.getTextField(pdfName)
          tf.setText(String(val))
        } catch (err: any) {
          console.warn(`⚠️ Could not fill text field "${pdfName}" from data["${key}"]: ${err.message}`)
        }
      }
    }
  }

  // 5) Check any checkboxes / radios
  if (mapping.checkboxFields) {
    for (const [key, optionMap] of Object.entries(mapping.checkboxFields)) {
      const sel = data[key]
      const fieldName = optionMap[sel]
      if (fieldName) {
        try {
          form.getCheckBox(fieldName).check()
        } catch (err: any) {
          console.warn(`⚠️ Could not check field "${fieldName}" for data["${key}"]="${sel}": ${err.message}`)
        }
      }
    }
  }

  // 6) Flatten and save
  try {
    form.flatten()
  } catch (err: any) {
    console.warn(`⚠️ flatten() failed: ${err.message}`)
  }

  return pdfDoc.save()
}
