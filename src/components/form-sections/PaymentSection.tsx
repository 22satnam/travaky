

'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { CheckCircle } from 'lucide-react'

interface Props {
  data: any
  travelerCount: number
  onPayment: () => Promise<void>
}

export function PaymentSection({ data, travelerCount, onPayment }: Props) {
  const [loading, setLoading] = useState(false)

  const selectedPlan = data?.selectedPlan || 'Docs on Call'
  const basePrices: Record<string, number> = {
    'Docs on Call': 3550,
    'Docs on Door': 19890,
    'Visa at Doorstep': 28950,
  }

  const amount = basePrices[selectedPlan] * travelerCount

  const handleClick = async () => {
    setLoading(true)
    try {
      if (typeof onPayment !== 'function') {
        throw new Error('Payment handler is not defined')
      }
      await onPayment()
    } catch (err: any) {
      console.error('Payment Error:', err)
      alert('Payment failed: ' + (err.message || 'Unknown error'))
    } finally {
      setLoading(false)
    }
  }

  const disabled =
    loading || !data?.email || !data?.phone || !data?.selectedPlan

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-center">Payment Gateway</h3>

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
        className={`w-full ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        onClick={handleClick}
        disabled={disabled}
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
