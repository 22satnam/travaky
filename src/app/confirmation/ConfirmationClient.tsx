// // // // 'use client'

// // // // import { useSearchParams } from 'next/navigation'

// // // // export default function ConfirmationClient() {
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
// // // 'use client'

// // // import { useSearchParams } from 'next/navigation'

// // // export default function ConfirmationClient() {
// // //   const searchParams = useSearchParams()
// // //   const name = searchParams.get('name') ?? 'Guest'
// // //   const country = searchParams.get('country') ?? ''
// // //   const visaType = searchParams.get('type') ?? ''
// // //   const id = searchParams.get('id') ?? ''

// // //   return (
// // //     <div className="max-w-2xl mx-auto py-16 px-4">
// // //       <h1 className="text-3xl font-bold mb-4">🎉 Visa Submitted</h1>
// // //       <p className="mb-2 text-muted-foreground">
// // //         Thank you <strong>{name}</strong>, your <strong>{visaType}</strong> visa application for <strong>{country}</strong> has been successfully submitted.
// // //       </p>
// // //       <p className="mb-2 text-muted-foreground">
// // //         Tracking ID: <code>{id}</code>
// // //       </p>
// // //       <p className="mt-6 text-sm text-muted-foreground">
// // //         We’ve also sent a confirmation email with your filled PDF and next steps.
// // //       </p>
// // //     </div>
// // //   )
// // // }
// // 'use client'

// // import { useSearchParams } from 'next/navigation'
// // import { FileDown, PhoneCall, User, Users } from 'lucide-react'
// // import { ExecutiveCard } from '@/components/ui/ExecutiveCard'


// // export default function ConfirmationClient() {
// //   const searchParams = useSearchParams()
// //   const plan = searchParams.get('plan') ?? 'Docs on Call'
// //   const id = searchParams.get('id') ?? ''
// //   const country = searchParams.get('country') ?? 'France'
// //   const name = searchParams.get('name') ?? 'Guest'
// //   const pdf = searchParams.get('pdf') ?? '/pdf/sample-visa-form-france.pdf'
// //   const date = searchParams.get('date') ?? '2025-04-20'
// //   const time = searchParams.get('time') ?? '3:00 PM'
// //   const address = searchParams.get('address') ?? 'Your Registered Address'

// //   const [firstName, lastName] = name.split(' ')

// //   const executive = {
// //     name: 'Rakesh Sharma',
// //     designation: 'Senior Visa Executive',
// //     countryExpertise: country,
// //     contact: '+91-8888888888',
// //   }

// //   return (
// //     <div className="max-w-3xl mx-auto px-4 py-12">
// //       <div className="bg-card shadow-xl rounded-xl p-8 border space-y-4">
// //         <div className="flex items-center gap-2 mb-4">
// //           <Users className="text-green-500 w-6 h-6" />
// //           <h1 className="text-2xl font-semibold">
// //             {firstName} {lastName}, your booking is confirmed for <strong>{date}</strong> at <strong>{time}</strong>.
// //           </h1>
// //         </div>

// //         <p className="text-muted-foreground text-sm">
// //           Our executive will call you within 15 minutes to confirm everything. Here's your support executive:
// //         </p>

// //         <ExecutiveCard
// //             name={executive.name}
// //             designation={executive.designation}
// //             country={executive.countryExpertise}
// //             contact={executive.contact}
// //         />


// //         <hr className="my-4" />

// //         {plan === 'Docs on Call' && (
// //           <div className="space-y-2">
// //             <p>
// //               Your documents have been submitted successfully. Prepare the following before our call:
// //             </p>
// //             <ul className="list-disc ml-6 text-sm text-muted-foreground">
// //               <li>Your original passport (scanned)</li>
// //               <li>Your travel itinerary (if available)</li>
// //               <li>Your current address proof</li>
// //             </ul>
// //           </div>
// //         )}

