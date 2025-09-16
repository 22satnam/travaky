// 'use client'

// import { Suspense, useEffect, useState } from 'react'
// import { useParams, useRouter, useSearchParams } from 'next/navigation'
// import { useAuth } from '@/context/AuthContext'
// import PricingSidebar from '@/components/ui/pricing-sidebar'
// import { PlanName } from '@/config/pricing'

// function ApplyContent() {
//   const router = useRouter()
//   const { country } = useParams<{ country: string }>()
//   const { session } = useAuth()
//   const searchParams = useSearchParams()

//   const initialTrav = Number(searchParams.get('travellers')) || 1
//   const initialPlan = (searchParams.get('plan') as PlanName) || 'Docs on Call'

//   const [travelerCount, setTravelerCount] = useState(initialTrav)
//   const [selectedPlan, setSelectedPlan] = useState<PlanName>(initialPlan)

//   useEffect(() => {
//     if (!session) {
//       router.push(`/auth?next=/apply/${country}`)
//     }
//   }, [session, router, country])

//   if (!session) {
//     return <p className="py-20 text-center">Redirecting to login...</p>
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
//       <div className="container mx-auto px-4 py-8">
//         <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
//           Apply for {country} Visa
//         </h1>
//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
//           <div className="lg:col-span-3">
//             <div className="bg-white rounded-lg shadow-lg p-6">
//               <h2 className="text-xl font-semibold mb-4 text-gray-700">
//                 Visa Application Form
//               </h2>
//               <p className="text-gray-600 mb-4">
//                 Complete your visa application for {country}. Please fill in all required information.
//               </p>
//               <div className="bg-blue-50 p-4 rounded-lg">
//                 <p className="text-blue-700">
//                   Selected Plan: <strong>{selectedPlan}</strong>
//                 </p>
//                 <p className="text-blue-700">
//                   Number of Travelers: <strong>{travelerCount}</strong>
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="lg:col-span-1">
//             <PricingSidebar
//               variant="apply"
//               selectedPlan={selectedPlan}
//               travelerCount={travelerCount}
//               onCountChange={setTravelerCount}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default function ApplyPage() {
//   return (
//     <Suspense fallback={
//       <div className="flex justify-center items-center py-20">
//         <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
//       </div>
//     }>
//       <ApplyContent />
//     </Suspense>
//   )
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

import { calcPrice, PlanName } from '@/config/pricing'

/** Travaky hero-ish background (white + light blue) */
import '@/app/styles/ui-apply.css'

export default function ApplyFormPage() {
  const router        = useRouter()
  const { country }   = useParams<{ country: string }>()
  const { session }   = useAuth()
  const searchParams  = useSearchParams()

  const initialTrav   = Number(searchParams.get('travellers')) || 1
  const initialPlan   = (searchParams.get('plan') as PlanName) || 'Docs on Call'
  const promoFromQS   = searchParams.get('promo') ?? null

  /* state ---------------------------------------------------- */
  const [travelerCount, setTravelerCount] = useState(initialTrav)
  const [selectedPlan , setSelectedPlan ] = useState<PlanName>(initialPlan)

  const [formData, setFormData] = useState<any[]>(
    Array(initialTrav).fill({ selectedPlan: initialPlan, country })
  )

  const [stepsByTrav, setStepsByTrav] = useState<number[][]>(
    Array.from({ length: initialTrav }, () => [])
  )
  const [globalSteps, setGlobalSteps]     = useState<number[]>([])
  const [activeSection   , setActiveSection   ] = useState(0)
  const [currentTraveller, setCurrentTraveller] = useState(0)

  const [submitted , setSubmitted ] = useState(false)
  const [paymentInfo, setPaymentInfo] = useState<{
    selectedPlan: PlanName; sessionId: string; country: string;
    email: string; phone: string; pdfUrl?: string; pdfs?: string[];
  }|null>(null)

  const [missingTravs, setMissingTravs] = useState<number[]>([])
  /** promo lives here; shown only in Payment step (child controls it) */
  const [promoCode, setPromoCode] = useState<string | null>(promoFromQS)

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

    if (activeSection < 3) { setActiveSection(s => s + 1); return }

    if (activeSection === 3) {
      if (currentTraveller < travelerCount - 1) {
        setCurrentTraveller(currentTraveller + 1)
        setActiveSection(0)
        toast.info(`Please fill in details for traveller ${currentTraveller + 2}`)
        return
      }

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

    if (activeSection === 4) {
      // Move to Appointment; we'll submit after appointment info is filled
      setActiveSection(5)
      return
    }

    if (activeSection === 5) {
      if (!submitted) await submitToBackend()
      setActiveSection(6)
      return
    }

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
      // appointmentTime    : formData[0]?.appointmentTime,
      appointmentAddress : formData[0]?.appointmentAddress,
      appointmentPincode : formData[0]?.appointmentPincode,
      appointmentContact : formData[0]?.appointmentContact,
      email : formData[0]?.email,  phone: formData[0]?.phone,
      country,
      promoCode,
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
      promoCode: promoCode ?? undefined,
    })

    await loadAndOpenRazorpay({
      amount      : total * 100,
      email, contact: phone,
      sessionId,
      description : `${selectedPlan} plan for ${travelerCount} traveller(s)`,
    })
  }

  if (!session) return <p className="py-20 text-center">Redirecting…</p>

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="beforeInteractive"/>

      <div className="tvk-apply-bg min-h-screen">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-6 md:py-8">
          {/* No promo banner here anymore */}

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 pb-24">
            {/* Steps */}
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

            {/* Wizard body */}
            <div className="md:col-span-3 space-y-4">
              {activeSection < 4 ? (
                <>
                  <div className="tvk-apply-card p-4">
                    <ProgressBar current={currentTraveller} total={travelerCount} />
                    <div className="mt-3">
                      <TravelerTabs
                        travelerCount={travelerCount}
                        travelerData={formData}
                        updateTraveler={updateTraveller}
                        currentTraveler={currentTraveller}
                        setCurrentTraveler={setCurrentTraveller}
                      />
                    </div>
                  </div>

                  <div className="tvk-apply-card p-4">
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
                  </div>
                </>
              ) : activeSection < 6 ? (
                <div className="tvk-apply-card p-4">
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
                </div>
              ) : (
                submitted && paymentInfo && (
                  <div className="tvk-apply-card p-4">
                    <PaymentSection
                      selectedPlan={selectedPlan}
                      travelerCount={travelerCount}
                      promoCode={promoCode}
                      onPromoChange={(c)=>setPromoCode(c)}
                      onPayment={openPayment}
                    />
                  </div>
                )
              )}
            </div>

            {/* Sticky price card */}
            <div className="md:col-span-1 sticky top-24 self-start">
              <PricingSidebar
                variant="apply"
                selectedPlan={selectedPlan}
                travelerCount={travelerCount}
                onCountChange={handleTravellerChange}
                promoCode={promoCode ?? undefined}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

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
