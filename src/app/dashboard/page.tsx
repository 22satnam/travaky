// // // // // // // // // import { redirect } from 'next/navigation'
// // // // // // // // // export default function Index() {
// // // // // // // // //   redirect('/dashboard/bookings')
// // // // // // // // // }

// // // // // // // // /* "My Documents" page – grouped by booking */
// // // // // // // // import { cookies } from "next/headers"
// // // // // // // // import { verify } from "jsonwebtoken"
// // // // // // // // import { supabaseServer } from "@/lib/supabase/server"

// // // // // // // // export const dynamic = "force-dynamic"

// // // // // // // // export default async function DocumentsPage() {
// // // // // // // //   /* -------- auth -------- */
// // // // // // // //   const token = cookies().get("token")?.value
// // // // // // // //   if (!token) return <p className="text-red-500">Not signed in.</p>
// // // // // // // //   const { id: userId } = verify(token, process.env.JWT_SECRET!) as { id: number }

// // // // // // // //   /* -------- data -------- */
// // // // // // // //   const supabase = supabaseServer(true)
// // // // // // // //   const { data, error } = await supabase
// // // // // // // //     .from("user_documents")
// // // // // // // //     .select(
// // // // // // // //       `id, label, pdf_url, uploaded_at,
// // // // // // // //        visa_applications(id, country, appointment_date)`
// // // // // // // //     )
// // // // // // // //     .eq("visa_applications.user_id", userId)
// // // // // // // //     .order("uploaded_at", { ascending: false })

// // // // // // // //   if (error) return <p className="text-red-500">{error.message}</p>
// // // // // // // //   if (!data?.length) return <p>No documents yet.</p>

// // // // // // // //   /* -------- group by booking -------- */
// // // // // // // //   const grouped: Record<number, typeof data> = {}
// // // // // // // //   data.forEach(doc => {
// // // // // // // //     const bid = doc.visa_applications.id
// // // // // // // //     grouped[bid] = grouped[bid] ? [...grouped[bid], doc] : [doc]
// // // // // // // //   })

// // // // // // // //   return (
// // // // // // // //     <div className="space-y-8">
// // // // // // // //       {Object.entries(grouped).map(([bookingId, docs]) => (
// // // // // // // //         <section key={bookingId} className="border rounded-lg bg-white dark:bg-neutral-900">
// // // // // // // //           <header className="px-6 py-4 border-b flex items-center justify-between">
// // // // // // // //             <h2 className="font-semibold text-sm">
// // // // // // // //               Booking #{bookingId} – {docs[0].visa_applications.country}
// // // // // // // //             </h2>
// // // // // // // //             <span className="text-xs text-muted-foreground">
// // // // // // // //               {new Date(docs[0].visa_applications.appointment_date).toLocaleDateString()}
// // // // // // // //             </span>
// // // // // // // //           </header>

// // // // // // // //           <ul className="divide-y">
// // // // // // // //             {docs.map(d => (
// // // // // // // //               <li key={d.id} className="flex items-center justify-between px-6 py-3">
// // // // // // // //                 <span>{d.label}</span>
// // // // // // // //                 <a
// // // // // // // //                   href={d.pdf_url}
// // // // // // // //                   target="_blank"
// // // // // // // //                   className="text-primary underline text-sm"
// // // // // // // //                 >
// // // // // // // //                   View PDF
// // // // // // // //                 </a>
// // // // // // // //               </li>
// // // // // // // //             ))}
// // // // // // // //           </ul>
// // // // // // // //         </section>
// // // // // // // //       ))}
// // // // // // // //     </div>
// // // // // // // //   )
// // // // // // // // }


// // // // // // // import { cookies } from "next/headers"
// // // // // // // import { verify } from "jsonwebtoken"

// // // // // // // export default async function DashboardHome() {
// // // // // // //   /* auth -------------------------------------------------------- */
// // // // // // //   const cookieStore = cookies()                       // ✅ get the store first
// // // // // // //   const token = cookieStore.get("token")?.value
// // // // // // //   if (!token) return <p className="text-red-500">Not signed in.</p>

// // // // // // //   const { id } = verify(token, process.env.JWT_SECRET!) as { id: number }

// // // // // // //   return <p>Welcome user #{id}</p>
// // // // // // // }


// // // // // // // app/dashboard/page.tsx
// // // // // // import { cookies } from 'next/headers'
// // // // // // import { verify } from 'jsonwebtoken'
// // // // // // import Link from 'next/link'
// // // // // // import { supabaseServer } from '@/lib/supabase/server'

// // // // // // export const dynamic = 'force-dynamic'

// // // // // // export default async function DashboardHome() {
// // // // // //   /* ─── auth ─── */
// // // // // //   const token = cookies().get('token')?.value
// // // // // //   if (!token)
// // // // // //     return <p className="text-red-600">Not signed in.</p>

// // // // // //   const { id: userId } = verify(token, process.env.JWT_SECRET!) as { id:number }

