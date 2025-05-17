import React from 'react';
import { Container, Paper, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Box, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const columns = [
  'Vehicle Name',
  'Category',
  'Vehicle Number',
  'Problem Description',
  'Enquiry Date',
  'Status',
  'Delete Enquiry'
];

const CustomerViewRequest = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Paper sx={{ p: 3, borderRadius: 3, boxShadow: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <IconButton onClick={() => navigate('/customer-request')} sx={{ mr: 1 }}>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" align="center" sx={{ color: 'red', flexGrow: 1 }}>
            Pending Request & Delete
          </Typography>
        </Box>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {columns.map(col => (
                  <TableCell key={col} align="center" sx={{ fontWeight: 'bold' }}>{col}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {/* You can map your pending requests here */}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  );
};

export default CustomerViewRequest; 