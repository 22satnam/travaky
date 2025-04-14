
// app/form/steps/StepFour.tsx
"use client"

import { useForm } from "react-hook-form"

export default function StepFour({ data, onNext, onBack }: any) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      occupation: data.occupation || '',
      companyName: data.companyName || '',
      companyEmail: data.companyEmail || '',
      companyPhone: data.companyPhone || '',
      companyAddress: data.companyAddress || '',
    }
  })

  return (
    <form onSubmit={handleSubmit(onNext)} className="space-y-6">
      <h2 className="text-2xl font-bold">Employment Information</h2>

      <div>
        <label className="block font-medium">Occupation *</label>
        <input {...register("occupation", { required: true })} className="input" />
        {errors.occupation && <p className="text-red-500 text-sm">Required</p>}
      </div>

      <div>
        <label className="block font-medium">Company Name *</label>
        <input {...register("companyName", { required: true })} className="input" />
        {errors.companyName && <p className="text-red-500 text-sm">Required</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block font-medium">Company Email *</label>
          <input type="email" {...register("companyEmail", { required: true })} className="input" />
          {errors.companyEmail && <p className="text-red-500 text-sm">Required</p>}
        </div>
        <div>
          <label className="block font-medium">Company Phone *</label>
          <input type="tel" {...register("companyPhone", { required: true })} className="input" />
          {errors.companyPhone && <p className="text-red-500 text-sm">Required</p>}
        </div>
      </div>

      <div>
        <label className="block font-medium">Company Address *</label>
        <textarea {...register("companyAddress", { required: true })} className="input" rows={3} />
        {errors.companyAddress && <p className="text-red-500 text-sm">Required</p>}
      </div>

      <div className="flex justify-between">
        <button type="button" onClick={onBack} className="btn btn-secondary">Previous</button>
        <button type="submit" className="btn btn-primary">Next</button>
      </div>
    </form>
  )
}
