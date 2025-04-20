// // // // 'use client'
// // // // export const dynamic = 'force-dynamic'

// // // // import { useSearchParams } from 'next/navigation'

// // // // export default function ConfirmationPage() {
// // // //   const searchParams = useSearchParams()
// // // //   const name = searchParams.get('name') ?? 'Guest'
// // // //   const country = searchParams.get('country') ?? ''
// // // //   const visaType = searchParams.get('type') ?? ''
// // // //   const id = searchParams.get('id') ?? ''

// // // //   return (
// // // //     <div className="max-w-2xl mx-auto py-16 px-4">
// // // //       <h1 className="text-3xl font-bold mb-4">🎉 Visa Submitted</h1>
// // // //       <p className="mb-2 text-muted-foreground">
// // // //         Thank you <strong>{name}</strong>, your <strong>{visaType}</strong> visa application for <strong>{country}</strong> has been successfully submitted.
// // // //       </p>
// // // //       <p className="mb-2 text-muted-foreground">
// // // //         Tracking ID: <code>{id}</code>
// // // //       </p>
// // // //       <p className="mt-6 text-sm text-muted-foreground">
// // // //         We’ve also sent a confirmation email with your filled PDF and next steps.
// // // //       </p>
// // // //     </div>
// // // //   )
// // // // }
// // // import { Suspense } from 'react'
// // // import ConfirmationClient from './ConfirmationClient'

// // // export const dynamic = 'force-dynamic'

// // // export default function ConfirmationPage() {
// // //   return (
// // //     <Suspense fallback={<div className="py-16 text-center">Loading…</div>}>
// // //       <ConfirmationClient />
// // //     </Suspense>
// // //   )
// // // }
// // // File: src/app/confirmation/page.tsx

// // 'use client'

// // import { useSearchParams } from 'next/navigation'
// // import { Card } from '@/components/ui/card'
// // import { FileDown, Users } from 'lucide-react'

// // export default function ConfirmationPage() {
// //   const searchParams = useSearchParams()
// //   const plan = searchParams.get('plan') ?? 'Docs on Call'
// //   const name = searchParams.get('name') ?? 'Guest'
// //   const country = searchParams.get('country') ?? 'N/A'
// //   const id = searchParams.get('id') ?? ''
// //   const count = Number(searchParams.get('count') ?? '1')
// //   const pdfs = JSON.parse(searchParams.get('pdfs') ?? '[]')

// //   return (
// //     <div className="max-w-4xl mx-auto py-16 px-4">
// //       <h1 className="text-3xl font-bold mb-4">🎉 Booking Confirmed!</h1>
// //       <p className="text-muted-foreground mb-2">
// //         Thank you <strong>{name}</strong>, your <strong>{plan}</strong> visa application for <strong>{country}</strong> has been submitted.
// //       </p>
// //       <p className="text-muted-foreground mb-6">
// //         <strong>{count}</strong> traveler(s) included. Tracking ID: <code>{id}</code>
// //       </p>

// //       <div className="space-y-4">
// //         {pdfs.map((pdf: string, index: number) => (
// //           <Card key={index} className="p-4 flex justify-between items-center">
// //             <div className="space-y-1">
// //               <p className="font-semibold">Traveler {index + 1}</p>
// //               <p className="text-sm text-muted-foreground">Download your visa form</p>
// //             </div>
// //             <a
// //               href={pdf}
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className="text-primary flex items-center gap-1"
// //             >
// //               <FileDown className="w-4 h-4" /> PDF
// //             </a>
// //           </Card>
// //         ))}
// //       </div>

// //       <div className="mt-8 text-sm text-muted-foreground">
// //         Our executive will reach out to you shortly to verify all information. If you have any questions, feel free to contact us.
// //       </div>
// //     </div>
// //   )
// // }
// // File: src/app/confirmation/page.tsx

// 'use client'

// import { useSearchParams } from 'next/navigation'
// import { Card } from '@/components/ui/card'
// import { FileDown, Users } from 'lucide-react'
// import Script from 'next/script'

// export default function ConfirmationPage() {
//   const searchParams = useSearchParams()
//   const plan = searchParams.get('plan') ?? 'Docs on Call'
//   const name = searchParams.get('name') ?? 'Guest'
//   const country = searchParams.get('country') ?? 'N/A'
//   const id = searchParams.get('id') ?? ''
//   const count = Number(searchParams.get('count') ?? '1')
//   const pdfs = JSON.parse(searchParams.get('pdfs') ?? '[]')

//   return (
//     <>
//       {/* Razorpay Script Loader */}
//       <Script
//         src="https://checkout.razorpay.com/v1/checkout.js"
//         strategy="beforeInteractive"
//       />

//       <div className="max-w-4xl mx-auto py-16 px-4">
//         <h1 className="text-3xl font-bold mb-4">🎉 Booking Confirmed!</h1>
//         <p className="text-muted-foreground mb-2">
//           Thank you <strong>{name}</strong>, your <strong>{plan}</strong> visa application for <strong>{country}</strong> has been submitted.
//         </p>
//         <p className="text-muted-foreground mb-6">
//           <strong>{count}</strong> traveler(s) included. Tracking ID: <code>{id}</code>
//         </p>

//         <div className="space-y-4">
//           {pdfs.map((pdf: string, index: number) => (
//             <Card key={index} className="p-4 flex justify-between items-center">
//               <div className="space-y-1">
//                 <p className="font-semibold">Traveler {index + 1}</p>
//                 <p className="text-sm text-muted-foreground">Download your visa form</p>
//               </div>
//               <a
//                 href={pdf}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-primary flex items-center gap-1"
//               >
//                 <FileDown className="w-4 h-4" /> PDF
//               </a>
//             </Card>
//           ))}
//         </div>

//         <div className="mt-8 text-sm text-muted-foreground">
//           Our executive will reach out to you shortly to verify all information. If you have any questions, feel free to contact us.
//         </div>
//       </div>
//     </>
//   )
// }import { Suspense } from 'react'
import ConfirmationClient from './ConfirmationClient'

export const dynamic = 'force-dynamic'

export default function ConfirmationPage() {
  return (
    <Suspense fallback={<div className="py-16 text-center">Loading…</div>}>
      <ConfirmationClient />
    </Suspense>
  )
}
