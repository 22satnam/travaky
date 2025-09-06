

// // // // // 'use client'

// // // // // import { useState } from 'react'
// // // // // import { Button } from '@/components/ui/button'
// // // // // import { CheckCircle } from 'lucide-react'
// // // // // import { PRICE_PLANS, PlanName } from '@/config/pricing' 

// // // // // interface Props {
// // // // //   data: any
// // // // //   selectedPlan: PlanName
// // // // //   travelerCount: number
// // // // //   onPayment: () => Promise<void>
// // // // // }

// // // // // // export function PaymentSection({ data, travelerCount, onPayment }: Props) {
// // // // // //   const [loading, setLoading] = useState(false)

// // // // // //   const selectedPlan = data?.selectedPlan || 'Docs on Call'
// // // // // //   const basePrices: Record<string, number> = {
// // // // // //     'Docs on Call': 3550,
// // // // // //     'Docs on Door': 19890,
// // // // // //     'Visa at Doorstep': 28950,
// // // // // //   }

// // // // // //   const amount = basePrices[selectedPlan] * travelerCount

// // // // // export function PaymentSection({ selectedPlan, travelerCount, onPayment }: Props) {
// // // // //   const [loading, setLoading] = useState(false)

// // // // //   const amount = PRICE_PLANS[selectedPlan] * travelerCount


// // // // //   const handleClick = async () => {
// // // // //     setLoading(true)
// // // // //     try {
// // // // //       if (typeof onPayment !== 'function') {
// // // // //         throw new Error('Payment handler is not defined')
// // // // //       }
// // // // //       await onPayment()
// // // // //     } catch (err: any) {
// // // // //       console.error('Payment Error:', err)
// // // // //       alert('Payment failed: ' + (err.message || 'Unknown error'))
// // // // //     } finally {
// // // // //       setLoading(false)
// // // // //     }
// // // // //   }

// // // // //   const disabled =
// // // // //     loading || !data?.email || !data?.phone || !data?.selectedPlan

// // // // //   return (
// // // // //     <div className="space-y-6">
// // // // //       <h3 className="text-xl font-semibold text-center">Payment Gateway</h3>

// // // // //       <div className="border rounded-lg p-4 bg-muted space-y-2 text-sm">
// // // // //         <p className="flex justify-between">
// // // // //           <span>Selected Plan:</span>
// // // // //           <span className="font-medium">{selectedPlan}</span>
// // // // //         </p>
// // // // //         <p className="flex justify-between">
// // // // //           <span>Number of Travelers:</span>
// // // // //           <span>{travelerCount}</span>
// // // // //         </p>
// // // // //         <p className="flex justify-between font-semibold border-t pt-2">
// // // // //           <span>Total Payable:</span>
// // // // //           <span>₹{amount}</span>
// // // // //         </p>
// // // // //       </div>

// // // // //       <Button
// // // // //         className={`w-full ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
// // // // //         onClick={handleClick}
// // // // //         disabled={disabled}
// // // // //       >
// // // // //         {loading ? 'Processing...' : 'Proceed to Pay'}
// // // // //       </Button>

// // // // //       <div className="text-xs text-muted-foreground text-center pt-2">
// // // // //         <CheckCircle className="inline-block w-4 h-4 text-green-600 mr-1" />
// // // // //         Secure payment via Razorpay. Confirmation on success.
// // // // //       </div>
// // // // //     </div>
// // // // //   )
// // // // // }


// // // // 'use client'

// // // // import { useState } from 'react'
// // // // import { Button } from '@/components/ui/button'
// // // // import { CheckCircle } from 'lucide-react'
// // // // import { PRICE_PLANS, PlanName } from '@/config/pricing'

// // // // interface Props {
// // // //   selectedPlan: PlanName
// // // //   travelerCount: number
// // // //   onPayment: () => Promise<void>
// // // // }

// // // // export function PaymentSection({ selectedPlan, travelerCount, onPayment }: Props) {
// // // //   const [loading, setLoading] = useState(false)
// // // //   const amount = PRICE_PLANS[selectedPlan] * travelerCount
// // // //   const disabled = loading

