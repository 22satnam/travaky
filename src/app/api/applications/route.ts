// import { NextResponse } from 'next/server'
// import { getUser } from '@/lib/auth'
// import { db } from '@/lib/db'

// export async function GET(req: Request) {
//   const user = await getUser()
//   if (!user) return NextResponse.json({ error: 'unauthorized' }, { status: 401 })

//   const url = new URL(req.url)
//   const status = url.searchParams.get('status')   // optional filter

//   let query = db.from('applications').select('*').eq('user_id', user.id).order('created_at', { ascending: false })
//   if (status) query = query.eq('status', status)

//   const { data, error } = await query
//   if (error) return NextResponse.json({ error: error.message }, { status: 500 })
//   return NextResponse.json(data)
// }

import { NextResponse } from 'next/server'
import { getUser } from '@/lib/auth'
import { db } from '@/lib/db'

// GET /api/applications  -> returns current user's applications + steps
export async function GET(req: Request) {
  const user = await getUser(req)
  if (!user) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 })
  }

  const { data, error } = await db
    .from('applications')
    .select('*, application_steps(*)')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
  return NextResponse.json({ applications: data ?? [] })
}
