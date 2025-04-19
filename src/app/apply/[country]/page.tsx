'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/context/AuthContext'
import Script from 'next/script'

export default function ApplyCountryPage({ params }: { params: { country: string } }) {
  const router = useRouter()
  const { session } = useAuth()
  const [showPayment, setShowPayment] = useState(false)

  useEffect(() => {
    if (!session) {
      router.push(`/auth?next=/apply/${params.country}`)
    } else {
      const timeout = setTimeout(() => setShowPayment(true), 30000) // show payment panel after 30s
      return () => clearTimeout(timeout)
    }
  }, [session])

  if (!session) return <p className="text-center py-20">Redirecting to login...</p>

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="beforeInteractive" />
      <Script src="https://opnform.com/widgets/iframe.min.js" strategy="afterInteractive" />

      <div className="grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto p-6 gap-6">
        {/* OpnForm on left */}
        <div className="md:col-span-2">
          <iframe
            style={{ border: 'none', width: '100%' }}
            id="visa-application-form-uzkofw"
            src={`https://opnform.com/forms/visa-application-form-uzkofw?country=${params.country}&email=${session.email}`}
            className="h-[1600px]"
          />
        </div>

        {/* Razorpay on right (shown after delay) */}
        {showPayment && (
          <div className="md:col-span-1 p-6 border rounded-lg shadow bg-white sticky top-20">
            <h2 className="text-xl font-bold mb-4">Choose Plan to Pay</h2>
            <button onClick={() => openPayment('Docs on Call')} className="btn bg-blue-600 text-white w-full mb-3">
              Docs on Call – ₹7500
            </button>
            <button onClick={() => openPayment('Docs on Door')} className="btn bg-yellow-600 text-white w-full mb-3">
              Docs on Door – ₹9500
            </button>
            <button onClick={() => openPayment('Visa at Door')} className="btn bg-green-600 text-white w-full">
              Visa at Door – ₹12500
            </button>
          </div>
        )}
      </div>

      <Script id="razorpay-init" strategy="afterInteractive">
        {`
            async function openPayment(plan) {
            const prices = {
                "Docs on Call": 7500,
                "Docs on Door": 9500,
                "Visa at Door": 12500
            }

            const options = {
                key: "rzp_test_bBoKqWpCP41T6f",
                amount: prices[plan] * 100,
                currency: "INR",
                name: "Travaky",
                description: plan + " Plan for ${params.country}",
                handler: async function (response) {
                try {
                    const res = await fetch("/api/fetch-redirect", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        paymentId: response.razorpay_payment_id,
                        email: "${session?.email}"
                    })
                    })
                    const data = await res.json()
                    if (data?.redirect) {
                    window.location.href = data.redirect
                    } else {
                    window.location.href = "/confirmation?id=" + response.razorpay_payment_id
                    }
                } catch (err) {
                    window.location.href = "/confirmation?id=" + response.razorpay_payment_id
                }
                }
            }

            const rzp = new Razorpay(options)
            rzp.open()
            }
        `}
        </Script>
    </>
  )
}
