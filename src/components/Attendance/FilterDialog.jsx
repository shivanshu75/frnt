// src/components/Attendance/FilterDialog.jsx

import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Grid } from "@mui/material";
import { CalendarMonth, FilterAlt } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { Fade } from "@mui/material";
import Button from '../common/Button'; // Use the common Button
import { StyledTextField } from './StyledComponents'; // Import common styled components

const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
  backgroundColor: "#7e1519",
  color: "white",
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  padding: theme.spacing(2, 3),
  "& svg": { fontSize: "1.8rem" },
  height: "75px",
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 600,
}));

const StyledDialogContent = styled(DialogContent)(({ theme }) => ({
  backgroundColor: "#fdedd1",
  padding: theme.spacing(3),
}));


const FilterDialog = ({ openFilterDialog, handleFilterDialogClose, startDate, setStartDate, endDate, setEndDate, resetFilters }) => (
  <Dialog open={openFilterDialog} onClose={handleFilterDialogClose} maxWidth="sm" fullWidth
    PaperProps={{
      sx: {
        width: "80%", maxHeight: "90vh", m: "auto", backgroundColor: "#fff",
        borderRadius: "16px", boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)", overflow: "hidden"
      }
    }}
    TransitionComponent={Fade} transitionDuration={400}>

    <StyledDialogTitle>
      <FilterAlt sx={{ mr: 1 }} /> Filter Attendance by Date
    </StyledDialogTitle>
    <StyledDialogContent>
      <Grid container spacing={3} sx={{ mt: 1 }}>
        <Grid item xs={12} sm={6}>
          <StyledTextField label="Start Date" type="date" value={startDate}
            onChange={(e) => setStartDate(e.target.value)} fullWidth
            InputLabelProps={{ shrink: true }}
            InputProps={{ startAdornment: (<CalendarMonth sx={{ color: "#7e1519", mr: 1 }} />) }} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <StyledTextField label="End Date" type="date" value={endDate}
            onChange={(e) => setEndDate(e.target.value)} fullWidth
            InputLabelProps={{ shrink: true }}
            InputProps={{ startAdornment: (<CalendarMonth sx={{ color: "#7e1519", mr: 1 }} />) }} />
        </Grid>
      </Grid>
    </StyledDialogContent>
    <DialogActions sx={{ padding: "16px 24px 24px", backgroundColor: "#fdedd1" }}>
      <Button onClick={resetFilters} variant="outlined" size="large"
        sx={{ borderColor: "#7e1519", color: "#7e1519", "&:hover": { borderColor: "#7e1519", backgroundColor: "rgba(126, 21, 25, 0.05)" } }}>
        Reset
      </Button>
      <Button onClick={handleFilterDialogClose} variant="contained" size="large"
        sx={{ backgroundColor: "#7e1519", "&:hover": { backgroundColor: "#fdedd1", color: "#7e1519", boxShadow: "0 6px 15px rgba(126, 21, 25, 0.4)" } }}>
        Apply Filters
      </Button>
    </DialogActions>
  </Dialog>
);

export default FilterDialog;