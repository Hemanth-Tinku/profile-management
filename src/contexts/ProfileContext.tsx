import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ProfileData {
    name: string;
    email: string;
    age: number | null;
}

interface ProfileContextType {
    profileData: ProfileData | null;
    setProfileData: React.Dispatch<React.SetStateAction<ProfileData | null>>;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export const ProfileProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [profileData, setProfileData] = useState<ProfileData | null>(() => {
        const cachedData = localStorage.getItem('profileData');
        return cachedData ? JSON.parse(cachedData) : null;
    });

    return (
        <ProfileContext.Provider value={{ profileData, setProfileData }}>
            {children}
        </ProfileContext.Provider>
    );
};

export const useProfileContext = (): ProfileContextType => {
    const context = useContext(ProfileContext);
    if (context === undefined) {
        throw new Error('useProfileContext must be used within a ProfileProvider');
    }
    return context;
};
