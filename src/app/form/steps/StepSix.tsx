
// app/form/steps/StepSix.tsx
"use client"

import { useForm } from "react-hook-form"

const generateAvailableSlots = () => {
  const allSlots = []
  for (let h = 0; h < 24; h++) {
    const formatted = `${h.toString().padStart(2, '0')}:00`
    if (h < 6 || h >= 18) allSlots.push(formatted) // only after 6PM and before 6AM
  }
  return allSlots
}

export default function StepSix({ data, onNext, onBack }: any) {
  const slots = generateAvailableSlots()
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      appointmentDate: data.appointmentDate || '',
      appointmentTime: data.appointmentTime || '',
      contactNumber: data.contactNumber || '',
      address: data.address || '',
      pincode: data.pincode || '',
    }
  })

  return (
    <form onSubmit={handleSubmit(onNext)} className="space-y-6">
      <h2 className="text-2xl font-bold">Schedule Your Appointment</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block font-medium">Appointment Date *</label>
          <input type="date" {...register("appointmentDate", { required: true })} className="input" />
          {errors.appointmentDate && <p className="text-red-500 text-sm">Required</p>}
        </div>
        <div>
          <label className="block font-medium">Appointment Time *</label>
          <select {...register("appointmentTime", { required: true })} className="input">
            <option value="">Select a time</option>
            {slots.map((slot, i) => (
              <option key={i} value={slot}>{slot}</option>
            ))}
          </select>
          {errors.appointmentTime && <p className="text-red-500 text-sm">Required</p>}
        </div>
      </div>

      <div>
        <label className="block font-medium">Appointment Address *</label>
        <textarea {...register("address", { required: true })} className="input" rows={3} />
        {errors.address && <p className="text-red-500 text-sm">Required</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block font-medium">Pincode *</label>
          <input {...register("pincode", { required: true })} className="input" />
          {errors.pincode && <p className="text-red-500 text-sm">Required</p>}
        </div>
        <div>
          <label className="block font-medium">Contact Number *</label>
          <input type="tel" {...register("contactNumber", { required: true })} className="input" />
          {errors.contactNumber && <p className="text-red-500 text-sm">Required</p>}
        </div>
      </div>

      <div className="flex justify-between">
        <button type="button" onClick={onBack} className="btn btn-secondary">Previous</button>
        <button type="submit" className="btn btn-primary">Next</button>
      </div>
    </form>
  )
}
