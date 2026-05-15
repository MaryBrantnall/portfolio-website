import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import axios from 'axios';

const EBirdData = () => {
  const [birds, setBirds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [locationLabel, setLocationLabel] = useState('your area');

  useEffect(() => {
    const apiKey = import.meta.env.VITE_EBIRD_API_KEY;
    if (!apiKey) {
      setError('eBird API token not found');
      setLoading(false);
      return;
    }

    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser.');
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        setLocationLabel(`lat ${latitude.toFixed(2)}, lng ${longitude.toFixed(2)}`);

        try {
          const response = await axios.get(
            'https://api.ebird.org/v2/data/obs/geo/recent',
            {
              headers: {
                'X-eBirdApiToken': apiKey,
              },
              params: {
                lat: latitude,
                lng: longitude,
                maxResults: 12,
              },
            }
          );
          setBirds(response.data);
        } catch (err) {
          setError('Failed to fetch eBird data for your location.');
          console.error(err);
        } finally {
          setLoading(false);
        }
      },
      (positionError) => {
        setError('Unable to access your location. Please allow location access or try again.');
        console.error(positionError);
        setLoading(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
      }
    );
  }, []);

  if (loading) return <div style={{ minHeight: '25vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><CircularProgress /></div>;
  if (error) return <div style={{ minHeight: '25vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Alert severity="error">{error}</Alert></div>;

  return (
    <div style={{ minHeight: '25vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px' }}>
      <div style={{ width: '100%', maxWidth: 1200, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="body1" color="textSecondary" align="center" sx={{ marginBottom: '16px', maxWidth: '800px' }}>
          I've been bird watching for 2 years now, and it's become one of my favourite hobbies! Here are the recent bird sightings in your area:
        </Typography>
        <Typography variant="h5" component="h3" fontWeight="bold" gutterBottom align="center">
          Recent Bird Sightings near You!
        </Typography>
        {birds.length === 0 ? (
          <Typography variant="body1" color="textSecondary" align="center">
            No sightings found nearby yet. Try refreshing or allowing location access.
          </Typography>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', width: '100%' }}>
            {birds.map((bird, index) => {
              const speciesUrl = bird.speciesCode ? `https://ebird.org/species/${bird.speciesCode}` : '#';
              return (
                <a
                  key={index}
                  href={speciesUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    textDecoration: 'none',
                    padding: '16px',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    textAlign: 'center',
                    transition: 'background-color 0.3s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(16, 185, 129, 0.12)')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                >
                  <Typography variant="body2" fontWeight="bold" color="textPrimary">
                    {bird.comName}
                  </Typography>
                  <Typography variant="caption" color="textSecondary">
                    {bird.locName}
                  </Typography>
                  <Typography variant="caption" color="textSecondary" display="block" fontSize="0.7rem">
                    {new Date(bird.obsDt).toLocaleDateString()}
                  </Typography>
                </a>
              );
            })}
          </div>
        )}
        <Typography variant="caption" color="textSecondary" sx={{ marginTop: '16px', textAlign: 'center' }}>
          Data sourced from{' '}
          <a href="https://ebird.org/api" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>
            eBird API
          </a>
        </Typography>
      </div>
    </div>
  );
};

export default EBirdData;