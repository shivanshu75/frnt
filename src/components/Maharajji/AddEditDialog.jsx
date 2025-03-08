import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import { styled } from "@mui/material/styles";
import Button from '../common/Button'; // Use common Button
import AddEditForm from './AddEditForm';

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
const AddEditDialog = ({ openDialog, handleClose, selectedPerson, handleSave, formErrors, salesPersons, primarySalesPerson, setPrimarySalesPerson, secondarySalesPerson, setSecondarySalesPerson }) => (
    <Dialog open={openDialog} onClose={handleClose} maxWidth="md" fullWidth
        PaperProps={{ sx: { width: "80%", maxHeight: "90vh", m: "auto", backgroundColor: "#fdedd1", borderRadius: "12px", overflow: "hidden" } }}>
        <StyledDialogTitle>
            {selectedPerson ? "Edit Maharaj Ji" : "Add Maharaj Ji"}
        </StyledDialogTitle>
        <form onSubmit={handleSave}>
            <DialogContent  sx={{backgroundColor: "#fdedd1",padding: "24px"}}>
                <AddEditForm selectedPerson={selectedPerson} formErrors={formErrors} salesPersons={salesPersons}
                    primarySalesPerson={primarySalesPerson} setPrimarySalesPerson={setPrimarySalesPerson}
                    secondarySalesPerson={secondarySalesPerson} setSecondarySalesPerson={setSecondarySalesPerson} />
            </DialogContent>
            <DialogActions sx={{ backgroundColor: "#fdedd1", p: 3 }}>
                <Button  onClick={handleClose} sx={{  color: "#7e1519",  borderRadius: "20px",  transition: "all 0.2s ease",
                    "&:hover": {  backgroundColor: "rgba(126, 21, 25, 0.1)",  transform: "translateY(-2px)", },
                    "&:active": { transform: "translateY(0)",  },
                }} size="small">
                    Cancel
                </Button>
                <Button  type="submit" variant="contained"  size="small"
                sx={{  backgroundColor: "#7e1519", borderRadius: "20px",  padding: "6px 16px",
                    boxShadow: "0 4px 10px rgba(126, 21, 25, 0.3)", transition: "all 0.3s ease",
                    "&:hover": {  backgroundColor: "#fdedd1", color: "#7e1519", boxShadow: "0 6px 15px rgba(126, 21, 25, 0.4)",
                        transform: "translateY(-2px)", }, "&:active": { transform: "translateY(0)",  },
                }}>
                    Save
                </Button>
            </DialogActions>
        </form>
    </Dialog>
);

export default AddEditDialog;