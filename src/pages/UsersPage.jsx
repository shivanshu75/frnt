import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Button, Typography, TextField, InputAdornment } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Search as SearchIcon, Plus as PlusIcon } from "lucide-react";
import UserTable from "../components/Users/UserTable";
import UserDialog from "../components/Users/UserDialog";
import DeleteConfirmationDialog from "../components/Users/DeleteConfirmationDialog";

const PageTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 700,
  color: "#7e1519",
  position: "relative",
  display: "inline-block",
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: "-8px",
    left: "0",
    width: "60px",
    height: "4px",
    backgroundColor: "#7e1519",
    borderRadius: "2px",
  },
}));

function UserManagement() {
  const [users, setUsers] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [departments, setDepartments] = useState([]);
  const [managers, setManagers] = useState([]);
  const [formErrors, setFormErrors] = useState({});
  const [showCredentials, setShowCredentials] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const [searchTerm, setSearchTerm] = useState(""); // State for search term

  useEffect(() => {
    fetchUsers();
    fetchDepartments();
    fetchManagers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/users`);
       // Join department and manager names
       const usersWithNames = response.data.map(user => ({
        ...user,
        department_name: getDepartments(user.department_id),
        manager_name: getManagerName(user.manager_id)
      }));
      setUsers(usersWithNames);
    } catch (error) {
      console.error("Error fetching users:", error);
      alert("Failed to fetch users. Please try again.");
    }
  };

  const fetchDepartments = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/departments`
      );
      setDepartments(response.data);
    } catch (error) {
      console.error("Error fetching departments:", error);
      alert("Failed to fetch departments. Please try again.");
    }
  };
    // Function to get Mandir/Maharaj ji based on department_id
    const getDepartments = (departmentId) => {
        const department = departments.find(
          (dept) => dept.department_id === departmentId
        );
        return department ? department.department_name : "N/A";
      };
    const getManagerName = (managerId) => {
        const manager = managers.find(m => m.employee_id === managerId);
        return manager ? manager.employee_name : "N/A";
    };

  const fetchManagers = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/managers`
      );
      console.log(response.data)
      setManagers(response.data);
    } catch (error) {
      console.error("Error fetching managers:", error);
      alert("Failed to fetch managers. Please try again.");
    }
  };

  const handleEdit = (user) => {
    user.phone = user.phone?.substring(2,user.phone?.length)
    console.log(user)
    setSelectedUser(user);
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
    setSelectedUser(null);
    setFormErrors({});
    setShowCredentials(false);
  };

  const handleSave = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const userData = Object.fromEntries(formData.entries());
     // Prepend '91' to the phone number
     if (userData.phone) {
        userData.phone = `91${userData.phone}`;
      }
      console.log(userData)

    // Form validation
    const errors = {};
    if (!userData.employee_name) errors.employee_name = "Employee name is required";
    if (!userData.email) errors.email = "Email is required";
    if (!userData.phone) errors.phone = "Phone number is required";
    if (!userData.department_id) errors.department_id = "Department is required";
    if (!userData.role) errors.role = "Role is required";


    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    try {
      const response = selectedUser
        ? await axios.put(
            `${import.meta.env.VITE_API_URL}/users/${selectedUser.employee_id}`,
            userData
          )
        : await axios.post(`${import.meta.env.VITE_API_URL}/users`, userData);

      if (response.status === 200 || response.status === 201) {
        await fetchUsers(); // Refresh the user list
        handleClose();
      } else {
        throw new Error("Unexpected response status");
      }
    } catch (error) {
      console.error("Error saving user:", error);
      if (error.response) {
        console.error("Server responded with:", error.response.data);
        alert(
          `Error saving user: ${error.response.data.error || "Unknown error"}`
        );
      } else if (error.request) {
        console.error("No response received:", error.request);
        alert("Error saving user: No response from server");
      } else {
        console.error("Error setting up request:", error.message);
        alert(`Error saving user: ${error.message}`);
      }
    }
  };

  const handleDeleteConfirmation = (user) => {
    setUserToDelete(user);
    setOpenDeleteDialog(true);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_API_URL}/users/${userToDelete.employee_id}`
      );
      fetchUsers(); // Refresh the user list
      setOpenDeleteDialog(false);
    } catch (error) {
      console.error("Error deleting user:", error);
      alert("Failed to delete user. Please try again.");
    }
  };
  const filteredUsers = users.filter((user) =>
  user.employee_name.toLowerCase().includes(searchTerm.toLowerCase())
);

  return (
    <Box sx={{ height: "100vh", overflow: "hidden", p: 3, backgroundColor: "rgba(253,232,199,255)" }}>
      <Box sx={{ mb: 2, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <PageTitle variant="h4">
        Employee Management
        </PageTitle>
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <TextField
            placeholder="Search..."
            variant="outlined"
            size="small"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon size={18} color="#7e1519" />
                </InputAdornment>
              ),
              sx: {
                borderRadius: "20px",
                backgroundColor: "white",
                "& fieldset": {
                  borderColor: "#7e1519",
                },
                "&:hover fieldset": {
                  borderColor: "#7e1519",
                },
              },
            }}
          />
          <Button
            variant="contained"
            onClick={() => setOpenDialog(true)}
            sx={{
              backgroundColor: "#7e1519",
              borderRadius: "20px",
              boxShadow: "0 4px 10px rgba(126, 21, 25, 0.3)",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#fdedd1",
                color: "#7e1519",
                boxShadow: "0 6px 15px rgba(126, 21, 25, 0.4)",
                transform: "translateY(-2px)",
              },
              "&:active": {
                transform: "translateY(0)",
              },
            }}
            startIcon={<PlusIcon size={18} />}
          >
            Add Employee
          </Button>
        </Box>
      </Box>
      <UserTable filteredUsers={filteredUsers}  handleEdit={handleEdit}  handleDeleteConfirmation={handleDeleteConfirmation}/>
     
      <UserDialog  openDialog={openDialog}  handleClose={handleClose}
        selectedUser={selectedUser}  handleSave={handleSave}
        formErrors={formErrors} departments={departments}
        managers={managers} showCredentials={showCredentials}
        setShowCredentials={setShowCredentials}
      />

        <DeleteConfirmationDialog
        openDeleteDialog={openDeleteDialog}
        setOpenDeleteDialog={setOpenDeleteDialog}
        userToDelete={userToDelete}
        handleDelete={handleDelete}
        getDepartments={getDepartments}
        />
      
    </Box>
  );
}

export default UserManagement;