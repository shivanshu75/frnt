// src/components/Leave/helpers.js
import { EventNote, CheckCircle, Cancel, HourglassEmpty } from "@mui/icons-material";

// Get status icon
export const getStatusIcon = (status) => {
    if (status === "Approved") return <CheckCircle fontSize="small" />;
    if (status === "Rejected") return <Cancel fontSize="small" />;
    return <HourglassEmpty fontSize="small" />;
};

// Get leave type icon
export const getLeaveTypeIcon = (leaveType) => {
    if (leaveType === "Sick Leave") return <EventNote fontSize="small" />;
    if (leaveType === "Casual Leave") return <EventNote fontSize="small" />;
    if (leaveType === "Earned Leave") return <EventNote fontSize="small" />;
    return <EventNote fontSize="small" />;
};