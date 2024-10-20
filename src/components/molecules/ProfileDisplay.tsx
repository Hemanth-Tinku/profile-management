import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useProfileContext } from '../../contexts/ProfileContext';
import '../../styles/ProfileDisplay.css';

const ProfileDisplay: React.FC = () => {
    const { profileData, setProfileData } = useProfileContext();
    const navigate = useNavigate();

    const handleDeleteProfile = () => {
        localStorage.removeItem('profileData');
        setProfileData(null);
    };

    const handleEditProfile = () => {
        navigate('/profile-form');
    };

    if (!profileData) {
        return <p className="noProfileMessage">No profile found. Please create one.</p>;
    }

    return (
        <div className="profileDisplayContainer">
            <h2 className="profileHeading">Profile Details</h2>
            <div className="profileDetails">
                <p><span>Name:</span> {profileData.name}</p>
                <p><span>Email:</span> {profileData.email}</p>
                <p><span>Age:</span> {profileData.age ? profileData.age : 'Not Provided'}</p>
            </div>

            <div className="profileActions">
                <button className="editButton" onClick={handleEditProfile}>
                    Edit
                </button>
                <button className="deleteButton" onClick={handleDeleteProfile}>
                    Delete
                </button>
            </div>
        </div>
    );
};

export default ProfileDisplay;
