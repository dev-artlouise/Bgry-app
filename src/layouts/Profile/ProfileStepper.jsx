import { useState } from 'react'

import {
    Box,
    Typography,
    Container,
    Paper,
} from '@mui/material'

import BasicInfoForm from './forms/BasicInfoForm'
import ContactForm from './forms/ContactForm'
import OtherInfoForm from './forms/OtherInfoForm'

import MuiButton from '../../components/button/MuiButton'
import MuiStepper from '../../components/stepper/MuiStepper'

const ProfileStepper = () => {

    const [profileData, setProfileData] = useState({
        firstName: "",
        lastName: "",
        middleName: "",
        dateOfBirth: "",
        age: "36",
        birthPlace: "",
        gender: "",
        civilStatus: "",
        religion: "",
        tribe: ""
    });

    const [activeStep, setActiveStep] = useState(0);

    const steps = ['Basic Information', 'Contact', 'Other Information', 'Review']


    // handle input Change
    const handleChange = (property, value) => {
        setProfileData(prevData => ({
            ...prevData,
            [property]: value
        }));
    };

    const getStep = (step) => {
        switch (step) {
            case 0: return <BasicInfoForm data={profileData} handleChange={handleChange} setData={setProfileData} />;
            case 1: return <ContactForm />;
            case 2: return <OtherInfoForm />;
            case 3: return <>{'Review Page'}</>;
            default: throw new Error('Unknown step');
        }
    }

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    }

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    }

    const handleSubmit = () => {
        console.log('working')
    }

    return (
        <>
            <Container
                component='main'
                maxWidth='sm' sx={{ mb: 4 }}
            >
                <Paper
                    variant="outlined"
                    sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
                >

                    <form onSubmit={handleSubmit}>
                        <Typography
                            component="h1"
                            variant="h4"
                            align="center">
                            Profile
                        </Typography>

                        <MuiStepper activeStep={activeStep} steps={steps} />

                        {getStep(activeStep)}

                        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                            {activeStep !== 0 && (
                                <Box sx={{ mt: 3, ml: 1 }}>
                                    <MuiButton onClick={handleBack} label='Back' />
                                </Box>

                            )}

                            <Box sx={{ mt: 3, ml: 1 }}>
                                <MuiButton
                                    variant='contained'
                                    onClick={handleNext}
                                    label={activeStep === steps.length - 1 ? 'Complete Review' : 'Next'}
                                    type={activeStep === steps.length - 1 ? 'submit' : null}
                                />
                            </Box>
                        </Box>

                    </form>

                </Paper>
            </Container >

        </>
    )
}

export default ProfileStepper