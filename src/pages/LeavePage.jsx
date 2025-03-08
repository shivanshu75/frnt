import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import axios from "axios";
import LeaveTable from "../components/Leave/LeaveTable";
import LeaveDialog from "../components/Leave/LeaveDialog";
import ViewLeaveDialog from "../components/Leave/ViewLeaveDialog";
import Button from '../components/common/Button'; // Use common Button
import { EventNote } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

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
function LeavePage() {
  const [leaves, setLeaves] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [openViewDialog, setOpenViewDialog] = useState(false); // State for view dialog
  const [selectedLeave, setSelectedLeave] = useState(null);
  const [formErrors, setFormErrors] = useState({});
  const [events, setEvents] = useState([]);
  const [selectedEmployeeId, setSelectedEmployeeId] = useState("");
  const [employeeIds, setEmployeeIds] = useState([]);

  useEffect(() => {
    fetchLeaves();
  }, []);

  const fetchLeaves = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/leaves`
      );
      setLeaves(response.data);

      // Extract unique employee IDs
      const uniqueEmployeeIds = [
        ...new Set(response.data.map((leave) => leave.employee_id)),
      ];
      setEmployeeIds(uniqueEmployeeIds);
    } catch (error) {
      console.error("Error fetching leaves:", error);
      alert("Failed to fetch leaves. Please try again.");
    }
  };

  const handleEdit = (leave) => {
    setSelectedLeave(leave);
    setOpenDialog(true);
  };

  const handleView = (leave) => {
    setSelectedLeave(leave);
    setOpenViewDialog(true); // Open view dialog
    setSelectedEmployeeId(leave.employee_id);
    filterLeaves(leave.employee_id);
  };

  const filterLeaves = (employeeId) => {
    // Filter leaves for the selected employee
    const employeeLeaves = leaves.filter((l) => l.employee_id === employeeId);

    // Map leaves to calendar events
    const calendarEvents = employeeLeaves.map((l) => ({
      title: `${l.leave_type} - ${l.status}`,
      start: new Date(l.leave_date),
      end: new Date(l.leave_date),
      allDay: true,
      status: l.status,
      leaveType: l.leave_type,
      leaveId: l.leave_id,
    }));

    setEvents(calendarEvents);
  };


  const handleClose = () => {
    setOpenDialog(false);
    setOpenViewDialog(false); // Close view dialog
    setSelectedLeave(null);
    setFormErrors({});
    setEvents([]);
  };

  const handleSave = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const leaveData = Object.fromEntries(formData.entries());

    // Form validation
    const errors = {};
    if (!leaveData.employee_id) errors.employee_id = "Employee ID is required";
    if (!leaveData.leave_type) errors.leave_type = "Leave type is required";
    if (!leaveData.leave_date) errors.leave_date = "Leave date is required";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    try {
      const response = selectedLeave
        ? await axios.put(
            `${import.meta.env.VITE_API_URL}/leaves/${selectedLeave.leave_id}`,
            leaveData
          )
        : await axios.post(`${import.meta.env.VITE_API_URL}/leaves`, leaveData);

      if (response.status === 200 || response.status === 201) {
        await fetchLeaves(); // Refresh the leave list
        handleClose();
      } else {
        throw new Error("Unexpected response status");
      }
    } catch (error) {
      console.error("Error saving leave:", error);
      alert("Failed to save leave. Please try again.");
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        overflow: "hidden",
        p: 4,
        backgroundColor: "#fff",
        backgroundImage:
          "linear-gradient(135deg, rgba(253,232,199,0.4) 0%, rgba(255,255,255,1) 100%)",
      }}
    >
      <Box
        sx={{
          mb: 4,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <PageTitle variant="h4">Leave</PageTitle>
        <Button
          variant="contained"
          onClick={() => setOpenDialog(true)}
          sx={{
            backgroundColor: "#7e1519",
            "&:hover": {
              backgroundColor: "#fdedd1",
              color: "#7e1519",
              boxShadow: "0 6px 15px rgba(126, 21, 25, 0.4)",
            },
          }}
          startIcon={<EventNote />}
        >
          Request Leave
        </Button>
      </Box>

      <LeaveTable leaves={leaves}  handleEdit={handleEdit}  handleView={handleView} />

      <LeaveDialog  openDialog={openDialog}  handleClose={handleClose}
        selectedLeave={selectedLeave}  handleSave={handleSave} formErrors={formErrors}  />

      <ViewLeaveDialog  openViewDialog={openViewDialog} handleClose={handleClose}
        employeeIds={employeeIds}  selectedEmployeeId={selectedEmployeeId}
        handleEmployeeChange={(e) => {
          const employeeId = e.target.value;
          setSelectedEmployeeId(employeeId);
          filterLeaves(employeeId);
        }}  events={events}   />
    </Box>
  );
}

export default LeavePage;