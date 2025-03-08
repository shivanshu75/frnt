//  src/components/Maharajji/StyledComponents.jsx

import { styled } from "@mui/material/styles";
import { TextField } from "@mui/material";
export const StyledTextField = styled(TextField)(({ theme }) => ({
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
    },
  }));