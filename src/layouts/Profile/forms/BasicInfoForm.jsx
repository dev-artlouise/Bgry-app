import { useState } from 'react'

import { Box, Grid } from '@mui/material';

import Form from '../../../components/form/Form';
import MuiTextField from '../../../components/textfield/MuiTextField'
import MuiDatePicker from '../../../components/dateField/MuiDatePicker';
import MuiButton from '../../../components/button/MuiButton';

import { civilStatusData } from '../../../data/mockData';

const BasicInfoForm = ({ handleChange, data, setData }) => {

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
                                value={data.firstName}
                                setData={e => handleChange('firstName', e.target.value)}
                                error={error && true}
                            />
                            {/* {data.firstName} */}
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <MuiTextField
                                label='Last Name'
                                value={data.lastName}
                                setData={e => handleChange('lastName', e.target.value)}
                                error={error && true}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <MuiTextField
                                label='Middle Name'
                                value={setData.setMiddleName}
                                setData={e => handleChange('middleName', e.target.value)}
                            />
                        </Grid>

                        {/* <Grid item xs={6}>
                            <MuiDatePicker
                                label='Date Of Birth'
                                value={data.dateOfBirth}
                                setData={setData.setDateOfBirth}
                                error={error && true}
                            />
                        </Grid> */}

                        <Grid item xs={6}>
                            <MuiTextField
                                label='Age'
                                value={data.age}
                                setData={e => handleChange('age', e.target.value)}
                                disabled={true}

                            />
                        </Grid>

                        <Grid item xs={12}>
                            <MuiTextField
                                label='BirthPlace'
                                value={data.birthPlace}
                                setData={e => handleChange('birthPlace', e.target.value)}
                            />
                        </Grid>

                        {/* Select Component */}
                        <Grid item xs={12}>
                            {civilStatusData.length > 0 && ( // Add this condition
                                <MuiTextField
                                    label='Civil Status'
                                    value={data.civilStatus}
                                    select={true}
                                    setData={setData.civilStatus}
                                    error={error && true}
                                    options={civilStatusData}
                                />
                            )}
                        </Grid>

                        <Grid item xs={12}>
                            <MuiTextField
                                label='Religion'
                                value={data.religion}
                                setData={e => handleChange('religion', e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <MuiTextField
                                label='Tribe'
                                value={data.tribe}
                                setData={e => handleChange('tribe', e.target.value)}
                            />
                        </Grid>
                    </>
                }
            /></>
    )
}

export default BasicInfoForm