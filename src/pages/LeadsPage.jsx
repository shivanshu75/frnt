import { useState, useEffect } from "react";
import axios from "axios";
import { Box, Button,  Typography,InputAdornment, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import {  AddCircle as AddCircleIcon,Search as SearchIcon } from "lucide-react"; // Corrected import
import API from "../api";  // Corrected import
import { trefoil } from "ldrs";
import LeadsTable from "../components/Leads/LeadsTable"
import LeadDialog from "../components/Leads/LeadDialog";
import ViewLeadDialog from "../components/Leads/ViewLeadDialog";
import {formatDateIST,formatTime,formatToIST} from '../components/Leads/helpers'

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
trefoil.register();

function LeadManagement() {
    const [leads, setLeads] = useState([]);
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedLead, setSelectedLead] = useState(null);
    const [dedicatedPersons, setDedicatedPersons] = useState([]);
    const [selectedDedicatedPerson, setSelectedDedicatedPerson] = useState("");
    const [salesPersons, setSalesPersons] = useState([]);
    const [selectedSalesPerson, setSelectedSalesPerson] = useState("");
    const [selectedSalesPersonWithLead, setSelectedSalesPersonWithLead] = useState("");
    const [step, setStep] = useState(1);
    const [hosts, setHosts] = useState([{ host_name: "", poc_contact: "" }]);
    const [leadData, setLeadData] = useState({});
    const [searchTerm, setSearchTerm] = useState("");
    const [formErrors, setFormErrors] = useState({});
    const [openViewDialog, setOpenViewDialog] = useState(false);
    const [viewLead, setViewLead] = useState(null);
    const [eventDate, setEventDate] = useState(null);
    const [eventEndDate, setEventEndDate] = useState(null);
    const [eventTime, setEventTime] = useState(null);
    const [eventEndTime, setEventEndTime] = useState(null);
    const [dedicatedPersonSearchTerm, setDedicatedPersonSearchTerm] =  useState("");
    const [loadingLeads, setLoadingLeads] = useState(false);

  const fetchLeads = async () => {
    try {
      setLoadingLeads(true);
      const response = await API.get(`/leads`);
      setLeads(response.data);
    } catch (error) {
      console.error("Error fetching leads:", error);
    }
    setLoadingLeads(false);
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchDedicatedPersons = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/dedicated_persons`
      );
      setDedicatedPersons(response.data);
    } catch (error) {
      console.error("Error fetching dedicated persons:", error);
    }
  };

  const fetchSalesPersons = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/sales`);
      setSalesPersons(response.data);
    } catch (error) {
      console.error("Error fetching sales persons:", error);
    }
  };

  const handleEdit = async (lead) => {
    setSelectedLead(lead);
    fetchSalesPersons();
    fetchDedicatedPersons();
    const eventDateIST = new Date(lead.event_startdate);
    const eventEndDateIST = new Date(lead.event_enddate);
    setEventDate(eventDateIST);
    setEventEndDate(eventEndDateIST);
    const eventTimeIST = lead.event_starttime
      ? lead.event_starttime.substring(0, 5)
      : "";

    const eventEndTimeIST = lead.event_endtime
      ? lead.event_endtime.substring(0, 5)
      : "";

    setEventTime(eventTimeIST);
    setEventEndTime(eventEndTimeIST);

    const dedicatedPerson = dedicatedPersons.find(
      (person) => person.id == lead.maharaj_mandir
    );
    setSelectedDedicatedPerson(dedicatedPerson ? dedicatedPerson.id : "");

    // Set both sales person states
    setSelectedSalesPerson(lead.sales_person_1 || "");
    setSelectedSalesPersonWithLead(
      `${lead.sales_person_1}${lead.lead_name ? ` - ${lead.lead_name}` : ""}`
    );

    try {
      const response = await API.get(
        `${import.meta.env.VITE_API_URL}/hocs/${lead.lead_id}`
      );
      setHosts(
        response.data.map((hoc) => ({
          host_name: hoc.host_name,
          poc_contact: hoc.poc_contact,
        }))
      );
    } catch (error) {
      console.error("Error fetching HOCs:", error);
      setHosts([{ host_name: "", poc_contact: "" }]);
    }

    setLeadData(lead);
    setOpenDialog(true);
    setStep(1);
  };

  const handleView = (lead) => {
    setViewLead(lead);
    setOpenViewDialog(true);
  };

  const handleDelete = async (leadId) => {
    try {
      await API.delete(`${import.meta.env.VITE_API_URL}/leads/${leadId}`);
      fetchLeads();
    } catch (error) {
      console.error("Error deleting lead:", error);
      alert("Error deleting lead. Please try again.");
    }
  };

  const handleAddLead = async () => {
    setOpenDialog(true);
    fetchDedicatedPersons();
  };

  const handleClose = () => {
    setOpenDialog(false);
    setSelectedLead(null);
    setEventDate(null);
    setEventEndDate(null);
    setEventTime(null);
    setEventEndTime(null);
    setSelectedDedicatedPerson("");
    setSelectedSalesPerson("");
    setSelectedSalesPersonWithLead("");
    setStep(1);
    setHosts([{ host_name: "", poc_contact: "" }]);
    setLeadData({});
    setFormErrors({});
    setDedicatedPersonSearchTerm("");
  };

  const handleCloseViewDialog = () => {
    setOpenViewDialog(false);
    setViewLead(null);
  };

  const handleNext = (event) => {
    event.preventDefault();
    const errors = {};

    const formData = new FormData(event.target);
    const step1Data = Object.fromEntries(formData.entries());

    if (!eventDate) {
      errors.event_startdate = "Event Date is required";
      setFormErrors(errors);
      return;
    }
    if (!eventEndDate) {
      errors.event_enddate = "Event End Date is required";
      setFormErrors(errors);
      return;
    }
    step1Data.event_startdate = formatToIST(eventDate);
    step1Data.event_enddate = formatToIST(eventEndDate);

    if (eventTime) {
      step1Data.event_starttime = formatTime(eventTime);
    }
    if (eventEndTime) {
      step1Data.event_endtime = formatTime(eventEndTime);
    }

    step1Data.sales_person_1 = selectedSalesPerson;

    setLeadData({ ...leadData, ...step1Data });
    setStep(2);
  };

  const handleSave = async (event) => {
    fetchSalesPersons();
    event.preventDefault();

    const formData = new FormData(event.target);
    const step2Data = Object.fromEntries(formData.entries());

    const finalLeadData = {
      ...leadData,
      ...step2Data,
      maharaj_mandir: selectedDedicatedPerson,
      hocs: hosts.map((host) => ({
        host_name: host.host_name,
        poc_contact: host.poc_contact,
      })),
    };

    // console.log(finalLeadData);
    try {
      if (selectedLead) {
        await API.put(
          `${import.meta.env.VITE_API_URL}/leads/${selectedLead.lead_id}`,
          finalLeadData
        );
      } else {
        await API.post(`${import.meta.env.VITE_API_URL}/leads`, finalLeadData);
      }
      fetchLeads();
      handleClose();
    } catch (error) {
      console.error("Error saving lead:", error);
      alert("Error saving lead. Please check the data and try again.");
    }
  };

  const handleDedicatedPersonChange = async (e) => {
    const personId = e.target.value;
    setSelectedDedicatedPerson(personId);

    if (personId) {
      const dedicatedPerson = dedicatedPersons.find(
        (person) => person.id === personId
      );
      if (dedicatedPerson) {
        setSelectedSalesPerson(dedicatedPerson.primary_sales_person);

        // Fetch the lead information for this sales person
        try {
          // console.log(dedicatedPerson);
          const response = await axios.get(
            `${import.meta.env.VITE_API_URL}/users`
          );
          //  console.log(response.data);
          const a = response.data.filter((e) => {
            return e.employee_id == dedicatedPerson.primary_sales_person;
          });
          console.log(a);
          const leadInfo = response.data[0]; // Get the first lead associated with this sales person
          // console.log(dedicatedPerson)
          if (leadInfo) {
            setSelectedSalesPersonWithLead(
              `${dedicatedPerson.primary_sales_person} - ${a[0].employee_name}`
            );
          } else {
            setSelectedSalesPersonWithLead(
              dedicatedPerson.primary_sales_person
            );
          }
        } catch (error) {
          console.error("Error fetching lead info:", error);
          setSelectedSalesPersonWithLead(dedicatedPerson.primary_sales_person);
        }
      }
    }
  };

  const handleAddHost = () => {
    if (hosts.length < 7) {
      setHosts([...hosts, { host_name: "", poc_contact: "" }]);
    }
  };

  const handleHostChange = (index, field, value) => {
    const newHosts = [...hosts];
    newHosts[index][field] = value;
    setHosts(newHosts);
  };

  const handleRemoveHost = (index) => {
    const newHosts = hosts.filter((_, i) => i !== index);
    setHosts(newHosts);
  };
  const handleDedicatedPersonSearchChange = (e) => {
    setDedicatedPersonSearchTerm(e.target.value);
  };

  const filteredLeads = leads.filter((lead) =>
    lead.lead_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredDedicatedPersons = dedicatedPersons.filter((person) =>
    person.name.toLowerCase().includes(dedicatedPersonSearchTerm.toLowerCase())
  );
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
        p: 3,
        backgroundColor: "rgba(253,232,199,255)",
      }}
    >
      <Box
        sx={{
          width: "100%",
          mb: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <PageTitle variant="h4">
          Lead Management
        </PageTitle>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <TextField
            label="Search"
            variant="outlined"
            size="small"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "#7e1519" }} />
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
            onClick={handleAddLead}
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
            startIcon={<AddCircleIcon />}
          >
            Add Lead
          </Button>
          <Button
            variant="contained"
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
            onClick={() => fetchLeads()}
          >
            Refresh
          </Button>
        </Box>
      </Box>
      <LeadsTable filteredLeads={filteredLeads} handleEdit={handleEdit}
        handleView={handleView} handleDelete={handleDelete} loadingLeads={loadingLeads} />
           <LeadDialog openDialog={openDialog} handleClose={handleClose} selectedLead={selectedLead}
            step={step} handleNext={handleNext} handleSave={handleSave} formErrors={formErrors}
            eventDate={eventDate} setEventDate={setEventDate} eventEndDate={eventEndDate} setEventEndDate={setEventEndDate}
            eventTime={eventTime}  setEventTime={setEventTime} eventEndTime={eventEndTime} setEventEndTime={setEventEndTime}
            selectedDedicatedPerson={selectedDedicatedPerson}
            handleDedicatedPersonChange={handleDedicatedPersonChange}
            dedicatedPersons={dedicatedPersons} dedicatedPersonSearchTerm={dedicatedPersonSearchTerm}
            handleDedicatedPersonSearchChange={handleDedicatedPersonSearchChange} selectedSalesPersonWithLead={selectedSalesPersonWithLead}
            hosts={hosts} handleRemoveHost={handleRemoveHost} handleAddHost={handleAddHost} handleHostChange={handleHostChange} setStep={setStep}
      />
      <ViewLeadDialog openViewDialog={openViewDialog} handleCloseViewDialog={handleCloseViewDialog} viewLead={viewLead} />
    </Box>
  )
}
export default LeadManagement;