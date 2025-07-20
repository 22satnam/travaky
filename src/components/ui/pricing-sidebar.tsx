// // 'use client'

// // import { useState } from 'react'
// // import { Button } from '@/components/ui/button'
// // import { Minus, Plus } from 'lucide-react'
// // import { PRICE_PLANS, PlanName } from '@/config/pricing'

// // interface PricingSidebarProps {
// //   selectedPlan: PlanName
// //   travelerCount: number
// //   onCountChange: (count: number) => void
// // }

// // // export function PricingSidebar({ travelerCount, onCountChange }: PricingSidebarProps) {
// //   // export default function PricingSidebar({ selectedPlan, travelerCount }: PricingSidebarProps) {
// // export default function PricingSidebar({
// //   selectedPlan,
// //   travelerCount,
// //   onCountChange,
// // }: PricingSidebarProps) {
// //   const appointmentFee = 1524
// //   const serviceFee = 1750
// //   const visaFee = 8000

// //   const totalPayNow = PRICE_PLANS[selectedPlan] * travelerCount

// //   const openRazorpay = () => {
// //     const options = {
// //       key: 'rzp_test_bBoKqWpCP41T6f', // replace with your real key
// //       amount: totalPayNow * 100,
// //       currency: 'INR',
// //       name: 'Travaky Visa',
// //       description: `Visa for ${travelerCount} traveler(s)`,
// //       handler: function (response: any) {
// //         const url = new URL('/confirmation', window.location.origin)
// //         url.searchParams.set('id', response.razorpay_payment_id)
// //         url.searchParams.set('count', travelerCount.toString())
// //         window.location.href = url.toString()
// //       }
// //     }
// //     const razor = new (window as any).Razorpay(options)
// //     razor.open()
// //   }

// //   return (
// //     <div className="border rounded-lg p-4 shadow-sm bg-white sticky top-20 space-y-4">
// //       <div className="flex justify-between items-center">
// //         <p className="font-medium">Travellers</p>
// //         <div className="flex items-center gap-2">
// //           <Button size="icon" variant="outline" onClick={() => onCountChange(Math.max(1, travelerCount - 1))}>
// //             <Minus className="w-4 h-4" />
// //           </Button>
// //           <span className="font-semibold">{travelerCount}</span>
// //           <Button size="icon" onClick={() => onCountChange(travelerCount + 1)}>
// //             <Plus className="w-4 h-4" />
// //           </Button>
// //         </div>
// //       </div>

// //       <div className="text-sm text-muted-foreground space-y-1">
// //         <p className="flex justify-between">
// //           <span>Visa Appointment Fee × {travelerCount}</span>
// //           <span>₹{appointmentFee * travelerCount}</span>
// //         </p>
// //         <p className="flex justify-between">
// //           <span>Travaky Service Fee</span>
// //           <span>₹{serviceFee}</span>
// //         </p>
// //         <p className="flex justify-between line-through">
// //           <span>Visa Fee</span>
// //           <span>₹{visaFee}</span>
// //         </p>
// //         <p className="text-xs italic text-right">Paid at Visa Center later</p>
// //       </div>

// //       <div className="border-t pt-4 mt-4 flex justify-between font-semibold">
// //         <span>Total Amount</span>
// //         <span>₹{totalPayNow}</span>
// //       </div>

// //       <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white mt-2" onClick={openRazorpay}>
// //         Get Started
// //       </Button>

// //       <div className="text-xs text-muted-foreground text-center pt-2">
// //         100% money-back if visa is rejected
// //       </div>
// //     </div>
// //   )
// // }


// 'use client'

// import { Button } from '@/components/ui/button'
// import { Minus, Plus } from 'lucide-react'
// import { PRICE_PLANS, FEES, PlanName } from '@/config/pricing'

// interface PricingSidebarProps {
//   selectedPlan: PlanName
//   travelerCount: number
//   onCountChange: (count: number) => void
//   variant?:'apply' | 'info'
//   onStart?: () => void
// }

