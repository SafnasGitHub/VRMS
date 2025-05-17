import React from 'react';
import {
  Box, Container, Typography, Grid, Card, CardContent, Avatar, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, IconButton, InputBase
} from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import EngineeringIcon from '@mui/icons-material/Engineering';
import AssignmentIcon from '@mui/icons-material/Assignment';
import FeedbackIcon from '@mui/icons-material/Feedback';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 200;

const summaryCards = [
  {
    label: 'Total Customer',
    value: 5,
    icon: <PeopleIcon sx={{ fontSize: 40, color: '#fff' }} />,
    color: '#3f51b5',
  },
  {
    label: 'Total Mechanic',
    value: 2,
    icon: <EngineeringIcon sx={{ fontSize: 40, color: '#fff' }} />,
    color: '#ff9800',
  },
  {
    label: 'Total Enquiry',
    value: 1,
    icon: <AssignmentIcon sx={{ fontSize: 40, color: '#fff' }} />,
    color: '#4caf50',
  },
  {
    label: 'Total Feedback',
    value: 0,
    icon: <FeedbackIcon sx={{ fontSize: 40, color: '#fff' }} />,
    color: '#f44336',
  },
];

const tableColumns = [
  'Customer Name', 'Vehicle Name', 'Category', 'Vehicle Model', 'Vehicle Brand', 'Problem Description'
];

const tableRows = [
  {
    customer: 'sumit kumar',
    vehicle: 'activa',
    category: 'two wheeler with gear',
    model: 'alloy',
    brand: 'honda',
    problem: 'break is not working'
  }
  
];

const sidebarOptions = [
  { label: 'Dashboard', icon: <DashboardIcon />, path: '/admin-dashboard' },
  { label: 'Customer', icon: <PersonIcon />, path: '/admin-customer' },
  { label: 'Mechanic', icon: <EngineeringIcon />, path: '/admin-mechanic' },
  { label: 'Request', icon: <MenuBookIcon />, path: '/admin-request' },
  { label: 'Feedback', icon: <FeedbackIcon />, path: '/admin-feedback' },
];

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSidebarClick = (option) => {
    if (option.path) {
      navigate(option.path);
    }
  };

  const drawer = (
    <div>
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
    </div>
  );

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
        {drawer}
      </Drawer>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, minHeight: '100vh', bgcolor: '#f7f9fb', p: { xs: 1, sm: 3 }, ml: { md: 2 } }}>
        <Container maxWidth="lg">
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
              <IconButton onClick={() => navigate('/admin-profile')}>
                <Avatar sx={{ bgcolor: '#1976d2' }}>
                  <AccountCircleIcon />
                </Avatar>
              </IconButton>
            </Box>
          </Toolbar>

          {/* Cards */}
          <Grid container spacing={4} justifyContent="center" alignItems="stretch" sx={{ mb: 4 }}>
            {summaryCards.map((card, idx) => (
              <Grid item xs={12} sm={6} md={3} key={idx}>
                <Card
                  sx={{ bgcolor: card.color, color: 'white', boxShadow: 3, borderRadius: 3, cursor: 'pointer', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.04)' } }}
                >
                  <CardContent sx={{ textAlign: 'center', p: { xs: 2, sm: 3 } }}>
                    <Avatar sx={{ bgcolor: 'rgba(255,255,255,0.2)', mx: 'auto', mb: 1, width: 56, height: 56 }}>
                      {card.icon}
                    </Avatar>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1 }}>{card.value}</Typography>
                    <Typography variant="subtitle1">{card.label}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Table */}
          <Paper sx={{ p: 3, borderRadius: 3, boxShadow: 3 }}>
            <Typography variant="h6" align="left" sx={{ color: 'red', mb: 2 }}>
              Recent Enquiry By Customer
            </Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    {tableColumns.map(col => (
                      <TableCell key={col} align="center" sx={{ fontWeight: 'bold' }}>{col}</TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tableRows.map((row, idx) => (
                    <TableRow key={idx}>
                      <TableCell align="center">{row.customer}</TableCell>
                      <TableCell align="center">{row.vehicle}</TableCell>
                      <TableCell align="center">{row.category}</TableCell>
                      <TableCell align="center">{row.model}</TableCell>
                      <TableCell align="center">{row.brand}</TableCell>
                      <TableCell align="center">{row.problem}</TableCell>
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

export default AdminDashboard; 