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
  CircularProgress,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import CloseIcon from "@mui/icons-material/Close";
import { Slide } from "@mui/material";
import carrerLoder from "../../Imges/carrerLoder.gif";

const JobApplicationDrawer = ({ open, onClose }) => {
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let errorText = "";

    if (name === "email") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      errorText = emailPattern.test(value) ? "" : "Enter a valid email";
    }

    if (name === "phone") {
      const phonePattern = /^[0-9]{10}$/;
      errorText = phonePattern.test(value)
        ? ""
        : "Enter a valid 10-digit phone number";
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({
      ...prev,
      [name]: errorText,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type !== "application/pdf") {
      setErrors((prev) => ({
        ...prev,
        selectedFile: "Only PDF files are allowed",
      }));
      setSelectedFile(null);
    } else {
      setSelectedFile(file);
      setErrors((prev) => ({ ...prev, selectedFile: "" }));
    }
  };

  const validateForm = () => {
    let newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key].trim() && key !== "message") {
        newErrors[key] = "This field is required";
      }
    });

    if (!selectedFile) {
      newErrors.selectedFile = "CV is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      setLoading(true);
      setTimeout(() => {
        console.log("Form Data:", formData);
        console.log("Selected File:", selectedFile);
        setLoading(false);
        onClose();
      }, 2000);
    }
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
      {loading && (
        <Backdrop
          open={loading}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1,
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={carrerLoder}
            alt="Loading..."
            style={{ width: "180px", height: "180px" }}
          />
        </Backdrop>
      )}
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
            Apply for this Job
          </Typography>
        </Box>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>

      <DialogContent sx={{ overflowY: "auto" }}>
        <label>Full Name</label>
        <TextField
          fullWidth
          size="small"
          variant="outlined"
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={!!errors.name}
          helperText={errors.name}
          sx={{ mb: 2, backgroundColor: "white" }}
        />

        <label>Last Name</label>
        <TextField
          fullWidth
          size="small"
          variant="outlined"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          error={!!errors.lastName}
          helperText={errors.lastName}
          sx={{ mb: 2, backgroundColor: "white" }}
        />

        <label>Email</label>
        <TextField
          fullWidth
          variant="outlined"
          type="email"
          size="small"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
          sx={{ mb: 2, backgroundColor: "white" }}
        />

        <label>Phone Number</label>
        <TextField
          fullWidth
          variant="outlined"
          type="tel"
          size="small"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          error={!!errors.phone}
          helperText={errors.phone}
          sx={{ mb: 2, backgroundColor: "white" }}
        />

        <Box
          sx={{
            border: "2px dashed #86abe4",
            borderRadius: "8px",
            padding: "20px",
            textAlign: "center",
            cursor: "pointer",
            mb: 2,
            "&:hover": { backgroundColor: "#e1eaff" },
          }}
        >
          <input
            type="file"
            accept=".pdf"
            style={{ display: "none" }}
            id="cv-upload"
            onChange={handleFileChange}
          />
          <label htmlFor="cv-upload">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 1,
              }}
            >
              <CloudUploadIcon color="primary" fontSize="large" />
              <Typography color="gray">
                {selectedFile
                  ? selectedFile.name
                  : "Click to Upload CV (PDF only)"}
              </Typography>
              {errors.selectedFile && (
                <Typography color="error">{errors.selectedFile}</Typography>
              )}
            </Box>
          </label>
        </Box>

        <TextField
          fullWidth
          multiline
          variant="outlined"
          placeholder="Write a message..."
          name="message"
          value={formData.message}
          onChange={handleChange}
          sx={{ mb: 2, "& .MuiOutlinedInput-root": { borderRadius: "10px" } }}
        />
      </DialogContent>

      <DialogActions sx={{ justifyContent: "center", pb: 2 }}>
        <Button
          variant="contained"
          color="primary"
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

export default JobApplicationDrawer;
