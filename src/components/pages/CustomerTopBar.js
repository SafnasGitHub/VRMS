import React from 'react';
import { Box, Typography, Paper, InputBase, IconButton, Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link as RouterLink } from 'react-router-dom';

const CustomerTopBar = () => (
  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: { xs: 2, sm: 4 } }}>
    <Typography
      variant="h5"
      component={RouterLink}
      to="/customer-dashboard"
      sx={{ color: '#1976d2', fontWeight: 'bold', textDecoration: 'none', cursor: 'pointer' }}
    >
      Vehicle Service Management
    </Typography>
    <Paper
      component="form"
      sx={{ p: '2px 8px', display: 'flex', alignItems: 'center', width: { xs: 180, sm: 300 }, mr: 2 }}
    >
      <InputBase sx={{ ml: 1, flex: 1 }} placeholder="What you looking for..." />
      <IconButton type="submit" sx={{ p: '10px' }}>
        <SearchIcon />
      </IconButton>
    </Paper>
    <IconButton component={RouterLink} to="/customer-profile">
      <Avatar sx={{ bgcolor: '#1976d2' }}>
        <AccountCircleIcon />
      </Avatar>
    </IconButton>
  </Box>
);

export default CustomerTopBar; 