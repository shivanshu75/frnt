import React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { styled } from "@mui/material/styles";
import BookingTableRow from './BookingTableRow';

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
    borderRadius: "12px",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
    marginTop: theme.spacing(3),
    overflowY: "scroll",
    height: "65vh",
    maxWidth: "100%",
    "&::-webkit-scrollbar": {
      width: "8px",
    },
    "&::-webkit-scrollbar-track": {
      background: "#f1f1f1",
      borderRadius: "10px",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#7e1519",
      borderRadius: "10px",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      background: "#5e1012",
    },
    "& .MuiTable-root": {
      tableLayout: "fixed",
    },
  }));
  
  const StyledTable = styled(Table)(({ theme }) => ({
    width: "100%",
    borderCollapse: "separate",
    borderSpacing: "0 8px",
    "& .MuiTableCell-root": {
      border: "none",
    },
  }));
const StyledTableHead = styled(TableHead)(({ theme }) => ({
    "& .MuiTableCell-head": {
      backgroundColor: "#7e1519",
      color: "white",
      fontWeight: "bold",
      fontSize: "0.95rem",
      padding: "16px 24px",
      position: "sticky",
      top: 0,
      zIndex: 10,
    },
    "& .MuiTableCell-head:first-of-type": {
      borderTopLeftRadius: "8px",
      borderBottomLeftRadius: "8px",
    },
    "& .MuiTableCell-head:last-of-type": {
      borderTopRightRadius: "8px",
      borderBottomRightRadius: "8px",
    },
  }));
  
const BookingTable = ({ bookings, handleView, handleEdit }) => (
    <Paper sx={{
        width: "100%", height: "75vh", overflowY: "auto", backgroundColor: "white",
        borderRadius: "12px", boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
        "&::-webkit-scrollbar": { width: "8px" },
        "&::-webkit-scrollbar-track": { background: "#f1f1f1", borderRadius: "10px" },
        "&::-webkit-scrollbar-thumb": { background: "#7e1519", borderRadius: "10px" },
        "&::-webkit-scrollbar-thumb:hover": { background: "#5e1012" }
    }}>
        <StyledTable stickyHeader>
            <StyledTableHead>
                <TableRow>
                    <TableCell>Booking ID</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Client Name</TableCell>
                    <TableCell>Mobile No.</TableCell>
                    <TableCell>Shooting Address</TableCell>
                    <TableCell>Booking Amount</TableCell>
                    <TableCell>Actions</TableCell>
                </TableRow>
            </StyledTableHead>
            <TableBody>
                {bookings.map((booking, index) => (
                    <BookingTableRow key={booking.booking_id} booking={booking} index={index} handleView={handleView} handleEdit={handleEdit} />
                ))}
            </TableBody>
        </StyledTable>
    </Paper>
);

export default BookingTable;