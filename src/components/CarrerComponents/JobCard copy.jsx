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
  Container,
} from "@mui/material";

const JobCard = ({ handleCardClick }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const jobList = [
    {
      id: 1,
      title: "UI / UX Designer",
      experience: "2+ Years",
      description: "Create compelling user experiences.",
    },
    {
      id: 2,
      title: "Sr. Product Designer",
      experience: "Min. 1 Year",
      description: "Enhance digital experience design.",
    },
    {
      id: 3,
      title: "User Experience Designer",
      experience: "5+ Years",
      description: "Improve usability and UX flow.",
    },
    {
      id: 4,
      title: "Product Designer",
      experience: "5+ Years",
      description: "Lead design strategies.",
    },
    {
      id: 5,
      title: "UI Developer",
      experience: "5+ Years",
      description: "Develop UI components.",
    },
    {
      id: 6,
      title: "User Interface Designer",
      experience: "5+ Years",
      description: "Optimize interface design.",
    },
  ];

  return (
    <Container>
      <Grid container spacing={2} justifyContent="center">
        {jobList.map((job, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={job.id}>
            <Card
              sx={{
                maxWidth: 350,
                transition: "all 0.3s ease",
                transform:
                  hoveredIndex === index ? "translateY(-5px)" : "translateY(0)",
                boxShadow:
                  hoveredIndex === index
                    ? "0 12px 24px rgba(0,0,0,0.12)"
                    : "0 2px 8px rgba(0,0,0,0.08)",
                borderRadius: 3,
                overflow: "hidden",
                "&:hover": { cursor: "pointer" },
              }}
              onClick={() => handleCardClick(job)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <CardContent sx={{ p: 3 }}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "700", mb: 1, fontSize: "1.25rem" }}
                >
                  {job.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", mb: 2 }}
                >
                  {job.description}
                </Typography>

                <Chip
                  label={job.experience}
                  size="small"
                  sx={{
                    bgcolor: "#e3f2fd",
                    color: "#1976d2",
                    fontWeight: 500,
                    borderRadius: "16px",
                    px: 1,
                  }}
                />

                <Stack direction="row" spacing={1} mt={2}>
                  <Button variant="contained" color="primary" fullWidth>
                    Apply Now
                  </Button>
                  <Button variant="outlined" fullWidth>
                    Messages
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default JobCard;
