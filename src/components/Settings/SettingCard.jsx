import React from 'react';
import { Box, Typography, Card, CardContent, CardActions } from "@mui/material";
import { styled } from "@mui/material/styles";
import Button from '../common/Button'; // Use common Button
import { ArrowForward } from "@mui/icons-material";


const StyledCard = styled(Card)(({ theme }) => ({
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: theme.shadows[6],
    },
  }));
const SettingCard = ({ title, description, icon: Icon, buttonText, buttonAction }) => (
    <StyledCard>
        <CardContent>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Icon sx={{ fontSize: 40, color: "#7e1519", mr: 2 }} />
                <Typography variant="h6">{title}</Typography>
            </Box>
            <Typography variant="body2" color="text.secondary">
                {description}
            </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "flex-end" }}>
            <Button  endIcon={<ArrowForward />} onClick={buttonAction}>
                {buttonText}
            </Button>
        </CardActions>
    </StyledCard>
);

export default SettingCard;