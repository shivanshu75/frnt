import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Fade } from "@mui/material";
import Button from '../common/Button'; // Use common Button
import UserForm from './UserForm';

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
  fontFamily: "'Poppins', sans-serif", // Consistent font
  fontWeight: 600,
}));

const StyledDialogContent = styled(DialogContent)(({ theme }) => ({
    backgroundColor: "#fdedd1",
    padding: theme.spacing(3),
  }));
const UserDialog = ({ openDialog, handleClose, selectedUser, handleSave, formErrors, departments, managers, showCredentials, setShowCredentials }) => (
    <Dialog
    open={openDialog}
    onClose={handleClose}
    maxWidth="md"
    fullWidth
    PaperProps={{
      sx: {
        width: "80%",
        maxHeight: "90vh",
        m: "auto",
        backgroundColor: "#fdedd1",
        borderRadius: "12px",
        overflow: "hidden",
      },
    }}
  >
    <StyledDialogTitle>
      {selectedUser ? "Edit Employee" : "Add Employee"}
    </StyledDialogTitle>
    <form onSubmit={handleSave}>
      <StyledDialogContent>
        <Fade in={true} timeout={500}>
         <UserForm selectedUser={selectedUser} formErrors={formErrors} departments={departments}
            managers={managers} showCredentials={showCredentials} setShowCredentials={setShowCredentials}/>
        </Fade>
      </StyledDialogContent>
      <DialogActions sx={{ backgroundColor: "#fdedd1", p: 3 }}>
        <Button
          onClick={handleClose}
          sx={{
            color: "#7e1519",
            borderRadius: "20px",
            transition: "all 0.2s ease",
            "&:hover": {
              backgroundColor: "rgba(126, 21, 25, 0.1)",
              transform: "translateY(-2px)",
            },
            "&:active": {
              transform: "translateY(0)",
            },
          }}
          size="large"
        >
          Cancel
        </Button>
        <Button
          type="submit"
          variant="contained"
          size="large"
          sx={{
            backgroundColor: "#7e1519",
            borderRadius: "20px",
            padding: "8px 24px",
            boxShadow: "0 4px 10px rgba(126, 21, 25, 0.3)",
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: "#fdedd1",
              color: "#7e1519",
              boxShadow: "0 6px 15px rgba(126, 21, 25, 0.4)",
              transform: "translateY(-2px)",
            },
            "&:active": {
              transform: "translateY(0)",
            },
          }}
        >
          Save
        </Button>
      </DialogActions>
    </form>
  </Dialog>
);
export default UserDialog;