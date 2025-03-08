import React from 'react';
import { Paper, Typography, Box, Chip } from "@mui/material";
import { formatDateIST } from './helpers'; // You'll need this helper
import { styled } from '@mui/material/styles';

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

const LeadInformationPaper = ({ viewLead }) => (
    <Paper sx={{ p: 2, backgroundColor: "white", borderRadius: "12px", height: "100%", boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            "&:hover": { transform: "translateY(-5px)", boxShadow: "0 8px 30px rgba(0, 0, 0, 0.12)" }
        }}>
        <Typography variant="h6" sx={{ color: "#7e1519", mb: 2, fontWeight: "bold", position: "relative",
                "&:after": { content: '""', position: "absolute", bottom: "-5px", left: "0", width: "30px", height: "2px", backgroundColor: "#7e1519", borderRadius: "2px" },
                pb: 1
            }}>
            Lead Information
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
            <FieldValuePair label="Lead ID:" value={ <Chip label={viewLead.lead_id} sx={{ backgroundColor: "#7e1519", color: "white",
                    transition: "all 0.2s ease", "&:hover": { transform: "scale(1.05)", boxShadow: "0 2px 8px rgba(126, 21, 25, 0.3)" }
                }}/>}/>
            <FieldValuePair label="Client Name:" value={viewLead.lead_name} />
            <FieldValuePair label="Event Name:" value={viewLead.event_name} />
            <FieldValuePair label="Event Start Date:" value={viewLead.event_startdate ? formatDateIST(viewLead.event_startdate) : ""} />
            <FieldValuePair label="Event End Date:" value={viewLead.event_enddate ? formatDateIST(viewLead.event_enddate) : ""} />
            <FieldValuePair label="Lead Acceptance Time:" value={viewLead.assigned_datetime ? formatDateIST(viewLead.assigned_datetime) : ""} />
            <FieldValuePair label="POC No.:" value={viewLead.poc_no} />
        </Box>
    </Paper>
);

const FieldValuePair = ({ label, value }) => (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <Typography variant="subtitle1" sx={{ fontWeight: "bold", minWidth: "120px" }}>
        {label}
      </Typography>
      <Typography>{value}</Typography>
    </Box>
);

export default LeadInformationPaper;