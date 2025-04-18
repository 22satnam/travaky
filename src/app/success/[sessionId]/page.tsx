// // // // // // app/success/[sessionId]/page.tsx
// // // // // import { CheckCircle, FileDown, PhoneCall, Users } from "lucide-react"

// // // // // interface Props {
// // // // //   params: {
// // // // //     sessionId: string
// // // // //   }
// // // // // }

// // // // // export default async function SuccessPage({ params }: Props) {
// // // // //   // TODO: Replace with Supabase or DB call
// // // // //   const sessionId = params.sessionId
// // // // //   const data = {
// // // // //     firstName: "Ravi",
// // // // //     country: "France",
// // // // //     time: "7:30 PM",
// // // // //     date: "2025-04-16",
// // // // //     selectedPlan: "Visa at Door",
// // // // //     address: "123 MG Road, Delhi",
// // // // //     contact: "+91-9876543210",
// // // // //     visitorName: "Rakesh Sharma",
// // // // //     visitorPhone: "+91-8888888888",
// // // // //     pdfUrl: "/pdf/sample-visa-form-france.pdf",
// // // // //   }

// // // // //   return (
// // // // //     <div className="max-w-3xl mx-auto px-4 py-12">
// // // // //       <div className="bg-card shadow-xl rounded-xl p-8 border">
// // // // //         <div className="flex items-center gap-2 mb-4">
// // // // //           <CheckCircle className="text-green-500" />
// // // // //           <h1 className="text-xl font-semibold">Hi {data.firstName}, your appointment is confirmed!</h1>
// // // // //         </div>

// // // // //         <p className="text-muted-foreground">
// // // // //           Appointment for <strong>{data.country}</strong> is booked for <strong>{data.time}</strong> on <strong>{data.date}</strong>.
// // // // //         </p>

// // // // //         <div className="mt-6">
// // // // //           <h2 className="text-lg font-medium mb-2">Selected Plan: {data.selectedPlan}</h2>

// // // // //           {data.selectedPlan === "Docs on Call" && (
// // // // //             <div className="space-y-2">
// // // // //               <p className="flex items-center gap-2"><PhoneCall className="w-4 h-4" /> Call us at <strong>{data.contact}</strong></p>
// // // // //               <a href={data.pdfUrl} download className="inline-flex items-center gap-2 text-blue-600 underline">
// // // // //                 <FileDown className="w-4 h-4" /> Download Sample PDF
// // // // //               </a>
// // // // //               <a href="https://chat.whatsapp.com/your-community-link" target="_blank" className="inline-flex items-center gap-2 text-green-600 underline">
// // // // //                 <Users className="w-4 h-4" /> Join our WhatsApp Community
// // // // //               </a>
// // // // //             </div>
// // // // //           )}

// // // // //           {data.selectedPlan !== "Docs on Call" && (
// // // // //             <div className="space-y-2">
// // // // //               <p>Your appointment address: <strong>{data.address}</strong></p>
// // // // //               <p className="flex items-center gap-2"><Users className="w-4 h-4" /> Our representative <strong>{data.visitorName}</strong> ({data.visitorPhone}) will visit you.</p>
// // // // //               <a href={data.pdfUrl} download className="inline-flex items-center gap-2 text-blue-600 underline">
// // // // //                 <FileDown className="w-4 h-4" /> Download Application PDF
// // // // //               </a>
// // // // //               <a href="https://chat.whatsapp.com/your-community-link" target="_blank" className="inline-flex items-center gap-2 text-green-600 underline">
// // // // //                 <Users className="w-4 h-4" /> Join WhatsApp Community
// // // // //               </a>
// // // // //             </div>
// // // // //           )}
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   )
// // // // // }
// // // // // app/success/[sessionId]/page.tsx
// // // // import { CheckCircle, FileDown, PhoneCall, Users } from "lucide-react"
// // // // import { createClient } from "@supabase/supabase-js"

// // // // interface Props {
// // // //   params: {
// // // //     sessionId: string
// // // //   }
// // // // }

// // // // const supabase = createClient(
// // // //   process.env.NEXT_PUBLIC_SUPABASE_URL!,
// // // //   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
// // // // )

// // // // export default async function SuccessPage({ params }: Props) {
// // // //   const sessionId = params.sessionId
// // // //   const { data, error } = await supabase
// // // //     .from("visa_applications")
// // // //     .select("*")
// // // //     .eq("session_id", sessionId)
// // // //     .single()

// // // //   if (error || !data) {
// // // //     return <div className="text-center py-12">Invalid or expired session.</div>
// // // //   }