// //         {plan !== 'Docs on Call' && (
// //           <div className="space-y-2">
// //             <p>
// //               Our executive will visit your location for document collection:
// //             </p>
// //             <p className="font-semibold">📍 Address: {address}</p>
// //             <ul className="list-disc ml-6 text-sm text-muted-foreground">
// //               <li>Please keep all original documents ready</li>
// //               <li>A printed or scanned copy of this PDF</li>
// //             </ul>
// //           </div>
// //         )}

// //         <div className="mt-6 space-y-2">
// //           <a
// //             href={pdf}
// //             download
// //             className="inline-flex items-center gap-2 text-blue-600 underline"
// //           >
// //             <FileDown className="w-4 h-4" />
// //             Download Your Filled Visa PDF
// //           </a>
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
// 'use client'

// import { useEffect, useState } from 'react'
// import { useSearchParams } from 'next/navigation'
// import { ExecutiveCard } from '@/components/ui/ExecutiveCard'
// import { Users, FileDown } from 'lucide-react'

// interface VisaData {
//   country: string
//   plan: string
//   appointment_date: string
//   appointment_time: string
//   appointment_address: string
//   pdf_url: string
//   traveler_data: any[]
// }

// export default function ConfirmationClient() {
//   const searchParams = useSearchParams()
//   const id = searchParams.get('id') ?? ''
//   const [data, setData] = useState<VisaData | null>(null)

//   useEffect(() => {
//     if (!id) return

//     fetch(`/api/get-confirmation?id=${id}`)
//       .then((res) => res.json())
//       .then((res) => setData(res.data))
//       .catch(() => setData(null))
//   }, [id])

//   if (!data) {
//     return <p className="text-center py-20">Loading confirmation data...</p>
//   }

//   const executive = {
//     name: 'Rakesh Sharma',
//     designation: 'Senior Visa Executive',
//     countryExpertise: data.country,
//     contact: '+91-8888888888',
//   }

//   return (
//     <div className="max-w-3xl mx-auto px-4 py-12">
//       <div className="bg-card shadow-xl rounded-xl p-8 border space-y-4">
//         <div className="flex items-center gap-2 mb-4">
//           <Users className="text-green-500 w-6 h-6" />
//           <h1 className="text-2xl font-semibold">
//             Your booking is confirmed for <strong>{data.appointment_date}</strong> at <strong>{data.appointment_time}</strong>.
//           </h1>
//         </div>

//         <p className="text-muted-foreground text-sm">
//           Our executive will call you within 15 minutes to confirm everything. Here's your support executive:
//         </p>

//         <ExecutiveCard {...executive} />

//         <hr className="my-4" />

//         {data.plan === 'Docs on Call' ? (
//           <div className="space-y-2">
//             <p>Your documents have been submitted successfully. Prepare the following before our call:</p>
//             <ul className="list-disc ml-6 text-sm text-muted-foreground">
//               <li>Your original passport (scanned)</li>
//               <li>Your travel itinerary (if available)</li>
//               <li>Your current address proof</li>
//             </ul>
//           </div>
//         ) : (
//           <div className="space-y-2">
//             <p>Our executive will visit your location for document collection:</p>
//             <p className="font-semibold">📍 Address: {data.appointment_address}</p>
//             <ul className="list-disc ml-6 text-sm text-muted-foreground">
//               <li>Please keep all original documents ready</li>
//               <li>A printed or scanned copy of this PDF</li>
//             </ul>
//           </div>
//         )}

//         <div className="mt-6 space-y-2">
//           <a
//             href={data.pdf_url}
//             download
//             className="inline-flex items-center gap-2 text-blue-600 underline"
//           >
//             <FileDown className="w-4 h-4" />
//             Download Your Filled Visa PDF
//           </a>
//           <a
//             href="https://chat.whatsapp.com/your-community-link"
//             target="_blank"
//             className="inline-flex items-center gap-2 text-green-600 underline"
//           >
//             <Users className="w-4 h-4" />
//             Join our WhatsApp Community
//           </a>
//         </div>
//       </div>
//     </div>
//   )
// }
'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { ExecutiveCard } from '@/components/ui/ExecutiveCard'
import { Users, FileDown } from 'lucide-react'

