
// // // 'use client'

// // // import { useEffect, useState } from 'react'
// // // import { useSearchParams } from 'next/navigation'
// // // import { ExecutiveCard } from '@/components/ui/ExecutiveCard'
// // // import { Users, FileDown, CheckCircle } from 'lucide-react'
// // // import { Card } from '@/components/ui/card'

// // // interface VisaData {
// // //   country: string
// // //   plan: string
// // //   appointment_date: string
// // //   appointment_time: string
// // //   appointment_address: string
// // //   traveler_data: any[]
// // //   pdfs: string[]
// // // }

// // // export default function ConfirmationClient() {
// // //   const searchParams = useSearchParams()
// // //   const id = searchParams.get('id') ?? ''
// // //   const [data, setData] = useState<VisaData | null>(null)

// // //   useEffect(() => {
// // //     if (!id) return

// // //     fetch(`/api/get-confirmation?id=${id}`)
// // //       .then((res) => res.json())
// // //       .then((res) => setData(res.data))
// // //       .catch(() => setData(null))
// // //   }, [id])

// // //   if (!data) {
// // //     return <p className="text-center py-20">Loading confirmation data...</p>
// // //   }

// // //   const executive = {
// // //     name: 'Rakesh Sharma',
// // //     designation: 'Senior Visa Executive',
// // //     countryExpertise: data.country,
// // //     contact: '+91-8888888888',
// // //     country: data.country
// // //   }

// // //   return (
// // //     <div className="max-w-3xl mx-auto px-4 py-12">
// // //       <div className="bg-card shadow-xl rounded-xl p-8 border space-y-6">

// // //         <div className="flex items-center gap-3 text-green-600">
// // //           <CheckCircle className="w-6 h-6" />
// // //           <h1 className="text-2xl font-semibold">
// // //             Booking confirmed for <strong>{data.appointment_date}</strong> at <strong>{data.appointment_time}</strong>
// // //           </h1>
// // //         </div>

// // //         <p className="text-muted-foreground text-sm">
// // //           Our executive will call you shortly to verify everything.
// // //         </p>

// // //         <ExecutiveCard {...executive} />

// // //         <hr className="my-4" />

// // //         <h2 className="text-lg font-semibold">Traveler Documents</h2>
// // //         {data.traveler_data.map((trav: any, index: number) => (
// // //           <Card key={index} className="p-4 mb-4 space-y-2 bg-muted border">
// // //             <div className="flex justify-between">
// // //               <div>
// // //                 <p className="font-semibold">Traveler {index + 1}</p>
// // //                 <p className="text-sm text-muted-foreground">
// // //                   {trav.firstName ?? trav.first_name} {trav.lastName ?? trav.last_name}
// // //                 </p>
// // //               </div>
// // //               <a
// // //                 href={data.pdfs?.[index] ?? '#'}
// // //                 download
// // //                 className="text-blue-600 underline flex items-center gap-1"
// // //               >
// // //                 <FileDown className="w-4 h-4" />
// // //                 Download PDF
// // //               </a>
// // //             </div>
// // //             <div className="grid grid-cols-2 gap-3 text-sm text-muted-foreground">
// // //               <div><strong>Passport:</strong> {trav.passport || trav['Passport Number'] || 'N/A'}</div>
// // //               <div><strong>DOB:</strong> {trav.dob || trav['Date of Birth'] || 'N/A'}</div>
// // //               <div><strong>Nationality:</strong> {trav.nationality || 'N/A'}</div>
// // //             </div>
// // //           </Card>
// // //         ))}

// // //         <hr className="my-4" />

// // //         {data.plan === 'Docs on Call' ? (
// // //           <div className="space-y-2 text-sm text-muted-foreground">
// // //             <p>✅ Please prepare the following documents:</p>
// // //             <ul className="list-disc ml-6">
// // //               <li>Original passport (scanned)</li>
// // //               <li>Travel itinerary (if available)</li>
// // //               <li>Proof of current address</li>
// // //             </ul>
// // //           </div>
// // //         ) : (
// // //           <div className="space-y-2 text-sm text-muted-foreground">
// // //             <p>✅ Our executive will visit you at:</p>
// // //             <p className="font-medium">📍 {data.appointment_address}</p>
// // //             <ul className="list-disc ml-6">
// // //               <li>Keep all original documents ready</li>
// // //               <li>Have a printed copy of this confirmation</li>
// // //             </ul>
// // //           </div>
// // //         )}

// // //         <div className="mt-6 space-y-2 text-sm">
// // //           <a
// // //             href="https://chat.whatsapp.com/your-community-link"
// // //             target="_blank"
// // //             className="inline-flex items-center gap-2 text-green-600 underline"
// // //           >
// // //             <Users className="w-4 h-4" />
// // //             Join our WhatsApp Community
// // //           </a>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   )
// // // }


// // 'use client'

// // import { useEffect, useState } from 'react'
// // import { useSearchParams } from 'next/navigation'
// // import { ExecutiveCard } from '@/components/ui/ExecutiveCard'
// // import { Users, FileDown, Loader2, CheckCircle } from 'lucide-react'
// // import { Card } from '@/components/ui/card'

