// 'use client'

// import { useEffect, useState } from 'react'
// import { Button } from '@/components/ui/button'
// import { CheckCircle } from 'lucide-react'

// interface Props {
//   data: any
//   travelerCount: number
// }

// export function PaymentSection({ data, travelerCount }: Props) {
//   const [loading, setLoading] = useState(false)

//   const selectedPlan = data?.selectedPlan || 'Docs on Call'
//   const basePrices: Record<string, number> = {
//     'Docs on Call': 3550,
//     'Docs on Door': 19890,
//     'Visa at Doorstep': 28950,
//   }

//   const amount = basePrices[selectedPlan] * travelerCount

//   const handlePayment = () => {
//     if (typeof window === 'undefined' || !window.Razorpay) {
//       alert('Razorpay not loaded yet. Please wait.')
//       return
//     }

//     setLoading(true)

//     const options = {
//       key: 'rzp_test_bBoKqWpCP41T6f', // replace with live key in production
//       amount: amount * 100,
//       currency: 'INR',
//       name: 'Travaky Visa',
//       description: `${selectedPlan} for ${travelerCount} traveler(s)`,
//       handler: function (response: any) {
//         const redirectUrl = new URL('/confirmation', window.location.origin)
//         redirectUrl.searchParams.set('id', response.razorpay_payment_id)
//         redirectUrl.searchParams.set('plan', selectedPlan)
//         redirectUrl.searchParams.set('count', String(travelerCount))
//         window.location.href = redirectUrl.toString()
//       },
//       prefill: {
//         email: data?.email,
//         contact: data?.phone,
//       },
//       theme: {
//         color: '#2563EB',
//       },
//     }

//     const razor = new window.Razorpay(options)
//     razor.open()
//     setLoading(false)
//   }

//   return (
//     <div className="space-y-6">
//       <h3 className="text-xl font-semibold text-center">Payment Summary</h3>

//       <div className="border rounded-lg p-4 bg-muted space-y-2 text-sm">
//         <p className="flex justify-between">
//           <span>Selected Plan:</span>
//           <span className="font-medium">{selectedPlan}</span>
//         </p>
//         <p className="flex justify-between">
//           <span>Number of Travelers:</span>
//           <span>{travelerCount}</span>
//         </p>
//         <p className="flex justify-between font-semibold border-t pt-2">
//           <span>Total Payable:</span>
//           <span>₹{amount}</span>
//         </p>
//       </div>

//       <Button
//         className="w-full"
//         onClick={handlePayment}
//         disabled={loading || !data?.selectedPlan}
//       >
//         {loading ? 'Processing...' : 'Proceed to Pay'}
//       </Button>

//       <div className="text-xs text-muted-foreground text-center pt-2">
//         <CheckCircle className="inline-block w-4 h-4 text-green-600 mr-1" />
//         Secure payment via Razorpay. Confirmation on success.
//       </div>
//     </div>
//   )
// }
'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { CheckCircle } from 'lucide-react'

interface Props {
  data: any
  travelerCount: number
}

export function PaymentSection({ data, travelerCount }: Props) {
  const [loading, setLoading] = useState(false)

  const selectedPlan = data?.selectedPlan || 'Docs on Call'
  const basePrices: Record<string, number> = {
    'Docs on Call': 3550,
    'Docs on Door': 19890,
    'Visa at Doorstep': 28950,
  }

  const amount = basePrices[selectedPlan] * travelerCount

  const handlePayment = () => {
    if (typeof window === 'undefined' || !window.Razorpay) {
      alert('Razorpay not loaded yet. Please wait.')
      return
    }

    setLoading(true)

    const options = {
      key: 'rzp_test_bBoKqWpCP41T6f', // Replace with live key in production
      amount: amount * 100,
      currency: 'INR',
      name: 'Travaky Visa',
      description: `${selectedPlan} for ${travelerCount} traveler(s)`,
      handler: async function (response: any) {
        try {
          // ✅ Mark Supabase as paid
          await fetch('/api/mark-paid', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ paymentId: response.razorpay_payment_id }),
          })
        } catch (err) {
          console.error('Failed to mark payment as paid:', err)
        }

        // ✅ Redirect to confirmation
        const redirectUrl = new URL('/confirmation', window.location.origin)
        redirectUrl.searchParams.set('id', response.razorpay_payment_id)
        redirectUrl.searchParams.set('plan', selectedPlan)
        redirectUrl.searchParams.set('count', String(travelerCount))
        window.location.href = redirectUrl.toString()
      },
      prefill: {
        email: data?.email,
        contact: data?.phone,
      },
      theme: {
        color: '#2563EB',
      },
    }

    const razor = new window.Razorpay(options)
    razor.open()
    setLoading(false)
  }

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-center">Payment Summary</h3>

      <div className="border rounded-lg p-4 bg-muted space-y-2 text-sm">
        <p className="flex justify-between">
          <span>Selected Plan:</span>
          <span className="font-medium">{selectedPlan}</span>
        </p>
        <p className="flex justify-between">
          <span>Number of Travelers:</span>
          <span>{travelerCount}</span>
        </p>
        <p className="flex justify-between font-semibold border-t pt-2">
          <span>Total Payable:</span>
          <span>₹{amount}</span>
        </p>
      </div>

      <Button
        className="w-full"
        onClick={handlePayment}
        disabled={loading || !data?.selectedPlan}
      >
        {loading ? 'Processing...' : 'Proceed to Pay'}
      </Button>

      <div className="text-xs text-muted-foreground text-center pt-2">
        <CheckCircle className="inline-block w-4 h-4 text-green-600 mr-1" />
        Secure payment via Razorpay. Confirmation on success.
      </div>
    </div>
  )
}
