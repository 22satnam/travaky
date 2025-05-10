import { NextRequest, NextResponse } from 'next/server'
import { supabaseServer } from '@/lib/supabase/server'
import { searchFlights }  from '@/lib/external/kiwi'
import { searchHotels }   from '@/lib/external/hotels'  // you’ll add similarly

export async function POST(req:NextRequest){
  const { bookingId } = await req.json()
  const supa = supabaseServer(true)

  /* pull booking to know airports & dates */
  const { data: booking } = await supa
    .from('visa_applications').select('*').eq('id',bookingId).single()

  /* 1️⃣  flights there & back */
  const [outbound, inbound] = await Promise.all([
    searchFlights({from:'DEL', to:booking.country, date:booking.appointment_date, adults:booking.traveler_count}),
    searchFlights({from:booking.country, to:'DEL', date:booking.appointment_date + 7 /* dummy */, adults:booking.traveler_count}),
  ])

  /* 2️⃣  top 3 hotels near arrival airport */
  const hotels = await searchHotels({country:booking.country, dateIn:booking.appointment_date, nights:7})

  /* 3️⃣  store condensed choices */
  await supa.from('flight_options').insert(flatten(outbound.data,'outbound',bookingId))
  await supa.from('flight_options').insert(flatten(inbound .data,'return' ,bookingId))
  await supa.from('hotel_options') .insert(hotels.map(h=>({...h, booking_id:bookingId})))

  return NextResponse.json({ok:true})
}
