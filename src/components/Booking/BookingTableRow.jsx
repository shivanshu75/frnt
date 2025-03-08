import React from 'react';
import { TableRow, TableCell,  Box,  Chip} from "@mui/material";
import { styled } from "@mui/material/styles";
import {
    CalendarMonth,
     Person,
  } from "@mui/icons-material";
import { formatDateIST } from './helpers'; // Make sure this helper exists
import ActionButton from './ActionButtons'; // Assuming you have this

const StyledTableRow = styled(TableRow)(({ theme, index }) => ({
    backgroundColor: "#fdedd1",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.05)",
    borderRadius: "8px",
    marginBottom: "8px",
    transition: "all 0.3s ease",
    animation: `fadeIn 0.5s ease-out ${index * 0.05}s both`,
    "@keyframes fadeIn": {
      "0%": {
        opacity: 0,
        transform: "translateY(10px)",
      },
      "100%": {
        opacity: 1,
        transform: "translateY(0)",
      },
    },
    "& .MuiTableCell-body": {
      padding: "16px 24px",
    },
    "& .MuiTableCell-body:first-of-type": {
      borderTopLeftRadius: "8px",
      borderBottomLeftRadius: "8px",
    },
    "& .MuiTableCell-body:last-of-type": {
      borderTopRightRadius: "8px",
      borderBottomRightRadius: "8px",
    },
    "&:nth-of-type(odd)": {
      backgroundColor: "#fde8c7",
    },
    "&:hover": {
      backgroundColor: "#f8d9a0",
      transform: "translateY(-2px)",
      boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
    },
    "&:active": {
      transform: "translateY(0)",
      boxShadow: "0 2px 6px rgba(0, 0, 0, 0.05)",
    },
  }));
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxWidth: "150px",
    fontFamily: "'Poppins', sans-serif",
    fontSize: "14px",
    fontWeight: 500,
    padding: "16px 24px",
  }));

const BookingTableRow = ({ booking, index, handleView, handleEdit }) => (
  <StyledTableRow key={booking.booking_id} index={index}>
    <StyledTableCell>
      <Chip label={booking.booking_id} size="small" sx={{ backgroundColor: "#7e1519", color: "white", fontWeight: "bold",
                transition: "all 0.2s ease", "&:hover": { transform: "scale(1.05)", boxShadow: "0 2px 8px rgba(126, 21, 25, 0.3)" }
            }}  />
    </StyledTableCell>
    <StyledTableCell>
        <Chip
            label={formatDateIST(booking.created_at)} // Use the helper function
            size="small"
            icon={<CalendarMonth fontSize="small" />}
            sx={{
            backgroundColor: "#6c757d",
            color: "white",
            fontWeight: 500,
            transition: "all 0.2s ease",
            "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 2px 8px rgba(108, 117, 125, 0.3)",
            },
            }}
        />
    </StyledTableCell>
    <StyledTableCell>
      <Chip label={booking.client_name} size="small"
            icon={<Person fontSize="small" />} sx={{ backgroundColor: "#7e1519", color: "white", fontWeight: 500,
                transition: "all 0.2s ease", "&:hover": { transform: "scale(1.05)", boxShadow: "0 2px 8px rgba(126, 21, 25, 0.3)" }
            }} />
    </StyledTableCell>
    <StyledTableCell>{booking.client_contact_no1}</StyledTableCell>
    <StyledTableCell>{booking.shooting_address}</StyledTableCell>
    <StyledTableCell>
      <Chip label={`₹${booking.booking_amount}`} size="small"
            sx={{ backgroundColor: "#28a745", color: "white", fontWeight: 500,
                transition: "all 0.2s ease", "&:hover": { transform: "scale(1.05)", boxShadow: "0 2px 8px rgba(40, 167, 69, 0.3)" }
              }} />
    </StyledTableCell>
    <StyledTableCell>
      <Box sx={{ display: "flex", gap: 1 }}>
      <ActionButton booking={booking} actionType="view" onClick={handleView} />
      <ActionButton booking={booking} actionType="edit" onClick={handleEdit} />
      </Box>
    </StyledTableCell>
  </StyledTableRow>
);
export default BookingTableRow;