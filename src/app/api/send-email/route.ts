// app/api/send-email/route.ts
import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const { email, name, sessionId, pdfUrl, country } = await req.json()

    const response = await resend.emails.send({
      from: "Travaky <noreply@travaky.com>",
      to: [email],
      subject: `Your ${country} Visa Application Confirmation` || "Visa Confirmation",
      html: `
        <div>
          <h2>Hi ${name},</h2>
          <p>Your visa application for <strong>${country}</strong> has been submitted successfully.</p>
          <p>You can download your filled form here:</p>
          <a href="${pdfUrl}">${pdfUrl}</a>
          <p>Session ID: ${sessionId}</p>
          <p>Thank you for choosing Travaky!</p>
        </div>
      `,
    })

    if (response.error) throw response.error

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Email send error:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
