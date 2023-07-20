import React, { useState } from 'react';


import Stepper from '../layouts/Profile/Stepper';

const ProfilePage = () => {
    const [error, setError] = useState(false)

    return (
        <Stepper />
    )
}

export default ProfilePage