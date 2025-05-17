import React, { useState } from 'react';
import MechanicSidebar from '../layout/MechanicSidebar';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  TextField,
  InputAdornment,
  Box,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Menu,
  MenuItem,
} from '@mui/material';
import {
  Search as SearchIcon,
  AccountCircle,
  Visibility as VisibilityIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const MechanicWorkAssigned = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Mock data - replace with actual data from your backend
  const workAssigned = [
    {
      id: 1,
      customerName: 'John Smith',
      vehicleType: 'Car',
      serviceType: 'Engine Repair',
      assignedDate: '2024-03-15',
      status: 'In Progress',
      priority: 'High',
    },
    {
      id: 2,
      customerName: 'Sarah Johnson',
      vehicleType: 'Bike',
      serviceType: 'Brake Service',
      assignedDate: '2024-03-14',
      status: 'Pending',
      priority: 'Medium',
    },
    {
      id: 3,
      customerName: 'Mike Brown',
      vehicleType: 'Car',
      serviceType: 'Oil Change',
      assignedDate: '2024-03-13',
      status: 'Completed',
      priority: 'Low',
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'success';
      case 'In Progress':
        return 'warning';
      case 'Pending':
        return 'error';
      default:
        return 'default';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High':
        return 'error';
      case 'Medium':
        return 'warning';
      case 'Low':
        return 'success';
      default:
        return 'default';
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <MechanicSidebar />
      <Box component="main" sx={{ flexGrow: 1, ml: '200px', background: '#f5f6fa', minHeight: '100vh' }}>
        <AppBar position="static" sx={{ background: '#1976d2', color: 'white', boxShadow: 0 }}>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', fontWeight: 700 }}>
              <span role="img" aria-label="car" style={{ marginRight: 8 }}>🚗</span> Vehicle Service Management
            </Typography>
            <TextField
              size="small"
              placeholder="What you looking for..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
                sx: { background: 'white', borderRadius: 1, height: 36, width: 220 },
              }}
              sx={{ mr: 2 }}
            />
            <IconButton color="inherit" onClick={handleMenu}>
              <AccountCircle />
            </IconButton>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h5" gutterBottom>
              Work Assigned
            </Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Customer Name</TableCell>
                    <TableCell>Vehicle Type</TableCell>
                    <TableCell>Service Type</TableCell>
                    <TableCell>Assigned Date</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Priority</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {workAssigned.map((work) => (
                    <TableRow key={work.id}>
                      <TableCell>{work.id}</TableCell>
                      <TableCell>{work.customerName}</TableCell>
                      <TableCell>{work.vehicleType}</TableCell>
                      <TableCell>{work.serviceType}</TableCell>
                      <TableCell>{work.assignedDate}</TableCell>
                      <TableCell>
                        <Chip label={work.status} color={getStatusColor(work.status)} size="small" />
                      </TableCell>
                      <TableCell>
                        <Chip label={work.priority} color={getPriorityColor(work.priority)} size="small" />
                      </TableCell>
                      <TableCell>
                        <IconButton color="primary" onClick={() => navigate(`/mechanic-work-details/${work.id}`)}>
                          <VisibilityIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
};

export default MechanicWorkAssigned; 