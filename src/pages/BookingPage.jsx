"use client";

import { useState, useEffect } from "react";
import { Box,Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import axios from "axios";
import BookingTable from "../components/Booking/BookingTable";
import ViewDialog from "../components/Booking/ViewDialog";
import EditDialog from "../components/Booking/EditDialog";

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

function BookingPage() {
    const [bookings, setBookings] = useState([]);
    const [openDialog, setOpenDialog] = useState(false);
    const [openEditDialog, setOpenEditDialog] = useState(false);
    const [selectedBooking, setSelectedBooking] = useState(null);
    const [shootingSchedules, setShootingSchedules] = useState([]);
    const [telecastSchedules, setTelecastSchedules] = useState([]);
    const [leadDetails, setLeadDetails] = useState(null);
    const [editFormData, setEditFormData] = useState({
      booking_amount: "",
      advance_received: "",
      program_type: "",
      shooting_address: "",
      shooting_address_pincode: "",
      booked_by: "",
    });
  
    useEffect(() => {
      fetchBookings();
    }, []);
  
    const fetchBookings = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/bookings`
        );
        setBookings(response.data);
      } catch (error) {
        console.error("Error fetching bookings:", error);
        alert("Failed to fetch bookings. Please try again.");
      }
    };
  
    const fetchLeadDetails = async (leadId) => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/leads`);
        const lead = response.data.find((lead) => lead.lead_id === leadId);
        setLeadDetails(lead);
      } catch (error) {
        console.error("Error fetching lead details:", error);
        alert("Failed to fetch lead details. Please try again.");
      }
    };
  
    const fetchShootingSchedules = async (bookingId) => {
      try {
        const response = await axios.get(
          `${
            import.meta.env.VITE_API_URL
          }/bookings/${bookingId}/shooting-schedules`
        );
        setShootingSchedules(response.data);
      } catch (error) {
        console.error("Error fetching shooting schedules:", error);
        alert("Failed to fetch shooting schedules. Please try again.");
      }
    };
  
    const fetchTelecastSchedules = async (bookingId) => {
      try {
        const response = await axios.get(
          `${
            import.meta.env.VITE_API_URL
          }/bookings/${bookingId}/telecast-schedules`
        );
        setTelecastSchedules(response.data);
      } catch (error) {
        console.error("Error fetching telecast schedules:", error);
        alert("Failed to fetch telecast schedules. Please try again.");
      }
    };
  
    const handleView = async (booking) => {
      setSelectedBooking(booking);
  
      // Fetch shooting schedules
      await fetchShootingSchedules(booking.booking_id);
  
      // Fetch telecast schedules
      await fetchTelecastSchedules(booking.booking_id);
  
      if (booking.client_id) {
        fetchLeadDetails(booking.client_id);
      }
  
      setOpenDialog(true);
    };
  
    const handleEdit = (booking) => {
      setSelectedBooking(booking);
      setEditFormData({
        booking_amount: booking.booking_amount || "",
        advance_received: booking.advance_received || "",
        program_type: booking.program_type || "",
        shooting_address: booking.shooting_address || "",
        shooting_address_pincode: booking.shooting_address_pincode || "",
        booked_by: booking.booked_by || "",
      });
      setOpenEditDialog(true);
    };
  
    const handleClose = () => {
      setOpenDialog(false);
      setSelectedBooking(null);
      setShootingSchedules([]);
      setTelecastSchedules([]);
      setLeadDetails(null);
    };
  
    const handleEditClose = () => {
      setOpenEditDialog(false);
    };
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setEditFormData({
        ...editFormData,
        [name]: value,
      });
    };
  
    const handleSaveEdit = async () => {
      try {
        await axios.put(
          `${import.meta.env.VITE_API_URL}/bookings/${
            selectedBooking.booking_id
          }`,
          {
            ...editFormData,
            client_id: selectedBooking.client_id,
          }
        );
        fetchBookings();
        handleEditClose();
      } catch (error) {
        console.error("Error updating booking:", error);
        alert("Failed to update booking. Please try again.");
      }
    };
  
    const handleSave = async (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
      const bookingData = Object.fromEntries(formData.entries());
  
      try {
        if (selectedBooking) {
          await axios.put(
            `${import.meta.env.VITE_API_URL}/bookings/${
              selectedBooking.booking_id
            }`,
            bookingData
          );
        } else {
          await axios.post(
            `${import.meta.env.VITE_API_URL}/bookings`,
            bookingData
          );
        }
        fetchBookings();
        handleClose();
      } catch (error) {
        console.error("Error saving booking:", error);
        alert("Failed to save booking. Please try again.");
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
          <PageTitle variant="h4">Bookings</PageTitle>
        </Box>
  
        <BookingTable bookings={bookings} handleView={handleView} handleEdit={handleEdit} />
  
        <ViewDialog
        openDialog={openDialog}
        handleClose={handleClose}
        selectedBooking={selectedBooking}
        shootingSchedules={shootingSchedules}
        telecastSchedules={telecastSchedules}
        leadDetails={leadDetails}
        fetchShootingSchedules={fetchShootingSchedules}
        fetchTelecastSchedules={fetchTelecastSchedules}
        fetchLeadDetails={fetchLeadDetails}
        handleSave={handleSave}
      />

      <EditDialog
        openEditDialog={openEditDialog}
        handleEditClose={handleEditClose}
        selectedBooking={selectedBooking}
        editFormData={editFormData}
        handleInputChange={handleInputChange}
        handleSaveEdit={handleSaveEdit}
      />
    </Box>

    );
}

export default BookingPage;