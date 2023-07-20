import React from 'react'
import { Button } from '@mui/material'

const MuiButton = ({ label, variant, color, onClick }) => {
    return (
        <Button variant={variant} color={color} onClick={onClick}>
            {label}
        </Button>
    )
}

export default MuiButton