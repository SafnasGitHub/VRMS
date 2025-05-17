import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Paper,
  useTheme,
} from '@mui/material';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import BuildIcon from '@mui/icons-material/Build';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

const FeatureCard = ({ icon: Icon, title, description }) => {
  const theme = useTheme();
  
  return (
    <Card 
      elevation={3}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'translateY(-5px)',
        },
      }}
    >
      <CardContent sx={{ flexGrow: 1, textAlign: 'center', p: 3 }}>
        <Icon sx={{ fontSize: 40, color: theme.palette.primary.main, mb: 2 }} />
        <Typography variant="h6" component="h3" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

const AboutUs = () => {
  const theme = useTheme();

  const features = [
    {
      icon: DirectionsCarIcon,
      title: "Vehicle Management",
      description: "Comprehensive vehicle service tracking and management system for all your automotive needs."
    },
    {
      icon: BuildIcon,
      title: "Expert Mechanics",
      description: "Access to certified mechanics with specialized expertise in various vehicle types and services."
    },
    {
      icon: SecurityIcon,
      title: "Secure Platform",
      description: "Your data is protected with state-of-the-art security measures and encryption protocols."
    },
    {
      icon: SpeedIcon,
      title: "Quick Service",
      description: "Fast and efficient service scheduling with real-time updates on repair status."
    },
    {
      icon: SupportAgentIcon,
      title: "24/7 Support",
      description: "Round-the-clock customer support to assist you with any queries or concerns."
    },
    {
      icon: VerifiedUserIcon,
      title: "Quality Assurance",
      description: "Guaranteed quality service with detailed inspection reports and warranty coverage."
    }
  ];

  return (
    <Box sx={{ py: 8, backgroundColor: theme.palette.background.default }}>
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Paper
          elevation={0}
          sx={{
            p: 6,
            mb: 6,
            textAlign: 'center',
            backgroundColor: theme.palette.primary.main,
            color: 'white',
            borderRadius: 2,
          }}
        >
          <Typography variant="h2" component="h1" gutterBottom>
            About VSMS
          </Typography>
          <Typography variant="h5" sx={{ mb: 4, maxWidth: '800px', mx: 'auto' }}>
            Your Trusted Partner in Vehicle Service Management
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: '800px', mx: 'auto' }}>
            VSMS is a comprehensive vehicle service management system designed to streamline
            the process of vehicle maintenance and repair services. We connect vehicle owners
            with certified mechanics, ensuring quality service and peace of mind.
          </Typography>
        </Paper>

        {/* Mission Statement */}
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <Typography variant="h4" component="h2" gutterBottom color="primary">
            Our Mission
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: '800px', mx: 'auto' }}>
            To revolutionize the vehicle service industry by providing a seamless, transparent,
            and efficient platform that connects vehicle owners with trusted mechanics,
            ensuring quality service and customer satisfaction.
          </Typography>
        </Box>

        {/* Features Grid */}
        <Typography variant="h4" component="h2" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
          Why Choose VSMS?
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <FeatureCard {...feature} />
            </Grid>
          ))}
        </Grid>

        {/* Additional Information */}
        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <Typography variant="h4" component="h2" gutterBottom color="primary">
            Our Commitment
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: '800px', mx: 'auto', mb: 4 }}>
            At VSMS, we are committed to providing the highest quality service to both
            vehicle owners and mechanics. Our platform ensures transparency, efficiency,
            and satisfaction for all users. We continuously work to improve our services
            and maintain the highest standards in the industry.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutUs; 