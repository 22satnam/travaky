// // lib/pdf/generate.ts
// import fs from "fs/promises"
// import path from "path"
// import { PDFDocument, rgb, StandardFonts } from "pdf-lib"

// export async function generateVisaPDF(templatePath: string, formData: any) {
//   const filePath = path.join(process.cwd(), templatePath)
//   const templateBytes = await fs.readFile(filePath)

//   const pdfDoc = await PDFDocument.load(templateBytes)
//   const pages = pdfDoc.getPages()
//   const page = pages[0]
//   const font = await pdfDoc.embedFont(StandardFonts.Helvetica)

//   const drawText = (text: string, x: number, y: number) => {
//     page.drawText(text || '', {
//       x,
//       y,
//       size: 12,
//       font,
//       color: rgb(0, 0, 0),
//     })
//   }

//   // Example values (adjust these based on your country-specific template)
//   drawText(formData.firstName, 80, 700)
//   drawText(formData.lastName, 280, 700)
//   drawText(formData.email, 80, 680)
//   drawText(formData.phone, 280, 680)
//   drawText(formData.passportNumber, 80, 660)
//   drawText(formData.country, 280, 660)
//   drawText(formData.appointmentDate, 80, 640)
//   drawText(formData.appointmentTime, 280, 640)

//   const pdfBytes = await pdfDoc.save()

//   return Buffer.from(pdfBytes)
// }
import { PDFDocument } from "pdf-lib";
import fs from "fs/promises";
import path from "path";

export async function generateVisaPDF(templatePath: string, data: Record<string, any>) {
  const filePath = path.resolve(process.cwd(), templatePath);
  const existingPdfBytes = await fs.readFile(filePath);
  const pdfDoc = await PDFDocument.load(existingPdfBytes);

  const form = pdfDoc.getForm();

  // Assuming form field names match the data keys
  Object.keys(data).forEach((key) => {
    try {
      const field = form.getTextField(key);
      field.setText(data[key]);
    } catch (err) {
      console.warn(`Field "${key}" not found in PDF.`);
    }
  });

  form.flatten();
  return await pdfDoc.save();
}
