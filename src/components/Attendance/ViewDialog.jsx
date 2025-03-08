// src/components/Attendance/ViewDialog.jsx
import React from 'react';
import { Box, Typography, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import { CalendarMonth, AccessTime } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment-timezone";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Fade } from "@mui/material";
import Button from '../common/Button'; // Use the common Button
import EmployeeSelect from './EmployeeSelect';
import LegendChips from './LegendChips';
import EventDetailsCard from './EventDetailsCard';
// import { getWorkingHoursStatus } from './helpers'; // Import helper function


const localizer = momentLocalizer(moment);

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

const ViewDialog = ({ openViewDialog, handleClose, employeeIds, attendance, selectedEmployeeId, handleEmployeeChange, events, handleEventClick, selectedEvent }) => {

    const eventStyleGetter = (event) => {
        let backgroundColor = "#3174ad"; // Default color for events
        if (event.workingHours < 8) {
          backgroundColor = "#e74c3c"; // Red for less than 8 working hours
        } else if (event.workingHours >= 8) {
          backgroundColor = "#2ecc71"; // Green for 8 or more working hours
        }
    
        const style = {
          backgroundColor,
          borderRadius: "6px",
          color: "white",
          border: "none",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        };
    
        return {
          style,
        };
    };
    
    return (
    <Dialog open={openViewDialog} onClose={handleClose} maxWidth="md" fullWidth
        PaperProps={{ sx: { width: "90%", maxHeight: "90vh", m: "auto", backgroundColor: "#fff", borderRadius: "16px", boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)", overflow: "hidden" } }}
        TransitionComponent={Fade} transitionDuration={400}>
        <StyledDialogTitle>
            <CalendarMonth sx={{ mr: 1 }} /> Attendance Calendar
        </StyledDialogTitle>
        <StyledDialogContent>
            <EmployeeSelect employeeIds={employeeIds} attendance={attendance}
                selectedEmployeeId={selectedEmployeeId} handleEmployeeChange={handleEmployeeChange} />

            <Typography variant="subtitle1" sx={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, mb: 2, color: "#7e1519", position: "relative", display: "inline-block", "&::after": { content: '""', position: "absolute", bottom: "-5px", left: "0", width: "30px", height: "2px", backgroundColor: "#7e1519", borderRadius: "2px" }, pb: 1 }}>
                Attendance Overview
            </Typography>

            <LegendChips />

            <StyledCalendarContainer>
                <Calendar localizer={localizer} events={events} startAccessor="start"
                    endAccessor="end" style={{ height: 500 }} eventPropGetter={eventStyleGetter}
                    onSelectEvent={handleEventClick} views={["month", "week", "day"]} popup
                    tooltipAccessor={(event) => `Working Hours: ${event.workingHours}`} />
            </StyledCalendarContainer>

            {selectedEvent && (
                <EventDetailsCard selectedEvent={selectedEvent} getWorkingHoursStatus={getWorkingHoursStatus} />
            )}
        </StyledDialogContent>
        <DialogActions sx={{ padding: "16px 24px 24px", backgroundColor: "#fdedd1" }}>
            <Button onClick={handleClose} variant="outlined" size="large"
                sx={{ borderColor: "#7e1519", color: "#7e1519", "&:hover": { borderColor: "#7e1519", backgroundColor: "rgba(126, 21, 25, 0.05)" } }}>
                Close
            </Button>
        </DialogActions>
    </Dialog>
)};
export default ViewDialog;