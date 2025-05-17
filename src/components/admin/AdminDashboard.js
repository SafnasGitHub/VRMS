import React, { useState, useEffect } from 'react';
import { Box, Grid, Paper, Typography, Container } from '@mui/material';
import {
  People as PeopleIcon,
  Build as BuildIcon,
  Assignment as AssignmentIcon,
  Star as StarIcon,
} from '@mui/icons-material';
import axios from 'axios';
import StatCard from './StatCard';
import ServiceRequestList from './ServiceRequestList';
import FeedbackList from './FeedbackList';

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalCustomers: 0,
    totalMechanics: 0,
    totalServiceRequests: 0,
    totalFeedbacks: 0,
    pendingRequests: 0,
    inProgressRequests: 0,
    completedRequests: 0,
    cancelledRequests: 0,
    averageRating: 0,
    recentServiceRequests: [],
    recentFeedbacks: []
  });

  useEffect(() => {
    const fetchDashboardStats = async () => {
      try {
        const response = await axios.get('/api/admin/dashboard/stats');
        setStats(response.data);
      } catch (error) {
        console.error('Error fetching dashboard stats:', error);
      }
    };

    fetchDashboardStats();
  }, []);

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        Admin Dashboard
      </Typography>

      {/* Statistics Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Total Customers"
            value={stats.totalCustomers}
            icon={<PeopleIcon />}
            color="#1976d2"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Total Mechanics"
            value={stats.totalMechanics}
            icon={<BuildIcon />}
            color="#2e7d32"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Service Requests"
            value={stats.totalServiceRequests}
            icon={<AssignmentIcon />}
            color="#ed6c02"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Average Rating"
            value={stats.averageRating.toFixed(1)}
            icon={<StarIcon />}
            color="#9c27b0"
          />
        </Grid>
      </Grid>

      {/* Service Request Status */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 2, textAlign: 'center', bgcolor: '#fff3e0' }}>
            <Typography variant="h6">Pending</Typography>
            <Typography variant="h4">{stats.pendingRequests}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 2, textAlign: 'center', bgcolor: '#e3f2fd' }}>
            <Typography variant="h6">In Progress</Typography>
            <Typography variant="h4">{stats.inProgressRequests}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 2, textAlign: 'center', bgcolor: '#e8f5e9' }}>
            <Typography variant="h6">Completed</Typography>
            <Typography variant="h4">{stats.completedRequests}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 2, textAlign: 'center', bgcolor: '#ffebee' }}>
            <Typography variant="h6">Cancelled</Typography>
            <Typography variant="h4">{stats.cancelledRequests}</Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Recent Activity */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Recent Service Requests
            </Typography>
            <ServiceRequestList requests={stats.recentServiceRequests} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Recent Feedbacks
            </Typography>
            <FeedbackList feedbacks={stats.recentFeedbacks} />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AdminDashboard; 