// // interface VisaData {
// //   country: string
// //   plan: string
// //   appointment_date: string
// //   appointment_time: string
// //   appointment_address: string
// //   traveler_data: any[]
// //   pdfUrl?: string              /* single file for all */
// //   pdfs?: string[] | string     /* array – or JSON stringified array */
// // }

// // export default function ConfirmationClient() {
// //   const searchParams = useSearchParams()
// //   const id = searchParams.get('id') ?? ''
// //   const [data, setData] = useState<VisaData | null>(null)
// //   const [loading, setLoading] = useState(true)

// //   /* fetch once */
// //   useEffect(() => {
// //     if (!id) return
// //     ; (async () => {
// //       try {
// //         const res = await fetch(`/api/get-confirmation?id=${id}`)
// //         const j = await res.json()
// //         setData(j.data ?? null)
// //       } catch {
// //         setData(null)
// //       } finally {
// //         setLoading(false)
// //       }
// //     })()
// //   }, [id])

// //   if (loading) {
// //     return (
// //       <p className="flex items-center justify-center gap-2 py-20 text-muted-foreground">
// //         <Loader2 className="animate-spin w-4 h-4" /> Loading confirmation …
// //       </p>
// //     )
// //   }
// //   if (!data) {
// //     return <p className="text-center py-20">Confirmation not found.</p>
// //   }

// //   /* ─── normalise links ─── */
// //   let pdfLinks: string[] = []

// //   if (Array.isArray(data.pdfs)) {
// //     pdfLinks = data.pdfs
// //   } else if (typeof data.pdfs === 'string' && data.pdfs.trim().startsWith('[')) {
// //     /* sometimes comes as JSON stringified array */
// //     try { pdfLinks = JSON.parse(data.pdfs) } catch { /* ignore */ }
// //   } else if (data.pdfUrl) {
// //     pdfLinks = [data.pdfUrl]
// //   }

// //   const executive = {
// //     name: 'Rakesh Sharma',
// //     designation: 'Senior Visa Executive',
// //     countryExpertise: data.country,
// //     contact: '+91-8888888888',
// //     country: data.country
// //   }

// //   return (
// //     <div className="max-w-3xl mx-auto px-4 py-12">
// //       <div className="bg-card shadow-xl rounded-xl p-8 border space-y-6">

// //         <div className="flex items-center gap-3 text-green-600">
// //           <CheckCircle className="w-6 h-6" />
// //           <h1 className="text-2xl font-semibold">
// //             Booking confirmed for&nbsp;
// //             <strong>{data.appointment_date}</strong>&nbsp;at&nbsp;
// //             <strong>{data.appointment_time}</strong>
// //           </h1>
// //         </div>

// //         <p className="text-muted-foreground text-sm">
// //           Our executive will call you shortly to verify everything.
// //         </p>

// //         <ExecutiveCard {...executive} />

// //         <hr className="my-4" />

// //         <h2 className="text-lg font-semibold">Traveller Documents</h2>

// //         {data.traveler_data.map((trav: any, index: number) => {
// //           const link = pdfLinks[index] ?? pdfLinks[0] ?? null
// //           return (
// //             <Card key={index} className="p-4 mb-4 space-y-2 bg-muted border">
// //               <div className="flex justify-between">
// //                 <div>
// //                   <p className="font-semibold">Traveller {index + 1}</p>
// //                   <p className="text-sm text-muted-foreground">
// //                     {trav.firstName ?? trav.first_name}{' '}
// //                     {trav.lastName ?? trav.last_name}
// //                   </p>
// //                 </div>

// //                 {link ? (
// //                   <a
// //                     href={link}
// //                     className="text-blue-600 underline flex items-center gap-1"
// //                     download
// //                     target="_blank"
// //                     rel="noopener"
// //                   >
// //                     <FileDown className="w-4 h-4" />
// //                     Download PDF
// //                   </a>
// //                 ) : (
// //                   <span className="text-xs text-muted-foreground">
// //                     (processing)
// //                   </span>
// //                 )}
// //                 {data.invoice_url && (
// //                   <Button asChild size="lg" className="mt-4">
// //                     <a href={data.invoice_url} target="_blank" download>
// //                       Download Invoice
// //                     </a>
// //                   </Button>
// //                 )}
// //               </div>

// //               <div className="grid grid-cols-2 gap-3 text-sm text-muted-foreground">
// //                 <div>
// //                   <strong>Passport:</strong>{' '}
// //                   {trav.passport ||
// //                     trav['Passport Number'] ||
// //                     trav.passport_number ||
// //                     'N/A'}
// //                 </div>
// //                 <div>
// //                   <strong>DOB:</strong>{' '}
// //                   {trav.dob || trav['Date of Birth'] || trav.date_of_birth || 'N/A'}
// //                 </div>
// //                 <div>
// //                   <strong>Nationality:</strong> {trav.nationality || 'N/A'}
// //                 </div>
// //               </div>
// //             </Card>
// //           )
// //         })}

// //         <hr className="my-4" />

