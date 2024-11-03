import React from 'react';

const Profile = ({ data }) => {
   return (
      <div style={{ border: '1px solid #ccc', padding: '20px', marginTop: '20px' }}>
         <img src={data.avatar_url} alt="avatar" width="100" style={{ borderRadius: '50%' }} />
         <h2>{data.name}</h2>
         <p>{data.bio}</p>
         <p><strong>Followers:</strong> {data.followers} | <strong>Following:</strong> {data.following}</p>
         <p><strong>Public Repos:</strong> {data.public_repos}</p>
      </div>
   );
};

export default Profile;
