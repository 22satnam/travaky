'use client'

import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { useState } from 'react'

interface Props {
  data: any
  setData: (data: any) => void
}

export function AppointmentSection({ data, setData }: Props) {
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({})

  const handleChange = (field: string, value: any) => {
    setData({ ...data, [field]: value })
    setTouched({ ...touched, [field]: true })
  }

  const validate = (field: string) => {
    const value = data?.[field]
    if (!value && touched[field]) return 'border-red-500'
    if (value && touched[field]) return 'border-blue-500'
    return 'border-gray-300'
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <Label>Appointment Date</Label>
        <Input
          type="date"
          value={data?.appointmentDate || ''}
          onChange={(e) => handleChange('appointmentDate', e.target.value)}
          className={cn('mt-1', validate('appointmentDate'))}
          required
        />
      </div>

      <div>
        <Label>Appointment Time</Label>
        <Input
          type="time"
          value={data?.appointmentTime || ''}
          onChange={(e) => handleChange('appointmentTime', e.target.value)}
          className={cn('mt-1', validate('appointmentTime'))}
          required
        />
      </div>

      <div className="md:col-span-2">
        <Label>Appointment Address</Label>
        <Input
          placeholder="e.g., 123 Main St, Delhi"
          value={data?.appointmentAddress || ''}
          onChange={(e) => handleChange('appointmentAddress', e.target.value)}
          className={cn('mt-1', validate('appointmentAddress'))}
          required
        />
      </div>

      <div>
        <Label>Pincode</Label>
        <Input
          type="number"
          placeholder="e.g., 110001"
          value={data?.appointmentPincode || ''}
          onChange={(e) => handleChange('appointmentPincode', e.target.value)}
          className={cn('mt-1', validate('appointmentPincode'))}
          required
        />
      </div>

      <div>
        <Label>Contact Number</Label>
        <Input
          placeholder="e.g., +91 9876543210"
          value={data?.appointmentContact || ''}
          onChange={(e) => handleChange('appointmentContact', e.target.value)}
          className={cn('mt-1', validate('appointmentContact'))}
          required
        />
      </div>
    </div>
  )
}
