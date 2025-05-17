import React from 'react';
import { Box, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
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

const columns = [
  'Vehicle Name',
  'Category',
  'Vehicle Number',
  'Problem Description',
  'Enquiry Date',
  'Status',
];

const CustomerApprovedRequest = () => {
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
      <Box sx={{ flexGrow: 1, ml: `${drawerWidth}px`, minHeight: '100vh', bgcolor: '#f7f9fb' }}>
        <CustomerTopBar />
        <Box sx={{ maxWidth: 1100, mx: 'auto', mt: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <IconButton onClick={() => navigate('/customer-request')} sx={{ mr: 1 }}>
              <ArrowBackIcon />
            </IconButton>
            <Typography variant="h5" align="center" sx={{ flexGrow: 1, color: 'red', fontWeight: 'bold' }}>
              Approved Request
            </Typography>
          </Box>
          <Paper elevation={3} sx={{ p: 2, borderRadius: 3 }}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    {columns.map((col) => (
                      <TableCell key={col} align="center" sx={{ fontWeight: 'bold' }}>{col}</TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {/* Map your approved requests here */}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default CustomerApprovedRequest; 