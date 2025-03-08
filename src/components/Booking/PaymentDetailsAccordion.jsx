import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Typography } from "@mui/material";
import { formatDateIST } from './helpers';
import { StyledTextField } from './StyledComponents';

const PaymentDetailsAccordion = ({ selectedBooking }) => (
    <Accordion>
        <AccordionSummary expandIcon={<ArrowDownwardIcon />} aria-controls="panel6-content" id="panel6-header">
            <Typography component="span" sx={{ fontWeight: 600, color: "#7e1519" }}>
                Payment Details
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <StyledTextField fullWidth label="BOOKING AMOUNT" name="booking_amount" margin="normal"
                defaultValue={selectedBooking?.booking_amount} disabled />
            <StyledTextField fullWidth label="PAYMENT MODE" name="payment_mode" margin="normal"
                defaultValue={selectedBooking?.payment_mode} disabled />
            <StyledTextField fullWidth label="CHEQUE/DD NO" name="cheque_dd_no" margin="normal"
                defaultValue={selectedBooking?.cheque_no} disabled />
            <StyledTextField fullWidth label="CHEQUE DATE" name="cheque_date" margin="normal"
                defaultValue={formatDateIST(selectedBooking?.cheque_date)} disabled />
            <StyledTextField fullWidth label="BANK NAME" name="bank_name" margin="normal"
                defaultValue={selectedBooking?.bank_name} disabled />
            <StyledTextField fullWidth label="ADVANCE RCVD" name="advance_rcvd" margin="normal"
                defaultValue={selectedBooking?.advance_rcvd} disabled />
        </AccordionDetails>
    </Accordion>
);

export default PaymentDetailsAccordion;