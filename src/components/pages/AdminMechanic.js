import React from 'react';
import {
  Box, Container, Typography, Grid, Card, CardContent, Avatar, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Paper, InputBase, IconButton, Tabs, Tab, TableContainer, Table, TableHead, TableBody, TableRow, TableCell
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
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
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
    label: 'View All Mechanic',
    icon: <VisibilityIcon sx={{ fontSize: 40, color: '#fff' }} />,
    color: '#1976d2',
  },
  {
    label: 'Add Mechanic',
    icon: <AddCircleOutlineIcon sx={{ fontSize: 40, color: '#fff' }} />,
    color: '#26c6da',
  },
  {
    label: 'Approve Mechanic',
    icon: <CheckCircleOutlineIcon sx={{ fontSize: 40, color: '#fff' }} />,
    color: '#ffb300',
  },
  {
    label: 'View Mechanic Salary',
    icon: <CurrencyRupeeIcon sx={{ fontSize: 40, color: '#fff' }} />,
    color: '#ef5350',
  },
];

const AdminMechanic = () => {
  const navigate = useNavigate();
  const [section, setSection] = React.useState(null); // null = show cards

  const handleSidebarClick = (option) => {
    if (option.path) {
      navigate(option.path);
    }
  };

  const handleCardClick = (idx) => {
    setSection(idx);
  };

  const handleBack = () => {
    setSection(null);
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
          {/* Top bar with search and profile */}
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 4 }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
              Vehicle Service Management
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Paper
                component="form"
                sx={{
                  p: '2px 8px',
                  display: 'flex',
                  alignItems: 'center',
                  width: { xs: 180, sm: 300 },
                  boxShadow: 1,
                }}
              >
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="What you looking for..."
                  inputProps={{ 'aria-label': 'search' }}
                />
                <IconButton type="submit" sx={{ p: '10px' }}>
                  <SearchIcon />
                </IconButton>
              </Paper>
              <IconButton onClick={() => navigate('/admin-profile')}>
                <Avatar sx={{ bgcolor: '#1976d2' }}>
                  <AccountCircleIcon />
                </Avatar>
              </IconButton>
            </Box>
          </Box>
          {/* Card dashboard or section */}
          {section === null ? (
            <Grid container spacing={4} justifyContent="center" alignItems="stretch" sx={{ mb: 4 }}>
              {cardData.map((card, idx) => (
                <Grid item xs={12} sm={6} md={3} key={idx}>
                  <Card
                    sx={{ bgcolor: card.color, color: 'white', boxShadow: 3, borderRadius: 3, cursor: 'pointer', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.04)' } }}
                    onClick={() => handleCardClick(idx)}
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
          ) : (
            <Box>
              <IconButton onClick={handleBack} sx={{ mb: 2 }}>
                <ArrowBackIcon />
              </IconButton>
              {section === 0 && <ViewAllMechanics />}
              {section === 1 && <AddMechanic />}
              {section === 2 && <ApproveMechanic />}
              {section === 3 && <ViewMechanicSalary />}
            </Box>
          )}
        </Container>
      </Box>
    </Box>
  );
};

// Placeholder components
const ViewAllMechanics = () => <Typography>View All Mechanics Section</Typography>;
const AddMechanic = () => <Typography>Add Mechanic Section</Typography>;
const ApproveMechanic = () => {
  // Sample data
  const mechanics = [
    {
      name: 'prashant kumar',
      photo: 'https://randomuser.me/api/portraits/men/32.jpg',
      mobile: '9090901111',
      address: 'Muzaffarpur',
      skills: 'wheel expert',
    },
    {
      name: 'johnny sins',
      photo: 'https://randomuser.me/api/portraits/men/44.jpg',
      mobile: '9572181024',
      address: 'Bhopal, MP',
      skills: 'break expert',
    },
  ];

  return (
    <Box>
      <Typography variant="h6" align="center" sx={{ color: 'red', fontWeight: 'bold', mb: 2 }}>
        Hire Mechanics Based On Skill
      </Typography>
      <Paper elevation={3} sx={{ p: 2, borderRadius: 3 }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center" sx={{ fontWeight: 'bold' }}>Mechanic Name</TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold' }}>Profile Picture</TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold' }}>Mobile Number</TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold' }}>Address</TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold' }}>Skills</TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold' }}>Approve</TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold' }}>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {mechanics.map((mech, idx) => (
                <TableRow key={idx}>
                  <TableCell align="center">{mech.name}</TableCell>
                  <TableCell align="center">
                    <Avatar src={mech.photo} alt={mech.name} />
                  </TableCell>
                  <TableCell align="center">{mech.mobile}</TableCell>
                  <TableCell align="center">{mech.address}</TableCell>
                  <TableCell align="center">{mech.skills}</TableCell>
                  <TableCell align="center">
                    <CheckIcon sx={{ color: 'red', fontSize: 28 }} />
                  </TableCell>
                  <TableCell align="center">
                    <CloseIcon sx={{ color: 'blue', fontSize: 28, cursor: 'pointer' }} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};
const ViewMechanicSalary = () => <Typography>View Mechanic Salary Section</Typography>;

export default AdminMechanic; 