// // // // // //   /* ─── next upcoming booking ─── */
// // // // // //   const supabase = supabaseServer(true)
// // // // // //   const todayISO = new Date().toISOString().slice(0,10)    // YYYY-MM-DD

// // // // // //   const { data: booking } = await supabase
// // // // // //     .from('visa_applications')
// // // // // //     .select('id,country,appointment_date,appointment_time,status,traveler_count')
// // // // // //     .eq('user_id', userId)
// // // // // //     .gte('appointment_date', todayISO)
// // // // // //     .order('appointment_date', { ascending:true })
// // // // // //     .limit(1)
// // // // // //     .maybeSingle()

// // // // // //   if (!booking) {
// // // // // //     return (
// // // // // //       <div className="py-20 text-center space-y-4">
// // // // // //         <h2 className="text-xl font-semibold">No upcoming bookings</h2>
// // // // // //         <Link href="/form" className="underline text-primary">
// // // // // //           Let’s start booking →
// // // // // //         </Link>
// // // // // //       </div>
// // // // // //     )
// // // // // //   }

// // // // // //   return (
// // // // // //     <section className="max-w-lg mx-auto mt-10 border rounded-lg bg-white dark:bg-neutral-900">
// // // // // //       <header className="px-6 py-4 border-b">
// // // // // //         <h2 className="font-semibold text-base">Your next appointment</h2>
// // // // // //       </header>

// // // // // //       <div className="p-6 text-sm space-y-1">
// // // // // //         <p><strong>Country:</strong> {booking.country}</p>
// // // // // //         <p><strong>Date:</strong> {new Date(booking.appointment_date).toLocaleDateString()}</p>
// // // // // //         {booking.appointment_time && (<p><strong>Time:</strong> {booking.appointment_time}</p>)}
// // // // // //         <p><strong>Status:</strong> {booking.status}</p>
// // // // // //         <p><strong>Travellers:</strong> {booking.traveler_count}</p>
// // // // // //       </div>

// // // // // //       <footer className="px-6 py-4 border-t text-right">
// // // // // //         <Link href={`/dashboard/bookings?id=${booking.id}`} className="underline text-primary">
// // // // // //           View booking ↗︎
// // // // // //         </Link>
// // // // // //       </footer>
// // // // // //     </section>
// // // // // //   )
// // // // // // }


// // // // // import { cookies } from "next/headers"
// // // // // import { verify } from "jsonwebtoken"
// // // // // import { supabaseServer } from "@/lib/supabase/server"
// // // // // import Link from "next/link"

// // // // // export const dynamic = "force-dynamic"

// // // // // export default async function DashboardHome() {
// // // // //   /* auth ------------------------------------------------------------------ */
// // // // //   const jwt = cookies().get("token")?.value
// // // // //   if (!jwt) return <p className="text-red-500">Not signed in.</p>

// // // // //   const { id: userId } = verify(jwt, process.env.JWT_SECRET!) as { id: number }

// // // // //   /* data ------------------------------------------------------------------ */
// // // // //   const supa = supabaseServer(true)
// // // // //   const { data, error } = await supa
// // // // //     .from("visa_applications")
// // // // //     .select("id, country, appointment_date, status, plan")
// // // // //     .eq("user_id", userId)
// // // // //     .in("status", ["paid", "confirmed"])            // only fully-paid bookings
// // // // //     .order("appointment_date")

// // // // //   if (error) return <p className="text-red-500">{error.message}</p>

// // // // //   const today = new Date().setHours(0,0,0,0)

// // // // //   const upcoming   = data?.filter(b => new Date(b.appointment_date).getTime() >= today) ?? []
// // // // //   const completed  = data?.filter(b => new Date(b.appointment_date).getTime() <  today) ?? []

// // // // //   /* helpers --------------------------------------------------------------- */
// // // // //   const List = ({ rows }:{ rows: typeof upcoming }) => (
// // // // //     <ul className="divide-y rounded-md border bg-card">
// // // // //       {rows.map(b => (
// // // // //         <li key={b.id} className="flex items-center justify-between px-4 py-3">
// // // // //           <div>
// // // // //             <p className="font-medium">{b.country}</p>
// // // // //             <p className="text-xs text-muted-foreground">
// // // // //               {new Date(b.appointment_date).toLocaleDateString()} • {b.plan}
// // // // //             </p>
// // // // //           </div>
// // // // //           <Link
// // // // //             href={`/dashboard/bookings?id=${b.id}`}
// // // // //             className="text-primary underline text-sm"
// // // // //           >
// // // // //             View
// // // // //           </Link>
// // // // //         </li>
// // // // //       ))}
// // // // //     </ul>
// // // // //   )

