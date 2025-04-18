'use client'

import { useSearchParams } from 'next/navigation'

export default function ConfirmationPage() {
  const searchParams = useSearchParams()

  const name = searchParams.get('name')
  const country = searchParams.get('country')
  const visaType = searchParams.get('type')
  const id = searchParams.get('id')

  return (
    <div className="max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-4">🎉 Visa Submitted</h1>
      <p className="mb-2 text-muted-foreground">
        Thank you <strong>{name}</strong>, your <strong>{visaType}</strong> visa application for <strong>{country}</strong> has been successfully submitted.
      </p>
      <p className="mb-2 text-muted-foreground">Tracking ID: <code>{id}</code></p>
      <p className="mt-6 text-sm text-muted-foreground">
        We've also sent a confirmation email with your filled PDF and next steps.
      </p>
    </div>
  )
}
