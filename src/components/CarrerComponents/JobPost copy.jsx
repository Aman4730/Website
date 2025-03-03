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
  Backdrop,
  Grid,
  MenuItem,
  Card,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import { Slide } from "@mui/material";

const JobPost = ({ open, onClose }) => {
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");
  const [formData, setFormData] = useState({
    jobTitle: "",
    experience: "",
    ctc: "",
    lastDate: "",
    jobType: "",
    location: "",
    description: "",
  });
  const [responsibilities, setResponsibilities] = useState([]);
  const [responsibilityInput, setResponsibilityInput] = useState("");
  const [errors, setErrors] = useState({});
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

  const handleSubmit = () => {
    if (validateForm()) {
      setLoading(true);
      setTimeout(() => {
        console.log(
          "Form Data:",
          formData,
          "Responsibilities:",
          responsibilities
        );
        setLoading(false);
        onClose();
      }, 2000);
    }
  };

  const addResponsibility = () => {
    if (responsibilityInput.trim()) {
      setResponsibilities([...responsibilities, responsibilityInput]);
      setResponsibilityInput("");
    }
  };

  const removeResponsibility = (index) => {
    setResponsibilities(responsibilities.filter((_, i) => i !== index));
  };

  return (
    <Drawer
      anchor={isLargeScreen ? "right" : "bottom"}
      open={open}
      onClose={onClose}
      TransitionComponent={Slide}
      transitionDuration={300}
      sx={{
        "& .MuiDrawer-paper": {
          width: "40%",
          maxHeight: "100%",
          borderRadius: 2,
        },
      }}
    >
      {loading && (
        <Backdrop
          open={loading}
          sx={{ zIndex: 1, backgroundColor: "rgba(0, 0, 0, 0.3)" }}
        >
          Loading...
        </Backdrop>
      )}
      <Box sx={{ p: 2 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6">Apply for this Job</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Job Title"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
                error={!!errors.jobTitle}
                helperText={errors.jobTitle}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                error={!!errors.experience}
                helperText={errors.experience}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="CTC"
                name="ctc"
                value={formData.ctc}
                onChange={handleChange}
                error={!!errors.ctc}
                helperText={errors.ctc}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                type="date"
                label="Last Date"
                name="lastDate"
                value={formData.lastDate}
                onChange={handleChange}
                error={!!errors.lastDate}
                helperText={errors.lastDate}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                select
                fullWidth
                label="Job Type"
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
              <TextField
                fullWidth
                label="Location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                error={!!errors.location}
                helperText={errors.location}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                label="Description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                error={!!errors.description}
                helperText={errors.description}
              />
            </Grid>
            {/* Responsibilities Section */}
            <Grid item xs={12}>
              <Typography variant="h6">Responsibilities</Typography>
              <Box sx={{ display: "flex", gap: 1 }}>
                <TextField
                  fullWidth
                  label="Add Responsibility"
                  value={responsibilityInput}
                  onChange={(e) => setResponsibilityInput(e.target.value)}
                />
                <Button variant="contained" onClick={addResponsibility}>
                  Add
                </Button>
              </Box>
              <Box mt={2}>
                {responsibilities.map((item, index) => (
                  <Card
                    key={index}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      p: 2,
                      mt: 1,
                    }}
                  >
                    <Typography>{item}</Typography>
                    <IconButton onClick={() => removeResponsibility(index)}>
                      <DeleteIcon />
                    </IconButton>
                  </Card>
                ))}
              </Box>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            fullWidth
            onClick={handleSubmit}
            disabled={loading}
          >
            Apply Job
          </Button>
        </DialogActions>
      </Box>
    </Drawer>
  );
};

export default JobPost;
