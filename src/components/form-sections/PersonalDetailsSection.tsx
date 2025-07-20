'use client'

import { useState, useEffect } from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { Checkbox } from '@/components/ui/checkbox'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

interface Props {
  traveler: any
  setTravelerData: (data: any) => void
}

export function PersonalDetailsSection({ traveler, setTravelerData }: Props) {
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({})

  const handleChange = (field: string, value: any) => {
    setTravelerData({ ...traveler, [field]: value })
    setTouched({ ...touched, [field]: true })
  }

  const validate = (field: string) => {
    const value = traveler?.[field]
    if (!value && touched[field]) return 'border-red-500'
    if (value && touched[field]) return 'border-blue-500'
    return 'border-gray-300'
  }

  useEffect(() => {
    const updated = { ...traveler }
    if (!traveler?.nationality) updated.nationality = 'India'
    if (!traveler?.countryOfBirth) updated.countryOfBirth = 'India'
    setTravelerData(updated)
  }, [])

  return (
    <div className="space-y-6">
      <p className="text-sm text-muted-foreground">
        Please ensure all details are entered exactly as they appear on your passport.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Gender */}
        <div>
          <Label>Gender</Label>
          <RadioGroup
            value={traveler?.gender || ''}
            onValueChange={(val) => handleChange('gender', val)}
            className="mt-2 flex gap-4"
          >
            {['Male', 'Female', 'Other'].map((option) => (
              <Label key={option} className="flex items-center gap-2">
                <RadioGroupItem value={option} />
                {option}
              </Label>
            ))}
          </RadioGroup>
        </div>

        {/* Marital Status */}
        <div>
          <Label>Marital Status</Label>
          <RadioGroup
            value={traveler?.maritalStatus || ''}
            onValueChange={(val) => handleChange('maritalStatus', val)}
            className="mt-2 flex gap-4 flex-wrap"
          >
            {['Single', 'Married', 'Divorced', 'Widowed'].map((status) => (
              <Label key={status} className="flex items-center gap-2">
                <RadioGroupItem value={status} />
                {status}
              </Label>
            ))}
          </RadioGroup>
        </div>

        {/* DOB */}
        <div>
          <Label>Date of Birth</Label>
          <Input
            type="date"
            value={traveler?.dob || ''}
            onChange={(e) => handleChange('dob', e.target.value)}
            className={cn('mt-1', validate('dob'))}
          />
        </div>

        {/* Nationality */}
        <div>
          <Label>Nationality</Label>
          <Input
            value={traveler?.nationality || ''}
            onChange={(e) => handleChange('nationality', e.target.value)}
            className={cn('mt-1', validate('nationality'))}
            placeholder="e.g., India"
          />
        </div>

        {/* Place of Birth */}
        <div>
          <Label>Place of Birth</Label>
          <Input
            value={traveler?.birthPlace || ''}
            onChange={(e) => handleChange('birthPlace', e.target.value)}
            className={cn('mt-1', validate('birthPlace'))}
            placeholder="e.g., New Delhi"
          />
        </div>

        {/* Passport Number */}
        <div>
          <Label>Passport Number</Label>
          <Input
            value={traveler?.passport || ''}
            onChange={(e) => handleChange('passport', e.target.value)}
            className={cn('mt-1', validate('passport'))}
            placeholder="e.g., P9876543"
          />
        </div>

        {/* Date of Issue */}
        <div>
          <Label>Date of Issue</Label>
          <Input
            type="date"
            value={traveler?.issueDate || ''}
            onChange={(e) => handleChange('issueDate', e.target.value)}
            className={cn('mt-1', validate('issueDate'))}
          />
        </div>

        {/* Date of Expiry */}
        <div>
          <Label>Date of Expiry</Label>
          <Input
            type="date"
            value={traveler?.expiryDate || ''}
            onChange={(e) => handleChange('expiryDate', e.target.value)}
            className={cn('mt-1', validate('expiryDate'))}
          />
        </div>

        {/* Country of Birth */}
        <div>
          <Label>Country of Birth</Label>
          <Input
            value={traveler?.countryOfBirth || ''}
            onChange={(e) => handleChange('countryOfBirth', e.target.value)}
            className={cn('mt-1', validate('countryOfBirth'))}
            placeholder="e.g., India"
          />
        </div>

        {/* Current Address */}
        <div className="md:col-span-2">
          <Label>Current Address</Label>
          <Input
            value={traveler?.currentAddress || ''}
            onChange={(e) => handleChange('currentAddress', e.target.value)}
            className={cn('mt-1', validate('currentAddress'))}
            placeholder="Flat No, Street, City, Pincode"
          />
        </div>

        {/* File uploads */}
        <div>
          <Label>Attach Front of Passport</Label>
          <Input
            type="file"
            accept=".jpg,.jpeg,.png,.pdf"
            onChange={(e) => handleChange('passportFront', e.target.files?.[0])}
            className="mt-1"
          />
        </div>
        <div>
          <Label>Attach Back of Passport</Label>
          <Input
            type="file"
            accept=".jpg,.jpeg,.png,.pdf"
            onChange={(e) => handleChange('passportBack', e.target.files?.[0])}
            className="mt-1"
          />
        </div>

        {/* Residence Permit */}
        <div className="md:col-span-2 flex items-center gap-2">
          <Checkbox
            id="resPermit"
            checked={traveler?.resPermit || false}
            onCheckedChange={(val) => handleChange('resPermit', val)}
          />
          <Label htmlFor="resPermit">Do you have a residence permit?</Label>
        </div>

        {traveler?.resPermit && (
          <div className="md:col-span-2">
            <Label>Residence Permit Validity</Label>
            <Input
              type="date"
              value={traveler?.resPermitValidity || ''}
              onChange={(e) => handleChange('resPermitValidity', e.target.value)}
              className={cn('mt-1', validate('resPermitValidity'))}
            />
          </div>
        )}

        {/* Consent */}
        <div className="md:col-span-2 flex items-center gap-2">
          <Checkbox
            id="consent"
            checked={traveler?.privacyConsent || false}
            onCheckedChange={(val) => handleChange('privacyConsent', val)}
          />
          <Label htmlFor="consent">
            I agree to the collection and use of my data as outlined in the privacy policy.
          </Label>
        </div>
      </div>
    </div>
  )
}
