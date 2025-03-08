import { IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import { styled } from "@mui/material/styles";
const ActionButtonStyled = styled(IconButton)(({ theme }) => ({
    transition: "all 0.2s ease",
    "&:hover": {
      transform: "scale(1.15)",
      backgroundColor: "rgba(126, 21, 25, 0.1)",
    },
  }));
  
const ActionButton = ({ booking, actionType, onClick }) => {
    const handleClick = () => {
      onClick(booking);
    };
    return (
        <ActionButtonStyled onClick={handleClick} sx={{ color: actionType === "view" ? "#4caf50" : "#2196f3" }}>
            {actionType === "view" ? <VisibilityIcon /> : <EditIcon />}
        </ActionButtonStyled>
    );
};

export default ActionButton;