// // // // //   /* render --------------------------------------------------------------- */
// // // // //   return (
// // // // //     <div className="space-y-10">
// // // // //       {upcoming.length ? (
// // // // //         <section>
// // // // //           <h2 className="text-lg font-semibold mb-2">Upcoming appointment</h2>
// // // // //           <List rows={upcoming} />
// // // // //         </section>
// // // // //       ) : (
// // // // //         <section className="rounded-md border bg-card p-6 text-center">
// // // // //           <p className="font-medium mb-1">No upcoming appointment</p>
// // // // //           <Link href="/apply" className="text-primary underline">
// // // // //             Book your first visa →
// // // // //           </Link>
// // // // //         </section>
// // // // //       )}

// // // // //       {completed.length > 0 && (
// // // // //         <section>
// // // // //           <h2 className="text-lg font-semibold mb-2">Completed appointments</h2>
// // // // //           <List rows={completed} />
// // // // //         </section>
// // // // //       )}
// // // // //     </div>
// // // // //   )
// // // // // }


// // // // // /* Dashboard home — upcoming / completed appointments
// // // // //  * -------------------------------------------------- */
// // // // // import { cookies } from 'next/headers'
// // // // // import { verify }  from 'jsonwebtoken'
// // // // // import { supabaseServer } from '@/lib/supabase/server'
// // // // // import Link from 'next/link'

// // // // // export const dynamic = 'force-dynamic'

// // // // // export default async function DashboardHome() {
// // // // //   /* ─── async cookies() ─── */
// // // // //   const cookieStore = await cookies()
// // // // //   const jwt   = cookieStore.get('token')?.value
// // // // //   if (!jwt) return <p className="text-red-500">Not signed in.</p>

// // // // //   const { id: userId } = verify(jwt, process.env.JWT_SECRET!) as { id: number }

// // // // //   /* fetch all paid / confirmed bookings for this user */
// // // // //   const supa = supabaseServer(true)
// // // // //   const { data, error } = await supa
// // // // //     .from('visa_applications')
// // // // //     .select('id,country,appointment_date,status,plan')
// // // // //     .eq('user_id', userId)
// // // // //     .in('status', ['paid', 'confirmed'])
// // // // //     .order('appointment_date')

// // // // //   if (error) return <p className="text-red-500">{error.message}</p>

// // // // //   const today = new Date().setHours(0, 0, 0, 0)
// // // // //   const upcoming  = (data ?? []).filter(b => new Date(b.appointment_date).getTime() >= today)
// // // // //   const completed = (data ?? []).filter(b => new Date(b.appointment_date).getTime() <  today)

// // // // //   const List = ({ rows }:{ rows: typeof data }) => (
// // // // //     <ul className="divide-y rounded-md border bg-card">
// // // // //       {rows.map(b => (
// // // // //         <li key={b.id} className="flex items-center justify-between px-4 py-3">
// // // // //           <div>
// // // // //             <p className="font-medium">{b.country}</p>
// // // // //             <p className="text-xs text-muted-foreground">
// // // // //               {new Date(b.appointment_date).toLocaleDateString()} • {b.plan}
// // // // //             </p>
// // // // //           </div>
// // // // //           <Link href={`/dashboard/bookings?id=${b.id}`} className="underline text-primary text-sm">
// // // // //             View
// // // // //           </Link>
// // // // //         </li>
// // // // //       ))}
// // // // //     </ul>
// // // // //   )

// // // // //   return (
// // // // //     <div className="space-y-10">
// // // // //       {upcoming.length ? (
// // // // //         <section>
// // // // //           <h2 className="text-lg font-semibold mb-2">Upcoming appointment</h2>
// // // // //           <List rows={upcoming} />
// // // // //         </section>
// // // // //       ) : (
// // // // //         <section className="rounded-md border bg-card p-6 text-center">
// // // // //           <p className="font-medium mb-1">No upcoming appointment</p>
// // // // //           <Link href="/apply" className="text-primary underline">
// // // // //             Book your first visa →
// // // // //           </Link>
// // // // //         </section>
// // // // //       )}

// // // // //       {completed.length > 0 && (
// // // // //         <section>
// // // // //           <h2 className="text-lg font-semibold mb-2">Completed appointments</h2>
// // // // //           <List rows={completed} />
// // // // //         </section>
// // // // //       )}
// // // // //     </div>
// // // // //   )
// // // // // }


// // // // // // src/app/dashboard/page.tsx

// // // // // import { cookies } from 'next/headers'
// // // // // import { verify }  from 'jsonwebtoken'
// // // // // import { supabaseServer } from '@/lib/supabase/server'
// // // // // import Link from 'next/link'
// // // // // import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

// // // // // export const dynamic = 'force-dynamic'

// // // // // export default async function DashboardHome() {
// // // // //   const cookieStore = await cookies()
// // // // //   const jwt   = cookieStore.get('token')?.value
// // // // //   if (!jwt) return <p className="text-red-500">Not signed in.</p>

// // // // //   const { id: userId } = verify(jwt, process.env.JWT_SECRET!) as { id: number }

