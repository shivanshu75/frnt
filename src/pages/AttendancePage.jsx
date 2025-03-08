// src/pages/AttendancePage.jsx
import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import axios from "axios";
import AttendanceTable from "../components/Attendance/AttendanceTable";
import FilterDialog from "../components/Attendance/FilterDialog";
import EditAddDialog from "../components/Attendance/EditAddDialog";
import ViewDialog from "../components/Attendance/ViewDialog";
import { styled } from "@mui/material/styles";
import Button from '../components/common/Button'
import { AccessTime,FilterAlt } from "@mui/icons-material";
import { Chip } from "@mui/material";
import moment from "moment-timezone";


const PageTitle = styled(Typography)(({ theme }) => ({
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 700,
    color: "#7e1519",
    position: "relative",
    display: "inline-block",
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: "-8px",
      left: "0",
      width: "60px",
      height: "4px",
      backgroundColor: "#7e1519",
      borderRadius: "2px",
    },
  }));

  const FilterContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(2),
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
    backgroundColor: "rgba(126, 21, 25, 0.05)",
    borderRadius: "12px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
}));
function AttendancePage() {
    const [attendance, setAttendance] = useState([]);
    const [filteredAttendance, setFilteredAttendance] = useState([]);
    const [openDialog, setOpenDialog] = useState(false);
    const [openViewDialog, setOpenViewDialog] = useState(false);
    const [selectedAttendance, setSelectedAttendance] = useState(null);
    const [formErrors, setFormErrors] = useState({});
    const [events, setEvents] = useState([]);
    const [selectedEmployeeId, setSelectedEmployeeId] = useState("");
    const [employeeIds, setEmployeeIds] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [openFilterDialog, setOpenFilterDialog] = useState(false);

    useEffect(() => {
        fetchAttendance();
    }, []);

    useEffect(() => {
        filterAttendanceByDate();
      }, [startDate, endDate, attendance]);


    const fetchAttendance = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/attendance`);
            const attendanceWithNames = await Promise.all(response.data.map(async (att) => {
                try {
                    const employeeResponse = await axios.get(`${import.meta.env.VITE_API_URL}/attendance/${att.employee_id}`);
                    const employeeData = employeeResponse.data[0] || {};
                    return { ...att, employee_name: employeeData.employee_name || "Unknown" };
                } catch (error) {
                    console.error(`Error fetching employee name for ID ${att.employee_id}:`, error);
                    return { ...att, employee_name: "Unknown" };
                }
            }));

            setAttendance(attendanceWithNames);
            setFilteredAttendance(attendanceWithNames);
            const uniqueEmployeeIds = [...new Set(attendanceWithNames.map(att => att.employee_id))];
            setEmployeeIds(uniqueEmployeeIds);
        } catch (error) {
            console.error("Error fetching attendance:", error);
            alert("Failed to fetch attendance.  Please try again.");
        }
    };

    const filterAttendanceByDate = () => {
        if (!startDate && !endDate) {
            setFilteredAttendance(attendance);
            return;
        }

        const filtered = attendance.filter(att => {
            const attendanceDate = moment.utc(att.date).tz("Asia/Kolkata").format("YYYY-MM-DD");

            if (startDate && endDate) {
                return attendanceDate >= startDate && attendanceDate <= endDate;
            } else if (startDate) {
                return attendanceDate >= startDate;
            } else if (endDate) {
                return attendanceDate <= endDate;
            }

            return true; // Default return
        });

        setFilteredAttendance(filtered);
    };


    const resetFilters = () => {
        setStartDate("");
        setEndDate("");
        setFilteredAttendance(attendance);
        setOpenFilterDialog(false);
      };

    const handleEdit = (attendance) => {
        setSelectedAttendance(attendance);
        setOpenDialog(true);
    };

    const handleView = (attendance) => {
        setSelectedAttendance(attendance);
        setOpenViewDialog(true); // Open view dialog
        setSelectedEmployeeId(attendance.employee_id);
        filterAttendance(attendance.employee_id);
    };

    const filterAttendance = (employeeId) => {
        const employeeAttendance = attendance.filter(
          (att) => att.employee_id === employeeId
        );
        const calendarEvents = employeeAttendance.map((att) => ({
          title: `Check-in: ${att.check_in_time} - Check-out: ${att.check_out_time}`,
          check_in_time: att.check_in_time,
          check_out_time: att.check_out_time,
          start: new Date(att.date),
          end: new Date(att.date),
          allDay: false,
          workingHours: att.working_hours,
          checkInLocation: att.check_in_location,
          checkOutLocation: att.check_out_location,
        }));
        setEvents(calendarEvents);
        console.log(calendarEvents);
    };

    

    const handleClose = () => {
        setOpenDialog(false);
        setOpenViewDialog(false); // Close view dialog
        setSelectedAttendance(null);
        setFormErrors({});
        setEvents([]);
        setSelectedEvent(null);
      };
    
      const handleFilterDialogClose = () => {
        setOpenFilterDialog(false);
      };

    const handleSave = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const attendanceData = Object.fromEntries(formData.entries());

        // Form validation
        const errors = {};
        if (!attendanceData.employee_id) errors.employee_id = "Employee ID is required";
        if (!attendanceData.check_in_time) errors.check_in_time = "Check-in time is required";
        if (!attendanceData.check_out_time) errors.check_out_time = "Check-out time is required";

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }

        try {
            const response = selectedAttendance
                ? await axios.put(`${import.meta.env.VITE_API_URL}/attendance/${selectedAttendance.attendance_id}`, attendanceData)
                : await axios.post(`${import.meta.env.VITE_API_URL}/attendance`, attendanceData);

            if (response.status === 200 || response.status === 201) {
                await fetchAttendance();  // Refresh
                handleClose();
            } else {
                throw new Error("Unexpected response status");
            }
        } catch (error) {
            console.error("Error saving attendance:", error);
            alert("Failed to save attendance. Please try again.");
        }
    };

    

    const handleEventClick = (event) => {
        console.log(event);
        setSelectedEvent(event);
      };
    return (
        <Box sx={{ height: "100vh", overflow: "hidden", p: 4, backgroundColor: "#fff",
            backgroundImage: "linear-gradient(135deg, rgba(253,232,199,0.4) 0%, rgba(255,255,255,1) 100%)"
        }}>
            <Box sx={{ mb: 4, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <PageTitle variant="h4">Attendance</PageTitle>
                <Box sx={{ display: "flex", gap: 2 }}>
                    <Button variant="outlined" onClick={() => setOpenFilterDialog(true)}
                        sx={{ borderColor: "#7e1519", color: "#7e1519",
                            "&:hover": { borderColor: "#7e1519", backgroundColor: "rgba(126, 21, 25, 0.05)" }
                        }} startIcon={<FilterAlt />}>
                        Filter by Date
                    </Button>
                    <Button variant="contained" onClick={() => setOpenDialog(true)}
                        sx={{ backgroundColor: "#7e1519",
                            "&:hover": { backgroundColor: "#fdedd1", color: "#7e1519",
                                boxShadow: "0 6px 15px rgba(126, 21, 25, 0.4)"
                            }
                        }} startIcon={<AccessTime />}>
                        Add Attendance
                    </Button>
                </Box>
            </Box>

            {(startDate || endDate) && (
                <FilterContainer>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600, color: "#7e1519" }}>
                        Active Filters:
                    </Typography>
                    {startDate && (
                        <Chip label={`From: ${startDate}`} onDelete={() => setStartDate("")}
                            sx={{ backgroundColor: "rgba(126, 21, 25, 0.1)", color: "#7e1519", fontWeight: 500 }}
                        />
                    )}
                    {endDate && (
                        <Chip label={`To: ${endDate}`} onDelete={() => setEndDate("")}
                            sx={{ backgroundColor: "rgba(126, 21, 25, 0.1)", color: "#7e1519", fontWeight: 500 }}
                        />
                    )}
                    <Button variant="text" size="small" onClick={resetFilters}
                        sx={{ color: "#7e1519", fontWeight: 500 }} >
                        Reset All
                    </Button>
                </FilterContainer>
            )}

            <AttendanceTable filteredAttendance={filteredAttendance} handleEdit={handleEdit} handleView={handleView} />

            <FilterDialog openFilterDialog={openFilterDialog} handleFilterDialogClose={handleFilterDialogClose}
                startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate} resetFilters={resetFilters} />

            <EditAddDialog openDialog={openDialog} handleClose={handleClose}
                selectedAttendance={selectedAttendance} handleSave={handleSave} formErrors={formErrors} />
            {/* {console.log(selectedAttendance)} */}
            <ViewDialog openViewDialog={openViewDialog} handleClose={handleClose}
                employeeIds={employeeIds} attendance={attendance} selectedEmployeeId={selectedEmployeeId}
                handleEmployeeChange={(e) => {
                  const employeeId = e.target.value;
                    setSelectedEmployeeId(employeeId);
                    filterAttendance(employeeId);
                }} events={events}
                handleEventClick={handleEventClick} selectedEvent={selectedEvent} />
        </Box>
    );
}

export default AttendancePage;