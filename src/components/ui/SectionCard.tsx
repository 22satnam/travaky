// 'use client'

// import { Button } from '@/components/ui/button'
// import { cn } from '@/lib/utils'
// import { useEffect, useState } from 'react'

// interface SectionCardProps {
//   sectionIndex: number
//   onNext: () => void
//   onBack: () => void
//   onComplete: (index: number) => void
//   traveler: any
//   setTravelerData: (data: any) => void
//   travelerIndex: number
//   totalTravelers: number
// }

// const sectionTitles = [
//   'Basic Info',
//   'Personal Details',
//   'Employment Info',
//   'Travel Info',
//   'Plan Selection',
//   'Appointment Info',
//   'Payment Gateway',
// ]

// export default function SectionCard({
//   sectionIndex,
//   onNext,
//   onBack,
//   onComplete,
//   traveler,
//   setTravelerData,
//   travelerIndex,
//   totalTravelers,
// }: SectionCardProps) {
//   const [isValid, setIsValid] = useState(false)

//   useEffect(() => {
//     // basic form-level validation
//     if (sectionIndex === 0 && traveler?.firstName && traveler?.lastName && traveler?.email) {
//       setIsValid(true)
//     } else if (sectionIndex === 1 && traveler?.gender && traveler?.dob && traveler?.passport) {
//       setIsValid(true)
//     } else if (sectionIndex === 2 && traveler?.occupation) {
//       setIsValid(true)
//     } else if (sectionIndex === 3 && traveler?.travelPurpose && traveler?.arrival && traveler?.departure) {
//       setIsValid(true)
//     } else if (sectionIndex >= 4) {
//       setIsValid(true) // Global sections — validate separately
//     } else {
//       setIsValid(false)
//     }
//   }, [traveler, sectionIndex])

//   const handleNext = () => {
//     if (isValid) {
//       onComplete(sectionIndex)
//       onNext()
//     }
//   }

//   return (
//     <div className="border rounded-xl bg-white shadow p-6 space-y-6">
//       <div className="flex justify-between items-center">
//         <h2 className="text-xl font-semibold">{sectionTitles[sectionIndex]}</h2>
//         <p className="text-sm text-muted-foreground">
//           Traveler {travelerIndex + 1} of {totalTravelers}
//         </p>
//       </div>

//       {/* Static layout — replace this with dynamic section components */}
//       <div className="space-y-4">
//         <p className="text-sm text-muted-foreground">
//           This is placeholder content for section {sectionIndex + 1}. Replace this with real input forms (e.g., BasicInfoSection.tsx).
//         </p>
//         {/* TODO: Inject per-section component here */}
//       </div>

//       {/* Navigation Controls */}
//       <div className="flex justify-between pt-6">
//         <Button variant="outline" onClick={onBack} disabled={sectionIndex === 0 && travelerIndex === 0}>
//           Back
//         </Button>
//         <Button onClick={handleNext} disabled={!isValid}>
//           Next
//         </Button>
//       </div>
//     </div>
//   )
// }
'use client'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'

import { BasicInfoSection } from '@/components/form-sections/BasicInfoSection'
import { PersonalDetailsSection } from '@/components/form-sections/PersonalDetailsSection'
import { EmploymentSection } from '@/components/form-sections/EmploymentSection'
import { TravelInfoSection } from '@/components/form-sections/TravelInfoSection'
import { VisaPlanSection } from '@/components/form-sections/VisaPlanSection'
import { AppointmentSection } from '@/components/form-sections/AppointmentSection'
import { PaymentSection } from '@/components/form-sections/PaymentSection'

interface SectionCardProps {
  sectionIndex: number
  onNext: () => void
  onBack: () => void
  onComplete: (index: number) => void
  traveler: any
  setTravelerData: (data: any) => void
  travelerIndex: number
  totalTravelers: number
}

const sectionTitles = [
  'Basic Info',
  'Personal Details',
  'Employment Info',
  'Travel Info',
  'Plan Selection',
  'Appointment Info',
  'Payment Gateway',
]

export default function SectionCard({
  sectionIndex,
  onNext,
  onBack,
  onComplete,
  traveler,
  setTravelerData,
  travelerIndex,
  totalTravelers,
}: SectionCardProps) {
  const [isValid, setIsValid] = useState(false)

  useEffect(() => {
    const has = (key: string) => traveler?.[key]?.toString().trim().length > 0

    if (sectionIndex === 0) {
      setIsValid(has('firstName') && has('lastName') && has('email') && has('phone') && has('country'))
    } else if (sectionIndex === 1) {
      setIsValid(has('gender') && has('maritalStatus') && has('dob') && has('passport'))
    } else if (sectionIndex === 2) {
      setIsValid(has('occupation'))
    } else if (sectionIndex === 3) {
      setIsValid(has('travelPurpose') && has('arrival') && has('departure'))
    } else if (sectionIndex === 4) {
      setIsValid(has('selectedPlan'))
    } else if (sectionIndex === 5) {
      setIsValid(has('appointmentDate') && has('appointmentTime') && has('appointmentAddress') && has('appointmentContact'))
    } else if (sectionIndex === 6) {
      setIsValid(true) // Razorpay button handles payment
    } else {
      setIsValid(false)
    }
  }, [traveler, sectionIndex])

  const handleNext = () => {
    if (isValid) {
      onComplete(sectionIndex)
      onNext()
    }
  }

  return (
    <div className="border rounded-xl bg-white shadow p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">{sectionTitles[sectionIndex]}</h2>
        {sectionIndex <= 3 && (
          <p className="text-sm text-muted-foreground">
            Traveler {travelerIndex + 1} of {totalTravelers}
          </p>
        )}
      </div>

      {/* Section Content */}
      <div className="space-y-4">
        {sectionIndex === 0 && (
          <BasicInfoSection traveler={traveler} setTravelerData={setTravelerData} />
        )}
        {sectionIndex === 1 && (
          <PersonalDetailsSection traveler={traveler} setTravelerData={setTravelerData} />
        )}
        {sectionIndex === 2 && (
          <EmploymentSection traveler={traveler} setTravelerData={setTravelerData} />
        )}
        {sectionIndex === 3 && (
          <TravelInfoSection traveler={traveler} setTravelerData={setTravelerData} />
        )}
        {sectionIndex === 4 && (
          <VisaPlanSection plan={traveler?.selectedPlan || ''} setPlan={(plan) => setTravelerData({ ...traveler, selectedPlan: plan })} />
        )}
        {sectionIndex === 5 && (
          <AppointmentSection data={traveler} setData={setTravelerData} />
        )}
        {sectionIndex === 6 && (
          <PaymentSection data={traveler} travelerCount={totalTravelers} />
        )}
      </div>

      {/* Navigation Controls */}
      <div className="flex justify-between pt-6">
        <Button variant="outline" onClick={onBack} disabled={sectionIndex === 0 && travelerIndex === 0}>
          Back
        </Button>
        {sectionIndex < 6 && (
          <Button onClick={handleNext} disabled={!isValid}>
            Next
          </Button>
        )}
      </div>
    </div>
  )
}
