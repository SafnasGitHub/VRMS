import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography, Box } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import FeedbackIcon from '@mui/icons-material/Feedback';

const drawerWidth = 200;

const navItems = [
  { text: 'Dashboard', icon: <DashboardIcon />, path: '/mechanic-dashboard' },
  { text: 'Work Assigned', icon: <AssignmentIcon />, path: '/mechanic-work-assigned' },
  { text: 'Salary', icon: <AttachMoneyIcon />, path: '/mechanic-salary' },
  { text: 'Feedback', icon: <FeedbackIcon />, path: '/mechanic-feedback' },
];

const MechanicSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', background: '#f8f9fa', borderRight: '1px solid #e0e0e0' },
      }}
    >
      <Toolbar />
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" color="primary" sx={{ mb: 3, fontWeight: 700 }}>
          Vehicle Service Management
        </Typography>
        <List>
          {navItems.map((item) => (
            <ListItem
              button
              key={item.text}
              selected={location.pathname === item.path}
              onClick={() => navigate(item.path)}
              sx={{ borderRadius: 1, mb: 1, color: location.pathname === item.path ? 'primary.main' : 'inherit', background: location.pathname === item.path ? '#e3f2fd' : 'transparent' }}
            >
              <ListItemIcon sx={{ color: location.pathname === item.path ? 'primary.main' : 'inherit' }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default MechanicSidebar; 