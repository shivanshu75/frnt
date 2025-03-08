import React from 'react';
import { Grid, Typography,Divider } from "@mui/material";
import { AddCircle as AddCircleIcon } from "@mui/icons-material";
import Button from '../common/Button';
import { StyledTextField } from './StyledComponents';

const HostInfoStep = ({ hosts, handleRemoveHost, handleAddHost, handleHostChange }) => (
  <>
    <Typography variant="h6" sx={{ mb: 2, color: "#7e1519", fontWeight: "bold", position: "relative",
        "&:after": { content: '""', position: "absolute", bottom: "-8px", left: "0", width: "40px",
            height: "3px", backgroundColor: "#7e1519", borderRadius: "2px"
        }, pb: 1
      }}>
      Host Information
    </Typography>
    <Divider sx={{ mb: 3 }} />
    {hosts.map((host, index) => (
      <Grid container spacing={2} key={index} sx={{ mb: 2,
          animation: `fadeIn 0.3s ease-out ${index * 0.1}s both`,
          "@keyframes fadeIn": {
            "0%": { opacity: 0, transform: "translateY(10px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
          }
        }}>
        <Grid item xs={12} md={5}>
          <StyledTextField fullWidth label={`Host ${index + 1}`} name={`host_name_${index}`}
                           value={host.host_name}
                           onChange={(e) => handleHostChange(index, "host_name", e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <StyledTextField fullWidth label="Host Contact" name={`poc_contact_${index}`}
                           value={host.poc_contact}
                           onChange={(e) => handleHostChange(index, "poc_contact", e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={2} sx={{ display: "flex", alignItems: "center" }}>
          <Button variant="contained" color="error" onClick={() => handleRemoveHost(index)}
                  sx={{ borderRadius: "20px", boxShadow: "0 2px 8px rgba(244, 67, 54, 0.3)", transition: "all 0.2s ease",
                    "&:hover": { boxShadow: "0 4px 12px rgba(244, 67, 54, 0.4)", transform: "translateY(-2px)" },
                    "&:active": { transform: "translateY(0)" }
                  }} size="small">
            Remove
          </Button>
        </Grid>
      </Grid>
    ))}
    {hosts.length < 7 && (
      <Button onClick={handleAddHost} sx={{ color: "#7e1519", mt: 2, borderRadius: "20px", border: "1px dashed #7e1519",
          padding: "6px 12px", transition: "all 0.2s ease",
          "&:hover": { backgroundColor: "rgba(126, 21, 25, 0.1)", transform: "translateY(-2px)" },
          "&:active": { transform: "translateY(0)" }
        }} startIcon={<AddCircleIcon />} size="small">
        Add Another Host
      </Button>
    )}
  </>
);

export default HostInfoStep;