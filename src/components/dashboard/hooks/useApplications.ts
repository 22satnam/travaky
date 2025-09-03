'use client'
import { supabase } from '@/lib/supabase/client'
import { useQuery } from '@tanstack/react-query'

export type ApplicationRow = {
  id: number
  user_id: string
  country: string
  visa_type: string | null
  status: 'draft'|'submitted'|'in_progress'|'payment_pending'|'approved'|'rejected'|'completed'
  current_step: string | null
  created_at: string
  updated_at: string
}

export function useApplications() {
  return useQuery({
    queryKey: ['applications'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('applications')
        .select('*')
        .order('created_at', { ascending: false })
      if (error) throw error
      return data as ApplicationRow[]
    }
  })
}
