// // // // 'use client'

// // // // import { useEffect, useState } from 'react'
// // // // import { useRouter } from 'next/navigation'
// // // // import { useAuth } from '@/context/AuthContext'
// // // // import Script from 'next/script'

// // // // export default function ApplyCountryPage({ params }: { params: { country: string } }) {
// // // //   const router = useRouter()
// // // //   const { session } = useAuth()
// // // //   const [showPayment, setShowPayment] = useState(false)

// // // //   useEffect(() => {
// // // //     if (!session) {
// // // //       router.push(`/auth?next=/apply/${params.country}`)
// // // //     } else {
// // // //       const timeout = setTimeout(() => setShowPayment(true), 30000) // show payment panel after 30s
// // // //       return () => clearTimeout(timeout)
// // // //     }
// // // //   }, [session])

// // // //   if (!session) return <p className="text-center py-20">Redirecting to login...</p>

// // // //   return (
// // // //     <>
// // // //       <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="beforeInteractive" />
// // // //       <Script src="https://opnform.com/widgets/iframe.min.js" strategy="afterInteractive" />

// // // //       <div className="grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto p-6 gap-6">
// // // //         {/* OpnForm on left */}
// // // //         <div className="md:col-span-2">
// // // //           <iframe
// // // //             style={{ border: 'none', width: '100%' }}
// // // //             id="visa-application-form-uzkofw"
// // // //             src={`https://opnform.com/forms/visa-application-form-uzkofw?country=${params.country}&email=${session.email}`}
// // // //             className="h-[1600px]"
// // // //           />
// // // //         </div>

// // // //         {/* Razorpay on right (shown after delay) */}
// // // //         {showPayment && (
// // // //           <div className="md:col-span-1 p-6 border rounded-lg shadow bg-white sticky top-20">
// // // //             <h2 className="text-xl font-bold mb-4">Choose Plan to Pay</h2>
// // // //             <button onClick={() => openPayment('Docs on Call')} className="btn bg-blue-600 text-white w-full mb-3">
// // // //               Docs on Call – ₹7500
// // // //             </button>
// // // //             <button onClick={() => openPayment('Docs on Door')} className="btn bg-yellow-600 text-white w-full mb-3">
// // // //               Docs on Door – ₹9500
// // // //             </button>
// // // //             <button onClick={() => openPayment('Visa at Door')} className="btn bg-green-600 text-white w-full">
// // // //               Visa at Door – ₹12500
// // // //             </button>
// // // //           </div>
// // // //         )}
// // // //       </div>

// // // //       <Script id="razorpay-init" strategy="afterInteractive">
// // // //         {`
// // // //             async function openPayment(plan) {
// // // //             const prices = {
// // // //                 "Docs on Call": 7500,
// // // //                 "Docs on Door": 9500,
// // // //                 "Visa at Door": 12500
// // // //             }

// // // //             const options = {
// // // //                 key: "rzp_test_bBoKqWpCP41T6f",
// // // //                 amount: prices[plan] * 100,
// // // //                 currency: "INR",
// // // //                 name: "Travaky",
// // // //                 description: plan + " Plan for ${params.country}",
// // // //                 handler: async function (response) {
// // // //                 try {
// // // //                     const res = await fetch("/api/fetch-redirect", {
// // // //                     method: "POST",
// // // //                     headers: { "Content-Type": "application/json" },
// // // //                     body: JSON.stringify({
// // // //                         paymentId: response.razorpay_payment_id,
// // // //                         email: "${session?.email}"
// // // //                     })
// // // //                     })
// // // //                     const data = await res.json()
// // // //                     if (data?.redirect) {
// // // //                     window.location.href = data.redirect
// // // //                     } else {
// // // //                     window.location.href = "/confirmation?id=" + response.razorpay_payment_id
// // // //                     }
// // // //                 } catch (err) {
// // // //                     window.location.href = "/confirmation?id=" + response.razorpay_payment_id
// // // //                 }
// // // //                 }
// // // //             }

