"use client"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import React from "react"

export default function Modal({
  open, onClose, children,
}: { open: boolean; onClose: () => void; children: React.ReactNode }) {
  return (
    <Dialog open={open} onOpenChange={(v)=>!v && onClose()}>
      <DialogContent className="max-w-2xl">{children}</DialogContent>
    </Dialog>
  )
}
