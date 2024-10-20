import React from 'react';
import ProfileForm from '../components/molecules/ProfileForm';
import { useProfileContext } from '../contexts/ProfileContext';
import Navbar from '../components/organisms/Navbar';

const ProfileFormPage: React.FC = () => {
    const { profileData } = useProfileContext();

    return (
        <div>
            <Navbar />
            <h1>{profileData ? 'Update Your Profile' : 'Create Your Profile'}</h1>
            <ProfileForm />
        </div>
    );
};

export default ProfileFormPage;
