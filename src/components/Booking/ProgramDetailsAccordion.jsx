import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Typography } from "@mui/material";
import { StyledTextField } from './StyledComponents';
const ProgramDetailsAccordion = ({ selectedBooking }) => (
    <Accordion>
        <AccordionSummary expandIcon={<ArrowDownwardIcon />} aria-controls="panel4-content" id="panel4-header">
            <Typography component="span" sx={{ fontWeight: 600, color: "#7e1519" }}>
                Program Details
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <StyledTextField fullWidth label="Program" name="program" margin="normal"
                defaultValue={selectedBooking?.program_type} disabled />
        </AccordionDetails>
    </Accordion>
);
export default ProgramDetailsAccordion;