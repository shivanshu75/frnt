// src/components/Attendance/LegendChips.jsx
import React from 'react';
import { Box, Chip } from '@mui/material';
import { AccessTime } from '@mui/icons-material';

const LegendChips = () => (
  <Box sx={{ display: "flex", gap: 2, mb: 3, flexWrap: "wrap" }}>
    <Chip icon={<AccessTime style={{ color: "#2ecc71" }} />} label="On Target (8+ hrs)"
      sx={{ backgroundColor: "rgba(46, 204, 113, 0.1)", color: "#2ecc71", fontWeight: 500, borderRadius: "6px", padding: "4px", transition: "all 0.2s ease", "&:hover": { transform: "scale(1.05)", backgroundColor: "rgba(46, 204, 113, 0.2)" } }} />
    <Chip icon={<AccessTime style={{ color: "#e74c3c" }} />} label="Below Target (<8 hrs)"
      sx={{ backgroundColor: "rgba(231, 76, 60, 0.1)", color: "#e74c3c", fontWeight: 500, borderRadius: "6px", padding: "4px", transition: "all 0.2s ease", "&:hover": { transform: "scale(1.05)", backgroundColor: "rgba(231, 76, 60, 0.2)" } }} />
    <Chip icon={<AccessTime style={{ color: "#3174ad" }} />} label="Default"
      sx={{ backgroundColor: "rgba(49, 116, 173, 0.1)", color: "#3174ad", fontWeight: 500, borderRadius: "6px", padding: "4px", transition: "all 0.2s ease", "&:hover": { transform: "scale(1.05)", backgroundColor: "rgba(49, 116, 173, 0.2)" } }} />
  </Box>
);

export default LegendChips;