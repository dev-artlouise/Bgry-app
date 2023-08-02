import React from 'react'

import { Stepper, Step, StepLabel } from '@mui/material'

const MuiStepper = ({ activeStep, steps }) => {
    return (
        <>
            <Stepper
                activeStep={activeStep}
                sx={{ pt: 3, pb: 5 }}
            >
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
        </>
    )
}

export default MuiStepper