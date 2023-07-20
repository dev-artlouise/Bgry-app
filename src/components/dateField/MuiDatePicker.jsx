import { useState } from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const MuiDatePicker = ({ label, value, setData, error }) => {
    const [hasError, setHasError] = useState(!!error);

    const handleDateChange = (date) => {
        setData(date);
        console.log(date)
        setHasError(!date)
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker sx={{ width: '100%' }}
                label={label}
                value={value}
                onChange={handleDateChange}
                error={hasError}
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
    );
};

export default MuiDatePicker;
