import React from 'react'

import Card from '../../components/cards/Card'

import { Grid } from '@mui/material'

const cardData = [
    { id: 1, icon: 'default', title: 'Youths', label: '25' },
    { id: 2, icon: 'default', title: 'Users', label: '20' }
]

const Dashboard = () => {
    return (
        <>
            <Grid container spacing={2}>
                {cardData.map((data) => (
                    <Card
                        icon={data.icon}
                        title={data.title}
                        label={data.label}
                    />
                ))}
            </Grid>
        </>
    )
}

export default Dashboard