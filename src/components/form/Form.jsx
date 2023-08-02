import React from 'react'
import { Box, Typography, Grid } from '@mui/material'

const Form = ({ content, title }) => {
    return (
        <>
            <Box mt={1}>
                <form action="">
                    <Typography variant="h6" gutterBottom>
                        {title}
                    </Typography>

                    <Grid container spacing={3}>
                        {content}
                    </Grid>
                </form>
            </Box>

        </>
    )
}

export default Form