// // // //   return (
// // // //     <div className="max-w-3xl mx-auto px-4 py-12">
// // // //       <div className="bg-card shadow-xl rounded-xl p-8 border">
// // // //         <div className="flex items-center gap-2 mb-4">
// // // //           <CheckCircle className="text-green-500" />
// // // //           <h1 className="text-xl font-semibold">Hi {data.first_name}, your appointment is confirmed!</h1>
// // // //         </div>

// // // //         <p className="text-muted-foreground">
// // // //           Appointment for <strong>{data.country}</strong> is booked for <strong>{data.time}</strong> on <strong>{data.date}</strong>.
// // // //         </p>

// // // //         <div className="mt-6">
// // // //           <h2 className="text-lg font-medium mb-2">Selected Plan: {data.selected_plan}</h2>

// // // //           {data.selected_plan === "Docs on Call" && (
// // // //             <div className="space-y-2">
// // // //               <p className="flex items-center gap-2"><PhoneCall className="w-4 h-4" /> Call us at <strong>+91-1234567890</strong></p>
// // // //               <a href={data.pdf_url} download className="inline-flex items-center gap-2 text-blue-600 underline">
// // // //                 <FileDown className="w-4 h-4" /> Download Sample PDF
// // // //               </a>
// // // //               <a href="https://chat.whatsapp.com/your-community-link" target="_blank" className="inline-flex items-center gap-2 text-green-600 underline">
// // // //                 <Users className="w-4 h-4" /> Join our WhatsApp Community
// // // //               </a>
// // // //             </div>
// // // //           )}

// // // //           {data.selected_plan !== "Docs on Call" && (
// // // //             <div className="space-y-2">
// // // //               <p>Your appointment address: <strong>{data.address}</strong></p>
// // // //               <p className="flex items-center gap-2"><Users className="w-4 h-4" /> Our representative <strong>{data.visitor_name}</strong> ({data.visitor_phone}) will visit you.</p>
// // // //               <a href={data.pdf_url} download className="inline-flex items-center gap-2 text-blue-600 underline">
// // // //                 <FileDown className="w-4 h-4" /> Download Application PDF
// // // //               </a>
// // // //               <a href="https://chat.whatsapp.com/your-community-link" target="_blank" className="inline-flex items-center gap-2 text-green-600 underline">
// // // //                 <Users className="w-4 h-4" /> Join WhatsApp Community
// // // //               </a>
// // // //             </div>
// // // //           )}
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   )
// // // // }
// // // // app/success/[sessionId]/page.tsx
// // // import { CheckCircle, FileDown, PhoneCall, Users } from "lucide-react"
// // // import { createClient } from "@supabase/supabase-js"

// // // interface Props {
// // //   params: {
// // //     sessionId: string
// // //   }
// // // }

// // // const supabase = createClient(
// // //   process.env.NEXT_PUBLIC_SUPABASE_URL!,
// // //   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
// // // )

// // // export default async function SuccessPage({ params }: Props) {
// // //   const sessionId = params.sessionId
// // //   const response = await supabase
// // //     .from("visa_applications")
// // //     .select("*")
// // //     .eq("session_id", sessionId)
// // //     .single()

// // //   if (!response || response.error || !response.data) {
// // //     console.error("Supabase error:", response?.error)
// // //     return <div className="text-center py-12">Invalid or expired session.</div>
// // //   }

// // //   const data = response.data

// // //   return (
// // //     <div className="max-w-3xl mx-auto px-4 py-12">
// // //       <div className="bg-card shadow-xl rounded-xl p-8 border">
// // //         <div className="flex items-center gap-2 mb-4">
// // //           <CheckCircle className="text-green-500" />
// // //           <h1 className="text-xl font-semibold">Hi {data.first_name}, your appointment is confirmed!</h1>
// // //         </div>

// // //         <p className="text-muted-foreground">
// // //           Appointment for <strong>{data.country}</strong> is booked for <strong>{data.time}</strong> on <strong>{data.date}</strong>.
// // //         </p>

// // //         <div className="mt-6">
// // //           <h2 className="text-lg font-medium mb-2">Selected Plan: {data.selected_plan}</h2>

// // //           {data.selected_plan === "Docs on Call" && (
// // //             <div className="space-y-2">
// // //               <p className="flex items-center gap-2"><PhoneCall className="w-4 h-4" /> Call us at <strong>+91-1234567890</strong></p>
// // //               <a href={data.pdf_url} download className="inline-flex items-center gap-2 text-blue-600 underline">
// // //                 <FileDown className="w-4 h-4" /> Download Sample PDF
// // //               </a>
// // //               <a href="https://chat.whatsapp.com/your-community-link" target="_blank" className="inline-flex items-center gap-2 text-green-600 underline">
// // //                 <Users className="w-4 h-4" /> Join our WhatsApp Community
// // //               </a>
// // //             </div>
// // //           )}

