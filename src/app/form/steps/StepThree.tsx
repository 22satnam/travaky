
// app/form/steps/StepThree.tsx
"use client"

import { useForm } from "react-hook-form"
import { useState } from "react"

export default function StepThree({ data, onNext, onBack }: any) {
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: {
      address: data.address || '',
      residencePermit: data.residencePermit || false,
      residencePermitValidity: data.residencePermitValidity || '',
    }
  })

  const [frontFile, setFrontFile] = useState<File | null>(null)
  const [backFile, setBackFile] = useState<File | null>(null)

  const handleFile = (e: any, setter: Function) => {
    const file = e.target.files[0]
    if (file && file.size <= 6 * 1024 * 1024) {
      setter(file)
    } else {
      alert('File size should be under 6MB')
    }
  }

  const onSubmit = (formValues: any) => {
    onNext({
      ...formValues,
      passportFront: frontFile?.name || 'uploaded',
      passportBack: backFile?.name || 'uploaded',
    })
  }

  const hasPermit = watch('residencePermit')

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <h2 className="text-2xl font-bold">Address & Passport Upload</h2>

      <div>
        <label className="block font-medium">Attach front side of passport *</label>
        <input type="file" required onChange={e => handleFile(e, setFrontFile)} />
      </div>

      <div>
        <label className="block font-medium">Attach back side of passport *</label>
        <input type="file" required onChange={e => handleFile(e, setBackFile)} />
      </div>

      <div>
        <label className="block font-medium">Current Address *</label>
        <textarea {...register("address", { required: true })} className="input" rows={3} />
        {errors.address && <p className="text-red-500 text-sm">Required</p>}
      </div>

      <div className="flex items-center space-x-2">
        <input type="checkbox" {...register("residencePermit")} id="residencePermit" />
        <label htmlFor="residencePermit">Residence Permit</label>
      </div>

      {hasPermit && (
        <div>
          <label className="block font-medium">Resident Permit Validity</label>
          <input {...register("residencePermitValidity")} className="input" type="text" />
        </div>
      )}

      <div className="flex justify-between">
        <button type="button" onClick={onBack} className="btn btn-secondary">Previous</button>
        <button type="submit" className="btn btn-primary">Next</button>
      </div>
    </form>
  )
}