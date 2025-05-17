import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
  Switch,
} from '@mui/material';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Customer', to: '/customer' },
  { label: 'Mechanics', to: '/mechanic' },
  { label: 'Admin', to: '/admin' },
  { label: 'About Us', to: '/about' },
  { label: 'Contact Us', to: '/contact-us' },
];

const Navbar = ({ darkMode, onToggleDarkMode }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawer = (
    <Box sx={{ width: 250 }} role="presentation" onClick={handleDrawerToggle}>
      <List>
        {navLinks.map((link) => (
          <ListItem button component={RouterLink} to={link.to} key={link.label}>
            <ListItemText primary={link.label} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar>
          <DirectionsCarIcon sx={{ mr: 2 }} />
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{
              flexGrow: 1,
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            Vehicle Service Management
          </Typography>
          {isMobile ? (
            <>
              <IconButton color="inherit" onClick={handleDrawerToggle} sx={{ mr: 1 }}>
                <MenuIcon />
              </IconButton>
              <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
                {drawer}
              </Drawer>
            </>
          ) : (
            <Box>
              {navLinks.map((link) => (
                <Button color="inherit" component={RouterLink} to={link.to} key={link.label}>
                  {link.label}
                </Button>
              ))}
            </Box>
          )}
          <IconButton sx={{ ml: 2 }} color="inherit" onClick={onToggleDarkMode}>
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar; 