// // // //   const handleClick = async () => {
// // // //     setLoading(true)
// // // //     try { await onPayment() }
// // // //     catch (err: any) { alert('Payment failed: ' + err.message) }
// // // //     finally { setLoading(false) }
// // // //   }

// // // //   return (
// // // //     <div className="space-y-6">
// // // //       <h3 className="text-xl font-semibold text-center">Payment Gateway</h3>
// // // //       <div className="border rounded-lg p-4 bg-muted space-y-2 text-sm">
// // // //         <p className="flex justify-between"><span>Plan:</span><span>{selectedPlan}</span></p>
// // // //         <p className="flex justify-between"><span>Travelers:</span><span>{travelerCount}</span></p>
// // // //         <p className="flex justify-between font-semibold border-t pt-2"><span>Total:</span><span>₹{amount}</span></p>
// // // //       </div>
// // // //       <Button onClick={handleClick} disabled={disabled} className="w-full">
// // // //         {loading ? 'Processing...' : 'Proceed to Pay'}
// // // //       </Button>
// // // //       <div className="text-xs text-muted-foreground text-center pt-2">
// // // //         <CheckCircle className="inline-block w-4 h-4 text-green-600 mr-1" /> Secure payment via Razorpay.
// // // //       </div>
// // // //     </div>
// // // //   )
// // // // }
// // // 'use client'

// // // import { useState } from 'react'
// // // import { Button } from '@/components/ui/button'
// // // import { CheckCircle } from 'lucide-react'
// // // import { PRICE_PLANS, FEES, PlanName } from '@/config/pricing'

// // // interface Props {
// // //   selectedPlan: PlanName
// // //   travelerCount: number
// // //   onPayment: () => Promise<void>
// // // }

// // // export function PaymentSection({ selectedPlan, travelerCount, onPayment }: Props) {
// // //   const [loading, setLoading] = useState(false)

// // //   const amount =
// // //     PRICE_PLANS[selectedPlan] * travelerCount +
// // //     FEES.appointment * travelerCount +
// // //     FEES.service

// // //   const handleClick = async () => {
// // //     setLoading(true)
// // //     try { await onPayment() }
// // //     catch (e:any) { alert('Payment failed: ' + e.message) }
// // //     finally { setLoading(false) }
// // //   }

// // //   return (
// // //     <div className="space-y-6">
// // //       <h3 className="text-xl font-semibold text-center">Payment Gateway</h3>

// // //       <div className="border rounded-lg p-4 bg-muted space-y-2 text-sm">
// // //         <p className="flex justify-between">
// // //           <span>Plan:</span><span>{selectedPlan}</span></p>
// // //         <p className="flex justify-between">
// // //           <span>Travellers:</span><span>{travelerCount}</span></p>

// // //         <p className="flex justify-between text-muted-foreground">
// // //           <span>{selectedPlan} cost</span>
// // //           <span>₹{PRICE_PLANS[selectedPlan] * travelerCount}</span></p>
// // //         <p className="flex justify-between text-muted-foreground">
// // //           <span>Appointment Fee × {travelerCount}</span>
// // //           <span>₹{FEES.appointment * travelerCount}</span></p>
// // //         <p className="flex justify-between text-muted-foreground">
// // //           <span>Travaky Service Fee</span>
// // //           <span>₹{FEES.service}</span></p>

// // //         <p className="flex justify-between font-semibold border-t pt-2">
// // //           <span>Total Pay Now:</span><span>₹{amount}</span></p>
// // //       </div>

// // //       <Button className="w-full" onClick={handleClick} disabled={loading}>
// // //         {loading ? 'Processing…' : 'Proceed to Pay'}
// // //       </Button>

// // //       <div className="text-xs text-muted-foreground text-center pt-2">
// // //         <CheckCircle className="inline-block w-4 h-4 text-green-600 mr-1"/>
// // //         Secure payment via Razorpay
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
// //   selectedPlan : PlanName
// //   travelerCount: number
// //   onPayment    : () => Promise<void>
// // }

// // export function PaymentSection({ selectedPlan, travelerCount, onPayment }: Props) {
// //   const [loading, setLoading] = useState(false)

// //   const planCost   = PRICE_PLANS[selectedPlan] * travelerCount
// //   const appointFee = FEES.appointment * travelerCount
// //   const serviceFee = FEES.service
// //   const total      = planCost + appointFee + serviceFee

