import React, { useState, useEffect } from 'react';
import ProfileCard from './ProfileCard';
import ProfileService from '../services/ProfileService';

const ProfileList = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    ProfileService.getProfiles().then((response) => {
      setProfiles(response.data);
    });
  }, []);

  return (
    <div>
      {profiles.map((profile) => (
        <ProfileCard key={profile.id} profile={profile} />
      ))}
    </div>
  );
};

export default ProfileList;
