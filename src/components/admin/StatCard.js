import React from 'react';
import { Paper, Box, Typography } from '@mui/material';

const StatCard = ({ title, value, icon, color }) => {
  return (
    <Paper
      sx={{
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        height: 140,
        bgcolor: color,
        color: 'white',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography component="h2" variant="h6" gutterBottom>
          {title}
        </Typography>
        {icon}
      </Box>
      <Typography component="p" variant="h4">
        {value}
      </Typography>
    </Paper>
  );
};

export default StatCard; 