// //         {data.plan === 'Docs on Call' ? (
// //           <div className="space-y-2 text-sm text-muted-foreground">
// //             <p>✅ Please prepare the following documents:</p>
// //             <ul className="list-disc ml-6">
// //               <li>Original passport (scanned)</li>
// //               <li>Travel itinerary (if available)</li>
// //               <li>Proof of current address</li>
// //             </ul>
// //           </div>
// //         ) : (
// //           <div className="space-y-2 text-sm text-muted-foreground">
// //             <p>✅ Our executive will visit you at:</p>
// //             <p className="font-medium">📍 {data.appointment_address}</p>
// //             <ul className="list-disc ml-6">
// //               <li>Keep all original documents ready</li>
// //               <li>Have a printed copy of this confirmation</li>
// //             </ul>
// //           </div>
// //         )}

// //         <div className="mt-6 space-y-2 text-sm">
// //           <a
// //             href="https://chat.whatsapp.com/your-community-link"
// //             target="_blank"
// //             className="inline-flex items-center gap-2 text-green-600 underline"
// //           >
// //             <Users className="w-4 h-4" />
// //             Join our WhatsApp Community
// //           </a>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }


// // 'use client'

// // import { useEffect, useState } from 'react'
// // import { useSearchParams } from 'next/navigation'
// // import { ExecutiveCard } from '@/components/ui/ExecutiveCard'
// // import { Users, FileDown, Loader2, CheckCircle } from 'lucide-react'
// // import { Card } from '@/components/ui/card'
// // import { Button } from '@/components/ui/button'

// // interface VisaData {
// //   country: string
// //   plan: string
// //   appointment_date: string
// //   appointment_time: string
// //   appointment_address: string
// //   traveler_data: any[]
// //   pdfUrl?: string
// //   pdfs?: string[] | string
// //   invoice_url?: string
// // }

// // export default function ConfirmationClient() {
// //   const searchParams = useSearchParams()
// //   const id = searchParams.get('id') ?? ''
// //   const [data, setData] = useState<VisaData | null>(null)
// //   const [loading, setLoading] = useState(true)

// //   useEffect(() => {
// //     if (!id) return
// //     ;(async () => {
// //       const res = await fetch(`/api/get-confirmation?id=${id}`)
// //       const j   = await res.json()
// //       setData(j.data ?? null)
// //       setLoading(false)
// //     })()
// //   }, [id])

// //   if (loading) {
// //     return (
// //       <p className="flex items-center justify-center gap-2 py-20 text-muted-foreground">
// //         <Loader2 className="animate-spin w-4 h-4" /> Loading confirmation …
// //       </p>
// //     )
// //   }
// //   if (!data) {
// //     return <p className="text-center py-20">Confirmation not found.</p>
// //   }

// //   /* normalise PDF array */
// //   let pdfLinks: string[] = []
// //   if (Array.isArray(data.pdfs)) pdfLinks = data.pdfs
// //   else if (typeof data.pdfs === 'string') {
// //     try { pdfLinks = JSON.parse(data.pdfs) } catch {}
// //   } else if (data.pdfUrl) pdfLinks = [data.pdfUrl]

// //   const executive = {
// //     name: 'Rakesh Sharma',
// //     designation: 'Senior Visa Executive',
// //     countryExpertise: data.country,
// //     contact: '+91-8888888888',
// //     country: data.country,
// //   }

// //   return (
// //     <div className="w-full max-w-5xl mx-auto px-4 py-12">
// //       <div className="bg-card shadow-xl rounded-xl p-8 border space-y-6">

// //         {/* header */}
// //         <div className="flex items-center gap-3 text-green-600">
// //           <CheckCircle className="w-6 h-6" />
// //           <h1 className="text-2xl font-semibold">
// //           Booking confirmed for <strong>{data.appointment_date}</strong> at <strong>{data.appointment_time}</strong>
// //           </h1>
// //         </div>

// //         <p className="text-muted-foreground text-sm">
// //           Our executive will call you shortly to verify everything.
// //         </p>

// //         <ExecutiveCard {...executive} />

// //         <hr className="my-4" />

// //         {/* PDFs */}
// //         <h2 className="text-lg font-semibold">Traveller Documents</h2>

// //         {data.traveler_data.map((trav: any, idx: number) => {
// //           const link = pdfLinks[idx] ?? pdfLinks[0] ?? null
// //           return (
// //             <Card key={idx} className="p-4 mb-4 space-y-2 bg-muted border">
// //               <div className="flex justify-between">
// //                 <div>
// //                   <p className="font-semibold">Traveller {idx + 1}</p>
// //                   <p className="text-sm text-muted-foreground">
// //                     {trav.firstName ?? trav.first_name}{' '}
// //                     {trav.lastName ?? trav.last_name}
// //                   </p>
// //                 </div>

// //                 {link ? (
// //                   <a
// //                     href={link}
// //                     className="text-blue-600 underline flex items-center gap-1"
// //                     download target="_blank" rel="noopener"
// //                   >
// //                     <FileDown className="w-4 h-4" /> Download PDF
// //                   </a>
// //                 ) : (
// //                   <span className="text-xs text-muted-foreground">(processing)</span>
// //                 )}
// //               </div>

// //               <div className="grid grid-cols-2 gap-3 text-sm text-muted-foreground">
// //                 <div><strong>Passport:</strong> {trav.passport ?? trav['Passport Number'] ?? 'N/A'}</div>
// //                 <div><strong>DOB:</strong> {trav.dob ?? trav['Date of Birth'] ?? 'N/A'}</div>
// //                 <div><strong>Nationality:</strong> {trav.nationality || 'N/A'}</div>
// //               </div>
// //             </Card>
// //           )
// //         })}

