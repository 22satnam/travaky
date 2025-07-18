// src/components/ui/SectionVerticalStepper.tsx
'use client'

import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import StepContent from '@mui/material/StepContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

interface StepItem {
  label: string
  description: string
}

interface SectionVerticalStepperProps {
  active: number
  onStepChange?: (step: number) => void
}

const steps: StepItem[] = [
  { label: 'Basic Details', description: '' },
  { label: 'Personal Details', description: '' },
  { label: 'Employment Info', description: '' },
  { label: 'Travel Info', description: '' },
  { label: 'Plan Selection', description: '' },
  { label: 'Appointment', description: '' },
  { label: 'Payment', description: '' },
]


export default function SectionVerticalStepper({ active, onStepChange }: SectionVerticalStepperProps) {
  const handleNext = () => {
    if (onStepChange) onStepChange(active + 1)
  }

  const handleBack = () => {
    if (onStepChange) onStepChange(active - 1)
  }

  return (
    <Box sx={{ minWidth: 200, maxWidth: 260, pr: 4 }}>
      <Stepper activeStep={active} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel>{step.label}</StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 1, mr: 1 }}
                  disabled={active === steps.length - 1}
                >
                  Continue
                </Button>
                <Button
                  onClick={handleBack}
                  sx={{ mt: 1, mr: 1 }}
                  disabled={active === 0}
                >
                  Back
                </Button>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  )
}
