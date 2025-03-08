// src/components/Attendance/EmployeeSelect.jsx
import React from 'react';
import { Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { Person } from '@mui/icons-material';
import { styled } from "@mui/material/styles";

const StyledFormControl = styled(FormControl)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    backgroundColor: "white",
    borderRadius: "8px",
    transition: "all 0.2s ease",
    "&:hover": {
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
      borderColor: "#7e1519",
    },
    "&.Mui-focused": {
      boxShadow: "0 4px 12px rgba(126, 21, 25, 0.15)",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#7e1519",
      borderWidth: "2px",
    },
  },
  "& .MuiInputLabel-root": {
    fontFamily: "'Poppins', sans-serif",
    color: "#7e1519",
    "&.Mui-focused": {
      color: "#7e1519",
    },
  },
  "& .MuiSelect-select": {
    fontFamily: "'Poppins', sans-serif",
  },
}));
const EmployeeSelect = ({ employeeIds, attendance, selectedEmployeeId, handleEmployeeChange }) => (
  <Box sx={{ mb: 3 }}>
    <StyledFormControl fullWidth>
      <InputLabel id="employee-select-label" style={{ marginTop: "6px" }}>Employee ID</InputLabel>
      <Select labelId="employee-select-label" id="employee-select" value={selectedEmployeeId}
        label="Employee ID" onChange={handleEmployeeChange}
        startAdornment={<Person sx={{ color: "#7e1519", mr: 1 }} />}>
        {employeeIds.map((id) => {
          const employee = attendance.find((att) => att.employee_id === id);
          return (
            <MenuItem key={id} value={id}>
              {employee?.employee_name || id}
            </MenuItem>
          );
        })}
      </Select>
    </StyledFormControl>
  </Box>
);

export default EmployeeSelect;