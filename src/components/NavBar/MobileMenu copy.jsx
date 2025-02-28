import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Collapse,
  IconButton,
  Box,
  Typography,
  ListItemIcon,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate

import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import BuildIcon from "@mui/icons-material/Build";
import BusinessIcon from "@mui/icons-material/Business";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import ApartmentIcon from "@mui/icons-material/Apartment";
import SolarPowerIcon from "@mui/icons-material/SolarPower";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import InsightsIcon from "@mui/icons-material/Insights";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import WorkIcon from "@mui/icons-material/Work";
import StarIcon from "@mui/icons-material/Star";
import ArticleIcon from "@mui/icons-material/Article";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";

const NAV_ITEMS = [
  { title: "Home", icon: <HomeIcon />, segment: "home" },
  {
    title: "What we do",
    icon: <BuildIcon />,
    segment: "services",
    children: [
      {
        title: "IT Services",
        icon: <BusinessIcon />,
        segment: "web-dev",
        children: [
          {
            title: "App Development",
            icon: <IntegrationInstructionsIcon />,
            segment: "/services/ApplicationDevelopment",
          },
          {
            title: "POC Development",
            icon: <DesignServicesIcon />,
            segment: "/services/POCDevelopment",
          },
          {
            title: "Product Delivery",
            icon: <SettingsApplicationsIcon />,
            segment: "/services/ProductOrientedDelivery",
          },
          {
            title: "Enterprise Application",
            icon: <CorporateFareIcon />,
            segment: "/services/EnterpriseApplication",
          },
          {
            title: "Application Re-design",
            icon: <DesignServicesIcon />,
            segment: "/services/ApplicationReengineering",
          },
          {
            title: "Cloud Migration",
            icon: <CloudQueueIcon />,
            segment: "/services/CloudMigration",
          },
        ],
      },
      {
        title: "Infra Services",
        icon: <WorkOutlineIcon />,
        segment: "infra-dev",
        children: [
          {
            title: "Indus Towers Limited",
            icon: <ApartmentIcon />,
            segment: "/services/IndusTowersLimited",
          },
          {
            title: "CCBF Renovation",
            icon: <CorporateFareIcon />,
            segment: "/services/CentralCattleBreedingFarm",
          },
          {
            title: "Organic Health Initiative",
            icon: <LocalHospitalIcon />,
            segment: "/services/OrganicHealthProductsInitiative",
          },
        ],
      },
      {
        title: "Accomplishments",
        icon: <EmojiEventsIcon />,
        segment: "app-dev",
        children: [
          {
            title: "MOVCDNER",
            icon: <InsightsIcon />,
            segment: "/services/MOVCDNER",
          },
          {
            title: "Jammu Smart City",
            icon: <ApartmentIcon />,
            segment: "/services/JammuSmartCityProject",
          },
          {
            title: "Acme Solar CMS System",
            icon: <SolarPowerIcon />,
            segment: "/services/AcmeSolarCMSSystem",
          },
          {
            title: "Jammu Tourism",
            icon: <TravelExploreIcon />,
            segment: "/services/JammuTourism",
          },
        ],
      },
    ],
  },
  { title: "How we do it", icon: <InfoIcon />, segment: "/aboutus" },
  { title: "Why Us", icon: <InfoIcon />, segment: "/aboutus" },

  {
    title: "Solution",
    icon: <WorkIcon />,
    segment: "pages",
    children: [
      { title: "Portfolio", icon: <InsightsIcon />, segment: "portfolio" },
      { title: "Testimonials", icon: <StarIcon />, segment: "testimonials" },
    ],
  },
  { title: "Blog", icon: <ArticleIcon />, segment: "blog" },
  { title: "Career", icon: <PersonSearchIcon />, segment: "career" },
];

export default function MobileMenu({ open, toggleDrawer }) {
  const navigate = useNavigate();
  const [submenuOpen, setSubmenuOpen] = useState({});

  const handleSubmenuToggle = (segment) =>
    setSubmenuOpen((prev) => ({
      ...prev,
      [segment]: !prev[segment],
    }));

  const handleNavigation = (segment) => {
    if (!segment.includes("services") && !submenuOpen[segment]) {
      navigate(segment);
      toggleDrawer();
    }
  };

  const renderMenuItems = (items, level = 0) => {
    return items.map((item) => (
      <div key={item.segment}>
        <ListItem
          button
          sx={{
            paddingLeft: `${15 + level * 10}px`,
            borderBottom: "1px solid #f0f0f0",
            "&:hover": { backgroundColor: "#f9f9f9" },
          }}
          onClick={() =>
            item.children
              ? handleSubmenuToggle(item.segment)
              : handleNavigation(item.segment)
          }
        >
          <Box
            display="flex"
            alignItems="center"
            width="100%"
            justifyContent="space-between"
          >
            <Box display="flex" alignItems="center">
              <ListItemIcon sx={{ minWidth: "40px", color: "#4786e6" }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.title} sx={{ color: "#3b3b3b" }} />
            </Box>
            {item.children &&
              (level === 0 ? (
                submenuOpen[item.segment] ? (
                  <RemoveIcon sx={{ color: "#4786e6" }} />
                ) : (
                  <AddIcon sx={{ color: "#4786e6" }} />
                )
              ) : (
                <ArrowDropDownIcon
                  sx={{
                    color: submenuOpen[item.segment] ? "#4786e6" : "#a1a1a1",
                    transform: submenuOpen[item.segment]
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                    transition: "0.3s",
                  }}
                />
              ))}
          </Box>
        </ListItem>

        {item.children && (
          <Collapse in={submenuOpen[item.segment]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {renderMenuItems(item.children, level + 1)}
            </List>
          </Collapse>
        )}
      </div>
    ));
  };

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={toggleDrawer}
      PaperProps={{
        sx: {
          width: 280,
          backgroundColor: "white",
          borderRight: "3px solid #4786e6",
          padding: "10px",
        },
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        padding="10px 15px"
        borderBottom="1px solid #eee"
      >
        <Typography variant="h6" fontWeight="bold" sx={{ color: "#3b3b3b" }}>
          <span style={{ color: "#4786e6" }}>Logimetrix</span>Tech
        </Typography>
        <IconButton onClick={toggleDrawer}>
          <CloseIcon sx={{ color: "#4786e6" }} />
        </IconButton>
      </Box>

      <List>{renderMenuItems(NAV_ITEMS)}</List>
    </Drawer>
  );
}
