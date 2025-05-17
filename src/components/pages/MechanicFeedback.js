import React, { useState, useEffect } from 'react';
import MechanicSidebar from '../layout/MechanicSidebar';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Container,
  Paper,
  Grid,
  Card,
  CardContent,
  Rating,
  Menu,
  MenuItem,
  Divider,
  Avatar,
} from '@mui/material';
import {
  Search as SearchIcon,
  AccountCircle,
} from '@mui/icons-material';
import axios from 'axios';

const MechanicFeedback = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mechanicFeedback, setMechanicFeedback] = useState([]);
  const [customerFeedback, setCustomerFeedback] = useState([]);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    axios.get("/api/mechanic-feedback").then(res => setMechanicFeedback(res.data));
    axios.get("/api/customer-feedback").then(res => setCustomerFeedback(res.data));
  }, []);

  // Mock data - replace with actual data from your backend
  const feedbackData = {
    overallRating: 4.5,
    totalFeedbacks: 28,
    recentFeedbacks: [
      {
        id: 1,
        customerName: 'John Smith',
        rating: 5,
        comment: 'Excellent service! The mechanic was very professional and completed the work on time.',
        date: '2024-03-15',
        vehicleType: 'Car',
        serviceType: 'Engine Repair',
      },
      {
        id: 2,
        customerName: 'Sarah Johnson',
        rating: 4,
        comment: 'Good service overall. Could have been a bit faster though.',
        date: '2024-03-14',
        vehicleType: 'Bike',
        serviceType: 'Brake Service',
      },
      {
        id: 3,
        customerName: 'Mike Brown',
        rating: 5,
        comment: 'Very satisfied with the service. Will definitely come back!',
        date: '2024-03-13',
        vehicleType: 'Car',
        serviceType: 'Oil Change',
      },
    ],
    ratingDistribution: {
      5: 15,
      4: 8,
      3: 3,
      2: 1,
      1: 1,
    },
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <MechanicSidebar />
      <Box component="main" sx={{ flexGrow: 1, ml: '200px', background: '#f5f6fa', minHeight: '100vh' }}>
        <AppBar position="static" sx={{ background: '#1976d2', color: 'white', boxShadow: 0 }}>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', fontWeight: 700 }}>
              <span role="img" aria-label="car" style={{ marginRight: 8 }}>🚗</span> Vehicle Service Management
            </Typography>
            <IconButton color="inherit" onClick={handleMenu}>
              <AccountCircle />
            </IconButton>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          {/* Overall Rating Card */}
          <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={12} md={6}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Typography variant="h2" color="primary">
                    {feedbackData.overallRating}
                  </Typography>
                  <Box>
                    <Rating
                      value={feedbackData.overallRating}
                      precision={0.5}
                      readOnly
                      size="large"
                    />
                    <Typography variant="body2" color="text.secondary">
                      Based on {feedbackData.totalFeedbacks} reviews
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <Box key={rating} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Typography variant="body2">{rating} stars</Typography>
                      <Box
                        sx={{
                          flexGrow: 1,
                          height: 8,
                          backgroundColor: '#e0e0e0',
                          borderRadius: 1,
                          overflow: 'hidden',
                        }}
                      >
                        <Box
                          sx={{
                            height: '100%',
                            width: `${(feedbackData.ratingDistribution[rating] / feedbackData.totalFeedbacks) * 100}%`,
                            backgroundColor: 'primary.main',
                          }}
                        />
                      </Box>
                      <Typography variant="body2">
                        {feedbackData.ratingDistribution[rating]}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Grid>
            </Grid>
          </Paper>
          {/* Recent Feedbacks */}
          <Typography variant="h5" gutterBottom>
            Recent Feedbacks
          </Typography>
          <Grid container spacing={3}>
            {feedbackData.recentFeedbacks.map((feedback) => (
              <Grid item xs={12} key={feedback.id}>
                <Card>
                  <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Avatar>{feedback.customerName[0]}</Avatar>
                        <Box>
                          <Typography variant="subtitle1">
                            {feedback.customerName}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {feedback.date}
                          </Typography>
                        </Box>
                      </Box>
                      <Rating value={feedback.rating} readOnly />
                    </Box>
                    <Typography variant="body1" sx={{ mb: 2 }}>
                      {feedback.comment}
                    </Typography>
                    <Divider sx={{ my: 2 }} />
                    <Box sx={{ display: 'flex', gap: 2 }}>
                      <Typography variant="body2" color="text.secondary">
                        Vehicle: {feedback.vehicleType}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Service: {feedback.serviceType}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default MechanicFeedback; 