// // // // //   const supa = supabaseServer(true)
// // // // //   const { data, error } = await supa
// // // // //     .from('visa_applications')
// // // // //     .select('id,country,appointment_date,status,plan')
// // // // //     .eq('user_id', userId)
// // // // //     .in('status', ['paid', 'confirmed'])
// // // // //     .order('appointment_date')

// // // // //   if (error) return <p className="text-red-500">{error.message}</p>

// // // // //   const today = new Date().setHours(0, 0, 0, 0)
// // // // //   const upcoming  = (data ?? []).filter(b => new Date(b.appointment_date).getTime() >= today)
// // // // //   const completed = (data ?? []).filter(b => new Date(b.appointment_date).getTime() <  today)

// // // // //   const List = ({ rows }:{ rows: typeof data }) => (
// // // // //     <div className="grid gap-4 md:grid-cols-2">
// // // // //       {rows.map(b => (
// // // // //         <Card key={b.id}>
// // // // //             <CardHeader>
// // // // //                 <CardTitle>{b.country}</CardTitle>
// // // // //             </CardHeader>
// // // // //             <CardContent>
// // // // //                 <p className="text-sm text-muted-foreground">
// // // // //                     {new Date(b.appointment_date).toLocaleDateString()} • {b.plan}
// // // // //                 </p>
// // // // //                 <Link href={`/dashboard/bookings?id=${b.id}`} className="text-primary underline text-sm mt-2 inline-block">
// // // // //                     View Details
// // // // //                 </Link>
// // // // //             </CardContent>
// // // // //         </Card>
// // // // //       ))}
// // // // //     </div>
// // // // //   )

// // // // //   return (
// // // // //     <div className="space-y-10">
// // // // //       {upcoming.length ? (
// // // // //         <section>
// // // // //           <h2 className="text-lg font-semibold mb-2">Upcoming appointment</h2>
// // // // //           <List rows={upcoming} />
// // // // //         </section>
// // // // //       ) : (
// // // // //         <section className="rounded-md border bg-card p-6 text-center">
// // // // //           <p className="font-medium mb-1">No upcoming appointment</p>
// // // // //           <Link href="/apply" className="text-primary underline">
// // // // //             Book your first visa →
// // // // //           </Link>
// // // // //         </section>
// // // // //       )}

// // // // //       {completed.length > 0 && (
// // // // //         <section>
// // // // //           <h2 className="text-lg font-semibold mb-2">Completed appointments</h2>
// // // // //           <List rows={completed} />
// // // // //         </section>
// // // // //       )}
// // // // //     </div>
// // // // //   )
// // // // // }
// // // // 'use client'

// // // // import { useEffect, useState } from 'react'
// // // // import Link from 'next/link'
// // // // import { useRouter } from 'next/navigation'
// // // // import { Button } from '@/components/ui/button'
// // // // import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
// // // // import { Badge } from '@/components/ui/badge'
// // // // import { Skeleton } from '@/components/ui/skeleton'
// // // // import { Download, FileText, Globe2, Loader2, PlusCircle, Receipt, Search, CheckCircle2, Clock, AlertCircle } from 'lucide-react'
// // // // import { useAuth } from '@/context/AuthContext'

// // // // type AppStatus = 'paid' | 'in_progress' | 'submitted' | 'approved' | 'rejected' | 'draft'
// // // // type PlanName = 'Basic' | 'Express' | 'Door' | string

// // // // type VisaApplication = {
// // // //   id: string
// // // //   country: string
// // // //   plan: PlanName
// // // //   travelers: number
// // // //   status: AppStatus
// // // //   created_at: string
// // // //   updated_at: string
// // // //   tracking_id?: string
// // // //   pdf_url?: string
// // // //   invoice_url?: string
// // // // }

// // // // type DashboardResponse = {
// // // //   stats: {
// // // //     total: number
// // // //     approved: number
// // // //     in_progress: number
// // // //     rejected: number
// // // //   }
// // // //   recent: VisaApplication[]
// // // //   drafts: VisaApplication[]
// // // // }

// // // // export default function UserDashboardPage() {
// // // //   const router = useRouter()
// // // //   const { session } = useAuth()
// // // //   const [loading, setLoading] = useState(true)
// // // //   const [data, setData] = useState<DashboardResponse | null>(null)
// // // //   const [err, setErr] = useState<string | null>(null)

// // // //   useEffect(() => {
// // // //     if (!session) return
// // // //     ;(async () => {
// // // //       try {
// // // //         const res = await fetch('/api/dashboard', { cache: 'no-store' })
// // // //         if (!res.ok) throw new Error('Failed to fetch dashboard')
// // // //         const json = (await res.json()) as DashboardResponse
// // // //         setData(json)
// // // //       } catch (e: any) {
// // // //         setErr(e?.message || 'Something went wrong')
// // // //       } finally {
// // // //         setLoading(false)
// // // //       }
// // // //     })()
// // // //   }, [session])

