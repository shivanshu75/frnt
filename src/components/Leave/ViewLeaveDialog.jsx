
import React from 'react';
import { Box, Typography, Dialog,  DialogActions,InputLabel,Select,MenuItem } from "@mui/material";
import { CalendarMonth, Person, } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Fade,Chip } from "@mui/material";
import Button from '../common/Button';
import { StyledFormControl,LeaveTypeChip } from './StyledComponents';

const localizer = momentLocalizer(moment);
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
const StyledCalendarContainer = styled(Box)(({ theme }) => ({
    "& .rbc-calendar": {
        fontFamily: "'Poppins', sans-serif", borderRadius: "12px", overflow: "hidden",
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.08)", backgroundColor: "#fff",
    },
    "& .rbc-header": { backgroundColor: "#7e1519", color: "white", padding: "10px 0", fontWeight: 600 },
    "& .rbc-month-view": { borderRadius: "12px" },
    "& .rbc-today": { backgroundColor: "#fff5e6" },
    "& .rbc-event": {
        borderRadius: "6px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", padding: "4px 8px",
        transition: "transform 0.2s ease",
        "&:hover": { transform: "scale(1.02)" },
    },
    "& .rbc-toolbar button": {
        borderRadius: "6px", color: "#7e1519",
        "&:hover": { backgroundColor: "#fff5e6" },
        "&.rbc-active": { backgroundColor: "#7e1519", color: "white" },
    },
}));

const CalendarLegend = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: theme.spacing(2),
    flexWrap: "wrap",
    marginBottom: theme.spacing(3),
  }));
const ViewLeaveDialog = ({ openViewDialog, handleClose, employeeIds, selectedEmployeeId, handleEmployeeChange, events, eventStyleGetter })=>(
    <Dialog
    open={openViewDialog}
    onClose={handleClose}
    maxWidth="md"
    fullWidth
    PaperProps={{
      sx: {
        width: "90%",
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
      <CalendarMonth sx={{ mr: 1 }} /> Leave Calendar
    </StyledDialogTitle>
    <StyledDialogContent>
      <Box sx={{ mb: 3 }}>
        <StyledFormControl fullWidth>
          <InputLabel
            id="employee-select-label"
            style={{ marginTop: "6px" }}
          >
            Employee ID
          </InputLabel>
          <Select
            labelId="employee-select-label"
            id="employee-select"
            value={selectedEmployeeId}
            label="Employee ID"
            onChange={handleEmployeeChange}
            startAdornment={<Person sx={{ color: "#7e1519", mr: 1 }} />}
          >
            {employeeIds.map((id) => (
              <MenuItem key={id} value={id}>
                {id}
              </MenuItem>
            ))}
          </Select>
        </StyledFormControl>
      </Box>

      <Typography
        variant="subtitle1"
        sx={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 600,
          mb: 2,
          color: "#7e1519",
          position: "relative",
          display: "inline-block",
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: "-5px",
            left: "0",
            width: "30px",
            height: "2px",
            backgroundColor: "#7e1519",
            borderRadius: "2px",
          },
          pb: 1,
        }}
      >
        Leave Status Overview
      </Typography>

      <CalendarLegend>
        <Chip
          icon={<CheckCircle style={{ color: "white" }} />}
          label="Approved"
          sx={{
            backgroundColor: "#2ecc71",
            color: "white",
            fontWeight: 500,
            borderRadius: "6px",
            padding: "4px",
            transition: "all 0.2s ease",
            "&:hover": {
              transform: "scale(1.05)",
              backgroundColor: "rgba(46, 204, 113, 0.9)",
            },
          }}
        />
        <Chip
          icon={<Cancel style={{ color: "white" }} />}
          label="Rejected"
          sx={{
            backgroundColor: "#e74c3c",
            color: "white",
            fontWeight: 500,
            borderRadius: "6px",
            padding: "4px",
            transition: "all 0.2s ease",
            "&:hover": {
              transform: "scale(1.05)",
              backgroundColor: "rgba(231, 76, 60, 0.9)",
            },
          }}
        />
        <Chip
          icon={<HourglassEmpty style={{ color: "white" }} />}
          label="Pending"
          sx={{
            backgroundColor: "#f39c12",
            color: "white",
            fontWeight: 500,
            borderRadius: "6px",
            padding: "4px",
            transition: "all 0.2s ease",
            "&:hover": {
              transform: "scale(1.05)",
              backgroundColor: "rgba(243, 156, 18, 0.9)",
            },
          }}
        />
      </CalendarLegend>

      <StyledCalendarContainer>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
          eventPropGetter={eventStyleGetter}
          views={["month", "week", "day"]}
          popup
          tooltipAccessor={(event) => `${event.title}`}
        />
      </StyledCalendarContainer>

      <Box sx={{ mt: 4 }}>
        <Typography
          variant="subtitle1"
          sx={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 600,
            mb: 2,
            color: "#7e1519",
            position: "relative",
            display: "inline-block",
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: "-5px",
              left: "0",
              width: "30px",
              height: "2px",
              backgroundColor: "#7e1519",
              borderRadius: "2px",
            },
            pb: 1,
          }}
        >
          Leave Type Legend
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 2,
            flexWrap: "wrap",
          }}
        >
          <LeaveTypeChip
            icon={<EventNote style={{ color: "white" }} />}
            label="Sick Leave"
            leaveType="Sick Leave"
          />
          <LeaveTypeChip
            icon={<EventNote style={{ color: "white" }} />}
            label="Casual Leave"
            leaveType="Casual Leave"
          />
          <LeaveTypeChip
            icon={<EventNote style={{ color: "white" }} />}
            label="Earned Leave"
            leaveType="Earned Leave"
          />
        </Box>
      </Box>
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
        Close
      </Button>
    </DialogActions>
  </Dialog>
);
export default ViewLeaveDialog;