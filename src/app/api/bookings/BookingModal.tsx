'use client'

import {
  Dialog, DialogContent, DialogDescription,
  DialogHeader, DialogTitle,
} from '@/components/ui/dialog'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import { useBooking } from '@/hooks/useBooking'     // whatever hook you already use

export default function BookingModal({ id, onClose }:{ id:number; onClose:()=>void }) {
  const { booking, isLoading, error } = useBooking(id)

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="max-w-3xl">
        {/* ---- invisible but satisfies Radix a11y ---- */}
        <DialogHeader>
          <DialogTitle asChild>
            <VisuallyHidden>Booking #{id} confirmation</VisuallyHidden>
          </DialogTitle>
          <DialogDescription asChild>
            <VisuallyHidden>Complete details for your application</VisuallyHidden>
          </DialogDescription>
        </DialogHeader>

        {/* ---- the actual visible content you already render ---- */}
        {isLoading && <p className="text-center py-10">Loading…</p>}
        {error      && <p className="text-red-500 text-center py-10">{error}</p>}
        {booking && (
          <div className="space-y-6">
            {/* your existing JSX – traveller info, flights, hotels, docs, invoices… */}
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
