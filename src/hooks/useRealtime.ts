'use client'
import { useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'

export function useRealtime(table: string, mutate: ()=>void) {
  useEffect(() => {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )
    const ch = supabase
      .channel(table)
      .on('postgres_changes', { event: '*', table }, () => mutate())
      .subscribe()
    return () => { supabase.removeChannel(ch) }
  }, [table, mutate])
}
