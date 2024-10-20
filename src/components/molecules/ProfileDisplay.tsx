import React, { useState } from 'react';
import '../../styles/ProfileDisplay.css';

const ProfileDisplay: React.FC = () => {
    const cachedData = localStorage.getItem('profileData');
    const [profileData, setProfileData] = useState(cachedData ? JSON.parse(cachedData) : null);

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
        </div>
    );
};

export default ProfileDisplay;
