import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET() {
  const file = Buffer.from("Hello Supabase");
  const { error } = await supabase.storage
    .from("filled-visas")
    .upload("visas/test-upload.txt", file, {
      contentType: "text/plain",
      upsert: true,
    });

  if (error) {
    console.error("❌ Upload failed:", error);
    return NextResponse.json({ error }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
