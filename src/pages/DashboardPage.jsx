// src/pages/DashboardPage.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';

function DashboardPage() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Typography>
        Welcome to the Dashboard!  This is a placeholder.  You would add your dashboard
        content (charts, tables, widgets, etc.) here.
      </Typography>
      {/* Add more dashboard content here */}
    </Box>
  );
}

export default DashboardPage;