// // // //             const rzp = new Razorpay(options)
// // // //             rzp.open()
// // // //             }
// // // //         `}
// // // //         </Script>
// // // //     </>
// // // //   )
// // // // }
// // // // File: src/app/apply/[country]/page.tsx

// // // 'use client'

// // // import { useRouter } from 'next/navigation'
// // // import { useAuth } from '@/context/AuthContext'
// // // import { useEffect, useState } from 'react'
// // // import Script from 'next/script'
// // // import { PricingSidebar } from '@/components/ui/pricing-sidebar'
// // // import { TravelerTabs } from '@/components/ui/traveler-tabs'
// // // import { ProgressBar } from '@/components/ui/progress-bar'

// // // export default function ApplyFormPage({ params }: { params: { country: string } }) {
// // //   const router = useRouter()
// // //   const { session } = useAuth()
// // //   const [travelerCount, setTravelerCount] = useState(1)
// // //   const [formData, setFormData] = useState<any[]>([{}])
// // //   const [progress, setProgress] = useState(0)

// // //   useEffect(() => {
// // //     if (!session) {
// // //       router.push(`/auth?next=/apply/${params.country}`)
// // //     }
// // //   }, [session])

// // //   const updateTraveler = (index: number, data: any) => {
// // //     const updated = [...formData]
// // //     updated[index] = data
// // //     setFormData(updated)
// // //   }

// // //   const handleTravelerChange = (count: number) => {
// // //     const diff = count - formData.length
// // //     if (diff > 0) {
// // //       setFormData([...formData, ...Array(diff).fill({})])
// // //     } else {
// // //       setFormData(formData.slice(0, count))
// // //     }
// // //     setTravelerCount(count)
// // //   }

// // //   if (!session) return <p className="text-center py-20">Redirecting to login...</p>

// // //   return (
// // //     <>
// // //       <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="beforeInteractive" />
// // //       <div className="grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto p-6 gap-6">
// // //         {/* Left: Form with progress and traveler blocks */}
// // //         <div className="md:col-span-2 space-y-6">
// // //           <ProgressBar current={formData.filter(f => Object.keys(f).length > 0).length} total={travelerCount} />
// // //           <TravelerTabs
// // //             travelerCount={travelerCount}
// // //             travelerData={formData}
// // //             updateTraveler={updateTraveler}
// // //           />
// // //         </div>

// // //         {/* Right: Dynamic pricing summary */}
// // //         <PricingSidebar
// // //           travelerCount={travelerCount}
// // //           onCountChange={handleTravelerChange}
// // //         />
// // //       </div>
// // //     </>
// // //   )
// // // }
// // 'use client'

// // import { useRouter } from 'next/navigation'
// // import { useAuth } from '@/context/AuthContext'
// // import { useEffect, useState } from 'react'
// // import Script from 'next/script'

// // import { TravelerTabs } from '@/components/ui/traveler-tabs'
// // import { SectionSidebar } from '@/components/ui/SectionSidebar'
// // import SectionCard from '@/components/ui/SectionCard'
// // import { PricingSidebar } from '@/components/ui/pricing-sidebar'
// // import { ProgressBar } from '@/components/ui/progress-bar'

// // export default function ApplyFormPage({ params }: { params: { country: string } }) {
// //   const router = useRouter()
// //   const { session } = useAuth()

// //   const [travelerCount, setTravelerCount] = useState(1)
// //   const [formData, setFormData] = useState<any[]>([{}]) // per traveler
// //   const [activeSection, setActiveSection] = useState(0)
// //   const [completedSections, setCompletedSections] = useState<number[]>([])
// //   const [currentTraveler, setCurrentTraveler] = useState(0)

// //   useEffect(() => {
// //     if (!session) {
// //       router.push(`/auth?next=/apply/${params.country}`)
// //     }
// //   }, [session])

// //   const updateTraveler = (index: number, data: any) => {
// //     const updated = [...formData]
// //     updated[index] = data
// //     setFormData(updated)
// //   }

// //   const handleTravelerChange = (count: number) => {
// //     const diff = count - formData.length
// //     if (diff > 0) {
// //       setFormData([...formData, ...Array(diff).fill({})])
// //     } else {
// //       setFormData(formData.slice(0, count))
// //     }
// //     setTravelerCount(count)
// //   }

