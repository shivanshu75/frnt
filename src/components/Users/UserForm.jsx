import React from 'react';
import { Box, Typography, FormControlLabel, Checkbox, Grid } from "@mui/material";
import { InputLabel, Select, MenuItem, FormHelperText } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Info as InfoIcon } from "@mui/icons-material";
import { Tooltip } from '@mui/material';
import { StyledTextField, StyledFormControl } from './StyledComponents';


const UserForm = ({ selectedUser, formErrors, departments, managers, showCredentials, setShowCredentials }) => (
    <Grid container spacing={2} sx={{ mt: 1 }}>
        <Grid item xs={12} md={4}>
            <StyledTextField label="Employee Name*" name="employee_name"
                defaultValue={selectedUser?.employee_name}
                error={!!formErrors.employee_name}
                helperText={formErrors.employee_name} fullWidth required
            />
        </Grid>
        <Grid item xs={12} md={4}>
            <StyledTextField label="Phone *" name="phone"
                defaultValue={selectedUser?.phone}
                error={!!formErrors.phone}
                helperText={formErrors.phone} fullWidth required
                InputProps={{  startAdornment: (  <InputAdornment position="start">91</InputAdornment> ), }}
                inputProps={{ maxLength: 10,  pattern: "\\d{10}" }}
                onChange={(e) => { const value = e.target.value.replace(/\D/g, "");
                    e.target.value = value.slice(0, 10);
                  }}
            />
        </Grid>

        <Grid item xs={12} md={4}>
            <StyledTextField label="Email *" name="email"
                defaultValue={selectedUser?.email}
                error={!!formErrors.email}
                helperText={formErrors.email} fullWidth required
                inputProps={{ type: "email",
                    pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
                    title: "Enter a valid email address", required: true,
                }}
            />
        </Grid>
        <Grid item xs={12} md={6}>
            <StyledTextField label="Address" name="address"
                defaultValue={selectedUser?.address} fullWidth
            /></Grid>
        <Grid item xs={12} md={6}>
            <StyledTextField label="Work Email" name="work_email"
                defaultValue={selectedUser?.work_email} fullWidth
            />
        </Grid>

        <Grid item xs={12} md={4}>
            <StyledFormControl fullWidth required  error={!!formErrors.department_id}>
                <InputLabel shrink={true}>Department *</InputLabel>
                <Select name="department_id"
                    defaultValue={selectedUser?.department_id || "NAN"}
                    
                    label="Department" >
                    {departments.map((dept) => (
                        <MenuItem key={dept.department_id}  value={dept.department_id} >
                            {dept.department_name}
                        </MenuItem>
                    ))}
                </Select>
                {formErrors.department_id && ( <FormHelperText error> {formErrors.department_id} </FormHelperText> )}
            </StyledFormControl>
        </Grid>

        <Grid item xs={12} md={4}>
            <StyledFormControl fullWidth required error={!!formErrors.role}>
                <InputLabel shrink={true}>Role*</InputLabel>
                <Select name="role" defaultValue={selectedUser?.role || "NAN"}  label="Role">
                    <MenuItem value="Employee">Employee</MenuItem>
                    <MenuItem value="Manager">Manager</MenuItem>
                    <MenuItem value="Admin">Admin</MenuItem>
                    <MenuItem value="Owner">Owner</MenuItem>
                </Select>
                {formErrors.role && ( <FormHelperText error>{formErrors.role}</FormHelperText> )}
            </StyledFormControl>
        </Grid>

        <Grid item xs={12} md={4}>
            <StyledFormControl fullWidth>
                <InputLabel shrink={true}>Status</InputLabel>
                <Select  name="status"
                    defaultValue={selectedUser?.status || "Active"}
                    label="Status">
                    <MenuItem value="Active">Active</MenuItem>
                    <MenuItem value="Inactive">Inactive</MenuItem>
                </Select>
            </StyledFormControl>
        </Grid>

        <Grid item xs={12} md={4}>
            <StyledFormControl fullWidth>
                <InputLabel shrink={true}>Manager *</InputLabel>
                <Select name="manager_id"
                    defaultValue={selectedUser?.manager_id || "NAN"}
                    label="Manager">
                    <MenuItem value="">None</MenuItem>
                    {managers.map((manager) => (
                        <MenuItem key={manager.employee_id}  value={manager.employee_id}>
                            {`${manager.employee_id} - ${manager.employee_name}`}
                        </MenuItem>
                    ))}
                </Select>
            </StyledFormControl>
        </Grid>

        <Grid item xs={12} md={4}>
            <FormControlLabel control={<Checkbox checked={showCredentials}
                onChange={(e) => setShowCredentials(e.target.checked)}
                sx={{ color: "#7e1519", "&.Mui-checked": { color: "#7e1519" } }}
                />} label="Add Login Credentials"/>
        </Grid>

        <Grid item xs={12} md={4}>
            <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                <Typography variant="body2" sx={{ mr: 1 }}>
                    Role information:
                </Typography>
                <Tooltip title="Role with Employee can access all the fields except employees.">
                    <IconButton size="small" sx={{ color: "#7e1519" }}>
                        <InfoIcon fontSize="small" />
                    </IconButton>
                </Tooltip>
            </Box>
        </Grid>

        {showCredentials && (
            <>
                <Grid item xs={12} md={6}>
                    <StyledTextField label="Username" name="username" defaultValue={selectedUser?.username} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <StyledTextField  label="Password" name="password" type="password" />
                </Grid>
            </>
        )}
    </Grid>
);

export default UserForm;