import React from 'react';
import { Paper, Table, TableBody,  TableContainer, TableHead, TableRow, Chip,TableCell } from "@mui/material";
import { styled } from "@mui/material/styles";
import UserTableRow from './UserTableRow';

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
    borderRadius: theme.shape.borderRadius,
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
    marginTop: theme.spacing(2),
    overflowY: "auto",
    height: "70vh",
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

const UserTable = ({ filteredUsers, handleEdit, handleDeleteConfirmation }) => (
    <Paper sx={{ width: "100%", height: "75vh", backgroundColor: "white", borderRadius: "12px",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)", overflow: "hidden"
        }}>
        <StyledTableContainer>
            <StyledTable stickyHeader>
                <StyledTableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell>Department</TableCell>
                        <TableCell>Manager</TableCell>
                        <TableCell>Role</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </StyledTableHead>
                <TableBody>
                    {filteredUsers.map((user, index) => (
                        <UserTableRow key={user.employee_id} user={user} index={index}
                            handleEdit={handleEdit} handleDeleteConfirmation={handleDeleteConfirmation} />
                    ))}
                </TableBody>
            </StyledTable>
        </StyledTableContainer>
    </Paper>
);

export default UserTable;