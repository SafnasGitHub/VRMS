import React, { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import {
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Box,
  Stepper,
  Step,
  StepLabel,
  Alert,
  CircularProgress,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const steps = [
  'Service Requested',
  'Vehicle Received',
  'Under Repair',
  'Quality Check',
  'Ready for Delivery',
];

const TrackService = () => {
  const [searchParams] = useSearchParams();
  const [trackingId, setTrackingId] = useState('');
  const [serviceStatus, setServiceStatus] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [userLocation, setUserLocation] = useState(null);
  const [locationError, setLocationError] = useState('');

  const handleShareLocation = () => {
    if (!navigator.geolocation) {
      setLocationError('Geolocation is not supported by your browser.');
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        setLocationError('');
        // Optionally: send to backend here
      },
      (error) => {
        setLocationError('Unable to retrieve your location.');
      }
    );
  };

  const handleTrack = useCallback(async (e, id = null) => {
    if (e) {
      e.preventDefault();
    }
    setError('');
    setLoading(true);
    
    const trackId = id || trackingId;
    
    try {
      if (trackId) {
        const response = await axios.get(`/api/services/track/${trackId}`);
        const data = response.data;
        
        // Map the API response to our component's state structure
        setServiceStatus({
          id: data.trackingId,
          status: data.status,
          currentStep: steps.indexOf(data.status),
          estimatedCompletion: data.estimatedCompletion,
          vehicleDetails: {
            make: data.vehicle.make,
            model: data.vehicle.model,
            year: data.vehicle.year,
          },
        });
      } else {
        setError('Please enter a tracking ID');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch tracking information');
      setServiceStatus(null);
    } finally {
      setLoading(false);
    }
  }, [trackingId]);

  // Auto-track when tracking ID is in URL
  useEffect(() => {
    const idFromUrl = searchParams.get('id');
    if (idFromUrl) {
      setTrackingId(idFromUrl);
      handleTrack(null, idFromUrl);
    }
  }, [searchParams, handleTrack]);

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Track Your Service
        </Typography>

        {/* Real-time Location Sharing */}
        <Button
          variant="contained"
          onClick={handleShareLocation}
          sx={{ mt: 2, mb: 2 }}
        >
          Share My Location
        </Button>
        {userLocation && (
          <Alert severity="success" sx={{ mt: 2 }}>
            Your location: Latitude {userLocation.lat}, Longitude {userLocation.lng}
          </Alert>
        )}
        {locationError && (
          <Alert severity="error" sx={{ mt: 2 }}>
            {locationError}
          </Alert>
        )}

        <Paper sx={{ p: 3, mb: 4 }}>
          <form onSubmit={handleTrack}>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <TextField
                fullWidth
                label="Enter Tracking ID"
                value={trackingId}
                onChange={(e) => setTrackingId(e.target.value)}
                error={!!error}
                helperText={error}
                placeholder="Enter your service tracking ID"
                disabled={loading}
              />
              <Button
                type="submit"
                variant="contained"
                size="large"
                startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <SearchIcon />}
                disabled={loading}
              >
                {loading ? 'Tracking...' : 'Track'}
              </Button>
            </Box>
          </form>
        </Paper>

        {serviceStatus && (
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Service Status
            </Typography>
            
            <Stepper activeStep={serviceStatus.currentStep} sx={{ mb: 4 }}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>

            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle1" gutterBottom>
                Tracking ID:
              </Typography>
              <Typography variant="body1" sx={{ fontFamily: 'monospace' }}>
                {serviceStatus.id}
              </Typography>
            </Box>

            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle1" gutterBottom>
                Vehicle Details:
              </Typography>
              <Typography>
                {serviceStatus.vehicleDetails.make} {serviceStatus.vehicleDetails.model} ({serviceStatus.vehicleDetails.year})
              </Typography>
            </Box>

            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle1" gutterBottom>
                Estimated Completion:
              </Typography>
              <Typography>
                {new Date(serviceStatus.estimatedCompletion).toLocaleDateString()}
              </Typography>
            </Box>

            <Alert severity="info">
              Your vehicle is currently {serviceStatus.status.toLowerCase()}. We'll notify you when it's ready for pickup.
            </Alert>
          </Paper>
        )}
      </Box>
    </Container>
  );
};

export default TrackService; 