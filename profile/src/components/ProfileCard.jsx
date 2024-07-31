import React from 'react';
import { useHistory } from 'react-router-dom';

const ProfileCard = ({ profile }) => {
  const history = useHistory();

  const viewDetails = () => {
    history.push(`/profile/${profile.id}`);
  };

  return (
    <div>
      <img src={profile.photo} alt={profile.name} />
      <h3>{profile.name}</h3>
      <p>{profile.description}</p>
      <button onClick={viewDetails}>Summary</button>
    </div>
  );
};

export default ProfileCard;
