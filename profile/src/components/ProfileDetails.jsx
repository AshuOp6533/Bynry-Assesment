import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProfileService from '../services/ProfileService';
import Map from './Map';

const ProfileDetails = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    ProfileService.getProfileById(id).then((response) => {
      setProfile(response.data);
    });
  }, [id]);

  if (!profile) return <div>Loading...</div>;

  return (
    <div>
      <img src={profile.photo} alt={profile.name} />
      <h3>{profile.name}</h3>
      <p>{profile.description}</p>
      <Map address={profile.address} />
    </div>
  );
};

export default ProfileDetails;
