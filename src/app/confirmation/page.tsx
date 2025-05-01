
import { Suspense } from 'react'
import ConfirmationClient from './ConfirmationClient'

export const dynamic = 'force-dynamic'

export default function ConfirmationPage() {
  return (
    <Suspense fallback={<div className="py-16 text-center">Loading…</div>}>
      <ConfirmationClient />
    </Suspense>
  )
}
