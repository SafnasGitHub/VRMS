import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Container, Grid, Paper, Snackbar, Alert } from '@mui/material';

const garages = [
  {
    name: 'AutoCare Garage',
    address: '123 Main St, City, State',
    phone: '123-456-7890',
    email: 'autocare@example.com',
    website: 'www.autocare.com',
  },
  {
    name: 'QuickFix Motors',
    address: '456 Oak Ave, City, State',
    phone: '234-567-8901',
    email: 'quickfix@example.com',
    website: 'www.quickfixmotors.com',
  },
  {
    name: 'ProAuto Service',
    address: '789 Pine Rd, City, State',
    phone: '345-678-9012',
    email: 'proauto@example.com',
    website: 'www.proautoservice.com',
  },
  {
    name: 'Elite Auto Repair',
    address: '101 Maple Dr, City, State',
    phone: '456-789-0123',
    email: 'eliteauto@example.com',
    website: 'www.eliteautorepair.com',
  },
  {
    name: 'City Auto Service',
    address: '202 Cedar Ln, City, State',
    phone: '567-890-1234',
    email: 'cityauto@example.com',
    website: 'www.cityautoservice.com',
  },
  {
    name: 'Metro Motors',
    address: '303 Birch Blvd, City, State',
    phone: '678-901-2345',
    email: 'metromotors@example.com',
    website: 'www.metromotors.com',
  },
];

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setSnackbar({
      open: true,
      message: 'Message sent successfully!',
      severity: 'success',
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4, bgcolor: 'lightgray' }}>
      <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
        Contact Us
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#1976d2' }}>
              Send Us a Message
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate>
              <TextField
                margin="normal"
                required
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                variant="outlined"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                variant="outlined"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                label="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                variant="outlined"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                label="Message"
                name="message"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleChange}
                variant="outlined"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 2, bgcolor: '#1976d2', '&:hover': { bgcolor: '#1565c0' } }}
              >
                Send Message
              </Button>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#1976d2' }}>
              Our Garages
            </Typography>
            <Grid container spacing={2}>
              {garages.map((garage, index) => (
                <Grid item xs={12} key={index}>
                  <Paper elevation={1} sx={{ p: 2, bgcolor: '#f5f5f5' }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
                      {garage.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {garage.address}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Phone: {garage.phone}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Email: {garage.email}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Website: {garage.website}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      <Snackbar open={snackbar.open} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default ContactUs; 