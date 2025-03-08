import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { CalendarMonth, Person, LocationOn } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { formatDateIST } from './helpers'; // Import the helper
import { StyledTextField } from './StyledComponents';

const BookingDetailsAccordion = ({ selectedBooking }) => (
    <Accordion defaultExpanded>
      <AccordionSummary expandIcon={<ArrowDownwardIcon />} aria-controls="panel1-content" id="panel1-header"
                       sx={{ backgroundColor: "rgba(126, 21, 25, 0.05)", "&:hover": { backgroundColor: "rgba(126, 21, 25, 0.1)" } }}>
        <Typography component="span" sx={{ fontWeight: 600, color: "#7e1519" }}>
          Basic Information
        </Typography>
      </AccordionSummary>
        <AccordionDetails>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <StyledTextField fullWidth label="DATE" name="date" margin="normal"
                        defaultValue={formatDateIST(selectedBooking?.created_at)} disabled
                        InputProps={{ startAdornment: (<CalendarMonth sx={{ color: "#7e1519", mr: 1 }} />) }}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <StyledTextField fullWidth label="CLIENT NAME" name="client_name" margin="normal"
                                     defaultValue={selectedBooking?.client_name} disabled
                                     InputProps={{ startAdornment: (<Person sx={{ color: "#7e1519", mr: 1 }} />) }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <StyledTextField fullWidth label="SHOOTING ADDRESS" name="shooting_address" margin="normal"
                                     defaultValue={selectedBooking?.shooting_address} disabled
                                     InputProps={{ startAdornment: (<LocationOn sx={{ color: "#7e1519", mr: 1 }} />) }}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <StyledTextField fullWidth label="MOBILE No." name="mobileNo" margin="normal"
                                     defaultValue={selectedBooking?.client_contact_no1} disabled
                                     InputProps={{ startAdornment: (<Person sx={{ color: "#7e1519", mr: 1 }} />) }}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <StyledTextField fullWidth label="PIN CODE" name="pin_code" margin="normal"
                                     defaultValue={selectedBooking?.shooting_address_pincode} disabled
                                     InputProps={{ startAdornment: (<LocationOn sx={{ color: "#7e1519", mr: 1 }} />) }}
                    />
                </Grid>
            </Grid>
        </AccordionDetails>
    </Accordion>
);

export default BookingDetailsAccordion;