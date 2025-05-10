// // import { PDFDocument, rgb, StandardFonts } from 'pdf-lib'
// // import fs from 'fs/promises'
// // import path from 'path'

// // export async function generateInvoicePDF(data:{
// //   invoiceNo:string; date:string; name:string;
// //   travelers:number; service:string;
// //   appointmentFees:number; travakyFees:number;
// // }) {
// //   const templateBytes = await fs.readFile(
// //     path.join(process.cwd(), 'pdf-templates', 'invoice-template.pdf')
// //   )
// //   const pdfDoc = await PDFDocument.load(templateBytes)
// //   const page   = pdfDoc.getPages()[0]
// //   const font   = await pdfDoc.embedFont(StandardFonts.Helvetica)

// //   const draw = (text:string, x:number, y:number)=>{
// //     page.drawText(text, { x, y, size:11, font, color: rgb(0,0,0) })
// //   }

// //   /* fill placeholders (coordinates measured once) */
// //   draw(data.invoiceNo, 445, 680)
// //   draw(data.date,      445, 660)
// //   draw(data.name,      445, 605)

// //   draw(String(data.travelers), 85, 505)
// //   draw(data.service,           150,505)
// //   draw(`₹ ${data.appointmentFees.toLocaleString()}/-`,280,505)
// //   draw(`₹ ${data.travakyFees.toLocaleString()}/-`,385,505)
// //   draw(`₹ ${(data.appointmentFees+data.travakyFees).toLocaleString()}/-`,465,505)

// //   /* subtotal / total */
// //   draw(`₹ ${(data.appointmentFees+data.travakyFees).toLocaleString()}/-`,465,465)
// //   draw(`₹ ${(data.appointmentFees+data.travakyFees).toLocaleString()}/-`,465,425)

// //   return await pdfDoc.save()            // returns Uint8Array
// // }


// import { PDFDocument, rgb } from 'pdf-lib'
// import fontkit from '@pdf-lib/fontkit'
// import fs from 'fs/promises'
// import path from 'path'

// export async function generateInvoicePDF(data:{ … }) {
//   const template = await fs.readFile(path.join(process.cwd(),'pdf-templates/invoice-template.pdf'))
//   const montReg  = await fs.readFile(path.join(process.cwd(),'fonts/Montserrat-Regular.ttf'))
//   const montBold = await fs.readFile(path.join(process.cwd(),'fonts/Montserrat-Bold.ttf'))
//   const popMed   = await fs.readFile(path.join(process.cwd(),'fonts/Poppins-Medium.ttf'))

//   const pdf      = await PDFDocument.load(template)
//   pdf.registerFontkit(fontkit)

//   const fMontReg = await pdf.embedFont(montReg)
//   const fMontBold= await pdf.embedFont(montBold)
//   const fPopMed  = await pdf.embedFont(popMed)

//   const page = pdf.getPages()[0]
//   const black = rgb(0,0,0)

//   const draw = (text:string,x:number,y:number,font=fMontReg,size=11)=>
//       page.drawText(text,{x,y,size,font,color:black})

//   /* header */
//   draw(data.invoiceNo, 445,680,fMontBold)
//   draw(data.date,      445,660,fMontReg)
//   draw(data.name,      445,605,fMontBold,12)

//   /* table row */
//   draw(String(data.travelers),85,505,fMontReg)
//   draw(data.service,150,505,fPopMed)
//   draw(`₹ ${data.appointmentFees.toLocaleString()}/-`,280,505,fMontReg)
//   draw(`₹ ${data.travakyFees.toLocaleString()}/-`,385,505,fMontReg)
//   const total = data.appointmentFees+data.travakyFees
//   draw(`₹ ${total.toLocaleString()}/-`,465,505,fMontReg)

//   /* subtotal / total */
//   draw(`₹ ${total.toLocaleString()}/-`,465,465,fMontReg)
//   draw(`₹ ${total.toLocaleString()}/-`,465,425,fMontBold)

//   return pdf.save()
// }


import { PDFDocument, rgb } from 'pdf-lib'
import fontkit from '@pdf-lib/fontkit'
import fs from 'fs/promises'
import path from 'path'

/* ------------------------------------------------------------------ */
/*  Type describing the data we need to print on the invoice          */
export interface InvoicePayload {
  invoiceNo: string
  date: string
  name: string
  travelers: number
  service: string
  appointmentFees: number
  travakyFees: number
}
/* ------------------------------------------------------------------ */

export async function generateInvoicePDF(data: InvoicePayload) {
  /* -- load template PDF and font files ---------------------------- */
  const templateBytes = await fs.readFile(
    path.join(process.cwd(), 'pdf-templates', 'invoice-template.pdf')
  )
  const montRegBytes  = await fs.readFile(
    path.join(process.cwd(), 'fonts', 'Montserrat-Regular.ttf')
  )
  const montBoldBytes = await fs.readFile(
    path.join(process.cwd(), 'fonts', 'Montserrat-Bold.ttf')
  )
  const popMedBytes   = await fs.readFile(
    path.join(process.cwd(), 'fonts', 'Poppins-Medium.ttf')
  )

  /* -- set up pdf-lib ---------------------------------------------- */
  const pdfDoc = await PDFDocument.load(templateBytes)
  pdfDoc.registerFontkit(fontkit)

  const fontMontReg  = await pdfDoc.embedFont(montRegBytes)
  const fontMontBold = await pdfDoc.embedFont(montBoldBytes)
  const fontPopMed   = await pdfDoc.embedFont(popMedBytes)

  const page = pdfDoc.getPages()[0]
  const black = rgb(0, 0, 0)

  /* helper */
  const draw = (
    text: string,
    x: number,
    y: number,
    font = fontMontReg,
    size = 11
  ) => {
    page.drawText(text, { x, y, size, font, color: black })
  }

  /* -- header ------------------------------------------------------- */
  draw(data.invoiceNo, 445, 680, fontMontBold)
  draw(data.date,      445, 660)
  draw(data.name,      445, 605, fontMontBold, 12)

  /* -- table row ---------------------------------------------------- */
  draw(String(data.travelers), 85, 505)                   // No. of Travellers
  draw(data.service,           150,505, fontPopMed)       // Service
  draw(`₹ ${data.appointmentFees.toLocaleString()}/-`, 280,505)
  draw(`₹ ${data.travakyFees.toLocaleString()}/-`,    385,505)
  const total = data.appointmentFees + data.travakyFees
  draw(`₹ ${total.toLocaleString()}/-`, 465,505)

  /* -- totals ------------------------------------------------------- */
  draw(`₹ ${total.toLocaleString()}/-`, 465,465)          // SUBTOTAL
  draw(`₹ ${total.toLocaleString()}/-`, 465,425, fontMontBold)

  return await pdfDoc.save()   // Uint8Array
}
