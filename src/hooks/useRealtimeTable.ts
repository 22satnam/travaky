// 'use client'
// import { supabase } from '@/lib/supabase/client'
// import { useEffect } from 'react'
// import { QueryClient } from '@tanstack/react-query'

// export function useRealtimeTable(opts: {
//   table: string
//   filter?: string // e.g. 'user_id=eq.<uuid>' or 'application_id=eq.123'
//   invalidateKeys: unknown[] // react-query keys to invalidate
//   queryClient: QueryClient
// }) {
//   const { table, filter, invalidateKeys, queryClient } = opts

//   useEffect(() => {
//     const channel = supabase
//       .channel(`rt_${table}_${filter || 'all'}`)
//       .on('postgres_changes',
//         { event: '*', schema: 'public', table, filter },
//         () => invalidateKeys.forEach(k => queryClient.invalidateQueries({ queryKey: Array.isArray(k) ? k : [k] }))
//       )
//       .subscribe()

//     return () => { supabase.removeChannel(channel) }
//   }, [table, filter, queryClient, JSON.stringify(invalidateKeys)])
// }

'use client'

import { supabase } from '@/lib/supabase/client'
import { useEffect } from 'react'
import type { QueryClient } from '@tanstack/react-query'

/**
 * Subscribe to Postgres changes for a table and invalidate react-query keys.
 * Usage:
 *   useRealtimeTable({ table: 'documents', invalidateKeys: [['documents']], queryClient: qc })
 *
 * filter example: 'user_id=eq.<uuid>' or 'application_id=eq.123'
 */
export function useRealtimeTable(opts: {
  table: string
  filter?: string
  invalidateKeys: unknown[]
  queryClient: QueryClient
}) {
  const { table, filter, invalidateKeys, queryClient } = opts

  useEffect(() => {
    const channel = supabase
      .channel(`rt_${table}_${filter || 'all'}`)
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table, filter },
        () => {
          for (const k of invalidateKeys) {
            queryClient.invalidateQueries({ queryKey: Array.isArray(k) ? k : [k] })
          }
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
    // stringify invalidateKeys so deps are stable
  }, [table, filter, queryClient, JSON.stringify(invalidateKeys)])
}
