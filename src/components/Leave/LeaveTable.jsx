import React from 'react';
import { Paper, Table, TableBody,  TableContainer, TableHead, TableRow } from "@mui/material";
import { styled } from "@mui/material/styles";
import LeaveTableRow from './LeaveTableRow';


const StyledTable = styled(Table)(({ theme }) => ({
  minWidth: 650,
  width: "100%",
  height: "65vh",
  overflowY: "scroll",
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

const LeaveTable = ({ leaves, handleEdit, handleView }) => (
  <Paper sx={{ width: "100%", height: "75vh", overflowY: "auto", backgroundColor: "white",
      borderRadius: "12px", boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
      "&::-webkit-scrollbar": { width: "8px" },
      "&::-webkit-scrollbar-track": { background: "#f1f1f1", borderRadius: "10px" },
      "&::-webkit-scrollbar-thumb": { background: "#7e1519", borderRadius: "10px" },
      "&::-webkit-scrollbar-thumb:hover": { background: "#5e1012" }
    }}>
    <StyledTable stickyHeader>
      <StyledTableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>Employee ID</TableCell>
          <TableCell>Leave Type</TableCell>
          <TableCell>Leave Date</TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </StyledTableHead>
      <TableBody>
        {leaves.map((leave, index) => (
          <LeaveTableRow key={leave.leave_id} leave={leave} index={index} handleEdit={handleEdit} handleView={handleView} />
        ))}
      </TableBody>
    </StyledTable>
  </Paper>
);

export default LeaveTable;