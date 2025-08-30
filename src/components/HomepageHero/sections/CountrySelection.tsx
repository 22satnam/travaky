'use client'

import { useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Clock, MapPin } from 'lucide-react'
import { countryData } from '@/data/countries'
import { useAuth } from '@/context/AuthContext'
import { toast } from 'sonner'
import Image from 'next/image'
import { useState } from 'react'
import { AuthDialog } from '@/components/ui/auth-dialogs'

export default function CountrySelection() {
  const { session } = useAuth()
  const router = useRouter()
  const [showAuth, setShowAuth] = useState(false)
  const [pendingLink, setPendingLink] = useState<string | null>(null)

  const handleOpen = (link: string) => {
    if (session) router.push(link)
    else {
      toast('Please log in to access this form.')
      setPendingLink(link)
      setShowAuth(true)
    }
  }

  return (
    <section id="destinations" className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-3 text-foreground">
            Visa Services for 150+ Countries
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose your destination—doorstep pickup, fast scheduling, expert review.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {countryData.slice(0, 12).map((c) => (
            <Card
              key={c.countryName}
              onClick={() => handleOpen(c.buttonLink)}
              className="group cursor-pointer overflow-hidden border hover:shadow-xl transition-shadow"
            >
              <div className="relative h-40">
                <Image
                  src={c.backgroundPhoto || '/placeholder.svg'}
                  alt={c.countryName}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-[1.03] transition-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between">
                  <span className="text-white drop-shadow-md text-lg font-semibold">
                    {c.countryName}
                  </span>
                  <span className="text-white/90 drop-shadow text-xs px-2 py-0.5 rounded-full border border-white/40">
                    {c.visaVariable ?? 'Visa'}
                  </span>
                </div>
              </div>

              <CardHeader className="pb-2">
                <CardTitle className="text-base">{c.countryName} Visa</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>Fast processing</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Doorstep pickup available</span>
                </div>
                {c.cost && <div className="pt-1 text-foreground">From {c.cost}</div>}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {showAuth && (
        <AuthDialog
          mode="login"
          toggleMode={() => {}}
          onSuccess={() => {
            setShowAuth(false)
            if (pendingLink) router.push(pendingLink)
            setPendingLink(null)
          }}
          onClose={() => setShowAuth(false)}
        />
      )}
    </section>
  )
}
