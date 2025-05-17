import React, { useState } from 'react';
import {
  Box,
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Grid,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  AppBar,
  Toolbar,
} from '@mui/material';
import {
  Menu as MenuIcon,
  AccountCircle,
  Search as SearchIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const EditMechanicProfile = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    specialization: '',
    experience: '',
    bio: '',
  });

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handlePhotoChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setPhoto(URL.createObjectURL(event.target.files[0]));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
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

        {/* Profile Form */}
        <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h5" gutterBottom>
              Edit Profile
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                {/* Photo Upload */}
                <Grid item xs={12} sx={{ textAlign: 'center' }}>
                  <Avatar
                    src={photo}
                    sx={{ width: 100, height: 100, mx: 'auto', mb: 2 }}
                  />
                  <input
                    accept="image/*"
                    type="file"
                    id="photo-upload"
                    hidden
                    onChange={handlePhotoChange}
                  />
                  <label htmlFor="photo-upload">
                    <Button variant="outlined" component="span">
                      Upload Photo
                    </Button>
                  </label>
                </Grid>

                {/* Form Fields */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Address"
                    name="address"
                    multiline
                    rows={2}
                    value={formData.address}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Specialization"
                    name="specialization"
                    value={formData.specialization}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Experience (years)"
                    name="experience"
                    type="number"
                    value={formData.experience}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Bio"
                    name="bio"
                    multiline
                    rows={4}
                    value={formData.bio}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
                    <Button
                      variant="outlined"
                      onClick={() => navigate('/mechanic-profile')}
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                    >
                      Save Changes
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
};

export default EditMechanicProfile; 