// //   const handleNext = () => {
// //     if (activeSection < 3) {
// //       setActiveSection(activeSection + 1)
// //     } else if (activeSection === 3 && currentTraveler < travelerCount - 1) {
// //       setCurrentTraveler(currentTraveler + 1)
// //       setActiveSection(0)
// //     } else if (activeSection < 6) {
// //       setActiveSection(activeSection + 1)
// //     }
// //   }

// //   const handleBack = () => {
// //     if (activeSection > 0 && activeSection <= 3) {
// //       setActiveSection(activeSection - 1)
// //     } else if (activeSection === 0 && currentTraveler > 0) {
// //       setCurrentTraveler(currentTraveler - 1)
// //       setActiveSection(3)
// //     } else if (activeSection > 3 && activeSection <= 6) {
// //       setActiveSection(activeSection - 1)
// //     }
// //   }

// //   const markSectionComplete = (index: number) => {
// //     setCompletedSections((prev) => [...new Set([...prev, index])])
// //   }

// //   const allTravelersDone = currentTraveler === travelerCount - 1 && activeSection >= 3

// //   if (!session) return <p className="text-center py-20">Redirecting to login...</p>

// //   return (
// //     <>
// //       <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="beforeInteractive" />

// //       <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-7xl mx-auto p-6">
// //         {/* Sidebar */}
// //         <div className="md:col-span-1">
// //           <SectionSidebar
// //             currentStep={activeSection}
// //             completedSteps={completedSections}
// //             onNavigate={setActiveSection}
// //             isStepDisabled={(step) => {
// //               if (step > 3 && !allTravelersDone) return true
// //               return false
// //             }}
// //           />
// //         </div>

// //         {/* Main Section */}
// //         <div className="md:col-span-3 space-y-4">
// //           <ProgressBar current={currentTraveler} total={travelerCount} />
// //           <TravelerTabs
// //             travelerCount={travelerCount}
// //             travelerData={formData}
// //             updateTraveler={updateTraveler}
// //           />
// //           <SectionCard
// //             sectionIndex={activeSection}
// //             onNext={handleNext}
// //             onBack={handleBack}
// //             onComplete={markSectionComplete}
// //             traveler={formData[currentTraveler]}
// //             setTravelerData={(data) => updateTraveler(currentTraveler, data)}
// //             travelerIndex={currentTraveler}
// //             totalTravelers={travelerCount}
// //           />
// //         </div>

// //         {/* Pricing Sidebar */}
// //         <div className="md:col-span-1 sticky top-20">
// //           <PricingSidebar travelerCount={travelerCount} onChange={handleTravelerChange} />
// //         </div>
// //       </div>
// //     </>
// //   )
// // }
// 'use client'

// import { useRouter } from 'next/navigation'
// import { useAuth } from '@/context/AuthContext'
// import { useEffect, useState } from 'react'
// import Script from 'next/script'

// import { TravelerTabs } from '@/components/ui/traveler-tabs'
// import { SectionSidebar } from '@/components/ui/SectionSidebar'
// import SectionCard from '@/components/ui/SectionCard'
// import { PricingSidebar } from '@/components/ui/pricing-sidebar'
// import { ProgressBar } from '@/components/ui/progress-bar'

// export default function ApplyFormPage({ params }: { params: { country: string } }) {
//   const router = useRouter()
//   const { session } = useAuth()

//   const [travelerCount, setTravelerCount] = useState(1)
//   const [formData, setFormData] = useState<any[]>([{}]) // per traveler
//   const [activeSection, setActiveSection] = useState(0)
//   const [completedSections, setCompletedSections] = useState<number[]>([])
//   const [currentTraveler, setCurrentTraveler] = useState(0)
//   const [submitted, setSubmitted] = useState(false)

//   useEffect(() => {
//     if (!session) {
//       router.push(`/auth?next=/apply/${params.country}`)
//     }
//   }, [session])