// // //           {data.selected_plan !== "Docs on Call" && (
// // //             <div className="space-y-2">
// // //               <p>Your appointment address: <strong>{data.address}</strong></p>
// // //               <p className="flex items-center gap-2"><Users className="w-4 h-4" /> Our representative <strong>{data.visitor_name}</strong> ({data.visitor_phone}) will visit you.</p>
// // //               <a href={data.pdf_url} download className="inline-flex items-center gap-2 text-blue-600 underline">
// // //                 <FileDown className="w-4 h-4" /> Download Application PDF
// // //               </a>
// // //               <a href="https://chat.whatsapp.com/your-community-link" target="_blank" className="inline-flex items-center gap-2 text-green-600 underline">
// // //                 <Users className="w-4 h-4" /> Join WhatsApp Community
// // //               </a>
// // //             </div>
// // //           )}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   )
// // // }
// // import { CheckCircle, FileDown, PhoneCall, Users } from "lucide-react"
// // import { createClient } from "@supabase/supabase-js"

// // export default async function SuccessPage({
// //   params,
// // }: {
// //   params: { sessionId: string }
// // }) {
// //   const supabase = createClient(
// //     process.env.NEXT_PUBLIC_SUPABASE_URL!,
// //     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
// //   )

// //   const response = await supabase
// //     .from("visa_applications")
// //     .select("*")
// //     .eq("session_id", params.sessionId)
// //     .single()

// //   if (!response || response.error || !response.data) {
// //     console.error("Supabase error:", response?.error)
// //     return <div className="text-center py-12">Invalid or expired session.</div>
// //   }

// //   const data = response.data

// //   return (
// //     <div className="max-w-3xl mx-auto px-4 py-12">
// //       <div className="bg-card shadow-xl rounded-xl p-8 border">
// //         <div className="flex items-center gap-2 mb-4">
// //           <CheckCircle className="text-green-500" />
// //           <h1 className="text-xl font-semibold">Hi {data.first_name}, your appointment is confirmed!</h1>
// //         </div>

// //         <p className="text-muted-foreground">
// //           Appointment for <strong>{data.country}</strong> is booked for <strong>{data.time}</strong> on <strong>{data.date}</strong>.
// //         </p>

// //         <div className="mt-6">
// //           <h2 className="text-lg font-medium mb-2">Selected Plan: {data.selected_plan}</h2>

// //           {data.selected_plan === "Docs on Call" && (
// //             <div className="space-y-2">
// //               <p className="flex items-center gap-2">
// //                 <PhoneCall className="w-4 h-4" /> Call us at <strong>+91-1234567890</strong>
// //               </p>
// //               <a href={data.pdf_url} download className="inline-flex items-center gap-2 text-blue-600 underline">
// //                 <FileDown className="w-4 h-4" /> Download Sample PDF
// //               </a>
// //               <a href="https://chat.whatsapp.com/your-community-link" target="_blank" className="inline-flex items-center gap-2 text-green-600 underline">
// //                 <Users className="w-4 h-4" /> Join our WhatsApp Community
// //               </a>
// //             </div>
// //           )}

// //           {data.selected_plan !== "Docs on Call" && (
// //             <div className="space-y-2">
// //               <p>Your appointment address: <strong>{data.address}</strong></p>
// //               <p className="flex items-center gap-2">
// //                 <Users className="w-4 h-4" /> Our representative <strong>{data.visitor_name}</strong> ({data.visitor_phone}) will visit you.
// //               </p>
// //               <a href={data.pdf_url} download className="inline-flex items-center gap-2 text-blue-600 underline">
// //                 <FileDown className="w-4 h-4" /> Download Application PDF
// //               </a>
// //               <a href="https://chat.whatsapp.com/your-community-link" target="_blank" className="inline-flex items-center gap-2 text-green-600 underline">
// //                 <Users className="w-4 h-4" /> Join WhatsApp Community
// //               </a>
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }
// import { CheckCircle, FileDown, PhoneCall, Users } from "lucide-react"
// import { createClient } from "@supabase/supabase-js"
// import { Metadata } from "next"

// export const dynamic = "force-dynamic"

// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
// )

// type PageProps = {
//   params: {
//     sessionId: string
//   }
// }

// export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
//   return {
//     title: `Success: ${params.sessionId}`,
//   }
// }

// export default async function SuccessPage({ params }: PageProps) {
//   const response = await supabase
//     .from("visa_applications")
//     .select("*")
//     .eq("session_id", params.sessionId)
//     .single()

//   if (!response || response.error || !response.data) {
//     console.error("Supabase error:", response?.error)
//     return <div className="text-center py-12">Invalid or expired session.</div>
//   }

//   const data = response.data

