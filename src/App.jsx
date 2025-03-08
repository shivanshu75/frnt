import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage"; //page
import Layout from "./components/Layout/Layout"; //layout
import DashboardPage from "./pages/DashboardPage"; //page
import UsersPage from "./pages/UsersPage";  //page
import LeadManagementPage from "./pages/LeadsPage"; //page
import BookingPage from "./pages/BookingPage";  //page
import SettingsPage from "./pages/SettingsPage"; //page
import WelcomePage from "./pages/WelcomePage";  //page
import MaharajJiPage from "./pages/MaharajJiPage";  //page
import AttendancePage from "./pages/AttendancePage"  //page
import LeavePage from "./pages/LeavePage"; //page
import API from "./api";
import { trefoil } from 'ldrs';
import { styled } from '@mui/material/styles'; // Import styled


const LoadingScreenContainer = styled('div')({
    height: '100vh',
    width: '100vw',
    backgroundColor: '#fde8c7',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

const LoadingScreen = () => (
    <LoadingScreenContainer>
        <l-trefoil
            size="40"
            stroke="4"
            strokeLength="0.15"
            bgOpacity="0.1"
            speed="1.4"
            color="black"
        />
    </LoadingScreenContainer>
);

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [userRole, setUserRole] = useState("")

    trefoil.register();


    const handleLogin = (role) => {
        setIsAuthenticated(true)
        setUserRole(role)
    }

    const handleLogout = async () => {
        try {
            const { status } = await API.get(`/logout`);
            if (status === 200) {
                setUserRole("")
                setIsAuthenticated(false)
            }
        } catch (error) {
            console.error(error);
            // Consider showing a user-friendly error message here.
        }
    }

    const fetchUser = async () => { // Renamed to avoid naming conflict
        try {
            const { data, status } = await API.get(`/getCondenseClientInfo`);
            if (status === 200) {
                setUserRole(data?.user?.role);
                setIsAuthenticated(true); // Only set to true if successful
            } else {
                // Handle non-200 responses (e.g., 401 Unauthorized)
                setIsAuthenticated(false);
            }
        } catch (error) {
            console.error("Error fetching user:", error); // More detailed error logging
            setIsAuthenticated(false); // Ensure user is logged out on error
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);


    return (
        <Router>
            <Routes>
                <Route path="/" element={<WelcomePage />} />
                <Route path="/login" element={isLoading ? <LoadingScreen /> : isAuthenticated ? <Navigate to="/dashboard" replace /> : <LoginPage onLogin={handleLogin} />} />
                <Route path="/*" element={
                    isAuthenticated ? (
                        <Layout userRole={userRole} onLogout={handleLogout}>
                            <Routes>
                                <Route path="/dashboard" element={<DashboardPage />} />
                                {userRole === "Admin" && <Route path="/users" element={<UsersPage />} />}
                                <Route path="/attendance" element={<AttendancePage />} />
                                <Route path="/leave" element={<LeavePage />} />
                                <Route path="/leads" element={<LeadManagementPage />} />
                                <Route path="/maharaj-ji" element={<MaharajJiPage />} />
                                <Route path="/booking" element={<BookingPage />} />
                                <Route path="/settings" element={<SettingsPage />} />
                                <Route path="*" element={<Navigate to="/dashboard" replace />} />
                            </Routes>
                        </Layout>
                    ) : (
                        <Navigate to="/login" replace />
                    )
                } />
            </Routes>
        </Router>
    )
}

export default App;