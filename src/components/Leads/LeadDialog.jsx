import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import { styled } from "@mui/material/styles";
import { LiveTv as LiveTvIcon } from "@mui/icons-material";
import { Fade } from "@mui/material";
import Button from '../common/Button';
import LeadInfoStep from './LeadInfoStep';
import HostInfoStep from './HostInfoStep';

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
const LeadDialog = ({ openDialog, handleClose, selectedLead, step, handleNext, handleSave, formErrors,
    eventDate, setEventDate,eventEndDate, setEventEndDate, eventTime, setEventTime, eventEndTime, setEventEndTime,
    selectedDedicatedPerson, handleDedicatedPersonChange, dedicatedPersons, dedicatedPersonSearchTerm,
    handleDedicatedPersonSearchChange, selectedSalesPersonWithLead, hosts, handleRemoveHost, handleAddHost,
    handleHostChange,setStep
}) => (

    <Dialog open={openDialog} onClose={handleClose} maxWidth="md" fullWidth>
        <StyledDialogTitle>
            <LiveTvIcon />
            {selectedLead ? "Edit Lead" : "Add Lead"}
        </StyledDialogTitle>
        <form onSubmit={step === 1 ? handleNext : handleSave}>
            <StyledDialogContent>
                {step === 1 && (
                    <LeadInfoStep
                        selectedLead={selectedLead}
                        formErrors={formErrors}
                        eventDate={eventDate}
                        setEventDate={setEventDate}
                        eventEndDate={eventEndDate}
                        setEventEndDate={setEventEndDate}
                        eventTime={eventTime}
                        setEventTime={setEventTime}
                        eventEndTime={eventEndTime}
                        setEventEndTime={setEventEndTime}
                        selectedDedicatedPerson={selectedDedicatedPerson}
                        handleDedicatedPersonChange={handleDedicatedPersonChange}
                        dedicatedPersons={dedicatedPersons}
                        dedicatedPersonSearchTerm={dedicatedPersonSearchTerm}
                        handleDedicatedPersonSearchChange={handleDedicatedPersonSearchChange}
                        selectedSalesPersonWithLead={selectedSalesPersonWithLead}
                    />
                )}

                {step === 2 && (
                    <HostInfoStep
                        hosts={hosts}
                        handleRemoveHost={handleRemoveHost}
                        handleAddHost={handleAddHost}
                        handleHostChange={handleHostChange}
                    />
                )}
            </StyledDialogContent>
            <DialogActions sx={{ backgroundColor: "#fdedd1", p: 3 }}>
                {step === 1 && (
                    <>
                        <Button onClick={handleClose}  size="small"
                        sx={{ color: "#7e1519", borderRadius: "20px", transition: "all 0.2s ease",
                        "&:hover": { backgroundColor: "rgba(126, 21, 25, 0.1)", transform: "translateY(-2px)"},
                        "&:active": { transform: "translateY(0)" }
                      }}>
                            Cancel
                        </Button>
                        <Button type="submit" variant="contained" size="small"
                         sx={{ backgroundColor: "#7e1519", borderRadius: "20px", padding: "6px 16px",
                            boxShadow: "0 4px 10px rgba(126, 21, 25, 0.3)", transition: "all 0.3s ease",
                            "&:hover": {  backgroundColor: "#fdedd1", color: "#7e1519",  boxShadow: "0 6px 15px rgba(126, 21, 25, 0.4)",
                            transform: "translateY(-2px)" }, "&:active": { transform: "translateY(0)" }
                        }}>
                            Next
                        </Button>
                    </>
                )}
                {step === 2 && (
                    <>
                        <Button  onClick={() => setStep(1)}  size="small"
                        sx={{ color: "#7e1519", borderRadius: "20px", transition: "all 0.2s ease",
                        "&:hover": { backgroundColor: "rgba(126, 21, 25, 0.1)", transform: "translateY(-2px)" },
                        "&:active": { transform: "translateY(0)" }
                         }}
                        >
                            Back
                        </Button>
                        <Button  onClick={handleClose} size="small"
                         sx={{ color: "#7e1519", borderRadius: "20px", transition: "all 0.2s ease",
                         "&:hover": { backgroundColor: "rgba(126, 21, 25, 0.1)", transform: "translateY(-2px)"},
                         "&:active": { transform: "translateY(0)" }
                       }}
                        >
                            Cancel
                        </Button>
                        <Button  type="submit" variant="contained" size="small"
                         sx={{ backgroundColor: "#7e1519", borderRadius: "20px", padding: "6px 16px",
                            boxShadow: "0 4px 10px rgba(126, 21, 25, 0.3)",  transition: "all 0.3s ease",
                            "&:hover": { backgroundColor: "#fdedd1", color: "#7e1519", boxShadow: "0 6px 15px rgba(126, 21, 25, 0.4)",
                                transform: "translateY(-2px)" }, "&:active": { transform: "translateY(0)"}
                        }}>
                            Save
                        </Button>
                    </>
                )}
            </DialogActions>
        </form>
    </Dialog>
);
export default LeadDialog;