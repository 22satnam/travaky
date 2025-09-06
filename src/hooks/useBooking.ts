import { useState, useEffect } from 'react'

interface Booking {
  id: number
  // Add other booking properties as needed
}

export function useBooking(id: number) {
  const [booking, setBooking] = useState<Booking | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchBooking = async () => {
      try {
        setIsLoading(true)
        const response = await fetch(`/api/booking/${id}`)
        if (!response.ok) {
          throw new Error('Failed to fetch booking')
        }
        const data = await response.json()
        setBooking(data.data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error')
      } finally {
        setIsLoading(false)
      }
    }

    if (id) {
      fetchBooking()
    }
  }, [id])

  return { booking, isLoading, error }
}
