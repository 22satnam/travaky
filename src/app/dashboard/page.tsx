// // // // // import { redirect } from 'next/navigation'
// // // // // export default function Index() {
// // // // //   redirect('/dashboard/bookings')
// // // // // }

// // // // /* "My Documents" page – grouped by booking */
// // // // import { cookies } from "next/headers"
// // // // import { verify } from "jsonwebtoken"
// // // // import { supabaseServer } from "@/lib/supabase/server"

// // // // export const dynamic = "force-dynamic"

// // // // export default async function DocumentsPage() {
// // // //   /* -------- auth -------- */
// // // //   const token = cookies().get("token")?.value
// // // //   if (!token) return <p className="text-red-500">Not signed in.</p>
// // // //   const { id: userId } = verify(token, process.env.JWT_SECRET!) as { id: number }

// // // //   /* -------- data -------- */
// // // //   const supabase = supabaseServer(true)
// // // //   const { data, error } = await supabase
// // // //     .from("user_documents")
// // // //     .select(
// // // //       `id, label, pdf_url, uploaded_at,
// // // //        visa_applications(id, country, appointment_date)`
// // // //     )
// // // //     .eq("visa_applications.user_id", userId)
// // // //     .order("uploaded_at", { ascending: false })

// // // //   if (error) return <p className="text-red-500">{error.message}</p>
// // // //   if (!data?.length) return <p>No documents yet.</p>

// // // //   /* -------- group by booking -------- */
// // // //   const grouped: Record<number, typeof data> = {}
// // // //   data.forEach(doc => {
// // // //     const bid = doc.visa_applications.id
// // // //     grouped[bid] = grouped[bid] ? [...grouped[bid], doc] : [doc]
// // // //   })

// // // //   return (
// // // //     <div className="space-y-8">
// // // //       {Object.entries(grouped).map(([bookingId, docs]) => (
// // // //         <section key={bookingId} className="border rounded-lg bg-white dark:bg-neutral-900">
// // // //           <header className="px-6 py-4 border-b flex items-center justify-between">
// // // //             <h2 className="font-semibold text-sm">
// // // //               Booking #{bookingId} – {docs[0].visa_applications.country}
// // // //             </h2>
// // // //             <span className="text-xs text-muted-foreground">
// // // //               {new Date(docs[0].visa_applications.appointment_date).toLocaleDateString()}
// // // //             </span>
// // // //           </header>

// // // //           <ul className="divide-y">
// // // //             {docs.map(d => (
// // // //               <li key={d.id} className="flex items-center justify-between px-6 py-3">
// // // //                 <span>{d.label}</span>
// // // //                 <a
// // // //                   href={d.pdf_url}
// // // //                   target="_blank"
// // // //                   className="text-primary underline text-sm"
// // // //                 >
// // // //                   View PDF
// // // //                 </a>
// // // //               </li>
// // // //             ))}
// // // //           </ul>
// // // //         </section>
// // // //       ))}
// // // //     </div>
// // // //   )
// // // // }


// // // import { cookies } from "next/headers"
// // // import { verify } from "jsonwebtoken"

// // // export default async function DashboardHome() {
// // //   /* auth -------------------------------------------------------- */
// // //   const cookieStore = cookies()                       // ✅ get the store first
// // //   const token = cookieStore.get("token")?.value
// // //   if (!token) return <p className="text-red-500">Not signed in.</p>

// // //   const { id } = verify(token, process.env.JWT_SECRET!) as { id: number }

// // //   return <p>Welcome user #{id}</p>
// // // }


// // // app/dashboard/page.tsx
// // import { cookies } from 'next/headers'
// // import { verify } from 'jsonwebtoken'
// // import Link from 'next/link'
// // import { supabaseServer } from '@/lib/supabase/server'

// // export const dynamic = 'force-dynamic'

// // export default async function DashboardHome() {
// //   /* ─── auth ─── */
// //   const token = cookies().get('token')?.value
// //   if (!token)
// //     return <p className="text-red-600">Not signed in.</p>

// //   const { id: userId } = verify(token, process.env.JWT_SECRET!) as { id:number }

// //   /* ─── next upcoming booking ─── */
// //   const supabase = supabaseServer(true)
// //   const todayISO = new Date().toISOString().slice(0,10)    // YYYY-MM-DD

// //   const { data: booking } = await supabase
// //     .from('visa_applications')
// //     .select('id,country,appointment_date,appointment_time,status,traveler_count')
// //     .eq('user_id', userId)
// //     .gte('appointment_date', todayISO)
// //     .order('appointment_date', { ascending:true })
// //     .limit(1)
// //     .maybeSingle()

// //   if (!booking) {
// //     return (
// //       <div className="py-20 text-center space-y-4">
// //         <h2 className="text-xl font-semibold">No upcoming bookings</h2>
// //         <Link href="/form" className="underline text-primary">
// //           Let’s start booking →
// //         </Link>
// //       </div>
// //     )
// //   }

// //   return (
// //     <section className="max-w-lg mx-auto mt-10 border rounded-lg bg-white dark:bg-neutral-900">
// //       <header className="px-6 py-4 border-b">
// //         <h2 className="font-semibold text-base">Your next appointment</h2>
// //       </header>

// //       <div className="p-6 text-sm space-y-1">
// //         <p><strong>Country:</strong> {booking.country}</p>
// //         <p><strong>Date:</strong> {new Date(booking.appointment_date).toLocaleDateString()}</p>
// //         {booking.appointment_time && (<p><strong>Time:</strong> {booking.appointment_time}</p>)}
// //         <p><strong>Status:</strong> {booking.status}</p>
// //         <p><strong>Travellers:</strong> {booking.traveler_count}</p>
// //       </div>

