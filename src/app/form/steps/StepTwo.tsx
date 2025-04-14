"use client"

import { useForm } from "react-hook-form"

export default function StepTwo({ data, onNext, onBack }: any) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      gender: data.gender || '',
      maritalStatus: data.maritalStatus || '',
      dob: data.dob || '',
      nationality: data.nationality || 'India',
      countryOfBirth: data.countryOfBirth || 'India',
      passportNumber: data.passportNumber || '',
    }
  })

  return (
    <form onSubmit={handleSubmit(onNext)} className="space-y-6">
      <h2 className="text-2xl font-bold">Personal Details</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block font-medium">Gender *</label>
          <select {...register("gender", { required: true })} className="input">
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          {errors.gender && <p className="text-red-500 text-sm">Required</p>}
        </div>

        <div>
          <label className="block font-medium">Marital Status *</label>
          <select {...register("maritalStatus", { required: true })} className="input">
            <option value="">Select</option>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
            <option value="Divorced">Divorced</option>
          </select>
          {errors.maritalStatus && <p className="text-red-500 text-sm">Required</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block font-medium">Date of Birth *</label>
          <input type="date" {...register("dob", { required: true })} className="input" />
          {errors.dob && <p className="text-red-500 text-sm">Required</p>}
        </div>
        <div>
          <label className="block font-medium">Nationality *</label>
          <input {...register("nationality", { required: true })} className="input" />
          {errors.nationality && <p className="text-red-500 text-sm">Required</p>}
        </div>
        <div>
          <label className="block font-medium">Country of Birth *</label>
          <input {...register("countryOfBirth", { required: true })} className="input" />
          {errors.countryOfBirth && <p className="text-red-500 text-sm">Required</p>}
        </div>
      </div>

      <div>
        <label className="block font-medium">Passport Number *</label>
        <input {...register("passportNumber", { required: true })} className="input" />
        {errors.passportNumber && <p className="text-red-500 text-sm">Required</p>}
      </div>

      <div className="flex justify-between">
        <button type="button" onClick={onBack} className="btn btn-secondary">Previous</button>
        <button type="submit" className="btn btn-primary">Next</button>
      </div>
    </form>
  )
}
