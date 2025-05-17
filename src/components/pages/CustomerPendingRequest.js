import React from 'react';
import { Box, Typography } from '@mui/material';
import CustomerTopBar from './CustomerTopBar';

const CustomerPendingRequest = () => (
  <Box>
    <CustomerTopBar />
    <Typography variant="h4" sx={{ mt: 4, textAlign: 'center' }}>
      View Pending Request Page
    </Typography>
  </Box>
);

export default CustomerPendingRequest; 