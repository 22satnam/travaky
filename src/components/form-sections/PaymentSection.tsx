

// // // // 'use client'

// // // // import { useState } from 'react'
// // // // import { Button } from '@/components/ui/button'
// // // // import { CheckCircle } from 'lucide-react'
// // // // import { PRICE_PLANS, PlanName } from '@/config/pricing' 

// // // // interface Props {
// // // //   data: any
// // // //   selectedPlan: PlanName
// // // //   travelerCount: number
// // // //   onPayment: () => Promise<void>
// // // // }

// // // // // export function PaymentSection({ data, travelerCount, onPayment }: Props) {
// // // // //   const [loading, setLoading] = useState(false)

// // // // //   const selectedPlan = data?.selectedPlan || 'Docs on Call'
// // // // //   const basePrices: Record<string, number> = {
// // // // //     'Docs on Call': 3550,
// // // // //     'Docs on Door': 19890,
// // // // //     'Visa at Doorstep': 28950,
// // // // //   }

// // // // //   const amount = basePrices[selectedPlan] * travelerCount

// // // // export function PaymentSection({ selectedPlan, travelerCount, onPayment }: Props) {
// // // //   const [loading, setLoading] = useState(false)

// // // //   const amount = PRICE_PLANS[selectedPlan] * travelerCount


// // // //   const handleClick = async () => {
// // // //     setLoading(true)
// // // //     try {
// // // //       if (typeof onPayment !== 'function') {
// // // //         throw new Error('Payment handler is not defined')
// // // //       }
// // // //       await onPayment()
// // // //     } catch (err: any) {
// // // //       console.error('Payment Error:', err)
// // // //       alert('Payment failed: ' + (err.message || 'Unknown error'))
// // // //     } finally {
// // // //       setLoading(false)
// // // //     }
// // // //   }

// // // //   const disabled =
// // // //     loading || !data?.email || !data?.phone || !data?.selectedPlan

// // // //   return (
// // // //     <div className="space-y-6">
// // // //       <h3 className="text-xl font-semibold text-center">Payment Gateway</h3>

// // // //       <div className="border rounded-lg p-4 bg-muted space-y-2 text-sm">
// // // //         <p className="flex justify-between">
// // // //           <span>Selected Plan:</span>
// // // //           <span className="font-medium">{selectedPlan}</span>
// // // //         </p>
// // // //         <p className="flex justify-between">
// // // //           <span>Number of Travelers:</span>
// // // //           <span>{travelerCount}</span>
// // // //         </p>
// // // //         <p className="flex justify-between font-semibold border-t pt-2">
// // // //           <span>Total Payable:</span>
// // // //           <span>₹{amount}</span>
// // // //         </p>
// // // //       </div>

// // // //       <Button
// // // //         className={`w-full ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
// // // //         onClick={handleClick}
// // // //         disabled={disabled}
// // // //       >
// // // //         {loading ? 'Processing...' : 'Proceed to Pay'}
// // // //       </Button>

// // // //       <div className="text-xs text-muted-foreground text-center pt-2">
// // // //         <CheckCircle className="inline-block w-4 h-4 text-green-600 mr-1" />
// // // //         Secure payment via Razorpay. Confirmation on success.
// // // //       </div>
// // // //     </div>
// // // //   )
// // // // }


// // // 'use client'

// // // import { useState } from 'react'
// // // import { Button } from '@/components/ui/button'
// // // import { CheckCircle } from 'lucide-react'
// // // import { PRICE_PLANS, PlanName } from '@/config/pricing'

// // // interface Props {
// // //   selectedPlan: PlanName
// // //   travelerCount: number
// // //   onPayment: () => Promise<void>
// // // }

// // // export function PaymentSection({ selectedPlan, travelerCount, onPayment }: Props) {
// // //   const [loading, setLoading] = useState(false)
// // //   const amount = PRICE_PLANS[selectedPlan] * travelerCount
// // //   const disabled = loading