// //         {/* invoice button */}
// //         {data.invoice_url && (
// //           <Button asChild size="lg">
// //             <a href={data.invoice_url} target="_blank" download>
// //               Download Invoice
// //             </a>
// //           </Button>
// //         )}

// //         <hr className="my-4" />

// //         {/* instructions */}
// //         {data.plan === 'Docs on Call' ? (
// //           <div className="space-y-2 text-sm text-muted-foreground">
// //             <p>✅ Please prepare the following documents:</p>
// //             <ul className="list-disc ml-6">
// //               <li>Original passport (scanned)</li>
// //               <li>Travel itinerary (if available)</li>
// //               <li>Proof of current address</li>
// //             </ul>
// //           </div>
// //         ) : (
// //           <div className="space-y-2 text-sm text-muted-foreground">
// //             <p>✅ Our executive will visit you at:</p>
// //             <p className="font-medium">📍 {data.appointment_address}</p>
// //             <ul className="list-disc ml-6">
// //               <li>Keep all original documents ready</li>
// //               <li>Have a printed copy of this confirmation</li>
// //             </ul>
// //           </div>
// //         )}

// //         <div className="mt-6 space-y-2 text-sm">
// //           <a
// //             href="https://chat.whatsapp.com/your-community-link"
// //             target="_blank"
// //             className="inline-flex items-center gap-2 text-green-600 underline"
// //           >
// //             <Users className="w-4 h-4" /> Join our WhatsApp Community
// //           </a>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }


// // // src/app/confirmation/ConfirmationClient.tsx

// // 'use client'

// // import { useEffect, useState } from 'react'
// // import { useSearchParams } from 'next/navigation'
// // import { ExecutiveCard } from '@/components/ui/ExecutiveCard'
// // import { Users, FileDown, Loader2, CheckCircle } from 'lucide-react'
// // import { Card } from '@/components/ui/card'
// // import { Button } from '@/components/ui/button'

// // interface VisaData {
// //   country: string
// //   plan: string
// //   appointment_date: string
// //   appointment_time: string
// //   appointment_address: string
// //   traveler_data: any[]
// //   pdfUrl?: string
// //   pdfs?: string[] | string
// //   invoice_url?: string
// // }

// // const executives = [
// //     {
// //       name: 'Rakesh Sharma',
// //       designation: 'Senior Visa Executive',
// //       countryExpertise: 'spain',
// //       contact: '+91-9876543210',
// //       avatar: 'https://randomuser.me/api/portraits/men/75.jpg'
// //     },
// //     {
// //       name: 'Priya Singh',
// //       designation: 'Visa Consultant',
// //       countryExpertise: 'france',
// //       contact: '+91-9876543211',
// //       avatar: 'https://randomuser.me/api/portraits/women/75.jpg'
// //     },
// //     {
// //         name: 'Amit Patel',
// //         designation: 'Visa Specialist',
// //         countryExpertise: 'germany',
// //         contact: '+91-9876543212',
// //         avatar: 'https://randomuser.me/api/portraits/men/76.jpg'
// //     }
// // ]

// // export default function ConfirmationClient() {
// //   const searchParams = useSearchParams()
// //   const id = searchParams.get('id') ?? ''
// //   const [data, setData] = useState<VisaData | null>(null)
// //   const [loading, setLoading] = useState(true)

// //   useEffect(() => {
// //     if (!id) return
// //     ;(async () => {
// //       const res = await fetch(`/api/get-confirmation?id=${id}`)
// //       const j   = await res.json()
// //       setData(j.data ?? null)
// //       setLoading(false)
// //     })()
// //   }, [id])

// //   if (loading) {
// //     return (
// //       <p className="flex items-center justify-center gap-2 py-20 text-muted-foreground">
// //         <Loader2 className="animate-spin w-4 h-4" /> Loading confirmation …
// //       </p>
// //     )
// //   }
// //   if (!data) {
// //     return <p className="text-center py-20">Confirmation not found.</p>
// //   }

// //   let pdfLinks: string[] = []
// //   if (Array.isArray(data.pdfs)) pdfLinks = data.pdfs
// //   else if (typeof data.pdfs === 'string') {
// //     try { pdfLinks = JSON.parse(data.pdfs) } catch {}
// //   } else if (data.pdfUrl) pdfLinks = [data.pdfUrl]

// //   const executive = executives.find(e => e.countryExpertise.toLowerCase() === data.country.toLowerCase()) || executives[0];
// //   const whatsappLink = `https://wa.me/?text=Hello, I have a booking with session ID ${id}. Please create a support group.`


// //   return (
// //     <div className="w-full max-w-5xl mx-auto px-4 py-12">
// //       <div className="bg-card shadow-xl rounded-xl p-8 border space-y-6">

// //         {/* header */}
// //         <div className="flex items-center gap-3 text-green-600">
// //           <CheckCircle className="w-6 h-6" />
// //           <h1 className="text-2xl font-semibold">
// //           Booking confirmed for <strong>{data.appointment_date}</strong> at <strong>{data.appointmentAddress}</strong>
// //           </h1>
// //         </div>

