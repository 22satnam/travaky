import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function POST(req: NextRequest) {
  try {
    const { paymentId } = await req.json()

    const { error } = await supabase
      .from('visa_applications')
      .update({ status: 'paid' })
      .eq('session_id', paymentId)

    if (error) {
      console.error('❌ Failed to mark paid:', error)
      return NextResponse.json({ success: false, error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    return NextResponse.json({ success: false, error: 'Server Error' }, { status: 500 })
  }
}
