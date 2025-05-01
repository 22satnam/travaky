
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
