import React, { useState, useEffect } from 'react';
import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Rating,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  CircularProgress,
  Alert,
} from '@mui/material';
import axios from '../../utils/axios';

const FeedbacksPage = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [mechanics, setMechanics] = useState([]);
  const [selectedMechanic, setSelectedMechanic] = useState('all');
  const [stats, setStats] = useState({
    averageRating: 0,
    totalFeedbacks: 0,
    ratingDistribution: {},
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('Component mounted, fetching data...');
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        await Promise.all([
          fetchFeedbacks(),
          fetchMechanics(),
          fetchStats()
        ]);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to load data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [selectedMechanic]);

  const fetchFeedbacks = async () => {
    try {
      console.log('Fetching feedbacks...');
      const response = selectedMechanic === 'all'
        ? await axios.get('/api/admin/feedbacks')
        : await axios.get(`/api/admin/feedbacks/mechanic/${selectedMechanic}`);
      console.log('Feedbacks response:', response.data);
      setFeedbacks(response.data);
    } catch (error) {
      console.error('Error fetching feedbacks:', error);
      throw error;
    }
  };

  const fetchMechanics = async () => {
    try {
      console.log('Fetching mechanics...');
      const response = await axios.get('/api/admin/mechanics');
      console.log('Mechanics response:', response.data);
      setMechanics(response.data);
    } catch (error) {
      console.error('Error fetching mechanics:', error);
      throw error;
    }
  };

  const fetchStats = async () => {
    try {
      console.log('Fetching stats...');
      const response = await axios.get('/api/admin/feedbacks/stats');
      console.log('Stats response:', response.data);
      setStats(response.data);
    } catch (error) {
      console.error('Error fetching feedback stats:', error);
      throw error;
    }
  };

  if (loading) {
    return (
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4, display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
        <CircularProgress />
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Alert severity="error">{error}</Alert>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        Feedbacks Management
      </Typography>

      {/* Statistics */}
      <Box sx={{ mb: 4 }}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>
            Overall Statistics
          </Typography>
          <Box sx={{ display: 'flex', gap: 4 }}>
            <Box>
              <Typography variant="subtitle1">Average Rating</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Rating value={stats.averageRating} readOnly precision={0.1} />
                <Typography>({stats.averageRating.toFixed(1)})</Typography>
              </Box>
            </Box>
            <Box>
              <Typography variant="subtitle1">Total Feedbacks</Typography>
              <Typography variant="h6">{stats.totalFeedbacks}</Typography>
            </Box>
          </Box>
        </Paper>
      </Box>

      {/* Filter */}
      <Box sx={{ mb: 2 }}>
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel>Filter by Mechanic</InputLabel>
          <Select
            value={selectedMechanic}
            label="Filter by Mechanic"
            onChange={(e) => setSelectedMechanic(e.target.value)}
          >
            <MenuItem value="all">All Mechanics</MenuItem>
            {mechanics.map((mechanic) => (
              <MenuItem key={mechanic.id} value={mechanic.id}>
                {mechanic.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      {/* Feedbacks Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Customer</TableCell>
              <TableCell>Mechanic</TableCell>
              <TableCell>Service Type</TableCell>
              <TableCell>Rating</TableCell>
              <TableCell>Comment</TableCell>
              <TableCell>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {feedbacks && feedbacks.length > 0 ? (
              feedbacks.map((feedback) => (
                <TableRow key={feedback.id}>
                  <TableCell>{feedback.customerName}</TableCell>
                  <TableCell>{feedback.mechanic?.name}</TableCell>
                  <TableCell>{feedback.serviceType}</TableCell>
                  <TableCell>
                    <Rating value={feedback.rating} readOnly size="small" />
                  </TableCell>
                  <TableCell>{feedback.comment}</TableCell>
                  <TableCell>
                    {new Date(feedback.createdAt).toLocaleDateString()}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} align="center">
                  No feedbacks found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default FeedbacksPage; 