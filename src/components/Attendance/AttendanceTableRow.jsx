// // src/components/Attendance/AttendanceTableRow.jsx

// import React from 'react';
// import { TableRow, TableCell, Chip, Box, IconButton } from '@mui/material';
// import { Edit as EditIcon, Visibility as VisibilityIcon, CalendarMonth,  Person } from '@mui/icons-material';
// import { styled } from "@mui/material/styles";
// import { convertUTCtoIST, getWorkingHoursStatus } from './helpers'; // Import helper functions


// const StyledTableRow = styled(TableRow)(({ theme, index }) => ({
//     backgroundColor: "#fdedd1",
//     boxShadow: "0 2px 6px rgba(0, 0, 0, 0.05)",
//     borderRadius: "8px",
//     marginBottom: "8px",
//     transition: "all 0.3s ease",
//     animation: `fadeIn 0.5s ease-out ${index * 0.05}s both`,
//     "@keyframes fadeIn": {
//         "0%": { opacity: 0, transform: "translateY(10px)" },
//         "100%": { opacity: 1, transform: "translateY(0)" },
//     },
//     "& .MuiTableCell-body": { padding: "16px 24px" },
//     "& .MuiTableCell-body:first-of-type": { borderTopLeftRadius: "8px", borderBottomLeftRadius: "8px" },
//     "& .MuiTableCell-body:last-of-type": { borderTopRightRadius: "8px", borderBottomLeftRadius: "8px" },
//     "&:nth-of-type(odd)": { backgroundColor: "#fde8c7" },
//     "&:hover": { backgroundColor: "#f8d9a0", transform: "translateY(-2px)", boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)" },
//     "&:active": { transform: "translateY(0)", boxShadow: "0 2px 6px rgba(0, 0, 0, 0.05)" },
// }));

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//     whiteSpace: "nowrap",
//     overflow: "hidden",
//     textOverflow: "ellipsis",
//     maxWidth: "150px",
//     fontFamily: "'Poppins', sans-serif",
//     fontSize: "14px",
//     fontWeight: 500,
//     padding: "16px 24px",
// }));
// const ActionButton = styled(IconButton)(({ theme }) => ({
//     transition: "all 0.2s ease",
//     "&:hover": { transform: "scale(1.15)", backgroundColor: "rgba(126, 21, 25, 0.1)" },
// }));

// const AttendanceTableRow = ({ att, index, handleEdit, handleView }) => {
//     const hoursStatus = getWorkingHoursStatus(att.working_hours);
//     return (
//         <StyledTableRow key={att.attendance_id} index={index}>
//             <StyledTableCell>
//                 <Chip label={att.attendance_id} size="small" sx={{ backgroundColor: "#7e1519", color: "white", fontWeight: "bold",
//                     transition: "all 0.2s ease",
//                     "&:hover": { transform: "scale(1.05)", boxShadow: "0 2px 8px rgba(126, 21, 25, 0.3)" }
//                 }} />
//             </StyledTableCell>
//             <StyledTableCell>
//                 <Chip label={att.employee_name || att.employee_id} size="small"
//                     icon={<Person fontSize="small" />} sx={{
//                         backgroundColor: "#7e1519", color: "white", fontWeight: 500,
//                         transition: "all 0.2s ease", "&:hover": { transform: "scale(1.05)" }
//                     }} />
//             </StyledTableCell>
//             <StyledTableCell>
//                 <Chip label={convertUTCtoIST(att.date)} size="small"
//                     icon={<CalendarMonth fontSize="small" />} sx={{
//                         color: "black", fontWeight: 500,
//                         transition: "all 0.2s ease", "&:hover": { transform: "scale(1.05)" }
//                     }} />
//             </StyledTableCell>
//             <StyledTableCell>{att.check_in_time}</StyledTableCell>
//             <StyledTableCell>{att.check_out_time}</StyledTableCell>
//             <StyledTableCell>
//                 <Chip label={`${att.working_hours} hrs`} size="small" sx={{
//                     backgroundColor: hoursStatus.color, color: "white", fontWeight: 500,
//                     transition: "all 0.2s ease", "&:hover": { transform: "scale(1.05)" }
//                 }} />
//             </StyledTableCell>
//             <StyledTableCell>
//                 <Box sx={{ display: "flex", gap: 1 }}>
//                     <ActionButton onClick={() => handleEdit(att)} sx={{ color: "#2196f3" }}>
//                         <EditIcon />
//                     </ActionButton>
//                     <ActionButton onClick={() => handleView(att)} sx={{ color: "#4caf50" }}>
//                         <VisibilityIcon />
//                     </ActionButton>
//                 </Box>
//             </StyledTableCell>
//         </StyledTableRow>
//     );
// };

