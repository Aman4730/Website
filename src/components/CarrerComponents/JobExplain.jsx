import React from "react";
import { Typography, Box, Grid, IconButton } from "@mui/material";
import CarrerBackgound from "../../Imges/CarrerBackgound.png";

const JobExplain = ({ handleFormOpen }) => {
  return (
    <div className="job-explain">
      <img
        src={CarrerBackgound}
        className="job-bg"
        alt=""
        style={{ width: "100%", height: "250px", objectFit: "cover" }}
      />
      <div className="job-logos">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          style={{
            backgroundColor: "#f76754",
            padding: 5,
          }}
        >
          <path d="M0 .5h4.2v23H0z" fill="#042b48" />
          <path
            d="M15.4.5a8.6 8.6 0 100 17.2 8.6 8.6 0 000-17.2z"
            fill="#fefefe"
          />
        </svg>
      </div>
      <div className="job-explain-content">
        <div className="job-title-wrapper">
          <Typography variant="h5" fontWeight={500}>
            UI/UX Designer
          </Typography>
          <div className="job-action">
            <IconButton>
              <svg
                className="heart"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.8 4.6a5.5 5.5 0 00-7.7 0l-1.1 1-1-1a5.5 5.5 0 00-7.8 7.8l1 1 7.8 7.8 7.8-7.7 1-1.1a5.5 5.5 0 000-7.8z" />
              </svg>
            </IconButton>
            <div onClick={handleFormOpen}>
              <spam className="th-btn">Apply Now</spam>
            </div>
          </div>
        </div>
        <div className="job-subtitle-wrapper">
          <Typography variant="subtitle1" color="textSecondary">
            Patreon <span className="comp-location">Londontowne, MD.</span>
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Posted 8 days ago - <b>98 Applications</b>
          </Typography>
        </div>
        <Grid container spacing={2} sx={{ my: 0.4 }}>
          {[
            { title: "Experience", value: "Minimum 1 Year" },
            { title: "Work Level", value: "Senior level" },
            { title: "Employee Type", value: "Full Time Jobs" },
            { title: "Offer Salary", value: "$2150.0 / Month" },
          ].map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box p={2} border={1} borderColor="#ddd" borderRadius={2}>
                <Typography variant="body2" fontWeight={500}>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {item.value}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Typography variant="h6" fontWeight={500} sx={{ mt: 5, mb: 0.4 }}>
          Job Description
        </Typography>
        <Typography
          variant="body2"
          sx={{
            lineHeight: "2em",
            color: "#6c757d",
            letterSpacing: "0.5px",
          }}
        >
          As a Product Designer, you will work within a Product Delivery Team
          fused with UX, engineering, product and data talent. You will help the
          team design beautiful interfaces that solve business challenges for
          our clients. We work with a number of Tier 1 banks on building
          web-based applications for AML, KYC and Sanctions List management
          workflows. This role is ideal if you are looking to segue your career
          into the FinTech or Big Data arenas.
        </Typography>
        <Typography variant="h6" fontWeight={500} sx={{ mt: 2, mb: 0.4 }}>
          Responsibilities
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{ lineHeight: "2em", color: "#495057" }}
        >
          As a Product Designer, you will work within a Product Delivery Team
          fused with UX, engineering, product and data talent.
        </Typography>
        {[
          "3+ years working as a product designer.",
          "A portfolio that highlights your approach to problem-solving...",
          "Experience conducting research and building smooth flows.",
          "Excellent communication skills with a well-defined design process.",
          "Familiarity with design tools like Sketch and Figma.",
          "Up-level our overall design and bring consistency to user-facing properties.",
        ].map((point, index) => (
          <Typography
            key={index}
            variant="body2"
            color="textSecondary"
            sx={{
              mt: 1,
              display: "flex",
              alignItems: "center",
            }}
          >
            🔹 {point}
          </Typography>
        ))}
        <Typography variant="h6" fontWeight={500} sx={{ mt: 2, mb: 0.4 }}>
          Qualification
        </Typography>
        {[
          "B.C.A / M.C.A under National University course complete.",
          "3 or more years of professional design experience",
          "have already graduated or are currently in any year of study",
          "Advanced degree or equivalent experience in graphic and web design",
        ].map((point, index) => (
          <Typography
            key={index}
            variant="body2"
            color="textSecondary"
            sx={{
              mt: 1,
              display: "flex",
              alignItems: "center",
            }}
          >
            🔹 {point}
          </Typography>
        ))}
        <Typography variant="h6" fontWeight={500} sx={{ mt: 2, mb: 0.4 }}>
          Skill & Experience
        </Typography>
        {[
          "Understanding of key Design Principal",
          "Proficiency With HTML, CSS, Bootstrap",
          "Wordpress: 1 year (Required)",
          "Experience designing and developing responsive design websites",
          "web designing: 1 year (Preferred)",
        ].map((point, index) => (
          <Typography
            key={index}
            variant="body2"
            color="textSecondary"
            sx={{
              mt: 1,
              display: "flex",
              alignItems: "center",
            }}
          >
            🔹 {point}
          </Typography>
        ))}
      </div>
    </div>
  );
};

export default JobExplain;
