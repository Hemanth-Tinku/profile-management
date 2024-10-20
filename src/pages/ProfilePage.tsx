import React from 'react';
import ProfileDisplay from '../components/molecules/ProfileDisplay';
import { useProfileContext } from '../contexts/ProfileContext';
import Navbar from '../components/organisms/Navbar';
import { useNavigate } from 'react-router-dom';
import "../styles/ProfileDisplay.css"

const Profile: React.FC = () => {
    const { profileData } = useProfileContext();
    const navigate = useNavigate(); // Initialize useNavigate

    const handleCreateProfile = () => {
        navigate('/profile-form'); // Navigate to the profile form
    };

    return (
        <div>
            <Navbar />
            <h1>Your Profile</h1>
            {profileData ? (
                <ProfileDisplay />
            ) : (
                <div>
                    <p>No profile found. Please create one.</p>
                    <button onClick={handleCreateProfile} className="createProfileButton">
                        Create Profile
                    </button>
                </div>
            )}
        </div>
    );
};

export default Profile;
