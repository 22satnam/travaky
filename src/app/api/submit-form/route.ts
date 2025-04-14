// app/api/submit-form/route.ts
import { NextRequest, NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"
import { randomUUID } from "crypto"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export async function POST(req: NextRequest) {
  try {
    const formData = await req.json()

    const sessionId = randomUUID()

    const { error } = await supabase.from("visa_applications").insert({
      session_id: sessionId,
      ...formData,
    })

    if (error) {
      console.error("Supabase insert error:", error)
      return NextResponse.json({ error: "Failed to submit application" }, { status: 500 })
    }

    return NextResponse.json({ sessionId })
  } catch (err) {
    console.error("Form submit error:", err)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}
