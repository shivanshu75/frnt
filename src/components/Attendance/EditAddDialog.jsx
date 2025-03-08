// src/components/Attendance/EditAddDialog.jsx

import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Box } from "@mui/material";
import { AccessTime, Person } from "@mui/icons-material";
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

const EditAddDialog = ({ openDialog, handleClose, selectedAttendance, handleSave, formErrors }) => (
    <Dialog open={openDialog} onClose={handleClose} maxWidth="md" fullWidth
        PaperProps={{ sx: { width: "80%", maxHeight: "90vh", m: "auto", backgroundColor: "#fff", borderRadius: "16px", boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)", overflow: "hidden" } }}
        TransitionComponent={Fade} transitionDuration={400}>

        <StyledDialogTitle>
            <AccessTime sx={{ mr: 1 }} /> {selectedAttendance ? "Edit Attendance" : "Add Attendance"}
        </StyledDialogTitle>
        <form onSubmit={handleSave}>
            <StyledDialogContent>
                <Fade in={true} timeout={500}>
                    <Box sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 3, padding: 3 }}>
                        <StyledTextField label="Employee ID*" name="employee_id"
                            defaultValue={selectedAttendance?.employee_id}
                            error={!!formErrors.employee_id} helperText={formErrors.employee_id}
                            InputProps={{ startAdornment: <Person sx={{ color: "#7e1519", mr: 1 }} /> }} />
                        <StyledTextField label="Check-in Time*" name="check_in_time"
                            defaultValue={selectedAttendance?.check_in_time}
                            error={!!formErrors.check_in_time} helperText={formErrors.check_in_time}
                            type="datetime-local"
                            InputProps={{ startAdornment: (<AccessTime sx={{ color: "#7e1519", mr: 1 }} />) }} />
                        <StyledTextField label="Check-out Time*" name="check_out_time"
                            defaultValue={selectedAttendance?.check_out_time}
                            error={!!formErrors.check_out_time} helperText={formErrors.check_out_time}
                            type="datetime-local"
                            InputProps={{ startAdornment: (<AccessTime sx={{ color: "#7e1519", mr: 1 }} />) }} />
                        <StyledTextField label="Working Hours*" name="working_hours"
                            defaultValue={selectedAttendance?.working_hours}
                            error={!!formErrors.working_hours} helperText={formErrors.working_hours}
                            type="number"
                            InputProps={{ startAdornment: (<AccessTime sx={{ color: "#7e1519", mr: 1 }} />) }} />
                    </Box>
                </Fade>
            </StyledDialogContent>
            <DialogActions sx={{ padding: "16px 24px 24px", backgroundColor: "#fdedd1" }}>
                <Button onClick={handleClose} variant="outlined" size="large"
                    sx={{ borderColor: "#7e1519", color: "#7e1519", "&:hover": { borderColor: "#7e1519", backgroundColor: "rgba(126, 21, 25, 0.05)" } }}>
                    Cancel
                </Button>
                <Button type="submit" variant="contained" size="large"
                    sx={{ backgroundColor: "#7e1519", "&:hover": { backgroundColor: "#fdedd1", color: "#7e1519", boxShadow: "0 6px 15px rgba(126, 21, 25, 0.4)" } }}>
                    Save
                </Button>
            </DialogActions>
        </form>
    </Dialog>
);

export default EditAddDialog;