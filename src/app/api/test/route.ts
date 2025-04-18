import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const bodyText = await req.text(); // safer fallback
    console.log("🔥 RAW Request Body:", bodyText);

    const data = JSON.parse(bodyText);
    console.log("📦 Parsed Payload:", data);

    return NextResponse.json({ message: "success", data });
  } catch (err) {
    console.error("❌ ERROR in /api/test:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
