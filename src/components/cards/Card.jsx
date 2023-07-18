import React from 'react'
import {
    Box,
    Icon,
    Grid,
    Paper,
    Typography,
} from '@mui/material'

const Card = ({ icon, title, value }) => {

    const iconStyles = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '3rem', // Adjust the size as desired
        marginBottom: '8px',
    };

    return (
        <>
            <Paper
                elevation={2}
                sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 100,
                }}
            >
                <Grid container>
                    {/* <Grid item xs={6}>
                        <Box sx={ } >
                            {icon}
                        </Box>
                    </Grid> */}

                    <Grid item xs={6}>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                fontSize: '3rem', // Adjust the size as desired
                                marginBottom: '8px',
                            }}
                        >
                            {icon}
                        </Box>
                    </Grid>


                    <Grid item xs={6}>
                        <Typography gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>

                        <Typography gutterBottom variant="h5" component="div">
                            {value}
                        </Typography>
                    </Grid>
                </Grid>

            </Paper>
        </>
    )
}

export default Card