// //         <p className="text-muted-foreground text-sm">
// //           Our executive will call you shortly to assist in further process.
// //         </p>

// //         <ExecutiveCard {...executive} />

// //         <hr className="my-4" />

// //         {/* PDFs */}
// //         <h2 className="text-lg font-semibold">Traveller Documents</h2>

// //         {data.traveler_data.map((trav: any, idx: number) => {
// //           const link = pdfLinks[idx] ?? pdfLinks[0] ?? null
// //           return (
// //             <Card key={idx} className="p-4 mb-4 space-y-2 bg-muted border">
// //               <div className="flex justify-between">
// //                 <div>
// //                   <p className="font-semibold">Traveller {idx + 1}</p>
// //                   <p className="text-sm text-muted-foreground">
// //                     {trav.firstName ?? trav.first_name}{' '}
// //                     {trav.lastName ?? trav.last_name}
// //                   </p>
// //                 </div>

// //                 {link ? (
// //                   <a
// //                     href={link}
// //                     className="text-blue-600 underline flex items-center gap-1"
// //                     download target="_blank" rel="noopener"
// //                   >
// //                     <FileDown className="w-4 h-4" /> Download PDF
// //                   </a>
// //                 ) : (
// //                   <span className="text-xs text-muted-foreground">(processing)</span>
// //                 )}
// //               </div>

// //               <div className="grid grid-cols-2 gap-3 text-sm text-muted-foreground">
// //                 <div><strong>Passport:</strong> {trav.passport ?? trav['Passport Number'] ?? 'N/A'}</div>
// //                 <div><strong>DOB:</strong> {trav.dob ?? trav['Date of Birth'] ?? 'N/A'}</div>
// //                 <div><strong>Nationality:</strong> {trav.nationality || 'N/A'}</div>
// //               </div>
// //             </Card>
// //           )
// //         })}

// //         {/* {data.invoice_url && (
// //           <a href={data.invoice_url} target="_blank" download className="text-blue-600 underline flex items-center gap-1">
// //             <FileDown className="w-4 h-4" /> Download Invoice
// //           </a>
// //         )} */}

// //         <hr className="my-4" />

// //         {/* instructions */}
// //         {data.plan === 'Docs on Call' ? (
// //           <div className="space-y-2 text-sm text-muted-foreground">
// //             <p>✅ Please prepare the following documents:</p>
// //             <ul className="list-disc ml-6">
// //               <li>Original passport (scanned)</li>
// //               <li>Travel itinerary (if available)</li>
// //               <li>Proof of current address</li>
// //             </ul>
// //           </div>
// //         ) : (
// //           <div className="space-y-2 text-sm text-muted-foreground">
// //             <p>✅ Our executive will visit you at:</p>
// //             <p className="font-medium">📍 {data.appointment_address}</p>
// //             <ul className="list-disc ml-6">
// //               <li>Keep all original documents ready</li>
// //               <li>Have a printed copy of this confirmation</li>
// //             </ul>
// //           </div>
// //         )}

// //         <div className="mt-6 space-y-2 text-sm">
// //           <a
// //             href={whatsappLink}
// //             target="_blank"
// //             className="inline-flex items-center gap-2 text-green-600 underline"
// //           >
// //             <Users className="w-4 h-4" /> Join our WhatsApp Community
// //           </a>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }


// 'use client'




// import { useEffect, useMemo, useRef, useState } from 'react'
// import { useSearchParams } from 'next/navigation'
// import Link from 'next/link'
// import { ExecutiveCard } from '@/components/ui/ExecutiveCard'
// import { Card } from '@/components/ui/card'
// import { Button } from '@/components/ui/button'
// import { CheckCircle2, Headset, Phone, Clock,Users, FileDown, Loader2, CheckCircle } from 'lucide-react'
// import '@/app/styles/ui-confirmation.css'

// const TOTAL_MS = 15 * 60 * 1000 // 15 minutes

// function usePersistedETA(key: string, startMs = TOTAL_MS) {
//   const [endAt, setEndAt] = useState<number>(() => {
//     if (typeof window === 'undefined') return Date.now() + startMs
//     const saved = localStorage.getItem(key)
//     if (saved) return Number(saved)
//     const next = Date.now() + startMs
//     localStorage.setItem(key, String(next))
//     return next
//   })

//   // If endAt is in the past (e.g., user opened very late), keep it as is so we show 00:00.
//   useEffect(() => {
//     if (typeof window === 'undefined') return
//     localStorage.setItem(key, String(endAt))
//   }, [key, endAt])

//   return { endAt, setEndAt }
// }

// export default function ConfirmationPage() {
//   const qs = useSearchParams()
//   const sessionId = qs.get('id') ?? 'default'
//   const storageKey = `travaky:call_eta:${sessionId}`

//   const { endAt } = usePersistedETA(storageKey)

//   const [now, setNow] = useState(Date.now())
//   const tickRef = useRef<number | null>(null)

//   useEffect(() => {
//     tickRef.current = window.setInterval(() => setNow(Date.now()), 1000)
//     return () => {
//       if (tickRef.current) clearInterval(tickRef.current)
//     }
//   }, [])

