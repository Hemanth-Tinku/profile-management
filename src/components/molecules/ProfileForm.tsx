import UserInput from "../atoms/UserInput";
import { useState } from "react";
import "../../styles/ProfileForm.css";
import { useNavigate } from "react-router-dom";

interface ProfileData {
    name: string;
    email: string;
    age: number | null;
}

interface ErrorMessages {
    name?: string;
    email?: string;
    age?: string;
}

const ProfileForm: React.FC = () => {
    const navigate = useNavigate();
    const [profileData, setProfileData] = useState<ProfileData>({
        name: '',
        email: '',
        age: null,
    });

    const [errMessages, setErrMessages] = useState<ErrorMessages>({});

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, inputName: keyof ProfileData) => {
        setProfileData((prevData) => ({
            ...prevData,
            [inputName]: e.target.value
        }));
    };

    const validateForm = (): boolean => {
        const errors: ErrorMessages = {};

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
        if (profileData.age && isNaN(Number(profileData.age))) {
            errors.age = 'Age must be a valid number';
        }

        setErrMessages(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validateForm()) {
            localStorage.setItem('profileData', JSON.stringify(profileData));

            navigate('/profile');
        }
    };

    return (
        <div className="profileFormContainer">
            <h1 className="formHeading">Profile Management Form</h1>
            <form onSubmit={handleSubmit} className="profileForm">
                <UserInput
                    label={"Name*"}
                    value={profileData.name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, "name")}
                    inputType={"text"}
                    placeholder="Enter your name"
                />
                {!!errMessages.name && <p style={{ color: 'red' }}>{errMessages.name}</p>}

                <UserInput
                    label={"Email*"}
                    value={profileData.email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, "email")}
                    inputType={"email"}
                    placeholder="Enter your email"
                />
                {!!errMessages.email && <p style={{ color: 'red' }}>{errMessages.email}</p>}

                <UserInput
                    label={"Age"}
                    value={profileData.age ? String(profileData.age) : ''}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, "age")}
                    inputType={"number"}
                    placeholder="Enter your age"
                />
                {!!errMessages.age && <p style={{ color: 'red' }}>{errMessages.age}</p>}

                <button type="submit" className="submitButton">Submit</button>
            </form>
        </div>
    );
}

export default ProfileForm;
