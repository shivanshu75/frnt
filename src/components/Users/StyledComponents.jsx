//  src/components/Users/StyledComponents.jsx

import { styled } from "@mui/material/styles";
import { TextField,FormControl } from "@mui/material";
export const StyledTextField = styled(TextField)(({ theme }) => ({
    "& .MuiOutlinedInput-root": {
        backgroundColor: "white",
        borderRadius: "8px",
        transition: "all 0.2s ease",
        "&:hover": {
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          borderColor: "#7e1519",
        },
        "&.Mui-focused": {
          boxShadow: "0 4px 12px rgba(126, 21, 25, 0.15)",
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: "#7e1519",
          borderWidth: "2px",
        },
      },
      "& .MuiInputLabel-root": {
        fontFamily: "'Poppins', sans-serif",
        "&.Mui-focused": {
          color: "#7e1519",
        },
      },
      "& .MuiOutlinedInput-input": {
        fontFamily: "'Poppins', sans-serif",
      },
  }));
  
 export const StyledFormControl = styled(FormControl)(({ theme }) => ({
    "& .MuiOutlinedInput-root": {
      backgroundColor: "white",
      borderRadius: "8px",
      transition: "all 0.2s ease",
      "&:hover": {
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        borderColor: "#7e1519",
      },
      "&.Mui-focused": {
        boxShadow: "0 4px 12px rgba(126, 21, 25, 0.15)",
      },
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "#7e1519",
        borderWidth: "2px",
      },
    },
    "& .MuiInputLabel-root": {
      fontFamily: "'Poppins', sans-serif",
      color: "#7e1519",
      "&.Mui-focused": {
        color: "#7e1519",
      },
    },
    "& .MuiSelect-select": {
      fontFamily: "'Poppins', sans-serif",
    },
  }));