//   const remaining = Math.max(0, endAt - now)
//   const mins = Math.floor(remaining / 60000)
//   const secs = Math.floor((remaining % 60000) / 1000)
//   const pct = 1 - remaining / TOTAL_MS

//   const mm = String(mins).padStart(2, '0')
//   const ss = String(secs).padStart(2, '0')

//   const statusText = remaining > 0
//     ? 'Hang tight — our experts will call you shortly.'
//     : "You're next! Expect a call any minute now."

//   return (
//     <div className="confirm-hero">
//       <div className="confirm-wrap">
//         {/* Title Row */}
//         <div className="confirm-head">
//           <div className="confirm-head__left">
//             <CheckCircle2 className="confirm-icon--ok" />
//             <div>
//               <h1 className="confirm-title">Payment Successful</h1>
//               <p className="confirm-subtitle">Your application has been received.</p>
//             </div>
//           </div>
//           <div className="confirm-head__right">
//             <Link href="/" className="confirm-link">Back to Home</Link>
//           </div>
//         </div>

//         {/* Main Card */}
//         <div className="confirm-card">
//           {/* Left: copy */}
//           <div className="confirm-copy">
//             <div className="confirm-badge">
//               <Headset className="confirm-badge__icon" />
//               Schengen Expert Desk
//             </div>
//             <h2 className="confirm-h2">
//               {statusText} <span className="confirm-h2__light">(~15 mins)</span>
//             </h2>
//             <ul className="confirm-list">
//               <li>We’ll verify your details and confirm the next steps.</li>
//               <li>Keep your passport handy for the quick KYC.</li>
//               <li>Need help sooner? Call us or ping on WhatsApp.</li>
//             </ul>

//             <div className="confirm-cta">
//               <a className="confirm-cta__btn" href="tel:+919999999999">
//                 <Phone className="h-4 w-4" /> Call Support
//               </a>
//               <a
//                 className="confirm-cta__btn confirm-cta__btn--ghost"
//                 href="https://wa.me/919999999999"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 Chat on WhatsApp
//               </a>
//             </div>
//           </div>

//           {/* Right: countdown */}
//           <div className="confirm-timer">
//             <TimerRing percent={pct} />
//             <div className="countdown">
//               <div className="countdown__row">
//                 <Digit value={mm[0]} />
//                 <Digit value={mm[1]} />
//                 <span className="countdown__colon">:</span>
//                 <Digit value={ss[0]} />
//                 <Digit value={ss[1]} />
//               </div>
//               <div className="countdown__labels">
//                 <span>min</span>
//                 <span>sec</span>
//               </div>
//               <div className="countdown__hint">
//                 <Clock className="h-4 w-4" /> Estimated callback window
//               </div>
//               <div className="progress">
//                 <div className="progress__bar" style={{ width: `${Math.min(100, pct * 100)}%` }} />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Footer note */}
//         <p className="confirm-foot">
//           A confirmation email has been sent to your registered address. You can close this tab.
//         </p>
//       </div>
//     </div>
//   )
// }

// function Digit({ value }: { value: string }) {
//   return <span className="digit">{value}</span>
// }

// function TimerRing({ percent }: { percent: number }) {
//   const r = 56
//   const C = 2 * Math.PI * r
//   const off = C * (1 - Math.min(1, Math.max(0, percent)))
//   return (
//     <svg className="ring" viewBox="0 0 140 140" aria-hidden>
//       <circle className="ring__track" cx="70" cy="70" r={r} />
//       <circle
//         className="ring__prog"
//         cx="70" cy="70" r={r}
//         strokeDasharray={C}
//         strokeDashoffset={off}
//       />
//       <defs>
//         <linearGradient id="ring-grad" x1="0" y1="0" x2="1" y2="1">
//           <stop offset="0%" stopColor="hsl(217 84% 60%)" />
//           <stop offset="100%" stopColor="hsl(217 92% 40%)" />
//         </linearGradient>
//       </defs>
//     </svg>
//   )
// }


'use client'

import { Suspense, useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { ExecutiveCard } from '@/components/ui/ExecutiveCard'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ElegantTimerRing } from '@/components/ui/ElegantTimer'
import {
  CheckCircle2, CheckCircle, Headset, Phone, Clock,
  Users, FileDown, Loader2
} from 'lucide-react'
import '@/app/styles/ui-confirmation.css'

/* ────────────────────────────────────────────────────────── */
/* 15-min timer (persisted per session) */
const TOTAL_MS = 15 * 60 * 1000

function usePersistedETA(key: string, startMs = TOTAL_MS) {
  const [endAt, setEndAt] = useState<number>(() => {
    if (typeof window === 'undefined') return Date.now() + startMs
    const saved = localStorage.getItem(key)
    if (saved) return Number(saved)
    const next = Date.now() + startMs
    localStorage.setItem(key, String(next))
    return next
  })
  useEffect(() => {
    if (typeof window === 'undefined') return
    localStorage.setItem(key, String(endAt))
  }, [key, endAt])
  return { endAt, setEndAt }
}

