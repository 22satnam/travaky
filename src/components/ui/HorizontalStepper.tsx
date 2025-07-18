'use client'
import * as React from 'react'
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

interface HorizontalStepperProps {
  steps: string[]
  activeStep: number
  onStepChange?: (step: number) => void
  travelerCount?: number
}

export default function HorizontalStepper({
  steps,
  activeStep,
  onStepChange,
  travelerCount,
}: HorizontalStepperProps) {
  const [internalStep, setInternalStep] = React.useState(activeStep)

  React.useEffect(() => {
    setInternalStep(activeStep)
  }, [activeStep])

  const handleNext = () => {
    if (onStepChange) onStepChange(internalStep + 1)
    setInternalStep((prev) => prev + 1)
  }
  const handleBack = () => {
    if (onStepChange) onStepChange(internalStep - 1)
    setInternalStep((prev) => prev - 1)
  }
  const handleReset = () => {
    if (onStepChange) onStepChange(0)
    setInternalStep(0)
  }

  return (
    <Box sx={{ width: '100%' }}>
      {/* Traveler count bar */}
      {typeof travelerCount === 'number' && (
        <Box
          sx={{
            mb: 2,
            px: 2,
            py: 1,
            bgcolor: 'primary.main',
            color: 'primary.contrastText',
            borderRadius: 1,
            fontWeight: 500,
            display: 'inline-block',
          }}
        >
          Number of travelers: {travelerCount}
        </Box>
      )}
      <Stepper activeStep={internalStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box sx={{ mt: 2 }}>
        {internalStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you're finished
            </Typography>
            <Button onClick={handleReset}>Reset</Button>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              Step {internalStep + 1}: {steps[internalStep]}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={internalStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleNext}>
                {internalStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Box>
    </Box>
  )
}
