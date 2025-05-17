// filepath: src\components\pages\MechanicDashboard.js
// Add this at the top if `YourInvoiceIcon` is a componen; // Replace with the correct pathimport React from 'react';
import {
  Box, Container, Typography, Grid, Card, CardContent, Avatar, IconButton, InputBase, Paper, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Divider
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ListIcon from '@mui/icons-material/List';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ReceiptIcon from '@mui/icons-material/Receipt';
import FeedbackIcon from '@mui/icons-material/Feedback';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

const drawerWidth = 200;

const cardData = [
  {
    color: '#3f51b5',
    icon: <ListIcon fontSize="large" sx={{ color: 'white' }} />,
    label: 'New Request Made',
    value: 0,
  },
  {
    color: '#ff9800',
    icon: <AutorenewIcon fontSize="large" sx={{ color: 'white' }} />,
    label: 'Vehicle Repair In Progress',
    value: 0,
  },
  {
    color: '#4caf50',
    icon: <CheckCircleIcon fontSize="large" sx={{ color: 'white' }} />,
    label: 'Vehicle Repaired',
    value: 0,
  },
  {
    color: '#f44336',
    icon: <CurrencyRupeeIcon fontSize="large" sx={{ color: 'white' }} />,
    label: 'Total Bill',
    value: 'None',
  },
];

const sidebarOptions = [
  { label: 'Dashboard', icon: <DashboardIcon />, path: '/customer-dashboard' },
  { label: 'Request', icon: <AssignmentIcon />, path: '/customer-request' },
  { label: 'Invoice', icon: <ReceiptIcon />, path: '/customer-invoice' },
  { label: 'Feedback', icon: <FeedbackIcon /> },
];

const CustomerDashboard = () => {
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
            top: 64, // height of the AppBar/Navbar
            height: 'calc(100% - 64px)',
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto', mt: 2 }}>
          <List>
            {sidebarOptions.map((option, idx) => (
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
      <Box component="main" sx={{ flexGrow: 1, minHeight: '100vh', bgcolor: '#f7f9fb', p: { xs: 1, sm: 3 }, ml: { md: 2 } }}>
        <Container maxWidth="lg" sx={{ px: { xs: 0, sm: 2 }, pt: 1, pb: { xs: 2, sm: 4 } }}>
          {/* Top bar */}
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', bgcolor: '#fff', boxShadow: 1, mb: 3 }}>
            <Typography variant="h5" sx={{ color: '#1976d2', fontWeight: 'bold' }}>
              Vehicle Service Management
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box sx={{ bgcolor: '#f1f3f4', borderRadius: 1, px: 2, py: 0.5, display: 'flex', alignItems: 'center' }}>
                <InputBase placeholder="What you looking for..." sx={{ ml: 1, flex: 1 }} />
                <IconButton size="small">
                  <SearchIcon />
                </IconButton>
              </Box>
              <IconButton onClick={() => navigate('/customer-profile')}>
                <Avatar sx={{ bgcolor: '#1976d2' }}>
                  <AccountCircleIcon />
                </Avatar>
              </IconButton>
            </Box>
          </Toolbar>

          {/* Cards */}
          <Grid container spacing={4} justifyContent="center" alignItems="stretch" sx={{ my: { xs: 1, sm: 4 } }}>
            {cardData.map((card, idx) => (
              <Grid item xs={12} sm={6} md={3} key={idx} sx={{ display: 'flex' }}>
                <Card sx={{ bgcolor: card.color, color: 'white', boxShadow: 3, width: '100%', mx: 'auto', borderRadius: 3, display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: 140 }}>
                  <CardContent sx={{ textAlign: 'center', p: { xs: 2, sm: 3 } }}>
                    <Box sx={{ mb: 1 }}>{card.icon}</Box>
                    <Typography variant="h5">{card.value}</Typography>
                    <Typography>{card.label}</Typography>
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

export default CustomerDashboard; 