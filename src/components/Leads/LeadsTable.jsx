import React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip } from "@mui/material";
import { styled } from "@mui/material/styles";
import LeadTableRow from './LeadTableRow';


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
const StatusBadge = styled(Chip)(({ status }) => ({
    fontWeight: "bold",
    borderRadius: "16px",
    padding: "0 4px",
    transition: "all 0.2s ease",
    backgroundColor:
      status === "Assigned"
        ? "green"
        : status === "Rejected"
        ? "#f44336"
        : status === "Unassigned"
        ? "yellow"
        : "grey",
    color: status === "Unassigned" ? "#000" : "#fff",
    "&:hover": {
      transform: "scale(1.05)",
    },
  }));
const LeadsTable = ({ filteredLeads, handleEdit, handleView, handleDelete,loadingLeads }) => (
    <Paper
    sx={{
      width: "100%",
      height: "75vh",
      overflowY: "auto",
      backgroundColor: "white",
      borderRadius: "12px",
      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
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
    }}
  >
      <StyledTable>
        <StyledTableHead>
          <TableRow>
            <TableCell>Lead ID</TableCell>
            <TableCell>Client Name</TableCell>
            <TableCell>Event Name</TableCell>
            <TableCell>Event Date(From)</TableCell>
            <TableCell>Event Date(To)</TableCell>
            <TableCell>POC No.</TableCell>
            <TableCell>Assigned Sales Person</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </StyledTableHead>
        <TableBody>
        {filteredLeads.map((lead, index) => (
            <LeadTableRow
              key={lead.lead_id}
              lead={lead}
              index={index}
              handleEdit={handleEdit}
              handleView={handleView}
              handleDelete={handleDelete}
            />
          ))}
        </TableBody>
      </StyledTable>
  </Paper>
);

export default LeadsTable;