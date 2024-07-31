import React, { useState, useEffect } from 'react';
import ProfileService from '../services/ProfileService';

const AdminPanel = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    ProfileService.getProfiles().then((response) => {
      setProfiles(response.data);
    });
  }, []);

  const deleteProfile = (id) => {
    ProfileService.deleteProfile(id).then(() => {
      setProfiles(profiles.filter((profile) => profile.id !== id));
    });
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <button>Add Profile</button>
      <ul>
        {profiles.map((profile) => (
          <li key={profile.id}>
            {profile.name}
            <button>Edit</button>
            <button onClick={() => deleteProfile(profile.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
