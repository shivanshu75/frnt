// src/components/Attendance/EventDetailsCard.jsx
import React from 'react';
import { Card, CardContent, Typography, Box, Chip } from '@mui/material';
import { AccessTime, LocationOn } from '@mui/icons-material';
import { styled } from "@mui/material/styles";

const EventCard = styled(Card)(({ theme }) => ({
    borderRadius: "12px",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.08)",
    marginTop: theme.spacing(3),
    overflow: "visible",
    position: "relative",
    transition: "transform 0.3s ease",
    "&:hover": { transform: "translateY(-5px)" },
    "&::before": {
        content: '""', position: "absolute", top: "-10px", left: "20px", width: "20px",
        height: "20px", backgroundColor: "#fff", transform: "rotate(45deg)",
        boxShadow: "-5px -5px 10px rgba(0, 0, 0, 0.05)", zIndex: 0,
    },
}));

const EventDetail = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(1.5),
    "& .MuiSvgIcon-root": { color: "#7e1519", marginRight: theme.spacing(1) },
}));

const EventDetailsCard = ({ selectedEvent,getWorkingHoursStatus }) => (
    <EventCard sx={{ mt: 3 }}>
        <CardContent>
            <Typography variant="h6" sx={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, mb: 2, color: "#7e1519", position: "relative", display: "inline-block", "&::after": { content: '""', position: "absolute", bottom: "-5px", left: "0", width: "30px", height: "2px", backgroundColor: "#7e1519", borderRadius: "2px" }, pb: 1 }}>
                Attendance Details
            </Typography>

            <EventDetail>
                <AccessTime />
                <Typography variant="body1" sx={{ fontFamily: "'Poppins', sans-serif" }}>
                    <strong>Check-in:</strong> {selectedEvent.check_in_time}
                </Typography>
            </EventDetail>

            <EventDetail>
                <AccessTime />
                <Typography variant="body1" sx={{ fontFamily: "'Poppins', sans-serif" }}>
                    <strong>Check-out:</strong> {selectedEvent.check_out_time}
                </Typography>
            </EventDetail>

            {selectedEvent.checkInLocation && (
                <EventDetail>
                    <LocationOn />
                    <Typography variant="body1" sx={{ fontFamily: "'Poppins', sans-serif" }}>
                        <strong>Check-in Location:</strong>{" "}
                        {selectedEvent.checkInLocation.startsWith("http://") || selectedEvent.checkInLocation.startsWith("https://") ? (
                            <a href={selectedEvent.checkInLocation} target="_blank" rel="noopener noreferrer" style={{ color: "#7e1519", textDecoration: "none" }}>
                                {selectedEvent.checkInLocation}
                            </a>
                        ) : (
                            selectedEvent.checkInLocation
                        )}
                    </Typography>
                </EventDetail>
            )}

            {selectedEvent.checkOutLocation && (
                <EventDetail>
                    <LocationOn />
                    <Typography variant="body1" sx={{ fontFamily: "'Poppins', sans-serif" }}>
                        <strong>Check-out Location:</strong>{" "}
                        {selectedEvent.checkOutLocation.startsWith("http://") || selectedEvent.checkOutLocation.startsWith("https://") ? (
                            <a href={selectedEvent.checkOutLocation} target="_blank" rel="noopener noreferrer" style={{ color: "#7e1519", textDecoration: "none" }}>
                                {selectedEvent.checkOutLocation}
                            </a>
                        ) : (
                            selectedEvent.checkOutLocation
                        )}
                    </Typography>
                </EventDetail>
            )}

            <EventDetail>
                <AccessTime />
                <Typography variant="body1" sx={{ fontFamily: "'Poppins', sans-serif" }}>
                    <strong>Working Hours:</strong>{" "}
                    <Chip label={`${selectedEvent.workingHours} hrs`} size="small"
                        sx={{ backgroundColor: getWorkingHoursStatus(selectedEvent.workingHours).color, color: "white", fontWeight: 500, ml: 1, transition: "all 0.2s ease", "&:hover": { transform: "scale(1.05)" } }} />
                </Typography>
            </EventDetail>
        </CardContent>
    </EventCard>
);

export default EventDetailsCard;