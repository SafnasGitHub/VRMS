import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  Rating,
  Box,
  Typography,
} from '@mui/material';

const FeedbackList = ({ feedbacks }) => {
  return (
    <List>
      {feedbacks.map((feedback) => (
        <ListItem
          key={feedback.id}
          divider
          sx={{
            bgcolor: '#f5f5f5',
            mb: 1,
            borderRadius: 1,
          }}
        >
          <ListItemText
            primary={
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="subtitle1">
                  {feedback.customerName}
                </Typography>
                <Rating value={feedback.rating} readOnly size="small" />
              </Box>
            }
            secondary={
              <>
                <div>Mechanic: {feedback.mechanic?.name}</div>
                <div>Service: {feedback.serviceType}</div>
                {feedback.comment && (
                  <Typography variant="body2" sx={{ mt: 1, fontStyle: 'italic' }}>
                    "{feedback.comment}"
                  </Typography>
                )}
                <div style={{ fontSize: '0.8rem', color: '#666', marginTop: '4px' }}>
                  {new Date(feedback.createdAt).toLocaleDateString()}
                </div>
              </>
            }
          />
        </ListItem>
      ))}
    </List>
  );
};

export default FeedbackList; 