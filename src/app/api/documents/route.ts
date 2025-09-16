import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { verify } from 'jsonwebtoken'
import { supabaseServer } from '@/lib/supabase/server'

export async function GET(req: Request) {
  try {
    // Get user from JWT token
    const cookieStore = await cookies()
    const token = cookieStore.get('token')?.value
    if (!token) {
      if (process.env.NODE_ENV !== 'production') {
        // Dev fallback: return empty list so UI can render
        return NextResponse.json([])
      }
      return NextResponse.json({ error: 'unauthorized' }, { status: 401 })
    }

    const { id: userId } = verify(token, process.env.JWT_SECRET!) as { id: number }

    // Query user_documents table (documents uploaded by users)
    const supabase = supabaseServer(true)
    
    // Get user's visa applications with their PDF URLs (these are the main documents)
    const { data: applications, error: appError } = await supabase
      .from('visa_applications')
      .select(`
        id,
        country,
        pdf_url,
        pdfs,
        traveler_data,
        created_at,
        reference_id,
        status
      `)
      .eq('user_id', userId)
      .order('created_at', { ascending: false })

    if (appError) {
      console.log('Error fetching user applications:', appError)
      console.log('User ID:', userId)
      return NextResponse.json({ error: appError.message }, { status: 500 })
    }

    console.log('Found applications for user:', applications?.length || 0)
    
    // Transform applications into documents (each application has a PDF)
    const applicationDocuments: any[] = []
    for (const app of applications || []) {
      // Legacy single PDF
      if (app.pdf_url) {
        applicationDocuments.push({
          id: `app-${app.id}`,
          name: `${app.country} Visa Application Form`,
          url: app.pdf_url,
          status: app.status === 'completed' || app.status === 'approved' ? 'approved' : 'uploaded',
          created_at: app.created_at,
          application_id: String(app.id),
          user_id: String(userId),
          type: 'application_form'
        })
      }
      // New multi-PDF array stored as JSON/text
      let pdfArray: string[] = []
      if (Array.isArray(app.pdfs)) pdfArray = app.pdfs as string[]
      else if (typeof app.pdfs === 'string') {
        try { pdfArray = JSON.parse(app.pdfs) } catch {}
      }
      if (pdfArray?.length) {
        const travellers = Array.isArray(app.traveler_data) ? app.traveler_data : []
        pdfArray.forEach((url: string, idx: number) => {
          const t = travellers[idx] || {}
          const label = `${app.country} Application Form — Traveller ${idx + 1}${t.firstName ? ` (${t.firstName} ${t.lastName || ''})` : ''}`.trim()
          applicationDocuments.push({
            id: `app-${app.id}-${idx}`,
            name: label,
            url,
            status: app.status === 'completed' || app.status === 'approved' ? 'approved' : 'uploaded',
            created_at: app.created_at,
            application_id: String(app.id),
            user_id: String(userId),
            type: 'application_form'
          })
        })
      }
    }

    // Also check for additional user documents
    const bookingIds = (applications || []).map(app => app.id)
    let additionalDocuments: any[] = []
    
    if (bookingIds.length > 0) {
      const { data: userDocs, error: docsError } = await supabase
        .from('user_documents')
        .select(`
          id,
          label,
          pdf_url,
          uploaded_at,
          booking_id
        `)
        .in('booking_id', bookingIds)
        .order('uploaded_at', { ascending: false })

      if (!docsError && userDocs) {
        additionalDocuments = userDocs.map(doc => ({
          id: doc.id.toString(),
          name: doc.label || 'Document',
          url: doc.pdf_url,
          status: 'uploaded',
          created_at: doc.uploaded_at,
          application_id: doc.booking_id?.toString() || '',
          user_id: userId.toString(),
          type: 'user_document'
        }))
      }
    }

    // Combine all documents
    const allDocuments = [...applicationDocuments, ...additionalDocuments]
    console.log('Total documents found:', allDocuments.length)
    
    return NextResponse.json(allDocuments)
  } catch (error: any) {
    console.error('API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
