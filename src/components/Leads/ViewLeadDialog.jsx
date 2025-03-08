import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import { styled } from "@mui/material/styles";
import { LiveTv as LiveTvIcon } from "@mui/icons-material";
import { Fade, Grid } from "@mui/material";
import Button from '../common/Button';
import LeadInformationPaper from './LeadInformationPaper';
import AdditionalDetailsPaper from './AdditionalDetailsPaper';

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
}));

const StyledDialogContent = styled(DialogContent)(({ theme }) => ({
  backgroundColor: "#fdedd1",
  padding: theme.spacing(3),
}));

const ViewLeadDialog = ({ openViewDialog, handleCloseViewDialog, viewLead }) => (
    <Dialog open={openViewDialog} onClose={handleCloseViewDialog} maxWidth="md" fullWidth >
        <StyledDialogTitle>
            <LiveTvIcon />
            Lead Details
        </StyledDialogTitle>
        <StyledDialogContent>
            {viewLead && (
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                         <LeadInformationPaper viewLead={viewLead} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <AdditionalDetailsPaper viewLead={viewLead}/>
                    </Grid>
                </Grid>
            )}
        </StyledDialogContent>
        <DialogActions sx={{ backgroundColor: "#fdedd1", p: 2 }}>
            <Button onClick={handleCloseViewDialog} variant="contained"
                sx={{ backgroundColor: "#7e1519", borderRadius: "20px", padding: "6px 16px",
                    boxShadow: "0 4px 10px rgba(126, 21, 25, 0.3)",  transition: "all 0.3s ease",
                    "&:hover": { backgroundColor: "#fdedd1", color: "#7e1519", boxShadow: "0 6px 15px rgba(126, 21, 25, 0.4)", transform: "translateY(-2px)" },
                    "&:active": { transform: "translateY(0)" }
                }} size="small" >
                Close
            </Button>
        </DialogActions>
  </Dialog>
);
export default ViewLeadDialog;