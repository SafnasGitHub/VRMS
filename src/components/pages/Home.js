import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Container,
  Typography,
  Box,
  Button,
  Grid,
  Paper,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import BuildIcon from '@mui/icons-material/Build';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import LocationOnIcon from '@mui/icons-material/LocationOn';

// Styled components
const HeroSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: '80vh',
  display: 'flex',
  alignItems: 'center',
  background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/images/hero-car.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: 'white',
  marginBottom: theme.spacing(8),
}));

const FeatureCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
  },
}));

const Home = () => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <Box>
      {/* Hero Section */}
      <HeroSection>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
                Online Vehicle Repair Service
        </Typography>
              <Typography variant="h5" paragraph sx={{ mb: 4, maxWidth: '600px' }}>
                Experience hassle-free vehicle maintenance and repair services at your fingertips. 
                Book appointments, track repairs, and get expert service from certified mechanics.
        </Typography>
          <Button
            variant="contained"
            size="large"
            component={RouterLink}
            to="/book-appointment"
                sx={{ 
                  mr: 2,
                  py: 1.5,
                  px: 4,
                  fontSize: '1.1rem',
                  background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #1976D2 30%, #1CB5E0 90%)',
                  }
                }}
          >
                Book Now
          </Button>
          <Button
            variant="outlined"
            size="large"
            component={RouterLink}
            to="/services"
                sx={{ 
                  py: 1.5,
                  px: 4,
                  fontSize: '1.1rem',
                  color: 'white',
                  borderColor: 'white',
                  '&:hover': {
                    borderColor: 'white',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  }
                }}
              >
                Learn More
          </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              {!imageError ? (
                <Box
                  component="img"
                  src="/images/car-repair-illustration.png"
                  alt="Car Repair Illustration"
                  onError={handleImageError}
                  sx={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '350px',
                    objectFit: 'contain',
                    borderRadius: '20px',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
                    background: 'white',
                    p: 2,
                  }}
                />
              ) : (
                <Box
                  sx={{
                    width: '100%',
                    height: '350px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '20px',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
                  }}
                >
                  <DirectionsCarIcon sx={{ fontSize: 100, color: 'white' }} />
        </Box>
              )}
            </Grid>
          </Grid>
        </Container>
      </HeroSection>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Typography variant="h3" component="h2" align="center" gutterBottom sx={{ mb: 6 }}>
          Why Choose Our Service?
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <FeatureCard>
              <CardMedia
                component="div"
                sx={{
                  height: 140,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  bgcolor: 'primary.main',
                }}
              >
                <DirectionsCarIcon sx={{ fontSize: 60, color: 'white' }} />
              </CardMedia>
              <CardContent>
                <Typography variant="h5" component="h3" gutterBottom>
                  Convenient Booking
              </Typography>
                <Typography variant="body1" color="text.secondary">
                  Book your service appointment online 24/7. Choose your preferred time slot and get instant confirmation.
              </Typography>
            </CardContent>
            </FeatureCard>
        </Grid>
          <Grid item xs={12} md={4}>
            <FeatureCard>
              <CardMedia
                component="div"
                sx={{
                  height: 140,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  bgcolor: 'primary.main',
                }}
              >
                <BuildIcon sx={{ fontSize: 60, color: 'white' }} />
              </CardMedia>
              <CardContent>
                <Typography variant="h5" component="h3" gutterBottom>
                  Expert Mechanics
              </Typography>
                <Typography variant="body1" color="text.secondary">
                  Our certified mechanics have years of experience in handling all types of vehicle repairs and maintenance.
              </Typography>
            </CardContent>
            </FeatureCard>
        </Grid>
          <Grid item xs={12} md={4}>
            <FeatureCard>
              <CardMedia
                component="div"
                sx={{
                  height: 140,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  bgcolor: 'primary.main',
                }}
              >
                <SupportAgentIcon sx={{ fontSize: 60, color: 'white' }} />
              </CardMedia>
              <CardContent>
                <Typography variant="h5" component="h3" gutterBottom>
                  24/7 Support
              </Typography>
                <Typography variant="body1" color="text.secondary">
                  Get round-the-clock customer support. Track your repair status and get updates in real-time.
              </Typography>
            </CardContent>
            </FeatureCard>
          </Grid>
        </Grid>
      </Container>

      {/* Garage Centers Section */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Typography variant="h3" component="h2" align="center" gutterBottom sx={{ mb: 6 }}>
          Our Garage Centers
        </Typography>
        <Grid container spacing={4}>
          {[
            {
              name: "AutoCare Central",
              contact: "+94 11 234 5678",
              hours: "9:00 AM - 6:00 PM",
              days: "Monday to Saturday",
              address: "300, Hill Street, Nedimala, Dehiwala, Sri Lanka",
              location: "https://maps.google.com/?q=6.8407,79.8712",
              image: "/images/garages/garage1.jpg"
            },
            {
              name: "Garage Eka",
              contact: "+94 77 508 7058",
              hours: "8:30 AM - 7:00 PM",
              days: "Monday to Saturday",
              address: "PW85+FQP, Panadura",
              location: "https://maps.google.com/?q=6.7131,79.9026",
              image: "/images/garages/garage2.jpg"
            },
            {
              name: "Motor Link",
              contact: "+94 77 776 6867",
              hours: "9:00 AM - 6:30 PM",
              days: "Monday to Saturday",
              address: "21 Lucian J.Silva MaWatha, Moratuwa 10400",
              location: "https://maps.google.com/?q=6.7825,79.8806",
              image: "/images/garages/garage3.jpg"
            },
            {
              name: "Wellawatta motors",
              contact: "+94 76 068 8330",
              hours: "8:00 AM - 7:00 PM",
              days: "Monday to Saturday",
              address: "127,3 Galle- Colombo Rd, Colombo 00500",
              location: "https://maps.google.com/?q=6.9028,79.8607",
              image: "/images/garages/garage4.jpg"
            },
            {
              name: "Sasika Garage",
              contact: "+94 71 748 4289",
              hours: "9:30 AM - 6:00 PM",
              days: "Monday to Saturday",
              address: "13 Meegahawatta Rd, Nugegoda 10250",
              location: "https://maps.google.com/?q=6.8637,79.8997",
              image: "/images/garages/garage5.jpg"
            },
            {
              name: "Martino Garage",
              contact: "+94 77 769 4924",
              hours: "8:00 AM - 6:30 PM",
              days: "Monday to Saturday",
              address: "112 Devanampiyatissa Road, Colombo 01000",
              location: "https://maps.google.com/?q=6.9271,79.8612",
              image: "/images/garages/garage6.jpg"
            }
          ].map((garage, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 6,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={garage.image}
                  alt={garage.name}
                  sx={{
                    objectFit: 'cover',
                    '&:hover': {
                      opacity: 0.9,
                    },
                  }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" component="h3" gutterBottom sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                    {garage.name}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    <strong>Contact:</strong> {garage.contact}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    <strong>Working Hours:</strong> {garage.hours}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    <strong>Days Open:</strong> {garage.days}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    <strong>Address:</strong> {garage.address}
                  </Typography>
                </CardContent>
                <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between' }}>
                  <Button
                    variant="outlined"
                    href={garage.location}
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<LocationOnIcon />}
                  >
                    View Location
                  </Button>
                  <Button
                    variant="contained"
                    component={RouterLink}
                    to="/services"
                    startIcon={<BuildIcon />}
                  >
                    View Service
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Call to Action Section */}
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={8}>
              <Typography variant="h4" component="h2" gutterBottom>
                Ready to Experience Hassle-Free Vehicle Service?
              </Typography>
              <Typography variant="h6" paragraph>
                Join thousands of satisfied customers who trust us with their vehicles.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
              <Button 
                variant="contained" 
                size="large"
                component={RouterLink}
                to="/login"
                sx={{ 
                  py: 2,
                  px: 4,
                  fontSize: '1.1rem',
                  bgcolor: 'white',
                  color: 'primary.main',
                  '&:hover': {
                    bgcolor: 'grey.100',
                  }
                }}
              >
                Get Started
              </Button>
        </Grid>
      </Grid>
    </Container>
      </Box>
    </Box>
  );
};

export default Home; 