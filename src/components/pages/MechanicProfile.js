import React, { useState } from 'react';
import {
  Box,
  Container,
  Paper,
  Typography,
  Button,
  Grid,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  AppBar,
  Toolbar,
  Divider,
} from '@mui/material';
import {
  Menu as MenuIcon,
  AccountCircle,
  Search as SearchIcon,
  Edit as EditIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const MechanicProfile = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Mock data - replace with actual data from your backend
  const profileData = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1234567890',
    address: '123 Mechanic Street, Auto City',
    specialization: 'Engine Repair',
    experience: '5',
    bio: 'Experienced mechanic specializing in engine repairs and maintenance.',
    photo: null, // Add photo URL here
  };

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Sidebar */}
      <Box
        component="nav"
        sx={{
          width: 240,
          flexShrink: 0,
          backgroundColor: '#1a237e',
          color: 'white',
          height: '100vh',
          position: 'fixed',
        }}
      >
        <Box sx={{ p: 2 }}>
          <Typography variant="h6" sx={{ mb: 4 }}>
            Vehicle Service Management
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Button
              color="inherit"
              onClick={() => navigate('/mechanic-dashboard')}
              sx={{ justifyContent: 'flex-start' }}
            >
              Dashboard
            </Button>
            <Button
              color="inherit"
              onClick={() => navigate('/mechanic-profile')}
              sx={{ justifyContent: 'flex-start' }}
            >
              Profile
            </Button>
            {/* Add more menu items as needed */}
          </Box>
        </Box>
      </Box>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          ml: '240px',
          backgroundColor: '#f5f5f5',
          minHeight: '100vh',
        }}
      >
        {/* Top AppBar */}
        <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Vehicle Service Management
            </Typography>
            <IconButton color="inherit">
              <SearchIcon />
            </IconButton>
            <IconButton
              color="inherit"
              onClick={handleMenu}
            >
              <AccountCircle />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>

        {/* Profile Content */}
        <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Typography variant="h5">
                Profile Information
              </Typography>
              <Button
                variant="contained"
                startIcon={<EditIcon />}
                onClick={() => navigate('/mechanic-edit-profile')}
              >
                Edit Profile
              </Button>
            </Box>
            <Divider sx={{ mb: 3 }} />
            
            <Grid container spacing={3}>
              {/* Photo */}
              <Grid item xs={12} sx={{ textAlign: 'center' }}>
                <Avatar
                  src={profileData.photo}
                  sx={{ width: 120, height: 120, mx: 'auto', mb: 2 }}
                />
              </Grid>

              {/* Profile Details */}
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle2" color="text.secondary">
                  First Name
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  {profileData.firstName}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle2" color="text.secondary">
                  Last Name
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  {profileData.lastName}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle2" color="text.secondary">
                  Email
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  {profileData.email}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle2" color="text.secondary">
                  Phone
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  {profileData.phone}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle2" color="text.secondary">
                  Address
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  {profileData.address}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle2" color="text.secondary">
                  Specialization
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  {profileData.specialization}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle2" color="text.secondary">
                  Experience
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  {profileData.experience} years
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle2" color="text.secondary">
                  Bio
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  {profileData.bio}
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
};

export default MechanicProfile; 