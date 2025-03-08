import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Box,  Select, MenuItem, FormHelperText } from "@mui/material";
import {  EventNote, Person,  DateRange } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { Fade } from "@mui/material";
import Button from '../common/Button';
import { StyledTextField, StyledFormControl } from './StyledComponents'; // Import common styled components.

const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
  backgroundColor: "#7e1519",
  color: "white",
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  padding: theme.spacing(2, 3),
  "& svg": {
    fontSize: "1.8rem",
  },
  height: "75px",
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 600,
}));

const StyledDialogContent = styled(DialogContent)(({ theme }) => ({
  backgroundColor: "#fdedd1",
  padding: theme.spacing(3),
}));

const LeaveDialog = ({ openDialog, handleClose, selectedLeave, handleSave, formErrors }) => (
    <Dialog
    open={openDialog}
    onClose={handleClose}
    maxWidth="md"
    fullWidth
    PaperProps={{
      sx: {
        width: "80%",
        maxHeight: "90vh",
        m: "auto",
        backgroundColor: "#fff",
        borderRadius: "16px",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
      },
    }}
    TransitionComponent={Fade}
    transitionDuration={400}
  >
    <StyledDialogTitle>
      <EventNote sx={{ mr: 1 }} />{" "}
      {selectedLeave ? "Edit Leave Request" : "New Leave Request"}
    </StyledDialogTitle>
    <form onSubmit={handleSave}>
      <StyledDialogContent>
        <Fade in={true} timeout={500}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 3,
              padding: 3,
            }}
          >
            <StyledTextField
              label="Employee ID*"
              name="employee_id"
              defaultValue={selectedLeave?.employee_id}
              error={!!formErrors.employee_id}
              helperText={formErrors.employee_id}
              InputProps={{
                startAdornment: <Person sx={{ color: "#7e1519", mr: 1 }} />,
              }}
            />
            <StyledFormControl>
              <InputLabel shrink={true}>Leave Type*</InputLabel>
              <Select
                name="leave_type"
                defaultValue={selectedLeave?.leave_type || "NAN"}
                error={!!formErrors.leave_type}
                label="Leave Type"
                sx={{
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#7e1519",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#7e1519",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#7e1519",
                  },
                }}
                startAdornment={
                  <EventNote sx={{ color: "#7e1519", mr: 1 }} />
                }
              >
                <MenuItem value="Sick Leave">Sick Leave</MenuItem>
                <MenuItem value="Casual Leave">Casual Leave</MenuItem>
                <MenuItem value="Earned Leave">Earned Leave</MenuItem>
              </Select>
              {formErrors.leave_type && (
                <FormHelperText error>
                  {formErrors.leave_type}
                </FormHelperText>
              )}
            </StyledFormControl>
            <StyledTextField
              label="Leave Date*"
              name="leave_date"
              defaultValue={selectedLeave?.leave_date}
              error={!!formErrors.leave_date}
              helperText={formErrors.leave_date}
              type="date"
              InputProps={{
                startAdornment: (
                  <DateRange sx={{ color: "#7e1519", mr: 1 }} />
                ),
              }}
            />
            <StyledFormControl>
              <InputLabel shrink={true}>Status</InputLabel>
              <Select
                name="status"
                defaultValue={selectedLeave?.status || "Pending"}
                label="Status"
                sx={{
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#7e1519",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#7e1519",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#7e1519",
                  },
                }}
              >
                <MenuItem value="Pending">
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <HourglassEmpty sx={{ mr: 1, color: "#f39c12" }} />
                    Pending
                  </Box>
                </MenuItem>
                <MenuItem value="Approved">
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <CheckCircle sx={{ mr: 1, color: "#2ecc71" }} />
                    Approved
                  </Box>
                </MenuItem>
                <MenuItem value="Rejected">
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Cancel sx={{ mr: 1, color: "#e74c3c" }} />
                    Rejected
                  </Box>
                </MenuItem>
              </Select>
            </StyledFormControl>
          </Box>
        </Fade>
      </StyledDialogContent>
      <DialogActions
        sx={{ padding: "16px 24px 24px", backgroundColor: "#fdedd1" }}
      >
        <Button
          onClick={handleClose}
          variant="outlined"
          size="large"
          sx={{
            borderColor: "#7e1519",
            color: "#7e1519",
            "&:hover": {
              borderColor: "#7e1519",
              backgroundColor: "rgba(126, 21, 25, 0.05)",
            },
          }}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          variant="contained"
          size="large"
          sx={{
            backgroundColor: "#7e1519",
            "&:hover": {
              backgroundColor: "#fdedd1",
              color: "#7e1519",
              boxShadow: "0 6px 15px rgba(126, 21, 25, 0.4)",
            },
          }}
        >
          Save
        </Button>
      </DialogActions>
    </form>
  </Dialog>
);
export default LeaveDialog;