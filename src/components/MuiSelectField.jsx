import React from 'react'
import { Select, FormControl, MenuItem, InputLabel } from '@mui/material'

const SelectField = ({ InputLabel, label, value, setData, menuValue }) => {
    return (
        <div>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{InputLabel}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    label={label}
                    onChange={setData}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}

export default SelectField