interface VisaData {
  country: string
  plan: string
  appointment_date: string
  appointment_time: string
  appointment_address: string
  pdf_url: string
  traveler_data: any[]
}

export default function ConfirmationClient() {
  const searchParams = useSearchParams()
  const id = searchParams.get('id') ?? ''
  const [data, setData] = useState<VisaData | null>(null)

  useEffect(() => {
    if (!id) return

    fetch(`/api/get-confirmation?id=${id}`)
      .then((res) => res.json())
      .then((res) => setData(res.data))
      .catch(() => setData(null))
  }, [id])

  if (!data) {
    return <p className="text-center py-20">Loading confirmation data...</p>
  }

  const executive = {
    name: 'Rakesh Sharma',
    designation: 'Senior Visa Executive',
    countryExpertise: data.country,
    contact: '+91-8888888888',
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="bg-card shadow-xl rounded-xl p-8 border space-y-4">
        <div className="flex items-center gap-2 mb-4">
          <Users className="text-green-500 w-6 h-6" />
          <h1 className="text-2xl font-semibold">
            Your booking is confirmed for <strong>{data.appointment_date}</strong> at <strong>{data.appointment_time}</strong>.
          </h1>
        </div>

        <p className="text-muted-foreground text-sm">
          Our executive will call you within 15 minutes to confirm everything. Here's your support executive:
        </p>

        <ExecutiveCard {...executive} />

        {/* ✅ New: Traveler Info Cards */}
        {data.traveler_data && (
          <div className="mt-6 space-y-4">
            <h2 className="text-lg font-semibold">Traveler Details</h2>

            {data.traveler_data.map((trav: any, index: number) => (
              <div key={index} className="border rounded-md p-4 bg-muted text-sm">
                <div className="flex justify-between">
                  <p className="font-medium">Traveler {index + 1}</p>
                  <span className="text-muted-foreground">
                    {trav.firstName ?? trav.first_name} {trav.lastName ?? trav.last_name}
                  </span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2 text-muted-foreground">
                  <div>
                    <strong>Passport:</strong> {trav.passport || trav['Passport Number'] || 'N/A'}
                  </div>
                  <div>
                    <strong>DOB:</strong> {trav.dob || trav['Date of Birth'] || 'N/A'}
                  </div>
                  <div>
                    <strong>Nationality:</strong> {trav.nationality || 'N/A'}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <hr className="my-4" />

        {data.plan === 'Docs on Call' ? (
          <div className="space-y-2">
            <p>Your documents have been submitted successfully. Prepare the following before our call:</p>
            <ul className="list-disc ml-6 text-sm text-muted-foreground">
              <li>Your original passport (scanned)</li>
              <li>Your travel itinerary (if available)</li>
              <li>Your current address proof</li>
            </ul>
          </div>
        ) : (
          <div className="space-y-2">
            <p>Our executive will visit your location for document collection:</p>
            <p className="font-semibold">📍 Address: {data.appointment_address}</p>
            <ul className="list-disc ml-6 text-sm text-muted-foreground">
              <li>Please keep all original documents ready</li>
              <li>A printed or scanned copy of this PDF</li>
            </ul>
          </div>
        )}

        <div className="mt-6 space-y-2">
          <a
            href={data.pdf_url}
            download
            className="inline-flex items-center gap-2 text-blue-600 underline"
          >
            <FileDown className="w-4 h-4" />
            Download Your Filled Visa PDF
          </a>
          <a
            href="https://chat.whatsapp.com/your-community-link"
            target="_blank"
            className="inline-flex items-center gap-2 text-green-600 underline"
          >
            <Users className="w-4 h-4" />
            Join our WhatsApp Community
          </a>
        </div>
      </div>
    </div>
  )
}
