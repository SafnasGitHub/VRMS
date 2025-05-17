import React from 'react';
import { Container, Typography, Box, Paper, Grid } from '@mui/material';

const Dashboard = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Dashboard
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Welcome to Vehicle Service Management System
              </Typography>
              <Typography>
                This is your dashboard. You can manage your vehicle services and track their status here.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Dashboard; 