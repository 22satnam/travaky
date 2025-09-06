// import { NextRequest, NextResponse } from 'next/server'
// import { supabaseServer } from '@/lib/supabase/server'
// import { searchHotels, HotelSearchParams } from '@/lib/external/hotels';
// import { searchFlights, FlightSearchParams } from '@/lib/external/flights';// you’ll add similarly

// export async function POST(req:NextRequest){
//   const { bookingId } = await req.json()
//   const supa = supabaseServer(true)

//   /* pull booking to know airports & dates */
//   const { data: booking } = await supa
//     .from('visa_applications').select('*').eq('id',bookingId).single()

//   /* 1️⃣  flights there & back */
//   const [outbound, inbound] = await Promise.all([
//     searchFlights({from:'DEL', to:booking.country, date:booking.appointment_date, adults:booking.traveler_count}),
//     searchFlights({from:booking.country, to:'DEL', date:booking.appointment_date + 7 /* dummy */, adults:booking.traveler_count}),
//   ])

//   /* 2️⃣  top 3 hotels near arrival airport */
//   const hotels = await searchHotels({country:booking.country, dateIn:booking.appointment_date, nights:7})

//   /* 3️⃣  store condensed choices */
//   await supa.from('flight_options').insert(flatten(outbound.data,'outbound',bookingId))
//   await supa.from('flight_options').insert(flatten(inbound .data,'return' ,bookingId))
//   await supa.from('hotel_options') .insert(hotels.map(h=>({...h, booking_id:bookingId})))

//   return NextResponse.json({ok:true})
// }
import { NextResponse } from 'next/server';
// ⬇️ change to relative imports from this file's folder
import { searchHotels, HotelSearchParams } from '../../../lib/external/hotel';
import { searchFlights, FlightSearchParams } from '../../../lib/external/flights';

export const runtime = 'edge';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const hotelsParams = body?.hotels as HotelSearchParams | undefined;
    const flightsParams = body?.flights as FlightSearchParams | undefined;

    const [hotels, flights] = await Promise.all([
      hotelsParams ? searchHotels(hotelsParams) : Promise.resolve([]),
      flightsParams ? searchFlights(flightsParams) : Promise.resolve([]),
    ]);

    return NextResponse.json({ hotels, flights }, { status: 200 });
  } catch (err: any) {
    console.error('fetch-flight-hotel error:', err);
    return NextResponse.json(
      { error: err?.message || 'Failed to fetch flight/hotel' },
      { status: 500 }
    );
  }
}
