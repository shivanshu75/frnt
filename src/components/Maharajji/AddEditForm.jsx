import React from 'react';
import { Grid, FormControl, InputLabel, Select, MenuItem, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { StyledTextField } from './StyledComponents';

const StyledFormControl = styled(FormControl)(({ theme, error }) => ({
    "& .MuiOutlinedInput-root": {
        backgroundColor: "white",
        borderRadius: "8px",
        transition: "all 0.2s ease",
        "&:hover": {
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        },
        "&.Mui-focused": {
            boxShadow: "0 4px 12px rgba(126, 21, 25, 0.15)",
        },
        "&.MuiOutlinedInput-notchedOutline":{
          borderColor: error ?  "#d32f2f" : "rgba(0, 0, 0, 0.23)",
        },
        "&:hover .MuiOutlinedInput-notchedOutline":{
          borderColor: error ? "#d32f2f" : "rgba(0, 0, 0, 0.87)",
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline":{
            borderColor: error ?  "#d32f2f" : "#7e1519",
        }
    },
    "& .MuiInputLabel-root": {
        color: "#7e1519",
        "&.Mui-focused": {
            color: "#7e1519",
        },
    },
    "& .MuiSelect-select": {
        fontFamily: "'Poppins', sans-serif",
    },
}));
const AddEditForm = ({ selectedPerson, formErrors, salesPersons, primarySalesPerson, setPrimarySalesPerson, secondarySalesPerson, setSecondarySalesPerson }) => (

  <Grid container spacing={2}>
    <Grid item xs={12} md={6}>
      <StyledTextField
        label="Name*"
        name="name"
        defaultValue={selectedPerson?.name}
        error={!!formErrors.name}
        helperText={formErrors.name}
        fullWidth
        required
        sx={{ mb: 2 }}
      />
    </Grid>
    <Grid item xs={12} md={6}>
      <StyledFormControl
        fullWidth
        required
        error={!!formErrors.category}
        sx={{ mb: 2 }}
      >
        <InputLabel>Category*</InputLabel>
        <Select
          name="category"
          defaultValue={selectedPerson?.category || ""}
          label="Category*"

        >
          <MenuItem value="Maharaj ji">Maharaj ji</MenuItem>
          <MenuItem value="Mata ji">Mata ji</MenuItem>
          <MenuItem value="Mandir">Mandir</MenuItem>
        </Select>
        {formErrors.category && (
                    <Typography variant="caption" color="error">
                      {formErrors.category}
                    </Typography>
                  )}
      </StyledFormControl>
    </Grid>
    <Grid item xs={12} md={6}>
      <StyledFormControl fullWidth required error={!!formErrors.primary_sales_person} sx={{ mb: 2 }}>
        <InputLabel shrink={true}>Primary Sales Person *</InputLabel>
        <Select name="primary_sales_person"
          value={primarySalesPerson || ''}
          onChange={(event) => setPrimarySalesPerson(event.target.value)}
          label="Primary Sales Person*"  >
          <MenuItem value="">None</MenuItem>
          {salesPersons.map((person) => (
            <MenuItem key={person.employee_id} value={person.employee_id}>
              {`${person.employee_id} - ${person.employee_name} - ${person.phone}`}
            </MenuItem>
          ))}
        </Select>
        {formErrors.primary_sales_person && (
          <Typography variant="caption" color="error"> {formErrors.primary_sales_person} </Typography>
        )}
      </StyledFormControl>
    </Grid>

    <Grid item xs={12} md={6}>
      <StyledFormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel shrink={true}>Secondary Sales Person</InputLabel>
        <Select name="secondary_sales_person"
          value={secondarySalesPerson || ''}
          onChange={(event) => setSecondarySalesPerson(event.target.value)}
          label="Secondary Sales Person" >
           <MenuItem value="">None</MenuItem>
          {salesPersons.filter((person) => person.employee_id !== primarySalesPerson).map((person) => (
            <MenuItem key={person.employee_id} value={person.employee_id}>
              {`${person.employee_id} - ${person.employee_name} - ${person.phone}`}
            </MenuItem>
          ))}
        </Select>
      </StyledFormControl>
    </Grid>
  </Grid>
);

export default AddEditForm;