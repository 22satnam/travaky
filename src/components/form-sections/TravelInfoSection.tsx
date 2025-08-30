'use client'

import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'

interface Props {
  traveler: any
  setTravelerData: (data: any) => void
}

export function TravelInfoSection({ traveler, setTravelerData }: Props) {
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({})

  const handleChange = (field: string, value: any) => {
    setTravelerData({ ...traveler, [field]: value })
    setTouched({ ...touched, [field]: true })
  }

  const calculateDuration = () => {
    const start = traveler?.arrival ? new Date(traveler.arrival) : null
    const end = traveler?.departure ? new Date(traveler.departure) : null
    if (start && end && end > start) {
      const diff = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24))
      return diff
    }
    return null
  }

  const validate = (field: string) => {
    const value = traveler?.[field]
    if (!value && touched[field]) return 'border-red-500'
    if (value && touched[field]) return 'border-blue-500'
    return 'border-gray-300'
  }

  const duration = calculateDuration()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="md:col-span-2">
        <Label>Purpose of Travel</Label>
        <RadioGroup
          value={traveler?.travelPurpose || ''}
          onValueChange={(val) => handleChange('travelPurpose', val)}
          className="mt-2 flex gap-4"
        >
          {['Business', 'Tourist', 'Visitor'].map((type) => (
            <Label key={type} className="flex items-center gap-2">
              <RadioGroupItem value={type} />
              {type}
            </Label>
          ))}
        </RadioGroup>
      </div>

      <div>
        <Label>Date of Arrival</Label>
        <Input
          type="date"
          value={traveler?.arrival || ''}
          onChange={(e) => handleChange('arrival', e.target.value)}
          className={cn('mt-1', validate('arrival'))}
        />
      </div>

      <div>
        <Label>Date of Departure</Label>
        <Input
          type="date"
          value={traveler?.departure || ''}
          onChange={(e) => handleChange('departure', e.target.value)}
          className={cn('mt-1', validate('departure'))}
        />
      </div>

      <div className="md:col-span-2">
        <Label>Intended Days of Travel</Label>
        <Input
          value={duration !== null ? `${duration} days` : ''}
          readOnly
          className="mt-1 text-muted-foreground bg-muted cursor-not-allowed"
        />
      </div>
{/* 
      <div className="md:col-span-2 flex items-center gap-2">
        <Checkbox
          id="accommodation"
          checked={traveler?.accommodationRequired || false}
          onCheckedChange={(val) => handleChange('accommodationRequired', val)}
        />
        <Label htmlFor="accommodation">Accommodation Required</Label>
      </div> */}
    </div>
  )
}
