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
  { label: 'Dashboard', icon: <DashboardIcon />, path: '/customer-dashboard' },
  { label: 'Request', icon: <AssignmentIcon /> },
  { label: 'Invoice', icon: <ReceiptIcon /> },
  { label: 'Feedback', icon: <FeedbackIcon /> },
];

const EditCustomerProfile = () => {
  const navigate = useNavigate();
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [formData, setFormData] = useState({
    firstName: 'sumit',
    lastName: '',
    mobile: '9572181024',
    address: 'bhopal mp',
    username: '',
    password: '',
  });
  const [profileImage, setProfileImage] = useState('/images/profile.jpg');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClearImage = () => {
    setProfileImage('/images/profile.jpg');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add API call to update profile
    console.log('Form submitted:', formData);
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
                src={profileImage}
                alt="Profile"
                sx={{
                  width: 120,
                  height: 120,
                  mb: 2,
                  boxShadow: 3,
                  border: '4px solid #fff',
                }}
              />
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button
                  variant="contained"
                  component="label"
                  startIcon={<PhotoCamera />}
                  sx={{ bgcolor: '#1976d2' }}
                >
                  Upload Photo
                  <input
                    type="file"
                    hidden
                    accept="image/*"
                    onChange={handleImageUpload}
                  />
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  startIcon={<DeleteIcon />}
                  onClick={handleClearImage}
                >
                  Clear
                </Button>
              </Box>
            </Box>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              <Box sx={{ display: 'grid', gap: 3 }}>
                <Box sx={{ display: 'grid', gridTemplateColumns: { sm: '1fr 1fr' }, gap: 3 }}>
                  <TextField
                    label="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    fullWidth
                    required
                  />
                  <TextField
                    label="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    fullWidth
                    required
                  />
                </Box>
                <TextField
                  label="Mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  fullWidth
                  required
                />
                <TextField
                  label="Address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  fullWidth
                  required
                  multiline
                  rows={2}
                />
                <TextField
                  label="Username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  fullWidth
                  required
                />
                <TextField
                  label="Password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Box>

              {/* Action Buttons */}
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 4 }}>
                <Button
                  variant="contained"
                  type="submit"
                  sx={{ bgcolor: '#1976d2', px: 4 }}
                >
                  Save Changes
                </Button>
                <Button
                  variant="outlined"
                  component={RouterLink}
                  to="/customer-profile"
                  sx={{ px: 4 }}
                >
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

export default EditCustomerProfile; 