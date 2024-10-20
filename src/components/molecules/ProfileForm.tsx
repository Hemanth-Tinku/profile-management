import React, { useState } from 'react';
import UserInput from "../atoms/UserInput";
import "../../styles/ProfileForm.css";
import { useNavigate } from "react-router-dom";
import { useProfileContext } from '../../contexts/ProfileContext';

interface ErrorMessages {
    name?: string;
    email?: string;
    age?: string;
}

const ProfileForm: React.FC = () => {
    const navigate = useNavigate();
    const { profileData, setProfileData } = useProfileContext();
    
    const [currentProfileData, setCurrentProfileData] = useState(() => profileData || {
        name: '',
        email: '',
        age: null,
    });

    const [errMessages, setErrMessages] = useState<ErrorMessages>({});
    const [apiError, setApiError] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, inputName: keyof typeof currentProfileData) => {
        setCurrentProfileData((prevData) => ({
            ...prevData,
            [inputName]: e.target.value
        }));
    };

    const validateForm = (): boolean => {
        const errors: ErrorMessages = {};

        if (currentProfileData.name.length < 3) {
            errors.name = 'Name must be at least 3 characters';
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(currentProfileData.email)) {
            errors.email = 'Email must be a valid email address';
        }

        if (currentProfileData.age && isNaN(Number(currentProfileData.age))) {
            errors.age = 'Age must be a valid number';
        }

        setErrMessages(errors);
        return Object.keys(errors).length === 0;
    };

    const mockApiCall = (data: typeof currentProfileData) => {
        return new Promise<{ success: boolean }>((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() < 0.2) {
                    reject({ error: 'Server error occurred!' });
                } else {
                    resolve({ success: true });
                }
            }, 1000);
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validateForm()) {
            setIsSubmitting(true);
            setApiError(null);

            try {
                const response = await mockApiCall(currentProfileData);
                if (response.success) {
                    localStorage.setItem('profileData', JSON.stringify(currentProfileData));
                    setProfileData(currentProfileData);
                    navigate('/profile');
                }
            } catch (error: any) {
                setApiError(error.error || 'Failed to save profile data.');
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    return (
        <div className="profileFormContainer">
            <form onSubmit={handleSubmit} className="profileForm">
                <UserInput
                    label={"Name*"}
                    value={currentProfileData.name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, "name")}
                    inputType={"text"}
                    placeholder="Enter your name"
                />
                {!!errMessages.name && <p style={{ color: 'red' }}>{errMessages.name}</p>}

                <UserInput
                    label={"Email*"}
                    value={currentProfileData.email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, "email")}
                    inputType={"email"}
                    placeholder="Enter your email"
                />
                {!!errMessages.email && <p style={{ color: 'red' }}>{errMessages.email}</p>}

                <UserInput
                    label={"Age"}
                    value={currentProfileData.age ? String(currentProfileData.age) : ''}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, "age")}
                    inputType={"number"}
                    placeholder="Enter your age"
                />
                {!!errMessages.age && <p style={{ color: 'red' }}>{errMessages.age}</p>}

                {apiError && <p style={{ color: 'red' }}>{apiError}</p>}
                <button type="submit" className="submitButton" disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
            </form>
        </div>
    );
}

export default ProfileForm;
