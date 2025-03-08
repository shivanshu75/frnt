import { Accordion, AccordionSummary, AccordionDetails,Box,Grid } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Typography } from "@mui/material";
import { formatDateIST } from './helpers'; // Import the helper
import { StyledTextField } from './StyledComponents';

const ShootingDetailsAccordion = ({ shootingSchedules }) => (
    <Accordion>
      <AccordionSummary expandIcon={<ArrowDownwardIcon />} aria-controls="panel2-content" id="panel2-header">
        <Typography component="span" sx={{ fontWeight: 600, color: "#7e1519" }}>
          Shooting Details
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        {shootingSchedules.length > 0 ? (
          shootingSchedules.map((schedule, index) => (
            <Box key={index} sx={{ mb: 2, p: 2, backgroundColor: "white", borderRadius: "8px" }}>
              <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
                Schedule {index + 1}
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <StyledTextField fullWidth label="SHOOTING DATE" name="shooting_date" margin="normal"
                                   value={formatDateIST(schedule.shooting_date)} disabled />
                </Grid>
                <Grid item xs={12} md={6}>
                  <StyledTextField fullWidth label="SHOOTING START TIME" name="shooting_starttime" margin="normal"
                                   value={schedule.shooting_starttime} disabled />
                </Grid>
                  <Grid item xs={12} md={6}>
                      <StyledTextField fullWidth label="SHOOTING END TIME" name="shooting_endtime" margin="normal"
                          value={schedule.shooting_endtime} disabled />
                  </Grid>
                  <Grid item xs={12} md={6}>
                      <StyledTextField fullWidth label="CAMERAMAN REPORTING DATE" name="cameraman_rep_date" margin="normal"
                          value={formatDateIST(schedule.cameraman_rep_date)} disabled />
                  </Grid>
                  <Grid item xs={12} md={6}>
                      <StyledTextField fullWidth label="CAMERAMAN REPORTING TIME" name="cameraman_rep_time"
                          margin="normal" value={schedule.cameraman_rep_time} disabled />
                  </Grid>
              </Grid>
            </Box>
          ))
        ) : (
          <Typography>No shooting schedules available.</Typography>
        )}
      </AccordionDetails>
    </Accordion>
  );
  export default ShootingDetailsAccordion;