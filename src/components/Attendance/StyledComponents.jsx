// src/components/Attendance/StyledComponents.jsx
import { styled } from "@mui/material/styles";
import { TableContainer, Table, TableHead, TableRow, TableCell, TextField, FormControl, Chip } from "@mui/material";

export const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
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

export const StyledTable = styled(Table)(({ theme }) => ({
  width: "100%",
  borderCollapse: "separate",
  borderSpacing: "0 8px",
  "& .MuiTableCell-root": { border: "none" },
}));

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxWidth: "150px",
  fontFamily: "'Poppins', sans-serif",
  fontSize: "14px",
  fontWeight: 500,
  padding: "16px 24px",
}));

export const StyledTableHead = styled(TableHead)(({ theme }) => ({
  "& .MuiTableCell-head": {
    backgroundColor: "#7e1519", color: "white", fontWeight: "bold", fontSize: "0.95rem",
    padding: "16px 24px", position: "sticky", top: 0, zIndex: 10,
  },
  "& .MuiTableCell-head:first-of-type": { borderTopLeftRadius: "8px", borderBottomLeftRadius: "8px" },
  "& .MuiTableCell-head:last-of-type": { borderTopRightRadius: "8px", borderBottomRightRadius: "8px" },
}));

export const StyledTableRow = styled(TableRow)(({ theme, index }) => ({
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

export const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    backgroundColor: "white", borderRadius: "8px", transition: "all 0.2s ease",
    "&:hover": { boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)", borderColor: "#7e1519" },
    "&.Mui-focused": { boxShadow: "0 4px 12px rgba(126, 21, 25, 0.15)" },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#7e1519", borderWidth: "2px" },
  },
  "& .MuiInputLabel-root": {
    fontFamily: "'Poppins', sans-serif",
    "&.Mui-focused": { color: "#7e1519" },
  },
  "& .MuiOutlinedInput-input": { fontFamily: "'Poppins', sans-serif" },
}));

export const StyledFormControl = styled(FormControl)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    backgroundColor: "white", borderRadius: "8px", transition: "all 0.2s ease",
    "&:hover": { boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)", borderColor: "#7e1519" },
    "&.Mui-focused": { boxShadow: "0 4px 12px rgba(126, 21, 25, 0.15)" },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#7e1519", borderWidth: "2px" },
  },
  "& .MuiInputLabel-root": {
    fontFamily: "'Poppins', sans-serif", color: "#7e1519",
    "&.Mui-focused": { color: "#7e1519" },
  },
  "& .MuiSelect-select": { fontFamily: "'Poppins', sans-serif" },
}));
// export const StyledChip = styled(Chip)`
// //your style
// `
// }));