import { createClient } from '@supabase/supabase-js'
import { NextRequest, NextResponse } from 'next/server'
import { randomUUID } from 'crypto'

export async function POST(req:NextRequest){
  const form = await req.formData()
  const file = form.get('file') as File
  const bookingId = Number(form.get('bookingId'))
  const label     = form.get('label') as string

  const supa = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )

  const key = `manual/${randomUUID()}.pdf`
  const { error:upErr } = await supa.storage
    .from('filled-visas')
    .upload(key, Buffer.from(await file.arrayBuffer()), {
      contentType:'application/pdf', upsert:false
    })
  if (upErr) return NextResponse.json({error:'upload failed'},{status:500})

  const { data:urlData } = supa.storage.from('filled-visas').getPublicUrl(key)

  await supa.from('user_documents').insert({
    booking_id: bookingId,
    label,
    pdf_url  : urlData.publicUrl
  })

  /* 🔔  notify traveller */
  await fetch(process.env.APP_URL + '/api/send-email',{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({
      email   : form.get('userEmail'),
      name    : form.get('userName'),
      country : form.get('country'),
      sessionId: bookingId,
      pdfUrl  : urlData.publicUrl
    })
  })

  return NextResponse.json({ok:true})
}
