// 'use client'

// import { Input } from '@/components/ui/input'
// import { Label } from '@/components/ui/label'
// import { useEffect, useState } from 'react'
// import { cn } from '@/lib/utils'

// interface Props {
//   traveler: any
//   setTravelerData: (data: any) => void
// }

// export function BasicInfoSection({ traveler, setTravelerData }: Props) {
//   const [touched, setTouched] = useState<{ [key: string]: boolean }>({})

//   const handleChange = (field: string, value: string) => {
//     setTravelerData({ ...traveler, [field]: value })
//     setTouched({ ...touched, [field]: true })
//   }

//   const validate = (field: string) => {
//     const value = traveler?.[field]
//     if (!value && touched[field]) return 'border-red-500'
//     if (value && touched[field]) return 'border-blue-500'
//     return 'border-gray-300'
//   }

//   useEffect(() => {
//     if (!traveler?.country) {
//       setTravelerData({ ...traveler, country: 'India' })
//     }
//   }, [])

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//       <div>
//         <Label htmlFor="firstName">First Name</Label>
//         <Input
//           id="firstName"
//           placeholder="e.g., Satnam"
//           value={traveler?.firstName || ''}
//           onChange={(e) => handleChange('firstName', e.target.value)}
//           className={cn('mt-1', validate('firstName'))}
//           required
//         />
//       </div>

//       <div>
//         <Label htmlFor="lastName">Last Name</Label>
//         <Input
//           id="lastName"
//           placeholder="e.g., Singh"
//           value={traveler?.lastName || ''}
//           onChange={(e) => handleChange('lastName', e.target.value)}
//           className={cn('mt-1', validate('lastName'))}
//           required
//         />
//       </div>

//       <div>
//         <Label htmlFor="email">Email Address</Label>
//         <Input
//           id="email"
//           type="email"
//           placeholder="e.g., example@email.com"
//           value={traveler?.email || ''}
//           onChange={(e) => handleChange('email', e.target.value)}
//           className={cn('mt-1', validate('email'))}
//           required
//         />
//       </div>

//       <div>
//         <Label htmlFor="contact">Contact Number</Label>
//         <Input
//           id="contact"
//           type="tel"
//           placeholder="e.g., +91 9876543210"
//           value={traveler?.phone || ''}
//           onChange={(e) => handleChange('phone', e.target.value)}
//           className={cn('mt-1', validate('phone'))}
//           required
//         />
//       </div>

//       <div className="md:col-span-2">
//         <Label htmlFor="country">Country</Label>
//         <Input
//           id="country"
//           placeholder="e.g., India"
//           value={traveler?.country || 'India'}
//           onChange={(e) => handleChange('country', e.target.value)}
//           className={cn('mt-1', validate('country'))}
//           required
//         />
//       </div>
//     </div>
//   )
// }
'use client'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem
} from '@/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { Check, ChevronsUpDown } from 'lucide-react'

interface Props {
  traveler: any
  setTravelerData: (data: any) => void
}

const visaCountries = [
  { label: 'Switzerland', value: 'switzerland' },
  { label: 'France', value: 'france' },
  { label: 'Germany', value: 'germany' },
  { label: 'Italy', value: 'italy' },
  { label: 'Spain', value: 'spain' }
]

export function BasicInfoSection({ traveler, setTravelerData }: Props) {
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({})
  const [open, setOpen] = useState(false)

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

  useEffect(() => {
    if (!traveler?.country) {
      setTravelerData({ ...traveler, country: 'India' })
    }
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <Label htmlFor="firstName">First Name</Label>
        <Input
          id="firstName"
          placeholder="e.g., Satnam"
          value={traveler?.firstName || ''}
          onChange={(e) => handleChange('firstName', e.target.value)}
          className={cn('mt-1', validate('firstName'))}
          required
        />
      </div>

      <div>
        <Label htmlFor="lastName">Last Name</Label>
        <Input
          id="lastName"
          placeholder="e.g., Singh"
          value={traveler?.lastName || ''}
          onChange={(e) => handleChange('lastName', e.target.value)}
          className={cn('mt-1', validate('lastName'))}
          required
        />
      </div>

      <div>
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          type="email"
          placeholder="e.g., example@email.com"
          value={traveler?.email || ''}
          onChange={(e) => handleChange('email', e.target.value)}
          className={cn('mt-1', validate('email'))}
          required
        />
      </div>

      <div>
        <Label htmlFor="contact">Contact Number</Label>
        <Input
          id="contact"
          type="tel"
          placeholder="e.g., +91 9876543210"
          value={traveler?.phone || ''}
          onChange={(e) => handleChange('phone', e.target.value)}
          className={cn('mt-1', validate('phone'))}
          required
        />
      </div>

      {/* ✅ Country Dropdown Search */}
      <div className="md:col-span-2">
        <Label htmlFor="country">Select Visa Country</Label>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className={cn(
                'w-full justify-between mt-1',
                validate('country')
              )}
            >
              {traveler?.country
                ? visaCountries.find((c) => c.value === traveler.country)?.label
                : 'Select country...'}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-full p-0">
            <Command>
              <CommandInput placeholder="Search country..." />
              <CommandEmpty>No match found.</CommandEmpty>
              <CommandGroup>
                {visaCountries.map((c) => (
                  <CommandItem
                    key={c.value}
                    value={c.value}
                    onSelect={() => {
                      handleChange('country', c.value)
                      setOpen(false)
                    }}
                  >
                    <Check
                      className={cn(
                        'mr-2 h-4 w-4',
                        c.value === traveler.country ? 'opacity-100' : 'opacity-0'
                      )}
                    />
                    {c.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  )
}
