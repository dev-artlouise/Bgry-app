import React, { useState } from 'react';


import Stepper from '../layouts/Profile/Stepper';

const ProfilePage = () => {

    //field Inputs
    // Basic Information
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState(null);
    const [age, setAge] = useState('')
    const [birthPlace, setBirthPlace] = useState('');
    const [gender, setGender] = useState('');
    const [civilStatus, setCivilStatus] = useState('');
    const [religion, setReligion] = useState('');
    const [tribe, setTribe] = useState('');

    //Contact and Address Info
    const [contactNumber, setContactNumber] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [zone, setZone] = useState('');

    const [error, setError] = useState(false)

    return (
        <Stepper />
    )
}

export default ProfilePage