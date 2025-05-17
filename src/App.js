import React, { useState, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from './components/pages/Dashboard';
import Services from './components/pages/Services';
import BookAppointment from './components/pages/BookAppointment';
import TrackService from './components/pages/TrackService';
import Reviews from './components/pages/Reviews';
import CustomerLanding from './components/pages/CustomerLanding';
import MechanicLanding from './components/pages/MechanicLanding';
import AdminLanding from './components/pages/AdminLanding';
import CustomerDashboard from './components/pages/CustomerDashboard';
import CustomerProfile from './components/pages/CustomerProfile';
import EditCustomerProfile from './components/pages/EditCustomerProfile';
import CustomerRequest from './components/pages/CustomerRequest';
import CustomerPendingRequest from './components/pages/CustomerPendingRequest';
import CustomerMakeRequest from './components/pages/CustomerMakeRequest';
import CustomerApprovedRequest from './components/pages/CustomerApprovedRequest';
import CustomerRequestBill from './components/pages/CustomerRequestBill';
import CustomerViewRequest from './components/pages/CustomerViewRequest';
import AdminDashboard from './components/pages/AdminDashboard';
import AdminMechanic from './components/pages/AdminMechanic';
import AdminProfile from './components/pages/AdminProfile';
import AdminEditProfile from './components/pages/AdminProfile';
import MechanicDashboard from './components/pages/MechanicDashboard';
import ContactUs from './components/pages/ContactUs';
import AboutUs from './components/pages/AboutUs';
import MechanicProfile from './components/pages/MechanicProfile';
import EditMechanicProfile from './components/pages/EditMechanicProfile';
import MechanicWorkAssigned from './components/pages/MechanicWorkAssigned';
import MechanicSalary from './components/pages/MechanicSalary';
import MechanicFeedback from './components/pages/MechanicFeedback';

function AppContent({ darkMode, onToggleDarkMode }) {
  const location = useLocation();
  return (
    <div className="App">
      <Navbar darkMode={darkMode} onToggleDarkMode={onToggleDarkMode} />
      <main style={{ minHeight: 'calc(100vh - 64px - 100px)', padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/customer" element={<CustomerLanding />} />
          <Route path="/mechanic" element={<MechanicLanding />} />
          <Route path="/admin" element={<AdminLanding />} />
          <Route path="/customer-dashboard" element={<CustomerDashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/services" element={<Services />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route path="/track-service" element={<TrackService />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/customer-profile" element={<CustomerProfile />} />
          <Route path="/edit-customer-profile" element={<EditCustomerProfile />} />
          <Route path="/customer-request" element={<CustomerRequest />} />
          <Route path="/customer-request/pending" element={<CustomerPendingRequest />} />
          <Route path="/customer-request/make" element={<CustomerMakeRequest />} />
          <Route path="/customer-request/approved" element={<CustomerApprovedRequest />} />
          <Route path="/customer-request/bill" element={<CustomerRequestBill />} />
          <Route path="/customer-view-request" element={<CustomerViewRequest />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/admin-mechanic" element={<AdminMechanic />} />
          <Route path="/admin-profile" element={<AdminProfile />} />
          <Route path="/admin-edit-profile" element={<AdminEditProfile />} />
          <Route path="/mechanic-dashboard" element={<MechanicDashboard />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/mechanic-profile" element={<MechanicProfile />} />
          <Route path="/mechanic-edit-profile" element={<EditMechanicProfile />} />
          <Route path="/mechanic-work-assigned" element={<MechanicWorkAssigned />} />
          <Route path="/mechanic-salary" element={<MechanicSalary />} />
          <Route path="/mechanic-feedback" element={<MechanicFeedback />} />
        </Routes>
      </main>
      {location.pathname !== '/edit-customer-profile' && (
        <div style={{ marginLeft: 200 }}>
          <Footer />
        </div>
      )}
    </div>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = useMemo(() =>
    createTheme({
      palette: {
        mode: darkMode ? 'dark' : 'light',
        primary: {
          main: '#1976d2',
        },
        secondary: {
          main: '#dc004e',
        },
      },
    }),
    [darkMode]
  );

  const handleToggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AppContent darkMode={darkMode} onToggleDarkMode={handleToggleDarkMode} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
