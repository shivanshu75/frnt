import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box,Button,Typography,TextField,InputAdornment } from "@mui/material";
import { styled } from "@mui/material/styles";
import {Search as SearchIcon, Plus as PlusIcon } from "lucide-react";
import MaharajJiTable from "../components/Maharajji/MaharajJiTable";
import AddEditDialog from "../components/Maharajji/AddEditDialog";
import ViewDetailsDialog from "../components/Maharajji/ViewDetailsDialog";

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

function MaharajJi() {
    const [dedicatedPersons, setDedicatedPersons] = useState([]);
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedPerson, setSelectedPerson] = useState(null);
    const [formErrors, setFormErrors] = useState({});
    const [salesPersons, setSalesPersons] = useState([]);
    const [primarySalesPerson, setPrimarySalesPerson] = useState(null);
    const [secondarySalesPerson, setSecondarySalesPerson] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [viewDetailsDialog, setViewDetailsDialog] = useState(false);
    const [selectedDetails, setSelectedDetails] = useState(null);
  
    useEffect(() => {
      fetchDedicatedPersons();
      fetchSalesPersons();
    }, []);
  
    const fetchDedicatedPersons = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/dedicated_persons`
        );
        setDedicatedPersons(response.data);
      } catch (error) {
        console.error("Error fetching dedicated persons:", error);
        alert("Failed to fetch dedicated persons. Please try again.");
      }
    };
  
    const fetchSalesPersons = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/sales`);
        setSalesPersons(response.data);
      } catch (error) {
        console.error("Error fetching sales persons:", error);
        alert("Failed to fetch sales persons. Please try again.");
      }
    };
  
    const handleEdit = (person) => {
      setSelectedPerson(person);
      setPrimarySalesPerson(person.primary_sales_person);
      setSecondarySalesPerson(person.secondary_sales_person || null);
      setOpenDialog(true);
    };
  
    const handleViewDetails = (person) => {
      setSelectedDetails(person);
      setViewDetailsDialog(true);
    };
  
    const handleClose = () => {
      setOpenDialog(false);
      setSelectedPerson(null);
      setFormErrors({});
      setPrimarySalesPerson(null);
      setSecondarySalesPerson(null);
    };
  
    const handleCloseDetails = () => {
      setViewDetailsDialog(false);
      setSelectedDetails(null);
    };
  
    const handleSave = async (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
      const personData = Object.fromEntries(formData.entries());
  
      personData.primary_sales_person = primarySalesPerson;
      personData.secondary_sales_person = secondarySalesPerson;
  
      const errors = {};
      if (!personData.name) errors.name = "Name is required*";
      if (!personData.category) errors.category = "Category is required*";
      if (!personData.primary_sales_person)
        errors.primary_sales_person = "Primary Sales Person is required*";
  
      if (Object.keys(errors).length > 0) {
        setFormErrors(errors);
        return;
      }
  
      try {
        const response = selectedPerson
          ? await axios.put(
              `${import.meta.env.VITE_API_URL}/dedicated_persons/${
                selectedPerson.id
              }`,
              personData
            )
          : await axios.post(
              `${import.meta.env.VITE_API_URL}/dedicated_persons`,
              personData
            );
  
        if (response.status === 200 || response.status === 201) {
          await fetchDedicatedPersons();
          handleClose();
        } else {
          throw new Error("Unexpected response status");
        }
      } catch (error) {
        console.error("Error saving dedicated person:", error);
        alert("Failed to save dedicated person. Please try again.");
      }
    };
  
    const handleDelete = async (id) => {
      try {
        await axios.delete(
          `${import.meta.env.VITE_API_URL}/dedicated_persons/${id}`
        );
        fetchDedicatedPersons();
      } catch (error) {
        console.error("Error deleting dedicated person:", error);
        alert("Failed to delete dedicated person. Please try again.");
      }
    };
  
    const filteredPersons = dedicatedPersons.filter(
      (person) =>
        person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        person.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    return (
      <Box
        sx={{
          height: "100vh",
          overflow: "hidden",
          p: 3,
          backgroundColor: "rgba(253,232,199,255)",
        }}
      >
        <Box
          sx={{
            mb: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <PageTitle variant="h4">
            Maharaj Ji
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
              Add Maharaj Ji
            </Button>
          </Box>
        </Box>
  
        <MaharajJiTable  filteredPersons={filteredPersons} handleViewDetails={handleViewDetails}
        handleEdit={handleEdit}  handleDelete={handleDelete}  />
  
        <AddEditDialog
          openDialog={openDialog}  handleClose={handleClose}  selectedPerson={selectedPerson}  handleSave={handleSave}
          formErrors={formErrors}  salesPersons={salesPersons}  primarySalesPerson={primarySalesPerson} setPrimarySalesPerson={setPrimarySalesPerson}
          secondarySalesPerson={secondarySalesPerson} setSecondarySalesPerson={setSecondarySalesPerson}
        />
        <ViewDetailsDialog openViewDialog={viewDetailsDialog}
        handleCloseDetails={handleCloseDetails}
        selectedDetails={selectedDetails}
        salesPersons={salesPersons}/>
      </Box>
    );
  }
  
  export default MaharajJi;