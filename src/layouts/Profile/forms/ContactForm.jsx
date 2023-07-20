import { useState } from 'react'

import { Box, Grid, useStepContext } from '@mui/material';

import Form from '../../../components/form/Form';
import MuiTextField from '../../../components/textfield/MuiTextField'
import MuiDatePicker from '../../../components/dateField/MuiDatePicker';
import MuiButton from '../../../components/button/MuiButton';

const ContactForm = ({ handleNext, handleBack }) => {

    // Basic Information Fields
    const [contactNumber, setContactNumber] = useState('');
    const [address, setAddress] = useState('');
    const [zone, setZone] = useState('');
    const [email, setEmail] = useState('');

    const [error, setError] = useState('')

    return (
        <>
            <Form

                title='Contact and Address'

                content={
                    <>
                        <Grid item xs={4}>
                            <MuiTextField
                                error={error && true}
                                label='Contact Number'
                                value={contactNumber}
                                setData={setContactNumber}
                            />
                        </Grid>

                        <Grid item xs={4}>
                            <MuiTextField
                                error={error && true}
                                label='Email Address'
                                value={email}
                                setData={setEmail}
                            />
                        </Grid>

                        <Grid item xs={4}>
                            <MuiTextField
                                error={error && true}
                                label='Address'
                                value={address}
                                setData={setAddress}
                            />
                        </Grid>

                        <Grid item xs={4}>
                            <MuiTextField
                                label='Zone'
                                value={zone}
                                setData={setZone}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <MuiButton
                                label='Back'
                                variant='outlined'
                                color='primary'
                                onClick={handleBack}
                            />

                            <MuiButton
                                label='Next'
                                variant='contained'
                                color='primary'
                                onClick={handleNext}
                            />
                        </Grid>
                    </>
                }
            /></>
    )
}

export default ContactForm