// // // //   if (!session) {
// // // //     return (
// // // //       <div className="mx-auto max-w-6xl px-4 py-10">
// // // //         <Card className="border-none shadow-sm">
// // // //           <CardContent className="py-10 text-center">
// // // //             <h1 className="text-2xl font-semibold">Please sign in to view your dashboard</h1>
// // // //             <p className="mt-2 text-sm text-muted-foreground">Your applications, drafts, and receipts live here.</p>
// // // //             <div className="mt-6">
// // // //               <Button onClick={() => router.push('/')}>Back to Home</Button>
// // // //             </div>
// // // //           </CardContent>
// // // //         </Card>
// // // //       </div>
// // // //     )
// // // //   }

// // // //   return (
// // // //     <div className="mx-auto max-w-6xl px-4 py-8">
// // // //       {/* Page header – mirrors homepage typography/colors */}
// // // //       <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
// // // //         <div>
// // // //           <h1 className="text-3xl font-semibold tracking-tight">Your Dashboard</h1>
// // // //           <p className="text-sm text-muted-foreground">Track applications, continue drafts, and download receipts.</p>
// // // //         </div>
// // // //         <div className="flex gap-2">
// // // //           <Button asChild>
// // // //             <Link href="/apply"> <PlusCircle className="mr-2 h-4 w-4" /> Start New Application</Link>
// // // //           </Button>
// // // //           <Button variant="secondary" asChild>
// // // //             <Link href="/track"><Search className="mr-2 h-4 w-4" /> Track Application</Link>
// // // //           </Button>
// // // //         </div>
// // // //       </div>

// // // //       {/* Stats row */}
// // // //       <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
// // // //         {loading ? (
// // // //           [1,2,3,4].map((i) => (
// // // //             <Card key={i} className="border-none shadow-sm">
// // // //               <CardContent className="p-5">
// // // //                 <Skeleton className="h-4 w-24" />
// // // //                 <Skeleton className="mt-4 h-8 w-16" />
// // // //               </CardContent>
// // // //             </Card>
// // // //           ))
// // // //         ) : err ? (
// // // //           <Card className="col-span-1 md:col-span-4 border-destructive text-destructive shadow-sm">
// // // //             <CardContent className="flex items-center gap-3 p-5">
// // // //               <AlertCircle className="h-5 w-5" />
// // // //               <div>
// // // //                 <p className="font-medium">Couldn’t load your stats</p>
// // // //                 <p className="text-sm opacity-80">{err}</p>
// // // //               </div>
// // // //             </CardContent>
// // // //           </Card>
// // // //         ) : (
// // // //           <>
// // // //             <StatCard label="Total Applications" value={data?.stats.total ?? 0} icon={<FileText className="h-4 w-4" />} />
// // // //             <StatCard label="Approved" value={data?.stats.approved ?? 0} icon={<CheckCircle2 className="h-4 w-4" />} />
// // // //             <StatCard label="In Progress" value={data?.stats.in_progress ?? 0} icon={<Clock className="h-4 w-4" />} />
// // // //             <StatCard label="Rejected" value={data?.stats.rejected ?? 0} icon={<AlertCircle className="h-4 w-4" />} />
// // // //           </>
// // // //         )}
// // // //       </div>

// // // //       {/* Recent Applications */}
// // // //       <section className="mt-8">
// // // //         <Card className="border-none shadow-sm">
// // // //           <CardHeader className="pb-3">
// // // //             <CardTitle className="text-base font-semibold">Recent Applications</CardTitle>
// // // //           </CardHeader>
// // // //           <CardContent className="pt-0">
// // // //             {loading ? (
// // // //               <RecentSkeleton />
// // // //             ) : (data?.recent?.length ?? 0) === 0 ? (
// // // //               <EmptyState />
// // // //             ) : (
// // // //               <div className="overflow-x-auto">
// // // //                 <table className="w-full text-sm">
// // // //                   <thead className="text-muted-foreground">
// // // //                     <tr className="border-b">
// // // //                       <th className="py-3 text-left font-medium">Country</th>
// // // //                       <th className="py-3 text-left font-medium">Plan</th>
// // // //                       <th className="py-3 text-left font-medium">Travelers</th>
// // // //                       <th className="py-3 text-left font-medium">Status</th>
// // // //                       <th className="py-3 text-left font-medium">Updated</th>
// // // //                       <th className="py-3 text-right font-medium">Actions</th>
// // // //                     </tr>
// // // //                   </thead>
// // // //                   <tbody>
// // // //                     {data?.recent?.map((row) => (
// // // //                       <tr key={row.id} className="border-b last:border-0">
// // // //                         <td className="py-3">
// // // //                           <div className="flex items-center gap-2">
// // // //                             <Globe2 className="h-4 w-4 opacity-70" />
// // // //                             <span className="font-medium">{row.country}</span>
// // // //                           </div>
// // // //                         </td>
// // // //                         <td className="py-3">{row.plan}</td>
// // // //                         <td className="py-3">{row.travelers}</td>
// // // //                         <td className="py-3">
// // // //                           <StatusBadge status={row.status} />
// // // //                         </td>
// // // //                         <td className="py-3">{new Date(row.updated_at || row.created_at).toLocaleDateString()}</td>
// // // //                         <td className="py-3">
// // // //                           <div className="flex items-center justify-end gap-2">
// // // //                             {/* Continue / View */}
// // // //                             {row.status === 'draft' ? (
// // // //                               <Button variant="secondary" size="sm" asChild>
// // // //                                 <Link href={`/apply/${encodeURIComponent(row.country.toLowerCase())}?draft=${row.id}`}>Continue</Link>
// // // //                               </Button>
// // // //                             ) : (
// // // //                               <Button variant="secondary" size="sm" asChild>
// // // //                                 <Link href={`/track?tid=${row.tracking_id || row.id}`}>View</Link>
// // // //                               </Button>
// // // //                             )}

