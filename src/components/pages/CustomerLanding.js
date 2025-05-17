import React from 'react';
import { Button, Typography, Box, Container, Divider } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const CustomerLanding = () => (
  <Container maxWidth="md" sx={{ textAlign: 'center', mt: 8 }}>
    <Typography variant="h3" sx={{ mb: 2 }}>
      <span style={{ background: '#2196f3', color: '#fff', padding: '0 12px', borderRadius: 4 }}>Hello,</span> Customer
    </Typography>
    <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
      Welcome to Vehicle Service Management
    </Typography>
    <Divider sx={{ mb: 4 }} />
    <Typography sx={{ mb: 4 }}>
      You can access various features after Login.
    </Typography>
    <Box sx={{ mb: 4 }}>
      <Button
        variant="contained"
        color="primary"
        component={RouterLink}
        to="/register"
        sx={{ mr: 2 }}
      >
        Create Your Account
      </Button>
      <Button
        variant="contained"
        color="primary"
        component={RouterLink}
        to="/login"
      >
        Login
      </Button>
    </Box>
    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 4 }}>
      <Button href="#" sx={{ minWidth: 0, p: 1, borderRadius: '50%', bgcolor: '#3b5998', color: 'white' }}><i className="fab fa-facebook-f"></i></Button>
      <Button href="#" sx={{ minWidth: 0, p: 1, borderRadius: '50%', bgcolor: '#25d366', color: 'white' }}><i className="fab fa-whatsapp"></i></Button>
      <Button href="#" sx={{ minWidth: 0, p: 1, borderRadius: '50%', bgcolor: '#00acee', color: 'white' }}><i className="fab fa-twitter"></i></Button>
    </Box>
  </Container>
);

export default CustomerLanding; 