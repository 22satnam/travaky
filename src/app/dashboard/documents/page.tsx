// // // import { cookies } from "next/headers"
// // // import { verify } from "jsonwebtoken"
// // // import { supabaseServer } from "@/lib/supabase/server"

// // // export const dynamic = "force-dynamic"

// // // export default async function DocumentsPage() {
// // //   /* auth -------------------------------------------------------- */
// // //   const store  = cookies()                               // ✅
// // //   const token  = store.get("token")?.value
// // //   if (!token) return <p className="text-red-500">Not signed in.</p>

// // //   const { id: userId } = verify(token, process.env.JWT_SECRET!) as { id: number }

// // //   /* fetch ------------------------------------------------------- */
// // //   const supa = supabaseServer(true)
// // //   const { data, error } = await supa
// // //     .from("user_documents")
// // //     .select(
// // //       `id, label, pdf_url, uploaded_at,
// // //        visa_applications(id, country, appointment_date, invoice_url)`
// // //     )
// // //     .eq("visa_applications.user_id", userId)
// // //     .order("uploaded_at", { ascending: false })

// // //   if (error) return <p className="text-red-500">{error.message}</p>
// // //   if (!data?.length) return <p>No documents yet.</p>

// // //   /* group & render --------------------------------------------- */
// // //   const grouped: Record<number, typeof data> = {}
// // //   data.forEach(d => {
// // //     const bid = d.visa_applications.id
// // //     grouped[bid] = grouped[bid] ? [...grouped[bid], d] : [d]
// // //   })

// // //   return (
// // //     <div className="space-y-8">
// // //       {Object.entries(grouped).map(([bookingId, docs]) => (
// // //         <section key={bookingId} className="border rounded-lg bg-white dark:bg-neutral-900">
// // //           <header className="px-6 py-4 border-b flex items-center justify-between">
// // //             <h2 className="font-semibold text-sm">
// // //               Booking #{bookingId} – {docs[0].visa_applications.country}
// // //             </h2>
// // //             <span className="text-xs text-muted-foreground">
// // //               {new Date(docs[0].visa_applications.appointment_date).toLocaleDateString()}
// // //             </span>
// // //           </header>

// // //           <ul className="divide-y">
// // //             {docs.map(d => (
// // //               <li key={d.id} className="flex items-center justify-between px-6 py-3">
// // //                 <span>{d.label}</span>
// // //                 <a
// // //                   href={d.pdf_url}
// // //                   target="_blank"
// // //                   className="text-primary underline text-sm"
// // //                 >
// // //                   View PDF
// // //                 </a>
// // //               </li>
// // //             ))}
// // //           </ul>
// // //         </section>
// // //       ))}
// // //     </div>
// // //   )
// // // }


// // /* src/app/dashboard/documents/page.tsx
// //  * ---------------------------------------------------------------
// //  * Lists every PDF (filled visa forms per traveller) plus
// //  * the matching invoice for each paid booking.
// //  * --------------------------------------------------------------- */
// // import { cookies } from "next/headers"
// // import { verify } from "jsonwebtoken"
// // import { supabaseServer } from "@/lib/supabase/server"
// // import Link from "next/link"

// // export const dynamic = "force-dynamic"

// // export default async function DocumentsPage() {
// //   /* ───── auth ───── */
// //   const token = cookies().get("token")?.value
// //   if (!token) return <p className="text-red-500">Not signed in.</p>

// //   const { id: userId } = verify(token, process.env.JWT_SECRET!) as { id: number }

// //   /* ───── fetch user docs + booking meta ───── */
// //   const supa = supabaseServer(true)
// //   const { data, error } = await supa
// //     .from("user_documents")
// //     .select(
// //       `id, label, pdf_url, uploaded_at,
// //        visa_applications(id, country, appointment_date, invoice_url)`
// //     )
// //     .eq("visa_applications.user_id", userId)
// //     .order("uploaded_at", { ascending: false })

// //   if (error)  return <p className="text-red-500">{error.message}</p>
// //   if (!data?.length) return <p>No documents yet.</p>

// //   /* ───── group by booking & inject invoice entry ───── */
// //   type Row = typeof data[number]
// //   const grouped: Record<number, Row[]> = {}

// //   data.forEach(d => {
// //     const bid = d.visa_applications.id
// //     grouped[bid] = grouped[bid] ? [...grouped[bid], d] : [d]
// //   })

// //   /* add invoice link if missing */
// //   Object.entries(grouped).forEach(([bid, docs]) => {
// //     const { invoice_url } = docs[0].visa_applications
// //     if (invoice_url && !docs.some(x => x.label === "Invoice")) {
// //       docs.push({
// //         id: `inv-${bid}`,
// //         label: "Invoice",
// //         pdf_url: invoice_url,
// //         uploaded_at: docs[0].uploaded_at,
// //         visa_applications: docs[0].visa_applications,
// //       } as Row)
// //     }
// //   })

// //   /* ───── render ───── */
// //   return (
// //     <div className="space-y-8">
// //       {Object.entries(grouped).map(([bookingId, docs]) => (
// //         <section
// //           key={bookingId}
// //           className="border rounded-lg bg-white dark:bg-neutral-900"
// //         >
// //           <header className="px-6 py-4 border-b flex items-center justify-between">
// //             <h2 className="font-semibold text-sm">
// //               Booking #{bookingId} – {docs[0].visa_applications.country}
// //             </h2>
// //             <span className="text-xs text-muted-foreground">
// //               {new Date(
// //                 docs[0].visa_applications.appointment_date,
// //               ).toLocaleDateString()}
// //             </span>
// //           </header>

