
// 'use client'

// import { useEffect, useState } from 'react'
// import { useAuth } from '@/context/AuthContext'
// import { useParams, useRouter } from 'next/navigation'
// import Script from 'next/script'
// import { TravelerTabs } from '@/components/ui/traveler-tabs'
// import { PricingSidebar } from '@/components/ui/pricing-sidebar'
// import { SectionSidebar } from '@/components/ui/SectionSidebar'
// import SectionCard from '@/components/ui/SectionCard'
// import { ProgressBar } from '@/components/ui/progress-bar'
// import { Button } from '@/components/ui/button' // make sure you import Button
// import { PaymentSection } from '@/components/form-sections/PaymentSection'

// export default function ApplyFormPage() {
//   const router = useRouter()
//   const params = useParams()
//   const country = (params?.country as string) || 'default'

//   const { session } = useAuth()
//   const [travelerCount, setTravelerCount] = useState(1)
//   const [formData, setFormData] = useState<any[]>([{}])
//   const [activeSection, setActiveSection] = useState(0)
//   const [completedSections, setCompletedSections] = useState<number[]>([])
//   const [currentTraveler, setCurrentTraveler] = useState(0)
//   const [submitted, setSubmitted] = useState(false)
//   const [paymentInfo, setPaymentInfo] = useState<any>(null)

//   useEffect(() => {
//     if (!session) {
//       router.push(`/auth?next=/apply/${country}`)
//     }
//   }, [session, router, country])

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

//   const handleNext = async () => {
//     if (activeSection < 5) {
//       setActiveSection(activeSection + 1)
//     } else if (activeSection === 5 && !submitted) {
//       await submitToBackend()
//       setActiveSection(activeSection + 1)
//     } else if (activeSection < 6) {
//       setActiveSection(activeSection + 1)
//     }
//   }

//   const handleBack = () => {
//     if (activeSection > 0 && activeSection <= 6) {
//       setActiveSection(activeSection - 1)
//     }
//   }

//   const markSectionComplete = (index: number) => {
//     setCompletedSections((prev) => [...new Set([...prev, index])])
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
//         country: formData[0]?.country ?? country,
//       }
  
//       const res = await fetch('/api/submit-form', {
//         method: 'POST',
//         body: JSON.stringify(payload),
//         headers: { 'Content-Type': 'application/json' },
//       })
  
//       const result = await res.json()
  
//       if (result.success && result.sessionId && (result.pdfUrl || result.pdfs)) {
//         setSubmitted(true)
//         setPaymentInfo({
//           selectedPlan: payload.selectedPlan,
//           sessionId: result.sessionId,
//           country: payload.country,
//           email: payload.email,
//           phone: payload.phone,
//           pdfUrl: result.pdfUrl,
//           pdfs: result.pdfs ?? [],
//         })
//       } else {
//         throw new Error(result.error || 'PDF or Session ID generation failed')
//       }
//     } catch (err: any) {
//       const message = err?.message || err?.toString() || 'Unknown error'
//       console.error('❌ Submission failed:', message)
//       alert('Submission failed: ' + message)
//     }
//   }
  

//   async function openPayment() {
//     if (!paymentInfo) return

//     const { selectedPlan, sessionId, country, email, phone, pdfUrl } = paymentInfo

//     const prices = {
//       "Docs on Call": 7500,
//       "Docs on Door": 9500,
//       "Visa at Door": 12500
//     }

//     const loadRazorpay = (): Promise<boolean> => {
//       return new Promise((resolve) => {
//         if (typeof window.Razorpay !== "undefined") {
//           resolve(true);
//           return;
//         }
//         const script = document.createElement("script");
//         script.src = "https://checkout.razorpay.com/v1/checkout.js";
//         script.onload = () => resolve(true);
//         script.onerror = () => resolve(false);
//         document.body.appendChild(script);
//       });
//     };

//     const res = await loadRazorpay();

//     if (!res) {
//       alert("Failed to load Razorpay SDK, please refresh the page.");
//       return;
//     }

//     const options = {
//       key: "rzp_test_bBoKqWpCP41T6f",
//       amount: prices[selectedPlan] * 100,
//       currency: "INR",
//       name: "Travaky",
//       description: `${selectedPlan} Plan for ${country}`,
//       prefill: {
//         email: email,
//         contact: phone,
//       },
//       handler: async function () {
//         await fetch("/api/mark-paid", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ paymentId: sessionId })
//         })

//         router.push(`/confirmation?id=${sessionId}`)
//       },
//       modal: {
//         ondismiss: function() {
//           alert("Payment cancelled. You can retry from dashboard.");
//         }
//       }
//     }

//     const rzp = new (window as any).Razorpay(options)
//     rzp.open()
//   }

//   const isStepDisabled = (step: number) => {
//     if (step === 6) {
//       return !completedSections.includes(5);
//     }
//     return step > 0 && !completedSections.includes(step - 1);
//   }

//   if (!session) return <p className="text-center py-20">Redirecting to login...</p>

//   return (
//     <>
//       <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="beforeInteractive" />

//       <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-7xl mx-auto p-6">
//         <div className="md:col-span-1">
//           <SectionSidebar
//             currentStep={activeSection}
//             completedSteps={completedSections}
//             onNavigate={setActiveSection}
//             isStepDisabled={isStepDisabled}
//           />
//         </div>