// // //   const handleClick = async () => {
// // //     setLoading(true)
// // //     try { await onPayment() }
// // //     catch (err: any) { alert('Payment failed: ' + err.message) }
// // //     finally { setLoading(false) }
// // //   }

// // //   return (
// // //     <div className="space-y-6">
// // //       <h3 className="text-xl font-semibold text-center">Payment Gateway</h3>
// // //       <div className="border rounded-lg p-4 bg-muted space-y-2 text-sm">
// // //         <p className="flex justify-between"><span>Plan:</span><span>{selectedPlan}</span></p>
// // //         <p className="flex justify-between"><span>Travelers:</span><span>{travelerCount}</span></p>
// // //         <p className="flex justify-between font-semibold border-t pt-2"><span>Total:</span><span>₹{amount}</span></p>
// // //       </div>
// // //       <Button onClick={handleClick} disabled={disabled} className="w-full">
// // //         {loading ? 'Processing...' : 'Proceed to Pay'}
// // //       </Button>
// // //       <div className="text-xs text-muted-foreground text-center pt-2">
// // //         <CheckCircle className="inline-block w-4 h-4 text-green-600 mr-1" /> Secure payment via Razorpay.
// // //       </div>
// // //     </div>
// // //   )
// // // }
// // 'use client'

// // import { useState } from 'react'
// // import { Button } from '@/components/ui/button'
// // import { CheckCircle } from 'lucide-react'
// // import { PRICE_PLANS, FEES, PlanName } from '@/config/pricing'

// // interface Props {
// //   selectedPlan: PlanName
// //   travelerCount: number
// //   onPayment: () => Promise<void>
// // }

// // export function PaymentSection({ selectedPlan, travelerCount, onPayment }: Props) {
// //   const [loading, setLoading] = useState(false)

// //   const amount =
// //     PRICE_PLANS[selectedPlan] * travelerCount +
// //     FEES.appointment * travelerCount +
// //     FEES.service

// //   const handleClick = async () => {
// //     setLoading(true)
// //     try { await onPayment() }
// //     catch (e:any) { alert('Payment failed: ' + e.message) }
// //     finally { setLoading(false) }
// //   }

// //   return (
// //     <div className="space-y-6">
// //       <h3 className="text-xl font-semibold text-center">Payment Gateway</h3>

// //       <div className="border rounded-lg p-4 bg-muted space-y-2 text-sm">
// //         <p className="flex justify-between">
// //           <span>Plan:</span><span>{selectedPlan}</span></p>
// //         <p className="flex justify-between">
// //           <span>Travellers:</span><span>{travelerCount}</span></p>

// //         <p className="flex justify-between text-muted-foreground">
// //           <span>{selectedPlan} cost</span>
// //           <span>₹{PRICE_PLANS[selectedPlan] * travelerCount}</span></p>
// //         <p className="flex justify-between text-muted-foreground">
// //           <span>Appointment Fee × {travelerCount}</span>
// //           <span>₹{FEES.appointment * travelerCount}</span></p>
// //         <p className="flex justify-between text-muted-foreground">
// //           <span>Travaky Service Fee</span>
// //           <span>₹{FEES.service}</span></p>

// //         <p className="flex justify-between font-semibold border-t pt-2">
// //           <span>Total Pay Now:</span><span>₹{amount}</span></p>
// //       </div>

// //       <Button className="w-full" onClick={handleClick} disabled={loading}>
// //         {loading ? 'Processing…' : 'Proceed to Pay'}
// //       </Button>

// //       <div className="text-xs text-muted-foreground text-center pt-2">
// //         <CheckCircle className="inline-block w-4 h-4 text-green-600 mr-1"/>
// //         Secure payment via Razorpay
// //       </div>
// //     </div>
// //   )
// // }


// 'use client'

// import { useState } from 'react'
// import { Button } from '@/components/ui/button'
// import { CheckCircle } from 'lucide-react'
// import { PRICE_PLANS, FEES, PlanName } from '@/config/pricing'

// interface Props {
//   selectedPlan : PlanName
//   travelerCount: number
//   onPayment    : () => Promise<void>
// }

