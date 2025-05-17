import React, { useState } from 'react';
import { Box, Typography, TextField, Button, MenuItem, Select, InputLabel, FormControl, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, IconButton, Paper } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ReceiptIcon from '@mui/icons-material/Receipt';
import FeedbackIcon from '@mui/icons-material/Feedback';
import { useNavigate } from 'react-router-dom';
import CustomerTopBar from './CustomerTopBar';

const drawerWidth = 200;

const sidebarOptions = [
  { label: 'Dashboard', icon: <DashboardIcon />, path: '/customer-dashboard' },
  { label: 'Request', icon: <AssignmentIcon />, path: '/customer-request' },
  { label: 'Invoice', icon: <ReceiptIcon /> },
  { label: 'Feedback', icon: <FeedbackIcon /> },
];

const vehicleCategories = [
  'Two Wheeler With Gear',
  'Two Wheeler Without Gear',
  'Three Wheeler',
  'Four Wheeler'
];

const CustomerMakeRequest = () => {
  const [category, setCategory] = useState('');
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSidebarClick = (option) => {
    if (option.path) {
      navigate(option.path);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle form submission logic here
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
                  },
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
      <Box sx={{ flexGrow: 1, ml: `${drawerWidth}px`, display: 'flex', flexDirection: 'column' }}>
        <CustomerTopBar />
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            minHeight: 'calc(100vh - 64px)',
          }}
        >
          <Box sx={{ maxWidth: 500, width: '100%', p: 3, bgcolor: 'background.paper', borderRadius: 2, boxShadow: 2, ml: 8 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <IconButton onClick={() => navigate('/customer-request')} sx={{ mr: 1 }}>
                <ArrowBackIcon />
              </IconButton>
              <Typography variant="h4" align="center" sx={{ flexGrow: 1 }}>
                MAKE REQUEST
              </Typography>
            </Box>
            <form onSubmit={handleSubmit}>
              <FormControl fullWidth margin="normal">
                <InputLabel>Vehicle Category</InputLabel>
                <Select
                  value={category}
                  label="Vehicle Category"
                  onChange={(e) => setCategory(e.target.value)}
                  required
                >
                  {vehicleCategories.map((cat) => (
                    <MenuItem key={cat} value={cat}>{cat}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <TextField
                label="Vehicle Brand"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                fullWidth
                margin="normal"
                required
              />
              <TextField
                label="Vehicle Model"
                value={model}
                onChange={(e) => setModel(e.target.value)}
                fullWidth
                margin="normal"
                required
              />
              <TextField
                label="Problem Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                fullWidth
                margin="normal"
                required
                multiline
                minRows={3}
              />
              <Button
                type="submit"
                variant="contained"
                color="success"
                fullWidth
                sx={{ mt: 2, height: 48, fontSize: 18 }}
              >
                Submit
              </Button>
            </form>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CustomerMakeRequest; 