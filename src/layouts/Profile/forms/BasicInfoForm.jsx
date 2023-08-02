import { useState } from 'react'

import { Box, Grid } from '@mui/material';

import Form from '../../../components/form/Form';
import MuiTextField from '../../../components/textfield/MuiTextField'
import MuiDatePicker from '../../../components/dateField/MuiDatePicker';
import MuiButton from '../../../components/button/MuiButton';

import { civilStatusData } from '../../../data/mockData';

const BasicInfoForm = ({ handleNext }) => {

    // Basic Information Fields
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState(null);
    const [age, setAge] = useState('')
    const [birthPlace, setBirthPlace] = useState('');
    const [gender, setGender] = useState('');
    const [civilStatus, setCivilStatus] = useState('single');
    const [religion, setReligion] = useState('');
    const [tribe, setTribe] = useState('');

    const [error, setError] = useState(false)

    return (
        <>
            <Form

                title='Basic Information'

                content={
                    <>
                        <Grid item xs={12} md={6}>
                            <MuiTextField
                                label='First Name'
                                value={firstName}
                                setData={setFirstName}
                                error={error && true}

                            />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <MuiTextField
                                label='Last Name'
                                value={lastName}
                                setData={setLastName}
                                error={error && true}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <MuiTextField
                                label='Middle Name'
                                value={middleName}
                                setData={setMiddleName}
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <MuiDatePicker
                                label='Date Of Birth'
                                value={dateOfBirth}
                                setData={setDateOfBirth}
                                error={error && true}
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <MuiTextField
                                label='Age'
                                value={age}
                                setData={setAge}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <MuiTextField
                                label='BirthPlace'
                                value={birthPlace}
                                setData={setBirthPlace}
                            />
                        </Grid>

                        {/* Select Component */}
                        <Grid item xs={12}>
                            {civilStatusData.length > 0 && ( // Add this condition
                                <MuiTextField
                                    label='Civil Status'
                                    value={civilStatus}
                                    select={true}
                                    setData={setCivilStatus}
                                    error={error && true}
                                    options={civilStatusData}
                                />
                            )}
                        </Grid>

                        <Grid item xs={12}>
                            <MuiTextField
                                label='Religion'
                                value={religion}
                                setData={setReligion}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <MuiTextField
                                label='Tribe'
                                value={tribe}
                                setData={setTribe}
                            />
                        </Grid>
                    </>
                }
            /></>
    )
}

export default BasicInfoForm