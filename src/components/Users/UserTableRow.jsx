import React from 'react';
import { TableRow, TableCell, Chip, Box, IconButton } from '@mui/material';
import { Delete as DeleteIcon, Edit as EditIcon } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    backgroundColor: "#fdedd1",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.05)",
    borderRadius: "8px",
    marginBottom: "8px",
    transition: "all 0.3s ease",
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
    padding: "16px 24px",
}));
const ActionButton = styled(IconButton)(({ theme }) => ({
    transition: "all 0.2s ease",
    "&:hover": {
      transform: "scale(1.15)",
      backgroundColor: "rgba(126, 21, 25, 0.1)",
    },
  }));
const UserTableRow = ({ user, index, handleEdit, handleDeleteConfirmation }) => (
  <StyledTableRow key={user.employee_id}  sx={{
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
  }}>
    <StyledTableCell>
      <Chip label={user.employee_id} size="small"  sx={{ backgroundColor: "#7e1519", color: "white", fontWeight: "bold",
                transition: "all 0.2s ease", "&:hover": { transform: "scale(1.05)", boxShadow: "0 2px 8px rgba(126, 21, 25, 0.3)" }
            }} />
    </StyledTableCell>
    <StyledTableCell>{user.employee_name}</StyledTableCell>
    <StyledTableCell>{user.phone}</StyledTableCell>
    <StyledTableCell>
      <Chip label={user.department_name  || "N/A"} size="small" sx={{ backgroundColor: "#f8d9a0", color: "#7e1519", fontWeight: "bold",
                transition: "all 0.2s ease",  "&:hover": { transform: "scale(1.05)", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)"  }
            }} />
    </StyledTableCell>
    <StyledTableCell>
      {user.manager_name || "N/A"}
    </StyledTableCell>
    <StyledTableCell>{user.role}</StyledTableCell>
    <StyledTableCell>
      <Chip label={user.status} size="small"  sx={{ backgroundColor: user.status === "Active" ? "#4caf50" : "#f44336",
              color: "white", fontWeight: "bold", transition: "all 0.2s ease",
              "&:hover": {  transform: "scale(1.05)",  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)", },
            }}
      />
    </StyledTableCell>
    <StyledTableCell>
      <Box sx={{ display: "flex", gap: 1 }}>
        <ActionButton onClick={() => handleEdit(user)} sx={{ color: "#2196f3" }}>  <EditIcon /> </ActionButton>
        <ActionButton  onClick={() => handleDeleteConfirmation(user)}  sx={{ color: "#f44336" }} > <DeleteIcon /> </ActionButton>
      </Box>
    </StyledTableCell>
  </StyledTableRow>
);

export default UserTableRow;