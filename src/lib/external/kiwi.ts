// a tiny client for the public Tequila (Kiwi) API
import qs from 'qs'

export async function searchFlights(params:{
  from:string; to:string; date:string; adults:number;
}){
  const query = qs.stringify({
    fly_from: params.from,
    fly_to  : params.to,
    date_from: params.date,
    date_to  : params.date,
    adults   : params.adults,
    partner  : 'picky',          // their demo key
    limit    : 5
  })
  const res = await fetch(`https://api.tequila.kiwi.com/v2/search?${query}`,{
    headers:{apikey: process.env.TEQUILA_API_KEY!}
  })
  if (!res.ok) throw new Error('Kiwi search failed')
  return res.json()
}