//         <div className="md:col-span-3 space-y-4">
//           <ProgressBar current={currentTraveler} total={travelerCount} />
//           <TravelerTabs
//             travelerCount={travelerCount}
//             travelerData={formData}
//             updateTraveler={updateTraveler}
//             currentTraveler={currentTraveler}
//             setCurrentTraveler={setCurrentTraveler}
//           />
//           <SectionCard
//             sectionIndex={activeSection}
//             onNext={handleNext}
//             onBack={handleBack}
//             onComplete={markSectionComplete}
//             traveler={formData[currentTraveler]}
//             setTravelerData={(data) => updateTraveler(currentTraveler, data)}
//             travelerIndex={currentTraveler}
//             totalTravelers={travelerCount}
//             openPayment={openPayment}
//           />
//           {/* ✅ Add payment button inside section 7 */}
//           {activeSection === 6 && submitted && paymentInfo && (
//                 <PaymentSection
//                     data={paymentInfo}
//                     travelerCount={travelerCount}
//                     onPayment={openPayment}
//                 />
//                 )}

//         </div>

//         <div className="md:col-span-1 sticky top-20">
//           <PricingSidebar travelerCount={travelerCount} onCountChange={handleTravelerChange} />
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
import { PaymentSection } from '@/components/form-sections/PaymentSection'

type PricePlans = {
  "Docs on Call": number
  "Docs on Door": number
  "Visa at Door": number
}

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
  const [submitted, setSubmitted] = useState(false)
  const [paymentInfo, setPaymentInfo] = useState<any>(null)

  useEffect(() => {
    if (!session) {
      router.push(`/auth?next=/apply/${country}`)
    }
  }, [session, router, country])

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

  const handleNext = async () => {
    if (activeSection < 5) {
      setActiveSection(activeSection + 1)
    } else if (activeSection === 5 && !submitted) {
      await submitToBackend()
      setActiveSection(activeSection + 1)
    } else if (activeSection < 6) {
      setActiveSection(activeSection + 1)
    }
  }

  const handleBack = () => {
    if (activeSection > 0 && activeSection <= 6) {
      setActiveSection(activeSection - 1)
    }
  }

  const markSectionComplete = (index: number) => {
    setCompletedSections((prev) => [...new Set([...prev, index])])
  }

  const submitToBackend = async () => {
    if (submitted) return

    try {
      const payload = {
        travelers: formData,
        selectedPlan: formData[0]?.selectedPlan,
        appointmentDate: formData[0]?.appointmentDate,
        appointmentTime: formData[0]?.appointmentTime,
        appointmentAddress: formData[0]?.appointmentAddress,
        appointmentPincode: formData[0]?.appointmentPincode,
        appointmentContact: formData[0]?.appointmentContact,
        email: formData[0]?.email,
        phone: formData[0]?.phone,
        country: formData[0]?.country ?? country,
      }

      const res = await fetch('/api/submit-form', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' },
      })

      const result = await res.json()

      if (result.success && result.sessionId && (result.pdfUrl || result.pdfs)) {
        setSubmitted(true)
        setPaymentInfo({
          selectedPlan: payload.selectedPlan,
          sessionId: result.sessionId,
          country: payload.country,
          email: payload.email,
          phone: payload.phone,
          pdfUrl: result.pdfUrl,
          pdfs: result.pdfs ?? [],
        })
      } else {
        throw new Error(result.error || 'PDF or Session ID generation failed')
      }
    } catch (err: any) {
      const message = err?.message || err?.toString() || 'Unknown error'
      console.error('❌ Submission failed:', message)
      alert('Submission failed: ' + message)
    }
  }

  async function openPayment() {
    if (!paymentInfo) return

    const { selectedPlan, sessionId, country, email, phone } = paymentInfo

    const prices: PricePlans = {
      "Docs on Call": 7500,
      "Docs on Door": 9500,
      "Visa at Door": 12500
    }

    const loadRazorpay = (): Promise<boolean> => {
      return new Promise((resolve) => {
        if (typeof window.Razorpay !== "undefined") {
          resolve(true)
          return
        }
        const script = document.createElement("script")
        script.src = "https://checkout.razorpay.com/v1/checkout.js"
        script.onload = () => resolve(true)
        script.onerror = () => resolve(false)
        document.body.appendChild(script)
      })
    }

    const res = await loadRazorpay()

    if (!res) {
      alert("Failed to load Razorpay SDK, please refresh the page.")
      return
    }

    const options = {
      key: "rzp_test_bBoKqWpCP41T6f",
      amount: prices[selectedPlan as keyof PricePlans] * 100,
      currency: "INR",
      name: "Travaky",
      description: `${selectedPlan} Plan for ${country}`,
      prefill: {
        email: email,
        contact: phone,
      },
      handler: async function () {
        await fetch("/api/mark-paid", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ paymentId: sessionId })
        })

        router.push(`/confirmation?id=${sessionId}`)
      },
      modal: {
        ondismiss: function () {
          alert("Payment cancelled. You can retry from dashboard.")
        }
      }
    }

    const rzp = new window.Razorpay(options)
    rzp.open()
  }

  const isStepDisabled = (step: number) => {
    if (step === 6) return !completedSections.includes(5)
    return step > 0 && !completedSections.includes(step - 1)
  }

  if (!session) return <p className="text-center py-20">Redirecting to login...</p>

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="beforeInteractive" />

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-7xl mx-auto p-6">
        <div className="md:col-span-1">
          <SectionSidebar
            currentStep={activeSection}
            completedSteps={completedSections}
            onNavigate={setActiveSection}
            isStepDisabled={isStepDisabled}
          />
        </div>

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
            openPayment={openPayment}
          />
          {activeSection === 6 && submitted && paymentInfo && (
            <PaymentSection
              data={paymentInfo}
              travelerCount={travelerCount}
              onPayment={openPayment}
            />
          )}
        </div>

        <div className="md:col-span-1 sticky top-20">
          <PricingSidebar travelerCount={travelerCount} onCountChange={handleTravelerChange} />
        </div>
      </div>
    </>
  )
}