//   return (
//     <div className="max-w-3xl mx-auto px-4 py-12">
//       <div className="bg-card shadow-xl rounded-xl p-8 border">
//         <div className="flex items-center gap-2 mb-4">
//           <CheckCircle className="text-green-500" />
//           <h1 className="text-xl font-semibold">Hi {data.first_name}, your appointment is confirmed!</h1>
//         </div>

//         <p className="text-muted-foreground">
//           Appointment for <strong>{data.country}</strong> is booked for <strong>{data.time}</strong> on <strong>{data.date}</strong>.
//         </p>

//         <div className="mt-6">
//           <h2 className="text-lg font-medium mb-2">Selected Plan: {data.selected_plan}</h2>

//           {data.selected_plan === "Docs on Call" ? (
//             <div className="space-y-2">
//               <p className="flex items-center gap-2"><PhoneCall className="w-4 h-4" /> Call us at <strong>+91-1234567890</strong></p>
//               <a href={data.pdf_url} download className="inline-flex items-center gap-2 text-blue-600 underline">
//                 <FileDown className="w-4 h-4" /> Download Sample PDF
//               </a>
//               <a href="https://chat.whatsapp.com/your-community-link" target="_blank" className="inline-flex items-center gap-2 text-green-600 underline">
//                 <Users className="w-4 h-4" /> Join our WhatsApp Community
//               </a>
//             </div>
//           ) : (
//             <div className="space-y-2">
//               <p>Your appointment address: <strong>{data.address}</strong></p>
//               <p className="flex items-center gap-2"><Users className="w-4 h-4" /> Our representative <strong>{data.visitor_name}</strong> ({data.visitor_phone}) will visit you.</p>
//               <a href={data.pdf_url} download className="inline-flex items-center gap-2 text-blue-600 underline">
//                 <FileDown className="w-4 h-4" /> Download Application PDF
//               </a>
//               <a href="https://chat.whatsapp.com/your-community-link" target="_blank" className="inline-flex items-center gap-2 text-green-600 underline">
//                 <Users className="w-4 h-4" /> Join WhatsApp Community
//               </a>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }
import { CheckCircle, FileDown, PhoneCall, Users } from "lucide-react"
import { createClient } from "@supabase/supabase-js"
import { Metadata } from "next"

export const dynamic = "force-dynamic"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export async function generateMetadata({ params }: { params: { sessionId: string } }): Promise<Metadata> {
  return {
    title: `Success: ${params.sessionId}`,
  }
}

export default async function SuccessPage({ params }: { params: { sessionId: string } }) {
  const response = await supabase
    .from("visa_applications")
    .select("*")
    .eq("session_id", params.sessionId)
    .single()

  if (!response || response.error || !response.data) {
    console.error("Supabase error:", response?.error)
    return <div className="text-center py-12">Invalid or expired session.</div>
  }

  const data = response.data

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="bg-card shadow-xl rounded-xl p-8 border">
        <div className="flex items-center gap-2 mb-4">
          <CheckCircle className="text-green-500" />
          <h1 className="text-xl font-semibold">Hi {data.first_name}, your appointment is confirmed!</h1>
        </div>

        <p className="text-muted-foreground">
          Appointment for <strong>{data.country}</strong> is booked for <strong>{data.time}</strong> on <strong>{data.date}</strong>.
        </p>

        <div className="mt-6">
          <h2 className="text-lg font-medium mb-2">Selected Plan: {data.selected_plan}</h2>

          {data.selected_plan === "Docs on Call" ? (
            <div className="space-y-2">
              <p className="flex items-center gap-2"><PhoneCall className="w-4 h-4" /> Call us at <strong>+91-1234567890</strong></p>
              <a href={data.pdf_url} download className="inline-flex items-center gap-2 text-blue-600 underline">
                <FileDown className="w-4 h-4" /> Download Sample PDF
              </a>
              <a href="https://chat.whatsapp.com/your-community-link" target="_blank" className="inline-flex items-center gap-2 text-green-600 underline">
                <Users className="w-4 h-4" /> Join our WhatsApp Community
              </a>
            </div>
          ) : (
            <div className="space-y-2">
              <p>Your appointment address: <strong>{data.address}</strong></p>
              <p className="flex items-center gap-2"><Users className="w-4 h-4" /> Our representative <strong>{data.visitor_name}</strong> ({data.visitor_phone}) will visit you.</p>
              <a href={data.pdf_url} download className="inline-flex items-center gap-2 text-blue-600 underline">
                <FileDown className="w-4 h-4" /> Download Application PDF
              </a>
              <a href="https://chat.whatsapp.com/your-community-link" target="_blank" className="inline-flex items-center gap-2 text-green-600 underline">
                <Users className="w-4 h-4" /> Join WhatsApp Community
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
