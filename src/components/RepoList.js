import React from 'react';
import RepoItem from './RepoItem';

const RepoList = ({ repos }) => {
   return (
      <div style={{ marginTop: '20px' }}>
         <h3>Repositories</h3>
         {repos.map((repo) => (
            <RepoItem key={repo.id} repo={repo} />
         ))}
      </div>
   );
};

export default RepoList;
