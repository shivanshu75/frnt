import React from 'react';
import { TableRow, TableCell, Chip, Box, IconButton } from '@mui/material';
import { Delete as DeleteIcon, Edit as EditIcon, Visibility as VisibilityIcon } from "@mui/icons-material";
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
const LeadTableRow = ({ lead, index, handleEdit, handleView, handleDelete }) => (
  <StyledTableRow key={lead.lead_id}  sx={{
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
      <Chip label={lead.lead_id} size="small" sx={{ backgroundColor: "#7e1519", color: "white", fontWeight: "bold",
                transition: "all 0.2s ease", "&:hover": { transform: "scale(1.05)", boxShadow: "0 2px 8px rgba(126, 21, 25, 0.3)" }
            }}  />
    </StyledTableCell>
    <StyledTableCell>{lead.lead_name}</StyledTableCell>
    <StyledTableCell>{lead.event_name}</StyledTableCell>
    <StyledTableCell>
      {lead.event_startdate ? new Date(lead.event_startdate)?.toISOString().split("T")[0] : ""}
    </StyledTableCell>
    <StyledTableCell>
      {lead.event_enddate ? new Date(lead.event_enddate)?.toISOString().split("T")[0] : ""}
    </StyledTableCell>
    <StyledTableCell>{lead.poc_no}</StyledTableCell>
    <StyledTableCell>
                    {lead.maharaj_name === "Client"
                      ? lead.sales_person_1 && lead.primary_sales_person_name
                        ? `${lead.sales_person_1} - ${lead.primary_sales_person_name}`
                        : "No sales person assigned"
                      : lead.sales_person_1 || lead.sales_person_2
                      ? `${lead.sales_person_1 || lead.sales_person_2} - ${
                          lead.primary_sales_person_name ||
                          lead.secondary_sales_person_name
                        }`
                      : "No sales person assigned"}
                  </StyledTableCell>
    <StyledTableCell>
      <StatusBadge label={lead.status || "Unassigned"} status={lead.status || "Unassigned"} />
    </StyledTableCell>
    <StyledTableCell>
      <Box sx={{ display: "flex", gap: 1 }}>
        <ActionButton onClick={() => handleEdit(lead)} sx={{ color: "#2196f3" }}> <EditIcon /> </ActionButton>
        <ActionButton onClick={() => handleView(lead)} sx={{ color: "#4caf50" }} > <VisibilityIcon /> </ActionButton>
        <ActionButton onClick={() => handleDelete(lead.lead_id)} sx={{ color: "#f44336" }} > <DeleteIcon /> </ActionButton>
      </Box>
    </StyledTableCell>
  </StyledTableRow>
);

export default LeadTableRow;