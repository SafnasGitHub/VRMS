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
  IconButton,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Rating,
} from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon, Add as AddIcon } from '@mui/icons-material';
import axios from 'axios';

const MechanicsPage = () => {
  const [mechanics, setMechanics] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedMechanic, setSelectedMechanic] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    specialization: '',
    salary: '',
  });

  useEffect(() => {
    fetchMechanics();
  }, []);

  const fetchMechanics = async () => {
    try {
      const response = await axios.get('/api/admin/mechanics');
      setMechanics(response.data);
    } catch (error) {
      console.error('Error fetching mechanics:', error);
    }
  };

  const handleOpen = (mechanic = null) => {
    if (mechanic) {
      setSelectedMechanic(mechanic);
      setFormData({
        name: mechanic.name,
        email: mechanic.email,
        phone: mechanic.phone,
        specialization: mechanic.specialization || '',
        salary: mechanic.salary || '',
      });
    } else {
      setSelectedMechanic(null);
      setFormData({
        name: '',
        email: '',
        phone: '',
        specialization: '',
        salary: '',
      });
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedMechanic(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (selectedMechanic) {
        await axios.put(`/api/admin/mechanics/${selectedMechanic.id}`, formData);
      } else {
        await axios.post('/api/admin/mechanics', formData);
      }
      fetchMechanics();
      handleClose();
    } catch (error) {
      console.error('Error saving mechanic:', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this mechanic?')) {
      try {
        await axios.delete(`/api/admin/mechanics/${id}`);
        fetchMechanics();
      } catch (error) {
        console.error('Error deleting mechanic:', error);
      }
    }
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        Mechanics Management
      </Typography>

      <Button
        variant="contained"
        startIcon={<AddIcon />}
        onClick={() => handleOpen()}
        sx={{ mb: 2 }}
      >
        Add New Mechanic
      </Button>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Specialization</TableCell>
              <TableCell>Rating</TableCell>
              <TableCell>Total Feedbacks</TableCell>
              <TableCell>Salary</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mechanics.map((mechanic) => (
              <TableRow key={mechanic.id}>
                <TableCell>{mechanic.name}</TableCell>
                <TableCell>{mechanic.email}</TableCell>
                <TableCell>{mechanic.phone}</TableCell>
                <TableCell>{mechanic.specialization}</TableCell>
                <TableCell>
                  <Rating value={mechanic.rating || 0} readOnly size="small" />
                </TableCell>
                <TableCell>{mechanic.totalFeedbacks || 0}</TableCell>
                <TableCell>${mechanic.salary || 0}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleOpen(mechanic)} color="primary">
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(mechanic.id)} color="error">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          {selectedMechanic ? 'Edit Mechanic' : 'Add New Mechanic'}
        </DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="Name"
            fullWidth
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Email"
            type="email"
            fullWidth
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Phone"
            fullWidth
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Specialization"
            fullWidth
            value={formData.specialization}
            onChange={(e) => setFormData({ ...formData, specialization: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Salary"
            type="number"
            fullWidth
            value={formData.salary}
            onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit} variant="contained">
            {selectedMechanic ? 'Update' : 'Add'}
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default MechanicsPage; 