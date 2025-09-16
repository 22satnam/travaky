"use client"

import React, { useState, useRef, useEffect } from 'react'
import { cn } from '@/lib/utils'

interface OTPInputProps {
  length?: number
  value: string
  onChange: (value: string) => void
  disabled?: boolean
  className?: string
  autoFocus?: boolean
}

export function OTPInput({
  length = 6,
  value,
  onChange,
  disabled = false,
  className,
  autoFocus = false
}: OTPInputProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  useEffect(() => {
    if (autoFocus && inputRefs.current[0]) {
      inputRefs.current[0].focus()
    }
  }, [autoFocus])

  const handleChange = (index: number, inputValue: string) => {
    const newValue = value.split('')
    
    // Handle paste
    if (inputValue.length > 1) {
      const pastedValue = inputValue.slice(0, length)
      const newOtp = pastedValue.split('')
      while (newOtp.length < length) {
        newOtp.push('')
      }
      onChange(newOtp.join(''))
      
      // Focus the next empty input or the last input
      const nextIndex = Math.min(pastedValue.length, length - 1)
      inputRefs.current[nextIndex]?.focus()
      setActiveIndex(nextIndex)
      return
    }

    // Handle single character input
    if (inputValue.match(/^\d$/)) {
      newValue[index] = inputValue
      onChange(newValue.join(''))
      
      // Move to next input
      if (index < length - 1) {
        inputRefs.current[index + 1]?.focus()
        setActiveIndex(index + 1)
      }
    } else if (inputValue === '') {
      newValue[index] = ''
      onChange(newValue.join(''))
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace') {
      if (value[index]) {
        // Clear current input
        const newValue = value.split('')
        newValue[index] = ''
        onChange(newValue.join(''))
      } else if (index > 0) {
        // Move to previous input and clear it
        const newValue = value.split('')
        newValue[index - 1] = ''
        onChange(newValue.join(''))
        inputRefs.current[index - 1]?.focus()
        setActiveIndex(index - 1)
      }
    } else if (e.key === 'ArrowLeft' && index > 0) {
      inputRefs.current[index - 1]?.focus()
      setActiveIndex(index - 1)
    } else if (e.key === 'ArrowRight' && index < length - 1) {
      inputRefs.current[index + 1]?.focus()
      setActiveIndex(index + 1)
    }
  }

  const handleFocus = (index: number) => {
    setActiveIndex(index)
  }

  return (
    <div className={cn("flex gap-2 justify-center", className)}>
      {Array.from({ length }, (_, index) => (
        <input
          key={index}
          ref={(el) => {
            inputRefs.current[index] = el
          }}
          type="text"
          inputMode="numeric"
          pattern="\d*"
          maxLength={1}
          value={value[index] || ''}
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          onFocus={() => handleFocus(index)}
          disabled={disabled}
          className={cn(
            "w-12 h-12 text-center text-lg font-semibold",
            "border border-input rounded-md",
            "focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent",
            "disabled:cursor-not-allowed disabled:opacity-50",
            "transition-colors",
            activeIndex === index && "ring-2 ring-ring border-transparent"
          )}
          aria-label={`OTP digit ${index + 1}`}
        />
      ))}
    </div>
  )
}
