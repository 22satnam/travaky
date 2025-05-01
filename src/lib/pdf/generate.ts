
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
