import React from 'react';
import { Grid, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { Event as EventIcon, Person as PersonIcon, Phone as PhoneIcon, LocationOn as LocationOnIcon, Search as SearchIcon } from "@mui/icons-material";
import {  StyledTextField, StyledFormControl } from './StyledComponents'; // Import common styled components
import { InputAdornment, TextField,MenuItem,ListSubheader,Select } from '@mui/material';

const LeadInfoStep = ({ selectedLead, formErrors, eventDate, setEventDate, eventEndDate, setEventEndDate, eventTime, setEventTime, eventEndTime, setEventEndTime, selectedDedicatedPerson, handleDedicatedPersonChange, dedicatedPersons, dedicatedPersonSearchTerm, handleDedicatedPersonSearchChange, selectedSalesPersonWithLead }) => (
    <>
        <Typography variant="h6" sx={{ mb: 2, color: "#7e1519", fontWeight: "bold", position: "relative",
            "&:after": { content: '""', position: "absolute", bottom: "-8px", left: "0", width: "40px",
                height: "3px", backgroundColor: "#7e1519", borderRadius: "2px"
            }, pb: 1
        }}>
            Lead Information
        </Typography>
        <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12} md={6}>
                <StyledTextField fullWidth label="Client Name" name="lead_name"
                    defaultValue={selectedLead?.lead_name}
                    error={!!formErrors.lead_name}
                    helperText={formErrors.lead_name}
                    required
                    InputProps={{ startAdornment: (<PersonIcon sx={{ color: "#7e1519", mr: 1 }} />) }}
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <StyledTextField fullWidth label="Event Name" name="event_name"
                    defaultValue={selectedLead?.event_name}
                    error={!!formErrors.event_name}
                    helperText={formErrors.event_name}
                    required
                    InputProps={{ startAdornment: (<EventIcon sx={{ color: "#7e1519", mr: 1 }} />) }}
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker label="Event Date(From)" value={eventDate}
                        onChange={(newValue) => setEventDate(newValue)}
                        renderInput={(params) => (
                            <StyledTextField {...params} fullWidth
                                error={!!formErrors.event_startdate}
                                helperText={formErrors.event_startdate}
                                required
                            />
                        )}
                    />
                </LocalizationProvider>
            </Grid>
            <Grid item xs={12} md={6}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker label="Event Date(To)" value={eventEndDate}
                        onChange={(newValue) => setEventEndDate(newValue)}
                        renderInput={(params) => (
                            <StyledTextField {...params} fullWidth
                                error={!!formErrors.event_enddate}
                                helperText={formErrors.event_enddate}
                                required
                            />
                        )}
                    />
                </LocalizationProvider>
            </Grid>
            <Grid item xs={12} md={6}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <TimePicker label="Event Start Time" value={eventTime}
                        onChange={(newValue) => setEventTime(newValue)}
                        renderInput={(params) => (
                            <StyledTextField {...params} fullWidth
                                error={!!formErrors.event_starttime}
                                helperText={formErrors.event_starttime}
                            />
                        )}
                    />
                </LocalizationProvider>
            </Grid>
            <Grid item xs={12} md={6}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <TimePicker label="Event End Time" value={eventEndTime}
                        onChange={(newValue) => setEventEndTime(newValue)}
                        renderInput={(params) => (
                            <StyledTextField {...params} fullWidth
                                error={!!formErrors.event_endtime}
                                helperText={formErrors.event_endtime}
                            />
                        )}
                    />
                </LocalizationProvider>
            </Grid>

            <Grid item xs={12} md={6}>
                <StyledTextField fullWidth label="Client No." name="poc_no"
                    defaultValue={selectedLead?.poc_no}
                    error={!!formErrors.poc_no}
                    helperText={formErrors.poc_no}
                    required
                    InputProps={{ startAdornment: (<PhoneIcon sx={{ color: "#7e1519", mr: 1 }} />) }}
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <StyledTextField fullWidth label="Location" name="location"
                    defaultValue={selectedLead?.location}
                    error={!!formErrors.location}
                    helperText={formErrors.location}
                    required
                    InputProps={{ startAdornment: (<LocationOnIcon sx={{ color: "#7e1519", mr: 1 }} />) }}
                />
            </Grid>
            <Grid item xs={12} md={6}>
            <StyledTextField
                      select
                      fullWidth
                      label="Maharaj ji"
                      name="maharaj_mandir"
                      value={selectedDedicatedPerson}
                      onChange={handleDedicatedPersonChange}
                      error={!!formErrors.maharaj_mandir}
                      helperText={formErrors.maharaj_mandir}
                      required
                      SelectProps={{
                        MenuProps: {
                          PaperProps: {
                            style: {
                              maxHeight: 300,
                            },
                          },
                        },
                      }}
                    >
                      <ListSubheader>
                        <TextField
                          autoFocus
                          placeholder="Search dedicated persons..."
                          fullWidth
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <SearchIcon />
                              </InputAdornment>
                            ),
                          }}
                          value={dedicatedPersonSearchTerm}
                          onChange={handleDedicatedPersonSearchChange}
                          onKeyDown={(e) => {
                            if (e.key !== "Escape") {
                              e.stopPropagation();
                            }
                          }}
                          variant="standard"
                          sx={{ mb: 1, mt: 1 }}
                        />
                      </ListSubheader>
                      {dedicatedPersons.filter((person) => person.name.toLowerCase().includes(dedicatedPersonSearchTerm.toLowerCase())).map((person) => (
                        <MenuItem key={person.id} value={person.id}>
                          {person.name}
                        </MenuItem>
                      ))}
                      {dedicatedPersons.filter((person) => person.name.toLowerCase().includes(dedicatedPersonSearchTerm.toLowerCase())).length === 0 && (
                        <MenuItem disabled>
                          No matching dedicated persons found
                        </MenuItem>
                      )}
                    </StyledTextField>
            </Grid>
            <Grid item xs={12}>
                <StyledTextField fullWidth label="Primary Sales Person" name="sales_person_1"
                    value={selectedSalesPersonWithLead} disabled
                />
            </Grid>
        </Grid>
    </>
);

export default LeadInfoStep;