// // // //                             {/* PDF */}
// // // //                             <Button size="sm" variant="outline" asChild disabled={!row.pdf_url}>
// // // //                               <a href={row.pdf_url || '#'} target={row.pdf_url ? '_blank' : undefined} rel="noreferrer">
// // // //                                 <FileText className="mr-2 h-4 w-4" /> PDF
// // // //                               </a>
// // // //                             </Button>

// // // //                             {/* Invoice */}
// // // //                             <Button size="sm" variant="outline" asChild disabled={!row.invoice_url}>
// // // //                               <a href={row.invoice_url || '#'} target={row.invoice_url ? '_blank' : undefined} rel="noreferrer">
// // // //                                 <Receipt className="mr-2 h-4 w-4" /> Invoice
// // // //                               </a>
// // // //                             </Button>
// // // //                           </div>
// // // //                         </td>
// // // //                       </tr>
// // // //                     ))}
// // // //                   </tbody>
// // // //                 </table>
// // // //               </div>
// // // //             )}
// // // //           </CardContent>
// // // //         </Card>
// // // //       </section>

// // // //       {/* Drafts */}
// // // //       <section className="mt-8">
// // // //         <Card className="border-none shadow-sm">
// // // //           <CardHeader className="pb-3">
// // // //             <CardTitle className="text-base font-semibold">Drafts</CardTitle>
// // // //           </CardHeader>
// // // //         </Card>
// // // //         <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
// // // //           {loading ? (
// // // //             [1,2].map((i) => <Skeleton key={i} className="h-24 w-full" />)
// // // //           ) : (data?.drafts?.length ?? 0) === 0 ? (
// // // //             <Card className="border-dashed">
// // // //               <CardContent className="flex items-center justify-between p-5">
// // // //                 <div>
// // // //                   <p className="font-medium">No drafts yet</p>
// // // //                   <p className="text-sm text-muted-foreground">Start an application and your progress will auto-save.</p>
// // // //                 </div>
// // // //                 <Button asChild><Link href="/apply"><PlusCircle className="mr-2 h-4 w-4" /> New</Link></Button>
// // // //               </CardContent>
// // // //             </Card>
// // // //           ) : (
// // // //             data?.drafts?.map((d) => (
// // // //               <Card key={d.id} className="border-none shadow-sm">
// // // //                 <CardContent className="flex items-center justify-between p-5">
// // // //                   <div>
// // // //                     <p className="font-medium">{d.country} — {d.plan}</p>
// // // //                     <p className="text-xs text-muted-foreground mt-1">Updated {new Date(d.updated_at).toLocaleString()}</p>
// // // //                   </div>
// // // //                   <div className="flex gap-2">
// // // //                     <Button variant="secondary" asChild>
// // // //                       <Link href={`/apply/${encodeURIComponent(d.country.toLowerCase())}?draft=${d.id}`}>Continue</Link>
// // // //                     </Button>
// // // //                     <Button variant="outline" asChild>
// // // //                       <Link href={`/apply/${encodeURIComponent(d.country.toLowerCase())}?draft=${d.id}&discard=1`}>Discard</Link>
// // // //                     </Button>
// // // //                   </div>
// // // //                 </CardContent>
// // // //               </Card>
// // // //             ))
// // // //           )}
// // // //         </div>
// // // //       </section>
// // // //     </div>
// // // //   )
// // // // }

// // // // function StatCard({ label, value, icon }: { label: string; value: number; icon: React.ReactNode }) {
// // // //   return (
// // // //     <Card className="border-none shadow-sm">
// // // //       <CardContent className="p-5">
// // // //         <div className="flex items-center justify-between">
// // // //           <span className="text-sm text-muted-foreground">{label}</span>
// // // //           <span className="opacity-70">{icon}</span>
// // // //         </div>
// // // //         <div className="mt-3 text-2xl font-semibold">{value}</div>
// // // //       </CardContent>
// // // //     </Card>
// // // //   )
// // // // }

