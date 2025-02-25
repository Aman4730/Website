import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Grid,
  IconButton,
  Avatar,
  Divider,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";

const JobExplain = () => {
  return (
    <Card
      sx={{
        width: "97%",
        mx: "auto",
        p: 3,
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      {/* Job Header */}
      <Box display="flex" alignItems="center" gap={2}>
        <Avatar sx={{ bgcolor: "#f76754", width: 50, height: 50 }}>P</Avatar>
        <Box>
          <Typography variant="h6" fontWeight={600}>
            UI / UX Designer
          </Typography>
          <Typography color="textSecondary">
            Patreon • Londontowne, MD.
          </Typography>
        </Box>
        <Box ml="auto">
          <IconButton>
            <FavoriteBorderIcon />
          </IconButton>
          <IconButton>
            <ShareIcon />
          </IconButton>
        </Box>
      </Box>

      <Typography color="textSecondary" sx={{ mt: 1 }}>
        Posted 8 days ago • 98 Applications
      </Typography>
      <Divider sx={{ my: 2 }} />

      {/* Job Details */}
      <Grid container spacing={2}>
        {[
          { title: "Experience", value: "Minimum 1 Year" },
          { title: "Work Level", value: "Senior level" },
          { title: "Employee Type", value: "Full Time Jobs" },
          { title: "Offer Salary", value: "$2150.0 / Month" },
        ].map((item, index) => (
          <Grid item xs={6} key={index}>
            <Typography variant="body2" fontWeight={600}>
              {item.title}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {item.value}
            </Typography>
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ my: 2 }} />

      {/* Job Overview */}
      <Typography variant="h6">Overview</Typography>
      <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
        We believe that design (and you) will be critical to the company's
        success. You will work with our founders and early customers to help
        define and build our product functionality, while maintaining quality.
      </Typography>

      <Divider sx={{ my: 2 }} />

      {/* Job Description */}
      <Typography variant="h6">Job Description</Typography>
      {[
        "3+ years working as a product designer.",
        "A portfolio that highlights your approach to problem solving.",
        "Experience conducting research and building out smooth flows.",
        "Excellent communication skills with a well-defined design process.",
        "Familiarity with design tools like Sketch and Figma.",
      ].map((point, index) => (
        <Typography
          key={index}
          variant="body2"
          color="textSecondary"
          sx={{ mt: 1 }}
        >
          • {point}
        </Typography>
      ))}
    </Card>
  );
};

export default JobExplain;
