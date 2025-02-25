import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Chip,
  Box,
  Stack,
  Grid,
} from "@mui/material";

const JobCard = ({ handleCardClick }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const jobList = [
    {
      id: 1,
      title: "UI / UX Designer",
      experience: "2+ Years",
      iconBackground: "#4CAF50",
      description:
        "The User Experience Designer position exists to create compelling and digital user experience through excellent design...",
    },
    {
      id: 2,
      title: "Sr. Product Designer",
      experience: "Min. 1 Year",
      iconBackground: "#FF9800",
      description:
        "The User Experience Designer position exists to create compelling and digital user experience through excellent design...",
    },
    {
      id: 3,
      title: "User Experience Designer",
      experience: "5+ Years",
      iconBackground: "#3F51B5",
      description:
        "The User Experience Designer position exists to create compelling and digital user experience through excellent design...",
    },
    {
      id: 4,
      title: "Product Designer",
      experience: "5+ Years",
      iconBackground: "#3F51B5",
      description:
        "The User Experience Designer position exists to create compelling and digital user experience through excellent design...",
    },
    {
      id: 5,
      title: "UI Developer",
      experience: "5+ Years",
      iconBackground: "#3F51B5",
      description:
        "The User Experience Designer position exists to create compelling and digital user experience through excellent design...",
    },
    {
      id: 6,
      title: "User Interface Designer",
      experience: "5+ Years",
      iconBackground: "#3F51B5",
      description:
        "The User Experience Designer position exists to create compelling and digital user experience through excellent design...",
    },
  ];
  return (
    <Grid container spacing={2}>
      {jobList.map((job, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={job.id}>
          <Card
            sx={{
              maxWidth: 340,
              transition: "all 0.3s ease",
              transform:
                hoveredIndex === index ? "translateY(-5px)" : "translateY(0)",
              boxShadow:
                hoveredIndex === index
                  ? "0 12px 24px rgba(0,0,0,0.12)"
                  : "0 2px 8px rgba(0,0,0,0.08)",
              borderRadius: 3,
              overflow: "hidden",
              border: "none",
              "&:hover": {
                cursor: "pointer",
              },
            }}
            onClick={() => handleCardClick(job)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <CardContent sx={{ p: 3 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 2,
                }}
              >
                <Box
                  sx={{
                    bgcolor: "#3730a3",
                    width: 48,
                    height: 48,
                    borderRadius: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.3s ease",
                    transform: hoveredIndex ? "scale(1.08)" : "scale(1)",
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="#feb0a5"
                    width="28"
                    height="28"
                  >
                    <path d="M19.5 3.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2v20l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5z" />
                  </svg>
                </Box>
                <Typography
                  color="text.secondary"
                  sx={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    cursor: "pointer",
                    transition: "color 0.2s ease",
                    "&:hover": {
                      color: "text.primary",
                    },
                  }}
                >
                  •••
                </Typography>
              </Box>

              <Typography
                variant="h6"
                sx={{
                  fontWeight: "700",
                  mb: 1,
                  letterSpacing: "-0.01em",
                  fontSize: "1.25rem",
                }}
              >
                {job.title}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: "text.secondary",
                  mb: 2,
                  lineHeight: 1.5,
                  fontWeight: 400,
                  letterSpacing: "0.01em",
                  fontSize: "0.875rem",
                }}
              >
                {job.description || "No description available."}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  gap: 1,
                  flexWrap: "wrap",
                  mb: 3,
                }}
              >
                <Chip
                  label="Full Time"
                  size="small"
                  sx={{
                    bgcolor: "#e3f2fd",
                    color: "#1976d2",
                    fontWeight: 500,
                    borderRadius: "16px",
                    px: 1,
                    "&:hover": {
                      bgcolor: "#bbdefb",
                      transform: "scale(1.03)",
                    },
                    transition: "all 0.2s ease",
                    transform: hoveredIndex ? "scale(1.03)" : "scale(1)",
                  }}
                />
                <Chip
                  label="Min. 1 Year"
                  size="small"
                  sx={{
                    bgcolor: "#e3f2fd",
                    color: "#1976d2",
                    fontWeight: 500,
                    borderRadius: "16px",
                    px: 1,
                    "&:hover": {
                      bgcolor: "#bbdefb",
                      transform: "scale(1.03)",
                    },
                    transition: "all 0.2s ease",
                    transform: hoveredIndex ? "scale(1.03)" : "scale(1)",
                  }}
                />
                <Chip
                  label="Senior Level"
                  size="small"
                  sx={{
                    bgcolor: "#e3f2fd",
                    color: "#1976d2",
                    fontWeight: 500,
                    borderRadius: "16px",
                    px: 1,
                    "&:hover": {
                      bgcolor: "#bbdefb",
                      transform: "scale(1.03)",
                    },
                    transition: "all 0.2s ease",
                    transform: hoveredIndex ? "scale(1.03)" : "scale(1)",
                  }}
                />
              </Box>

              <Stack direction="row" spacing={1}>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    borderRadius: 2,
                    py: 1,
                    fontWeight: 500,
                    letterSpacing: "0.02em",
                    textTransform: "none",
                    boxShadow: hoveredIndex ? 4 : 1,
                    bgcolor: hoveredIndex ? "#1565c0" : "#1976d2",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      bgcolor: "#1565c0",
                      transform: "scale(1.02)",
                    },
                  }}
                >
                  Apply Now
                </Button>
                <Button
                  variant="outlined"
                  fullWidth
                  sx={{
                    color: "text.secondary",
                    borderColor: "divider",
                    borderRadius: 2,
                    py: 1,
                    fontWeight: 500,
                    letterSpacing: "0.02em",
                    textTransform: "none",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      bgcolor: "#f5f5f5",
                      borderColor: "#bdbdbd",
                      transform: "scale(1.02)",
                    },
                  }}
                >
                  Messages
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default JobCard;
