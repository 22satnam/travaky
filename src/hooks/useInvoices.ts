'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase-browser'

export function useApplications(filter?: { status?: string }) {
  const [data, setData] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  async function fetchOnce() {
    setLoading(true)
    const query = new URLSearchParams()
    if (filter?.status) query.set('status', filter.status)
    const res = await fetch('/api/applications' + (query.toString() ? `?${query}` : ''))
    const json = await res.json()
    setData(Array.isArray(json) ? json : [])
    setLoading(false)
  }

  useEffect(() => {
    fetchOnce()
  }, [filter?.status])

  useEffect(() => {
    // realtime on 'applications' for current user (RLS ensures only their rows)
    const channel = supabase
      .channel('applications-updates')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'applications' },
        () => fetchOnce()
      )
      .subscribe()

    return () => { supabase.removeChannel(channel) }
  }, [])

  return { data, loading, refetch: fetchOnce }
}
