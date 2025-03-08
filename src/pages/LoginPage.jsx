// src/pages/LoginPage.jsx
import React, { useState } from "react";
import { Box, Button, TextField, Typography, Paper, Fade, Grow } from "@mui/material";
import { keyframes } from "@mui/system";
import img from "../image/loginlogo.jpeg"; //  Make sure path is correct
import API from "../api";
import { styled } from '@mui/material/styles'; // Import styled

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideUp = keyframes`
  from { transform: translateY(20px); }
  to { transform: translateY(0); }
`;

const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(248,200,79,255); }
  70% { box-shadow: 0 0 0 10px rgba(254,235,197,255); }
  100% { box-shadow: 0 0 0 0 rgba(248, 204, 83, 0); }
`;

// --- Styled Components ---

const LoginFormContainer = styled(Paper)(({ theme }) => ({
    width: "100%",
    maxWidth: 400,
    borderRadius: theme.shape.borderRadius,
    overflow: "hidden",
    padding: theme.spacing(4),
    animation: `${slideUp} 0.5s ease-out`,
    transition: "box-shadow 0.3s ease-in-out",
    backgroundColor: "rgba(249,236,212,255)",
    backdropFilter: "blur(10px)",
    "&:hover": {
        boxShadow: "0 4px 12px rgba(248,200,79,255)",
    },
}));

const Logo = styled('img')({
    width: 80,
    height: 80,
    borderRadius: '50%',
    animation: `${pulse} 2s infinite`,
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
        transform: 'scale(1.1)',
    },
});
const LoginHeader = styled(Typography)(({theme})=>({
    color: theme.palette.primary.main,
    fontWeight: 'bold',
    marginBottom: theme.spacing(3),
    textAlign: 'center',
    animation: `${fadeIn} 1s ease-out 0.5s both`,
}))

const StyledTextField = styled(TextField)(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
        transition: 'border-color 0.3s ease-in-out',
        '&:hover fieldset': {
            borderColor: theme.palette.primary.main,
        },
    },
}));

const LoginButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#fab63b', // Use theme if you have a specific color
    color: 'white',
    padding: theme.spacing(1, 2),
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
        backgroundColor: '#ee9121', // Darken on hover
        transform: 'translateY(-2px)',
        boxShadow: '0 4px 12px rgba(248,200,79,255)',
    },
}));

// --- Sub-Components ---

const LoginForm = ({ onLogin }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (!username.trim()) {
            setError("Enter username");
            return;
        }
        if (!password.trim()) {
            setError("Enter password");
            return;
        }

        try {
            const response = await API.post(`/login`, { username, password });
            if (response.data.success) {
                onLogin(response.data.role);
            } else {
                setError("Invalid credentials");
            }
        } catch (error) {
            console.error("Login error:", error);
            setError("An error occurred during login");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <StyledTextField
                fullWidth
                label="Username"
                margin="normal"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                sx={{ mb: 2, animation: `${fadeIn} 0.8s ease-out 1.0s both` }}
            />
            <StyledTextField
                fullWidth
                label="Password"
                type="password"
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                sx={{ mb: 3, animation: `${fadeIn} 1s ease-out 1.3s both` }}
            />
            {error && (
                <Typography color="error" sx={{ mb: 2, textAlign: "center" }}>
                    {error}
                </Typography>
            )}
             <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, animation: `${fadeIn} 1s ease-out 1.0s both` }}>
                <LoginButton type="submit" fullWidth>
                    Login
                </LoginButton>
            </Box>
        </form>
    );
};


// --- Main Component ---

function Login({ onLogin }) {
    return (
        <Box sx={{ minHeight: "100vh", width: "100vw", position: "relative",
            "&::before": { content: '""', position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
                backgroundImage: "url('https://aadinathtv.com/uploads/banners/59313006WhatsApp%20Image%202022-01-12%20at%202.22.34%20PM%20(1).jpeg')",
                backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", opacity: 0.9, zIndex: 0
            }
        }}>
            <Fade in={true} timeout={1000}>
                <Box sx={{ minHeight: "100vh", width: "100vw", display: "flex", flexDirection: "column",
                    alignItems: "center", justifyContent: "center", position: "relative", zIndex: 1, p: 2,
                    animation: `${fadeIn} 1s ease-out`
                }}>
                    <Grow in={true} timeout={1000}>
                        <LoginFormContainer elevation={3}>
                            <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
                                <Logo src={img} alt="Adinath Logo" />
                            </Box>
                            <LoginHeader variant="h5">Login / लॉग इन</LoginHeader>
                            <Typography variant="h6" sx={{ mb: 1, textAlign: 'center', animation: `${fadeIn} 1s ease-out 0.7s both` }}>
                                Welcome back!
                            </Typography>
                            <Typography sx={{ color: 'text.secondary', mb: 3, textAlign: 'center', animation: `${fadeIn} 1s ease-out 0.9s both` }}>
                                Enter your username and password to access Adinath Dashboard.
                            </Typography>
                            <LoginForm onLogin={onLogin} />
                        </LoginFormContainer>
                    </Grow>
                </Box>
            </Fade>
        </Box>
    );
}

export default Login;