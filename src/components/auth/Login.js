import React, { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Link,
  Paper,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
} from '@mui/material';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import PersonIcon from '@mui/icons-material/Person';
import EngineeringIcon from '@mui/icons-material/Engineering';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    userType: 'user', // 'user', 'mechanic', or 'admin'
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUserTypeChange = (event, newUserType) => {
    if (newUserType !== null) {
      setFormData({
        ...formData,
        userType: newUserType,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement login logic with userType
    console.log('Login form submitted:', formData);
    // Navigate based on user type
    if (formData.userType === 'admin') {
      navigate('/admin-dashboard');
    } else if (formData.userType === 'mechanic') {
      navigate('/mechanic-dashboard');
    } else {
      navigate('/customer-dashboard');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            backgroundColor: '#f5f5f5',
          }}
        >
          <Typography component="h1" variant="h4" sx={{ mb: 3, color: '#1976d2' }}>
            Welcome Back
          </Typography>
          
          <ToggleButtonGroup
            value={formData.userType}
            exclusive
            onChange={handleUserTypeChange}
            sx={{ mb: 3 }}
          >
            <ToggleButton value="user" sx={{ px: 4 }}>
              <PersonIcon sx={{ mr: 1 }} />
              User
            </ToggleButton>
            <ToggleButton value="mechanic" sx={{ px: 4 }}>
              <EngineeringIcon sx={{ mr: 1 }} />
              Mechanic
            </ToggleButton>
            <ToggleButton value="admin" sx={{ px: 4 }}>
              <AdminPanelSettingsIcon sx={{ mr: 1 }} />
              Admin
            </ToggleButton>
          </ToggleButtonGroup>

          <Divider sx={{ width: '100%', mb: 3 }} />

          <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={formData.email}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={formData.password}
              onChange={handleChange}
              sx={{ mb: 3 }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              sx={{
                mt: 2,
                mb: 2,
                py: 1.5,
                backgroundColor: formData.userType === 'admin' ? '#d32f2f' : formData.userType === 'mechanic' ? '#388e3c' : '#1976d2',
                '&:hover': {
                  backgroundColor: formData.userType === 'admin' ? '#b71c1c' : formData.userType === 'mechanic' ? '#2e7d32' : '#1565c0',
                },
              }}
            >
              Sign In as {formData.userType === 'admin' ? 'Admin' : formData.userType === 'mechanic' ? 'Mechanic' : 'User'}
            </Button>
            <Box sx={{ textAlign: 'center', mt: 2 }}>
              <Link component={RouterLink} to="/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default Login; 