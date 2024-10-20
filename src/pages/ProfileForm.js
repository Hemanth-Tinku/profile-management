import UserInput from "../components/atoms/UserInput"
import { useState } from "react";
import "../styles/ProfileForm.css";

const ProfileForm = () => {
    const [profileData, setProfileData] = useState({
        name: '',
        email: '',
        age: null
    })

    const [errMessages, setErrMessages] = useState({});

    const handleInputChange = (e, inputName) => setProfileData((prevData) => ({
        ...prevData,
        [inputName]: e.target.value
    }))

    const validateForm = () => {
        const errors = {};

        // Name validation
        if (profileData.name.length < 3) {
            errors.name = 'Name must be at least 3 characters';
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(profileData.email)) {
            errors.email = 'Email must be a valid email address';
        }

        // Age validation (optional)
        if (profileData.age && isNaN(profileData.age)) {
            errors.age = 'Age must be a valid number';
        }

        setErrMessages(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            localStorage.setItem('profileData', JSON.stringify(profileData))
        }
    };


    return (
        <form onSubmit={handleSubmit} className="profileForm">
            <UserInput label={"Name"} value={profileData.name} onChange={(e) => handleInputChange(e, "name")} inputType={"text"} placeholder="Enter your name" />
            {!!errMessages.name && <p style={{ color: 'red' }}>{errMessages.name}</p>}
            <UserInput label={"Email"} value={profileData.email} onChange={(e) => handleInputChange(e, "email")} inputType={"email"} placeholder="Enter your email" />
            {!!errMessages.email && <p style={{ color: 'red' }}>{errMessages.email}</p>}
            <UserInput label={"Age"} value={profileData.age} onChange={(e) => handleInputChange(e, "age")} inputType={"number"} placeholder="Enter your age" />
            {!!errMessages.age && <p style={{ color: 'red' }}>{errMessages.age}</p>}
            <button type="submit" className="submitButton">Submit</button>
        </form>
    )
}

export default ProfileForm;