import React, { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import axios from 'axios';

const EBirdData = () => {
  const [birds, setBirds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBirdData = async () => {
      try {
        const apiKey = import.meta.env.VITE_EBIRD_API_KEY;
        if (!apiKey) {
          setError('eBird API token not found');
          setLoading(false);
          return;
        }

        // Get recent observations (adjust region code or coordinates as needed)
        const response = await axios.get(
          `https://api.ebird.org/v2/data/obs/CA/recent`,
          {
            params: {
              key: apiKey,
              maxResults: 10,
            }
          }
        );
        setBirds(response.data);
      } catch (err) {
        setError('Failed to fetch eBird data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBirdData();
  }, []);

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error}</Alert>;

  return (
    <div style={{ padding: '16px', maxWidth: 600 }}>
      <Typography variant="h5" component="h2" fontWeight="bold" gutterBottom>
        Recent Bird Sightings
      </Typography>
      <List style={{ borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
        {birds.map((bird, index) => (
          <ListItem key={index} className='hover:bg-icitrine'>
            <ListItemText 
              primary={bird.comName} 
              secondary={`${bird.locName} - ${new Date(bird.obsDt).toLocaleDateString()}`}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default EBirdData;