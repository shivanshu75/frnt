import React from 'react';
import { Box, Typography, InputLabel, Select, MenuItem } from "@mui/material";
import { styled } from "@mui/material/styles";
import { LocationOn, EventNote, Person } from "@mui/icons-material";
import { FormControl } from '@mui/material';
import { StyledTextField, StyledFormControl } from './StyledComponents';

const EditFormContent = ({ editFormData, handleInputChange }) => (
    <Box sx={{ mt: 2 }}>
        <Typography variant="h6" gutterBottom sx={{ color: "#7e1519", fontWeight: 600 }}>VENUE</Typography>
            <StyledTextField fullWidth label="Shooting Address" name="shooting_address" margin="normal"
                value={editFormData.shooting_address} onChange={handleInputChange}
                InputProps={{ startAdornment: <LocationOn sx={{ color: "#7e1519", mr: 1 }} /> }}
            />
            <StyledTextField fullWidth label="Shooting Address Pincode" name="shooting_address_pincode" margin="normal"
                value={editFormData.shooting_address_pincode} onChange={handleInputChange}
                InputProps={{ startAdornment: <LocationOn sx={{ color: "#7e1519", mr: 1 }} /> }}
            />

        <Typography variant="h6" gutterBottom sx={{ mt: 3, color: "#7e1519", fontWeight: 600 }}>AMOUNT</Typography>
            <StyledTextField fullWidth label="Booking Amount" name="booking_amount" margin="normal"
                value={editFormData.booking_amount} onChange={handleInputChange}
                InputProps={{ startAdornment: <EventNote sx={{ color: "#7e1519", mr: 1 }} /> }}
            />
            <StyledTextField fullWidth label="Advance Received" name="advance_received" margin="normal"
                value={editFormData.advance_received} onChange={handleInputChange}
                InputProps={{ startAdornment: <EventNote sx={{ color: "#7e1519", mr: 1 }} /> }}
            />
       <Typography variant="h6" gutterBottom sx={{ mt: 3, color: "#7e1519", fontWeight: 600 }}>PROGRAM TYPE</Typography>
            <StyledFormControl fullWidth margin="normal">
                <InputLabel id="program-type-label">Program Type</InputLabel>
                <Select labelId="program-type-label" name="program_type" value={editFormData.program_type}
                        onChange={handleInputChange} label="Program Type">
                    <MenuItem value="live">LIVE</MenuItem>
                    <MenuItem value="vishesh">VISHESH</MenuItem>
                    <MenuItem value="scroll">SCROLL</MenuItem>
                    <MenuItem value="promo">Promo</MenuItem>
                    <MenuItem value="l-band">L-band</MenuItem>
                    <MenuItem value="tvc">Tvc</MenuItem>
                    <MenuItem value="other">Other</MenuItem>
                </Select>
            </StyledFormControl>

        <Typography variant="h6" gutterBottom sx={{ mt: 3, color: "#7e1519", fontWeight: 600 }}>BOOK BY</Typography>
            <StyledTextField fullWidth label="Booked By" name="booked_by" margin="normal"
                value={editFormData.booked_by} onChange={handleInputChange}
                InputProps={{ startAdornment: <Person sx={{ color: "#7e1519", mr: 1 }} /> }}
            />
    </Box>
);

export default EditFormContent;