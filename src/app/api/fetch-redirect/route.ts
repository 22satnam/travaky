import { NextRequest, NextResponse } from 'next/server'
import { getRedirectDataByEmailAndPaymentId } from '@/lib/supabase/db' // mock this function for now

export async function POST(req: NextRequest) {
  const { email, paymentId } = await req.json()

  const redirect = await getRedirectDataByEmailAndPaymentId(email, paymentId)

  if (!redirect) {
    return NextResponse.json({ success: false })
  }

  return NextResponse.json({ redirect })
}
