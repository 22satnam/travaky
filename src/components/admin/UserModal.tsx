'use client'

import { supabase } from '@/lib/supabase/client'

interface UserModalProps {
  id: string
}

export default function UserModal(props: UserModalProps) {
  // This should be inside a component function or async function
  const fetchData = async () => {
    const { data } = await supabase
      .from('visa_applications')
      .select(`
         *,
         flight_options (*),
         hotel_options  (*),
         invoices       (*),
         user_documents (*)
      `)
      .eq('id', props.id)
      .single()
    
    return data
  }

  return (
    <div>
      {/* Component JSX here */}
    </div>
  )
}