// // // // function StatusBadge({ status }: { status: AppStatus }) {
// // // //   const map: Record<AppStatus, { label: string; variant: 'default' | 'secondary' | 'outline' }> = {
// // // //     paid:        { label: 'Paid',        variant: 'secondary' },
// // // //     in_progress: { label: 'In Progress', variant: 'secondary' },
// // // //     submitted:   { label: 'Submitted',   variant: 'secondary' },
// // // //     approved:    { label: 'Approved',    variant: 'default'   },
// // // //     rejected:    { label: 'Rejected',    variant: 'outline'   },
// // // //     draft:       { label: 'Draft',       variant: 'outline'   },
// // // //   }
// // // //   const m = map[status] || { label: status, variant: 'secondary' as const }
// // // //   return <Badge variant={m.variant}>{m.label}</Badge>
// // // // }

// // // // function EmptyState() {
// // // //   return (
// // // //     <div className="flex flex-col items-center gap-3 py-10 text-center">
// // // //       <div className="rounded-full p-3">
// // // //         <Loader2 className="h-5 w-5 animate-spin opacity-50" />
// // // //       </div>
// // // //       <p className="font-medium">No applications yet</p>
// // // //       <p className="max-w-sm text-sm text-muted-foreground">
// // // //         When you start a visa application, it will appear here for quick tracking and downloads.
// // // //       </p>
// // // //       <div className="mt-2">
// // // //         <Button asChild><Link href="/apply"><PlusCircle className="mr-2 h-4 w-4" /> Start Application</Link></Button>
// // // //       </div>
// // // //     </div>
// // // //   )
// // // // }

// // // // function RecentSkeleton() {
// // // //   return (
// // // //     <div className="space-y-3">
// // // //       {[1,2,3].map((i) => (
// // // //         <div key={i} className="flex items-center justify-between border-b pb-3">
// // // //           <div className="flex items-center gap-3">
// // // //             <Skeleton className="h-4 w-4" />
// // // //             <Skeleton className="h-4 w-32" />
// // // //           </div>
// // // //           <Skeleton className="h-4 w-14" />
// // // //           <Skeleton className="h-4 w-12" />
// // // //           <Skeleton className="h-6 w-20" />
// // // //         </div>
// // // //       ))}
// // // //     </div>
// // // //   )
// // // // }


// // // // src/app/dashboard/page.tsx
// // // 'use client'

// // // import DashboardLayout from '@/components/dashboard/DashboardLayout'
// // // import DashboardHeader from '@/components/dashboard/DashboardHeader'
// // // import OngoingApplications from '@/components/dashboard/OngoingApplications'
// // // import CompletedApplications from '@/components/dashboard/CompletedApplications'
// // // import PaymentInvoices from '@/components/dashboard/PaymentInvoices'
// // // import MyDocuments from '@/components/dashboard/MyDocuments'
// // // import ProgressTracker from '@/components/dashboard/ProgressTracker'
// // // import TrackApplication from '@/components/dashboard/TrackApplication'
// // // import SupportHelp from '@/components/dashboard/SupportHelp'

// // // export default function DashboardPage() {
// // //   return (
// // //     <DashboardLayout>
// // //       <DashboardHeader />
// // //       <div className="space-y-6">
// // //         <ProgressTracker />
// // //         <OngoingApplications />
// // //         <CompletedApplications />
// // //         <MyDocuments />
// // //         <PaymentInvoices />
// // //         <TrackApplication />
// // //         <SupportHelp />
// // //       </div>
// // //     </DashboardLayout>
// // //   )
// // // }


// // 'use client'

// // import { DashboardHeader } from '@/components/dashboard/DashboardHeader'
// // import  AppSidebar  from '@/components/dashboard/AppSidebar'
// // import { TrackApplication } from '@/components/dashboard/TrackApplication'
// // import { MyDocuments } from '@/components/dashboard/MyDocuments'
// // import { PaymentInvoices } from '@/components/dashboard/PaymentInvoices'
// // import { SupportHelp } from '@/components/dashboard/SupportHelp'
// // import {  SidebarTrigger } from '@/components/ui/sidebar'
// // import { Menu } from 'lucide-react'
// // import { useState } from 'react'

// // export default function DashboardPage() {
// //   const [activeSection, setActiveSection] = useState<'tracking' | 'documents' | 'invoices' | 'support'>('tracking')

// //   const renderContent = () => {
// //     switch (activeSection) {
// //       case 'tracking':
// //         return <TrackApplication />
// //       case 'documents':
// //         return <MyDocuments />
// //       case 'invoices':
// //         return <PaymentInvoices />
// //       case 'support':
// //         return <SupportHelp />
// //       default:
// //         return <TrackApplication />
// //     }
// //   }

