
'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { ExecutiveCard } from '@/components/ui/ExecutiveCard'
import { Users, FileDown, CheckCircle } from 'lucide-react'
import { Card } from '@/components/ui/card'

interface VisaData {
  country: string
  plan: string
  appointment_date: string
  appointment_time: string
  appointment_address: string
  traveler_data: any[]
  pdfs: string[]
}

export default function ConfirmationClient() {
  const searchParams = useSearchParams()
  const id = searchParams.get('id') ?? ''
  const [data, setData] = useState<VisaData | null>(null)

  useEffect(() => {
    if (!id) return

    fetch(`/api/get-confirmation?id=${id}`)
      .then((res) => res.json())
      .then((res) => setData(res.data))
      .catch(() => setData(null))
  }, [id])

  if (!data) {
    return <p className="text-center py-20">Loading confirmation data...</p>
  }

  const executive = {
    name: 'Rakesh Sharma',
    designation: 'Senior Visa Executive',
    countryExpertise: data.country,
    contact: '+91-8888888888',
    country: data.country
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="bg-card shadow-xl rounded-xl p-8 border space-y-6">

        <div className="flex items-center gap-3 text-green-600">
          <CheckCircle className="w-6 h-6" />
          <h1 className="text-2xl font-semibold">
            Booking confirmed for <strong>{data.appointment_date}</strong> at <strong>{data.appointment_time}</strong>
          </h1>
        </div>

        <p className="text-muted-foreground text-sm">
          Our executive will call you shortly to verify everything.
        </p>

        <ExecutiveCard {...executive} />

        <hr className="my-4" />

        <h2 className="text-lg font-semibold">Traveler Documents</h2>
        {data.traveler_data.map((trav: any, index: number) => (
          <Card key={index} className="p-4 mb-4 space-y-2 bg-muted border">
            <div className="flex justify-between">
              <div>
                <p className="font-semibold">Traveler {index + 1}</p>
                <p className="text-sm text-muted-foreground">
                  {trav.firstName ?? trav.first_name} {trav.lastName ?? trav.last_name}
                </p>
              </div>
              <a
                href={data.pdfs?.[index] ?? '#'}
                download
                className="text-blue-600 underline flex items-center gap-1"
              >
                <FileDown className="w-4 h-4" />
                Download PDF
              </a>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm text-muted-foreground">
              <div><strong>Passport:</strong> {trav.passport || trav['Passport Number'] || 'N/A'}</div>
              <div><strong>DOB:</strong> {trav.dob || trav['Date of Birth'] || 'N/A'}</div>
              <div><strong>Nationality:</strong> {trav.nationality || 'N/A'}</div>
            </div>
          </Card>
        ))}

        <hr className="my-4" />

        {data.plan === 'Docs on Call' ? (
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>✅ Please prepare the following documents:</p>
            <ul className="list-disc ml-6">
              <li>Original passport (scanned)</li>
              <li>Travel itinerary (if available)</li>
              <li>Proof of current address</li>
            </ul>
          </div>
        ) : (
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>✅ Our executive will visit you at:</p>
            <p className="font-medium">📍 {data.appointment_address}</p>
            <ul className="list-disc ml-6">
              <li>Keep all original documents ready</li>
              <li>Have a printed copy of this confirmation</li>
            </ul>
          </div>
        )}

        <div className="mt-6 space-y-2 text-sm">
          <a
            href="https://chat.whatsapp.com/your-community-link"
            target="_blank"
            className="inline-flex items-center gap-2 text-green-600 underline"
          >
            <Users className="w-4 h-4" />
            Join our WhatsApp Community
          </a>
        </div>
      </div>
    </div>
  )
}
