import React, { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import Typography from '@mui/material/Typography';

const GitHubRepos = () => {
  const [repos, setRepos] = useState([]);
  const username = 'MaryBrantnall';

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then((response) => response.json())
      .then((data) => {
        
        const filteredRepos = data.filter((repo) =>
          ['SimpleTileGame', 'webd5015-project-duedogs', 'portfolio-website', 'NN-Web', 'Willow-Clicker'].includes(repo.name)
        );
        setRepos(filteredRepos);
      })
      .catch((error) => console.error('Error fetching repos:', error));
  }, [username]);

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '16px' }}>
      <Typography variant="h4" component="h1" fontWeight="bold" gutterBottom>
        GitHub Projects:
      </Typography>
      <List className="bg-zomp text"style={{ width: '100%', maxWidth: 600, borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
        {repos.map((repo) => (
          <ListItem className='hover:bg-icitrine'key={repo.id} disablePadding>
            <ListItemButton component="a" href={repo.html_url} target="_blank">
              <ListItemText primary={repo.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default GitHubRepos;