// //       <footer className="px-6 py-4 border-t text-right">
// //         <Link href={`/dashboard/bookings?id=${booking.id}`} className="underline text-primary">
// //           View booking ↗︎
// //         </Link>
// //       </footer>
// //     </section>
// //   )
// // }


// import { cookies } from "next/headers"
// import { verify } from "jsonwebtoken"
// import { supabaseServer } from "@/lib/supabase/server"
// import Link from "next/link"

// export const dynamic = "force-dynamic"

// export default async function DashboardHome() {
//   /* auth ------------------------------------------------------------------ */
//   const jwt = cookies().get("token")?.value
//   if (!jwt) return <p className="text-red-500">Not signed in.</p>

//   const { id: userId } = verify(jwt, process.env.JWT_SECRET!) as { id: number }

//   /* data ------------------------------------------------------------------ */
//   const supa = supabaseServer(true)
//   const { data, error } = await supa
//     .from("visa_applications")
//     .select("id, country, appointment_date, status, plan")
//     .eq("user_id", userId)
//     .in("status", ["paid", "confirmed"])            // only fully-paid bookings
//     .order("appointment_date")

//   if (error) return <p className="text-red-500">{error.message}</p>

//   const today = new Date().setHours(0,0,0,0)

//   const upcoming   = data?.filter(b => new Date(b.appointment_date).getTime() >= today) ?? []
//   const completed  = data?.filter(b => new Date(b.appointment_date).getTime() <  today) ?? []

//   /* helpers --------------------------------------------------------------- */
//   const List = ({ rows }:{ rows: typeof upcoming }) => (
//     <ul className="divide-y rounded-md border bg-card">
//       {rows.map(b => (
//         <li key={b.id} className="flex items-center justify-between px-4 py-3">
//           <div>
//             <p className="font-medium">{b.country}</p>
//             <p className="text-xs text-muted-foreground">
//               {new Date(b.appointment_date).toLocaleDateString()} • {b.plan}
//             </p>
//           </div>
//           <Link
//             href={`/dashboard/bookings?id=${b.id}`}
//             className="text-primary underline text-sm"
//           >
//             View
//           </Link>
//         </li>
//       ))}
//     </ul>
//   )

//   /* render --------------------------------------------------------------- */
//   return (
//     <div className="space-y-10">
//       {upcoming.length ? (
//         <section>
//           <h2 className="text-lg font-semibold mb-2">Upcoming appointment</h2>
//           <List rows={upcoming} />
//         </section>
//       ) : (
//         <section className="rounded-md border bg-card p-6 text-center">
//           <p className="font-medium mb-1">No upcoming appointment</p>
//           <Link href="/apply" className="text-primary underline">
//             Book your first visa →
//           </Link>
//         </section>
//       )}

//       {completed.length > 0 && (
//         <section>
//           <h2 className="text-lg font-semibold mb-2">Completed appointments</h2>
//           <List rows={completed} />
//         </section>
//       )}
//     </div>
//   )
// }


/* Dashboard home — upcoming / completed appointments
 * -------------------------------------------------- */
import { cookies } from 'next/headers'
import { verify }  from 'jsonwebtoken'
import { supabaseServer } from '@/lib/supabase/server'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export default async function DashboardHome() {
  /* ─── async cookies() ─── */
  const cookieStore = await cookies()
  const jwt   = cookieStore.get('token')?.value
  if (!jwt) return <p className="text-red-500">Not signed in.</p>

  const { id: userId } = verify(jwt, process.env.JWT_SECRET!) as { id: number }

  /* fetch all paid / confirmed bookings for this user */
  const supa = supabaseServer(true)
  const { data, error } = await supa
    .from('visa_applications')
    .select('id,country,appointment_date,status,plan')
    .eq('user_id', userId)
    .in('status', ['paid', 'confirmed'])
    .order('appointment_date')

  if (error) return <p className="text-red-500">{error.message}</p>

  const today = new Date().setHours(0, 0, 0, 0)
  const upcoming  = (data ?? []).filter(b => new Date(b.appointment_date).getTime() >= today)
  const completed = (data ?? []).filter(b => new Date(b.appointment_date).getTime() <  today)

  const List = ({ rows }:{ rows: typeof data }) => (
    <ul className="divide-y rounded-md border bg-card">
      {rows.map(b => (
        <li key={b.id} className="flex items-center justify-between px-4 py-3">
          <div>
            <p className="font-medium">{b.country}</p>
            <p className="text-xs text-muted-foreground">
              {new Date(b.appointment_date).toLocaleDateString()} • {b.plan}
            </p>
          </div>
          <Link href={`/dashboard/bookings?id=${b.id}`} className="underline text-primary text-sm">
            View
          </Link>
        </li>
      ))}
    </ul>
  )

  return (
    <div className="space-y-10">
      {upcoming.length ? (
        <section>
          <h2 className="text-lg font-semibold mb-2">Upcoming appointment</h2>
          <List rows={upcoming} />
        </section>
      ) : (
        <section className="rounded-md border bg-card p-6 text-center">
          <p className="font-medium mb-1">No upcoming appointment</p>
          <Link href="/apply" className="text-primary underline">
            Book your first visa →
          </Link>
        </section>
      )}

      {completed.length > 0 && (
        <section>
          <h2 className="text-lg font-semibold mb-2">Completed appointments</h2>
          <List rows={completed} />
        </section>
      )}
    </div>
  )
}
