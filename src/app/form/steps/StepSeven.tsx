"use client"

import { useState } from "react"
import { Pricing } from "@/components/ui/pricing-section-with-comparison"
import { Button } from "@/components/ui/button"

const PLANS = ["Docs on Call", "Docs on Door", "Visa at Door"]

export default function StepSeven({ data, onNext, onBack }: any) {
  const [selectedPlan, setSelectedPlan] = useState(data.selectedPlan || "")

  const handleSubmit = () => {
    if (!selectedPlan) return alert("Please select a plan")
    onNext({ selectedPlan })
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center">Choose Your Plan</h2>
      <div className="bg-muted rounded-lg p-6">
        <Pricing />
      </div>

      <div className="flex justify-between pt-8">
        <Button variant="secondary" onClick={onBack}>Previous</Button>
        <Button onClick={handleSubmit}>Continue to Payment</Button>
      </div>
    </div>
  )
}