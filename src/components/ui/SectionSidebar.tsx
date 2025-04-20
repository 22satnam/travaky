'use client'

import { cn } from '@/lib/utils'

interface SectionSidebarProps {
  currentStep: number
  completedSteps: number[]
  onNavigate: (step: number) => void
  isStepDisabled: (step: number) => boolean
}

const sectionLabels = [
  'Basic Info',
  'Personal Details',
  'Employment Info',
  'Travel Info',
  'Plan Selection',
  'Appointment',
  'Payment',
]

export function SectionSidebar({
  currentStep,
  completedSteps,
  onNavigate,
  isStepDisabled,
}: SectionSidebarProps) {
  return (
    <div className="w-full flex flex-col gap-3">
      {sectionLabels.map((label, index) => {
        const isActive = index === currentStep
        const isCompleted = completedSteps.includes(index)
        const isDisabled = isStepDisabled(index)

        return (
          <button
            key={index}
            disabled={isDisabled}
            onClick={() => onNavigate(index)}
            className={cn(
              'flex items-center gap-3 p-3 rounded-md border transition-all text-left',
              isDisabled && 'opacity-50 cursor-not-allowed',
              isActive && 'border-blue-600 bg-blue-50',
              isCompleted && 'border-green-600 bg-green-50'
            )}
          >
            <span
              className={cn(
                'w-6 h-6 rounded-full flex items-center justify-center font-medium text-white text-xs shrink-0',
                isCompleted ? 'bg-green-600' : isActive ? 'bg-blue-600' : 'bg-muted text-muted-foreground'
              )}
            >
              {index + 1}
            </span>
            <span className="text-sm font-medium">{label}</span>
          </button>
        )
      })}
    </div>
  )
}
