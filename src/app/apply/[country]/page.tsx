'use client'

import { Suspense, useEffect, useState } from 'react'
import { useParams, useRouter, useSearchParams } from 'next/navigation'
import { useAuth } from '@/context/AuthContext'
import PricingSidebar from '@/components/ui/pricing-sidebar'
import { PlanName } from '@/config/pricing'

function ApplyContent() {
  const router = useRouter()
  const { country } = useParams<{ country: string }>()
  const { session } = useAuth()
  const searchParams = useSearchParams()

  const initialTrav = Number(searchParams.get('travellers')) || 1
  const initialPlan = (searchParams.get('plan') as PlanName) || 'Docs on Call'

  const [travelerCount, setTravelerCount] = useState(initialTrav)
  const [selectedPlan, setSelectedPlan] = useState<PlanName>(initialPlan)

  useEffect(() => {
    if (!session) {
      router.push(`/auth?next=/apply/${country}`)
    }
  }, [session, router, country])

  if (!session) {
    return <p className="py-20 text-center">Redirecting to login...</p>
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Apply for {country} Visa
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-gray-700">
                Visa Application Form
              </h2>
              <p className="text-gray-600 mb-4">
                Complete your visa application for {country}. Please fill in all required information.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-700">
                  Selected Plan: <strong>{selectedPlan}</strong>
                </p>
                <p className="text-blue-700">
                  Number of Travelers: <strong>{travelerCount}</strong>
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1">
            <PricingSidebar
              variant="apply"
              selectedPlan={selectedPlan}
              travelerCount={travelerCount}
              onCountChange={setTravelerCount}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ApplyPage() {
  return (
    <Suspense fallback={
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    }>
      <ApplyContent />
    </Suspense>
  )
}
