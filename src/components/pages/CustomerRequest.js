import React from 'react';
import { Box, Typography, Paper, Grid, Avatar, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, IconButton } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ReceiptIcon from '@mui/icons-material/Receipt';
import FeedbackIcon from '@mui/icons-material/Feedback';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CustomerTopBar from './CustomerTopBar';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 200;

const sidebarOptions = [
  { label: 'Dashboard', icon: <DashboardIcon />, path: '/customer-dashboard' },
  { label: 'Request', icon: <AssignmentIcon />, path: '/customer-request' },
  { label: 'Invoice', icon: <ReceiptIcon /> },
  { label: 'Feedback', icon: <FeedbackIcon />, path: '/reviews' },
];

const cardData = [
  {
    label: 'View Pending Request',
    icon: <VisibilityIcon sx={{ fontSize: 40, color: '#fff' }} />,
    color: '#1976d2',
    path: '/customer-view-request',
  },
  {
    label: 'Make Request',
    icon: <AddCircleOutlineIcon sx={{ fontSize: 40, color: '#fff' }} />,
    color: '#26c6da',
    path: '/customer-request/make',
  },
  {
    label: 'Approved Request',
    icon: <CheckCircleOutlineIcon sx={{ fontSize: 40, color: '#fff' }} />,
    color: '#ffb300',
    path: '/customer-request/approved',
  },
  {
    label: 'Approved Request Bill',
    icon: <CurrencyRupeeIcon sx={{ fontSize: 40, color: '#fff' }} />,
    color: '#ef5350',
    path: '/customer-request/bill',
  },
];

const CustomerRequest = () => {
  const navigate = useNavigate();

  const handleSidebarClick = (option) => {
    if (option.path) {
      navigate(option.path);
    }
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
      <Box component="main" sx={{ flexGrow: 1, minHeight: '100vh', bgcolor: '#fff', p: { xs: 1, sm: 3 }, ml: { md: 2 } }}>
        {/* Wide Top Bar */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            mb: 4,
            px: 0,
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
            Vehicle Service Management
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Paper
              component="form"
              sx={{
                p: '2px 8px',
                display: 'flex',
                alignItems: 'center',
                width: { xs: 180, sm: 300 },
                boxShadow: 1,
              }}
            >
              <input
                style={{
                  border: 'none',
                  outline: 'none',
                  background: 'transparent',
                  width: '100%',
                  fontSize: 16,
                }}
                placeholder="What you looking for..."
              />
              <IconButton type="submit">
                <SearchIcon />
              </IconButton>
            </Paper>
            <IconButton>
              <Avatar sx={{ bgcolor: '#1976d2' }}>
                <AccountCircleIcon />
              </Avatar>
            </IconButton>
          </Box>
        </Box>
        {/* Cards Section */}
        <Box sx={{ mt: 0 }}>
          <Grid container spacing={3} justifyContent="flex-start">
            {cardData.map((card) => (
              <Grid item xs={12} sm={6} md={3} key={card.label}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    background: card.color,
                    color: '#fff',
                    borderRadius: 3,
                    minHeight: 140,
                    cursor: 'pointer',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-4px) scale(1.03)',
                      boxShadow: 6,
                    },
                  }}
                  onClick={() => card.path && navigate(card.path)}
                >
                  <Avatar sx={{ bgcolor: 'transparent', mb: 1, width: 56, height: 56 }}>
                    {card.icon}
                  </Avatar>
                  <Typography variant="subtitle1" sx={{ fontWeight: 500, textAlign: 'center' }}>
                    {card.label}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default CustomerRequest; 