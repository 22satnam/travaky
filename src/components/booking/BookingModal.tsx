"use client"
import useSWR from "swr"
import Modal from "@/components/ui/modal"
import { Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const fetcher = (url:string)=>fetch(url).then(r=>r.json())

export default function BookingModal({
  id, onClose,
}:{ id:string; onClose:()=>void }){

  const { data, error } = useSWR(`/api/booking/${id}`, fetcher)

  return (
    <Modal open={!!id} onClose={onClose}>
      {(!data && !error) ? (
        <div className="flex justify-center py-10">
          <Loader2 className="animate-spin" />
        </div>
      ) : error ? (
        <p className="text-red-600">Failed to load booking.</p>
      ) : (
        <>
          <h2 className="text-xl font-semibold mb-4">
            Booking #{data.data.id}
          </h2>

          <p><strong>Country:</strong> {data.data.country}</p>
          <p><strong>Status:</strong> {data.data.status}</p>
          <p><strong>Plan:</strong> {data.data.plan}</p>
          <p><strong>Appointment:</strong> {data.data.appointment_date} &nbsp;
             {data.data.appointment_time}</p>

          <Link
            href={`/confirmation?id=${data.data.session_id}`}
            target="_blank"
            className="underline text-sm mt-4 inline-block"
          >
            Open full confirmation page ↗︎
          </Link>

          <div className="mt-6 text-right">
            <Button onClick={onClose}>Close</Button>
          </div>
        </>
      )}
    </Modal>
  )
}
