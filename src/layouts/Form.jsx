import React from 'react'
import { Divider, Grid, Box } from '@mui/material'

import Container from '@mui/material/Container';

const Form = ({ content }) => {
    return (
        <Box >
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <h1>Create Profile</h1>
                <Divider />
                <Box sx={{ marginTop: 4 }}>
                    <Grid container spacing={2}>
                        {content}
                    </Grid>
                </Box>

            </Container>
        </Box>
    )
}

export default Form