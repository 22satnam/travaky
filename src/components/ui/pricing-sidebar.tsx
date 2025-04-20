'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Minus, Plus } from 'lucide-react'

interface PricingSidebarProps {
  travelerCount: number
  onCountChange: (count: number) => void
}

export function PricingSidebar({ travelerCount, onCountChange }: PricingSidebarProps) {
  const appointmentFee = 1524
  const serviceFee = 1750
  const visaFee = 8000

  const totalPayNow = appointmentFee * travelerCount + serviceFee

  const openRazorpay = () => {
    const options = {
      key: 'rzp_test_bBoKqWpCP41T6f', // replace with your real key
      amount: totalPayNow * 100,
      currency: 'INR',
      name: 'Travaky Visa',
      description: `Visa for ${travelerCount} traveler(s)`,
      handler: function (response: any) {
        const url = new URL('/confirmation', window.location.origin)
        url.searchParams.set('id', response.razorpay_payment_id)
        url.searchParams.set('count', travelerCount.toString())
        window.location.href = url.toString()
      }
    }
    const razor = new (window as any).Razorpay(options)
    razor.open()
  }

  return (
    <div className="border rounded-lg p-4 shadow-sm bg-white sticky top-20 space-y-4">
      <div className="flex justify-between items-center">
        <p className="font-medium">Travellers</p>
        <div className="flex items-center gap-2">
          <Button size="icon" variant="outline" onClick={() => onCountChange(Math.max(1, travelerCount - 1))}>
            <Minus className="w-4 h-4" />
          </Button>
          <span className="font-semibold">{travelerCount}</span>
          <Button size="icon" onClick={() => onCountChange(travelerCount + 1)}>
            <Plus className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="text-sm text-muted-foreground space-y-1">
        <p className="flex justify-between">
          <span>Visa Appointment Fee × {travelerCount}</span>
          <span>₹{appointmentFee * travelerCount}</span>
        </p>
        <p className="flex justify-between">
          <span>Travaky Service Fee</span>
          <span>₹{serviceFee}</span>
        </p>
        <p className="flex justify-between line-through">
          <span>Visa Fee</span>
          <span>₹{visaFee}</span>
        </p>
        <p className="text-xs italic text-right">Paid at Visa Center later</p>
      </div>

      <div className="border-t pt-4 mt-4 flex justify-between font-semibold">
        <span>Total Amount</span>
        <span>₹{totalPayNow}</span>
      </div>

      <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white mt-2" onClick={openRazorpay}>
        Get Started
      </Button>

      <div className="text-xs text-muted-foreground text-center pt-2">
        100% money-back if visa is rejected
      </div>
    </div>
  )
}
