import React, { useState } from 'react';
import ProfileStepper from '../layouts/Profile/ProfileStepper';

const ProfilePage = () => {
    const [error, setError] = useState(false)

    return (
        <ProfileStepper />
    )
}

export default ProfilePage