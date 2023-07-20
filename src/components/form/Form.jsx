import React from 'react'
import { Divider, Grid, Box } from '@mui/material'
import Container from '@mui/material/Container';

const Form = ({ content, title }) => {
    return (
        <Box >
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <h1>{title}</h1>
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