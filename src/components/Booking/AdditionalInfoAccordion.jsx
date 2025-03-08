import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Typography } from "@mui/material";
import { StyledTextField } from './StyledComponents';
const AdditionalInfoAccordion = ({selectedBooking}) => (
    <Accordion>
        <AccordionSummary expandIcon={<ArrowDownwardIcon />} aria-controls="panel7-content" id="panel7-header">
            <Typography component="span" sx={{ fontWeight: 600, color: "#7e1519" }}>
                Additional Information
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <StyledTextField fullWidth label="BOOKED BY" name="booked_by" margin="normal"
                defaultValue={selectedBooking?.booked_by} disabled />
            <StyledTextField fullWidth label="SPECIAL COMMENT" name="special_comment" margin="normal"
                defaultValue={selectedBooking?.special_comment} disabled />
            <StyledTextField fullWidth label="APPROVED BY" name="approved_by" margin="normal"
                defaultValue={selectedBooking?.approved_by} disabled />
            <StyledTextField fullWidth label="DESIGNATION" name="designation" margin="normal"
                defaultValue={selectedBooking?.designation} disabled />
        </AccordionDetails>
    </Accordion>
);

export default AdditionalInfoAccordion;