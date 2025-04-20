'use client'

import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { useState } from 'react'

interface Props {
  traveler: any
  setTravelerData: (data: any) => void
}

export function EmploymentSection({ traveler, setTravelerData }: Props) {
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({})

  const handleChange = (field: string, value: string) => {
    setTravelerData({ ...traveler, [field]: value })
    setTouched({ ...touched, [field]: true })
  }

  const validate = (field: string) => {
    const value = traveler?.[field]
    if (!value && touched[field]) return 'border-red-500'
    if (value && touched[field]) return 'border-blue-500'
    return 'border-gray-300'
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <Label>Occupation</Label>
        <Input
          placeholder="e.g., Software Engineer"
          value={traveler?.occupation || ''}
          onChange={(e) => handleChange('occupation', e.target.value)}
          className={cn('mt-1', validate('occupation'))}
          required
        />
      </div>

      <div>
        <Label>Company Address</Label>
        <Input
          placeholder="Company Street, City, State"
          value={traveler?.companyAddress || ''}
          onChange={(e) => handleChange('companyAddress', e.target.value)}
          className={cn('mt-1', validate('companyAddress'))}
        />
      </div>

      <div>
        <Label>Company Contact Number</Label>
        <Input
          placeholder="e.g., +91 1234567890"
          type="tel"
          value={traveler?.companyContact || ''}
          onChange={(e) => handleChange('companyContact', e.target.value)}
          className={cn('mt-1', validate('companyContact'))}
        />
      </div>

      <div>
        <Label>Company Email</Label>
        <Input
          placeholder="e.g., hr@company.com"
          type="email"
          value={traveler?.companyEmail || ''}
          onChange={(e) => handleChange('companyEmail', e.target.value)}
          className={cn('mt-1', validate('companyEmail'))}
        />
      </div>
    </div>
  )
}