// //   return (<DashboardHeader />
// //         <div className="flex w-full">
// //           <AppSidebar activeSection={activeSection} onSectionChange={setActiveSection} />
// //           <main className="flex-1 min-h-screen">
// //             <div className="sticky top-0 z-40 bg-background/95 backdrop-blur-md border-b border-border/50">
// //               <div className="flex items-center gap-4 p-4">
// //                 <SidebarTrigger className="hover:bg-primary/10 hover:scale-110 transition-all duration-200 rounded-lg p-2">
// //                   <Menu className="h-5 w-5 text-primary" />
// //                 </SidebarTrigger>
// //                 <div className="flex-1">
// //                   <h2 className="text-lg font-semibold text-foreground capitalize">
// //                     {activeSection === 'tracking'
// //                       ? 'Application Tracking'
// //                       : activeSection === 'documents'
// //                       ? 'My Documents'
// //                       : activeSection === 'invoices'
// //                       ? 'Payment Invoices'
// //                       : 'Support & Help'}
// //                   </h2>
// //                 </div>
// //               </div>
// //             </div>

// //             <div className="container mx-auto px-4 py-8">
// //               <div className="animate-fade-in">{renderContent()}</div>
// //             </div>
// //           </main>
// //         </div>
// //   )
// // }


// 'use client'

// import { DashboardHeader } from '@/components/dashboard/DashboardHeader'
// import AppSidebar from '@/components/dashboard/AppSidebar'
// import { TrackApplication } from '@/components/dashboard/TrackApplication'
// import { MyDocuments } from '@/components/dashboard/MyDocuments'
// import { PaymentInvoices } from '@/components/dashboard/PaymentInvoices'
// import { SupportHelp } from '@/components/dashboard/SupportHelp'
// import { SidebarTrigger } from '@/components/ui/sidebar'
// import { Menu } from 'lucide-react'
// import { useState } from 'react'

// export default function DashboardPage() {
//   const [activeSection, setActiveSection] = useState<
//     'tracking' | 'documents' | 'invoices' | 'support'
//   >('tracking')

//   const renderContent = () => {
//     switch (activeSection) {
//       case 'tracking':
//         return <TrackApplication />
//       case 'documents':
//         return <MyDocuments />
//       case 'invoices':
//         return <PaymentInvoices />
//       case 'support':
//         return <SupportHelp />
//       default:
//         return <TrackApplication />
//     }
//   }

//   return (
//     <>
//       <DashboardHeader />

//       <div className="flex w-full">
//         <AppSidebar
//           activeSection={activeSection}
//           onSectionChange={setActiveSection}
//         />

//         <main className="flex-1 min-h-screen">
//           <div className="sticky top-0 z-40 bg-background/95 backdrop-blur-md border-b border-border/50">
//             <div className="flex items-center gap-4 p-4">
//               <SidebarTrigger className="hover:bg-primary/10 hover:scale-110 transition-all duration-200 rounded-lg p-2">
//                 <Menu className="h-5 w-5 text-primary" />
//               </SidebarTrigger>
//               <div className="flex-1">
//                 <h2 className="text-lg font-semibold text-foreground capitalize">
//                   {activeSection === 'tracking'
//                     ? 'Application Tracking'
//                     : activeSection === 'documents'
//                     ? 'My Documents'
//                     : activeSection === 'invoices'
//                     ? 'Payment Invoices'
//                     : 'Support & Help'}
//                 </h2>
//               </div>
//             </div>
//           </div>

//           <div className="container mx-auto px-4 py-8">
//             <div className="animate-fade-in">{renderContent()}</div>
//           </div>
//         </main>
//       </div>
//     </>
//   )
// }


'use client'

import { DashboardHeader } from '@/components/dashboard/DashboardHeader'
import AppSidebar from '@/components/dashboard/AppSidebar'
import { TrackApplication } from '@/components/dashboard/TrackApplication'
import  MyDocuments  from '@/components/dashboard/MyDocuments'
import  PaymentInvoices  from '@/components/dashboard/PaymentInvoices'
import  SupportHelp  from '@/components/dashboard/SupportHelp'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { Menu } from 'lucide-react'
import { useState, useMemo } from 'react'


export default function DashboardPage() {
  const [activeSection, setActiveSection] = useState<
    'tracking' | 'documents' | 'invoices' | 'support'
  >('tracking')

  const titles = {
    tracking: 'Application Tracking',
    documents: 'My Documents',
    invoices: 'Payment Invoices',
    support: 'Support & Help',
  } as const

  const headerTitle = useMemo(() => titles[activeSection], [activeSection])

  const renderContent = () => {
    switch (activeSection) {
      case 'tracking':
        return <TrackApplication />
      case 'documents':
        return <MyDocuments />
      case 'invoices':
        return <PaymentInvoices />
      case 'support':
        return <SupportHelp />
      default:
        return <TrackApplication />
    }
  }

  return (
    <>
      {/* Remove hero header for a cleaner dashboard */}

      <div className="flex w-full">
        <AppSidebar
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />

        <main className="flex-1 min-h-screen">
          <div className="container mx-auto px-4 pt-3 pb-8">
            <div className="animate-fade-in">{renderContent()}</div>
          </div>
        </main>
      </div>
    </>
  )
}
