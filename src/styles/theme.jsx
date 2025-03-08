
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark', // Default to dark mode
    primary: {
      main: '#7e1519', // Your primary color
      light: '#f8d9a0', // Example light variant for hover states, etc.
    },
    secondary: {
      main: '#61dafb', // Example secondary color (React logo color)
    },
    background: {
      default: '#242424',  // Dark background for dark mode
      paper: '#fdedd1',   // Light background for Paper components
    },
    text: {
      primary: 'rgba(255, 255, 255, 0.87)', // White text for dark mode
      secondary: '#888',                   // Gray text
    },
    // You can add error, warning, info, success colors as needed:
    error: {
      main: '#f44336', // Example error color (red)
    },
    warning: {
        main: '#ff9800', // Example warning color (orange)
    },
    info: {
        main: '#2196f3', // Example info color (blue)
    },
    success: {
        main: '#4caf50', // Example success color (green)
    }

  },
  typography: {
    fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
    fontWeightRegular: 400,
    fontWeightMedium: 500, // Used for links and buttons
    h1: {
      fontSize: '3.2em',
      lineHeight: 1.1,
    },
    h4:{
      fontFamily: "'Poppins', sans-serif",
    },
    button: {
      fontSize: '1em',
      fontWeight: 500,
      fontFamily: "'Poppins', sans-serif", // Consistent font
    },

  },
  // You can override default component styles here, if needed
  components: {
    MuiButton: {
      styleOverrides: {
        root: { // Target the root style of MuiButton
          borderRadius: '20px', // Example: rounded buttons
          textTransform: 'none', // Example: remove uppercase
          // You can add more button style overrides here
        },
      },
    },
    MuiTextField:{
        styleOverrides:{
            root:{
                "& .MuiOutlinedInput-root": {
                    backgroundColor: "white",
                    borderRadius: "8px",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                      borderColor: "#7e1519",
                    },
                    "&.Mui-focused": {
                      boxShadow: "0 4px 12px rgba(126, 21, 25, 0.15)",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#7e1519",
                      borderWidth: "2px",
                    },
                  },
            }
        }
    },
     // You can add style overrides for other components here.
     MuiPaper: {
        styleOverrides: {
          root: {
            // Example: Consistent Paper styling
            // backgroundColor: '#fdf5e6', // Light beige background
          },
        },
      },

  },
});