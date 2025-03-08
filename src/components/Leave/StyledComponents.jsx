import { styled } from "@mui/material/styles";
import { TextField,FormControl,Chip } from "@mui/material";
import { CheckCircle, Cancel, HourglassEmpty,  } from "@mui/icons-material";
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
export const LeaveStatusChip = styled(Chip)(({ status }) => {
    let bgColor = "#f39c12"; // Default for Pending
    const textColor = "white";
    let icon = <HourglassEmpty fontSize="small" />;
  
    if (status === "Approved") {
      bgColor = "#2ecc71";
      icon = <CheckCircle fontSize="small" />;
    } else if (status === "Rejected") {
      bgColor = "#e74c3c";
      icon = <Cancel fontSize="small" />;
    }
  
    return {
      backgroundColor: bgColor,
      color: textColor,
      fontWeight: 600,
      "& .MuiChip-icon": {
        color: textColor,
      },
      transition: "transform 0.2s ease, box-shadow 0.2s ease",
      "&:hover": {
        transform: "scale(1.05)",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
      },
    };
  });
  
 export const LeaveTypeChip = styled(Chip)(({ leaveType }) => {
    let bgColor = "#3498db"; // Default
  
    if (leaveType === "Sick Leave") {
      bgColor = "#9b59b6";
    } else if (leaveType === "Casual Leave") {
      bgColor = "#1abc9c";
    } else if (leaveType === "Earned Leave") {
      bgColor = "#f1c40f";
    }
  
    return {
      backgroundColor: bgColor,
      color: "white",
      fontWeight: 600,
      transition: "transform 0.2s ease, box-shadow 0.2s ease",
      "&:hover": {
        transform: "scale(1.05)",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
      },
    };
  });