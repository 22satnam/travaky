
"use client"

import { useForm } from "react-hook-form"

export default function StepOne({ data, onNext }: any) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      firstName: data.firstName || '',
      lastName: data.lastName || '',
      email: data.email || '',
      phone: data.phone || '',
    }
  })

  return (
    <form onSubmit={handleSubmit(onNext)} className="space-y-6">
      <h2 className="text-2xl font-bold">Sign Up</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block font-medium">First Name *</label>
          <input {...register("firstName", { required: true })} className="input" />
          {errors.firstName && <p className="text-red-500 text-sm">Required</p>}
        </div>
        <div>
          <label className="block font-medium">Last Name *</label>
          <input {...register("lastName", { required: true })} className="input" />
          {errors.lastName && <p className="text-red-500 text-sm">Required</p>}
        </div>
      </div>

      <div>
        <label className="block font-medium">Email Address *</label>
        <input {...register("email", { required: true })} className="input" type="email" />
        {errors.email && <p className="text-red-500 text-sm">Required</p>}
      </div>

      <div>
        <label className="block font-medium">Contact Number *</label>
        <input {...register("phone", { required: true })} className="input" type="tel" />
        {errors.phone && <p className="text-red-500 text-sm">Required</p>}
      </div>

      <button type="submit" className="btn btn-primary">Next</button>
    </form>
  )
}
