import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Box,
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  People as PeopleIcon,
  Build as BuildIcon,
  Assignment as AssignmentIcon,
  Star as StarIcon,
} from '@mui/icons-material';

const AdminNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, path: '/admin' },
    { text: 'Mechanics', icon: <BuildIcon />, path: '/admin/mechanics' },
    { text: 'Service Requests', icon: <AssignmentIcon />, path: '/admin/service-requests' },
    { text: 'Customers', icon: <PeopleIcon />, path: '/admin/customers' },
    { text: 'Feedbacks', icon: <StarIcon />, path: '/admin/feedbacks' },
  ];

  return (
    <Box sx={{ width: 240, flexShrink: 0 }}>
      <List>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.text}
            onClick={() => navigate(item.path)}
            selected={location.pathname === item.path}
            sx={{
              '&.Mui-selected': {
                bgcolor: 'primary.light',
                '&:hover': {
                  bgcolor: 'primary.light',
                },
              },
            }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );
};

export default AdminNavigation; 