// export default AttendanceTableRow;

import React from 'react';
import { TableRow, TableCell, Chip, Box, IconButton } from '@mui/material';
import { Edit as EditIcon, Visibility as VisibilityIcon, CalendarMonth,  Person } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { convertUTCtoIST, getWorkingHoursStatus } from './helpers.jsx';


const StyledTableRow = styled(TableRow)(({ theme, index }) => ({
    backgroundColor: "#fdedd1",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.05)",
    borderRadius: "8px",
    marginBottom: "8px",
    transition: "all 0.3s ease",
    animation: `fadeIn 0.5s ease-out ${index * 0.05}s both`,
    "@keyframes fadeIn": {
        "0%": { opacity: 0, transform: "translateY(10px)" },
        "100%": { opacity: 1, transform: "translateY(0)" },
    },
    "& .MuiTableCell-body": { padding: "16px 24px" },
    "& .MuiTableCell-body:first-of-type": { borderTopLeftRadius: "8px", borderBottomLeftRadius: "8px" },
    "& .MuiTableCell-body:last-of-type": { borderTopRightRadius: "8px", borderBottomLeftRadius: "8px" },
    "&:nth-of-type(odd)": { backgroundColor: "#fde8c7" },
    "&:hover": { backgroundColor: "#f8d9a0", transform: "translateY(-2px)", boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)" },
    "&:active": { transform: "translateY(0)", boxShadow: "0 2px 6px rgba(0, 0, 0, 0.05)" },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxWidth: "150px",
    fontFamily: "'Poppins', sans-serif",
    fontSize: "14px",
    fontWeight: 500,
    padding: "16px 24px",
}));
const ActionButton = styled(IconButton)(({ theme }) => ({
    transition: "all 0.2s ease",
    "&:hover": { transform: "scale(1.15)", backgroundColor: "rgba(126, 21, 25, 0.1)" },
}));

const AttendanceTableRow = ({ att, index, handleEdit, handleView }) => {
    const hoursStatus = getWorkingHoursStatus(att.working_hours);
    return (
        <StyledTableRow key={att.attendance_id} index={index}>
            <StyledTableCell>
                <Chip label={att.attendance_id} size="small" sx={{ backgroundColor: "#7e1519", color: "white", fontWeight: "bold",
                    transition: "all 0.2s ease",
                    "&:hover": { transform: "scale(1.05)", boxShadow: "0 2px 8px rgba(126, 21, 25, 0.3)" }
                }} />
            </StyledTableCell>
            <StyledTableCell>
                <Chip label={att.employee_name || att.employee_id} size="small"
                    icon={<Person fontSize="small" />} sx={{
                        backgroundColor: "#7e1519", color: "white", fontWeight: 500,
                        transition: "all 0.2s ease", "&:hover": { transform: "scale(1.05)" }
                    }} />
            </StyledTableCell>
            <StyledTableCell>
                <Chip label={convertUTCtoIST(att.date)} size="small"
                    icon={<CalendarMonth fontSize="small" />} sx={{
                        color: "black", fontWeight: 500,
                        transition: "all 0.2s ease", "&:hover": { transform: "scale(1.05)" }
                    }} />
            </StyledTableCell>
            <StyledTableCell>{att.check_in_time}</StyledTableCell>
            <StyledTableCell>{att.check_out_time}</StyledTableCell>
            <StyledTableCell>
                <Chip label={`${att.working_hours} hrs`} size="small" sx={{
                    backgroundColor: hoursStatus.color, color: "white", fontWeight: 500,
                    transition: "all 0.2s ease", "&:hover": { transform: "scale(1.05)" }
                }} />
            </StyledTableCell>
            <StyledTableCell>
                <Box sx={{ display: "flex", gap: 1 }}>
                    <ActionButton onClick={() => handleEdit(att)} sx={{ color: "#2196f3" }}>
                        <EditIcon />
                    </ActionButton>
                    <ActionButton onClick={() => handleView(att)} sx={{ color: "#4caf50" }}>
                        <VisibilityIcon />
                    </ActionButton>
                </Box>
            </StyledTableCell>
        </StyledTableRow>
    );
};

export default AttendanceTableRow;