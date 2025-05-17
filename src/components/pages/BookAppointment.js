import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Grid,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from '@mui/material';

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    serviceType: '',
    vehicleMake: '',
    vehicleModel: '',
    vehicleYear: '',
    description: '',
    appointmentDate: '',
    appointmentTime: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement appointment booking logic
    console.log('Appointment form submitted:', formData);
    navigate('/track-service');
  };

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          marginTop: 4,
          marginBottom: 4,
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Book an Appointment
        </Typography>
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            marginTop: 2,
          }}
        >
          <Box component="form" onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="service-type-label">Service Type</InputLabel>
                  <Select
                    labelId="service-type-label"
                    name="serviceType"
                    value={formData.serviceType}
                    label="Service Type"
                    onChange={handleChange}
                    required
                  >
                    <MenuItem value="maintenance">General Maintenance</MenuItem>
                    <MenuItem value="brake">Brake Service</MenuItem>
                    <MenuItem value="tire">Tire Service</MenuItem>
                    <MenuItem value="engine">Engine Repair</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="vehicleMake"
                  label="Vehicle Make"
                  value={formData.vehicleMake}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="vehicleModel"
                  label="Vehicle Model"
                  value={formData.vehicleModel}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="vehicleYear"
                  label="Vehicle Year"
                  type="number"
                  value={formData.vehicleYear}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="appointmentDate"
                  label="Appointment Date"
                  type="date"
                  value={formData.appointmentDate}
                  onChange={handleChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="appointmentTime"
                  label="Appointment Time"
                  type="time"
                  value={formData.appointmentTime}
                  onChange={handleChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  name="description"
                  label="Service Description"
                  value={formData.description}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  size="large"
                >
                  Book Appointment
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default BookAppointment; 