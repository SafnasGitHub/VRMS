import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  TextField,
  Button,
  Rating,
  Grid,
  Card,
  CardContent,
  Avatar,
  Alert,
  CircularProgress,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import axios from 'axios';

// Styled components
const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#1976d2',
  },
  '& .MuiRating-iconHover': {
    color: '#2196f3',
  },
});

const ReviewCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.shadows[4],
  },
}));

// Service types
const serviceTypes = [
  'General Maintenance',
  'Engine Repair',
  'Brake Service',
  'Transmission Service',
  'Electrical System',
  'AC Service',
  'Tire Service',
  'Body Work',
  'Paint Job',
  'Other',
];

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: 0,
    comment: '',
    serviceType: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Fetch existing reviews
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get('/api/reviews');
        setReviews(response.data);
      } catch (err) {
        setError('Failed to load reviews. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRatingChange = (event, newValue) => {
    setFormData(prev => ({
      ...prev,
      rating: newValue
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitSuccess(false);
    setError('');

    try {
      await axios.post('/api/reviews', formData);
      setSubmitSuccess(true);
      // Refresh reviews after successful submission
      const response = await axios.get('/api/reviews');
      setReviews(response.data);
      // Reset form
      setFormData({
        name: '',
        email: '',
        rating: 0,
        comment: '',
        serviceType: '',
      });
    } catch (err) {
      setError('Failed to submit review. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const calculateAverageRating = () => {
    if (reviews.length === 0) return 0;
    const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
    return (sum / reviews.length).toFixed(1);
  };

  return (
    <Container maxWidth="lg" sx={{ 
      minHeight: '100vh', 
      py: 4,
      background: 'linear-gradient(145deg, #f5f7fa 0%, #e4e8eb 100%)',
      borderRadius: '20px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
      my: 4,
      position: 'relative',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        borderRadius: '20px',
        border: '1px solid rgba(255, 255, 255, 0.5)',
        pointerEvents: 'none'
      }
    }}>
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        gap: 4,
        position: 'relative',
        zIndex: 1
      }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Customer Reviews
        </Typography>

        {/* Overall Rating */}
        <Paper sx={{ 
          p: 4, 
          width: '100%', 
          maxWidth: '600px',
          textAlign: 'center', 
          borderRadius: 2,
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(10px)'
        }}>
          <Typography variant="h6" gutterBottom>
            Overall Rating
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
            <StyledRating
              value={parseFloat(calculateAverageRating())}
              precision={0.1}
              readOnly
              size="large"
            />
            <Typography variant="h5" sx={{ ml: 2 }}>
              {calculateAverageRating()}
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary">
            Based on {reviews.length} reviews
          </Typography>
        </Paper>

        <Grid container spacing={4} sx={{ width: '100%', justifyContent: 'center' }}>
          {/* Review Form */}
          <Grid item xs={12} md={6} lg={5}>
            <Paper sx={{ 
              p: 4, 
              height: '100%', 
              borderRadius: 2,
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
              transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
              background: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(10px)',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 12px 28px rgba(0, 0, 0, 0.15)'
              }
            }}>
              <Typography variant="h6" gutterBottom sx={{ mb: 3, textAlign: 'center' }}>
                Write a Review
              </Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  margin="normal"
                  required
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  margin="normal"
                  required
                  sx={{ mb: 2 }}
                />
                <FormControl fullWidth margin="normal" required sx={{ mb: 2 }}>
                  <InputLabel>Service Type</InputLabel>
                  <Select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    label="Service Type"
                  >
                    {serviceTypes.map((type) => (
                      <MenuItem key={type} value={type}>
                        {type}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <Box sx={{ my: 3, textAlign: 'center' }}>
                  <Typography component="legend" gutterBottom>Rating</Typography>
                  <StyledRating
                    name="rating"
                    value={formData.rating}
                    onChange={handleRatingChange}
                    precision={0.5}
                    size="large"
                  />
                </Box>
                <TextField
                  fullWidth
                  label="Your Review"
                  name="comment"
                  value={formData.comment}
                  onChange={handleInputChange}
                  margin="normal"
                  multiline
                  rows={4}
                  required
                  sx={{ mb: 3 }}
                />
                {error && (
                  <Alert severity="error" sx={{ mb: 2 }}>
                    {error}
                  </Alert>
                )}
                {submitSuccess && (
                  <Alert severity="success" sx={{ mb: 2 }}>
                    Thank you for your review!
                  </Alert>
                )}
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  size="large"
                  disabled={submitting}
                  sx={{ py: 1.5 }}
                >
                  {submitting ? <CircularProgress size={24} /> : 'Submit Review'}
                </Button>
              </form>
            </Paper>
          </Grid>

          {/* Reviews List */}
          <Grid item xs={12} md={6} lg={7}>
            <Paper sx={{ 
              p: 3, 
              borderRadius: 2,
              height: '100%',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
              transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
              background: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(10px)',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 12px 28px rgba(0, 0, 0, 0.15)'
              }
            }}>
              {loading ? (
                <Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
                  <CircularProgress />
                </Box>
              ) : error ? (
                <Alert severity="error">{error}</Alert>
              ) : (
                <Box sx={{ maxHeight: '800px', overflowY: 'auto', pr: 2 }}>
          {reviews.map((review) => (
                    <ReviewCard key={review.id}>
                      <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                          <Avatar sx={{ bgcolor: 'primary.main', mr: 2, width: 40, height: 40 }}>
                            {review.name.charAt(0)}
                          </Avatar>
                  <Box>
                            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                              {review.name}
                            </Typography>
                    <Typography variant="body2" color="text.secondary">
                              {new Date(review.date).toLocaleDateString()}
                    </Typography>
                  </Box>
                </Box>
                        <Box sx={{ mb: 2 }}>
                          <StyledRating value={review.rating} readOnly />
                        </Box>
                        <Typography variant="body2" color="text.secondary" gutterBottom>
                          Service: {review.serviceType}
                        </Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>
                  {review.comment}
                </Typography>
                      </CardContent>
                    </ReviewCard>
                  ))}
                </Box>
              )}
              </Paper>
            </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Reviews; 