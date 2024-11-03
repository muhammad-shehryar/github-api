import React, { useState } from 'react';
import axios from 'axios';
import Profile from './components/Profile';
import RepoList from './components/RepoList';

const App = () => {
   const [username, setUsername] = useState('');
   const [profileData, setProfileData] = useState(null);
   const [repoData, setRepoData] = useState([]);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);

   const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
         const profileResponse = await axios.get(`https://api.github.com/users/${username}`);
         const repoResponse = await axios.get(`https://api.github.com/users/${username}/repos`);
         
         setProfileData(profileResponse.data);
         setRepoData(repoResponse.data);
      } catch (error) {
         setError("User not found or API error");
      } finally {
         setLoading(false);
      }
   };

   const handleSearch = (e) => {
      e.preventDefault();
      if (username) fetchData();
   };

   return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
         <h1>GitHub Profile Viewer</h1>
         <form onSubmit={handleSearch}>
            <input
               type="text"
               placeholder="Enter GitHub username"
               value={username}
               onChange={(e) => setUsername(e.target.value)}
            />
            <button type="submit">Search</button>
         </form>
         {loading && <p>Loading...</p>}
         {error && <p style={{ color: 'red' }}>{error}</p>}
         {profileData && <Profile data={profileData} />}
         {repoData.length > 0 && <RepoList repos={repoData} />}
      </div>
   );
};

export default App;
