import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  Chip,
  Box,
} from '@mui/material';

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

const ServiceRequestList = ({ requests }) => {
  return (
    <List>
      {requests.map((request) => (
        <ListItem
          key={request.id}
          divider
          sx={{
            bgcolor: getStatusColor(request.status),
            mb: 1,
            borderRadius: 1,
          }}
        >
          <ListItemText
            primary={
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>{request.serviceType}</span>
                <Chip
                  label={request.status}
                  size="small"
                  sx={{
                    bgcolor: 'white',
                    fontWeight: 'bold',
                  }}
                />
              </Box>
            }
            secondary={
              <>
                <div>Customer: {request.customer?.fullName}</div>
                <div>Date: {new Date(request.requestDate).toLocaleDateString()}</div>
              </>
            }
          />
        </ListItem>
      ))}
    </List>
  );
};

export default ServiceRequestList; 