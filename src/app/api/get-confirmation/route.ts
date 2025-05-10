// import { createClient } from '@supabase/supabase-js'
// import { NextRequest, NextResponse } from 'next/server'

// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//   process.env.SUPABASE_SERVICE_ROLE_KEY!
// )

// export async function GET(req: NextRequest) {
//   const { searchParams } = new URL(req.url)
//   const id = searchParams.get('id')

//   if (!id) {
//     return NextResponse.json({ error: 'Missing payment ID' }, { status: 400 })
//   }

//   const { data, error } = await supabase
//     .from('visa_applications')
//     .select('*')
//     .eq('session_id', id)
//     .single()

//   if (error || !data) {
//     return NextResponse.json({ error: 'Not found' }, { status: 404 })
//   }

//   return NextResponse.json({ success: true, data })
// }


import { createClient } from '@supabase/supabase-js'
import { NextRequest, NextResponse } from 'next/server'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get('id')

  if (!id) {
    return NextResponse.json({ error: 'Missing session id' }, { status: 400 })
  }

  const { data, error } = await supabase
    .from('visa_applications')
    .select('*')
    .eq('session_id', id)
    .single()

  if (error || !data) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }

  return NextResponse.json({ success: true, data })
}
