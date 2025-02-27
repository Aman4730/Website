import React, { useState } from "react";
import "./style.css";
import MainHeading from "../components/MainHeading";
import SearchType from "../components/CarrerComponents/SearchType";
import JobCard from "../components/CarrerComponents/JobCard";
import JobOverView from "../components/CarrerComponents/JobOverView";
import JobExplain from "../components/CarrerComponents/JobExplain";
import { Grid } from "@mui/material";
import { motion } from "framer-motion";
import CarrerAbout from "../components/CarrerComponents/CarrerAbout";
import CarrerForm from "../components/CarrerComponents/CarrerForm";
export default function CarrerPage() {
  const [showDetails, setShowDetails] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [open, setOpen] = useState(false);
  const handleCardClick = (job) => {
    setSelectedJob(job);
    setShowDetails(true);
  };
  const handleCardBack = () => {
    setShowDetails(false);
    setSelectedJob(null);
  };
  const handleFormOpen = () => {
    setOpen(true);
  };
  const handleFormClose = () => {
    setOpen(false);
  };
  return (
    <div style={{ background: "#ffffff" }}>
      <CarrerForm open={open} onClose={handleFormClose} />
      <MainHeading
        title="Carrer"
        subtitle="Carrer"
        breadcrumbs={[{ label: "Home", link: "/" }, { label: "Solution" }]}
        marginBottom="-50px"
      />
      <CarrerAbout />
      <div className="job">
        <div className="wrapper">
          <div className="main-container">
            <div className="searched-jobs">
              <Grid container>
                {!showDetails ? (
                  <Grid item xs={12}>
                    <Grid item xs={12} display="flex" justifyContent="center">
                      <motion.div
                        initial={{ x: "100%", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ type: "tween", duration: 0.6 }}
                      >
                        <JobCard handleCardClick={handleCardClick} />
                      </motion.div>
                    </Grid>
                  </Grid>
                ) : (
                  <React.Fragment>
                    <Grid item lg={3} sm={5} xs={12} order={{ xs: 2, sm: 1 }}>
                      <motion.div
                        initial={{ x: "100%", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ type: "tween", duration: 0.6 }}
                      >
                        <JobOverView
                          showDetails={showDetails}
                          handleCardBack={handleCardBack}
                        />
                      </motion.div>
                    </Grid>
                    <Grid item lg={9} sm={7} xs={12} order={{ xs: 1, sm: 2 }}>
                      <motion.div
                        initial={{ x: "100%", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ type: "tween", duration: 0.8 }}
                      >
                        <JobExplain handleFormOpen={handleFormOpen} />
                      </motion.div>
                    </Grid>
                  </React.Fragment>
                )}
              </Grid>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
