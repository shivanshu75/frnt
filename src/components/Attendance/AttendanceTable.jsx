// src/components/Attendance/AttendanceTable.jsx
import React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { styled } from "@mui/material/styles";
import AttendanceTableRow from './AttendanceTableRow';

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
    borderRadius: "12px",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
    marginTop: theme.spacing(3),
    overflowY: "scroll",
    height: "65vh",
    maxWidth: "100%",
    "&::-webkit-scrollbar": { width: "8px" },
    "&::-webkit-scrollbar-track": { background: "#f1f1f1", borderRadius: "10px" },
    "&::-webkit-scrollbar-thumb": { background: "#7e1519", borderRadius: "10px" },
    "&::-webkit-scrollbar-thumb:hover": { background: "#5e1012" },
    "& .MuiTable-root": { tableLayout: "fixed" },
}));

const StyledTable = styled(Table)(({ theme }) => ({
    width: "100%",
    borderCollapse: "separate",
    borderSpacing: "0 8px",
    "& .MuiTableCell-root": { border: "none" },
}));


const StyledTableHead = styled(TableHead)(({ theme }) => ({
    "& .MuiTableCell-head": {
        backgroundColor: "#7e1519", color: "white", fontWeight: "bold", fontSize: "0.95rem",
        padding: "16px 24px", position: "sticky", top: 0, zIndex: 10,
    },
    "& .MuiTableCell-head:first-of-type": { borderTopLeftRadius: "8px", borderBottomLeftRadius: "8px" },
    "& .MuiTableCell-head:last-of-type": { borderTopRightRadius: "8px", borderBottomRightRadius: "8px" },
}));



const AttendanceTable = ({ filteredAttendance, handleEdit, handleView }) => (
    <Paper sx={{
        width: "100%", height: "75vh", overflowY: "auto", backgroundColor: "white",
        borderRadius: "12px", boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
        "&::-webkit-scrollbar": { width: "8px" },
        "&::-webkit-scrollbar-track": { background: "#f1f1f1", borderRadius: "10px" },
        "&::-webkit-scrollbar-thumb": { background: "#7e1519", borderRadius: "10px" },
        "&::-webkit-scrollbar-thumb:hover": { background: "#5e1012" }
    }}>
        <StyledTable stickyHeader>
            <StyledTableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Employee Name</TableCell>
                    <TableCell>DATE</TableCell>
                    <TableCell>Check-in Time</TableCell>
                    <TableCell>Check-out Time</TableCell>
                    <TableCell>Working Hours</TableCell>
                    <TableCell>Actions</TableCell>
                </TableRow>
            </StyledTableHead>
            <TableBody>
                {filteredAttendance.map((att, index) => (
                    <AttendanceTableRow
                        key={att.attendance_id}
                        att={att}
                        index={index}
                        handleEdit={handleEdit}
                        handleView={handleView}
                    />
                ))}
            </TableBody>
        </StyledTable>
    </Paper>
);

export default AttendanceTable;