import React, { useState } from 'react'

import { Box, Grid } from '@mui/material'

import Form from '../layouts/Form'
import MuiTextField from '../components/textfield/MuiTextField'

const ProfilePage = () => {

    //field Inputs
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [error, setError] = useState(false)

    return (
        <div>
            <Form
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
                                label='Last Name'
                                value={lastName}
                                setData={setLastName}
                            />
                        </Grid>
                    </>
                }
            />
        </div>
    )
}

export default ProfilePage