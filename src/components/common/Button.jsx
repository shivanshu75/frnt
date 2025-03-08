// src/components/common/Button.jsx
// This is a VERY basic example.  You'll likely want to customize this further.
import React from 'react';
import { Button as MuiButton } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledButton = styled(MuiButton)(({ theme }) => ({
    // Your common button styles here (from your StyledButton in previous components)
    borderRadius: "20px",
    textTransform: "none",
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 600,
    padding: "8px 24px",
    boxShadow: "0 4px 10px rgba(126, 21, 25, 0.15)",
    transition: "all 0.3s ease",
    "&:hover": {
        transform: "translateY(-2px)",
        boxShadow: "0 6px 15px rgba(126, 21, 25, 0.2)",
    },
    "&:active": {
        transform: "translateY(0)",
    },
}));

const Button = (props) => {
  return <StyledButton {...props} />;
};

export default Button;