// export default function PricingSidebar({
//   selectedPlan,
//   travelerCount,
//   onCountChange,
//   variant = 'apply',
//   onStart,
// }: PricingSidebarProps) {
//   const appointmentFee = FEES.appointment
//   const serviceFee = FEES.service
//   const visaFee = FEES.visaCenter
//   const totalPayNow = PRICE_PLANS[selectedPlan] * travelerCount + appointmentFee * travelerCount + serviceFee

//   return (
//     <div className="border rounded-lg p-4 shadow-sm bg-white sticky top-20 space-y-4">
//       <div className="flex justify-between items-center">
//         <p className="font-medium">Travellers</p>
//         <div className="flex items-center gap-2">
//           <Button size="icon" variant="outline" onClick={() => onCountChange(Math.max(1, travelerCount - 1))}>
//             <Minus className="w-4 h-4" />
//           </Button>
//           <span className="font-semibold">{travelerCount}</span>
//           <Button size="icon" onClick={() => onCountChange(travelerCount + 1)}>
//             <Plus className="w-4 h-4" />
//           </Button>
//         </div>
//       </div>
//       <div className="text-sm text-muted-foreground space-y-1">
//         <p className="flex justify-between">
//           <span>Visa Appointment Fee × {travelerCount}</span>
//           <span>₹{appointmentFee * travelerCount}</span>
//         </p>
//         <p className="flex justify-between">
//           <span>Travaky Service Fee</span>
//           <span>₹{serviceFee}</span>
//         </p>
//         <p className="flex justify-between line-through">
//           <span>Visa Fee</span>
//           <span>₹{visaFee}</span>
//         </p>
//         <p className="text-xs italic text-right">Paid at Visa Center later</p>
//       </div>
//       <div className="border-t pt-4 mt-4 flex justify-between font-semibold">
//         <span>Total Amount</span>
//         <span>₹{totalPayNow}</span>
//       </div>
//         {variant === 'apply' ? (
//           <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white mt-2"
//             onClick={() => {
//               new window.Razorpay({
//                 key: 'rzp_test_bBoKqWpCP41T6f',
//                 amount: totalPayNow * 100,
//                 currency: 'INR'
//               }).open()
//             }}>
//             Pay&nbsp;Now
//         </Button>
//         ) : (
//           <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white mt-2"
//             onClick={onStart}>
//             Start&nbsp;Application
//           </Button>
//         )}
//       <div className="text-xs text-muted-foreground text-center pt-2">
//         100% money-back if visa is rejected
//       </div>
//     </div>
//   )
// }


// 'use client'

// import { Button } from '@/components/ui/button'
// import { Minus, Plus } from 'lucide-react'
// import { PRICE_PLANS, FEES, PlanName } from '@/config/pricing'

// interface Props {
//   selectedPlan: PlanName
//   travelerCount: number
//   onCountChange: (n: number) => void
//   /** 'apply' = inside wizard (no button) • 'info' = country page (Start Application) */
//   variant?: 'apply' | 'info'
//   onStart?: () => void
// }

// export default function PricingSidebar({
//   selectedPlan,
//   travelerCount,
//   onCountChange,
//   variant = 'apply',
//   onStart
// }: Props) {
//   /* one-place fee source */
//   const appointment = FEES.appointment
//   const service     = FEES.service
//   const visaCenter  = FEES.visaCenter

//   const planCost    = PRICE_PLANS[selectedPlan] * travelerCount
//   const totalPayNow = planCost + appointment * travelerCount + service

//   return (
//     <div className="border rounded-lg p-4 shadow-sm bg-white space-y-4">
//       {/* Traveller counter --------------------------------------- */}
//       <div className="flex justify-between items-center">
//         <p className="font-medium">Travellers</p>
//         <div className="flex items-center gap-2">
//           <Button size="icon" variant="outline"
//                   onClick={() => onCountChange(Math.max(1, travelerCount - 1))}>
//             <Minus className="w-4 h-4" />
//           </Button>
//           <span className="font-semibold">{travelerCount}</span>
//           <Button size="icon"
//                   onClick={() => onCountChange(travelerCount + 1)}>
//             <Plus className="w-4 h-4" />
//           </Button>
//         </div>
//       </div>

