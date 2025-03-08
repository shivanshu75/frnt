import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { formatDateIST } from './helpers';
import { StyledTextField } from './StyledComponents';

const LeadDetailsAccordion = ({ leadDetails }) => (
  <Accordion>
    <AccordionSummary expandIcon={<ArrowDownwardIcon />} aria-controls="panel8-content" id="panel8-header">
      <Typography component="span" sx={{ fontWeight: 600, color: "#7e1519" }}>
        Lead Details
      </Typography>
    </AccordionSummary>
    <AccordionDetails>
      {leadDetails ? (
        <>
          <StyledTextField fullWidth label="Lead Name" name="lead_name" margin="normal"
                           defaultValue={leadDetails.lead_name} disabled />
          <StyledTextField fullWidth label="Event Name" name="event_name" margin="normal"
                           defaultValue={leadDetails.event_name} disabled />
          <StyledTextField fullWidth label="Event Date" name="event_date" margin="normal"
                           defaultValue={formatDateIST(leadDetails.event_date)} disabled />
          <StyledTextField fullWidth label="POC No" name="poc_no" margin="normal"
                           defaultValue={leadDetails.poc_no} disabled />
          <StyledTextField fullWidth label="Location" name="location" margin="normal"
                           defaultValue={leadDetails.location} disabled />
          <StyledTextField fullWidth label="Maharaj/Mandir" name="maharaj_mandir" margin="normal"
                           defaultValue={leadDetails.maharaj_mandir} disabled />
        </>
      ) : (
        <Typography>No lead details available.</Typography>
      )}
    </AccordionDetails>
  </Accordion>
);

export default LeadDetailsAccordion;