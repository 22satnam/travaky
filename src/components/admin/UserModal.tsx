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
