import { cookies } from "next/headers"
import { verify } from "jsonwebtoken"
import { supabaseServer } from "@/lib/supabase/server"

export const dynamic = "force-dynamic"

export default async function DocumentsPage() {
  /* auth -------------------------------------------------------- */
  const store  = cookies()                               // ✅
  const token  = store.get("token")?.value
  if (!token) return <p className="text-red-500">Not signed in.</p>

  const { id: userId } = verify(token, process.env.JWT_SECRET!) as { id: number }

  /* fetch ------------------------------------------------------- */
  const supa = supabaseServer(true)
  const { data, error } = await supa
    .from("user_documents")
    .select(
      `id, label, pdf_url, uploaded_at,
       visa_applications(id, country, appointment_date)`
    )
    .eq("visa_applications.user_id", userId)
    .order("uploaded_at", { ascending: false })

  if (error) return <p className="text-red-500">{error.message}</p>
  if (!data?.length) return <p>No documents yet.</p>

  /* group & render --------------------------------------------- */
  const grouped: Record<number, typeof data> = {}
  data.forEach(d => {
    const bid = d.visa_applications.id
    grouped[bid] = grouped[bid] ? [...grouped[bid], d] : [d]
  })

  return (
    <div className="space-y-8">
      {Object.entries(grouped).map(([bookingId, docs]) => (
        <section key={bookingId} className="border rounded-lg bg-white dark:bg-neutral-900">
          <header className="px-6 py-4 border-b flex items-center justify-between">
            <h2 className="font-semibold text-sm">
              Booking #{bookingId} – {docs[0].visa_applications.country}
            </h2>
            <span className="text-xs text-muted-foreground">
              {new Date(docs[0].visa_applications.appointment_date).toLocaleDateString()}
            </span>
          </header>

          <ul className="divide-y">
            {docs.map(d => (
              <li key={d.id} className="flex items-center justify-between px-6 py-3">
                <span>{d.label}</span>
                <a
                  href={d.pdf_url}
                  target="_blank"
                  className="text-primary underline text-sm"
                >
                  View PDF
                </a>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}