//       {/* Breakdown ---------------------------------------------- */}
//       <div className="text-sm text-muted-foreground space-y-1">
//         <p className="flex justify-between"><span>{selectedPlan}</span>
//           <span>₹{planCost}</span></p>
//         <p className="flex justify-between"><span>Appointment Fee × {travelerCount}</span>
//           <span>₹{appointment * travelerCount}</span></p>
//         <p className="flex justify-between"><span>Travaky Service Fee</span>
//           <span>₹{service}</span></p>
//         <p className="flex justify-between line-through"><span>Visa Fee</span>
//           <span>₹{visaCenter}</span></p>
//         <p className="text-xs italic text-right">Paid at Visa Center later</p>
//       </div>

//       {/* Total --------------------------------------------------- */}
//       <div className="font-semibold flex justify-between border-t pt-4">
//         <span>Total Amount</span><span>₹{totalPayNow}</span>
//       </div>

//       {/* Action -------------------------------------------------- */}
//       {variant === 'info' && (
//         <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white mt-2"
//                 onClick={onStart}>
//           Start&nbsp;Application
//         </Button>
//       )}

//       <div className="text-xs text-muted-foreground text-center pt-2">
//         100 % money-back if visa is rejected
//       </div>
//     </div>
//   )
// }


// src/components/ui/pricing-sidebar.tsx working

// 'use client'

// import { Button } from '@/components/ui/button'
// import { Minus, Plus } from 'lucide-react'
// import { PRICE_PLANS, FEES, PlanName } from '@/config/pricing'

// interface Props {
//   selectedPlan: PlanName
//   travelerCount: number
//   onCountChange: (n: number) => void
//   variant?: 'apply' | 'info'
//   onStart?: () => void
// }

// export default function PricingSidebar({
//   selectedPlan,
//   travelerCount,
//   onCountChange,
//   variant = 'apply',
//   onStart
// }: Props) {
//   const appointment = FEES.appointment
//   const service     = FEES.service
//   const visaCenter  = FEES.visaCenter

//   let totalPayNow = PRICE_PLANS[selectedPlan] * travelerCount + appointment * travelerCount + service;
//   if (selectedPlan === 'Visa at Doorstep') {
//     totalPayNow += visaCenter * travelerCount;
//   }

//   return (
//     <div className="border rounded-lg p-4 shadow-sm bg-white space-y-4">
//       {/* Traveller counter --------------------------------------- */}
//       <div className="flex justify-between items-center">
//         <p className="font-medium">Travellers</p>
//         <div className="flex items-center gap-2">
//           <Button size="icon" variant="outline"
//                   onClick={() => onCountChange(Math.max(1, travelerCount - 1))}>
//             <Minus className="w-4 h-4" />
//           </Button>
//           <span className="font-semibold">{travelerCount}</span>
//           <Button size="icon"
//                   onClick={() => onCountChange(travelerCount + 1)}>
//             <Plus className="w-4 h-4" />
//           </Button>
//         </div>
//       </div>

//       {/* Breakdown ---------------------------------------------- */}
//       <div className="text-sm text-muted-foreground space-y-1">
//         <p className="flex justify-between"><span>{selectedPlan}</span>
//           <span>₹{PRICE_PLANS[selectedPlan] * travelerCount}</span></p>
//         <p className="flex justify-between"><span>Appointment Fee × {travelerCount}</span>
//           <span>₹{appointment * travelerCount}</span></p>
//         <p className="flex justify-between"><span>Travaky Service Fee</span>
//           <span>₹{service}</span></p>
//         {selectedPlan === 'Visa at Doorstep' ? (
//           <p className="flex justify-between">
//             <span>Visa Fee</span>
//             <span>₹{visaCenter * travelerCount}</span>
//           </p>
//         ) : (
//           <>
//             <p className="flex justify-between line-through"><span>Visa Fee</span>
//             <span>₹{visaCenter}</span></p>
//             <p className="text-xs italic text-right">Paid at Visa Center later</p>
//           </>
//         )}
//       </div>

