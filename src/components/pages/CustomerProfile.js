import React, { useState } from 'react';
import { Box, Typography, Button, Container, Paper, Avatar, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, IconButton, Grid } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ReceiptIcon from '@mui/icons-material/Receipt';
import FeedbackIcon from '@mui/icons-material/Feedback';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import CustomerTopBar from './CustomerTopBar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EditIcon from '@mui/icons-material/Edit';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const drawerWidth = 200;

const sidebarOptions = [
  { label: 'Dashboard', icon: <DashboardIcon /> },
  { label: 'Request', icon: <AssignmentIcon /> },
  { label: 'Invoice', icon: <ReceiptIcon /> },
  { label: 'Feedback', icon: <FeedbackIcon /> },
];

const user = {
  name: 'sumit',
  mobile: '9572181024',
  address: 'bhopal mp',
  photo: '/images/profile.jpg', // Place a profile.jpg in public/images/
};

const CustomerProfile = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const navigate = useNavigate();

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
            top: 64, // height of the AppBar/Navbar
            height: 'calc(100% - 64px)',
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto', mt: 2 }}>
          <List>
            {sidebarOptions.map((option, idx) => (
              <ListItem button key={option.label}>
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
        <Container maxWidth="lg">
          <Box sx={{ py: 4 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <IconButton onClick={() => navigate(-1)} sx={{ mr: 1 }}>
                  <ArrowBackIcon />
                </IconButton>
                <Typography variant="h4" component="h1">
                  Profile
                </Typography>
              </Box>
              <IconButton onClick={handleBookmarkToggle} color="primary">
                {isBookmarked ? <BookmarkIcon /> : <BookmarkBorderIcon />}
              </IconButton>
            </Box>
            <Paper sx={{ p: 4 }}>
              <Grid container spacing={4}>
                <Grid item xs={12} md={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <Avatar
                    src={user.photo}
                    alt={user.name}
                    sx={{
                      width: 150,
                      height: 150,
                      bgcolor: 'primary.main',
                      mb: 2,
                    }}
                  >
                    <AccountCircleIcon sx={{ fontSize: 100 }} />
                  </Avatar>
                  <Button
                    variant="contained"
                    component={RouterLink}
                    to="/edit-customer-profile"
                    startIcon={<EditIcon />}
                    sx={{ mt: 2 }}
                  >
                    Edit Profile
                  </Button>
                </Grid>
                <Grid item xs={12} md={8}>
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="h6" gutterBottom>
                      Personal Information
                    </Typography>
                    <Typography variant="body1" paragraph>
                      <strong>Name:</strong> {user.name}
                    </Typography>
                    <Typography variant="body1" paragraph>
                      <strong>Email:</strong> {user.mobile}
                    </Typography>
                    <Typography variant="body1" paragraph>
                      <strong>Phone:</strong> {user.address}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="h6" gutterBottom>
                      Vehicle Information
                    </Typography>
                    <Typography variant="body1" paragraph>
                      <strong>Vehicle Type:</strong> Sedan
                    </Typography>
                    <Typography variant="body1" paragraph>
                      <strong>Model:</strong> Toyota Camry
                    </Typography>
                    <Typography variant="body1" paragraph>
                      <strong>Year:</strong> 2020
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default CustomerProfile; 