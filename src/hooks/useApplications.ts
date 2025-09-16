'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase-browser'

interface Application {
  id: string
  country: string
  visa_type: string
  status: string
  plan: string
  traveler_count: number
  appointment_date?: string
  appointment_time?: string
  created_at: string
  updated_at: string
  reference_code: string
  started_at: string
  total_amount?: number
  pdf_url?: string
  session_id?: string
  email?: string
  phone?: string
}

export function useApplications(filter?: { status?: string }) {
  const [data, setData] = useState<Application[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  async function fetchOnce() {
    try {
      setLoading(true)
      setError(null)
      
      const query = new URLSearchParams()
      if (filter?.status) query.set('status', filter.status)
      
      const res = await fetch('/api/applications' + (query.toString() ? `?${query}` : ''), {
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        }
      })
      
      if (!res.ok) {
        throw new Error(`HTTP ${res.status}: ${res.statusText}`)
      }
      
      const json = await res.json()
      console.log('Applications API response:', json)
      
      // Handle both array response and object with applications property
      const applications = Array.isArray(json) ? json : (json.applications || [])
      console.log('Processed applications:', applications)
      setData(applications)
    } catch (err: any) {
      console.error('Error fetching applications:', err)
      setError(err.message || 'Failed to fetch applications')
      setData([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchOnce()
  }, [filter?.status])

  useEffect(() => {
    // realtime on 'visa_applications' table (the actual table name)
    const channel = supabase
      .channel('visa-applications-updates')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'visa_applications' },
        () => fetchOnce()
      )
      .subscribe()

    return () => { supabase.removeChannel(channel) }
  }, [])

  return { data, loading, error, refetch: fetchOnce }
}