//       {/* Total --------------------------------------------------- */}
//       <div className="font-semibold flex justify-between border-t pt-4">
//         <span>Total Amount</span><span>₹{totalPayNow}</span>
//       </div>

//       {/* Action -------------------------------------------------- */}
//       {variant === 'info' && (
//         <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white mt-2"
//                 onClick={onStart}>
//           Start&nbsp;Application
//         </Button>
//       )}

//       <div className="text-xs text-muted-foreground text-center pt-2">
//         100 % money-back if visa is rejected
//       </div>
//     </div>
//   )
// }


'use client'

import { Button } from '@/components/ui/button'
import { Minus, Plus } from 'lucide-react'
import { PRICING, calcPrice, PlanName } from '@/config/pricing'

interface Props {
  selectedPlan : PlanName
  travelerCount: number
  onCountChange: (n: number) => void
  variant?     : 'apply' | 'info'
  onStart?     : () => void
  promoCode?   : string | null         /* forward-compatible */
}

export default function PricingSidebar({
  selectedPlan,
  travelerCount,
  onCountChange,
  variant = 'apply',
  onStart,
  promoCode = null,
}: Props) {
  const { breakUp, total, promo } = calcPrice({
    plan: selectedPlan,
    travellers: travelerCount,
    promoCode,
  })

  const visaRow = breakUp.visa > 0

  return (
    <div className="border rounded-lg p-4 shadow-sm bg-white space-y-4">
      {/* Travellers counter ------------------------------------------------ */}
      <div className="flex justify-between items-center">
        <p className="font-medium">Travellers</p>
        <div className="flex items-center gap-2">
          <Button size="icon" variant="outline"
                  onClick={() => onCountChange(Math.max(1, travelerCount - 1))}>
            <Minus className="w-4 h-4" />
          </Button>
          <span className="font-semibold">{travelerCount}</span>
          <Button size="icon"
                  onClick={() => onCountChange(travelerCount + 1)}>
            <Plus className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Cost breakdown ---------------------------------------------------- */}
      <div className="text-sm text-muted-foreground space-y-1">
        <p className="flex justify-between">
          <span>{selectedPlan}</span>
          <span>₹{breakUp.service.toLocaleString()}</span>
        </p>

        <p className="flex justify-between">
          <span>Appointment Fee × {travelerCount}</span>
          <span>₹{breakUp.appoint.toLocaleString()}</span>
        </p>

        <p className="flex justify-between">
          <span>Convenience Fee</span>
          <span>₹{breakUp.conven.toLocaleString()}</span>
        </p>

        {visaRow ? (
          <p className="flex justify-between">
            <span>Visa Fee</span>
            <span>₹{breakUp.visa.toLocaleString()}</span>
          </p>
        ) : (
          <>
            <p className="flex justify-between line-through">
              <span>Visa Fee</span><span>₹0</span>
            </p>
            <p className="text-xs italic text-right">Paid at VFS later</p>
          </>
        )}

        {breakUp.discount > 0 && (
          <p className="flex justify-between text-green-700">
            <span>{promo}</span>
            <span>− ₹{breakUp.discount.toLocaleString()}</span>
          </p>
        )}

        <p className="flex justify-between">
          <span>GST (18 %)</span>
          <span>₹{breakUp.gst.toLocaleString()}</span>
        </p>
      </div>

      {/* Total ------------------------------------------------------------- */}
      <div className="font-semibold flex justify-between border-t pt-4">
        <span>Total Pay Now</span>
        <span>₹{total.toLocaleString()}</span>
      </div>

      {variant === 'info' && (
        <Button
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-white mt-2"
          onClick={onStart}
        >
          Start&nbsp;Application
        </Button>
      )}

      <div className="text-xs text-muted-foreground text-center pt-2">
        100 % money-back if visa is rejected
      </div>
    </div>
  )
}
