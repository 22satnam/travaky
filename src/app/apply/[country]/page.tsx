
// // // // // // // // // // 'use client'

// // // // // // // // // // import { useEffect, useState } from 'react'
// // // // // // // // // // import { useAuth } from '@/context/AuthContext'
// // // // // // // // // // import { useParams, useRouter } from 'next/navigation'
// // // // // // // // // // import Script from 'next/script'
// // // // // // // // // // import { TravelerTabs } from '@/components/ui/traveler-tabs'
// // // // // // // // // // import { PricingSidebar } from '@/components/ui/pricing-sidebar'
// // // // // // // // // // import { SectionSidebar } from '@/components/ui/SectionSidebar'
// // // // // // // // // // import SectionCard from '@/components/ui/SectionCard'
// // // // // // // // // // import { ProgressBar } from '@/components/ui/progress-bar'
// // // // // // // // // // import { Button } from '@/components/ui/button' // make sure you import Button
// // // // // // // // // // import { PaymentSection } from '@/components/form-sections/PaymentSection'

// // // // // // // // // // export default function ApplyFormPage() {
// // // // // // // // // //   const router = useRouter()
// // // // // // // // // //   const params = useParams()
// // // // // // // // // //   const country = (params?.country as string) || 'default'

// // // // // // // // // //   const { session } = useAuth()
// // // // // // // // // //   const [travelerCount, setTravelerCount] = useState(1)
// // // // // // // // // //   const [formData, setFormData] = useState<any[]>([{}])
// // // // // // // // // //   const [activeSection, setActiveSection] = useState(0)
// // // // // // // // // //   const [completedSections, setCompletedSections] = useState<number[]>([])
// // // // // // // // // //   const [currentTraveler, setCurrentTraveler] = useState(0)
// // // // // // // // // //   const [submitted, setSubmitted] = useState(false)
// // // // // // // // // //   const [paymentInfo, setPaymentInfo] = useState<any>(null)

// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     if (!session) {
// // // // // // // // // //       router.push(`/auth?next=/apply/${country}`)
// // // // // // // // // //     }
// // // // // // // // // //   }, [session, router, country])

// // // // // // // // // //   const updateTraveler = (index: number, data: any) => {
// // // // // // // // // //     const updated = [...formData]
// // // // // // // // // //     updated[index] = data
// // // // // // // // // //     setFormData(updated)
// // // // // // // // // //   }

// // // // // // // // // //   const handleTravelerChange = (count: number) => {
// // // // // // // // // //     const diff = count - formData.length
// // // // // // // // // //     if (diff > 0) {
// // // // // // // // // //       setFormData([...formData, ...Array(diff).fill({})])
// // // // // // // // // //     } else {
// // // // // // // // // //       setFormData(formData.slice(0, count))
// // // // // // // // // //     }
// // // // // // // // // //     setTravelerCount(count)
// // // // // // // // // //   }

// // // // // // // // // //   const handleNext = async () => {
// // // // // // // // // //     if (activeSection < 5) {
// // // // // // // // // //       setActiveSection(activeSection + 1)
// // // // // // // // // //     } else if (activeSection === 5 && !submitted) {
// // // // // // // // // //       await submitToBackend()
// // // // // // // // // //       setActiveSection(activeSection + 1)
// // // // // // // // // //     } else if (activeSection < 6) {
// // // // // // // // // //       setActiveSection(activeSection + 1)
// // // // // // // // // //     }
// // // // // // // // // //   }

// // // // // // // // // //   const handleBack = () => {
// // // // // // // // // //     if (activeSection > 0 && activeSection <= 6) {
// // // // // // // // // //       setActiveSection(activeSection - 1)
// // // // // // // // // //     }
// // // // // // // // // //   }

// // // // // // // // // //   const markSectionComplete = (index: number) => {
// // // // // // // // // //     setCompletedSections((prev) => [...new Set([...prev, index])])
// // // // // // // // // //   }

// // // // // // // // // //   const submitToBackend = async () => {
// // // // // // // // // //     if (submitted) return
  
// // // // // // // // // //     try {
// // // // // // // // // //       const payload = {
// // // // // // // // // //         travelers: formData,
// // // // // // // // // //         selectedPlan: formData[0]?.selectedPlan,
// // // // // // // // // //         appointmentDate: formData[0]?.appointmentDate,
// // // // // // // // // //         appointmentTime: formData[0]?.appointmentTime,
// // // // // // // // // //         appointmentAddress: formData[0]?.appointmentAddress,
// // // // // // // // // //         appointmentPincode: formData[0]?.appointmentPincode,
// // // // // // // // // //         appointmentContact: formData[0]?.appointmentContact,
// // // // // // // // // //         email: formData[0]?.email,
// // // // // // // // // //         phone: formData[0]?.phone,
// // // // // // // // // //         country: formData[0]?.country ?? country,
// // // // // // // // // //       }
  
// // // // // // // // // //       const res = await fetch('/api/submit-form', {
// // // // // // // // // //         method: 'POST',
// // // // // // // // // //         body: JSON.stringify(payload),
// // // // // // // // // //         headers: { 'Content-Type': 'application/json' },
// // // // // // // // // //       })
  
// // // // // // // // // //       const result = await res.json()
  
// // // // // // // // // //       if (result.success && result.sessionId && (result.pdfUrl || result.pdfs)) {
// // // // // // // // // //         setSubmitted(true)
// // // // // // // // // //         setPaymentInfo({
// // // // // // // // // //           selectedPlan: payload.selectedPlan,
// // // // // // // // // //           sessionId: result.sessionId,
// // // // // // // // // //           country: payload.country,
// // // // // // // // // //           email: payload.email,
// // // // // // // // // //           phone: payload.phone,
// // // // // // // // // //           pdfUrl: result.pdfUrl,
// // // // // // // // // //           pdfs: result.pdfs ?? [],
// // // // // // // // // //         })
// // // // // // // // // //       } else {
// // // // // // // // // //         throw new Error(result.error || 'PDF or Session ID generation failed')
// // // // // // // // // //       }
// // // // // // // // // //     } catch (err: any) {
// // // // // // // // // //       const message = err?.message || err?.toString() || 'Unknown error'
// // // // // // // // // //       console.error('❌ Submission failed:', message)
// // // // // // // // // //       alert('Submission failed: ' + message)
// // // // // // // // // //     }
// // // // // // // // // //   }
  

// // // // // // // // // //   async function openPayment() {
// // // // // // // // // //     if (!paymentInfo) return

// // // // // // // // // //     const { selectedPlan, sessionId, country, email, phone, pdfUrl } = paymentInfo

// // // // // // // // // //     const prices = {
// // // // // // // // // //       "Docs on Call": 7500,
// // // // // // // // // //       "Docs on Door": 9500,
// // // // // // // // // //       "Visa at Door": 12500
// // // // // // // // // //     }

// // // // // // // // // //     const loadRazorpay = (): Promise<boolean> => {
// // // // // // // // // //       return new Promise((resolve) => {
// // // // // // // // // //         if (typeof window.Razorpay !== "undefined") {
// // // // // // // // // //           resolve(true);
// // // // // // // // // //           return;
// // // // // // // // // //         }
// // // // // // // // // //         const script = document.createElement("script");
// // // // // // // // // //         script.src = "https://checkout.razorpay.com/v1/checkout.js";
// // // // // // // // // //         script.onload = () => resolve(true);
// // // // // // // // // //         script.onerror = () => resolve(false);
// // // // // // // // // //         document.body.appendChild(script);
// // // // // // // // // //       });
// // // // // // // // // //     };

// // // // // // // // // //     const res = await loadRazorpay();

// // // // // // // // // //     if (!res) {
// // // // // // // // // //       alert("Failed to load Razorpay SDK, please refresh the page.");
// // // // // // // // // //       return;
// // // // // // // // // //     }

// // // // // // // // // //     const options = {
// // // // // // // // // //       key: "rzp_test_bBoKqWpCP41T6f",
// // // // // // // // // //       amount: prices[selectedPlan] * 100,
// // // // // // // // // //       currency: "INR",
// // // // // // // // // //       name: "Travaky",
// // // // // // // // // //       description: `${selectedPlan} Plan for ${country}`,
// // // // // // // // // //       prefill: {
// // // // // // // // // //         email: email,
// // // // // // // // // //         contact: phone,
// // // // // // // // // //       },
// // // // // // // // // //       handler: async function () {
// // // // // // // // // //         await fetch("/api/mark-paid", {
// // // // // // // // // //           method: "POST",
// // // // // // // // // //           headers: { "Content-Type": "application/json" },
// // // // // // // // // //           body: JSON.stringify({ paymentId: sessionId })
// // // // // // // // // //         })

// // // // // // // // // //         router.push(`/confirmation?id=${sessionId}`)
// // // // // // // // // //       },
// // // // // // // // // //       modal: {
// // // // // // // // // //         ondismiss: function() {
// // // // // // // // // //           alert("Payment cancelled. You can retry from dashboard.");
// // // // // // // // // //         }
// // // // // // // // // //       }
// // // // // // // // // //     }

// // // // // // // // // //     const rzp = new (window as any).Razorpay(options)
// // // // // // // // // //     rzp.open()
// // // // // // // // // //   }

// // // // // // // // // //   const isStepDisabled = (step: number) => {
// // // // // // // // // //     if (step === 6) {
// // // // // // // // // //       return !completedSections.includes(5);
// // // // // // // // // //     }
// // // // // // // // // //     return step > 0 && !completedSections.includes(step - 1);
// // // // // // // // // //   }

// // // // // // // // // //   if (!session) return <p className="text-center py-20">Redirecting to login...</p>

// // // // // // // // // //   return (
// // // // // // // // // //     <>
// // // // // // // // // //       <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="beforeInteractive" />

// // // // // // // // // //       <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-7xl mx-auto p-6">
// // // // // // // // // //         <div className="md:col-span-1">
// // // // // // // // // //           <SectionSidebar
// // // // // // // // // //             currentStep={activeSection}
// // // // // // // // // //             completedSteps={completedSections}
// // // // // // // // // //             onNavigate={setActiveSection}
// // // // // // // // // //             isStepDisabled={isStepDisabled}
// // // // // // // // // //           />
// // // // // // // // // //         </div>

// // // // // // // // // //         <div className="md:col-span-3 space-y-4">
// // // // // // // // // //           <ProgressBar current={currentTraveler} total={travelerCount} />
// // // // // // // // // //           <TravelerTabs
// // // // // // // // // //             travelerCount={travelerCount}
// // // // // // // // // //             travelerData={formData}
// // // // // // // // // //             updateTraveler={updateTraveler}
// // // // // // // // // //             currentTraveler={currentTraveler}
// // // // // // // // // //             setCurrentTraveler={setCurrentTraveler}
// // // // // // // // // //           />
// // // // // // // // // //           <SectionCard
// // // // // // // // // //             sectionIndex={activeSection}
// // // // // // // // // //             onNext={handleNext}
// // // // // // // // // //             onBack={handleBack}
// // // // // // // // // //             onComplete={markSectionComplete}
// // // // // // // // // //             traveler={formData[currentTraveler]}
// // // // // // // // // //             setTravelerData={(data) => updateTraveler(currentTraveler, data)}
// // // // // // // // // //             travelerIndex={currentTraveler}
// // // // // // // // // //             totalTravelers={travelerCount}
// // // // // // // // // //             openPayment={openPayment}
// // // // // // // // // //           />
// // // // // // // // // //           {/* ✅ Add payment button inside section 7 */}
// // // // // // // // // //           {activeSection === 6 && submitted && paymentInfo && (
// // // // // // // // // //                 <PaymentSection
// // // // // // // // // //                     data={paymentInfo}
// // // // // // // // // //                     travelerCount={travelerCount}
// // // // // // // // // //                     onPayment={openPayment}
// // // // // // // // // //                 />
// // // // // // // // // //                 )}

// // // // // // // // // //         </div>

// // // // // // // // // //         <div className="md:col-span-1 sticky top-20">
// // // // // // // // // //           <PricingSidebar travelerCount={travelerCount} onCountChange={handleTravelerChange} />
// // // // // // // // // //         </div>
// // // // // // // // // //       </div>
// // // // // // // // // //     </>
// // // // // // // // // //   )
// // // // // // // // // // }

// // // // // // // // // 'use client'

// // // // // // // // // import { useEffect, useState } from 'react'
// // // // // // // // // import { useAuth } from '@/context/AuthContext'
// // // // // // // // // import { useParams, useRouter } from 'next/navigation'
// // // // // // // // // import Script from 'next/script'
// // // // // // // // // import { TravelerTabs } from '@/components/ui/traveler-tabs'
// // // // // // // // // import  PricingSidebar  from '@/components/ui/pricing-sidebar'
// // // // // // // // // import { SectionSidebar } from '@/components/ui/SectionSidebar'
// // // // // // // // // import SectionCard from '@/components/ui/SectionCard'
// // // // // // // // // import { ProgressBar } from '@/components/ui/progress-bar'
// // // // // // // // // // import { PaymentSection } from '@/components/form-sections/PaymentSection'
// // // // // // // // // import { PaymentSection } from '@/components/form-sections/PaymentSection'
// // // // // // // // // import { PRICE_PLANS } from '@/config/pricing'


// // // // // // // // // type PricePlans = {
// // // // // // // // //   "Docs on Call": number
// // // // // // // // //   "Docs on Door": number
// // // // // // // // //   "Visa at Door": number
// // // // // // // // // }

// // // // // // // // // export default function ApplyFormPage() {
// // // // // // // // //   const router = useRouter()
// // // // // // // // //   const params = useParams()
// // // // // // // // //   const country = (params?.country as string) || 'default'

