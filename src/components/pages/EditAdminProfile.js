import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Container,
  Paper,
  TextField,
  Avatar,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  IconButton,
  Grid,
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ReceiptIcon from '@mui/icons-material/Receipt';
import FeedbackIcon from '@mui/icons-material/Feedback';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import DeleteIcon from '@mui/icons-material/Delete';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import CustomerTopBar from './CustomerTopBar';

const drawerWidth = 200;

const sidebarOptions = [
  { label: 'Dashboard', icon: <DashboardIcon />, path: '/admin-dashboard' },
  { label: 'Customer', icon: <AssignmentIcon />, path: '/admin-customer' },
  { label: 'Mechanic', icon: <ReceiptIcon />, path: '/admin-mechanic' },
  { label: 'Request', icon: <FeedbackIcon />, path: '/admin-request' },
  { label: 'Feedback', icon: <FeedbackIcon />, path: '/admin-feedback' },
  { label: 'Edit Profile', icon: <AccountCircleIcon />, path: '/admin-edit-profile' },
];

const initialData = {
  firstName: 'sumit',
  lastName: '',
  mobile: '9572181024',
  address: 'bhopal mp',
  username: 'safna@gmail.com',
  password: 'password'
};

const EditAdminProfile = () => {
  const navigate = useNavigate();
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [form, setForm] = useState(initialData);
  const [photo, setPhoto] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePhotoUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setPhoto(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handlePhotoClear = () => {
    setPhoto(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Submit form data to backend
    alert('Profile updated!');
  };

  const handleSidebarClick = (option) => {
    if (option.path) {
      navigate(option.path);
    }
  };

  const handleBookmarkToggle = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
            background: '#fafbfc',
            borderRight: '1px solid #e0e0e0',
            top: 64,
            height: 'calc(100% - 64px)',
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto', mt: 2 }}>
          <List>
            {sidebarOptions.map((option) => (
              <ListItem
                button
                key={option.label}
                onClick={() => handleSidebarClick(option)}
                sx={{
                  cursor: 'pointer',
                  '&:hover': {
                    backgroundColor: '#e3f2fd',
                  }
                }}
              >
                <ListItemIcon sx={{ minWidth: 40 }}>{option.icon}</ListItemIcon>
                <ListItemText primary={option.label} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, minHeight: '100vh', bgcolor: '#fff', p: { xs: 1, sm: 3 }, ml: { md: 2 } }}>
        <CustomerTopBar />
        <Container maxWidth="md">
          <Paper elevation={3} sx={{ p: 4, mt: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
              <Typography variant="h5" sx={{ textAlign: 'center', color: '#1976d2' }}>
                Edit Profile
              </Typography>
              <IconButton onClick={handleBookmarkToggle} color="primary">
                {isBookmarked ? <BookmarkIcon /> : <BookmarkBorderIcon />}
              </IconButton>
            </Box>

            {/* Profile Image Section */}
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 4 }}>
              <Avatar
                sx={{ width: 80, height: 80, mb: 2, fontSize: 32, bgcolor: '#bdbdbd' }}
                src={photo}
              >
                {form.firstName ? form.firstName[0].toUpperCase() : 'P'}
              </Avatar>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button
                  variant="contained"
                  component="label"
                  startIcon={<PhotoCamera />}
                  sx={{ bgcolor: '#1976d2' }}
                >
                  Upload Photo
                  <input hidden accept="image/*" type="file" onChange={handlePhotoUpload} />
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  startIcon={<DeleteIcon />}
                  onClick={handlePhotoClear}
                >
                  Clear
                </Button>
              </Box>
            </Box>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="First Name *"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Last Name *"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Mobile *"
                    name="mobile"
                    value={form.mobile}
                    onChange={handleChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Address *"
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Username *"
                    name="username"
                    value={form.username}
                    onChange={handleChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Password *"
                    name="password"
                    type="password"
                    value={form.password}
                    onChange={handleChange}
                    fullWidth
                    required
                  />
                </Grid>
              </Grid>
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 4 }}>
                <Button type="submit" variant="contained" color="primary">
                  Save Changes
                </Button>
                <Button variant="outlined" color="primary" onClick={() => navigate('/admin-profile')}>
                  Cancel
                </Button>
              </Box>
            </form>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
};

export default EditAdminProfile; 