// //   const proceed = async()=>{
// //     setLoading(true)
// //     try   { await onPayment() }
// //     catch (e:any){ alert('Payment failed: ' + e.message) }
// //     finally { setLoading(false) }
// //   }

// //   return (
// //     <div className="space-y-6">
// //       <h3 className="text-xl font-semibold text-center">Payment&nbsp;Gateway</h3>

// //       <div className="border rounded-lg p-4 bg-muted space-y-2 text-sm">
// //         <p className="flex justify-between"><span>Selected Plan</span><span>{selectedPlan}</span></p>
// //         <p className="flex justify-between"><span>Travellers</span><span>{travelerCount}</span></p>

// //         <p className="flex justify-between text-muted-foreground">
// //           <span>{selectedPlan}</span><span>₹{planCost}</span></p>
// //         <p className="flex justify-between text-muted-foreground">
// //           <span>Appointment Fee × {travelerCount}</span><span>₹{appointFee}</span></p>
// //         <p className="flex justify-between text-muted-foreground">
// //           <span>Travaky Service Fee</span><span>₹{serviceFee}</span></p>

// //         <p className="flex justify-between font-semibold border-t pt-2">
// //           <span>Total&nbsp;Pay&nbsp;Now</span><span>₹{total}</span></p>
// //       </div>

// //       <Button className="w-full" onClick={proceed} disabled={loading}>
// //         {loading ? 'Processing…' : 'Proceed to Pay'}
// //       </Button>

// //       <div className="text-xs text-muted-foreground text-center pt-2">
// //         <CheckCircle className="inline-block w-4 h-4 text-green-600 mr-1"/>
// //         Secure payment via Razorpay
// //       </div>
// //     </div>
// //   )
// // }


// // 'use client'

// // import { useState } from 'react'
// // import { Button } from '@/components/ui/button'
// // import { CheckCircle } from 'lucide-react'
// // import { PRICE_PLANS, FEES, PlanName } from '@/config/pricing'

// // interface Props {
// //   selectedPlan : PlanName
// //   travelerCount: number
// //   onPayment    : () => Promise<void>
// // }

// // export function PaymentSection({ selectedPlan, travelerCount, onPayment }: Props) {
// //   const [loading, setLoading] = useState(false)

// //   const planCost   = PRICE_PLANS[selectedPlan] * travelerCount
// //   const appointFee = FEES.appointment * travelerCount
// //   const serviceFee = FEES.service
// //   const total      = planCost + appointFee + serviceFee   /** ← updated **/

// //   const pay = async()=>{
// //     setLoading(true)
// //     try   { await onPayment() }
// //     catch (e:any){ alert('Payment failed: ' + e.message) }
// //     finally { setLoading(false) }
// //   }

// //   return (
// //     <div className="space-y-6">
// //       <h3 className="text-xl font-semibold text-center">Payment Gateway</h3>

// //       <div className="border rounded-lg p-4 bg-muted space-y-2 text-sm">
// //         <p className="flex justify-between"><span>Plan</span><span>{selectedPlan}</span></p>
// //         <p className="flex justify-between"><span>Travellers</span><span>{travelerCount}</span></p>
// //         <p className="flex justify-between text-muted-foreground">
// //           <span>{selectedPlan}</span><span>₹{planCost}</span></p>
// //         <p className="flex justify-between text-muted-foreground">
// //           <span>Appointment Fee × {travelerCount}</span><span>₹{appointFee}</span></p>
// //         <p className="flex justify-between text-muted-foreground">
// //           <span>Travaky Service Fee</span><span>₹{serviceFee}</span></p>

// //         <p className="flex justify-between font-semibold border-t pt-2">
// //           <span>Total Pay Now</span><span>₹{total}</span></p>
// //       </div>

// //       <Button className="w-full" disabled={loading} onClick={pay}>
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
// import { calcPrice, PlanName } from '@/config/pricing'

// interface Props {
//   selectedPlan : PlanName
//   travelerCount: number
//   onPayment    : () => Promise<void>
//   promoCode?   : string | null
// }

