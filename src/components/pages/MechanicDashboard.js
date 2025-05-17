import React from 'react';
import MechanicSidebar from '../layout/MechanicSidebar';
import { AppBar, Toolbar, Typography, IconButton, InputBase, Box, Grid, Card, CardContent } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ListAltIcon from '@mui/icons-material/ListAlt';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const cardData = [
  {
    color: '#3f51b5',
    icon: <ListAltIcon sx={{ fontSize: 40, color: 'white' }} />, title: '1', subtitle: 'New Work Assigned',
  },
  {
    color: '#ff9800',
    icon: <AutorenewIcon sx={{ fontSize: 40, color: 'white' }} />, title: '0', subtitle: 'Work In Progress',
  },
  {
    color: '#4caf50',
    icon: <CheckCircleIcon sx={{ fontSize: 40, color: 'white' }} />, title: '0', subtitle: 'Work Completed',
  },
  {
    color: '#f44336',
    icon: <AttachMoneyIcon sx={{ fontSize: 40, color: 'white' }} />, title: '₹ 10000', subtitle: 'Salary',
  },
];

const MechanicDashboard = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <MechanicSidebar />
      <Box component="main" sx={{ flexGrow: 1, ml: '200px', background: '#f5f6fa', minHeight: '100vh' }}>
        <AppBar position="static" sx={{ background: '#1976d2', color: 'white', boxShadow: 0 }}>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', fontWeight: 700 }}>
              <span role="img" aria-label="car" style={{ marginRight: 8 }}>🚗</span> Vehicle Service Management
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
              <InputBase
                placeholder="What you looking for..."
                sx={{ background: 'white', borderRadius: 1, pl: 2, pr: 2, height: 36, mr: 2, width: 220 }}
                startAdornment={<SearchIcon sx={{ color: '#bdbdbd', mr: 1 }} />}
              />
              <IconButton color="inherit">
                <AccountCircle />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        <Box sx={{ p: 4 }}>
          <Typography variant="h5" color="primary" sx={{ fontWeight: 700, mb: 4, textAlign: 'center' }}>
            Vehicle Service Management
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {cardData.map((card, idx) => (
              <Grid item key={idx}>
                <Card sx={{ width: 220, height: 160, background: card.color, color: 'white', borderRadius: 3, boxShadow: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 3 }}>
                    {card.icon}
                    <Typography variant="h4" sx={{ fontWeight: 700, mt: 1 }}>{card.title}</Typography>
                    <Typography variant="subtitle1" sx={{ mt: 1 }}>{card.subtitle}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default MechanicDashboard; 