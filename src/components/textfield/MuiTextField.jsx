import { useState, useEffect } from 'react';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { MenuItem } from '@mui/material';

const MuiTextField = ({
    label,
    value,
    setData,
    error,
    type,
    select,
    disabled = false,
    options = [],
}) => {

    // console.log('Options:', options); // Add this line to check the options prop
    // ... rest of the component

    const [hasError, setHasError] = useState(!!error);

    // Update the error state when the `error` prop changes
    useEffect(() => {
        setHasError(!!error);
    }, [error]);

    // const [hasError, setHasError] = useState(!!error)
    return (
        <FormControl sx={{ width: '100%' }}>
            <TextField
                required
                select={select}
                type={type}
                // error={hasError}
                label={label}
                value={value}
                onChange={setData}
                disabled={disabled}
                variant="outlined"
            >
                {options?.map((option) => (
                    <MenuItem key={option.id} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
        </FormControl>
    )
}

export default MuiTextField

