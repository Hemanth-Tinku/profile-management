import React, { useEffect, useState } from 'react';

const ProfilePage = () => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data = localStorage.getItem('profileData');
    setProfileData(JSON.parse(data));
    setLoading(false);
  }, []);

  if (loading) {
    return <p>Loading profile...</p>; // Show loading state
  }

  return (
    <div>
      <h1>Profile Details</h1>
      <div>
        <p><strong>Name:</strong> {profileData.name}</p>
        <p><strong>Email:</strong> {profileData.email}</p>
        {!!profileData.age && <p><strong>Age:</strong> {profileData.age}</p>}
      </div>
    </div>
  );
};

export default ProfilePage;