//   const updateTraveler = (index: number, data: any) => {
//     const updated = [...formData]
//     updated[index] = data
//     setFormData(updated)
//   }

//   const handleTravelerChange = (count: number) => {
//     const diff = count - formData.length
//     if (diff > 0) {
//       setFormData([...formData, ...Array(diff).fill({})])
//     } else {
//       setFormData(formData.slice(0, count))
//     }
//     setTravelerCount(count)
//   }

//   const submitToBackend = async () => {
//     if (submitted) return
//     try {
//       const payload = {
//         travelers: formData,
//         selectedPlan: formData[0]?.selectedPlan,
//         appointmentDate: formData[0]?.appointmentDate,
//         appointmentTime: formData[0]?.appointmentTime,
//         appointmentAddress: formData[0]?.appointmentAddress,
//         appointmentPincode: formData[0]?.appointmentPincode,
//         appointmentContact: formData[0]?.appointmentContact,
//         email: formData[0]?.email,
//         phone: formData[0]?.phone,
//         country: formData[0]?.country ?? params.country,
//       }

//       const res = await fetch('/api/submit-form', {
//         method: 'POST',
//         body: JSON.stringify(payload),
//         headers: { 'Content-Type': 'application/json' },
//       })

//       const result = await res.json()
//       console.log('✅ Submitted to backend:', result)
//       setSubmitted(true)
//     } catch (err) {
//       console.error('❌ Submission failed:', err)
//     }
//   }

//   const handleNext = async () => {
//     if (activeSection < 3) {
//       setActiveSection(activeSection + 1)
//     } else if (activeSection === 3 && currentTraveler < travelerCount - 1) {
//       setCurrentTraveler(currentTraveler + 1)
//       setActiveSection(0)
//     } else if (activeSection === 5 && !submitted) {
//       await submitToBackend()
//       setActiveSection(activeSection + 1)
//     } else if (activeSection < 6) {
//       setActiveSection(activeSection + 1)
//     }
//   }

//   const handleBack = () => {
//     if (activeSection > 0 && activeSection <= 3) {
//       setActiveSection(activeSection - 1)
//     } else if (activeSection === 0 && currentTraveler > 0) {
//       setCurrentTraveler(currentTraveler - 1)
//       setActiveSection(3)
//     } else if (activeSection > 3 && activeSection <= 6) {
//       setActiveSection(activeSection - 1)
//     }
//   }

//   const markSectionComplete = (index: number) => {
//     setCompletedSections((prev) => [...new Set([...prev, index])])
//   }

//   const allTravelersDone = currentTraveler === travelerCount - 1 && activeSection >= 3

//   if (!session) return <p className="text-center py-20">Redirecting to login...</p>

//   return (
//     <>
//       <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="beforeInteractive" />

//       <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-7xl mx-auto p-6">
//         {/* Sidebar */}
//         <div className="md:col-span-1">
//           <SectionSidebar
//             currentStep={activeSection}
//             completedSteps={completedSections}
//             onNavigate={setActiveSection}
//             isStepDisabled={(step) => {
//               if (step > 3 && !allTravelersDone) return true
//               return false
//             }}
//           />
//         </div>

//         {/* Main Section */}
//         <div className="md:col-span-3 space-y-4">
//           <ProgressBar current={currentTraveler} total={travelerCount} />
//           <TravelerTabs
//                 travelerCount={travelerCount}
//                 travelerData={formData}
//                 updateTraveler={updateTraveler}
//                 currentTraveler={currentTraveler}
//                 setCurrentTraveler={setCurrentTraveler}
//                 />
//           <SectionCard
//             sectionIndex={activeSection}
//             onNext={handleNext}
//             onBack={handleBack}
//             onComplete={markSectionComplete}
//             traveler={formData[currentTraveler]}
//             setTravelerData={(data) => updateTraveler(currentTraveler, data)}
//             travelerIndex={currentTraveler}
//             totalTravelers={travelerCount}
//           />
//         </div>