// export function PaymentSection({ selectedPlan, travelerCount, onPayment }: Props) {
//   const [loading, setLoading] = useState(false)

//   const planCost   = PRICE_PLANS[selectedPlan] * travelerCount
//   const appointFee = FEES.appointment * travelerCount
//   const serviceFee = FEES.service
//   const total      = planCost + appointFee + serviceFee

//   const proceed = async()=>{
//     setLoading(true)
//     try   { await onPayment() }
//     catch (e:any){ alert('Payment failed: ' + e.message) }
//     finally { setLoading(false) }
//   }

//   return (
//     <div className="space-y-6">
//       <h3 className="text-xl font-semibold text-center">Payment&nbsp;Gateway</h3>

//       <div className="border rounded-lg p-4 bg-muted space-y-2 text-sm">
//         <p className="flex justify-between"><span>Selected Plan</span><span>{selectedPlan}</span></p>
//         <p className="flex justify-between"><span>Travellers</span><span>{travelerCount}</span></p>

//         <p className="flex justify-between text-muted-foreground">
//           <span>{selectedPlan}</span><span>₹{planCost}</span></p>
//         <p className="flex justify-between text-muted-foreground">
//           <span>Appointment Fee × {travelerCount}</span><span>₹{appointFee}</span></p>
//         <p className="flex justify-between text-muted-foreground">
//           <span>Travaky Service Fee</span><span>₹{serviceFee}</span></p>

//         <p className="flex justify-between font-semibold border-t pt-2">
//           <span>Total&nbsp;Pay&nbsp;Now</span><span>₹{total}</span></p>
//       </div>

//       <Button className="w-full" onClick={proceed} disabled={loading}>
//         {loading ? 'Processing…' : 'Proceed to Pay'}
//       </Button>

//       <div className="text-xs text-muted-foreground text-center pt-2">
//         <CheckCircle className="inline-block w-4 h-4 text-green-600 mr-1"/>
//         Secure payment via Razorpay
//       </div>
//     </div>
//   )
// }


'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { CheckCircle } from 'lucide-react'
import { PRICE_PLANS, FEES, PlanName } from '@/config/pricing'

interface Props {
  selectedPlan : PlanName
  travelerCount: number
  onPayment    : () => Promise<void>
}

export function PaymentSection({ selectedPlan, travelerCount, onPayment }: Props) {
  const [loading, setLoading] = useState(false)

  const planCost   = PRICE_PLANS[selectedPlan] * travelerCount
  const appointFee = FEES.appointment * travelerCount
  const serviceFee = FEES.service
  const total      = planCost + appointFee + serviceFee   /** ← updated **/

  const pay = async()=>{
    setLoading(true)
    try   { await onPayment() }
    catch (e:any){ alert('Payment failed: ' + e.message) }
    finally { setLoading(false) }
  }

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-center">Payment Gateway</h3>

      <div className="border rounded-lg p-4 bg-muted space-y-2 text-sm">
        <p className="flex justify-between"><span>Plan</span><span>{selectedPlan}</span></p>
        <p className="flex justify-between"><span>Travellers</span><span>{travelerCount}</span></p>
        <p className="flex justify-between text-muted-foreground">
          <span>{selectedPlan}</span><span>₹{planCost}</span></p>
        <p className="flex justify-between text-muted-foreground">
          <span>Appointment Fee × {travelerCount}</span><span>₹{appointFee}</span></p>
        <p className="flex justify-between text-muted-foreground">
          <span>Travaky Service Fee</span><span>₹{serviceFee}</span></p>

        <p className="flex justify-between font-semibold border-t pt-2">
          <span>Total Pay Now</span><span>₹{total}</span></p>
      </div>

      <Button className="w-full" disabled={loading} onClick={pay}>
        {loading ? 'Processing…' : 'Proceed to Pay'}
      </Button>

      <div className="text-xs text-muted-foreground text-center pt-2">
        <CheckCircle className="inline-block w-4 h-4 text-green-600 mr-1"/>
        Secure payment via Razorpay
      </div>
    </div>
  )
}
