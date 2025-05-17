import React from 'react';
import {
  Box, Container, Typography, Grid, Card, CardContent, Avatar, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import EngineeringIcon from '@mui/icons-material/Engineering';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import FeedbackIcon from '@mui/icons-material/Feedback';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 200;

const sidebarOptions = [
  { label: 'Dashboard', icon: <DashboardIcon />, path: '/admin-dashboard' },
  { label: 'Customer', icon: <PersonIcon />, path: '/admin-customer' },
  { label: 'Mechanic', icon: <EngineeringIcon />, path: '/admin-mechanic' },
  { label: 'Request', icon: <MenuBookIcon />, path: '/admin-request' },
  { label: 'Feedback', icon: <FeedbackIcon />, path: '/admin-feedback' },
];

const cardData = [
  {
    label: 'View All Request',
    icon: <VisibilityIcon sx={{ fontSize: 40, color: '#fff' }} />,
    color: '#1976d2',
    path: '/admin-view-all-request',
  },
  {
    label: 'Make Request',
    icon: <AddCircleOutlineIcon sx={{ fontSize: 40, color: '#fff' }} />,
    color: '#26c6da',
    path: '/admin-make-request',
  },
  {
    label: 'Approve Request',
    icon: <CheckCircleOutlineIcon sx={{ fontSize: 40, color: '#fff' }} />,
    color: '#ffb300',
    path: '/admin-approve-request',
  },
  {
    label: 'Service Cost',
    icon: <CurrencyRupeeIcon sx={{ fontSize: 40, color: '#fff' }} />,
    color: '#ef5350',
    path: '/admin-service-cost',
  },
];

const AdminRequest = () => {
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
      </Drawer>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, minHeight: '100vh', bgcolor: '#f7f9fb', p: { xs: 1, sm: 3 }, ml: { md: 2 } }}>
        <Container maxWidth="lg">
          {/* Top bar */}
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 4 }}>
            <Typography variant="h5" sx={{ color: '#1976d2', fontWeight: 'bold' }}>
              Vehicle Service Management
            </Typography>
            <Box sx={{ width: { xs: 180, sm: 300 } }}>
              {/* Search bar or profile icon can go here */}
            </Box>
          </Box>

          {/* Cards */}
          <Grid container spacing={4} justifyContent="center" alignItems="stretch" sx={{ mb: 4 }}>
            {cardData.map((card, idx) => (
              <Grid item xs={12} sm={6} md={3} key={idx}>
                <Card
                  sx={{ bgcolor: card.color, color: 'white', boxShadow: 3, borderRadius: 3, cursor: 'pointer', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.04)' } }}
                  onClick={() => card.path && navigate(card.path)}
                >
                  <CardContent sx={{ textAlign: 'center', p: { xs: 2, sm: 3 } }}>
                    <Avatar sx={{ bgcolor: 'rgba(255,255,255,0.2)', mx: 'auto', mb: 1 }}>
                      {card.icon}
                    </Avatar>
                    <Typography variant="h6">{card.label}</Typography>
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

export default AdminRequest; 