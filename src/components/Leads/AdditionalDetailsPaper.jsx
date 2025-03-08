
import React from 'react';
import { Paper, Typography, Box, Chip } from "@mui/material";
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
const AdditionalDetailsPaper = ({ viewLead }) => (
    <Paper sx={{ p: 2, backgroundColor: "white", borderRadius: "12px", height: "100%", boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            "&:hover": { transform: "translateY(-5px)", boxShadow: "0 8px 30px rgba(0, 0, 0, 0.12)" }
        }}>
        <Typography variant="h6" sx={{ color: "#7e1519", mb: 2, fontWeight: "bold", position: "relative",
            "&:after": { content: '""', position: "absolute", bottom: "-5px", left: "0", width: "30px", height: "2px", backgroundColor: "#7e1519", borderRadius: "2px" },
            pb: 1
        }}>
            Additional Details
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
        <FieldValuePair label="Sales Person:"
                value={viewLead.maharaj_name === "Client"
                    ? viewLead.sales_person_1 && viewLead.primary_sales_person_name
                    ? `${viewLead.sales_person_1} - ${viewLead.primary_sales_person_name}`
                    : "No sales person assigned"
                    : viewLead.sales_person_1 || viewLead.sales_person_2
                    ? `${viewLead.sales_person_1 || viewLead.sales_person_2} - ${viewLead.primary_sales_person_name || viewLead.secondary_sales_person_name}`
                    : "No sales person assigned"}
            />
            <FieldValuePair label="Location:" value={viewLead.location} />
            <FieldValuePair label="Maharaj Ji:" value={`${viewLead.maharaj_mandir}-${viewLead.maharaj_name}`} />
            <FieldValuePair label="Status:" value={<StatusBadge label={viewLead.status || "New"} status={viewLead.status || "New"} />} />
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

export default AdditionalDetailsPaper;