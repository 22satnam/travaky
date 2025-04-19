import { PhoneCall, User } from 'lucide-react'

interface ExecutiveCardProps {
  name: string
  designation: string
  country: string
  contact: string
}

export const ExecutiveCard = ({ name, designation, country, contact }: ExecutiveCardProps) => {
  return (
    <div className="bg-white dark:bg-muted border rounded-xl p-5 shadow-sm space-y-2">
      <div className="flex items-center gap-3">
        <User className="text-primary w-6 h-6" />
        <div>
          <p className="text-lg font-semibold">{name}</p>
          <p className="text-sm text-muted-foreground">{designation}</p>
        </div>
      </div>
      <p className="text-sm"><strong>Expertise:</strong> {country}</p>
      <p className="text-sm flex items-center gap-1 text-blue-600">
        <PhoneCall className="w-4 h-4" /> {contact}
      </p>
    </div>
  )
}
