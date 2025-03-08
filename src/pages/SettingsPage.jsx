import React from "react";
import { Box, Typography } from "@mui/material";
import SettingCard from "../components/Settings/SettingCard";
import { Person, VpnKey, Schedule, Description } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

const PageTitle = styled(Typography)(({ theme }) => ({
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 700,
    color: "#7e1519",
    position: "relative",
    display: "inline-block",
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: "-8px",
      left: "0",
      width: "60px",
      height: "4px",
      backgroundColor: "#7e1519",
      borderRadius: "2px",
    },
  }));
function Settings() {
    return (
        <Box sx={{ p: 3 }}>
           <Box  sx={{ mb: 4, display: "flex", justifyContent: "space-between",
              alignItems: "center"  }}>
              <PageTitle variant="h4">Settings</PageTitle>
            </Box>
            <Box sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)",  gap: 3,
                "@media (max-width: 900px)": { gridTemplateColumns: "1fr" }
            }}>
                <SettingCard title="DEPARTMENT UPGRADE" description="Upgrade Your deparment options." icon={Person} buttonText="EDIT" />
                <SettingCard title="ROLE UPGRADE" description="You can add more roles in the dropdown." icon={VpnKey} buttonText="EDIT" />
                <SettingCard title="ERROR 404" description="whatsapp api not working," icon={Schedule} buttonText="error" />
                <SettingCard title="ERROR 404" description="whatsapp attendance not fetching values." icon={Description} buttonText="krn?" />
            </Box>
        </Box>
    );
}

export default Settings;