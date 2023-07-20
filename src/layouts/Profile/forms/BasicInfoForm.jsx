import { useState } from 'react'

import { Box, Grid, useStepContext } from '@mui/material';

import Form from '../../../components/form/Form';
import MuiTextField from '../../../components/textfield/MuiTextField'
import MuiDatePicker from '../../../components/dateField/MuiDatePicker';
import MuiButton from '../../../components/button/MuiButton';


const BasicInfoForm = ({ handleNext }) => {

    // Basic Information Fields
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState(null);
    const [age, setAge] = useState('')
    const [birthPlace, setBirthPlace] = useState('');
    const [gender, setGender] = useState('');
    const [civilStatus, setCivilStatus] = useState('');
    const [religion, setReligion] = useState('');
    const [tribe, setTribe] = useState('');

    const [error, setError] = useState('')

    return (
        <>
            <Form

                title='Basic Information'

                content={
                    <>
                        <Grid item xs={4}>
                            <MuiTextField
                                error={error && true}
                                label='First Name'
                                value={firstName}
                                setData={setFirstName}
                            />
                        </Grid>

                        <Grid item xs={4}>
                            <MuiTextField
                                error={error && true}
                                label='Last Name'
                                value={lastName}
                                setData={setLastName}
                            />
                        </Grid>

                        <Grid item xs={4}>
                            <MuiTextField
                                label='Middle Name'
                                value={middleName}
                                setData={setMiddleName}
                            />
                        </Grid>

                        <Grid item xs={4}>
                            <MuiDatePicker
                                error={error && true}
                                label='Date Of Birth'
                                value={dateOfBirth}
                                setData={setDateOfBirth}
                                type='date'
                            />
                        </Grid>

                        <Grid item xs={4}>
                            <MuiTextField
                                label='Age'
                                value={age}
                                setData={setAge}
                            />
                        </Grid>

                        <Grid item xs={4}>
                            <MuiTextField
                                label='BirthPlace'
                                value={birthPlace}
                                setData={setBirthPlace}
                            />
                        </Grid>

                        <Grid item xs={4}>
                            <MuiTextField
                                label='Civil Status'
                                value={civilStatus}
                                setData={setCivilStatus}
                            />
                        </Grid>

                        <Grid item xs={4}>
                            <MuiTextField
                                label='Religion'
                                value={religion}
                                setData={setReligion}
                            />
                        </Grid>

                        <Grid item xs={4}>
                            <MuiTextField
                                label='Tribe'
                                value={tribe}
                                setData={setTribe}
                            />
                        </Grid>

                        <Grid item>
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

export default BasicInfoForm