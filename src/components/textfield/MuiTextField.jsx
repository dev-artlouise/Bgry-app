import { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';

const MuiTextField = ({ label, value, setData, error, type }) => {

    const [hasError, setHasError] = useState(!!error)

    const handleChange = (event) => {
        setData(event.target.value);
        setHasError(!!error);
    };

    return (
        <FormControl sx={{ width: '100%' }}>
            <TextField
                type={type}
                error={hasError}
                label={label}
                value={value}
                onChange={handleChange}
                variant="outlined"
            />
        </FormControl>
    )
}

export default MuiTextField

