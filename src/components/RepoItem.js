import React from 'react';

const RepoItem = ({ repo }) => {
   return (
      <div style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px' }}>
         <h4><a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a></h4>
         <p>{repo.description}</p>
         <p><strong>Language:</strong> {repo.language}</p>
         <p><strong>Stars:</strong> {repo.stargazers_count} | <strong>Forks:</strong> {repo.forks_count}</p>
      </div>
   );
};

export default RepoItem;
