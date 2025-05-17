import React, { useState } from 'react';
import MechanicSidebar from '../layout/MechanicSidebar';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Container,
  Paper,
  Grid,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Menu,
  MenuItem,
} from '@mui/material';
import {
  Search as SearchIcon,
  AccountCircle,
  Receipt as ReceiptIcon,
} from '@mui/icons-material';

const MechanicSalary = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Mock data - replace with actual data from your backend
  const salaryData = {
    currentMonth: {
      basic: 25000,
      allowances: 5000,
      overtime: 3000,
      deductions: 2000,
      net: 31000,
    },
    history: [
      {
        month: 'March 2024',
        basic: 25000,
        allowances: 5000,
        overtime: 3000,
        deductions: 2000,
        net: 31000,
        status: 'Paid',
      },
      {
        month: 'February 2024',
        basic: 25000,
        allowances: 5000,
        overtime: 2000,
        deductions: 2000,
        net: 30000,
        status: 'Paid',
      },
      {
        month: 'January 2024',
        basic: 25000,
        allowances: 5000,
        overtime: 4000,
        deductions: 2000,
        net: 32000,
        status: 'Paid',
      },
    ],
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
          <Typography variant="h5" color="primary" sx={{ fontWeight: 700, mb: 4, textAlign: 'center' }}>
            Salary Information
          </Typography>
          {/* Current Month Salary Card */}
          <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
            <Typography variant="h6" gutterBottom>
              Current Month Salary
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={3}>
                <Card>
                  <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                      Basic Salary
                    </Typography>
                    <Typography variant="h5">
                      ₹{salaryData.currentMonth.basic}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Card>
                  <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                      Allowances
                    </Typography>
                    <Typography variant="h5">
                      ₹{salaryData.currentMonth.allowances}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Card>
                  <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                      Overtime
                    </Typography>
                    <Typography variant="h5">
                      ₹{salaryData.currentMonth.overtime}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Card>
                  <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                      Net Salary
                    </Typography>
                    <Typography variant="h5">
                      ₹{salaryData.currentMonth.net}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Paper>
          {/* Salary History */}
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h6" gutterBottom>
              Salary History
            </Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Month</TableCell>
                    <TableCell>Basic</TableCell>
                    <TableCell>Allowances</TableCell>
                    <TableCell>Overtime</TableCell>
                    <TableCell>Deductions</TableCell>
                    <TableCell>Net Salary</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {salaryData.history.map((salary) => (
                    <TableRow key={salary.month}>
                      <TableCell>{salary.month}</TableCell>
                      <TableCell>₹{salary.basic}</TableCell>
                      <TableCell>₹{salary.allowances}</TableCell>
                      <TableCell>₹{salary.overtime}</TableCell>
                      <TableCell>₹{salary.deductions}</TableCell>
                      <TableCell>₹{salary.net}</TableCell>
                      <TableCell>{salary.status}</TableCell>
                      <TableCell>
                        <IconButton color="primary" onClick={() => {/* Handle download payslip */}}>
                          <ReceiptIcon />
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

export default MechanicSalary; 