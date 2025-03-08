import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import { Edit as EditIcon } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { Fade } from "@mui/material";
import Button from '../common/Button'; // Use common Button
import EditFormContent from './EditFormContent';

const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
  backgroundColor: "#7e1519",
  color: "white",
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  padding: theme.spacing(2, 3),
  "& svg": { fontSize: "1.8rem" },
  height: "75px",
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 600,
}));

const StyledDialogContent = styled(DialogContent)(({ theme }) => ({
    backgroundColor: "#fdedd1",
    padding: theme.spacing(3),
}));

const EditDialog = ({ openEditDialog, handleEditClose, selectedBooking, editFormData, handleInputChange, handleSaveEdit }) => (
  <Dialog open={openEditDialog} onClose={handleEditClose} maxWidth="sm" fullWidth
          PaperProps={{ sx: { width: "80%", maxHeight: "90vh", m: "auto", backgroundColor: "#fff", borderRadius: "16px", boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)", overflow: "hidden" } }}
          TransitionComponent={Fade} transitionDuration={400}>
    <StyledDialogTitle>
      <EditIcon sx={{ mr: 1 }} /> Edit Booking
    </StyledDialogTitle>
      <StyledDialogContent>
          <EditFormContent editFormData={editFormData} handleInputChange={handleInputChange} />
      </StyledDialogContent>
      <DialogActions sx={{ padding: "16px 24px 24px", backgroundColor: "#fdedd1" }}>
      <Button onClick={handleEditClose} variant="outlined" size="large"
                    sx={{ borderColor: "#7e1519", color: "#7e1519", "&:hover": { borderColor: "#7e1519", backgroundColor: "rgba(126, 21, 25, 0.05)" } }}>
        Cancel
      </Button>
      <Button onClick={handleSaveEdit} variant="contained" size="large"
                    sx={{ backgroundColor: "#7e1519", "&:hover": { backgroundColor: "#fdedd1", color: "#7e1519", boxShadow: "0 6px 15px rgba(126, 21, 25, 0.4)" } }}>
        Save Changes
      </Button>
    </DialogActions>
  </Dialog>
);

export default EditDialog;