/* ────────────────────────────────────────────────────────── */
/* Executive roster used in the details block */
const executives = [
  {
    name: 'Rakesh Sharma',
    designation: 'Senior Visa Executive',
    countryExpertise: 'spain',
    contact: '+91-9876543210',
    avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
  },
  {
    name: 'Priya Singh',
    designation: 'Visa Consultant',
    countryExpertise: 'france',
    contact: '+91-9876543211',
    avatar: 'https://randomuser.me/api/portraits/women/75.jpg',
  },
  {
    name: 'Amit Patel',
    designation: 'Visa Specialist',
    countryExpertise: 'germany',
    contact: '+91-9876543212',
    avatar: 'https://randomuser.me/api/portraits/men/76.jpg',
  },
]

/* API types for the details block */
interface VisaData {
  country: string
  plan: string
  appointment_date?: string
  appointment_time?: string
  appointment_address?: string
  appointmentAddress?: string // tolerate snake/camel variants
  traveler_data: any[]
  pdfUrl?: string
  pdfs?: string[] | string
  invoice_url?: string
}

/* ────────────────────────────────────────────────────────── */

function ConfirmationContent() {
  const qs = useSearchParams()
  const sessionId = qs.get('id') ?? 'default'
  const storageKey = `travaky:call_eta:${sessionId}`

  /* timer state */
  const { endAt } = usePersistedETA(storageKey)
  const [now, setNow] = useState(Date.now())
  const tickRef = useRef<number | null>(null)

  useEffect(() => {
    tickRef.current = window.setInterval(() => setNow(Date.now()), 1000)
    return () => { if (tickRef.current) clearInterval(tickRef.current) }
  }, [])

  const remaining = Math.max(0, endAt - now)
  const mins = Math.floor(remaining / 60000)
  const secs = Math.floor((remaining % 60000) / 1000)
  const pct = 1 - remaining / TOTAL_MS
  const mm = String(mins).padStart(2, '0')
  const ss = String(secs).padStart(2, '0')

  const statusText = remaining > 0
    ? 'Hang tight — our experts will call you shortly.'
    : "You're next! Expect a call any minute now."

  /* details block: fetch confirmation data */
  const [data, setData] = useState<VisaData | null>(null)
  const [loading, setLoading] = useState(true)


  

  useEffect(() => {
    if (!sessionId) return
    ;(async () => {
      try {
        const res = await fetch(`/api/get-confirmation?id=${sessionId}`)
        const j = await res.json()
        setData(j.data ?? null)
      } finally {
        setLoading(false)
      }
    })()
  }, [sessionId])

  /* traveller PDFs parsing */
  let pdfLinks: string[] = []
  if (data?.pdfs) {
    if (Array.isArray(data.pdfs)) pdfLinks = data.pdfs
    else {
      try { pdfLinks = JSON.parse(data.pdfs as string) } catch { /* ignore */ }
    }
  } else if (data?.pdfUrl) {
    pdfLinks = [data.pdfUrl]
  }

  const appointmentAddress = data?.appointment_address || data?.appointmentAddress || ''
  const executive =
    data
      ? (executives.find(e => e.countryExpertise.toLowerCase() === data.country?.toLowerCase()) || executives[0])
      : executives[0]

  const whatsappLink =
    `https://wa.me/?text=Hello, I have a booking with session ID ${sessionId}. Please create a support group.`

  /* ───────────── render ───────────── */
  return (
    <>
      {/* TIMER HERO (blue/white Travaky UI) */}
      <div className="confirm-hero">
        <div className="confirm-wrap">
          <div className="confirm-head">
            <div className="confirm-head__left">
              <CheckCircle2 className="confirm-icon--ok" />
              <div>
                <h1 className="confirm-title">Payment Successful</h1>
                <p className="confirm-subtitle">Your application has been received.</p>
              </div>
            </div>
            <div className="confirm-head__right">
              <Link href="/" className="confirm-link">Back to Home</Link>
            </div>
          </div>

          <div className="confirm-card">
            {/* Left copy */}
            <div className="confirm-copy">
              <div className="confirm-badge">
                <Headset className="confirm-badge__icon" />
                Schengen Expert Desk
              </div>
              <h2 className="confirm-h2">
                {statusText} <span className="confirm-h2__light">(~15 mins)</span>
              </h2>
              <ul className="confirm-list">
                <li>We’ll verify your details and confirm the next steps.</li>
                <li>Keep your passport handy for the quick KYC.</li>
                <li>Need help sooner? Call us or ping on WhatsApp.</li>
              </ul>

              {/* <div className="confirm-cta">
                <a className="confirm-cta__btn" href="tel:+919999999999">
                  <Phone className="h-4 w-4" /> Call Support
                </a>
                <a className="confirm-cta__btn confirm-cta__btn--ghost"
                   href="https://wa.me/919999999999" target="_blank" rel="noreferrer">
                  Chat on WhatsApp
                </a>
              </div> */}
            </div>

            {/* Right timer */}
            <div className="confirm-timer">
              <ElegantTimerRing percent={pct}  />
              <div className="countdown">
                <div className="countdown__row">
                  <Digit value={mm[0]} />
                  <Digit value={mm[1]} />
                  <span className="countdown__colon">:</span>
                  <Digit value={ss[0]} />
                  <Digit value={ss[1]} />
                </div>
                <div className="countdown__labels">
                  <span>min</span>
                  <span>sec</span>
                </div>
                <div className="countdown__hint">
                  <Clock className="h-4 w-4" /> Estimated callback window
                </div>
                <div className="progress">
                  <div className="progress__bar" style={{ width: `${Math.min(100, pct * 100)}%` }} />
                </div>
              </div>
            </div>
          </div>

          <p className="confirm-foot">
            A confirmation email has been sent to your registered address. You can close this tab.
          </p>
        </div>
      </div>

      {/* DETAILS BLOCK (merged from your commented code) */}
      <div className="w-full max-w-5xl mx-auto px-4 pb-16 -mt-6">
        <div className="bg-white shadow-xl rounded-2xl p-6 md:p-8 border space-y-6">
          {/* header */}
          {loading ? (
            <p className="flex items-center justify-center gap-2 py-10 text-muted-foreground">
              <Loader2 className="animate-spin w-4 h-4" /> Loading confirmation …
            </p>
          ) : !data ? (
            <p className="text-center py-10">Confirmation not found.</p>
          ) : (
            <>
              <div className="flex items-center gap-3 text-green-600">
                <CheckCircle className="w-6 h-6" />
                <h2 className="text-xl md:text-2xl font-semibold">
                   Booking confirmed for <strong>{data.appointment_date}</strong> at <strong>{data.appointmentAddress}</strong>
                </h2>
              </div>

              <p className="text-muted-foreground text-sm">
                Our executive will call you shortly to assist in further process.
              </p>

              <ExecutiveCard {...executive} />

              <hr className="my-2" />

              {/* PDFs */}
              <h3 className="text-lg font-semibold">Traveller Documents</h3>

              {data.traveler_data?.map((trav: any, idx: number) => {
                const link = pdfLinks[idx] ?? pdfLinks[0] ?? null
                return (
                  <Card key={idx} className="p-4 mb-4 space-y-2 bg-muted border">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <p className="font-semibold">Traveller {idx + 1}</p>
                        <p className="text-sm text-muted-foreground">
                          {(trav.firstName ?? trav.first_name ?? '')}{' '}
                          {(trav.lastName ?? trav.last_name ?? '')}
                        </p>
                      </div>

                      {link ? (
                        <a
                          href={link}
                          className="text-blue-600 underline flex items-center gap-1"
                          download target="_blank" rel="noopener"
                        >
                          <FileDown className="w-4 h-4" /> Download PDF
                        </a>
                      ) : (
                        <span className="text-xs text-muted-foreground">(processing)</span>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-muted-foreground">
                      <div><strong>Passport:</strong> {trav.passport ?? trav['Passport Number'] ?? 'N/A'}</div>
                      <div><strong>DOB:</strong> {trav.dob ?? trav['Date of Birth'] ?? 'N/A'}</div>
                      <div><strong>Nationality:</strong> {trav.nationality || 'N/A'}</div>
                    </div>
                  </Card>
                )
              })}

              {/* {data.invoice_url && (
                <a href={data.invoice_url} target="_blank" download className="text-blue-600 underline flex items-center gap-1">
                  <FileDown className="w-4 h-4" /> Download Invoice
                </a>
              )} */}

              <hr className="my-2" />

              {/* Plan-wise instructions */}
              {data.plan === 'Docs on Call' ? (
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>✅ Please prepare the following documents:</p>
                  <ul className="list-disc ml-6">
                    <li>Original passport (scanned)</li>
                    <li>Travel itinerary (if available)</li>
                    <li>Proof of current address</li>
                  </ul>
                </div>
              ) : (
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>✅ Our executive will visit you at:</p>
                  <p className="font-medium">📍 {appointmentAddress || 'Address on file'}</p>
                  <ul className="list-disc ml-6">
                    <li>Keep all original documents ready</li>
                    <li>Have a printed copy of this confirmation</li>
                  </ul>
                </div>
              )}

              <div className="mt-4 space-y-2 text-sm">
                <a
                  href={whatsappLink}
                  target="_blank"
                  className="inline-flex items-center gap-2 text-green-600 underline"
                >
                  <Users className="w-4 h-4" /> Join our WhatsApp Community
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}

/* ────────────────────────────────────────────────────────── */
/* Small UI bits for the ring & digits */
function Digit({ value }: { value: string }) {
  return <span className="digit">{value}</span>
}

function TimerRing({ percent }: { percent: number }) {
  const r = 56
  const C = 2 * Math.PI * r
  const off = C * (1 - Math.min(1, Math.max(0, percent)))
  return (
    <svg className="ring" viewBox="0 0 140 140" aria-hidden>
      <circle className="ring__track" cx="70" cy="70" r={r} />
      <circle
        className="ring__prog"
        cx="70" cy="70" r={r}
        strokeDasharray={C}
        strokeDashoffset={off}
      />
      <defs>
        <linearGradient id="ring-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="hsl(217 84% 60%)" />
          <stop offset="100%" stopColor="hsl(217 92% 40%)" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default function ConfirmationPage() {
  return (
    <Suspense fallback={<div className="flex justify-center py-10"><Loader2 className="animate-spin" /></div>}>
      <ConfirmationContent />
    </Suspense>
  )
}
