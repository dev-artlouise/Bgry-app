import React from 'react'
import BasicInfoForm from './forms/BasicInfoForm'
import ContactForm from './forms/ContactForm'

const Stepper = () => {

    const handleNext = () => {
        console.log('next')
    }

    const handleBack = () => {
        console.log('back')
    }

    return (
        <>
            <h1>Profile Page</h1>
            <BasicInfoForm handleNext={handleNext} />
            <ContactForm handleNext={handleNext} handleBack={handleBack} />
        </>
    )
}

export default Stepper