import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Box, Typography, Paper, Grid, Chip, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Eye as EyeIcon } from "lucide-react";
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
  }));

const ViewDetailsDialog = ({ openViewDetailsDialog, handleCloseDetails, selectedDetails, salesPersons }) => {

    const getSalesPersonName = (employeeId) => {
        const person = salesPersons.find(sp => sp.employee_id === employeeId);
        return person ? `${person.employee_id} - ${person.employee_name} - ${person.phone}` : 'N/A';
    };


    return (
        <Dialog open={viewDetailsDialog} onClose={handleCloseDetails} maxWidth="sm" fullWidth
            PaperProps={{ sx: { backgroundColor: "#fdedd1", borderRadius: "12px", overflow: "hidden" } }}>
            <StyledDialogTitle>
                <EyeIcon size={24} style={{ marginRight: "8px" }} />
                Maharaj Ji Details
            </StyledDialogTitle>
            <DialogContent sx={{backgroundColor: "#fdedd1", padding: "24px"}}>
                {selectedDetails && (
                    <Box sx={{ p: 2 }}>
                        <Paper sx={{ p: 3, backgroundColor: "white", borderRadius: "12px", boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                "&:hover": { transform: "translateY(-5px)", boxShadow: "0 8px 30px rgba(0, 0, 0, 0.12)" }
                            }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2 }}>
                                        <Typography variant="h6" sx={{ color: "#7e1519", fontWeight: "bold", position: "relative",
                                                "&:after": { content: '""', position: "absolute", bottom: "-5px", left: "0",
                                                    width: "30px", height: "2px", backgroundColor: "#7e1519", borderRadius: "2px"
                                                }, pb: 1
                                            }}>
                                            {selectedDetails.name}
                                        </Typography>
                                        <Chip label={`ID: ${selectedDetails.id}`} size="small"
                                            sx={{ backgroundColor: "#7e1519", color: "white", fontWeight: "bold" }} />
                                    </Box>
                                </Grid>
                                <Grid item xs={12}><Divider sx={{ mb: 2 }} /></Grid>
                                <Grid item xs={12} md={6}>
                                    <Box sx={{ mb: 2 }}>
                                        <Typography variant="subtitle2" color="text.secondary">
                                            Category
                                        </Typography>
                                        <Typography variant="body1" sx={{ fontWeight: "medium" }}>
                                            <Chip label={selectedDetails.category} size="small"
                                                sx={{ backgroundColor: "#f8d9a0", color: "#7e1519", fontWeight: "bold", mt: 0.5 }} />
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Box sx={{ mb: 2 }}>
                                        <Typography variant="subtitle2" color="text.secondary">
                                            Primary Sales Person
                                        </Typography>
                                        <Typography variant="body1" sx={{ fontWeight: "medium" }}>
                                            {selectedDetails.primary_sales_person}-
                                            {selectedDetails.primary_sales_person_name}
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <Box>
                                    <Typography variant="subtitle2" color="text.secondary">
                                        Secondary Sales Person
                                    </Typography>
                                    <Typography variant="body1" sx={{ fontWeight: "medium" }}>
                                        {selectedDetails.secondary_sales_person_name || "Not Assigned"}
                                    </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Box>
                )}
            </DialogContent>
            <DialogActions sx={{ backgroundColor: "#fdedd1", p: 2 }}>
                <Button onClick={handleCloseDetails} variant="contained"
                    sx={{ backgroundColor: "#7e1519", borderRadius: "20px", padding: "6px 16px",
                        boxShadow: "0 4px 10px rgba(126, 21, 25, 0.3)", transition: "all 0.3s ease",
                        "&:hover": { backgroundColor: "#fdedd1", color: "#7e1519", boxShadow: "0 6px 15px rgba(126, 21, 25, 0.4)", transform: "translateY(-2px)" },
                        "&:active": { transform: "translateY(0)" }
                    }} size="small" >
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ViewDetailsDialog;