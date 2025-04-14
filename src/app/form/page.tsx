// // app/form/page.tsx
// "use client"

// import { useState } from "react"
// import StepOne from "./steps/StepOne"
// import StepTwo from "./steps/StepTwo"
// import StepThree from "./steps/StepThree"
// import StepFour from "./steps/StepFour"
// import StepFive from "./steps/StepFive"
// import StepSix from "./steps/StepSix"
// import StepSeven from "./steps/StepSeven"

// const steps = [
//   StepOne,
//   StepTwo,
//   StepThree,
//   StepFour,
//   StepFive,
//   StepSix,
//   StepSeven
// ]

// export default function VisaFormPage() {
//   const [currentStep, setCurrentStep] = useState(0)
//   const [formData, setFormData] = useState({})

//   const StepComponent = steps[currentStep]

//   const next = (data: any) => {
//     setFormData(prev => ({ ...prev, ...data }))
//     setCurrentStep(prev => prev + 1)
//   }

//   const back = () => setCurrentStep(prev => Math.max(prev - 1, 0))

//   const submit = async (finalData: any) => {
//     const res = await fetch("/api/submit-form", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ ...formData, ...finalData }),
//     })

//     const { sessionId } = await res.json()
//     window.location.href = `/payment/${sessionId}`
//   }

//   return (
//     <div className="max-w-3xl mx-auto p-6">
//       <StepComponent
//         data={formData}
//         onNext={next}
//         onBack={back}
//         onSubmit={submit}
//         isLast={currentStep === steps.length - 1}
//         isFirst={currentStep === 0}
//       />
//     </div>
//   )
// }

'use client'

import { useState } from 'react'
import StepOne from './steps/StepOne'
import StepTwo from './steps/StepTwo'
import StepThree from './steps/StepThree'
import StepFour from './steps/StepFour'
import StepFive from './steps/StepFive'
import StepSix from './steps/StepSix'
import StepSeven from './steps/StepSeven'
import { useRouter } from 'next/navigation'

const steps = [
  StepOne,
  StepTwo,
  StepThree,
  StepFour,
  StepFive,
  StepSix,
  StepSeven,
]

export default function VisaFormPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState<Record<string, any>>({})
  const router = useRouter()

  const StepComponent = steps[currentStep]

  const next = (data: Record<string, any>) => {
    if (!data) return // guard undefined step data
    setFormData(prev => ({ ...prev, ...data }))
    setCurrentStep(prev => Math.min(prev + 1, steps.length - 1))
  }

  const back = () => {
    setCurrentStep(prev => Math.max(prev - 1, 0))
  }

  const submit = async (finalData: Record<string, any>) => {
    const combinedData = { ...formData, ...finalData }

    try {
      const res = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(combinedData),
      })

      const json = await res.json()
      const sessionId = json?.sessionId

      if (!sessionId) {
        console.error('Missing sessionId in response', json)
        alert('Something went wrong. Please try again.')
        return
      }

      // ✅ Use router instead of location.href to keep SPA context
      router.push(`/success/${sessionId}`)
    } catch (error) {
      console.error('Submission error:', error)
      alert('Submission failed. Please try again later.')
    }
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <StepComponent
        data={formData}
        onNext={next}
        onBack={back}
        onSubmit={submit}
        isLast={currentStep === steps.length - 1}
        isFirst={currentStep === 0}
      />
    </div>
  )
}
