// import { PhoneCall, User } from 'lucide-react'

// interface ExecutiveCardProps {
//   name: string
//   designation: string
//   country: string
//   contact: string
// }

// export const ExecutiveCard = ({ name, designation, country, contact }: ExecutiveCardProps) => {
//   return (
//     <div className="bg-white dark:bg-muted border rounded-xl p-5 shadow-sm space-y-2">
//       <div className="flex items-center gap-3">
//         <User className="text-primary w-6 h-6" />
//         <div>
//           <p className="text-lg font-semibold">{name}</p>
//           <p className="text-sm text-muted-foreground">{designation}</p>
//         </div>
//       </div>
//       <p className="text-sm"><strong>Expertise:</strong> {country}</p>
//       <p className="text-sm flex items-center gap-1 text-blue-600">
//         <PhoneCall className="w-4 h-4" /> {contact}
//       </p>
//     </div>
//   )
// }


// src/components/ui/ExecutiveCard.tsx

import { PhoneCall, User } from 'lucide-react'
import Image from 'next/image'

interface ExecutiveCardProps {
  name: string
  designation: string
  countryExpertise: string
  contact: string
  avatar: string
}

const toProperCase = (str: string) => {
    return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

export const ExecutiveCard = ({ name, designation, countryExpertise, contact, avatar }: ExecutiveCardProps) => {
  return (
    <div className="bg-white dark:bg-muted border rounded-xl p-5 shadow-sm space-y-2">
      <div className="flex items-center gap-3">
        <Image src={avatar} width={40} height={40} alt={name} className="rounded-full" />
        <div>
          <p className="text-lg font-semibold">{name}</p>
          <p className="text-sm text-muted-foreground">{designation}</p>
        </div>
      </div>
      <p className="text-sm"><strong>Expertise:</strong> {toProperCase(countryExpertise)}</p>
      <p className="text-sm flex items-center gap-1 text-blue-600">
        <PhoneCall className="w-4 h-4" /> {contact}
      </p>
    </div>
  )
}