// export function PaymentSection({
//   selectedPlan,
//   travelerCount,
//   onPayment,
//   promoCode = null,
// }: Props) {
//   const [loading, setLoading] = useState(false)

//   const { breakUp, total, promo } = calcPrice({
//     plan: selectedPlan,
//     travellers: travelerCount,
//     promoCode,
//   })

//   const pay = async () => {
//     setLoading(true)
//     try   { await onPayment() }
//     catch (e: any) { alert('Payment failed: ' + (e.message ?? e.toString())) }
//     finally { setLoading(false) }
//   }

//   return (
//     <div className="space-y-6">
//       <h3 className="text-xl font-semibold text-center">Payment Gateway</h3>

//       <div className="border rounded-lg p-4 bg-muted space-y-2 text-sm">
//         <p className="flex justify-between">
//           <span>Plan</span><span>{selectedPlan}</span>
//         </p>
//         <p className="flex justify-between">
//           <span>Travellers</span><span>{travelerCount}</span>
//         </p>

//         <p className="flex justify-between text-muted-foreground">
//           <span>{selectedPlan}</span>
//           <span>₹{breakUp.service.toLocaleString()}</span>
//         </p>

//         <p className="flex justify-between text-muted-foreground">
//           <span>Appointment Fee × {travelerCount}</span>
//           <span>₹{breakUp.appoint.toLocaleString()}</span>
//         </p>

//         <p className="flex justify-between text-muted-foreground">
//           <span>Convenience Fee</span>
//           <span>₹{breakUp.conven.toLocaleString()}</span>
//         </p>

//         {breakUp.visa > 0 && (
//           <p className="flex justify-between text-muted-foreground">
//             <span>Visa Fee</span>
//             <span>₹{breakUp.visa.toLocaleString()}</span>
//           </p>
//         )}

//         {breakUp.discount > 0 && (
//           <p className="flex justify-between text-green-700">
//             <span>{promo}</span>
//             <span>− ₹{breakUp.discount.toLocaleString()}</span>
//           </p>
//         )}

//         <p className="flex justify-between text-muted-foreground">
//           <span>GST (18 %)</span>
//           <span>₹{breakUp.gst.toLocaleString()}</span>
//         </p>

//         <p className="flex justify-between font-semibold border-t pt-2">
//           <span>Total Pay Now</span>
//           <span>₹{total.toLocaleString()}</span>
//         </p>
//       </div>

//       <Button className="w-full" disabled={loading} onClick={pay}>
//         {loading ? 'Processing…' : 'Proceed to Pay'}
//       </Button>

//       <div className="text-xs text-muted-foreground text-center pt-2">
//         <CheckCircle className="inline-block w-4 h-4 text-green-600 mr-1" />
//         Secure payment via Razorpay
//       </div>
//     </div>
//   )
// }
'use client'

import { useEffect, useMemo, useState } from 'react'
import { Button } from '@/components/ui/button'
import { CheckCircle } from 'lucide-react'
import { PRICING, PlanName, calcPrice } from '@/config/pricing'

interface Props {
  selectedPlan : PlanName
  travelerCount: number
  onPayment    : () => Promise<void>
  promoCode?   : string | null
  onPromoChange?: (code: string | null) => void
}

