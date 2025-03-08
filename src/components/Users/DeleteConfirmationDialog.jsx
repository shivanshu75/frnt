import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Box, Typography, Paper, Grid, Chip, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import Button from '../common/Button';

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
  }));
const DeleteConfirmationDialog = ({ openDeleteDialog, setOpenDeleteDialog, userToDelete, handleDelete, getDepartments }) => (
    <Dialog open={openDeleteDialog} onClose={() => setOpenDeleteDialog(false)}
        aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description"
        PaperProps={{ sx: { backgroundColor: "#fdedd1", borderRadius: "12px", overflow: "hidden" } }}>
        <StyledDialogTitle id="alert-dialog-title">
            Confirm Delete
        </StyledDialogTitle>
        <StyledDialogContent>
            <Box sx={{ p: 2 }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                    Are you sure you want to delete this employee?
                </Typography>
                <Paper sx={{ p: 3, backgroundColor: "white", borderRadius: "12px", boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)" }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2 }}>
                                <Typography variant="h6" sx={{ color: "#7e1519", fontWeight: "bold", position: "relative",
                                        "&:after": { content: '""', position: "absolute", bottom: "-5px", left: "0",
                                            width: "30px", height: "2px", backgroundColor: "#7e1519", borderRadius: "2px"
                                        }, pb: 1
                                    }}>
                                    {userToDelete?.employee_name}
                                </Typography>
                                <Chip label={`ID: ${userToDelete?.employee_id}`} size="small"
                                    sx={{ backgroundColor: "#7e1519", color: "white", fontWeight: "bold" }}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Divider sx={{ mb: 2 }} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ mb: 2 }}>
                                <Typography variant="subtitle2" color="text.secondary">
                                    Department
                                </Typography>
                                <Typography variant="body1" sx={{ fontWeight: "medium" }}>
                                {userToDelete  ? getDepartments(userToDelete.department_id) : ""}
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ mb: 2 }}>
                                <Typography variant="subtitle2" color="text.secondary">
                                    Role
                                </Typography>
                                <Typography variant="body1" sx={{ fontWeight: "medium" }}>
                                    {userToDelete?.role}
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>
                <Typography variant="body1" sx={{ mt: 3, color: "#f44336", fontWeight: "medium" }}>
                    This action cannot be undone. All data associated with this employee will be permanently removed.
                </Typography>
            </Box>
        </StyledDialogContent>
        <DialogActions sx={{ backgroundColor: "#fdedd1", p: 3 }}>
            <Button onClick={() => setOpenDeleteDialog(false)}  sx={{ color: "#7e1519", borderRadius: "20px", transition: "all 0.2s ease",
                    "&:hover": {  backgroundColor: "rgba(126, 21, 25, 0.1)", transform: "translateY(-2px)" },
                    "&:active": {  transform: "translateY(0)", },
                }}>
                Cancel
            </Button>
            <Button onClick={handleDelete}  variant="contained"
                sx={{  backgroundColor: "#f44336",  borderRadius: "20px", padding: "6px 16px",
                    boxShadow: "0 4px 10px rgba(244, 67, 54, 0.3)", transition: "all 0.3s ease",
                    "&:hover": {  backgroundColor: "#d32f2f", boxShadow: "0 6px 15px rgba(244, 67, 54, 0.4)",
                        transform: "translateY(-2px)",  }, "&:active": { transform: "translateY(0)",  },
                }}>
                Delete
            </Button>
        </DialogActions>
    </Dialog>
);

export default DeleteConfirmationDialog;