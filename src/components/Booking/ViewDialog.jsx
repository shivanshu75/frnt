import React from 'react';
import { Box, Typography, Dialog, DialogActions } from "@mui/material";
import { EventNote } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { Fade } from "@mui/material";
import Button from '../common/Button';
import BookingDetailsAccordion from './BookingDetailsAccordion';
import ShootingDetailsAccordion from './ShootingDetailsAccordion';
import BillingDetailsAccordion from './BillingDetailsAccordion';
import ProgramDetailsAccordion from './ProgramDetailsAccordion';
import TelecastDetailsAccordion from './TelecastDetailsAccordion';
import PaymentDetailsAccordion from './PaymentDetailsAccordion';
import AdditionalInfoAccordion from './AdditionalInfoAccordion';
import LeadDetailsAccordion from './LeadDetailsAccordion';

const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
  backgroundColor: "#7e1519",
  color: "white",
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  padding: theme.spacing(2, 3),
  "& svg": {
    fontSize: "1.8rem",
  },
  height: "75px",
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 600,
}));

const StyledDialogContent = styled(DialogContent)(({ theme }) => ({
  backgroundColor: "#fdedd1",
  padding: theme.spacing(3),
  height: "65vh",
  overflowY: "scroll",
}));

const ViewDialog = ({ openDialog, handleClose, selectedBooking, shootingSchedules, telecastSchedules, leadDetails, fetchShootingSchedules, fetchTelecastSchedules, fetchLeadDetails, handleSave }) => (
  <Dialog open={openDialog} onClose={handleClose} maxWidth="md" fullWidth
          PaperProps={{ sx: { width: "90%", maxHeight: "90vh", m: "auto", backgroundColor: "#fff", borderRadius: "16px", boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)", overflow: "hidden" } }}
          TransitionComponent={Fade} transitionDuration={400}>
    <StyledDialogTitle>
      <EventNote sx={{ mr: 1 }} /> Booking Details
    </StyledDialogTitle>
        <form onSubmit={handleSave}>
            <StyledDialogContent>
                <Typography variant="h6"  gutterBottom sx={{ color: "#7e1519", fontWeight: 600 }}>
                    AADINATH TV CHANNEL BOOKING FORM
                </Typography>
                <BookingDetailsAccordion selectedBooking={selectedBooking} />
                <ShootingDetailsAccordion shootingSchedules={shootingSchedules} />
                <BillingDetailsAccordion selectedBooking={selectedBooking}/>
                <ProgramDetailsAccordion selectedBooking={selectedBooking} />
                <TelecastDetailsAccordion telecastSchedules={telecastSchedules}/>
                <PaymentDetailsAccordion selectedBooking={selectedBooking} />
                <AdditionalInfoAccordion selectedBooking={selectedBooking}/>
                <LeadDetailsAccordion leadDetails={leadDetails} />
            </StyledDialogContent>
            <DialogActions sx={{ padding: "16px 24px 24px", backgroundColor: "#fdedd1" }}>
            <Button onClick={handleClose} variant="outlined" size="large"
                sx={{ borderColor: "#7e1519", color: "#7e1519", "&:hover": { borderColor: "#7e1519", backgroundColor: "rgba(126, 21, 25, 0.05)" } }}>
                Close
            </Button>
          </DialogActions>
        </form>
  </Dialog>
);

  export default ViewDialog;