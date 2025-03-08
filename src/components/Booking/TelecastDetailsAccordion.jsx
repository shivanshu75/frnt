import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Typography } from "@mui/material";
import { formatDateIST } from './helpers';
import { StyledTextField } from './StyledComponents';

const TelecastDetailsAccordion = ({ telecastSchedules }) => (
  <Accordion>
    <AccordionSummary expandIcon={<ArrowDownwardIcon />} aria-controls="panel5-content" id="panel5-header">
      <Typography component="span" sx={{ fontWeight: 600, color: "#7e1519" }}>
        Telecast Information
      </Typography>
    </AccordionSummary>
    <AccordionDetails>
      {telecastSchedules.map((schedule, index) => (
        <Box key={index} sx={{ mb: 2 }}>
          {index === 0 ? (
            <>
              <StyledTextField fullWidth label="TELECAST DATE FROM" name="telecast_date_from" margin="normal"
                               defaultValue={formatDateIST(schedule.telecast_date)} disabled />
              <StyledTextField fullWidth label="TELECAST STARTTIME" name="telecast_start_time" margin="normal"
                               defaultValue={schedule.telecast_starttime} disabled />
              <StyledTextField fullWidth label="TELECAST ENDTIME" name="telecast_date_to" margin="normal"
                               defaultValue={schedule.telecast_endtime} disabled />
              <StyledTextField fullWidth label="DURATION" name="duration" margin="normal"
                               defaultValue={schedule.duration} disabled />
            </>
          ) : (
            <StyledTextField fullWidth label="TELECAST DATE TO" name="telecast_date_from" margin="normal"
                             defaultValue={formatDateIST(schedule.telecast_date)} disabled />
          )}
        </Box>
      ))}
    </AccordionDetails>
  </Accordion>
);

export default TelecastDetailsAccordion;