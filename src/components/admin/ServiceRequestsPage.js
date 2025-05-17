import React, { useState, useEffect } from 'react';
import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Typography,
  Chip,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
import axios from 'axios';

const ServiceRequestsPage = () => {
  const [requests, setRequests] = useState([]);
  const [mechanics, setMechanics] = useState([]);
  const [selectedMechanic, setSelectedMechanic] = useState({});

  useEffect(() => {
    fetchRequests();
    fetchMechanics();
  }, []);

  const fetchRequests = async () => {
    try {
      const response = await axios.get('/api/admin/service-requests');
      setRequests(response.data);
    } catch (error) {
      console.error('Error fetching service requests:', error);
    }
  };

  const fetchMechanics = async () => {
    try {
      const response = await axios.get('/api/admin/mechanics');
      setMechanics(response.data);
    } catch (error) {
      console.error('Error fetching mechanics:', error);
    }
  };

  const handleStatusChange = async (requestId, newStatus) => {
    try {
      await axios.put(`/api/admin/service-requests/${requestId}/status?status=${newStatus}`);
      fetchRequests();
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const handleAssignMechanic = async (requestId, mechanicId) => {
    try {
      await axios.put(`/api/admin/service-requests/${requestId}/assign/${mechanicId}`);
      fetchRequests();
    } catch (error) {
      console.error('Error assigning mechanic:', error);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'PENDING':
        return '#fff3e0';
      case 'IN_PROGRESS':
        return '#e3f2fd';
      case 'COMPLETED':
        return '#e8f5e9';
      case 'CANCELLED':
        return '#ffebee';
      default:
        return '#f5f5f5';
    }
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        Service Requests Management
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Customer</TableCell>
              <TableCell>Service Type</TableCell>
              <TableCell>Vehicle</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Mechanic</TableCell>
              <TableCell>Request Date</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {requests.map((request) => (
              <TableRow key={request.id}>
                <TableCell>{request.id}</TableCell>
                <TableCell>{request.customer?.fullName}</TableCell>
                <TableCell>{request.serviceType}</TableCell>
                <TableCell>{request.vehicle?.registrationNumber}</TableCell>
                <TableCell>
                  <Chip
                    label={request.status}
                    sx={{ bgcolor: getStatusColor(request.status) }}
                  />
                </TableCell>
                <TableCell>
                  {request.mechanic ? (
                    request.mechanic.name
                  ) : (
                    <FormControl size="small" sx={{ minWidth: 120 }}>
                      <InputLabel>Assign</InputLabel>
                      <Select
                        value={selectedMechanic[request.id] || ''}
                        label="Assign"
                        onChange={(e) => {
                          setSelectedMechanic({
                            ...selectedMechanic,
                            [request.id]: e.target.value,
                          });
                          handleAssignMechanic(request.id, e.target.value);
                        }}
                      >
                        {mechanics.map((mechanic) => (
                          <MenuItem key={mechanic.id} value={mechanic.id}>
                            {mechanic.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  )}
                </TableCell>
                <TableCell>
                  {new Date(request.requestDate).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  <FormControl size="small" sx={{ minWidth: 120 }}>
                    <InputLabel>Status</InputLabel>
                    <Select
                      value={request.status}
                      label="Status"
                      onChange={(e) => handleStatusChange(request.id, e.target.value)}
                    >
                      <MenuItem value="PENDING">Pending</MenuItem>
                      <MenuItem value="IN_PROGRESS">In Progress</MenuItem>
                      <MenuItem value="COMPLETED">Completed</MenuItem>
                      <MenuItem value="CANCELLED">Cancelled</MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ServiceRequestsPage; 