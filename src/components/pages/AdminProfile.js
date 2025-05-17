import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Container,
  Paper,
  Avatar,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  IconButton,
  Grid,
  InputBase
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ReceiptIcon from '@mui/icons-material/Receipt';
import FeedbackIcon from '@mui/icons-material/Feedback';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EditIcon from '@mui/icons-material/Edit';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

const drawerWidth = 200;

const sidebarOptions = [
  { label: 'Dashboard', icon: <DashboardIcon />, path: '/admin-dashboard' },
  { label: 'Customer', icon: <AssignmentIcon />, path: '/admin-Customer' },
  { label: 'Mechanic', icon: <ReceiptIcon />, path: '/admin-mechanic' },
  { label: 'Request', icon: <FeedbackIcon />, path: '/admin-Request' },
  { label: 'Feedback', icon: <FeedbackIcon />, path: '/admin-feedback' },

];

const admin = {
  name: 'sumit',
  email: '9572181024',
  phone: 'bhopal mp',
  photo: '',
  vehicleType: 'Sedan',
  model: 'Toyota Camry',
  year: '2020',
};

const AdminProfile = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const navigate = useNavigate();

  const handleBookmarkToggle = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <Box sx={{ p: 4, display: 'flex' }}>
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
              <ListItem button key={option.label} component={RouterLink} to={option.path}>
                <ListItemIcon sx={{ minWidth: 40 }}>{option.icon}</ListItemIcon>
                <ListItemText primary={option.label} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Main Content */}
      <Box sx={{ flexGrow: 1 }}>
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
            <IconButton onClick={() => navigate('/admin-profile')}>
              <Avatar sx={{ bgcolor: '#1976d2' }}>
                <AccountCircleIcon />
              </Avatar>
            </IconButton>
          </Box>
        </Toolbar>
        <Typography variant="h5" sx={{ color: '#1976d2', fontWeight: 'bold', mb: 3 }}>
         
        </Typography>
        <Typography variant="h4" sx={{ mb: 2 }}>
          Profile
        </Typography>
        <Paper sx={{ p: 4, maxWidth: 700, mx: 'auto', display: 'flex', alignItems: 'center', gap: 4 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mr: 4 }}>
            <Avatar sx={{ width: 120, height: 120, bgcolor: '#1976d2', mb: 2 }}>
              <AccountCircleIcon sx={{ fontSize: 80 }} />
            </Avatar>
            <Button
              variant="contained"
              startIcon={<AccountCircleIcon />}
              onClick={() => navigate('/admin-edit-profile')}
            >
              Edit Profile
            </Button>
          </Box>
          <Box>
            <Typography variant="h6" sx={{ mb: 1 }}>Personal Information</Typography>
            <Typography><b>Name:</b> {admin.name}</Typography>
            <Typography><b>Email:</b> {admin.email}</Typography>
            <Typography><b>Phone:</b> {admin.phone}</Typography>
            <Box sx={{ mt: 2 }}>
              <Typography variant="h6" sx={{ mb: 1 }}>Other Information</Typography>
              <Typography><b>Role:</b> Administrator</Typography>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default AdminProfile; 