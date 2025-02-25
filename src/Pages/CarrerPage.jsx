import React, { useState } from "react";
import "./style.css";
import SearchType from "../components/CarrerComponents/SearchType";
import JobCard from "../components/CarrerComponents/JobCard";
import JobOverView from "../components/CarrerComponents/JobOverView";
import JobExplain from "../components/CarrerComponents/JobExplain";
import { Grid } from "@mui/material";
import { motion } from "framer-motion";
export default function CarrerPage() {
  const [showDetails, setShowDetails] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const handleCardClick = (job) => {
    setSelectedJob(job);
    setShowDetails(true);
  };
  return (
    <div style={{ background: "#ffffff" }}>
      <div className="job">
        <div className="wrapper">
          <div className="main-container">
            <SearchType />
            <div className="searched-jobs">
              <Grid container>
                {!showDetails ? (
                  <Grid item xs={12}>
                    <JobCard handleCardClick={handleCardClick} />
                  </Grid>
                ) : (
                  <>
                    <Grid item lg={3} sm={5}>
                      <motion.div
                        initial={{ x: "100%", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ type: "tween", duration: 0.6 }}
                      >
                        <JobOverView />
                      </motion.div>
                    </Grid>
                    <Grid item lg={9} sm={7}>
                      <motion.div
                        initial={{ x: "100%", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ type: "tween", duration: 0.8 }}
                      >
                        <JobExplain />
                      </motion.div>
                    </Grid>
                  </>
                )}
              </Grid>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