export function PaymentSection({
  selectedPlan,
  travelerCount,
  onPayment,
  promoCode = null,
  onPromoChange,
}: Props) {
  const [loading, setLoading] = useState(false)
  const [draft, setDraft] = useState<string>(promoCode ?? '')
  const [error, setError] = useState<string>('')
  const [okMsg, setOkMsg] = useState<string>('')

  useEffect(() => { setDraft(promoCode ?? '') }, [promoCode])

  const offer = PRICING.offers[selectedPlan]

  const { breakUp, total, appliedOffer } = useMemo(
    () =>
      calcPrice({
        plan: selectedPlan,
        travellers: travelerCount,
        promoCode,
      }),
    [selectedPlan, travelerCount, promoCode]
  )

  const pay = async () => {
    setLoading(true)
    try { await onPayment() } catch (e: any) {
      alert('Payment failed: ' + (e?.message ?? String(e)))
    } finally { setLoading(false) }
  }

  const applyPromo = () => {
    setError(''); setOkMsg('')
    const typed = (draft || '').trim().toUpperCase()

    if (!offer || !offer.active) {
      setError('No active promo for this plan.')
      onPromoChange?.(null)
      return
    }
    if (offer.code) {
      if (!typed) { setError(`Enter code ${offer.code}.`); return }
      if (typed !== offer.code.toUpperCase()) {
        setError('Invalid promo code for this plan. Try another.')
        onPromoChange?.(null)
        return
      }
      onPromoChange?.(typed)
      setOkMsg(`Promo applied: ${typed}`)
      return
    }
    // public (no-code) offer
    if (typed) {
      setError('No code required for this plan.')
      onPromoChange?.(null)
      return
    }
    onPromoChange?.(null)
    setOkMsg('Offer auto-applied.')
  }

  const clearPromo = () => {
    setDraft(''); setError(''); setOkMsg('')
    onPromoChange?.(null)
  }

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-center">Payment Gateway</h3>

      {/* Promo input row */}
     

      {/* The card (message lives inside) */}
      <div className="rounded-2xl border bg-white/95 shadow-[0_10px_30px_-12px_rgba(9,30,66,.25)]">
        {/* message area */}
        {(error || okMsg) && (
          <div className={`px-4 py-3 rounded-t-2xl text-sm ${error ? 'bg-red-50 text-red-700' : 'bg-emerald-50 text-emerald-700'}`}>
            {error || okMsg}
          </div>
        )}

        {/* breakdown */}
        <div className="p-4 sm:p-5 space-y-1 text-sm">
          <div className="flex justify-between">
            <span className="text-slate-500">Plan</span>
            <span className="font-medium">{selectedPlan}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">Travellers</span>
            <span className="font-medium">{travelerCount}</span>
          </div>

          <div className="flex justify-between text-slate-600">
            <span>{selectedPlan}</span>
            <span>₹{breakUp.service.toLocaleString('en-IN')}</span>
          </div>
          <div className="flex justify-between text-slate-600">
            <span>Appointment Fee × {travelerCount}</span>
            <span>₹{breakUp.appoint.toLocaleString('en-IN')}</span>
          </div>
          <div className="flex justify-between text-slate-600">
            <span>Convenience Fee</span>
            <span>₹{breakUp.conven.toLocaleString('en-IN')}</span>
          </div>

          {breakUp.visa > 0 && (
            <div className="flex justify-between text-slate-600">
              <span>Visa Fee</span>
              <span>₹{breakUp.visa.toLocaleString('en-IN')}</span>
            </div>
          )}

          {appliedOffer && (
            <div className="flex justify-between text-emerald-700">
              <span>{appliedOffer.label ?? 'Discount'}</span>
              <span>− Applied</span>
            </div>
          )}

          <div className="flex justify-between text-slate-600">
            <span>GST (18%)</span>
            <span>₹{breakUp.gst.toLocaleString('en-IN')}</span>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <input
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder={offer?.code ? `Enter ${offer.code}` : 'Enter promo code'}
              className="rounded-xl border bg-white px-4 py-2 outline-none focus:ring-2 focus:ring-primary/30 w-full sm:w-80"
            />
            <div className="flex items-center gap-2">
              <Button type="button" onClick={applyPromo}>Apply</Button>
              {promoCode && (
                <Button type="button" variant="outline" onClick={clearPromo}>
                  Remove
                </Button>
              )}
            </div>
            {/* <div className="sm:ml-auto text-sm font-semibold">
              Total:&nbsp;<span className="text-primary">₹{total.toLocaleString('en-IN')}</span>
            </div> */}
          </div>

          <div className="flex justify-between font-semibold border-t mt-2 pt-2">
            <span>Total Pay Now</span>
            <span>₹{total.toLocaleString('en-IN')}</span>
          </div>
        </div>
      </div>

      <Button className="w-full" disabled={loading} onClick={pay}>
        {loading ? 'Processing…' : 'Proceed to Pay'}
      </Button>

      <div className="text-xs text-muted-foreground text-center pt-2">
        <CheckCircle className="inline-block w-4 h-4 text-green-600 mr-1" />
        Secure payment via Razorpay
      </div>
    </div>
  )
}