//         {/* Pricing Sidebar */}
//         <div className="md:col-span-1 sticky top-20">
//           <PricingSidebar travelerCount={travelerCount} onChange={handleTravelerChange} />
//         </div>
//       </div>
//     </>
//   )
// }
'use client'

import { useEffect, useState } from 'react'
import { useAuth } from '@/context/AuthContext'
import { useParams, useRouter } from 'next/navigation'
import Script from 'next/script'
import { TravelerTabs } from '@/components/ui/traveler-tabs'
import { PricingSidebar } from '@/components/ui/pricing-sidebar'
import { SectionSidebar } from '@/components/ui/SectionSidebar'
import SectionCard from '@/components/ui/SectionCard'
import { ProgressBar } from '@/components/ui/progress-bar'

export default function ApplyFormPage() {
  const router = useRouter()
  const params = useParams()
  const country = (params?.country as string) || 'default'

  const { session } = useAuth()
  const [travelerCount, setTravelerCount] = useState(1)
  const [formData, setFormData] = useState<any[]>([{}])
  const [activeSection, setActiveSection] = useState(0)
  const [completedSections, setCompletedSections] = useState<number[]>([])
  const [currentTraveler, setCurrentTraveler] = useState(0)

  useEffect(() => {
    if (!session) {
      router.push(`/auth?next=/apply/${country}`)
    }
  }, [session])

  const updateTraveler = (index: number, data: any) => {
    const updated = [...formData]
    updated[index] = data
    setFormData(updated)
  }

  const handleTravelerChange = (count: number) => {
    const diff = count - formData.length
    if (diff > 0) {
      setFormData([...formData, ...Array(diff).fill({})])
    } else {
      setFormData(formData.slice(0, count))
    }
    setTravelerCount(count)
  }

  const handleNext = () => {
    if (activeSection < 3) {
      setActiveSection(activeSection + 1)
    } else if (activeSection === 3 && currentTraveler < travelerCount - 1) {
      setCurrentTraveler(currentTraveler + 1)
      setActiveSection(0)
    } else if (activeSection < 6) {
      setActiveSection(activeSection + 1)
    }
  }

  const handleBack = () => {
    if (activeSection > 0 && activeSection <= 3) {
      setActiveSection(activeSection - 1)
    } else if (activeSection === 0 && currentTraveler > 0) {
      setCurrentTraveler(currentTraveler - 1)
      setActiveSection(3)
    } else if (activeSection > 3 && activeSection <= 6) {
      setActiveSection(activeSection - 1)
    }
  }

  const markSectionComplete = (index: number) => {
    setCompletedSections((prev) => [...new Set([...prev, index])])
  }

  const allTravelersDone = currentTraveler === travelerCount - 1 && activeSection >= 3

  if (!session) return <p className="text-center py-20">Redirecting to login...</p>

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="beforeInteractive" />

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-7xl mx-auto p-6">
        {/* Sidebar */}
        <div className="md:col-span-1">
          <SectionSidebar
            currentStep={activeSection}
            completedSteps={completedSections}
            onNavigate={setActiveSection}
            isStepDisabled={(step) => {
              if (step > 3 && !allTravelersDone) return true
              return false
            }}
          />
        </div>

        {/* Main Form */}
        <div className="md:col-span-3 space-y-4">
          <ProgressBar current={currentTraveler} total={travelerCount} />
          <TravelerTabs
            travelerCount={travelerCount}
            travelerData={formData}
            updateTraveler={updateTraveler}
            currentTraveler={currentTraveler}
            setCurrentTraveler={setCurrentTraveler}
          />
          <SectionCard
            sectionIndex={activeSection}
            onNext={handleNext}
            onBack={handleBack}
            onComplete={markSectionComplete}
            traveler={formData[currentTraveler]}
            setTravelerData={(data) => updateTraveler(currentTraveler, data)}
            travelerIndex={currentTraveler}
            totalTravelers={travelerCount}
          />
        </div>

        {/* Pricing Sidebar */}
        <div className="md:col-span-1 sticky top-20">
          <PricingSidebar
            travelerCount={travelerCount}
            onCountChange={handleTravelerChange}
          />
        </div>
      </div>
    </>
  )
}
