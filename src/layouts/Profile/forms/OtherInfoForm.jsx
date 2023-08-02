import { useState } from 'react'

import { Grid } from '@mui/material'

import Form from '../../../components/form/Form'
import MuiTextField from '../../../components/textfield/MuiTextField'

const OtherInfoForm = () => {

    const [eduationalAttainment, setEducationalAttainment] = useState('');
    const [occupation, setOccupation] = useState('');
    const [youthSector, setYouthSector] = useState('');
    const [organization, setOrganization] = useState('');
    const [fathersName, setFathersName] = useState('');
    const [fathersOccupation, setFathersOccupation] = useState('');
    const [mothersName, setMothersName] = useState('');
    const [MothersOccupation, setMothersOccupation] = useState('');
    const [isWithParents, setIsWithParents] = useState('');
    const [concerns, setConcerns] = useState('');
    const [error, setError] = useState({});

    return (
        <>
            <Form

                title={'Other Information'}

                content={
                    <>
                        <Grid item xs={12}>
                            <MuiTextField
                                label='Educational Attainment'
                                value={eduationalAttainment}
                                setData={setEducationalAttainment}
                                error={error && true}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <MuiTextField
                                label='Occupation'
                                value={occupation}
                                setData={setOccupation}
                                error={error && true}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <MuiTextField
                                label='Youth Sector'
                                value={youthSector}
                                setData={setYouthSector}
                                error={error && true}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <MuiTextField
                                label='Organization that you are part member'
                                value={organization}
                                setData={setOrganization}
                                error={error && true}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <MuiTextField
                                label='Fathers Name'
                                value={fathersName}
                                setData={setFathersName}
                                error={error && true}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <MuiTextField
                                label='Fathers Occupation'
                                value={fathersOccupation}
                                setData={setFathersOccupation}
                                error={error && true}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <MuiTextField
                                label='Mothers Name'
                                value={mothersName}
                                setData={setMothersOccupation}
                                error={error && true}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <MuiTextField
                                label='Mothers Occupation'
                                value={MothersOccupation}
                                setData={setMothersOccupation}
                                error={error && true}
                            />
                        </Grid>


                        {/* Checkbox */}
                        <Grid item xs={12}>
                            <MuiTextField
                                label='Are You Living With Your Parents'
                                value={isWithParents}
                                setData={setIsWithParents}
                                error={error && true}
                            />
                        </Grid>


                        {/* TextArea */}
                        <Grid item xs={12}>
                            <MuiTextField
                                label='What are your concerns/issues as a youth'
                                value={concerns}
                                setData={setConcerns}
                                error={error && true}
                            />
                        </Grid>

                        {/* Control Number */}

                    </>

                }

            />
        </>
    )
}

export default OtherInfoForm