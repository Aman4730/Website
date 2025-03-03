import React, { useState } from "react";
import {
  Drawer,
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  DialogActions,
  DialogContent,
  useMediaQuery,
  Grid,
  MenuItem,
} from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import CloseIcon from "@mui/icons-material/Close";
import Responsibilities from "./Responsibilities";
import { postFetchData } from "../../api/Api";

const JobPost = ({ open, onClose }) => {
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");
  const [formData, setFormData] = useState({
    jobName: "",
    experience: "",
    ctc: "",
    lastDate: "",
    jobType: "",
    location: "",
    description: "",
  });
  const [errors, setErrors] = useState({});
  const [responsibilities, setResponsibilities] = useState([]);
  const [qualifications, setQualifications] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    let newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key].trim()) {
        newErrors[key] = "This field is required";
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    console.log("dsfsdfsf");
    if (validateForm()) {
      setLoading(true);
      try {
        const response = await postFetchData(
          `${import.meta.env.VITE_API_URL_LOCAL}/createJob`,
          {
            ...formData,
            responsibilities,
            qualifications,
          }
        );
        console.log("Response:", response.data);
        onClose();
      } catch (error) {
        console.error("Error posting job:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <Drawer
      anchor={isLargeScreen ? "right" : "bottom"}
      open={open}
      onClose={onClose}
      sx={{
        "& .MuiDrawer-paper": {
          width: { xs: "90%", sm: "70%", md: "40%", lg: "20%" },
          height: { xs: "auto", md: "100%" },
          maxHeight: { xs: "80vh", md: "100%" },
          boxShadow: 4,
          borderRadius: { xs: "16px 16px 0 0", md: 0 },
          backgroundColor: "#ffffff",
          margin: "auto",
          bottom: 0,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: 2,
        }}
      >
        <Box
          sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          onClick={onClose}
        >
          <KeyboardBackspaceIcon sx={{ mr: 2 }} />
          <Typography variant="h6" fontWeight="bold">
            Post a Job
          </Typography>
        </Box>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>
      <DialogContent sx={{ overflowY: "auto" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <label>Job Name</label>
            <TextField
              fullWidth
              size="small"
              name="jobName"
              value={formData.jobName}
              onChange={handleChange}
              error={!!errors.jobName}
              helperText={errors.jobName}
            />
          </Grid>
          <Grid item xs={6}>
            <label>Experience</label>
            <TextField
              fullWidth
              size="small"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              error={!!errors.experience}
              helperText={errors.experience}
            />
          </Grid>
          <Grid item xs={6}>
            <label>CTC</label>
            <TextField
              fullWidth
              size="small"
              name="ctc"
              value={formData.ctc}
              onChange={handleChange}
              error={!!errors.ctc}
              helperText={errors.ctc}
            />
          </Grid>
          <Grid item xs={6}>
            <label>Last Date to Apply</label>
            <TextField
              fullWidth
              size="small"
              type="date"
              name="lastDate"
              value={formData.lastDate}
              onChange={handleChange}
              error={!!errors.lastDate}
              helperText={errors.lastDate}
            />
          </Grid>
          <Grid item xs={6}>
            <label>Job Type</label>
            <TextField
              select
              fullWidth
              size="small"
              name="jobType"
              value={formData.jobType}
              onChange={handleChange}
              error={!!errors.jobType}
              helperText={errors.jobType}
            >
              <MenuItem value="Full-Time">Full-Time</MenuItem>
              <MenuItem value="Part-Time">Part-Time</MenuItem>
              <MenuItem value="Internship">Internship</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <label>Location</label>
            <TextField
              fullWidth
              size="small"
              name="location"
              value={formData.location}
              onChange={handleChange}
              error={!!errors.location}
              helperText={errors.location}
            />
          </Grid>
          <Grid item xs={12}>
            <label>Description</label>
            <TextField
              fullWidth
              size="small"
              multiline
              name="description"
              value={formData.description}
              onChange={handleChange}
              error={!!errors.description}
              helperText={errors.description}
            />
          </Grid>
          <Grid item xs={12}>
            <Responsibilities
              title="Responsibilities"
              items={responsibilities}
              setItems={setResponsibilities}
              loading={loading}
            />
          </Grid>
          <Grid item xs={12}>
            <Responsibilities
              title="Qualifications"
              items={qualifications}
              setItems={setQualifications}
              loading={loading}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions sx={{ justifyContent: "center", pb: 2 }}>
        <Button
          variant="contained"
          fullWidth
          sx={{
            maxWidth: "310px",
            fontWeight: "bold",
            p: 1.5,
            borderRadius: "10px",
            backgroundColor: "#4786e6",
          }}
          onClick={handleSubmit}
          disabled={loading}
        >
          Apply Job
        </Button>
      </DialogActions>
    </Drawer>
  );
};

export default JobPost;