// // // // // // // // //   const { session } = useAuth()
// // // // // // // // //   const [travelerCount, setTravelerCount] = useState(1)
// // // // // // // // //   const [formData, setFormData] = useState<any[]>([{}])
// // // // // // // // //   const [activeSection, setActiveSection] = useState(0)
// // // // // // // // //   const [completedSections, setCompletedSections] = useState<number[]>([])
// // // // // // // // //   const [currentTraveler, setCurrentTraveler] = useState(0)
// // // // // // // // //   const [submitted, setSubmitted] = useState(false)
// // // // // // // // //   const [paymentInfo, setPaymentInfo] = useState<any>(null)

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     if (!session) {
// // // // // // // // //       router.push(`/auth?next=/apply/${country}`)
// // // // // // // // //     }
// // // // // // // // //   }, [session, router, country])

// // // // // // // // //   const updateTraveler = (index: number, data: any) => {
// // // // // // // // //     const updated = [...formData]
// // // // // // // // //     updated[index] = data
// // // // // // // // //     setFormData(updated)
// // // // // // // // //   }

// // // // // // // // //   const handleTravelerChange = (count: number) => {
// // // // // // // // //     const diff = count - formData.length
// // // // // // // // //     if (diff > 0) {
// // // // // // // // //       setFormData([...formData, ...Array(diff).fill({})])
// // // // // // // // //     } else {
// // // // // // // // //       setFormData(formData.slice(0, count))
// // // // // // // // //     }
// // // // // // // // //     setTravelerCount(count)
// // // // // // // // //   }

// // // // // // // // //   const handleNext = async () => {
// // // // // // // // //     if (activeSection < 5) {
// // // // // // // // //       setActiveSection(activeSection + 1)
// // // // // // // // //     } else if (activeSection === 5 && !submitted) {
// // // // // // // // //       await submitToBackend()
// // // // // // // // //       setActiveSection(activeSection + 1)
// // // // // // // // //     } else if (activeSection < 6) {
// // // // // // // // //       setActiveSection(activeSection + 1)
// // // // // // // // //     }
// // // // // // // // //   }

// // // // // // // // //   const handleBack = () => {
// // // // // // // // //     if (activeSection > 0 && activeSection <= 6) {
// // // // // // // // //       setActiveSection(activeSection - 1)
// // // // // // // // //     }
// // // // // // // // //   }

// // // // // // // // //   const markSectionComplete = (index: number) => {
// // // // // // // // //     setCompletedSections((prev) => [...new Set([...prev, index])])
// // // // // // // // //   }

// // // // // // // // //   const submitToBackend = async () => {
// // // // // // // // //     if (submitted) return

// // // // // // // // //     try {
// // // // // // // // //       const payload = {
// // // // // // // // //         travelers: formData,
// // // // // // // // //         selectedPlan: formData[0]?.selectedPlan,
// // // // // // // // //         appointmentDate: formData[0]?.appointmentDate,
// // // // // // // // //         appointmentTime: formData[0]?.appointmentTime,
// // // // // // // // //         appointmentAddress: formData[0]?.appointmentAddress,
// // // // // // // // //         appointmentPincode: formData[0]?.appointmentPincode,
// // // // // // // // //         appointmentContact: formData[0]?.appointmentContact,
// // // // // // // // //         email: formData[0]?.email,
// // // // // // // // //         phone: formData[0]?.phone,
// // // // // // // // //         country: formData[0]?.country ?? country,
// // // // // // // // //       }

// // // // // // // // //       const res = await fetch('/api/submit-form', {
// // // // // // // // //         method: 'POST',
// // // // // // // // //         body: JSON.stringify(payload),
// // // // // // // // //         headers: { 'Content-Type': 'application/json' },
// // // // // // // // //       })

// // // // // // // // //       const result = await res.json()

// // // // // // // // //       if (result.success && result.sessionId && (result.pdfUrl || result.pdfs)) {
// // // // // // // // //         setSubmitted(true)
// // // // // // // // //         setPaymentInfo({
// // // // // // // // //           selectedPlan: payload.selectedPlan,
// // // // // // // // //           sessionId: result.sessionId,
// // // // // // // // //           country: payload.country,
// // // // // // // // //           email: payload.email,
// // // // // // // // //           phone: payload.phone,
// // // // // // // // //           pdfUrl: result.pdfUrl,
// // // // // // // // //           pdfs: result.pdfs ?? [],
// // // // // // // // //         })
// // // // // // // // //       } else {
// // // // // // // // //         throw new Error(result.error || 'PDF or Session ID generation failed')
// // // // // // // // //       }
// // // // // // // // //     } catch (err: any) {
// // // // // // // // //       const message = err?.message || err?.toString() || 'Unknown error'
// // // // // // // // //       console.error('❌ Submission failed:', message)
// // // // // // // // //       alert('Submission failed: ' + message)
// // // // // // // // //     }
// // // // // // // // //   }

// // // // // // // // //   async function openPayment() {
// // // // // // // // //     if (!paymentInfo) return

// // // // // // // // //     const { selectedPlan, sessionId, country, email, phone } = paymentInfo

// // // // // // // // //     const prices = PRICE_PLANS

// // // // // // // // //     const loadRazorpay = (): Promise<boolean> => {
// // // // // // // // //       return new Promise((resolve) => {
// // // // // // // // //         if (typeof window.Razorpay !== "undefined") {
// // // // // // // // //           resolve(true)
// // // // // // // // //           return
// // // // // // // // //         }
// // // // // // // // //         const script = document.createElement("script")
// // // // // // // // //         script.src = "https://checkout.razorpay.com/v1/checkout.js"
// // // // // // // // //         script.onload = () => resolve(true)
// // // // // // // // //         script.onerror = () => resolve(false)
// // // // // // // // //         document.body.appendChild(script)
// // // // // // // // //       })
// // // // // // // // //     }

// // // // // // // // //     const res = await loadRazorpay()

// // // // // // // // //     if (!res) {
// // // // // // // // //       alert("Failed to load Razorpay SDK, please refresh the page.")
// // // // // // // // //       return
// // // // // // // // //     }

// // // // // // // // //     const options = {
// // // // // // // // //       key: "rzp_test_bBoKqWpCP41T6f",
// // // // // // // // //       amount: prices[selectedPlan] * 100,
// // // // // // // // //       currency: "INR",
// // // // // // // // //       name: "Travaky",
// // // // // // // // //       description: `${selectedPlan} Plan for ${country}`,
// // // // // // // // //       prefill: {
// // // // // // // // //         email: email,
// // // // // // // // //         contact: phone,
// // // // // // // // //       },
// // // // // // // // //       handler: async function () {
// // // // // // // // //         await fetch("/api/mark-paid", {
// // // // // // // // //           method: "POST",
// // // // // // // // //           headers: { "Content-Type": "application/json" },
// // // // // // // // //           body: JSON.stringify({ paymentId: sessionId })
// // // // // // // // //         })

// // // // // // // // //         router.push(`/confirmation?id=${sessionId}`)
// // // // // // // // //       },
// // // // // // // // //       modal: {
// // // // // // // // //         ondismiss: function () {
// // // // // // // // //           alert("Payment cancelled. You can retry from dashboard.")
// // // // // // // // //         }
// // // // // // // // //       }
// // // // // // // // //     }

// // // // // // // // //     const rzp = new window.Razorpay(options)
// // // // // // // // //     rzp.open()
// // // // // // // // //   }

// // // // // // // // //   const isStepDisabled = (step: number) => {
// // // // // // // // //     if (step === 6) return !completedSections.includes(5)
// // // // // // // // //     return step > 0 && !completedSections.includes(step - 1)
// // // // // // // // //   }

// // // // // // // // //   if (!session) return <p className="text-center py-20">Redirecting to login...</p>

// // // // // // // // //   return (
// // // // // // // // //     <>
// // // // // // // // //       <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="beforeInteractive" />

// // // // // // // // //       <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-7xl mx-auto p-6">
// // // // // // // // //         <div className="md:col-span-1">
// // // // // // // // //           <SectionSidebar
// // // // // // // // //             currentStep={activeSection}
// // // // // // // // //             completedSteps={completedSections}
// // // // // // // // //             onNavigate={setActiveSection}
// // // // // // // // //             isStepDisabled={isStepDisabled}
// // // // // // // // //           />
// // // // // // // // //         </div>

// // // // // // // // //         <div className="md:col-span-3 space-y-4">
// // // // // // // // //           <ProgressBar current={currentTraveler} total={travelerCount} />
// // // // // // // // //           <TravelerTabs
// // // // // // // // //             travelerCount={travelerCount}
// // // // // // // // //             travelerData={formData}
// // // // // // // // //             updateTraveler={updateTraveler}
// // // // // // // // //             currentTraveler={currentTraveler}
// // // // // // // // //             setCurrentTraveler={setCurrentTraveler}
// // // // // // // // //           />
// // // // // // // // //           <SectionCard
// // // // // // // // //             sectionIndex={activeSection}
// // // // // // // // //             onNext={handleNext}
// // // // // // // // //             onBack={handleBack}
// // // // // // // // //             onComplete={markSectionComplete}
// // // // // // // // //             traveler={formData[currentTraveler]}
// // // // // // // // //             setTravelerData={(data) => updateTraveler(currentTraveler, data)}
// // // // // // // // //             travelerIndex={currentTraveler}
// // // // // // // // //             totalTravelers={travelerCount}
// // // // // // // // //             openPayment={openPayment}
// // // // // // // // //           />
// // // // // // // // //           {activeSection === 6 && submitted && paymentInfo && (
// // // // // // // // //             <PaymentSection
// // // // // // // // //               selectedPlan={paymentInfo.selectedPlan}
// // // // // // // // //               travelerCount={travelerCount}
// // // // // // // // //               onPayment={openPayment}
// // // // // // // // //             />
// // // // // // // // //           )}
// // // // // // // // //         </div>

// // // // // // // // //         <div className="md:col-span-1 sticky top-20">
// // // // // // // // //         <PricingSidebar
// // // // // // // // //                   selectedPlan={
// // // // // // // // //                     (formData[0]?.selectedPlan as PlanName) || 'Docs on Call'
// // // // // // // // //                 }
// // // // // // // // //                 travelerCount={travelerCount}
// // // // // // // // //                 onCountChange={handleTravelerChange}
// // // // // // // // //                 />
// // // // // // // // //         </div>
// // // // // // // // //       </div>
// // // // // // // // //     </>
// // // // // // // // //   )
// // // // // // // // // }


// // // // // // // // 'use client'

// // // // // // // // import { useEffect, useState } from 'react'
// // // // // // // // import { useAuth } from '@/context/AuthContext'
// // // // // // // // import { useParams, useRouter } from 'next/navigation'
// // // // // // // // import Script from 'next/script'
// // // // // // // // import { TravelerTabs } from '@/components/ui/traveler-tabs'
// // // // // // // // import PricingSidebar from '@/components/ui/pricing-sidebar'
// // // // // // // // import { SectionSidebar } from '@/components/ui/SectionSidebar'
// // // // // // // // import SectionCard from '@/components/ui/SectionCard'
// // // // // // // // import { ProgressBar } from '@/components/ui/progress-bar'
// // // // // // // // import { PaymentSection } from '@/components/form-sections/PaymentSection'
// // // // // // // // import { PRICE_PLANS, PlanName } from '@/config/pricing'

// // // // // // // // export default function ApplyFormPage() {
// // // // // // // //   const router = useRouter()
// // // // // // // //   const params = useParams()
// // // // // // // //   const country = (params?.country as string) || 'default'

// // // // // // // //   const { session } = useAuth()
// // // // // // // //   const [travelerCount, setTravelerCount] = useState(1)
// // // // // // // //   const [formData, setFormData] = useState<any[]>([{}])
// // // // // // // //   const [activeSection, setActiveSection] = useState(0)
// // // // // // // //   const [completedSections, setCompletedSections] = useState<number[]>([])
// // // // // // // //   const [currentTraveler, setCurrentTraveler] = useState(0)
// // // // // // // //   const [submitted, setSubmitted] = useState(false)
// // // // // // // //   const [paymentInfo, setPaymentInfo] = useState<{
// // // // // // // //     selectedPlan: PlanName
// // // // // // // //     sessionId: string
// // // // // // // //     country: string
// // // // // // // //     email: string
// // // // // // // //     phone: string
// // // // // // // //     pdfUrl?: string
// // // // // // // //     pdfs?: string[]
// // // // // // // //   } | null>(null)

// // // // // // // //   useEffect(() => {
// // // // // // // //     if (!session) {
// // // // // // // //       router.push(`/auth?next=/apply/${country}`)
// // // // // // // //     }
// // // // // // // //   }, [session, router, country])

// // // // // // // //   const updateTraveler = (index: number, data: any) => {
// // // // // // // //     const updated = [...formData]
// // // // // // // //     updated[index] = data
// // // // // // // //     setFormData(updated)
// // // // // // // //   }

// // // // // // // //   const handleTravelerChange = (count: number) => {
// // // // // // // //     const diff = count - formData.length
// // // // // // // //     if (diff > 0) {
// // // // // // // //       setFormData([...formData, ...Array(diff).fill({})])
// // // // // // // //     } else {
// // // // // // // //       setFormData(formData.slice(0, count))
// // // // // // // //     }
// // // // // // // //     setTravelerCount(count)
// // // // // // // //   }

// // // // // // // //   const handleNext = async () => {
// // // // // // // //     if (activeSection < 4) {
// // // // // // // //       // per-traveler sections 0-3
// // // // // // // //       setActiveSection(activeSection + 1)
// // // // // // // //     } else if (activeSection === 4 && !submitted) {
// // // // // // // //       // global submit & PDF generation
// // // // // // // //       await submitToBackend()
// // // // // // // //       setActiveSection(5)
// // // // // // // //     } else if (activeSection < 6) {
// // // // // // // //       // global plan(5) -> appointment(6)
// // // // // // // //       setActiveSection(activeSection + 1)
// // // // // // // //     }
// // // // // // // //   }

// // // // // // // //   const handleBack = () => {
// // // // // // // //     if (activeSection > 0) {
// // // // // // // //       setActiveSection(activeSection - 1)
// // // // // // // //     }
// // // // // // // //   }

// // // // // // // //   const markSectionComplete = (index: number) => {
// // // // // // // //     setCompletedSections((prev) => [...new Set([...prev, index])])
// // // // // // // //   }

// // // // // // // //   const submitToBackend = async () => {
// // // // // // // //     if (submitted) return

// // // // // // // //     try {
// // // // // // // //       const payload = {
// // // // // // // //         travelers: formData,
// // // // // // // //         selectedPlan: formData[0]?.selectedPlan,
// // // // // // // //         appointmentDate: formData[0]?.appointmentDate,
// // // // // // // //         appointmentTime: formData[0]?.appointmentTime,
// // // // // // // //         appointmentAddress: formData[0]?.appointmentAddress,
// // // // // // // //         appointmentPincode: formData[0]?.appointmentPincode,
// // // // // // // //         appointmentContact: formData[0]?.appointmentContact,
// // // // // // // //         email: formData[0]?.email,
// // // // // // // //         phone: formData[0]?.phone,
// // // // // // // //         country: formData[0]?.country ?? country,
// // // // // // // //       }

// // // // // // // //       const res = await fetch('/api/submit-form', {
// // // // // // // //         method: 'POST',
// // // // // // // //         headers: { 'Content-Type': 'application/json' },
// // // // // // // //         body: JSON.stringify(payload),
// // // // // // // //       })

// // // // // // // //       const result = await res.json()

// // // // // // // //       if (result.success && result.sessionId && (result.pdfUrl || result.pdfs)) {
// // // // // // // //         setSubmitted(true)
// // // // // // // //         setPaymentInfo({
// // // // // // // //           selectedPlan: payload.selectedPlan,
// // // // // // // //           sessionId: result.sessionId,
// // // // // // // //           country: payload.country,
// // // // // // // //           email: payload.email,
// // // // // // // //           phone: payload.phone,
// // // // // // // //           pdfUrl: result.pdfUrl,
// // // // // // // //           pdfs: result.pdfs ?? [],
// // // // // // // //         })
// // // // // // // //       } else {
// // // // // // // //         throw new Error(result.error || 'PDF or Session ID generation failed')
// // // // // // // //       }
// // // // // // // //     } catch (err: any) {
// // // // // // // //       console.error('Submission failed:', err)
// // // // // // // //       alert('Submission failed: ' + (err.message || err.toString()))
// // // // // // // //     }
// // // // // // // //   }

// // // // // // // //   async function openPayment() {
// // // // // // // //     if (!paymentInfo) return
// // // // // // // //     const { selectedPlan, sessionId, country, email, phone } = paymentInfo

// // // // // // // //     const loadRazorpay = (): Promise<boolean> => {
// // // // // // // //       return new Promise((resolve) => {
// // // // // // // //         if (typeof window.Razorpay !== 'undefined') {
// // // // // // // //           resolve(true); return
// // // // // // // //         }
// // // // // // // //         const script = document.createElement('script')
// // // // // // // //         script.src = 'https://checkout.razorpay.com/v1/checkout.js'
// // // // // // // //         script.onload = () => resolve(true)
// // // // // // // //         script.onerror = () => resolve(false)
// // // // // // // //         document.body.appendChild(script)
// // // // // // // //       })
// // // // // // // //     }

// // // // // // // //     const ok = await loadRazorpay()
// // // // // // // //     if (!ok) { alert('Failed to load payment SDK'); return }

// // // // // // // //     const options = {
// // // // // // // //       key: 'rzp_test_bBoKqWpCP41T6f',
// // // // // // // //       amount: PRICE_PLANS[selectedPlan] * travelerCount * 100,
// // // // // // // //       currency: 'INR',
// // // // // // // //       name: 'Travaky',
// // // // // // // //       description: `${selectedPlan} plan for ${travelerCount} travelers`,
// // // // // // // //       prefill: { email, contact: phone },
// // // // // // // //       handler: async (resp: any) => {
// // // // // // // //         await fetch('/api/mark-paid', {
// // // // // // // //           method: 'POST',
// // // // // // // //           headers: { 'Content-Type': 'application/json' },
// // // // // // // //           body: JSON.stringify({ paymentId: sessionId }),
// // // // // // // //         })
// // // // // // // //         router.push(`/confirmation?id=${sessionId}`)
// // // // // // // //       },
// // // // // // // //       modal: { ondismiss: () => alert('Payment cancelled.') }
// // // // // // // //     }

// // // // // // // //     new window.Razorpay(options).open()
// // // // // // // //   }

// // // // // // // //   if (!session) return <p>Redirecting...</p>

// // // // // // // //   return (
// // // // // // // //     <>
// // // // // // // //       <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="beforeInteractive"/>
// // // // // // // //       <div className="grid grid-cols-1 md:grid-cols-5 gap-6 p-6">
// // // // // // // //         <div className="md:col-span-1">
// // // // // // // //           <SectionSidebar
// // // // // // // //             currentStep={activeSection}
// // // // // // // //             completedSteps={completedSections}
// // // // // // // //             onNavigate={setActiveSection}
// // // // // // // //             isStepDisabled={(step) => step>0 && !completedSections.includes(step-1)}
// // // // // // // //           />
// // // // // // // //         </div>
// // // // // // // //         <div className="md:col-span-3 space-y-4">
// // // // // // // //           {activeSection < 4 ? (
// // // // // // // //             <>
// // // // // // // //               <ProgressBar current={currentTraveler} total={travelerCount} />
// // // // // // // //               <TravelerTabs
// // // // // // // //                 travelerCount={travelerCount}
// // // // // // // //                 travelerData={formData}
// // // // // // // //                 updateTraveler={updateTraveler}
// // // // // // // //                 currentTraveler={currentTraveler}
// // // // // // // //                 setCurrentTraveler={setCurrentTraveler}
// // // // // // // //               />
// // // // // // // //               <SectionCard
// // // // // // // //                 sectionIndex={activeSection}
// // // // // // // //                 onNext={handleNext}
// // // // // // // //                 onBack={handleBack}
// // // // // // // //                 onComplete={markSectionComplete}
// // // // // // // //                 traveler={formData[currentTraveler]}
// // // // // // // //                 setTravelerData={(data) => updateTraveler(currentTraveler, data)}
// // // // // // // //                 travelerIndex={currentTraveler}
// // // // // // // //                 totalTravelers={travelerCount}
// // // // // // // //                 openPayment={openPayment}
// // // // // // // //               />
// // // // // // // //             </>
// // // // // // // //           ) : activeSection < 6 ? (
// // // // // // // //             <SectionCard
// // // // // // // //               sectionIndex={activeSection}
// // // // // // // //               onNext={handleNext}
// // // // // // // //               onBack={handleBack}
// // // // // // // //               onComplete={markSectionComplete}
// // // // // // // //               traveler={formData[0]}
// // // // // // // //               setTravelerData={() => {}}
// // // // // // // //               travelerIndex={0}
// // // // // // // //               totalTravelers={travelerCount}
// // // // // // // //               openPayment={openPayment}
// // // // // // // //             />
// // // // // // // //           ) : (
// // // // // // // //             submitted && paymentInfo && (
// // // // // // // //               <PaymentSection
// // // // // // // //                 selectedPlan={paymentInfo.selectedPlan}
// // // // // // // //                 travelerCount={travelerCount}
// // // // // // // //                 onPayment={openPayment}
// // // // // // // //               />
// // // // // // // //             )
// // // // // // // //           )}
// // // // // // // //         </div>
// // // // // // // //         <div className="md:col-span-1 sticky top-20">
// // // // // // // //           <PricingSidebar
// // // // // // // //             selectedPlan={(formData[0]?.selectedPlan as PlanName) || 'Docs on Call'}
// // // // // // // //             travelerCount={travelerCount}
// // // // // // // //             onCountChange={handleTravelerChange}
// // // // // // // //           />
// // // // // // // //         </div>
// // // // // // // //       </div>
// // // // // // // //     </>
// // // // // // // //   )
// // // // // // // // }


// // // // // // // 'use client'

// // // // // // // import { useEffect, useState } from 'react'
// // // // // // // import { useAuth } from '@/context/AuthContext'
// // // // // // // import { useParams, useRouter } from 'next/navigation'
// // // // // // // import Script from 'next/script'
// // // // // // // import { TravelerTabs } from '@/components/ui/traveler-tabs'
// // // // // // // import PricingSidebar from '@/components/ui/pricing-sidebar'
// // // // // // // import { SectionSidebar } from '@/components/ui/SectionSidebar'
// // // // // // // import SectionCard from '@/components/ui/SectionCard'
// // // // // // // import { ProgressBar } from '@/components/ui/progress-bar'
// // // // // // // import { PaymentSection } from '@/components/form-sections/PaymentSection'
// // // // // // // import { PRICE_PLANS, PlanName } from '@/config/pricing'

// // // // // // // export default function ApplyFormPage() {
// // // // // // //   const router = useRouter()
// // // // // // //   const params = useParams()
// // // // // // //   const country = (params?.country as string) || 'default'
// // // // // // //   const { session } = useAuth()

// // // // // // // const searchParams = new URLSearchParams(typeof window !== 'undefined' ? window.location.search : '')
// // // // // // // const initialTrav = Number(searchParams.get('travellers')) || 1
// // // // // // // const [travelerCount, setTravelerCount] = useState(initialTrav)
// // // // // // // const [formData, setFormData] = useState<any[]>(Array(initialTrav).fill({}))
// // // // // // //   const [activeSection, setActiveSection] = useState(0)
// // // // // // //   const [completedSections, setCompletedSections] = useState<number[]>([])
// // // // // // //   const [currentTraveler, setCurrentTraveler] = useState(0)
// // // // // // //   const [submitted, setSubmitted] = useState(false)
// // // // // // //   const [paymentInfo, setPaymentInfo] = useState<{
// // // // // // //     selectedPlan: PlanName
// // // // // // //     sessionId: string
// // // // // // //     country: string
// // // // // // //     email: string
// // // // // // //     phone: string
// // // // // // //     pdfUrl?: string
// // // // // // //     pdfs?: string[]
// // // // // // //   } | null>(null)

// // // // // // //   // **NEW**: which travellers (1-based) are still empty
// // // // // // //   const [missingTravelers, setMissingTravelers] = useState<number[]>([])

// // // // // // //   useEffect(() => {
// // // // // // //     if (!session) {
// // // // // // //       router.push(`/auth?next=/apply/${country}`)
// // // // // // //     }
// // // // // // //   }, [session, router, country])

// // // // // // //   const updateTraveler = (index: number, data: any) => {
// // // // // // //     const updated = [...formData]
// // // // // // //     updated[index] = data
// // // // // // //     setFormData(updated)
// // // // // // //   }

// // // // // // //   const handleTravelerChange = (count: number) => {
// // // // // // //     const diff = count - formData.length
// // // // // // //     if (diff > 0) setFormData([...formData, ...Array(diff).fill({})])
// // // // // // //     else setFormData(formData.slice(0, count))
// // // // // // //     setTravelerCount(count)
// // // // // // //   }

// // // // // // //   const handleNext = async () => {
// // // // // // //     // 0–3: per-traveller steps
// // // // // // //     if (activeSection < 4) {
// // // // // // //       setActiveSection(activeSection + 1)
// // // // // // //       return
// // // // // // //     }

// // // // // // //     // **NEW**: before entering steps 4–6, verify all travellers filled
// // // // // // //     const incomplete = formData
// // // // // // //       .map((t, i) => ({ i, filled: Object.keys(t).length > 0 }))
// // // // // // //       .filter(x => !x.filled)
// // // // // // //       .map(x => x.i + 1)

// // // // // // //     if (incomplete.length > 0) {
// // // // // // //       setMissingTravelers(incomplete)
// // // // // // //       return
// // // // // // //     }
// // // // // // //     setMissingTravelers([])

// // // // // // //     // 4: submit & generate PDF
// // // // // // //     if (activeSection === 4 && !submitted) {
// // // // // // //       await submitToBackend()
// // // // // // //       setActiveSection(5)
// // // // // // //     }
// // // // // // //     // 5–6: plan & appointment
// // // // // // //     else if (activeSection < 6) {
// // // // // // //       setActiveSection(activeSection + 1)
// // // // // // //     }
// // // // // // //   }

// // // // // // //   const handleBack = () => {
// // // // // // //     if (activeSection > 0) setActiveSection(activeSection - 1)
// // // // // // //   }

// // // // // // //   const markSectionComplete = (index: number) => {
// // // // // // //     setCompletedSections(prev => [...new Set([...prev, index])])
// // // // // // //   }

// // // // // // //   const submitToBackend = async () => {
// // // // // // //     if (submitted) return
// // // // // // //     try {
// // // // // // //       const payload = {
// // // // // // //         travelers: formData,
// // // // // // //         selectedPlan: formData[0]?.selectedPlan,
// // // // // // //         appointmentDate: formData[0]?.appointmentDate,
// // // // // // //         appointmentTime: formData[0]?.appointmentTime,
// // // // // // //         appointmentAddress: formData[0]?.appointmentAddress,
// // // // // // //         appointmentPincode: formData[0]?.appointmentPincode,
// // // // // // //         appointmentContact: formData[0]?.appointmentContact,
// // // // // // //         email: formData[0]?.email,
// // // // // // //         phone: formData[0]?.phone,
// // // // // // //         country: formData[0]?.country ?? country,
// // // // // // //       }
// // // // // // //       const res = await fetch('/api/submit-form', {
// // // // // // //         method: 'POST',
// // // // // // //         headers: { 'Content-Type': 'application/json' },
// // // // // // //         body: JSON.stringify(payload),
// // // // // // //       })
// // // // // // //       const result = await res.json()
// // // // // // //       if (result.success && result.sessionId) {
// // // // // // //         setSubmitted(true)
// // // // // // //         setPaymentInfo({
// // // // // // //           ...payload,
// // // // // // //           sessionId: result.sessionId,
// // // // // // //           pdfUrl: result.pdfUrl,
// // // // // // //           pdfs: result.pdfs ?? [],
// // // // // // //         })
// // // // // // //       } else {
// // // // // // //         throw new Error(result.error || 'Submission failed')
// // // // // // //       }
// // // // // // //     } catch (err: any) {
// // // // // // //       alert('Submission failed: ' + err.message)
// // // // // // //     }
// // // // // // //   }

// // // // // // //   async function openPayment() {
// // // // // // //     if (!paymentInfo) return
// // // // // // //     const { selectedPlan, sessionId, email, phone } = paymentInfo
// // // // // // //     // load Razorpay...
// // // // // // //     await loadAndOpenRazorpay({
// // // // // // //       amount: PRICE_PLANS[selectedPlan] * travelerCount,
// // // // // // //       email,
// // // // // // //       phone,
// // // // // // //       sessionId,
// // // // // // //       description: `${selectedPlan} plan for ${travelerCount} travelers`,
// // // // // // //     })
// // // // // // //   }

// // // // // // //   if (!session) return <p>Redirecting...</p>

// // // // // // //   return (
// // // // // // //     <>
// // // // // // //       <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="beforeInteractive" />
// // // // // // //       <div className="grid grid-cols-1 md:grid-cols-5 gap-6 p-6">
// // // // // // //         <div className="md:col-span-1">
// // // // // // //           <SectionSidebar
// // // // // // //             currentStep={activeSection}
// // // // // // //             completedSteps={completedSections}
// // // // // // //             onNavigate={setActiveSection}
// // // // // // //             isStepDisabled={step =>
// // // // // // //               // can't go past previous step or into global steps if missing travellers
// // // // // // //               (step > 0 && !completedSections.includes(step - 1)) ||
// // // // // // //               (step >= 4 && missingTravelers.length > 0)
// // // // // // //             }
// // // // // // //           />
// // // // // // //         </div>

// // // // // // //         <div className="md:col-span-3 space-y-4">
// // // // // // //           {missingTravelers.length > 0 && activeSection >= 4 && (
// // // // // // //             <div className="p-4 mb-4 bg-red-100 text-red-700 rounded">
// // // // // // //               Please fill details for traveler{s(missingTravelers)} before proceeding:
// // // // // // //               {missingTravelers.map(i => ` #${i}`).join(', ')}
// // // // // // //             </div>
// // // // // // //           )}

// // // // // // //           {activeSection < 4 ? (
// // // // // // //             <>
// // // // // // //               <ProgressBar current={currentTraveler} total={travelerCount} />
// // // // // // //               <TravelerTabs
// // // // // // //                 travelerCount={travelerCount}
// // // // // // //                 travelerData={formData}
// // // // // // //                 updateTraveler={updateTraveler}
// // // // // // //                 currentTraveler={currentTraveler}
// // // // // // //                 setCurrentTraveler={setCurrentTraveler}
// // // // // // //               />
// // // // // // //               <SectionCard
// // // // // // //                 sectionIndex={activeSection}
// // // // // // //                 onNext={handleNext}
// // // // // // //                 onBack={handleBack}
// // // // // // //                 onComplete={markSectionComplete}
// // // // // // //                 traveler={formData[currentTraveler]}
// // // // // // //                 setTravelerData={(data) => updateTraveler(currentTraveler, data)}
// // // // // // //                 travelerIndex={currentTraveler}
// // // // // // //                 totalTravelers={travelerCount}
// // // // // // //                 openPayment={openPayment}
// // // // // // //               />
// // // // // // //             </>
// // // // // // //           ) : activeSection < 6 ? (
// // // // // // //             <SectionCard
// // // // // // //               sectionIndex={activeSection}
// // // // // // //               onNext={handleNext}
// // // // // // //               onBack={handleBack}
// // // // // // //               onComplete={markSectionComplete}
// // // // // // //               traveler={formData[0]}
// // // // // // //               setTravelerData={() => {}}
// // // // // // //               travelerIndex={0}
// // // // // // //               totalTravelers={travelerCount}
// // // // // // //               openPayment={openPayment}
// // // // // // //             />
// // // // // // //           ) : (
// // // // // // //             submitted && paymentInfo && (
// // // // // // //               <PaymentSection
// // // // // // //                 selectedPlan={paymentInfo.selectedPlan}
// // // // // // //                 travelerCount={travelerCount}
// // // // // // //                 onPayment={openPayment}
// // // // // // //               />
// // // // // // //             )
// // // // // // //           )}
// // // // // // //         </div>

// // // // // // //         <div className="md:col-span-1 sticky top-20">
// // // // // // //           <PricingSidebar
// // // // // // //             selectedPlan={(formData[0]?.selectedPlan as PlanName) || 'Docs on Call'}
// // // // // // //             travelerCount={travelerCount}
// // // // // // //             onCountChange={handleTravelerChange}
// // // // // // //           />
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </>
// // // // // // //   )
// // // // // // // }

// // // // // // // // helper to render plural “s”
// // // // // // // function s(arr: number[]) {
// // // // // // //   return arr.length > 1 ? 's' : ''
// // // // // // // }


// // // // // // 'use client'

// // // // // // import { useEffect, useState } from 'react'
// // // // // // import { useParams, useRouter } from 'next/navigation'
// // // // // // import Script from 'next/script'

// // // // // // import { useAuth } from '@/context/AuthContext'
// // // // // // import { TravelerTabs } from '@/components/ui/traveler-tabs'
// // // // // // import PricingSidebar from '@/components/ui/pricing-sidebar'
// // // // // // import { SectionSidebar } from '@/components/ui/SectionSidebar'
// // // // // // import SectionCard    from '@/components/ui/SectionCard'
// // // // // // import { ProgressBar } from '@/components/ui/progress-bar'
// // // // // // import { PaymentSection } from '@/components/form-sections/PaymentSection'

// // // // // // import { PRICE_PLANS, FEES, PlanName } from '@/config/pricing'

// // // // // // export default function ApplyFormPage() {
// // // // // //   const router        = useRouter()
// // // // // //   const params        = useParams()
// // // // // //   const country       = (params?.country as string) || 'default'
// // // // // //   const { session }   = useAuth()

// // // // // //   /* ───────────────────────── read QS from visa page ──────────── */
// // // // // //   const search        = new URLSearchParams(
// // // // // //     typeof window !== 'undefined' ? window.location.search : ''
// // // // // //   )
// // // // // //   const initialTrav   = Number(search.get('travellers')) || 1
// // // // // //   const initialPlan   = (search.get('plan') as PlanName) || 'Docs on Call'

// // // // // //   /* ───────────────────────── state ───────────────────────────── */
// // // // // //   const [travelerCount, setTravelerCount] = useState(initialTrav)
// // // // // //   const [selectedPlan,  setSelectedPlan]  = useState<PlanName>(initialPlan)
// // // // // //   const [formData,      setFormData]      = useState<any[]>(
// // // // // //     Array(initialTrav).fill({ selectedPlan: initialPlan })
// // // // // //   )
// // // // // //   const [activeSection,    setActiveSection]    = useState(0)
// // // // // //   const [completedSections,setCompletedSections]= useState<number[]>([])
// // // // // //   const [currentTraveler,  setCurrentTraveler]  = useState(0)

// // // // // //   const [submitted,  setSubmitted]  = useState(false)
// // // // // //   const [paymentInfo,setPaymentInfo]= useState<{
// // // // // //     selectedPlan: PlanName; sessionId: string; country:string;
// // // // // //     email:string; phone:string; pdfUrl?:string; pdfs?:string[];
// // // // // //   }|null>(null)

// // // // // //   /* travellers missing check */
// // // // // //   const [missingTravelers,setMissingTravelers]= useState<number[]>([])

// // // // // //   /* ───────────────────────── auth redirect ───────────────────── */
// // // // // //   useEffect(()=>{
// // // // // //     if (!session) router.push(`/auth?next=/apply/${country}`)
// // // // // //   },[session,router,country])

// // // // // //   /* ───────────────────────── helpers ─────────────────────────── */
// // // // // //   const updateTraveler = (idx:number, data:any)=>{
// // // // // //     const updated=[...formData]; updated[idx]=data; setFormData(updated)
// // // // // //     if (data.selectedPlan) setSelectedPlan(data.selectedPlan as PlanName)
// // // // // //   }

// // // // // //   const handleTravelerChange = (count:number)=>{
// // // // // //     const diff=count-formData.length
// // // // // //     if (diff>0) setFormData([...formData,...Array(diff).fill({selectedPlan})])
// // // // // //     else        setFormData(formData.slice(0,count))
// // // // // //     setTravelerCount(count)
// // // // // //   }

// // // // // //   const handleNext = async ()=>{
// // // // // //     if (activeSection<4){ setActiveSection(activeSection+1); return }

// // // // // //     const incomplete=formData
// // // // // //       .map((t,i)=>({i,filled:Object.keys(t).length>0}))
// // // // // //       .filter(x=>!x.filled).map(x=>x.i+1)
// // // // // //     if (incomplete.length){ setMissingTravelers(incomplete); return }
// // // // // //     setMissingTravelers([])

// // // // // //     if (activeSection===4 && !submitted){
// // // // // //       await submitToBackend(); setActiveSection(5)
// // // // // //     } else if (activeSection<6){ setActiveSection(activeSection+1) }
// // // // // //   }

// // // // // //   const handleBack = ()=>{ if (activeSection>0) setActiveSection(activeSection-1) }
// // // // // //   const markComplete = (idx:number)=> setCompletedSections(p=>[...new Set([...p,idx])])

// // // // // //   /* ───────────────────────── backend submit ──────────────────── */
// // // // // //   const submitToBackend = async()=>{
// // // // // //     if (submitted) return
// // // // // //     const payload = {
// // // // // //       travelers: formData,
// // // // // //       selectedPlan,
// // // // // //       appointmentDate: formData[0]?.appointmentDate,
// // // // // //       appointmentTime: formData[0]?.appointmentTime,
// // // // // //       appointmentAddress: formData[0]?.appointmentAddress,
// // // // // //       appointmentPincode: formData[0]?.appointmentPincode,
// // // // // //       appointmentContact: formData[0]?.appointmentContact,
// // // // // //       email: formData[0]?.email,
// // // // // //       phone: formData[0]?.phone,
// // // // // //       country
// // // // // //     }
// // // // // //     const res = await fetch('/api/submit-form',{
// // // // // //       method:'POST', headers:{'Content-Type':'application/json'},
// // // // // //       body:JSON.stringify(payload)
// // // // // //     })
// // // // // //     const result=await res.json()
// // // // // //     if (result.success && result.sessionId){
// // // // // //       setSubmitted(true)
// // // // // //       setPaymentInfo({
// // // // // //         ...payload, sessionId:result.sessionId,
// // // // // //         pdfUrl:result.pdfUrl, pdfs:result.pdfs??[]
// // // // // //       })
// // // // // //     } else {
// // // // // //       alert(result.error || 'Submission failed')
// // // // // //     }
// // // // // //   }

// // // // // //   /* ───────────────────────── payment ─────────────────────────── */
// // // // // //   async function openPayment(){
// // // // // //     if (!paymentInfo) return
// // // // // //     const { sessionId,email,phone } = paymentInfo
// // // // // //     const amount =
// // // // // //       PRICE_PLANS[selectedPlan]*travelerCount +
// // // // // //       FEES.appointment*travelerCount + FEES.service

// // // // // //     await loadAndOpenRazorpay({
// // // // // //       amount,email,phone,sessionId,
// // // // // //       description:`${selectedPlan} plan for ${travelerCount} travellers`
// // // // // //     })
// // // // // //   }

// // // // // //   if (!session) return <p>Redirecting...</p>

// // // // // //   /* ───────────────────────── UI ──────────────────────────────── */
// // // // // //   return (
// // // // // //     <>
// // // // // //       <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="beforeInteractive"/>
// // // // // //       <div className="grid grid-cols-1 md:grid-cols-5 gap-6 p-6">
// // // // // //         {/* sidebar steps */}
// // // // // //         <div className="md:col-span-1">
// // // // // //           <SectionSidebar
// // // // // //             currentStep={activeSection}
// // // // // //             completedSteps={completedSections}
// // // // // //             onNavigate={setActiveSection}
// // // // // //             isStepDisabled={step=>
// // // // // //               (step>0 && !completedSections.includes(step-1)) ||
// // // // // //               (step>=4 && missingTravelers.length>0)}
// // // // // //           />
// // // // // //         </div>

// // // // // //         {/* middle content */}
// // // // // //         <div className="md:col-span-3 space-y-4">
// // // // // //           {missingTravelers.length>0 && activeSection>=4 && (
// // // // // //             <div className="p-4 mb-4 bg-red-100 text-red-700 rounded">
// // // // // //               Please fill details for traveller{s(missingTravelers)}:
// // // // // //               {missingTravelers.map(i=>` #${i}`).join(', ')}
// // // // // //             </div>
// // // // // //           )}

// // // // // //           {activeSection<4 ? (
// // // // // //             <>
// // // // // //               <ProgressBar current={currentTraveler} total={travelerCount}/>
// // // // // //               <TravelerTabs
// // // // // //                 travelerCount={travelerCount}
// // // // // //                 travelerData={formData}
// // // // // //                 updateTraveler={updateTraveler}
// // // // // //                 currentTraveler={currentTraveler}
// // // // // //                 setCurrentTraveler={setCurrentTraveler}
// // // // // //               />
// // // // // //               <SectionCard
// // // // // //                 sectionIndex={activeSection}
// // // // // //                 onNext={handleNext}
// // // // // //                 onBack={handleBack}
// // // // // //                 onComplete={markComplete}
// // // // // //                 traveler={formData[currentTraveler]}
// // // // // //                 setTravelerData={(d)=>updateTraveler(currentTraveler,d)}
// // // // // //                 travelerIndex={currentTraveler}
// // // // // //                 totalTravelers={travelerCount}
// // // // // //                 openPayment={openPayment}
// // // // // //               />
// // // // // //             </>
// // // // // //           ) : activeSection<6 ? (
// // // // // //             <SectionCard
// // // // // //               sectionIndex={activeSection}
// // // // // //               onNext={handleNext}
// // // // // //               onBack={handleBack}
// // // // // //               onComplete={markComplete}
// // // // // //               traveler={formData[0]}
// // // // // //               setTravelerData={()=>{}}
// // // // // //               travelerIndex={0}
// // // // // //               totalTravelers={travelerCount}
// // // // // //               openPayment={openPayment}
// // // // // //             />
// // // // // //           ) : (
// // // // // //             submitted && paymentInfo && (
// // // // // //               <PaymentSection
// // // // // //                 selectedPlan={selectedPlan}
// // // // // //                 travelerCount={travelerCount}
// // // // // //                 onPayment={openPayment}
// // // // // //               />
// // // // // //             )
// // // // // //           )}
// // // // // //         </div>

// // // // // //         {/* pricing sidebar */}
// // // // // //         <div className="md:col-span-1 sticky top-20">
// // // // // //           <PricingSidebar
// // // // // //             variant="apply"
// // // // // //             selectedPlan={selectedPlan}
// // // // // //             travelerCount={travelerCount}
// // // // // //             onCountChange={handleTravelerChange}
// // // // // //           />
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </>
// // // // // //   )
// // // // // // }

// // // // // // function s(arr:number[]){ return arr.length>1 ? 's' : '' }

// // // // // // /* dummy SDK loader – keeps TS happy */
// // // // // // declare global{
// // // // // //   interface Window{ Razorpay?:any }
// // // // // // }
// // // // // // async function loadAndOpenRazorpay(opts:any){
// // // // // //   if (typeof window==='undefined') return
// // // // // //   if (!window.Razorpay){
// // // // // //     await new Promise(res=>{
// // // // // //       const script=document.createElement('script')
// // // // // //       script.src='https://checkout.razorpay.com/v1/checkout.js'
// // // // // //       script.onload=()=>res(null); document.body.appendChild(script)
// // // // // //     })
// // // // // //   }
// // // // // //   new window.Razorpay({ key:'rzp_test_bBoKqWpCP41T6f', ...opts }).open()
// // // // // // }


// // // // // 'use client'

// // // // // import { useEffect, useState } from 'react'
// // // // // import { useParams, useRouter } from 'next/navigation'
// // // // // import Script from 'next/script'

// // // // // import { useAuth } from '@/context/AuthContext'
// // // // // import { TravelerTabs }      from '@/components/ui/traveler-tabs'
// // // // // import PricingSidebar        from '@/components/ui/pricing-sidebar'
// // // // // import { SectionSidebar }    from '@/components/ui/SectionSidebar'
// // // // // import SectionCard           from '@/components/ui/SectionCard'
// // // // // import { ProgressBar }       from '@/components/ui/progress-bar'
// // // // // import { PaymentSection }    from '@/components/form-sections/PaymentSection'

// // // // // import { PRICE_PLANS, FEES, PlanName } from '@/config/pricing'

// // // // // /* ────────────────────────────────────────────────────────── */
// // // // // export default function ApplyFormPage() {
// // // // //   /* route / auth ------------------------------------------------ */
// // // // //   const router      = useRouter()
// // // // //   const { country } = useParams<{ country:string }>()
// // // // //   const { session } = useAuth()

// // // // //   /* query-string defaults from /visa/[country] ------------------ */
// // // // //   const qs          = new URLSearchParams(
// // // // //     typeof window !== 'undefined' ? window.location.search : ''
// // // // //   )
// // // // //   const initialTrav = Number(qs.get('travellers')) || 1
// // // // //   const initialPlan = (qs.get('plan') as PlanName) || 'Docs on Call'

// // // // //   /* state ------------------------------------------------------- */
// // // // //   const [travelerCount, setTravelerCount] = useState(initialTrav)
// // // // //   const [selectedPlan , setSelectedPlan ] = useState<PlanName>(initialPlan)
// // // // //   const [formData, setFormData] = useState<any[]>(
// // // // //     Array(initialTrav).fill({ selectedPlan: initialPlan })
// // // // //   )

// // // // //   const [activeSection,    setActiveSection   ] = useState(0)
// // // // //   const [completedSections,setCompletedSections]= useState<number[]>([])
// // // // //   const [currentTraveler,  setCurrentTraveler ] = useState(0)

// // // // //   const [submitted, setSubmitted] = useState(false)
// // // // //   const [paymentInfo,setPaymentInfo]=useState<{
// // // // //     selectedPlan: PlanName; sessionId: string; country:string;
// // // // //     email:string; phone:string; pdfUrl?:string; pdfs?:string[]
// // // // //   }|null>(null)

// // // // //   const [missingTravellers,setMissingTravellers]=useState<number[]>([])

// // // // //   /* redirect if not logged-in ----------------------------------- */
// // // // //   useEffect(()=>{
// // // // //     if (!session) router.push(`/auth?next=/apply/${country}`)
// // // // //   },[session,router,country])

// // // // //   /* whenever plan saved in traveller-data changes → update state */
// // // // //   useEffect(()=>{
// // // // //     const p = formData[0]?.selectedPlan as PlanName | undefined
// // // // //     if (p && p !== selectedPlan) setSelectedPlan(p)
// // // // //   }, [formData, selectedPlan])

// // // // //   /* helpers ----------------------------------------------------- */
// // // // //   const updateTraveler = (idx:number,data:any)=>{
// // // // //     const copy=[...formData]; copy[idx]=data; setFormData(copy)
// // // // //     if (data.selectedPlan) setSelectedPlan(data.selectedPlan as PlanName)
// // // // //   }

// // // // //   const handleTravelerChange = (count:number)=>{
// // // // //     const diff=count-formData.length
// // // // //     if (diff>0) setFormData([...formData, ...Array(diff).fill({ selectedPlan })])
// // // // //     else        setFormData(formData.slice(0,count))
// // // // //     setTravelerCount(count)
// // // // //   }

// // // // //   const markComplete = (i:number)=>{
// // // // //     setCompletedSections(prev=>[...new Set([...prev,i])])
// // // // //   }

// // // // //   /* next/back navigation --------------------------------------- */
// // // // //   const handleNext = async()=>{
// // // // //     if (activeSection < 4){ setActiveSection(s=>s+1); return }

// // // // //     const incomplete=formData
// // // // //       .map((t,i)=>({i,filled:Object.keys(t).length>0}))
// // // // //       .filter(x=>!x.filled).map(x=>x.i+1)

// // // // //     if (incomplete.length){ setMissingTravellers(incomplete); return }
// // // // //     setMissingTravellers([])

// // // // //     if (activeSection === 4 && !submitted){
// // // // //       await submitToBackend(); setActiveSection(5)
// // // // //     } else if (activeSection < 6){
// // // // //       setActiveSection(s=>s+1)
// // // // //     }
// // // // //   }
// // // // //   const handleBack = ()=>{ if (activeSection>0) setActiveSection(s=>s-1) }

// // // // //   /* backend submit --------------------------------------------- */
// // // // //   const submitToBackend = async()=>{
// // // // //     if (submitted) return

// // // // //     const payload={
// // // // //       travelers: formData,
// // // // //       selectedPlan,
// // // // //       appointmentDate: formData[0]?.appointmentDate,
// // // // //       appointmentTime: formData[0]?.appointmentTime,
// // // // //       appointmentAddress: formData[0]?.appointmentAddress,
// // // // //       appointmentPincode: formData[0]?.appointmentPincode,
// // // // //       appointmentContact: formData[0]?.appointmentContact,
// // // // //       email : formData[0]?.email,
// // // // //       phone : formData[0]?.phone,
// // // // //       country
// // // // //     }

// // // // //     const res = await fetch('/api/submit-form',{
// // // // //       method:'POST',
// // // // //       headers:{'Content-Type':'application/json'},
// // // // //       body:JSON.stringify(payload)
// // // // //     })
// // // // //     const r = await res.json()
// // // // //     if (r.success && r.sessionId){
// // // // //       setSubmitted(true)
// // // // //       setPaymentInfo({...payload, sessionId:r.sessionId, pdfUrl:r.pdfUrl, pdfs:r.pdfs??[]})
// // // // //     } else { alert(r.error || 'Submission failed') }
// // // // //   }

// // // // //   /* payment ----------------------------------------------------- */
// // // // //   async function openPayment(){
// // // // //     if (!paymentInfo) return
// // // // //     const { sessionId,email,phone } = paymentInfo
// // // // //     const amount =
// // // // //       PRICE_PLANS[selectedPlan]*travelerCount +
// // // // //       FEES.appointment*travelerCount + FEES.service

// // // // //     await loadAndOpenRazorpay({
// // // // //       amount,email,contact:phone,sessionId,
// // // // //       description:`${selectedPlan} plan for ${travelerCount} travellers`
// // // // //     })
// // // // //   }

// // // // //   /* UI ---------------------------------------------------------- */
// // // // //   if (!session) return <p>Redirecting…</p>

// // // // //   return (
// // // // //     <>
// // // // //       <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="beforeInteractive"/>

// // // // //       <div className="grid grid-cols-1 md:grid-cols-5 gap-6 p-6">
// // // // //         {/* step list */}
// // // // //         <div className="md:col-span-1">
// // // // //           <SectionSidebar
// // // // //             currentStep={activeSection}
// // // // //             completedSteps={completedSections}
// // // // //             onNavigate={setActiveSection}
// // // // //             isStepDisabled={step=>
// // // // //               (step>0 && !completedSections.includes(step-1)) ||
// // // // //               (step>=4 && missingTravellers.length>0)}
// // // // //           />
// // // // //         </div>

// // // // //         {/* wizard body */}
// // // // //         <div className="md:col-span-3 space-y-4">

// // // // //           {missingTravellers.length>0 && activeSection>=4 && (
// // // // //             <div className="p-4 mb-4 bg-red-100 text-red-700 rounded">
// // // // //               Please fill details for traveller{missingTravellers.length>1?'s':''}:
// // // // //               {missingTravellers.map(i=>` #${i}`).join(', ')}
// // // // //             </div>
// // // // //           )}

// // // // //           {activeSection<4 ? (
// // // // //             <>
// // // // //               <ProgressBar current={currentTraveler} total={travelerCount}/>
// // // // //               <TravelerTabs
// // // // //                 travelerCount={travelerCount}
// // // // //                 travelerData={formData}
// // // // //                 updateTraveler={updateTraveler}
// // // // //                 currentTraveler={currentTraveler}
// // // // //                 setCurrentTraveler={setCurrentTraveler}
// // // // //               />
// // // // //               <SectionCard
// // // // //                 sectionIndex={activeSection}
// // // // //                 onNext={handleNext}
// // // // //                 onBack={handleBack}
// // // // //                 onComplete={markComplete}
// // // // //                 traveler={formData[currentTraveler]}
// // // // //                 setTravelerData={d=>updateTraveler(currentTraveler,d)}
// // // // //                 travelerIndex={currentTraveler}
// // // // //                 totalTravelers={travelerCount}
// // // // //                 openPayment={openPayment}
// // // // //               />
// // // // //             </>
// // // // //           ) : activeSection<6 ? (
// // // // //             <SectionCard
// // // // //               sectionIndex={activeSection}
// // // // //               onNext={handleNext}
// // // // //               onBack={handleBack}
// // // // //               onComplete={markComplete}
// // // // //               traveler={formData[0]}
// // // // //               setTravelerData={(d) => updateTraveler(0, d)}
// // // // //               travelerIndex={0}
// // // // //               totalTravelers={travelerCount}
// // // // //               openPayment={openPayment}
// // // // //             />
// // // // //           ) : (
// // // // //             submitted && paymentInfo && (
// // // // //               <PaymentSection
// // // // //                 selectedPlan={selectedPlan}
// // // // //                 travelerCount={travelerCount}
// // // // //                 onPayment={openPayment}
// // // // //               />
// // // // //             )
// // // // //           )}
// // // // //         </div>

// // // // //         {/* pricing side bar */}
// // // // //         <div className="md:col-span-1 sticky top-20">
// // // // //           <PricingSidebar
// // // // //             variant="apply"
// // // // //             selectedPlan={selectedPlan}
// // // // //             travelerCount={travelerCount}
// // // // //             onCountChange={handleTravelerChange}
// // // // //           />
// // // // //         </div>
// // // // //       </div>
// // // // //     </>
// // // // //   )
// // // // // }

// // // // // /* util plural */
// // // // // function s(arr:number[]){ return arr.length>1?'s':'' }

// // // // // /* razorpay loader */
// // // // // declare global{ interface Window{ Razorpay?:any } }
// // // // // async function loadAndOpenRazorpay(opts:any){
// // // // //   if (typeof window==='undefined') return
// // // // //   if (!window.Razorpay){
// // // // //     await new Promise(res=>{
// // // // //       const sc=document.createElement('script')
// // // // //       sc.src='https://checkout.razorpay.com/v1/checkout.js'
// // // // //       sc.onload=()=>res(null); document.body.appendChild(sc)
// // // // //     })
// // // // //   }
// // // // //   new window.Razorpay({ key:'rzp_test_bBoKqWpCP41T6f', ...opts }).open()
// // // // // }


// // // // 'use client'

// // // // import { useEffect, useState } from 'react'
// // // // import { useParams, useRouter } from 'next/navigation'
// // // // import Script from 'next/script'

// // // // import { useAuth } from '@/context/AuthContext'
// // // // import PricingSidebar         from '@/components/ui/pricing-sidebar'
// // // // import { TravelerTabs }       from '@/components/ui/traveler-tabs'
// // // // import { SectionSidebar }     from '@/components/ui/SectionSidebar'
// // // // import SectionCard            from '@/components/ui/SectionCard'
// // // // import { ProgressBar }        from '@/components/ui/progress-bar'
// // // // import { PaymentSection }     from '@/components/form-sections/PaymentSection'

// // // // import { PRICE_PLANS, FEES, PlanName } from '@/config/pricing'

// // // // /* ────────────────────────────────────────────────────────── */
// // // // export default function ApplyFormPage() {
// // // //   const router      = useRouter()
// // // //   const { country } = useParams<{ country: string }>()
// // // //   const { session } = useAuth()

// // // //   /* defaults passed from /visa/[country] ------------------------ */
// // // //   const qs          = new URLSearchParams(
// // // //     typeof window !== 'undefined' ? window.location.search : ''
// // // //   )
// // // //   const initialTrav = Number(qs.get('travellers')) || 1
// // // //   const initialPlan = (qs.get('plan') as PlanName) || 'Docs on Call'

// // // //   /* state ------------------------------------------------------- */
// // // //   const [travelerCount, setTravelerCount] = useState(initialTrav)
// // // //   const [selectedPlan , setSelectedPlan ] = useState<PlanName>(initialPlan)
// // // //   const [formData, setFormData] = useState<any[]>(
// // // //     Array(initialTrav).fill({ selectedPlan: initialPlan })
// // // //   )

// // // //   const [activeSection   , setActiveSection   ] = useState(0)
// // // //   const [completedSteps  , setCompletedSteps  ] = useState<number[]>([])
// // // //   const [currentTraveller, setCurrentTraveller] = useState(0)

// // // //   const [submitted , setSubmitted ] = useState(false)
// // // //   const [paymentInfo, setPaymentInfo] = useState<{
// // // //     selectedPlan:PlanName; sessionId:string; country:string;
// // // //     email:string; phone:string; pdfUrl?:string; pdfs?:string[]
// // // //   }|null>(null)

// // // //   const [missingTravs, setMissingTravs] = useState<number[]>([])

// // // //   /* auth -------------------------------------------------------- */
// // // //   useEffect(()=>{
// // // //     if (!session) router.push(`/auth?next=/apply/${country}`)
// // // //   },[session,router,country])

// // // //   /* keep sidebar plan in-sync with formData[0] ------------------ */
// // // //   useEffect(()=>{
// // // //     const p = formData[0]?.selectedPlan as PlanName | undefined
// // // //     if (p && p !== selectedPlan) setSelectedPlan(p)
// // // //   }, [formData, selectedPlan])

// // // //   /* helpers ----------------------------------------------------- */
// // // //   const updateTraveller = (idx:number,d:any)=>{
// // // //     const copy=[...formData]; copy[idx]=d; setFormData(copy)
// // // //     if (d.selectedPlan) setSelectedPlan(d.selectedPlan as PlanName)
// // // //   }

// // // //   const handleTravellerChange = (count:number)=>{
// // // //     const delta = count - formData.length
// // // //     if (delta>0) setFormData([...formData, ...Array(delta).fill({ selectedPlan })])
// // // //     else         setFormData(formData.slice(0,count))

// // // //     setTravelerCount(count)
// // // //     /* keep current tab in range */
// // // //     if (currentTraveller >= count) setCurrentTraveller(count-1)
// // // //   }

// // // //   const markComplete = (i:number)=>{
// // // //     setCompletedSteps(p=>[...new Set([...p,i])])
// // // //   }

// // // //   /* navigation -------------------------------------------------- */
// // // //   const handleNext = async()=>{
// // // //     if (activeSection < 4){ setActiveSection(s=>s+1); return }

// // // //     const incomplete = formData
// // // //       .map((t,i)=>({i,filled:Object.keys(t).length>0}))
// // // //       .filter(x=>!x.filled).map(x=>x.i+1)

// // // //     if (incomplete.length){
// // // //       setMissingTravs(incomplete)
// // // //       /* jump the user to first incomplete traveller tab */
// // // //       setCurrentTraveller(incomplete[0]-1)
// // // //       alert(`Please finish traveller${incomplete.length>1?'s':''}: ${incomplete.join(', ')}`)
// // // //       return
// // // //     }
// // // //     setMissingTravs([])

// // // //     if (activeSection === 4 && !submitted){
// // // //       await submitToBackend(); setActiveSection(5)
// // // //     } else if (activeSection < 6){
// // // //       setActiveSection(s=>s+1)
// // // //     }
// // // //   }
// // // //   const handleBack = ()=>{ if (activeSection>0) setActiveSection(s=>s-1) }

// // // //   /* backend ----------------------------------------------------- */
// // // //   const submitToBackend = async()=>{
// // // //     if (submitted) return
// // // //     const payload = {
// // // //       travelers : formData,
// // // //       selectedPlan,
// // // //       appointmentDate : formData[0]?.appointmentDate,
// // // //       appointmentTime : formData[0]?.appointmentTime,
// // // //       appointmentAddress  : formData[0]?.appointmentAddress,
// // // //       appointmentPincode  : formData[0]?.appointmentPincode,
// // // //       appointmentContact  : formData[0]?.appointmentContact,
// // // //       email : formData[0]?.email,  phone:formData[0]?.phone,
// // // //       country
// // // //     }
// // // //     const res = await fetch('/api/submit-form',{method:'POST',
// // // //       headers:{'Content-Type':'application/json'}, body:JSON.stringify(payload)})
// // // //     const r = await res.json()
// // // //     if (r.success && r.sessionId){
// // // //       setSubmitted(true)
// // // //       setPaymentInfo({...payload, sessionId:r.sessionId,
// // // //                       pdfUrl:r.pdfUrl, pdfs:r.pdfs??[]})
// // // //     } else { alert(r.error || 'Submission failed') }
// // // //   }

// // // //   /* payment ----------------------------------------------------- */
// // // //   async function openPayment(){
// // // //     if (!paymentInfo) return
// // // //     const { sessionId,email,phone } = paymentInfo

// // // //     const total =
// // // //       PRICE_PLANS[selectedPlan]*travelerCount +
// // // //       FEES.appointment * travelerCount +
// // // //       FEES.service

// // // //     await loadAndOpenRazorpay({
// // // //       amount: total*100,          /* paise */
// // // //       email, contact: phone,
// // // //       sessionId,
// // // //       description:`${selectedPlan} plan for ${travelerCount} traveller(s)`
// // // //     })
// // // //   }

// // // //   /* UI ---------------------------------------------------------- */
// // // //   if (!session) return <p>Redirecting…</p>

// // // //   return (
// // // //     <>
// // // //       <Script src="https://checkout.razorpay.com/v1/checkout.js"
// // // //               strategy="beforeInteractive"/>

// // // //       <div className="grid grid-cols-1 md:grid-cols-5 gap-6 p-6">
// // // //         <div className="md:col-span-1">
// // // //           <SectionSidebar
// // // //             currentStep={activeSection}
// // // //             completedSteps={completedSteps}
// // // //             onNavigate={setActiveSection}
// // // //             isStepDisabled={s=>
// // // //               (s>0 && !completedSteps.includes(s-1)) ||
// // // //               (s>=4 && missingTravs.length)}
// // // //           />
// // // //         </div>

// // // //         <div className="md:col-span-3 space-y-4">
// // // //           {activeSection < 4 ? (
// // // //             <>
// // // //               <ProgressBar current={currentTraveller} total={travelerCount}/>
// // // //               <TravelerTabs
// // // //                 travelerCount={travelerCount}
// // // //                 travelerData={formData}
// // // //                 updateTraveler={updateTraveller}
// // // //                 currentTraveler={currentTraveller}
// // // //                 setCurrentTraveler={setCurrentTraveller}
// // // //               />
// // // //               <SectionCard
// // // //                 sectionIndex={activeSection}
// // // //                 onNext={handleNext} onBack={handleBack}
// // // //                 onComplete={markComplete}
// // // //                 traveler={formData[currentTraveller]}
// // // //                 setTravelerData={d=>updateTraveller(currentTraveller,d)}
// // // //                 travelerIndex={currentTraveller}
// // // //                 totalTravelers={travelerCount}
// // // //                 openPayment={openPayment}
// // // //               />
// // // //             </>
// // // //           ) : activeSection < 6 ? (
// // // //             <SectionCard
// // // //               sectionIndex={activeSection}
// // // //               onNext={handleNext} onBack={handleBack}
// // // //               onComplete={markComplete}
// // // //               traveler={formData[0]}
// // // //               setTravelerData={d=>updateTraveller(0,d)}
// // // //               travelerIndex={0} totalTravelers={travelerCount}
// // // //               openPayment={openPayment}
// // // //             />
// // // //           ) : (
// // // //             submitted && paymentInfo && (
// // // //               <PaymentSection
// // // //                 selectedPlan={selectedPlan}
// // // //                 travelerCount={travelerCount}
// // // //                 onPayment={openPayment}
// // // //               />
// // // //             )
// // // //           )}
// // // //         </div>

// // // //         <div className="md:col-span-1 sticky top-20">
// // // //           <PricingSidebar
// // // //             variant="apply"
// // // //             selectedPlan={selectedPlan}
// // // //             travelerCount={travelerCount}
// // // //             onCountChange={handleTravellerChange}
// // // //           />
// // // //         </div>
// // // //       </div>
// // // //     </>
// // // //   )
// // // // }

// // // // /* Razorpay helper */
// // // // declare global{ interface Window{ Razorpay?:any } }
// // // // async function loadAndOpenRazorpay(opts:any){
// // // //   if (typeof window==='undefined') return
// // // //   if (!window.Razorpay){
// // // //     await new Promise(res=>{
// // // //       const sc=document.createElement('script')
// // // //       sc.src='https://checkout.razorpay.com/v1/checkout.js'
// // // //       sc.onload=()=>res(null); document.body.appendChild(sc)
// // // //     })
// // // //   }
// // // //   new window.Razorpay({ key:'rzp_test_bBoKqWpCP41T6f', ...opts }).open()
// // // // }


// // // 'use client'

// // // import { useEffect, useState } from 'react'
// // // import { useParams, useRouter } from 'next/navigation'
// // // import Script from 'next/script'

// // // import { useAuth }           from '@/context/AuthContext'
// // // import PricingSidebar        from '@/components/ui/pricing-sidebar'
// // // import { TravelerTabs }      from '@/components/ui/traveler-tabs'
// // // import { SectionSidebar }    from '@/components/ui/SectionSidebar'
// // // import SectionCard           from '@/components/ui/SectionCard'
// // // import { ProgressBar }       from '@/components/ui/progress-bar'
// // // import { PaymentSection }    from '@/components/form-sections/PaymentSection'

// // // import { PRICE_PLANS, FEES, PlanName } from '@/config/pricing'

// // // /* ────────────────────────────────────────────────────────── */
// // // export default function ApplyFormPage() {
// // //   const router      = useRouter()
// // //   const { country } = useParams<{ country: string }>()
// // //   const { session } = useAuth()

// // //   /* defaults coming from /visa/[country] ------------------------ */
// // //   const qs          = new URLSearchParams(
// // //     typeof window !== 'undefined' ? window.location.search : ''
// // //   )
// // //   const initialTrav = Number(qs.get('travellers')) || 1
// // //   const initialPlan = (qs.get('plan') as PlanName) || 'Docs on Call'

// // //   /* state ------------------------------------------------------- */
// // //   const [travelerCount, setTravelerCount] = useState(initialTrav)
// // //   const [selectedPlan , setSelectedPlan ] = useState<PlanName>(initialPlan)
// // //   const [formData, setFormData] = useState<any[]>(
// // //     Array(initialTrav).fill({ selectedPlan: initialPlan })
// // //   )

// // //   const [activeSection   , setActiveSection   ] = useState(0)  /* 0-6 */
// // //   const [completedSteps  , setCompletedSteps  ] = useState<number[]>([])
// // //   const [currentTraveller, setCurrentTraveller] = useState(0)

// // //   const [submitted , setSubmitted ] = useState(false)
// // //   const [paymentInfo, setPaymentInfo] = useState<{
// // //     selectedPlan:PlanName; sessionId:string; country:string;
// // //     email:string; phone:string; pdfUrl?:string; pdfs?:string[]
// // //   }|null>(null)

// // //   const [missingTravs, setMissingTravs] = useState<number[]>([])

// // //   /* auth guard -------------------------------------------------- */
// // //   useEffect(()=>{
// // //     if (!session) router.push(`/auth?next=/apply/${country}`)
// // //   },[session,router,country])

// // //   /* keep sidebar ↔ first traveller plan in sync ----------------- */
// // //   useEffect(()=>{
// // //     const p = formData[0]?.selectedPlan as PlanName | undefined
// // //     if (p && p !== selectedPlan) setSelectedPlan(p)
// // //   }, [formData, selectedPlan])

// // //   /* helpers ----------------------------------------------------- */
// // //   const updateTraveller = (idx:number,d:any)=>{
// // //     const copy=[...formData]; copy[idx]=d; setFormData(copy)
// // //     if (d.selectedPlan) setSelectedPlan(d.selectedPlan as PlanName)
// // //   }

// // //   const handleTravellerChange = (count:number)=>{
// // //     const delta = count - formData.length
// // //     if (delta>0) setFormData([...formData, ...Array(delta).fill({ selectedPlan })])
// // //     else         setFormData(formData.slice(0,count))

// // //     setTravelerCount(count)
// // //     if (currentTraveller >= count) setCurrentTraveller(count-1)   /* 🔑 clamp */
// // //   }

// // //   const handlePlanChange = (p:PlanName)=>{
// // //     setSelectedPlan(p)
// // //     /* reflect in the “master” traveller so price breakdown is accurate */
// // //     setFormData(fd=>{
// // //       const copy=[...fd]
// // //       copy[0] = { ...copy[0], selectedPlan:p }
// // //       return copy
// // //     })
// // //   }

// // //   const markComplete = (i:number)=>{
// // //     setCompletedSteps(p=>[...new Set([...p,i])])
// // //   }

// // //   /* navigation -------------------------------------------------- */
// // //   const handleNext = async()=>{
// // //     /* per-traveller steps 0-3 */
// // //     if (activeSection < 4){ setActiveSection(s=>s+1); return }

// // //     /* guard: every traveller must have data before step 4 */
// // //     const incomplete = formData
// // //       .map((t,i)=>({i,filled:Object.keys(t).length>0}))
// // //       .filter(x=>!x.filled).map(x=>x.i+1)

// // //     if (incomplete.length){
// // //       setMissingTravs(incomplete)
// // //       setCurrentTraveller(incomplete[0]-1)
// // //       alert(`Please finish traveller${incomplete.length>1?'s':''}: ${incomplete.join(', ')}`)
// // //       return
// // //     }
// // //     setMissingTravs([])

// // //     /* single form submit before payment */
// // //     if (activeSection === 4 && !submitted){
// // //       await submitToBackend(); setActiveSection(5)
// // //     } else if (activeSection < 6){
// // //       setActiveSection(s=>s+1)
// // //     }
// // //   }
// // //   const handleBack = ()=>{ if (activeSection>0) setActiveSection(s=>s-1) }

// // //   /* backend submit --------------------------------------------- */
// // //   const submitToBackend = async()=>{
// // //     if (submitted) return
// // //     const payload = {
// // //       travelers : formData,
// // //       selectedPlan,
// // //       appointmentDate : formData[0]?.appointmentDate,
// // //       appointmentTime : formData[0]?.appointmentTime,
// // //       appointmentAddress  : formData[0]?.appointmentAddress,
// // //       appointmentPincode  : formData[0]?.appointmentPincode,
// // //       appointmentContact  : formData[0]?.appointmentContact,
// // //       email : formData[0]?.email,  phone:formData[0]?.phone,
// // //       country
// // //     }
// // //     const res = await fetch('/api/submit-form',{
// // //       method:'POST',
// // //       headers:{'Content-Type':'application/json'},
// // //       body:JSON.stringify(payload)
// // //     })
// // //     const r = await res.json()
// // //     if (r.success && r.sessionId){
// // //       setSubmitted(true)
// // //       setPaymentInfo({...payload, sessionId:r.sessionId,
// // //                       pdfUrl:r.pdfUrl, pdfs:r.pdfs??[]})
// // //     } else { alert(r.error || 'Submission failed') }
// // //   }

// // //   /* payment ----------------------------------------------------- */
// // //   async function openPayment(){
// // //     if (!paymentInfo) return
// // //     const { sessionId,email,phone } = paymentInfo

// // //     const total =
// // //       PRICE_PLANS[selectedPlan]*travelerCount +
// // //       FEES.appointment * travelerCount +
// // //       FEES.service

// // //     await loadAndOpenRazorpay({
// // //       amount: total*100,          /* paise */
// // //       email, contact: phone,
// // //       sessionId,
// // //       description:`${selectedPlan} plan for ${travelerCount} traveller(s)`
// // //     })
// // //   }

// // //   /* UI ---------------------------------------------------------- */
// // //   if (!session) return <p className="py-20 text-center">Redirecting…</p>

// // //   return (
// // //     <>
// // //       <Script src="https://checkout.razorpay.com/v1/checkout.js"
// // //               strategy="beforeInteractive"/>

// // //       <div className="grid grid-cols-1 md:grid-cols-5 gap-6 p-6">
// // //         {/* step list */}
// // //         <div className="md:col-span-1">
// // //           <SectionSidebar
// // //             currentStep={activeSection}
// // //             completedSteps={completedSteps}
// // //             onNavigate={setActiveSection}
// // //             isStepDisabled={s=>
// // //               (s>0 && !completedSteps.includes(s-1)) ||
// // //               (s>=4 && missingTravs.length)}
// // //           />
// // //         </div>

// // //         {/* wizard body */}
// // //         <div className="md:col-span-3 space-y-4">
// // //           {activeSection < 4 ? (
// // //             <>
// // //               <ProgressBar current={currentTraveller} total={travelerCount}/>
// // //               <TravelerTabs
// // //                 travelerCount={travelerCount}
// // //                 travelerData={formData}
// // //                 updateTraveler={updateTraveller}
// // //                 currentTraveler={currentTraveller}
// // //                 setCurrentTraveler={setCurrentTraveller}
// // //               />
// // //               <SectionCard
// // //                 sectionIndex={activeSection}
// // //                 onNext={handleNext} onBack={handleBack}
// // //                 onComplete={markComplete}
// // //                 traveler={formData[currentTraveller]}
// // //                 setTravelerData={d=>updateTraveller(currentTraveller,d)}
// // //                 travelerIndex={currentTraveller}
// // //                 totalTravelers={travelerCount}
// // //                 openPayment={openPayment}
// // //               />
// // //             </>
// // //           ) : activeSection < 6 ? (
// // //             <SectionCard
// // //               sectionIndex={activeSection}
// // //               onNext={handleNext} onBack={handleBack}
// // //               onComplete={markComplete}
// // //               traveler={formData[0]}
// // //               setTravelerData={d=>updateTraveller(0,d)}
// // //               travelerIndex={0} totalTravelers={travelerCount}
// // //               openPayment={openPayment}
// // //             />
// // //           ) : (
// // //             submitted && paymentInfo && (
// // //               <PaymentSection
// // //                 selectedPlan={selectedPlan}
// // //                 travelerCount={travelerCount}
// // //                 onPayment={openPayment}
// // //               />
// // //             )
// // //           )}
// // //         </div>

// // //         {/* pricing sidebar */}
// // //         <div className="md:col-span-1 sticky top-20">
// // //           <PricingSidebar
// // //             variant="apply"
// // //             selectedPlan={selectedPlan}
// // //             travelerCount={travelerCount}
// // //             onCountChange={handleTravellerChange}
// // //             onPlanChange={handlePlanChange}
// // //           />
// // //         </div>
// // //       </div>
// // //     </>
// // //   )
// // // }

// // // /* Razorpay helper (with bullet-proof redirect) */
// // // declare global{ interface Window{ Razorpay?:any } }
// // // async function loadAndOpenRazorpay(opts:any){
// // //   if (typeof window==='undefined') return
// // //   if (!window.Razorpay){
// // //     await new Promise(res=>{
// // //       const sc=document.createElement('script')
// // //       sc.src='https://checkout.razorpay.com/v1/checkout.js'
// // //       sc.onload=()=>res(null)
// // //       document.body.appendChild(sc)
// // //     })
// // //   }
// // //   new window.Razorpay({
// // //     key:'rzp_test_bBoKqWpCP41T6f',
// // //     handler: async (response:any)=>{
// // //       /* mark-paid & hard-redirect so modal focus isn’t an issue */
// // //       await fetch('/api/mark-paid',{
// // //         method:'POST',
// // //         headers:{'Content-Type':'application/json'},
// // //         body:JSON.stringify({
// // //           paymentId : response.razorpay_payment_id,
// // //           sessionId : opts.sessionId
// // //         })
// // //       })
// // //       window.location.href = `/confirmation?id=${opts.sessionId}`
// // //     },
// // //     ...opts
// // //   }).open()
// // // }


// // 'use client'

// // import { useEffect, useState } from 'react'
// // import { useParams, useRouter } from 'next/navigation'
// // import Script from 'next/script'

// // import { useAuth } from '@/context/AuthContext'
// // import PricingSidebar         from '@/components/ui/pricing-sidebar'
// // import { TravelerTabs }       from '@/components/ui/traveler-tabs'
// // import { SectionSidebar }     from '@/components/ui/SectionSidebar'
// // import SectionCard            from '@/components/ui/SectionCard'
// // import { ProgressBar }        from '@/components/ui/progress-bar'
// // import { PaymentSection }     from '@/components/form-sections/PaymentSection'

// // import { PRICE_PLANS, FEES, PlanName } from '@/config/pricing'

// // export default function ApplyFormPage() {
// //   const router      = useRouter()
// //   const { country } = useParams<{ country: string }>()
// //   const { session } = useAuth()

// //   /* ——— query-string from visa page ——— */
// //   const qs          = new URLSearchParams(
// //     typeof window !== 'undefined' ? window.location.search : ''
// //   )
// //   const initialTrav = Number(qs.get('travellers')) || 1
// //   const initialPlan = (qs.get('plan') as PlanName) || 'Docs on Call'

// //   /* ——— state ——— */
// //   const [travelerCount, setTravelerCount] = useState(initialTrav)
// //   const [selectedPlan , setSelectedPlan ] = useState<PlanName>(initialPlan)

// //   const [formData, setFormData] = useState<any[]>(
// //     Array(initialTrav).fill({ selectedPlan: initialPlan })
// //   )

// //   /* NEW → track whether steps 0-3 (1-4 to the user) are done per traveller */
// //   const [travCompleted, setTravCompleted] = useState<boolean[]>(
// //     Array(initialTrav).fill(false)
// //   )

// //   const [activeSection   , setActiveSection   ] = useState(0) // 0-6
// //   const [completedSteps  , setCompletedSteps  ] = useState<number[]>([])
// //   const [currentTraveller, setCurrentTraveller] = useState(0)

// //   const [submitted , setSubmitted ] = useState(false)
// //   const [paymentInfo, setPaymentInfo] = useState<{
// //     selectedPlan:PlanName; sessionId:string; country:string;
// //     email:string; phone:string; pdfUrl?:string; pdfs?:string[]
// //   }|null>(null)

// //   /* list of 1-based traveller indices that still miss steps 1-4 */
// //   const [missingTravs, setMissingTravs] = useState<number[]>([])

// //   /* ——— auth gate ——— */
// //   useEffect(()=>{
// //     if (!session) router.push(`/auth?next=/apply/${country}`)
// //   },[session,router,country])

// //   /* keep sidebar plan in-sync with the first traveller */
// //   useEffect(()=>{
// //     const p = formData[0]?.selectedPlan as PlanName | undefined
// //     if (p && p !== selectedPlan) setSelectedPlan(p)
// //   }, [formData, selectedPlan])

// //   /* ——— helpers ——— */
// //   const updateTraveller = (idx:number,d:any)=>{
// //     const copy=[...formData]
// //     copy[idx]=d
// //     setFormData(copy)
// //     if (d.selectedPlan) setSelectedPlan(d.selectedPlan as PlanName)
// //   }

// //   const handleTravellerChange = (count:number)=>{
// //     const delta = count - formData.length
// //     if (delta>0){
// //       setFormData([...formData, ...Array(delta).fill({ selectedPlan })])
// //       setTravCompleted([...travCompleted, ...Array(delta).fill(false)])
// //     }else{
// //       setFormData(formData.slice(0,count))
// //       setTravCompleted(travCompleted.slice(0,count))
// //     }
// //     setTravelerCount(count)
// //     if (currentTraveller >= count) setCurrentTraveller(Math.max(0,count-1))
// //   }

// //   /* mark a whole section complete */
// //   const markComplete = (sectionIdx:number)=>{
// //     setCompletedSteps(p=>[...new Set([...p,sectionIdx])])

// //     /* when section 3 (Travel Info) is done we flag this traveller */
// //     if (sectionIdx === 3){
// //       const done=[...travCompleted]
// //       done[currentTraveller]=true
// //       setTravCompleted(done)
// //     }
// //   }

// //   /* ——— navigation guards ——— */
// //   const handleNext = async()=>{
// //     /* steps 0-3 just move on */
// //     if (activeSection < 4){ setActiveSection(s=>s+1); return }

// //     /* before entering step 4, verify every traveller is done */
// //     const incomplete = travCompleted
// //       .map((done,i)=>(!done ? i+1 : null))
// //       .filter(Boolean) as number[]

// //     if (incomplete.length){
// //       setMissingTravs(incomplete)
// //       setCurrentTraveller(incomplete[0]-1)            // jump to the first missing
// //       alert(`Please complete traveller${incomplete.length>1?'s':''}: ${incomplete.join(', ')}`)
// //       return
// //     }
// //     setMissingTravs([])

// //     /* step 4 submission only once */
// //     if (activeSection === 4 && !submitted){
// //       await submitToBackend()
// //       setActiveSection(5)
// //     } else if (activeSection < 6){
// //       setActiveSection(s=>s+1)
// //     }
// //   }

// //   const handleBack = ()=>{ if (activeSection>0) setActiveSection(s=>s-1) }

// //   /* ——— API submit ——— */
// //   const submitToBackend = async()=>{
// //     if (submitted) return
// //     const payload = {
// //       travelers : formData,
// //       selectedPlan,
// //       appointmentDate    : formData[0]?.appointmentDate,
// //       appointmentTime    : formData[0]?.appointmentTime,
// //       appointmentAddress : formData[0]?.appointmentAddress,
// //       appointmentPincode : formData[0]?.appointmentPincode,
// //       appointmentContact : formData[0]?.appointmentContact,
// //       email : formData[0]?.email,  phone:formData[0]?.phone,
// //       country
// //     }
// //     const res = await fetch('/api/submit-form',{
// //       method:'POST',
// //       headers:{'Content-Type':'application/json'},
// //       body:JSON.stringify(payload)
// //     })
// //     const r = await res.json()
// //     if (r.success && r.sessionId){
// //       setSubmitted(true)
// //       setPaymentInfo({...payload, sessionId:r.sessionId,
// //                       pdfUrl:r.pdfUrl, pdfs:r.pdfs??[]})
// //     } else { alert(r.error || 'Submission failed') }
// //   }

// //   /* ——— payment ——— */
// //   async function openPayment(){
// //     if (!paymentInfo) return
// //     const { sessionId,email,phone } = paymentInfo

// //     const total =
// //       PRICE_PLANS[selectedPlan]*travelerCount +
// //       FEES.appointment * travelerCount +
// //       FEES.service

// //     await loadAndOpenRazorpay({
// //       amount: total*100, /* paise */
// //       email, contact: phone,
// //       sessionId,
// //       description:`${selectedPlan} plan for ${travelerCount} traveller(s)`
// //     })
// //   }

// //   /* ——— render ——— */
// //   if (!session) return <p className="py-20 text-center">Redirecting…</p>

// //   return (
// //     <>
// //       <Script src="https://checkout.razorpay.com/v1/checkout.js"
// //               strategy="beforeInteractive"/>

// //       <div className="grid grid-cols-1 md:grid-cols-5 gap-6 p-6">

// //         {/* sidebar with step list */}
// //         <div className="md:col-span-1">
// //           <SectionSidebar
// //             currentStep={activeSection}
// //             completedSteps={completedSteps}
// //             onNavigate={setActiveSection}
// //             isStepDisabled={step=>
// //               (step>0 && !completedSteps.includes(step-1)) ||
// //               (step>=4 && missingTravs.length>0)
// //             }
// //           />
// //         </div>

// //         {/* wizard body */}
// //         <div className="md:col-span-3 space-y-4">

// //           {/* alert for missing travellers */}
// //           {missingTravs.length>0 && activeSection>=4 && (
// //             <div className="p-4 mb-4 bg-red-100 text-red-700 rounded">
// //               Please finish traveller{missingTravs.length>1?'s':''}: {missingTravs.join(', ')}
// //             </div>
// //           )}

// //           {/* steps 0-3 : per traveller */}
// //           {activeSection < 4 ? (
// //             <>
// //               <ProgressBar current={currentTraveller} total={travelerCount}/>
// //               <TravelerTabs
// //                 travelerCount={travelerCount}
// //                 travelerData={formData}
// //                 updateTraveler={updateTraveller}
// //                 currentTraveler={currentTraveller}
// //                 setCurrentTraveler={setCurrentTraveller}
// //               />

// //               <SectionCard
// //                 sectionIndex={activeSection}
// //                 onNext={handleNext} onBack={handleBack}
// //                 onComplete={markComplete}
// //                 traveler={formData[currentTraveller]}
// //                 setTravelerData={d=>updateTraveller(currentTraveller,d)}
// //                 travelerIndex={currentTraveller}
// //                 totalTravelers={travelerCount}
// //                 openPayment={openPayment}
// //               />
// //             </>
// //           ) : activeSection < 6 ? (
// //             /* steps 4-5 : single copy */
// //             <SectionCard
// //               sectionIndex={activeSection}
// //               onNext={handleNext} onBack={handleBack}
// //               onComplete={markComplete}
// //               traveler={formData[0]}
// //               setTravelerData={d=>updateTraveller(0,d)}
// //               travelerIndex={0}
// //               totalTravelers={travelerCount}
// //               openPayment={openPayment}
// //             />
// //           ) : (
// //             /* step 6 – payment */
// //             submitted && paymentInfo && (
// //               <PaymentSection
// //                 selectedPlan={selectedPlan}
// //                 travelerCount={travelerCount}
// //                 onPayment={openPayment}
// //               />
// //             )
// //           )}
// //         </div>

// //         {/* pricing sidebar */}
// //         <div className="md:col-span-1 sticky top-20">
// //           <PricingSidebar
// //             variant="apply"
// //             selectedPlan={selectedPlan}
// //             travelerCount={travelerCount}
// //             onCountChange={handleTravellerChange}
// //           />
// //         </div>
// //       </div>
// //     </>
// //   )
// // }

// // /* ——— Razorpay helper ——— */
// // declare global{ interface Window{ Razorpay?:any } }
// // async function loadAndOpenRazorpay(opts:any){
// //   if (typeof window==='undefined') return
// //   if (!window.Razorpay){
// //     await new Promise(res=>{
// //       const sc=document.createElement('script')
// //       sc.src='https://checkout.razorpay.com/v1/checkout.js'
// //       sc.onload=()=>res(null); document.body.appendChild(sc)
// //     })
// //   }
// //   new window.Razorpay({ key:'rzp_test_bBoKqWpCP41T6f', ...opts }).open()
// // }


// 'use client'

// import { useEffect, useState, useMemo } from 'react'
// import { useParams, useRouter } from 'next/navigation'
// import Script from 'next/script'

// import { useAuth } from '@/context/AuthContext'
// import PricingSidebar      from '@/components/ui/pricing-sidebar'
// import { TravelerTabs }    from '@/components/ui/traveler-tabs'
// import { SectionSidebar }  from '@/components/ui/SectionSidebar'
// import SectionCard         from '@/components/ui/SectionCard'
// import { ProgressBar }     from '@/components/ui/progress-bar'
// import { PaymentSection }  from '@/components/form-sections/PaymentSection'

// import { PRICE_PLANS, FEES, PlanName } from '@/config/pricing'

// export default function ApplyFormPage() {
//   const router      = useRouter()
//   const { country } = useParams<{ country: string }>()
//   const { session } = useAuth()

//   /* ─────────────────── preload from /visa page ─────────────────── */
//   const qs          = new URLSearchParams(
//     typeof window !== 'undefined' ? window.location.search : ''
//   )
//   const initialTrav = Number(qs.get('travellers')) || 1
//   const initialPlan = (qs.get('plan') as PlanName) || 'Docs on Call'

//   /* ────────────────────────── state ────────────────────────────── */
//   const [travelerCount, setTravelerCount] = useState(initialTrav)
//   const [selectedPlan , setSelectedPlan ] = useState<PlanName>(initialPlan)

//   /* raw form data per traveller */
//   const [formData, setFormData] = useState<any[]>(
//     Array(initialTrav).fill({ selectedPlan: initialPlan })
//   )

//   /* NEW → which sections (0-3) are done for each traveller */
//   const [stepsByTrav, setStepsByTrav] = useState<number[][]>(
//     Array.from({ length: initialTrav }, () => [])
//   )

//   /* NEW → global steps (4-5) that exist only once */
//   const [globalSteps, setGlobalSteps] = useState<number[]>([])

//   const [activeSection   , setActiveSection   ] = useState(0) // 0-6
//   const [currentTraveller, setCurrentTraveller] = useState(0) // tab index

//   const [submitted , setSubmitted ] = useState(false)
//   const [paymentInfo, setPaymentInfo] = useState<{
//     selectedPlan:PlanName; sessionId:string; country:string;
//     email:string; phone:string; pdfUrl?:string; pdfs?:string[];
//   }|null>(null)

//   const [missingTravs, setMissingTravs] = useState<number[]>([]) // 1-based list

//   /* ─────────── auth gate ─────────── */
//   useEffect(()=>{
//     if (!session) router.push(`/auth?next=/apply/${country}`)
//   },[session,router,country])

//   /* keep sidebar plan in-sync with first traveller */
//   useEffect(()=>{
//     const p = formData[0]?.selectedPlan as PlanName | undefined
//     if (p && p !== selectedPlan) setSelectedPlan(p)
//   }, [formData, selectedPlan])

//   /* ─────────── helpers ─────────── */
//   const updateTraveller = (idx:number, d:any) => {
//     setFormData(prev => {
//       const copy=[...prev]; copy[idx]=d; return copy
//     })
//     if (d.selectedPlan) setSelectedPlan(d.selectedPlan as PlanName)
//   }

//   const handleTravellerChange = (count:number) => {
//     const delta = count - travelerCount
//     if (delta>0){
//       setFormData      (prev=>[...prev, ...Array(delta).fill({ selectedPlan })])
//       setStepsByTrav   (prev=>[...prev, ...Array(delta).fill([])])
//     } else {
//       setFormData    (prev=>prev.slice(0,count))
//       setStepsByTrav (prev=>prev.slice(0,count))
//     }
//     setTravelerCount(count)
//     if (currentTraveller >= count) setCurrentTraveller(Math.max(0,count-1))
//   }

//   /* mark section complete */
//   const markComplete = (sectionIdx:number) => {
//     if (sectionIdx < 4){ // traveller-specific
//       setStepsByTrav(prev=>{
//         const copy=[...prev]
//         const s = new Set(copy[currentTraveller])
//         s.add(sectionIdx)
//         copy[currentTraveller] = [...s]
//         return copy
//       })
//     } else {             // global sections (4-5)
//       setGlobalSteps(prev => (
//         prev.includes(sectionIdx) ? prev : [...prev, sectionIdx]
//       ))
//     }
//   }

//   /* convenience: is every traveller finished with 0-3? */
//   const allTravellersDone = useMemo(
//     ()=> stepsByTrav.every(steps => [0,1,2,3].every(s => steps.includes(s))),
//     [stepsByTrav]
//   )

//   /* ─────────── navigation guard ─────────── */
//   const handleNext = async() => {
//     /* 0-2 simply advance */
//     if (activeSection < 3){
//       setActiveSection(s=>s+1); return
//     }

//     /* leaving section 3 → make sure ALL travellers have 0-3 */
//     if (activeSection === 3){
//       if (!allTravellersDone){
//         const incomplete = stepsByTrav
//           .map((s,i)=> [0,1,2,3].every(x=>s.includes(x)) ? null : i+1)
//           .filter(Boolean) as number[]
//         setMissingTravs(incomplete)
//         setCurrentTraveller(incomplete[0]-1)
//         alert(`Please finish traveller${incomplete.length>1?'s':''}: ${incomplete.join(', ')}`)
//         return
//       }
//       setMissingTravs([])
//       setActiveSection(4)                // safe to enter plan selection
//       return
//     }

//     /* section 4 → submit once */
//     if (activeSection === 4){
//       if (!submitted){
//         await submitToBackend()
//       }
//       setActiveSection(5)
//       return
//     }

//     /* 5 → 6 or done */
//     if (activeSection < 6){
//       setActiveSection(s=>s+1)
//     }
//   }

//   const handleBack = () => {
//     if (activeSection > 0) setActiveSection(s=>s-1)
//   }

//   /* ─────────── API submit ─────────── */
//   const submitToBackend = async() => {
//     if (submitted) return
//     const payload = {
//       travelers : formData,     selectedPlan,
//       appointmentDate    : formData[0]?.appointmentDate,
//       appointmentTime    : formData[0]?.appointmentTime,
//       appointmentAddress : formData[0]?.appointmentAddress,
//       appointmentPincode : formData[0]?.appointmentPincode,
//       appointmentContact : formData[0]?.appointmentContact,
//       email : formData[0]?.email, phone:formData[0]?.phone,
//       country
//     }
//     const res = await fetch('/api/submit-form',{
//       method:'POST',
//       headers:{'Content-Type':'application/json'},
//       body:JSON.stringify(payload)
//     })
//     const r = await res.json()
//     if (r.success && r.sessionId){
//       setSubmitted(true)
//       setPaymentInfo({...payload, sessionId:r.sessionId,
//                       pdfUrl:r.pdfUrl, pdfs:r.pdfs??[]})
//     } else { alert(r.error || 'Submission failed') }
//   }

//   /* ─────────── payment ─────────── */
//   async function openPayment(){
//     if (!paymentInfo) return
//     const { sessionId,email,phone } = paymentInfo

//     const total =
//       PRICE_PLANS[selectedPlan]*travelerCount +
//       FEES.appointment * travelerCount +
//       FEES.service

//     await loadAndOpenRazorpay({
//       amount: total*100,
//       email, contact: phone,
//       sessionId,
//       description:`${selectedPlan} plan for ${travelerCount} traveller(s)`
//     })
//   }

//   /* ─────────── sidebar props ─────────── */
//   const sidebarSteps = useMemo(
//     ()=> Array.from(new Set([
//       ...stepsByTrav[currentTraveller],   // traveller progress
//       ...globalSteps                      // and global progress
//     ])),
//     [stepsByTrav, currentTraveller, globalSteps]
//   )

//   const isStepDisabled = (step:number) => {
//     /* traveller steps (0-3) */
//     if (step < 4){
//       if (step === 0) return false
//       return !stepsByTrav[currentTraveller].includes(step-1)
//     }
//     /* global steps (4-5) */
//     if (!allTravellersDone) return true          // locked until all done
//     if (step === 4) return false                 // plan selection now open
//     return !globalSteps.includes(step-1)         // 5 depends on 4, etc.
//   }

//   /* ─────────── render ─────────── */
//   if (!session) return <p className="py-20 text-center">Redirecting…</p>

//   return (
//     <>
//       <Script src="https://checkout.razorpay.com/v1/checkout.js"
//               strategy="beforeInteractive"/>

//       <div className="grid grid-cols-1 md:grid-cols-5 gap-6 p-6">
//         {/* step list */}
//         <div className="md:col-span-1">
//           <SectionSidebar
//             currentStep={activeSection}
//             completedSteps={sidebarSteps}
//             onNavigate={setActiveSection}
//             isStepDisabled={isStepDisabled}
//           />
//         </div>

//         {/* wizard body */}
//         <div className="md:col-span-3 space-y-4">
//           {missingTravs.length>0 && activeSection>=4 && (
//             <div className="p-4 bg-red-100 text-red-700 rounded">
//               Please finish traveller{missingTravs.length>1?'s':''}: {missingTravs.join(', ')}
//             </div>
//           )}

//           {/* steps 0-3 per traveller */}
//           {activeSection < 4 ? (
//             <>
//               <ProgressBar current={currentTraveller} total={travelerCount} />
//               <TravelerTabs
//                 travelerCount={travelerCount}
//                 travelerData={formData}
//                 updateTraveler={updateTraveller}
//                 currentTraveler={currentTraveller}
//                 setCurrentTraveler={setCurrentTraveller}
//               />

//               <SectionCard
//                 sectionIndex={activeSection}
//                 onNext={handleNext}
//                 onBack={handleBack}
//                 onComplete={markComplete}
//                 traveler={formData[currentTraveller]}
//                 setTravelerData={d=>updateTraveller(currentTraveller,d)}
//                 travelerIndex={currentTraveller}
//                 totalTravelers={travelerCount}
//                 openPayment={openPayment}
//               />
//             </>
//           ) : activeSection < 6 ? (
//             /* steps 4-5 (once) */
//             <SectionCard
//               sectionIndex={activeSection}
//               onNext={handleNext}
//               onBack={handleBack}
//               onComplete={markComplete}
//               traveler={formData[0]}
//               setTravelerData={d=>updateTraveller(0,d)}
//               travelerIndex={0}
//               totalTravelers={travelerCount}
//               openPayment={openPayment}
//             />
//           ) : (
//             /* step 6 – payment */
//             submitted && paymentInfo && (
//               <PaymentSection
//                 selectedPlan={selectedPlan}
//                 travelerCount={travelerCount}
//                 onPayment={openPayment}
//               />
//             )
//           )}
//         </div>

//         {/* pricing sidebar */}
//         <div className="md:col-span-1 sticky top-20">
//           <PricingSidebar
//             variant="apply"
//             selectedPlan={selectedPlan}
//             travelerCount={travelerCount}
//             onCountChange={handleTravellerChange}
//           />
//         </div>
//       </div>
//     </>
//   )
// }

// /* ─────────── Razorpay helper ─────────── */
// declare global{ interface Window{ Razorpay?:any } }
// async function loadAndOpenRazorpay(opts:any){
//   if (typeof window==='undefined') return
//   if (!window.Razorpay){
//     await new Promise(res=>{
//       const sc=document.createElement('script')
//       sc.src='https://checkout.razorpay.com/v1/checkout.js'
//       sc.onload=()=>res(null); document.body.appendChild(sc)
//     })
//   }
//   new window.Razorpay({ key:'rzp_test_bBoKqWpCP41T6f', ...opts }).open()
// }


// 'use client'

// import { useEffect, useState, useMemo } from 'react'
// import { useParams, useRouter } from 'next/navigation'
// import Script from 'next/script'

// import { useAuth } from '@/context/AuthContext'
// import PricingSidebar      from '@/components/ui/pricing-sidebar'
// import { TravelerTabs }    from '@/components/ui/traveler-tabs'
// import { SectionSidebar }  from '@/components/ui/SectionSidebar'
// import SectionCard         from '@/components/ui/SectionCard'
// import { ProgressBar }     from '@/components/ui/progress-bar'
// import { PaymentSection }  from '@/components/form-sections/PaymentSection'

// import { PRICE_PLANS, FEES, PlanName } from '@/config/pricing'

// export default function ApplyFormPage() {
//   const router      = useRouter()
//   const { country } = useParams<{ country: string }>()
//   const { session } = useAuth()

//   /* ───────────────── preload values from /visa page ───────────────── */
//   const qs          = new URLSearchParams(
//     typeof window !== 'undefined' ? window.location.search : ''
//   )
//   const initialTrav = Number(qs.get('travellers')) || 1
//   const initialPlan = (qs.get('plan') as PlanName) || 'Docs on Call'

//   /* ─────────────────────────── state ──────────────────────────────── */
//   const [travelerCount, setTravelerCount] = useState(initialTrav)
//   const [selectedPlan , setSelectedPlan ] = useState<PlanName>(initialPlan)

//   /* raw form data per traveller */
//   const [formData, setFormData] = useState<any[]>(
//     Array(initialTrav).fill({ selectedPlan: initialPlan })
//   )

//   /* which traveller-scoped sections (0-3) each traveller has finished */
//   const [stepsByTrav, setStepsByTrav] = useState<number[][]>(
//     Array.from({ length: initialTrav }, () => [])
//   )

//   /* which global sections (4-5) are done (only one copy each) */
//   const [globalSteps, setGlobalSteps] = useState<number[]>([])

//   const [activeSection   , setActiveSection   ] = useState(0) // 0-6
//   const [currentTraveller, setCurrentTraveller] = useState(0) // tab index

//   const [submitted , setSubmitted ] = useState(false)
//   const [paymentInfo, setPaymentInfo] = useState<{
//     selectedPlan:PlanName; sessionId:string; country:string;
//     email:string; phone:string; pdfUrl?:string; pdfs?:string[];
//   }|null>(null)

//   const [missingTravs, setMissingTravs] = useState<number[]>([]) // 1-based list

//   /* ─────────────── auth gate ─────────────── */
//   useEffect(()=>{
//     if (!session) router.push(`/auth?next=/apply/${country}`)
//   },[session,router,country])

//   /* keep PricingSidebar plan in-sync with first traveller */
//   useEffect(()=>{
//     const p = formData[0]?.selectedPlan as PlanName | undefined
//     if (p && p !== selectedPlan) setSelectedPlan(p)
//   }, [formData, selectedPlan])

//   /* ─────────────── helpers ─────────────── */
//   const updateTraveller = (idx:number,d:any) => {
//     setFormData(prev=>{
//       const copy=[...prev]; copy[idx]=d; return copy
//     })
//     if (d.selectedPlan) setSelectedPlan(d.selectedPlan as PlanName)
//   }

//   const handleTravellerChange = (count:number) => {
//     const delta = count - travelerCount
//     if (delta>0){
//       setFormData      (prev=>[...prev, ...Array(delta).fill({ selectedPlan })])
//       setStepsByTrav   (prev=>[...prev, ...Array(delta).fill([])])
//     }else{
//       setFormData    (prev=>prev.slice(0,count))
//       setStepsByTrav (prev=>prev.slice(0,count))
//     }
//     setTravelerCount(count)
//     if (currentTraveller >= count) setCurrentTraveller(Math.max(0,count-1))
//   }

//   /* mark section complete */
//   const markComplete = (sectionIdx:number) => {
//     if (sectionIdx < 4){                      // traveller-specific
//       setStepsByTrav(prev=>{
//         const copy=[...prev]
//         const s=new Set(copy[currentTraveller]); s.add(sectionIdx)
//         copy[currentTraveller]=[...s]; return copy
//       })
//     }else{                                    // global (4-5)
//       setGlobalSteps(prev=>(
//         prev.includes(sectionIdx) ? prev : [...prev,sectionIdx]
//       ))
//     }
//   }

//   /* every traveller finished with 0-3? */
//   const allTravellersDone = useMemo(
//     ()=> stepsByTrav.every(st => [0,1,2,3].every(x=>st.includes(x))),
//     [stepsByTrav]
//   )

//   /* ─────────────── navigation ─────────────── */
//   const handleNext = async() => {
//     /* 0-2 simply advance */
//     if (activeSection < 3){ setActiveSection(s=>s+1); return }

//     /* leaving TravellerInfo (section-3) → require all travellers done */
//     if (activeSection === 3){
//       if (!allTravellersDone){
//         const incomplete = stepsByTrav
//           .map((s,i)=> [0,1,2,3].every(x=>s.includes(x)) ? null : i+1)
//           .filter(Boolean) as number[]
//         setMissingTravs(incomplete)
//         setCurrentTraveller(incomplete[0]-1)
//         alert(`Please finish traveller${incomplete.length>1?'s':''}: ${incomplete.join(', ')}`)
//         return
//       }
//       setMissingTravs([])
//       setActiveSection(4)          // open Plan Selection
//       return
//     }

//     /* Plan Selection (4) → submit once then to next */
//     if (activeSection === 4){
//       if (!submitted) await submitToBackend()
//       setActiveSection(5)
//       return
//     }

//     /* 5 → 6 or done */
//     if (activeSection < 6) setActiveSection(s=>s+1)
//   }

//   const handleBack = () => { if (activeSection>0) setActiveSection(s=>s-1) }

//   /* ─────────────── API submit ─────────────── */
//   const submitToBackend = async() => {
//     if (submitted) return
//     const payload = {
//       travelers       : formData,
//       selectedPlan,
//       appointmentDate    : formData[0]?.appointmentDate,
//       appointmentTime    : formData[0]?.appointmentTime,
//       appointmentAddress : formData[0]?.appointmentAddress,
//       appointmentPincode : formData[0]?.appointmentPincode,
//       appointmentContact : formData[0]?.appointmentContact,
//       email : formData[0]?.email, phone:formData[0]?.phone,
//       country
//     }
//     const res = await fetch('/api/submit-form',{
//       method:'POST',
//       headers:{'Content-Type':'application/json'},
//       body:JSON.stringify(payload)
//     })
//     const r = await res.json()
//     if (r.success && r.sessionId){
//       setSubmitted(true)
//       setPaymentInfo({...payload, sessionId:r.sessionId,
//                       pdfUrl:r.pdfUrl, pdfs:r.pdfs??[]})
//     }else{ alert(r.error || 'Submission failed') }
//   }

//   /* ─────────────── payment ─────────────── */
//   async function openPayment(){
//     if (!paymentInfo) return
//     const { sessionId,email,phone } = paymentInfo
//     const total =
//       PRICE_PLANS[selectedPlan]*travelerCount +
//       FEES.appointment*travelerCount +
//       FEES.service
//     await loadAndOpenRazorpay({
//       amount: total*100,
//       email, contact: phone,
//       sessionId,
//       description:`${selectedPlan} plan for ${travelerCount} traveller(s)`
//     })
//   }

//   /* ─────────────── sidebar helpers ─────────────── */
//   const sidebarSteps = useMemo(
//     ()=> Array.from(new Set([
//       ...stepsByTrav[currentTraveller],   // traveller progress
//       ...globalSteps                      // plus global progress
//     ])),
//     [stepsByTrav, currentTraveller, globalSteps]
//   )

//   const isStepDisabled = (step:number) => {
//     if (step < 4){
//       if (step === 0) return false
//       return !stepsByTrav[currentTraveller].includes(step-1)
//     }
//     if (!allTravellersDone) return true          // lock 4-5 until ready
//     if (step === 4) return false
//     return !globalSteps.includes(step-1)
//   }

//   /* ─────────────── render ─────────────── */
//   if (!session) return <p className="py-20 text-center">Redirecting…</p>

//   return (
//     <>
//       <Script src="https://checkout.razorpay.com/v1/checkout.js"
//               strategy="beforeInteractive"/>

//       <div className="grid grid-cols-1 md:grid-cols-5 gap-6 p-6">

//         {/* step list */}
//         <div className="md:col-span-1">
//           <SectionSidebar
//             currentStep={activeSection}
//             completedSteps={sidebarSteps}
//             onNavigate={setActiveSection}
//             isStepDisabled={isStepDisabled}
//           />
//         </div>

//         {/* wizard body */}
//         <div className="md:col-span-3 space-y-4">
//           {missingTravs.length>0 && activeSection>=4 && (
//             <div className="p-4 bg-red-100 text-red-700 rounded">
//               Please finish traveller{missingTravs.length>1?'s':''}: {missingTravs.join(', ')}
//             </div>
//           )}

//           {/* steps 0-3 : per traveller */}
//           {activeSection < 4 ? (
//             <>
//               <ProgressBar current={currentTraveller} total={travelerCount}/>
//               <TravelerTabs
//                 travelerCount={travelerCount}
//                 travelerData={formData}
//                 updateTraveler={updateTraveller}
//                 currentTraveler={currentTraveller}
//                 setCurrentTraveler={setCurrentTraveller}
//               />
//               <SectionCard
//                 sectionIndex={activeSection}
//                 onNext={handleNext}
//                 onBack={handleBack}
//                 onComplete={markComplete}
//                 traveler={formData[currentTraveller]}
//                 setTravelerData={d=>updateTraveller(currentTraveller,d)}
//                 travelerIndex={currentTraveller}
//                 totalTravelers={travelerCount}
//                 openPayment={openPayment}
//               />
//             </>
//           ) : activeSection < 6 ? (
//             /* steps 4-5 : single copy */
//             <SectionCard
//               sectionIndex={activeSection}
//               onNext={handleNext}
//               onBack={handleBack}
//               onComplete={markComplete}
//               traveler={formData[0]}
//               setTravelerData={d=>updateTraveller(0,d)}
//               travelerIndex={0}
//               totalTravelers={travelerCount}
//               openPayment={openPayment}
//             />
//           ) : (
//             /* step 6 – payment */
//             submitted && paymentInfo && (
//               <PaymentSection
//                 selectedPlan={selectedPlan}
//                 travelerCount={travelerCount}
//                 onPayment={openPayment}
//               />
//             )
//           )}
//         </div>

//         {/* pricing sidebar */}
//         <div className="md:col-span-1 sticky top-20">
//           <PricingSidebar
//             variant="apply"
//             selectedPlan={selectedPlan}
//             travelerCount={travelerCount}
//             onCountChange={handleTravellerChange}
//           />
//         </div>
//       </div>
//     </>
//   )
// }

// /* ───────────────── Razorpay helper with redirect ───────────────── */
// declare global { interface Window { Razorpay?: any } }

// async function loadAndOpenRazorpay(opts: {
//   amount: number
//   email: string
//   contact: string
//   sessionId: string
//   description: string
// }) {
//   if (typeof window === 'undefined') return

//   if (!window.Razorpay) {
//     await new Promise(res => {
//       const sc = document.createElement('script')
//       sc.src   = 'https://checkout.razorpay.com/v1/checkout.js'
//       sc.onload = () => res(null)
//       document.body.appendChild(sc)
//     })
//   }

//   new window.Razorpay({
//     key: 'rzp_test_bBoKqWpCP41T6f',
//     amount: opts.amount,
//     currency: 'INR',
//     description: opts.description,
//     prefill: { email: opts.email, contact: opts.contact },

//     /* 🔑 on success → mark paid then hard-redirect to /confirmation */
//     handler: async (resp: { razorpay_payment_id: string }) => {
//       await fetch('/api/mark-paid', {
//         method : 'POST',
//         headers: { 'Content-Type':'application/json' },
//         body   : JSON.stringify({
//           paymentId: resp.razorpay_payment_id,
//           sessionId: opts.sessionId
//         })
//       })
//       window.location.href = `/confirmation?id=${opts.sessionId}`
//     }
//   }).open()
// }
// src/app/apply/[country]/page.tsx better

// 'use client'

// import { useEffect, useState, useMemo } from 'react'
// import { useParams, useRouter, useSearchParams } from 'next/navigation'
// import Script from 'next/script'

// import { useAuth } from '@/context/AuthContext'
// import PricingSidebar      from '@/components/ui/pricing-sidebar'
// import { TravelerTabs }    from '@/components/ui/traveler-tabs'
// import { SectionSidebar }  from '@/components/ui/SectionSidebar'
// import SectionCard         from '@/components/ui/SectionCard'
// import { ProgressBar }     from '@/components/ui/progress-bar'
// import { PaymentSection }  from '@/components/form-sections/PaymentSection'
// import { toast } from 'sonner'

// import { PRICE_PLANS, FEES, PlanName } from '@/config/pricing'

// export default function ApplyFormPage() {
//   const router      = useRouter()
//   const { country } = useParams<{ country: string }>()
//   const { session } = useAuth()
//   const searchParams = useSearchParams()

//   const initialTrav = Number(searchParams.get('travellers')) || 1
//   const initialPlan = (searchParams.get('plan') as PlanName) || 'Docs on Call'

//   const [travelerCount, setTravelerCount] = useState(initialTrav)
//   const [selectedPlan , setSelectedPlan ] = useState<PlanName>(initialPlan)

//   const [formData, setFormData] = useState<any[]>(
//     Array(initialTrav).fill({ selectedPlan: initialPlan })
//   )

//   const [stepsByTrav, setStepsByTrav] = useState<number[][]>(
//     Array.from({ length: initialTrav }, () => [])
//   )

//   const [globalSteps, setGlobalSteps] = useState<number[]>([])

//   const [activeSection   , setActiveSection   ] = useState(0)
//   const [currentTraveller, setCurrentTraveller] = useState(0)

//   const [submitted , setSubmitted ] = useState(false)
//   const [paymentInfo, setPaymentInfo] = useState<{
//     selectedPlan:PlanName; sessionId:string; country:string;
//     email:string; phone:string; pdfUrl?:string; pdfs?:string[];
//   }|null>(null)

//   const [missingTravs, setMissingTravs] = useState<number[]>([])

//   useEffect(()=>{
//     if (!session) router.push(`/auth?next=/apply/${country}`)
//   },[session,router,country])

//   useEffect(()=>{
//     const p = formData[0]?.selectedPlan as PlanName | undefined
//     if (p && p !== selectedPlan) setSelectedPlan(p)
//   }, [formData, selectedPlan])

//   const updateTraveller = (idx:number,d:any) => {
//     setFormData(prev => {
//       const copy=[...prev]; copy[idx]=d; return copy
//     })
//     if (d.selectedPlan) setSelectedPlan(d.selectedPlan as PlanName)
//   }

//   const handleTravellerChange = (count:number) => {
//     const delta = count - travelerCount
//     if (delta>0){
//       setFormData      (prev=>[...prev, ...Array(delta).fill({ selectedPlan })])
//       setStepsByTrav   (prev=>[...prev, ...Array(delta).fill([])])
//     } else {
//       setFormData    (prev=>prev.slice(0,count))
//       setStepsByTrav (prev=>prev.slice(0,count))
//     }
//     setTravelerCount(count)
//     if (currentTraveller >= count) setCurrentTraveller(Math.max(0,count-1))
//   }

//   const markComplete = (sectionIdx:number) => {
//     if (sectionIdx < 4){
//       setStepsByTrav(prev=>{
//         const copy=[...prev]
//         const s = new Set(copy[currentTraveller])
//         s.add(sectionIdx)
//         copy[currentTraveller] = [...s]
//         return copy
//       })
//     } else {
//       setGlobalSteps(prev => (
//         prev.includes(sectionIdx) ? prev : [...prev, sectionIdx]
//       ))
//     }
//   }

//   const allTravellersDone = useMemo(
//     ()=> stepsByTrav.every(steps => [0,1,2,3].every(s => steps.includes(s))),
//     [stepsByTrav]
//   )

//   const handleNext = async() => {
//     if (activeSection < 3){
//       setActiveSection(s=>s+1); return
//     }

//     if (activeSection === 3){
//       const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'country', 'gender', 'maritalStatus', 'dob', 'passport', 'occupation', 'travelPurpose', 'arrival', 'departure'];
//       const incompleteTravelers = formData.map((trav, i) => {
//         const isComplete = requiredFields.every(field => trav[field] && trav[field].toString().trim() !== '');
//         return isComplete ? null : i + 1;
//       }).filter(Boolean) as number[];

//       if (incompleteTravelers.length > 0) {
//         setMissingTravs(incompleteTravelers);
//         setCurrentTraveller(incompleteTravelers[0] - 1);
//         toast.error(`Please complete all fields for traveler(s): ${incompleteTravelers.join(', ')}`);
//         return;
//       }

//       setMissingTravs([])
//       setActiveSection(4)
//       return
//     }

//     if (activeSection === 4){
//       if (!submitted) await submitToBackend()
//       setActiveSection(5)
//       return
//     }

//     if (activeSection < 6) setActiveSection(s=>s+1)
//   }

//   const handleBack = () => { if (activeSection>0) setActiveSection(s=>s-1) }

//   const submitToBackend = async() => {
//     if (submitted) return
//     const payload = {
//       travelers       : formData,
//       selectedPlan,
//       appointmentDate    : formData[0]?.appointmentDate,
//       appointmentTime    : formData[0]?.appointmentTime,
//       appointmentAddress : formData[0]?.appointmentAddress,
//       appointmentPincode : formData[0]?.appointmentPincode,
//       appointmentContact : formData[0]?.appointmentContact,
//       email : formData[0]?.email, phone:formData[0]?.phone,
//       country
//     }
//     const res = await fetch('/api/submit-form',{
//       method:'POST',
//       headers:{'Content-Type':'application/json'},
//       body:JSON.stringify(payload)
//     })
//     const r = await res.json()
//     if (r.success && r.sessionId){
//       setSubmitted(true)
//       setPaymentInfo({...payload, sessionId:r.sessionId,
//                       pdfUrl:r.pdfUrl, pdfs:r.pdfs??[]})
//     }else{ alert(r.error || 'Submission failed') }
//   }

//   async function openPayment(){
//     if (!paymentInfo) return
//     const { sessionId,email,phone } = paymentInfo
//     const total =
//       PRICE_PLANS[selectedPlan]*travelerCount +
//       FEES.appointment*travelerCount +
//       FEES.service
//     await loadAndOpenRazorpay({
//       amount: total*100,
//       email, contact: phone,
//       sessionId,
//       description:`${selectedPlan} plan for ${travelerCount} traveller(s)`
//     })
//   }

//   if (!session) return <p className="py-20 text-center">Redirecting…</p>

//   return (
//     <>
//       <Script src="https://checkout.razorpay.com/v1/checkout.js"
//               strategy="beforeInteractive"/>

//       <div className="grid grid-cols-1 md:grid-cols-5 gap-6 p-6">
//         <div className="md:col-span-1">
//           <SectionSidebar
//             currentStep={activeSection}
//             completedSteps={activeSection < 4 ? stepsByTrav[currentTraveller] : globalSteps}
//             onNavigate={setActiveSection}
//             isStepDisabled={(step) => {
//               if (step < 4) {
//                 return step > 0 && !stepsByTrav[currentTraveller].includes(step - 1);
//               }
//               return !allTravellersDone || (step > 4 && !globalSteps.includes(step - 1));
//             }}
//           />
//         </div>

//         <div className="md:col-span-3 space-y-4">
//           {missingTravs.length>0 && activeSection>=4 && (
//             <div className="p-4 bg-red-100 text-red-700 rounded">
//               Please finish traveller{missingTravs.length>1?'s':''}: {missingTravs.join(', ')}
//             </div>
//           )}

//           {activeSection < 4 ? (
//             <>
//               <ProgressBar current={currentTraveller} total={travelerCount}/>
//               <TravelerTabs
//                 travelerCount={travelerCount}
//                 travelerData={formData}
//                 updateTraveler={updateTraveller}
//                 currentTraveler={currentTraveller}
//                 setCurrentTraveler={setCurrentTraveller}
//               />
//               <SectionCard
//                 sectionIndex={activeSection}
//                 onNext={handleNext}
//                 onBack={handleBack}
//                 onComplete={markComplete}
//                 traveler={formData[currentTraveller]}
//                 setTravelerData={d=>updateTraveller(currentTraveller,d)}
//                 travelerIndex={currentTraveller}
//                 totalTravelers={travelerCount}
//                 openPayment={openPayment}
//               />
//             </>
//           ) : activeSection < 6 ? (
//             <SectionCard
//               sectionIndex={activeSection}
//               onNext={handleNext}
//               onBack={handleBack}
//               onComplete={markComplete}
//               traveler={formData[0]}
//               setTravelerData={d=>updateTraveller(0,d)}
//               travelerIndex={0}
//               totalTravelers={travelerCount}
//               openPayment={openPayment}
//             />
//           ) : (
//             submitted && paymentInfo && (
//               <PaymentSection
//                 selectedPlan={selectedPlan}
//                 travelerCount={travelerCount}
//                 onPayment={openPayment}
//               />
//             )
//           )}
//         </div>

//         <div className="md:col-span-1 sticky top-20">
//           <PricingSidebar
//             variant="apply"
//             selectedPlan={selectedPlan}
//             travelerCount={travelerCount}
//             onCountChange={handleTravellerChange}
//           />
//         </div>
//       </div>
//     </>
//   )
// }

// declare global{ interface Window{ Razorpay?:any } }
// async function loadAndOpenRazorpay(opts:any){
//   if (typeof window==='undefined') return
//   if (!window.Razorpay){
//     await new Promise(res=>{
//       const sc=document.createElement('script')
//       sc.src='https://checkout.razorpay.com/v1/checkout.js'
//       sc.onload=()=>res(null); document.body.appendChild(sc)
//     })
//   }
//   new window.Razorpay({ key:'rzp_test_bBoKqWpCP41T6f', ...opts }).open()
// }


// src/app/apply/[country]/page.tsx

// 'use client'

// import { useEffect, useState, useMemo } from 'react'
// import { useParams, useRouter, useSearchParams } from 'next/navigation'
// import Script from 'next/script'

// import { useAuth } from '@/context/AuthContext'
// import PricingSidebar      from '@/components/ui/pricing-sidebar'
// import { TravelerTabs }    from '@/components/ui/traveler-tabs'
// import { SectionSidebar }  from '@/components/ui/SectionSidebar'
// import SectionCard         from '@/components/ui/SectionCard'
// import { ProgressBar }     from '@/components/ui/progress-bar'
// import { PaymentSection }  from '@/components/form-sections/PaymentSection'
// import { toast } from 'sonner'

// import { PRICE_PLANS, FEES, PlanName } from '@/config/pricing'

// export default function ApplyFormPage() {
//   const router      = useRouter()
//   const { country } = useParams<{ country: string }>()
//   const { session } = useAuth()
//   const searchParams = useSearchParams()

//   const initialTrav = Number(searchParams.get('travellers')) || 1
//   const initialPlan = (searchParams.get('plan') as PlanName) || 'Docs on Call'

//   const [travelerCount, setTravelerCount] = useState(initialTrav)
//   const [selectedPlan , setSelectedPlan ] = useState<PlanName>(initialPlan)

//   const [formData, setFormData] = useState<any[]>(
//     Array(initialTrav).fill({ selectedPlan: initialPlan })
//   )

//   const [stepsByTrav, setStepsByTrav] = useState<number[][]>(
//     Array.from({ length: initialTrav }, () => [])
//   )

//   const [globalSteps, setGlobalSteps] = useState<number[]>([])

//   const [activeSection   , setActiveSection   ] = useState(0)
//   const [currentTraveller, setCurrentTraveller] = useState(0)

//   const [submitted , setSubmitted ] = useState(false)
//   const [paymentInfo, setPaymentInfo] = useState<{
//     selectedPlan:PlanName; sessionId:string; country:string;
//     email:string; phone:string; pdfUrl?:string; pdfs?:string[];
//   }|null>(null)

//   const [missingTravs, setMissingTravs] = useState<number[]>([])

//   useEffect(()=>{
//     if (!session) router.push(`/auth?next=/apply/${country}`)
//   },[session,router,country])

//   useEffect(()=>{
//     const p = formData[0]?.selectedPlan as PlanName | undefined
//     if (p && p !== selectedPlan) setSelectedPlan(p)
//   }, [formData, selectedPlan])
  
//   useEffect(() => {
//     setTravelerCount(initialTrav);
//     setSelectedPlan(initialPlan);
//     setFormData(Array(initialTrav).fill({ selectedPlan: initialPlan }));
//     setStepsByTrav(Array.from({ length: initialTrav }, () => []));
//   }, [initialTrav, initialPlan]);


//   const updateTraveller = (idx:number,d:any) => {
//     setFormData(prev => {
//       const copy=[...prev]; copy[idx]=d; return copy
//     })
//     if (d.selectedPlan) setSelectedPlan(d.selectedPlan as PlanName)
//   }

//   const handleTravellerChange = (count:number) => {
//     const delta = count - travelerCount
//     if (delta>0){
//       setFormData      (prev=>[...prev, ...Array(delta).fill({ selectedPlan })])
//       setStepsByTrav   (prev=>[...prev, ...Array(delta).fill([])])
//     } else {
//       setFormData    (prev=>prev.slice(0,count))
//       setStepsByTrav (prev=>prev.slice(0,count))
//     }
//     setTravelerCount(count)
//     if (currentTraveller >= count) setCurrentTraveller(Math.max(0,count-1))
//   }

//   const markComplete = (sectionIdx:number) => {
//     if (sectionIdx < 4){
//       setStepsByTrav(prev=>{
//         const copy=[...prev]
//         const s = new Set(copy[currentTraveller])
//         s.add(sectionIdx)
//         copy[currentTraveller] = [...s]
//         return copy
//       })
//     } else {
//       setGlobalSteps(prev => (
//         prev.includes(sectionIdx) ? prev : [...prev, sectionIdx]
//       ))
//     }
//   }

//   const allTravellersDone = useMemo(
//     ()=> stepsByTrav.every(steps => [0,1,2,3].every(s => steps.includes(s))),
//     [stepsByTrav]
//   )

//   const handleNext = async() => {
//     markComplete(activeSection);
    
//     if (activeSection < 3){
//       setActiveSection(s=>s+1); return
//     }

//     if (activeSection === 3) {
//       if (currentTraveller < travelerCount - 1) {
//           setCurrentTraveller(currentTraveller + 1);
//           setActiveSection(0);
//           toast.info(`Please fill in the details for Traveler ${currentTraveller + 2}`);
//           return;
//       }

//       const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'gender', 'maritalStatus', 'dob', 'passport', 'occupation', 'travelPurpose', 'arrival', 'departure'];
//       const incompleteTravelers = formData.map((trav, i) => {
//         const isComplete = requiredFields.every(field => trav[field] && trav[field].toString().trim() !== '');
//         return isComplete ? null : i + 1;
//       }).filter(Boolean) as number[];

//       if (incompleteTravelers.length > 0) {
//         setMissingTravs(incompleteTravelers);
//         setCurrentTraveller(incompleteTravelers[0] - 1);
//         toast.error(`Please complete all fields for traveler(s): ${incompleteTravelers.join(', ')}`);
//         return;
//       }

//       setMissingTravs([])
//       setActiveSection(4)
//       return
//     }

//     if (activeSection === 4){
//       if (!submitted) await submitToBackend()
//       setActiveSection(5)
//       return
//     }

//     if (activeSection < 6) setActiveSection(s=>s+1)
//   }

//   const handleBack = () => { if (activeSection>0) setActiveSection(s=>s-1) }

//   const submitToBackend = async() => {
//     if (submitted) return
//     const payload = {
//       travelers       : formData,
//       selectedPlan,
//       appointmentDate    : formData[0]?.appointmentDate,
//       appointmentTime    : formData[0]?.appointmentTime,
//       appointmentAddress : formData[0]?.appointmentAddress,
//       appointmentPincode : formData[0]?.appointmentPincode,
//       appointmentContact : formData[0]?.appointmentContact,
//       email : formData[0]?.email, phone:formData[0]?.phone,
//       country
//     }
//     const res = await fetch('/api/submit-form',{
//       method:'POST',
//       headers:{'Content-Type':'application/json'},
//       body:JSON.stringify(payload)
//     })
//     const r = await res.json()
//     if (r.success && r.sessionId){
//       setSubmitted(true)
//       setPaymentInfo({...payload, sessionId:r.sessionId,
//                       pdfUrl:r.pdfUrl, pdfs:r.pdfs??[]})
//     }else{ alert(r.error || 'Submission failed') }
//   }

//   async function openPayment(){
//     if (!paymentInfo) return
//     const { sessionId,email,phone } = paymentInfo
//     const total =
//       PRICE_PLANS[selectedPlan]*travelerCount +
//       FEES.appointment*travelerCount +
//       FEES.service
//     await loadAndOpenRazorpay({
//       amount: total*100,
//       email, contact: phone,
//       sessionId,
//       description:`${selectedPlan} plan for ${travelerCount} traveller(s)`
//     })
//   }

//   if (!session) return <p className="py-20 text-center">Redirecting…</p>

//   return (
//     <>
//       <Script src="https://checkout.razorpay.com/v1/checkout.js"
//               strategy="beforeInteractive"/>

//       <div className="grid grid-cols-1 md:grid-cols-5 gap-6 p-6 pb-24">
//         <div className="md:col-span-1">
//           <SectionSidebar
//             currentStep={activeSection}
//             completedSteps={activeSection < 4 ? stepsByTrav[currentTraveller] : globalSteps}
//             onNavigate={setActiveSection}
//             isStepDisabled={(step) => {
//               if (step < 4) {
//                 return step > 0 && !stepsByTrav[currentTraveller].includes(step - 1);
//               }
//               return !allTravellersDone || (step > 4 && !globalSteps.includes(step - 1));
//             }}
//           />
//         </div>

//         <div className="md:col-span-3 space-y-4">
//           {missingTravs.length>0 && activeSection>=4 && (
//             <div className="p-4 bg-red-100 text-red-700 rounded">
//               Please finish traveller{missingTravs.length>1?'s':''}: {missingTravs.join(', ')}
//             </div>
//           )}

//           {activeSection < 4 ? (
//             <>
//               <ProgressBar current={currentTraveller} total={travelerCount}/>
//               <TravelerTabs
//                 travelerCount={travelerCount}
//                 travelerData={formData}
//                 updateTraveler={updateTraveller}
//                 currentTraveler={currentTraveller}
//                 setCurrentTraveler={setCurrentTraveller}
//               />
//               <SectionCard
//                 sectionIndex={activeSection}
//                 onNext={handleNext}
//                 onBack={handleBack}
//                 onComplete={markComplete}
//                 traveler={formData[currentTraveller]}
//                 setTravelerData={d=>updateTraveller(currentTraveller,d)}
//                 travelerIndex={currentTraveller}
//                 totalTravelers={travelerCount}
//                 openPayment={openPayment}
//               />
//             </>
//           ) : activeSection < 6 ? (
//             <SectionCard
//               sectionIndex={activeSection}
//               onNext={handleNext}
//               onBack={handleBack}
//               onComplete={markComplete}
//               traveler={formData[0]}
//               setTravelerData={d=>updateTraveller(0,d)}
//               travelerIndex={0}
//               totalTravelers={travelerCount}
//               openPayment={openPayment}
//             />
//           ) : (
//             submitted && paymentInfo && (
//               <PaymentSection
//                 selectedPlan={selectedPlan}
//                 travelerCount={travelerCount}
//                 onPayment={openPayment}
//               />
//             )
//           )}
//         </div>

//         <div className="md:col-span-1 sticky top-20">
//           <PricingSidebar
//             variant="apply"
//             selectedPlan={selectedPlan}
//             travelerCount={travelerCount}
//             onCountChange={handleTravellerChange}
//           />
//         </div>
//       </div>
//     </>
//   )
// }

// declare global{ interface Window{ Razorpay?:any } }
// async function loadAndOpenRazorpay(opts:any){
//   if (typeof window==='undefined') return
//   if (!window.Razorpay){
//     await new Promise(res=>{
//       const sc=document.createElement('script')
//       sc.src='https://checkout.razorpay.com/v1/checkout.js'
//       sc.onload=()=>res(null); document.body.appendChild(sc)
//     })
//   }
//   new window.Razorpay({
//     key: 'rzp_test_bBoKqWpCP41T6f',
//     ...opts,
//     handler: async (response: { razorpay_payment_id: string }) => {
//       await fetch('/api/mark-paid', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           paymentId: response.razorpay_payment_id,
//           sessionId: opts.sessionId,
//         }),
//       });
//       window.location.href = `/confirmation?id=${opts.sessionId}`;
//     },
//   }).open();
// }


// 'use client'

// import { useEffect, useState, useMemo } from 'react'
// import { useParams, useRouter, useSearchParams } from 'next/navigation'
// import Script from 'next/script'

// import { useAuth } from '@/context/AuthContext'
// import PricingSidebar from '@/components/ui/pricing-sidebar'
// import { TravelerTabs } from '@/components/ui/traveler-tabs'
// import { SectionSidebar } from '@/components/ui/SectionSidebar'
// import SectionCard from '@/components/ui/SectionCard'
// import { ProgressBar } from '@/components/ui/progress-bar'
// import { PaymentSection } from '@/components/form-sections/PaymentSection'
// import { toast } from 'sonner'

// import { PRICE_PLANS, FEES, PlanName } from '@/config/pricing'

// export default function ApplyFormPage() {
//     const router = useRouter()
//     const { country } = useParams<{ country: string }>()
//     const { session } = useAuth()
//     const searchParams = useSearchParams()

//     const initialTrav = Number(searchParams.get('travellers')) || 1
//     const initialPlan = (searchParams.get('plan') as PlanName) || 'Docs on Call'

//     const [travelerCount, setTravelerCount] = useState(initialTrav)
//     const [selectedPlan, setSelectedPlan] = useState<PlanName>(initialPlan)

//     // Ensure the country from the URL is part of the initial state
//     const [formData, setFormData] = useState<any[]>(
//         Array(initialTrav).fill({ selectedPlan: initialPlan, country: country })
//     )

//     const [stepsByTrav, setStepsByTrav] = useState<number[][]>(
//         Array.from({ length: initialTrav }, () => [])
//     )

//     const [globalSteps, setGlobalSteps] = useState<number[]>([])

//     const [activeSection, setActiveSection] = useState(0)
//     const [currentTraveller, setCurrentTraveller] = useState(0)

//     const [submitted, setSubmitted] = useState(false)
//     const [paymentInfo, setPaymentInfo] = useState<{
//         selectedPlan: PlanName; sessionId: string; country: string;
//         email: string; phone: string; pdfUrl?: string; pdfs?: string[];
//     }|null>(null)

//     const [missingTravs, setMissingTravs] = useState<number[]>([])

//     useEffect(() => {
//         if (!session) router.push(`/auth?next=/apply/${country}`)
//     }, [session, router, country])

//     useEffect(() => {
//         const p = formData[0]?.selectedPlan as PlanName | undefined
//         if (p && p !== selectedPlan) setSelectedPlan(p)
//     }, [formData, selectedPlan])

//     useEffect(() => {
//         setTravelerCount(initialTrav);
//         setSelectedPlan(initialPlan);
//         // Also ensure new arrays have the country pre-filled
//         setFormData(Array(initialTrav).fill({ selectedPlan: initialPlan, country: country }));
//         setStepsByTrav(Array.from({ length: initialTrav }, () => []));
//     }, [initialTrav, initialPlan, country]);


//     const updateTraveller = (idx: number, d: any) => {
//         setFormData(prev => {
//             const copy = [...prev];
//             // Ensure the country slug from the URL is always present
//             copy[idx] = { ...d, country: country };
//             return copy
//         })
//         if (d.selectedPlan) setSelectedPlan(d.selectedPlan as PlanName)
//     }

//     const handleTravellerChange = (count: number) => {
//         const delta = count - travelerCount
//         if (delta > 0) {
//             // Add country to new traveler objects
//             setFormData(prev => [...prev, ...Array(delta).fill({ selectedPlan, country: country })])
//             setStepsByTrav(prev => [...prev, ...Array(delta).fill([])])
//         } else {
//             setFormData(prev => prev.slice(0, count))
//             setStepsByTrav(prev => prev.slice(0, count))
//         }
//         setTravelerCount(count)
//         if (currentTraveller >= count) setCurrentTraveller(Math.max(0, count - 1))
//     }

//     const markComplete = (sectionIdx: number) => {
//         if (sectionIdx < 4) {
//             setStepsByTrav(prev => {
//                 const copy = [...prev]
//                 const s = new Set(copy[currentTraveller])
//                 s.add(sectionIdx)
//                 copy[currentTraveller] = [...s]
//                 return copy
//             })
//         } else {
//             setGlobalSteps(prev => (
//                 prev.includes(sectionIdx) ? prev : [...prev, sectionIdx]
//             ))
//         }
//     }

//     const allTravellersDone = useMemo(
//         () => stepsByTrav.every(steps => [0, 1, 2, 3].every(s => steps.includes(s))),
//         [stepsByTrav]
//     )

//     const handleNext = async () => {
//         markComplete(activeSection);

//         if (activeSection < 3) {
//             setActiveSection(s => s + 1); return
//         }

//         if (activeSection === 3) {
//             if (currentTraveller < travelerCount - 1) {
//                 setCurrentTraveller(currentTraveller + 1);
//                 setActiveSection(0);
//                 toast.info(`Please fill in the details for Traveler ${currentTraveller + 2}`);
//                 return;
//             }

//             const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'country', 'gender', 'maritalStatus', 'dob', 'passport', 'occupation', 'travelPurpose', 'arrival', 'departure'];
//             const incompleteTravelers = formData.map((trav, i) => {
//                 const isComplete = requiredFields.every(field => trav[field] && trav[field].toString().trim() !== '');
//                 return isComplete ? null : i + 1;
//             }).filter(Boolean) as number[];

//             if (incompleteTravelers.length > 0) {
//                 setMissingTravs(incompleteTravelers);
//                 setCurrentTraveller(incompleteTravelers[0] - 1);
//                 toast.error(`Please complete all fields for traveler(s): ${incompleteTravelers.join(', ')}`);
//                 return;
//             }

//             setMissingTravs([])
//             setActiveSection(4)
//             return
//         }

//         if (activeSection === 4) {
//             if (!submitted) await submitToBackend()
//             setActiveSection(5)
//             return
//         }

//         if (activeSection < 6) setActiveSection(s => s + 1)
//     }

//     const handleBack = () => { if (activeSection > 0) setActiveSection(s => s - 1) }

//     const submitToBackend = async () => {
//         if (submitted) return
//         const payload = {
//             travelers: formData,
//             selectedPlan,
//             appointmentDate: formData[0]?.appointmentDate,
//             appointmentTime: formData[0]?.appointmentTime,
//             appointmentAddress: formData[0]?.appointmentAddress,
//             appointmentPincode: formData[0]?.appointmentPincode,
//             appointmentContact: formData[0]?.appointmentContact,
//             email: formData[0]?.email, phone: formData[0]?.phone,
//             country
//         }
//         const res = await fetch('/api/submit-form', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(payload)
//         })
//         const r = await res.json()
//         if (r.success && r.sessionId) {
//             setSubmitted(true)
//             setPaymentInfo({
//                 ...payload, sessionId: r.sessionId,
//                 pdfUrl: r.pdfUrl, pdfs: r.pdfs ?? []
//             })
//         } else { alert(r.error || 'Submission failed') }
//     }

//     async function openPayment() {
//         if (!paymentInfo) return
//         const { sessionId, email, phone } = paymentInfo
//         const total =
//             PRICE_PLANS[selectedPlan] * travelerCount +
//             FEES.appointment * travelerCount +
//             FEES.service
//         await loadAndOpenRazorpay({
//             amount: total * 100,
//             email, contact: phone,
//             sessionId,
//             description: `${selectedPlan} plan for ${travelerCount} traveller(s)`
//         })
//     }

//     if (!session) return <p className="py-20 text-center">Redirecting…</p>

//     return (
//         <>
//             <Script src="https://checkout.razorpay.com/v1/checkout.js"
//                 strategy="beforeInteractive" />

//             <div className="grid grid-cols-1 md:grid-cols-5 gap-6 p-6 pb-24">
//                 <div className="md:col-span-1">
//                     <SectionSidebar
//                         currentStep={activeSection}
//                         completedSteps={activeSection < 4 ? stepsByTrav[currentTraveller] : globalSteps}
//                         onNavigate={setActiveSection}
//                         isStepDisabled={(step) => {
//                             if (step < 4) {
//                                 return step > 0 && !stepsByTrav[currentTraveller].includes(step - 1);
//                             }
//                             return !allTravellersDone || (step > 4 && !globalSteps.includes(step - 1));
//                         }}
//                     />
//                 </div>

//                 <div className="md:col-span-3 space-y-4">
//                     {missingTravs.length > 0 && activeSection >= 4 && (
//                         <div className="p-4 bg-red-100 text-red-700 rounded">
//                             Please finish traveller{missingTravs.length > 1 ? 's' : ''}: {missingTravs.join(', ')}
//                         </div>
//                     )}

//                     {activeSection < 4 ? (
//                         <>
//                             <ProgressBar current={currentTraveller} total={travelerCount} />
//                             <TravelerTabs
//                                 travelerCount={travelerCount}
//                                 travelerData={formData}
//                                 updateTraveler={updateTraveller}
//                                 currentTraveler={currentTraveller}
//                                 setCurrentTraveler={setCurrentTraveller}
//                             />
//                             <SectionCard
//                                 sectionIndex={activeSection}
//                                 onNext={handleNext}
//                                 onBack={handleBack}
//                                 onComplete={markComplete}
//                                 traveler={formData[currentTraveller]}
//                                 setTravelerData={d => updateTraveller(currentTraveller, d)}
//                                 travelerIndex={currentTraveller}
//                                 totalTravelers={travelerCount}
//                                 openPayment={openPayment}
//                             />
//                         </>
//                     ) : activeSection < 6 ? (
//                         <SectionCard
//                             sectionIndex={activeSection}
//                             onNext={handleNext}
//                             onBack={handleBack}
//                             onComplete={markComplete}
//                             traveler={formData[0]}
//                             setTravelerData={d => updateTraveller(0, d)}
//                             travelerIndex={0}
//                             totalTravelers={travelerCount}
//                             openPayment={openPayment}
//                         />
//                     ) : (
//                         submitted && paymentInfo && (
//                             <PaymentSection
//                                 selectedPlan={selectedPlan}
//                                 travelerCount={travelerCount}
//                                 onPayment={openPayment}
//                             />
//                         )
//                     )}
//                 </div>

//                 <div className="md:col-span-1 sticky top-20">
//                     <PricingSidebar
//                         variant="apply"
//                         selectedPlan={selectedPlan}
//                         travelerCount={travelerCount}
//                         onCountChange={handleTravellerChange}
//                     />
//                 </div>
//             </div>
//         </>
//     )
// }

// declare global { interface Window { Razorpay?: any } }
// async function loadAndOpenRazorpay(opts: any) {
//     if (typeof window === 'undefined') return
//     if (!window.Razorpay) {
//         await new Promise(res => {
//             const sc = document.createElement('script')
//             sc.src = 'https://checkout.razorpay.com/v1/checkout.js'
//             sc.onload = () => res(null); document.body.appendChild(sc)
//         })
//     }
//     new window.Razorpay({
//         key: 'rzp_test_bBoKqWpCP41T6f',
//         ...opts,
//         handler: async (response: { razorpay_payment_id: string }) => {
//             await fetch('/api/mark-paid', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({
//                     paymentId: response.razorpay_payment_id,
//                     sessionId: opts.sessionId,
//                 }),
//             });
//             window.location.href = `/confirmation?id=${opts.sessionId}`;
//         },
//     }).open();
// }


'use client'

import { useEffect, useState, useMemo } from 'react'
import { useParams, useRouter, useSearchParams } from 'next/navigation'
import Script from 'next/script'
import { toast } from 'sonner'

import { useAuth } from '@/context/AuthContext'
import PricingSidebar from '@/components/ui/pricing-sidebar'
import { TravelerTabs } from '@/components/ui/traveler-tabs'
import { SectionSidebar } from '@/components/ui/SectionSidebar'
import SectionCard from '@/components/ui/SectionCard'
import { ProgressBar } from '@/components/ui/progress-bar'
import { PaymentSection } from '@/components/form-sections/PaymentSection'

import { PRICING, calcPrice, PlanName } from '@/config/pricing'

/* ────────────────────────────────────────────────────────── */
export default function ApplyFormPage() {
  const router        = useRouter()
  const { country }   = useParams<{ country: string }>()
  const { session }   = useAuth()
  const searchParams  = useSearchParams()

  const initialTrav   = Number(searchParams.get('travellers')) || 1
  const initialPlan   = (searchParams.get('plan') as PlanName) || 'Docs on Call'
  const promoCodeQS   = searchParams.get('promo') ?? null

  /* state ---------------------------------------------------- */
  const [travelerCount, setTravelerCount] = useState(initialTrav)
  const [selectedPlan , setSelectedPlan ] = useState<PlanName>(initialPlan)

  const [formData, setFormData] = useState<any[]>(
    Array(initialTrav).fill({ selectedPlan: initialPlan, country })
  )

  const [stepsByTrav, setStepsByTrav] = useState<number[][]>(
    Array.from({ length: initialTrav }, () => [])
  )
  const [globalSteps, setGlobalSteps] = useState<number[]>([])
  const [activeSection   , setActiveSection   ] = useState(0)
  const [currentTraveller, setCurrentTraveller] = useState(0)

  const [submitted , setSubmitted ] = useState(false)
  const [paymentInfo, setPaymentInfo] = useState<{
    selectedPlan: PlanName; sessionId: string; country: string;
    email: string; phone: string; pdfUrl?: string; pdfs?: string[];
  }|null>(null)

  const [missingTravs, setMissingTravs] = useState<number[]>([])

  /* auth redirect ------------------------------------------- */
  useEffect(() => {
    if (!session) router.push(`/auth?next=/apply/${country}`)
  }, [session, router, country])

  /* keep sidebar ↔ first traveller in sync ------------------ */
  useEffect(() => {
    const p = formData[0]?.selectedPlan as PlanName | undefined
    if (p && p !== selectedPlan) setSelectedPlan(p)
  }, [formData, selectedPlan])

  /* handle traveller counter change ------------------------- */
  const handleTravellerChange = (count: number) => {
    const delta = count - travelerCount
    if (delta > 0) {
      setFormData(prev => [
        ...prev,
        ...Array(delta).fill({ selectedPlan, country }),
      ])
      setStepsByTrav(prev => [...prev, ...Array(delta).fill([])])
    } else {
      setFormData(prev => prev.slice(0, count))
      setStepsByTrav(prev => prev.slice(0, count))
    }
    setTravelerCount(count)
    if (currentTraveller >= count) setCurrentTraveller(Math.max(0, count - 1))
  }

  /* per-traveller update ------------------------------------ */
  const updateTraveller = (idx: number, d: any) => {
    setFormData(prev => {
      const copy = [...prev]
      copy[idx] = { ...d, country }
      return copy
    })
    if (d.selectedPlan) setSelectedPlan(d.selectedPlan as PlanName)
  }

  /* completion helpers -------------------------------------- */
  const markComplete = (sectionIdx: number) => {
    if (sectionIdx < 4) {
      setStepsByTrav(prev => {
        const copy = [...prev]
        copy[currentTraveller] = [...new Set([...copy[currentTraveller], sectionIdx])]
        return copy
      })
    } else {
      setGlobalSteps(prev => (prev.includes(sectionIdx) ? prev : [...prev, sectionIdx]))
    }
  }

  const allTravellersDone = useMemo(
    () => stepsByTrav.every(s => [0, 1, 2, 3].every(x => s.includes(x))),
    [stepsByTrav]
  )

  /* next / back navigation ---------------------------------- */
  const handleNext = async () => {
    markComplete(activeSection)

    /* per-traveller sections (0-3) */
    if (activeSection < 3) { setActiveSection(s => s + 1); return }

    /* last per-traveller section finished → move to next traveller */
    if (activeSection === 3) {
      if (currentTraveller < travelerCount - 1) {
        setCurrentTraveller(currentTraveller + 1)
        setActiveSection(0)
        toast.info(`Please fill in details for traveller ${currentTraveller + 2}`)
        return
      }

      /* validate completeness (simple presence check) ---------- */
      const required = [
        'firstName','lastName','email','phone','country',
        'gender','maritalStatus','dob','passport',
        'occupation','travelPurpose','arrival','departure',
      ]
      const incomplete = formData
        .map((t,i)=> required.every(f=>t[f]) ? null : i+1)
        .filter(Boolean) as number[]

      if (incomplete.length) {
        setMissingTravs(incomplete)
        setCurrentTraveller(incomplete[0]-1)
        toast.error(`Please complete traveller${incomplete.length>1?'s':''}: ${incomplete.join(', ')}`)
        return
      }

      setMissingTravs([])
      setActiveSection(4)
      return
    }

    /* global “Plan & Fees” (4) → submit once ------------------ */
    if (activeSection === 4) {
      if (!submitted) await submitToBackend()
      setActiveSection(5)
      return
    }

    /* Appointment / Payment sections ------------------------- */
    if (activeSection < 6) setActiveSection(s => s + 1)
  }

  const handleBack = () => { if (activeSection > 0) setActiveSection(s => s - 1) }

  /* API submit ---------------------------------------------- */
  const submitToBackend = async () => {
    if (submitted) return
    const payload = {
      travelers : formData,
      selectedPlan,
      appointmentDate    : formData[0]?.appointmentDate,
      appointmentTime    : formData[0]?.appointmentTime,
      appointmentAddress : formData[0]?.appointmentAddress,
      appointmentPincode : formData[0]?.appointmentPincode,
      appointmentContact : formData[0]?.appointmentContact,
      email : formData[0]?.email,  phone: formData[0]?.phone,
      country,
      promoCode: promoCodeQS,
    }
    const res = await fetch('/api/submit-form', {
      method : 'POST',
      headers: { 'Content-Type':'application/json' },
      body   : JSON.stringify(payload),
    })
    const r = await res.json()
    if (r.success && r.sessionId) {
      setSubmitted(true)
      setPaymentInfo({ ...payload, sessionId: r.sessionId,
                       pdfUrl: r.pdfUrl, pdfs: r.pdfs ?? [] })
    } else {
      alert(r.error || 'Submission failed')
    }
  }

  /* open Razorpay checkout ---------------------------------- */
  async function openPayment() {
    if (!paymentInfo) return
    const { sessionId, email, phone } = paymentInfo

    const { total } = calcPrice({
      plan: selectedPlan,
      travellers: travelerCount,
      promoCode : promoCodeQS,
    })

    await loadAndOpenRazorpay({
      amount      : total * 100,          /* paise */
      email, contact: phone,
      sessionId,
      description : `${selectedPlan} plan for ${travelerCount} traveller(s)`,
    })
  }

  /* render --------------------------------------------------- */
  if (!session) return <p className="py-20 text-center">Redirecting…</p>

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="beforeInteractive"/>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 p-6 pb-24">
        {/* steps list */}
        <div className="md:col-span-1">
          <SectionSidebar
            currentStep={activeSection}
            completedSteps={activeSection < 4
              ? stepsByTrav[currentTraveller]
              : globalSteps}
            onNavigate={setActiveSection}
            isStepDisabled={step => {
              if (step < 4)
                return step > 0 && !stepsByTrav[currentTraveller].includes(step - 1)
              return !allTravellersDone || (step > 4 && !globalSteps.includes(step - 1))
            }}
          />
        </div>

        {/* wizard body */}
        <div className="md:col-span-3 space-y-4">
          {missingTravs.length > 0 && activeSection >= 4 && (
            <div className="p-4 bg-red-100 text-red-700 rounded">
              Please finish traveller{missingTravs.length>1?'s':''}: {missingTravs.join(', ')}
            </div>
          )}

          {activeSection < 4 ? (
            <>
              <ProgressBar current={currentTraveller} total={travelerCount} />
              <TravelerTabs
                travelerCount={travelerCount}
                travelerData={formData}
                updateTraveler={updateTraveller}
                currentTraveler={currentTraveller}
                setCurrentTraveler={setCurrentTraveller}
              />
              <SectionCard
                sectionIndex={activeSection}
                onNext={handleNext}
                onBack={handleBack}
                onComplete={markComplete}
                traveler={formData[currentTraveller]}
                setTravelerData={d => updateTraveller(currentTraveller, d)}
                travelerIndex={currentTraveller}
                totalTravelers={travelerCount}
                openPayment={openPayment}
              />
            </>
          ) : activeSection < 6 ? (
            <SectionCard
              sectionIndex={activeSection}
              onNext={handleNext}
              onBack={handleBack}
              onComplete={markComplete}
              traveler={formData[0]}
              setTravelerData={d => updateTraveller(0, d)}
              travelerIndex={0}
              totalTravelers={travelerCount}
              openPayment={openPayment}
            />
          ) : (
            submitted && paymentInfo && (
              <PaymentSection
                selectedPlan={selectedPlan}
                travelerCount={travelerCount}
                onPayment={openPayment}
                promoCode={promoCodeQS}
              />
            )
          )}
        </div>

        {/* sidebar price card */}
        <div className="md:col-span-1 sticky top-20">
          <PricingSidebar
            variant="apply"
            selectedPlan={selectedPlan}
            travelerCount={travelerCount}
            onCountChange={handleTravellerChange}
            promoCode={promoCodeQS}
          />
        </div>
      </div>
    </>
  )
}

/* Razorpay helper ------------------------------------------ */
declare global { interface Window { Razorpay?: any } }
async function loadAndOpenRazorpay(opts: any) {
  if (typeof window === 'undefined') return
  if (!window.Razorpay) {
    await new Promise(res => {
      const sc = document.createElement('script')
      sc.src = 'https://checkout.razorpay.com/v1/checkout.js'
      sc.onload = () => res(null)
      document.body.appendChild(sc)
    })
  }
  new window.Razorpay({
    key     : 'rzp_test_bBoKqWpCP41T6f',
    ...opts,
    handler : async (response: { razorpay_payment_id: string }) => {
      await fetch('/api/mark-paid', {
        method : 'POST',
        headers: { 'Content-Type':'application/json' },
        body   : JSON.stringify({
          paymentId: response.razorpay_payment_id,
          sessionId: opts.sessionId,
        }),
      })
      window.location.href = `/confirmation?id=${opts.sessionId}`
    },
  }).open()
}
