
// app/form/steps/StepFive.tsx
"use client"

import { useForm } from "react-hook-form"

export default function StepFive({ data, onBack, onSubmit }: any) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      visaCountry: data.visaCountry || '',
      visaDuration: data.visaDuration || '',
      travelDate: data.travelDate || '',
      returnDate: data.returnDate || '',
      extraNotes: data.extraNotes || '',
    }
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <h2 className="text-2xl font-bold">Visa & Travel Info</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block font-medium">Visa Country *</label>
          <input {...register("visaCountry", { required: true })} className="input" />
          {errors.visaCountry && <p className="text-red-500 text-sm">Required</p>}
        </div>
        <div>
          <label className="block font-medium">Duration (e.g. 90 days) *</label>
          <input {...register("visaDuration", { required: true })} className="input" />
          {errors.visaDuration && <p className="text-red-500 text-sm">Required</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block font-medium">Expected Travel Date *</label>
          <input type="date" {...register("travelDate", { required: true })} className="input" />
          {errors.travelDate && <p className="text-red-500 text-sm">Required</p>}
        </div>
        <div>
          <label className="block font-medium">Expected Return Date *</label>
          <input type="date" {...register("returnDate", { required: true })} className="input" />
          {errors.returnDate && <p className="text-red-500 text-sm">Required</p>}
        </div>
      </div>

      <div>
        <label className="block font-medium">Additional Notes</label>
        <textarea {...register("extraNotes")} className="input" rows={3} />
      </div>

      <div className="flex justify-between">
        <button type="button" onClick={onBack} className="btn btn-secondary">Previous</button>
        <button type="submit" className="btn btn-primary">Submit</button>
      </div>
    </form>
  )
}