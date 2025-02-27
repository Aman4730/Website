import React from "react";
import { Box, Chip } from "@mui/material";

const jobData = [
  {
    id: 1,
    title: "UI / UX Designer",
    location: "2972 Westheimer Rd. Santa Ana.",
    type: "Full Time",
    experience: "Min. 1 Year",
    status: "New",
    daysAgo: "4d",
    icon: (
      <svg
        viewBox="0 -13 512 512"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          width: "40px",
          height: "40px",
          backgroundColor: "#2e2882",
          padding: "8px",
          borderRadius: "5px",
        }}
      >
        <g fill="#feb0a5">
          <path d="M256 92.5l127.7 91.6L512 92 383.7 0 256 91.5 128.3 0 0 92l128.3 92zm0 0M256 275.9l-127.7-91.5L0 276.4l128.3 92L256 277l127.7 91.5 128.3-92-128.3-92zm0 0" />
          <path d="M127.7 394.1l128.4 92 128.3-92-128.3-92zm0 0" />
        </g>
      </svg>
    ),
  },
  {
    id: 2,
    title: "Sr. Product Designer",
    location: "1901 Thornridge Cir.Shiloh, Hawaii.",
    type: "Full Time",
    experience: "Min. 2 Years",
    status: "Hiring",
    daysAgo: "2d",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        style={{
          backgroundColor: "#f76754",
          width: "40px",
          height: "40px",
          padding: "8px",
          borderRadius: "5px",
        }}
      >
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M0 .5h4.2v23H0z"
          fill="#042b48"
          data-original="#212121"
        />
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M15.4.5a8.6 8.6 0 100 17.2 8.6 8.6 0 000-17.2z"
          fill="#fefefe"
          data-original="#f4511e"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: "User Experience Designer",
    location: "414 Parker Rd. Allentown, New york",
    type: "Full Time",
    experience: "Min. 2 Years",
    status: "Hiring",
    daysAgo: "2d",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        fill="#fff"
        style={{ backgroundColor: "#55acee" }}
      >
        <path d="M512 97.2c-19 8.4-39.3 14-60.5 16.6 21.8-13 38.4-33.4 46.2-58a209.8 209.8 0 01-66.6 25.4A105 105 0 00249.5 153c0 8.3.8 16.3 2.5 24A297.1 297.1 0 0135.6 67 105.1 105.1 0 0068 207.4c-16.9-.3-33.4-5.2-47.4-12.9v1.1c0 51 36.4 93.4 84 103.2-8.5 2.3-17.8 3.4-27.4 3.4-6.8 0-13.5-.3-20-1.8a106 106 0 0098.2 73.2A211 211 0 010 416.9 295.5 295.5 0 00161 464c193.2 0 298.8-160 298.8-298.7 0-4.6-.2-9.1-.4-13.6A209.4 209.4 0 00512 97.2z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Product Designer",
    location: "4517 Washington Ave. Syracuse.",
    type: "Full Time",
    experience: "Min. 2 Years",
    status: "Hiring",
    daysAgo: "2d",
    icon: (
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="#fff"
        style={{ backgroundColor: "#1e1f26" }}
      >
        <path d="M24 7.6c0-.3 0-.5-.4-.6C12.2.2 12.4-.3 11.6 0 3 5.5.6 6.7.2 7.1c-.3.3-.2.8-.2 8.3 0 .9 7.7 5.5 11.5 8.4.4.3.8.2 1 0 11.2-8 11.5-7.6 11.5-8.4V7.6zm-1.5 6.5l-3.9-2.4L22.5 9zm-5.3-3.2l-4.5-2.7V2L22 7.6zM12 14.5l-3.9-2.7L12 9.5l3.9 2.3zm-.8-12.4v6L6.8 11 2.1 7.6zm-5.8 9.6l-3.9 2.4V9zm1.3 1l4.5 3.1v6l-9-6.3zm6 9.1v-6l4.6-3.1 4.6 2.8z" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "UI / UX Designer",
    location: "2711 Ash Dr. San Jose, South Dark.",
    type: "Full Time",
    experience: "Min. 2 Years",
    status: "Hiring",
    daysAgo: "2d",
    icon: (
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        style={{ backgroundColor: "#ffe80f" }}
      >
        <path d="M9.5 9.3l-.7 2h1.4z" />
        <path d="M12 1C5.4 1 0 5.2 0 10.4c0 3.4 2.2 6.3 5.6 8-1.3 4.4-1.3 4.4-1 4.6.2.1.5 0 5.3-3.4l2.1.2c6.6 0 12-4.2 12-9.4S18.6 1 12 1zM6 13c0 .4-.3.7-.6.7s-.7-.3-.7-.7V9H3.6c-.4 0-.7-.4-.7-.7s.3-.7.7-.7H7c.4 0 .7.3.7.7s-.3.6-.7.6h-1zm5.4.7c-.7 0-.6-.6-.9-1.2h-2c-.4.6-.3 1.2-1 1.2s-.8-.4-.6-1.1l1.6-4.3a1 1 0 011-.7c.4 0 .8.3.9.7 1 3.4 2.6 5.4 1 5.4zm4-.1h-2.2c-1.2 0-.5-1.6-.7-5.3 0-.4.3-.7.7-.7s.7.3.7.7v4h1.5c.3 0 .6.3.6.6 0 .4-.3.7-.6.7zm5.4-.5l-.3.4c-1 .7-1.6-1.4-2.6-2.3l-.2.3V13c0 .4-.3.7-.7.7a.7.7 0 01-.7-.7V8.3a.7.7 0 011.4 0v1.5c1.3-1 2-2.7 2.8-2 .8.9-.9 1.6-1.5 2.5 1.6 2.2 1.9 2.3 1.8 2.8z" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "UI Developer",
    location: "2711 Ash Dr. San Jose, South Dark.",
    type: "Full Time",
    experience: "Min. 2 Years",
    status: "Hiring",
    daysAgo: "2d",
    icon: (
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        style={{ backgroundColor: "#fe5b5f" }}
      >
        <path
          d="M12 20.6c-1.4 1.5-3.1 3-5.1 3.3-2 .8-5.9-1.3-5.9-5 0-2.5 3.2-8 6.6-15.1C8.5 1.9 9.4 0 12 0c2.6 0 3.5 1.8 4.6 4C23 17 23 17.7 23 19c0 4.4-5.5 8-11 1.7zm9.5-1.7c0-2-6.4-14.4-6.5-14.5-.9-1.9-1.4-2.9-3-2.9-1.8 0-2.3 1.5-3.2 3.2C2.5 17.2 2.5 18 2.5 19c0 3 3.7 6 8.5.6-2-2.6-3-4.8-3-6.6 0-2.7 2-4.2 4-4.2s4 1.5 4 4.2c0 1.8-1 4-3 6.6 4.6 5.2 8.5 2.5 8.5-.6zM12 10.2c-1.2 0-2.5.9-2.5 2.7 0 1.4.9 3.3 2.5 5.4 1.6-2.1 2.5-4 2.5-5.4 0-1.8-1.3-2.7-2.5-2.7z"
          fill="#fff"
        />
      </svg>
    ),
  },
  {
    id: 7,
    title: "UI Developer",
    location: "2711 Ash Dr. San Jose, South Dark.",
    type: "Full Time",
    experience: "Min. 2 Years",
    status: "Hiring",
    daysAgo: "2d",
    icon: (
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        style={{ backgroundColor: "#5c6bc0" }}
      >
        <g fill="#fff">
          <path d="M3.6 21.2h14.2l-.6-2.2 5.8 5V2.5C23 1 21.8 0 20.4 0H3.6A2.6 2.6 0 001 2.5v16.2c0 1.4 1.2 2.5 2.6 2.5zM14 5.7zM6.5 7C8.3 5.6 10 5.7 10 5.7l.2.1c-2.3.6-3.3 1.6-3.3 1.6.1 0 4.6-2.7 10.1 0 0 0-1-1-3.1-1.5l.2-.2c.3 0 1.8 0 3.5 1.3 0 0 1.8 3.1 1.8 7 0 0-1.1 1.6-4 1.7l-.7-1a4 4 0 002.2-1.4c-3.2 2-6 1.7-9.3.3h-.1l-.4-.2s.6 1 2.2 1.4l-.8 1c-2.8 0-3.8-1.8-3.8-1.8 0-3.9 1.8-7 1.8-7z" />
          <path d="M14.3 12.8c.7 0 1.3-.6 1.3-1.4 0-.7-.6-1.3-1.3-1.3a1.3 1.3 0 000 2.7zM9.7 12.8c.7 0 1.3-.6 1.3-1.4 0-.7-.6-1.3-1.3-1.3a1.3 1.3 0 000 2.7z" />
        </g>
      </svg>
    ),
  },
];

const chipStyle = {
  bgcolor: "#e3f2fd",
  color: "#1976d2",
  fontWeight: 500,
  borderRadius: "7px",
  px: 1,
  transition: "all 0.2s ease",
  "&:hover": {
    bgcolor: "#bbdefb",
    transform: "scale(1.03)",
  },
};

const JobCards = ({ showDetails, handleCardBack }) => {
  return (
    <div>
      <div
        className="th-btn"
        style={{ cursor: "pointer", marginBottom: "10px" }}
        onClick={showDetails ? handleCardBack : ""}
      >
        {showDetails ? "← Return to Overview" : "Explore opportunities →"}
      </div>
      {jobData.map((job) => (
        <div
          key={job.id}
          className="job-overview-card"
          style={{
            width: "100%",
            maxWidth: "410px",
            borderRadius: "10px",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
            backgroundColor: "#fff",
            marginBottom: "16px",
          }}
        >
          <div
            className="job-card overview-card"
            style={{ display: "flex", flexDirection: "column", gap: "12px" }}
          >
            <div
              className="overview-wrapper"
              style={{ display: "flex", alignItems: "center", gap: "12px" }}
            >
              {job.icon}

              <div className="overview-detail" style={{ flex: 1 }}>
                <div
                  className="job-card-title"
                  style={{ fontSize: "16px", fontWeight: "550" }}
                >
                  {job.title}
                </div>
                <div className="job-card-subtitle" style={{ fontSize: "13px" }}>
                  {job.location}
                </div>
              </div>
            </div>
            <div
              className="job-overview-buttons"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                <Chip label={job.type} size="small" sx={chipStyle} />
                <Chip label={job.experience} size="small" sx={chipStyle} />
              </Box>
              <div
                className="job-stat"
                style={{ fontSize: "12px", fontWeight: "500" }}
              >
                {job.status}
              </div>
              <div className="job-day" style={{ fontSize: "12px" }}>
                {job.daysAgo}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobCards;
