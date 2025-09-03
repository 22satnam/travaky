'use client'
import { supabase } from '@/lib/supabase/client'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useRealtimeTable } from '@/hooks/useRealtimeTable'

export default function Notifications() {
  const qc = useQueryClient()

  const { data, isLoading } = useQuery({
    queryKey: ['notifications'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('notifications')
        .select('*')
        .order('created_at', { ascending: false })
      if (error) throw error
      return data as { id:number; title:string; message:string; created_at:string; read_at:string|null }[]
    }
  })
  useRealtimeTable({ table: 'notifications', invalidateKeys: [['notifications']], queryClient: qc })

  const markRead = useMutation({
    mutationFn: async (id: number) => {
      const { error } = await supabase.from('notifications').update({ read_at: new Date().toISOString() }).eq('id', id)
      if (error) throw error
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ['notifications'] })
  })

  if (isLoading) return null

  // Keep your UI
  return (
    <div>
      {(data || []).map(n => (
        <div key={n.id} className="your-card-classes">
          <div>{n.title}</div>
          <div>{n.message}</div>
          {!n.read_at && <button onClick={() => markRead.mutate(n.id)}>Mark as read</button>}
        </div>
      ))}
    </div>
  )
}
