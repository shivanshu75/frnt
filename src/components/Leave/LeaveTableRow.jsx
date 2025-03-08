import React from 'react';
import { TableRow, TableCell, Chip, Box, IconButton } from '@mui/material';
import { Edit as EditIcon, Visibility as VisibilityIcon,  DateRange,  Person,  } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { getStatusIcon, getLeaveTypeIcon } from './helpers.jsx'; // Import helper functions
import { LeaveStatusChip,LeaveTypeChip } from './StyledComponents';

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
    maxWidth: "150px", // Limit cell width
    fontFamily: "'Poppins', sans-serif",
    fontSize: "14px",
    fontWeight: 500,
    padding: "16px 24px",
  }));
  const ActionButton = styled(IconButton)(({ theme }) => ({
    transition: "all 0.2s ease",
    "&:hover": {
      transform: "scale(1.15)",
      backgroundColor: "rgba(126, 21, 25, 0.1)",
    },
  }));

const LeaveTableRow = ({ leave, index, handleEdit, handleView }) => (
    <StyledTableRow key={leave.leave_id} index={index}>
      <StyledTableCell>
        <Chip label={leave.leave_id} size="small" sx={{ backgroundColor: "#7e1519", color: "white", fontWeight: "bold",
                transition: "all 0.2s ease", "&:hover": { transform: "scale(1.05)", boxShadow: "0 2px 8px rgba(126, 21, 25, 0.3)" }
            }} />
      </StyledTableCell>
      <StyledTableCell>
        <Chip label={leave.employee_name} size="small"
              icon={<Person fontSize="small" />} sx={{ backgroundColor: "#7e1519", color: "white", fontWeight: 500,
                transition: "all 0.2s ease", "&:hover": { transform: "scale(1.05)", boxShadow: "0 2px 8px rgba(126, 21, 25, 0.3)" }
            }} />
      </StyledTableCell>
      <StyledTableCell>
        <LeaveTypeChip label={leave.leave_type} size="small" icon={getLeaveTypeIcon(leave.leave_type)}  leaveType={leave.leave_type} />
      </StyledTableCell>
      <StyledTableCell>
        <Chip
          label={leave.leave_date?.split("T")[0]}
          size="small"
          icon={<DateRange fontSize="small" />}
          sx={{
            // backgroundColor: "#6c757d",
            color: "Black",
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
        <LeaveStatusChip
          label={leave.status}
          size="small"
          icon={getStatusIcon(leave.status)}
          status={leave.status}
        />
      </StyledTableCell>
      <StyledTableCell>
        <Box sx={{ display: "flex", gap: 1 }}>
          <ActionButton
            onClick={() => handleEdit(leave)}
            sx={{ color: "#2196f3" }}
          >
            <EditIcon />
          </ActionButton>
          <ActionButton
            onClick={() => handleView(leave)}
            sx={{ color: "#4caf50" }}
          >
            <VisibilityIcon />
          </ActionButton>
        </Box>
      </StyledTableCell>
    </StyledTableRow>
);

export default LeaveTableRow;