// //           <ul className="divide-y">
// //             {docs.map(d => (
// //               <li
// //                 key={d.id}
// //                 className="flex items-center justify-between px-6 py-3"
// //               >
// //                 <span>{d.label}</span>
// //                 <Link
// //                   href={d.pdf_url}
// //                   target="_blank"
// //                   className="text-primary underline text-sm"
// //                 >
// //                   View PDF
// //                 </Link>
// //               </li>
// //             ))}
// //           </ul>
// //         </section>
// //       ))}
// //     </div>
// //   )
// // }


// /* Dashboard home — upcoming / completed appointments
//  * -------------------------------------------------- */
// import { cookies } from 'next/headers'
// import { verify }  from 'jsonwebtoken'
// import { supabaseServer } from '@/lib/supabase/server'
// import Link from 'next/link'

// export const dynamic = 'force-dynamic'

// export default async function DashboardHome() {
//   /* ─── async cookies() ─── */
//   const cookieStore = await cookies()
//   const jwt   = cookieStore.get('token')?.value
//   if (!jwt) return <p className="text-red-500">Not signed in.</p>

//   const { id: userId } = verify(jwt, process.env.JWT_SECRET!) as { id: number }

//   /* fetch all paid / confirmed bookings for this user */
//   const supa = supabaseServer(true)
//   const { data, error } = await supa
//     .from('visa_applications')
//     .select('id,country,appointment_date,status,plan')
//     .eq('user_id', userId)
//     .in('status', ['paid', 'confirmed'])
//     .order('appointment_date')

//   if (error) return <p className="text-red-500">{error.message}</p>

//   const today = new Date().setHours(0, 0, 0, 0)
//   const upcoming  = (data ?? []).filter(b => new Date(b.appointment_date).getTime() >= today)
//   const completed = (data ?? []).filter(b => new Date(b.appointment_date).getTime() <  today)

//   const List = ({ rows }:{ rows: typeof data }) => (
//     <ul className="divide-y rounded-md border bg-card">
//       {rows.map(b => (
//         <li key={b.id} className="flex items-center justify-between px-4 py-3">
//           <div>
//             <p className="font-medium">{b.country}</p>
//             <p className="text-xs text-muted-foreground">
//               {new Date(b.appointment_date).toLocaleDateString()} • {b.plan}
//             </p>
//           </div>
//           <Link href={`/dashboard/bookings?id=${b.id}`} className="underline text-primary text-sm">
//             View
//           </Link>
//         </li>
//       ))}
//     </ul>
//   )

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


/* Documents page — visa PDFs + invoice per booking
 * ------------------------------------------------ */
import { cookies } from 'next/headers'
import { verify }  from 'jsonwebtoken'
import { supabaseServer } from '@/lib/supabase/server'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export default async function DocumentsPage() {
  /* async cookies() */
  const cookieStore = await cookies()
  const token = cookieStore.get('token')?.value
  if (!token) return <p className="text-red-500">Not signed in.</p>

  const { id: userId } = verify(token, process.env.JWT_SECRET!) as { id: number }

  /* fetch docs */
  const supa = supabaseServer(true)
  const { data, error } = await supa
    .from('user_documents')
    .select(
      `id,label,pdf_url,uploaded_at,
       visa_applications(id,country,appointment_date,invoice_url)`
    )
    .eq('visa_applications.user_id', userId)
    .order('uploaded_at', { ascending: false })

  if (error) return <p className="text-red-500">{error.message}</p>
  if (!data?.length) return <p>No documents yet.</p>

  /* group by booking and inject invoice row */
  type Row = typeof data[number]
  const grouped: Record<number, Row[]> = {}
  data.forEach((d: any) => {
    const bid = d.visa_applications.id
    grouped[bid] = grouped[bid] ? [...grouped[bid], d] : [d]
  })
  Object.entries(grouped).forEach(([bid, docs]) => {
    const invUrl = (docs[0] as any).visa_applications.invoice_url
    if (invUrl && !docs.some(x => x.label === 'Invoice')) {
      docs.push({
        id   : `inv-${bid}`,
        label: 'Invoice',
        pdf_url: invUrl,
        uploaded_at: docs[0].uploaded_at,
        visa_applications: docs[0].visa_applications,
      } as Row)
    }
  })

  /* render */
  return (
    <div className="space-y-8">
      {Object.entries(grouped).map(([bookingId, docs]) => (
        <section key={bookingId} className="border rounded-lg bg-white dark:bg-neutral-900">
          <header className="px-6 py-4 border-b flex items-center justify-between">
            <h2 className="font-semibold text-sm">
              Booking #{bookingId} – {(docs[0] as any).visa_applications.country}
            </h2>
            <span className="text-xs text-muted-foreground">
              {new Date((docs[0] as any).visa_applications.appointment_date).toLocaleDateString()}
            </span>
          </header>

          <ul className="divide-y">
            {docs.map(d => (
              <li key={d.id} className="flex items-center justify-between px-6 py-3">
                <span>{d.label}</span>
                <Link href={d.pdf_url} target="_blank" className="text-primary underline text-sm">
                  View PDF
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}
