"use client"

import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { OTPInput } from "@/components/ui/otp-input"
import { ArrowLeft } from "lucide-react"

type AuthStep = 'details' | 'otp'
type AuthMode = 'login' | 'signup'

interface AuthDialogProps {
  mode: AuthMode
  trigger?: React.ReactNode
  onSuccess?: () => void
}

export function AuthDialog({ mode, trigger, onSuccess }: AuthDialogProps) {
  const [step, setStep] = useState<AuthStep>('details')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [otp, setOtp] = useState('')
  const [open, setOpen] = useState(false)
  
  const [formData, setFormData] = useState({
    emailOrPhone: '',
    firstname: '',
    lastname: ''
  })

  const resetForm = () => {
    setStep('details')
    setLoading(false)
    setError('')
    setOtp('')
    setFormData({ emailOrPhone: '', firstname: '', lastname: '' })
  }

  const isEmail = (value: string) => {
    return value.includes('@') && value.includes('.')
  }

  const handleSendOTP = async () => {
    setLoading(true)
    setError('')
    
    try {
      const isEmailInput = isEmail(formData.emailOrPhone)
      const endpoint = `/api/auth/${isEmailInput ? 'email' : 'sms'}-otp/request`
      const payload = {
        purpose: mode,
        ...(isEmailInput 
          ? { email: formData.emailOrPhone }
          : { phone: formData.emailOrPhone }
        ),
        ...(mode === 'signup' && { name: `${formData.firstname} ${formData.lastname}`.trim() })
      }

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })

      const data = await res.json()
      
      if (!res.ok) {
        setError(data.error || 'Failed to send OTP')
      } else {
        setStep('otp')
      }
    } catch (err) {
      setError('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleVerifyOTP = async () => {
    if (otp.length !== 6) {
      setError('Please enter a valid 6-digit code')
      return
    }

    setLoading(true)
    setError('')
    
    try {
      const isEmailInput = isEmail(formData.emailOrPhone)
      const endpoint = `/api/auth/${isEmailInput ? 'email' : 'sms'}-otp/verify`
      const payload = {
        code: otp,
        purpose: mode,
        ...(isEmailInput 
          ? { email: formData.emailOrPhone }
          : { phone: formData.emailOrPhone }
        ),
        ...(mode === 'signup' && { 
          firstname: formData.firstname,
          lastname: formData.lastname 
        })
      }

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })

      const data = await res.json()
      
      if (!res.ok) {
        setError(data.error || 'Invalid verification code')
      } else {
        setOpen(false)
        resetForm()
        onSuccess?.()
        window.location.reload()
      }
    } catch (err) {
      setError('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleBack = () => {
    if (step === 'otp') setStep('details')
  }

  const renderDetailsForm = () => (
    <div className="space-y-4">
      {mode === 'signup' && (
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-2">
            <Label htmlFor="firstname">First name</Label>
            <Input
              id="firstname"
              value={formData.firstname}
              onChange={(e) => setFormData(prev => ({ ...prev, firstname: e.target.value }))}
              placeholder="John"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastname">Last name</Label>
            <Input
              id="lastname"
              value={formData.lastname}
              onChange={(e) => setFormData(prev => ({ ...prev, lastname: e.target.value }))}
              placeholder="Doe"
              required
            />
          </div>
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="emailOrPhone">Email or Phone</Label>
        <Input
          id="emailOrPhone"
          value={formData.emailOrPhone}
          onChange={(e) => setFormData(prev => ({ ...prev, emailOrPhone: e.target.value }))}
          placeholder="john@example.com or +1234567890"
          required
        />
        <p className="text-xs text-muted-foreground">
          We'll send your verification code via Email, SMS, or WhatsApp
        </p>
      </div>

      {error && (
        <p className="text-sm text-red-500 text-center">{error}</p>
      )}

      <Button 
        onClick={handleSendOTP} 
        className="w-full" 
        disabled={loading || !formData.emailOrPhone}
      >
        {loading ? 'Sending...' : `Continue`}
      </Button>
    </div>
  )

  const renderOTPVerification = () => (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-4">
        <Button variant="ghost" size="sm" onClick={handleBack}>
          <ArrowLeft className="w-4 h-4" />
        </Button>
        <span className="font-medium">Enter verification code</span>
      </div>

      <div className="text-center space-y-2">
        <p className="text-sm text-muted-foreground">
          We sent a 6-digit code to
        </p>
        <p className="font-medium">
          {formData.emailOrPhone}
        </p>
      </div>

      <div className="space-y-4">
        <OTPInput
          value={otp}
          onChange={setOtp}
          autoFocus
          disabled={loading}
        />

        {error && (
          <p className="text-sm text-red-500 text-center">{error}</p>
        )}

        <Button 
          onClick={handleVerifyOTP}
          className="w-full" 
          disabled={loading || otp.length !== 6}
        >
          {loading ? 'Verifying...' : 'Verify & Continue'}
        </Button>

        <div className="text-center">
          <button
            onClick={handleSendOTP}
            disabled={loading}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Didn't receive the code? Resend
          </button>
        </div>
      </div>
    </div>
  )

  return (
    <Dialog open={open} onOpenChange={(newOpen) => {
      setOpen(newOpen)
      if (!newOpen) resetForm()
    }}>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="outline">
            {mode === 'login' ? 'Sign In' : 'Sign Up'}
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">
            {mode === 'login' ? 'Welcome back' : 'Create your account'}
          </DialogTitle>
          <DialogDescription className="text-center">
            {mode === 'login' 
              ? 'Sign in to access your Travaky dashboard'
              : 'Join Travaky to start your visa journey'
            }
          </DialogDescription>
        </DialogHeader>

        <div className="mt-6">
          {step === 'details' && renderDetailsForm()}
          {step === 'otp' && renderOTPVerification()}
        </div>

        <div className="text-center text-xs text-muted-foreground mt-6">
          By continuing, you agree to our{' '}
          <a href="#" className="underline hover:no-underline">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="#" className="underline hover:no-underline">
            Privacy Policy
          </a>
        </div>
      </DialogContent>
    </Dialog>
  )
}
