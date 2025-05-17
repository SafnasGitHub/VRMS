import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Box,
} from '@mui/material';
import BuildIcon from '@mui/icons-material/Build';
import OilBarrelIcon from '@mui/icons-material/OilBarrel';
import CarRepairIcon from '@mui/icons-material/CarRepair';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

const services = [
  {
    id: 1,
    title: 'General Maintenance',
    description: 'Regular maintenance services including oil changes, filter replacements, and fluid checks.',
    icon: <OilBarrelIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    price: 'Starting from Rs 500',
  },
  {
    id: 2,
    title: 'Brake Service',
    description: 'Complete brake system inspection and repair including pads, rotors, and calipers.',
    icon: <CarRepairIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    price: 'Starting from Rs 1000',
  },
  {
    id: 3,
    title: 'Tire Service',
    description: 'Tire rotation, alignment, balancing, and replacement services.',
    icon: <DirectionsCarIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    price: 'Starting from Rs 3000',
  },
  {
    id: 4,
    title: 'Engine Repair',
    description: 'Diagnostic and repair services for engine-related issues.',
    icon: <BuildIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    price: 'Starting from Rs 8000',
  },
];

const Services = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Our Services
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" align="center" paragraph>
          Comprehensive vehicle repair and maintenance services
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {services.map((service) => (
          <Grid item key={service.id} xs={12} sm={6} md={3}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                <Box sx={{ mb: 2 }}>{service.icon}</Box>
                <Typography gutterBottom variant="h5" component="h2">
                  {service.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {service.description}
                </Typography>
                <Typography variant="h6" color="primary">
                  {service.price}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  fullWidth
                  variant="contained"
                  component={RouterLink}
                  to="/book-appointment"
                >
                  Book Now
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Services; 