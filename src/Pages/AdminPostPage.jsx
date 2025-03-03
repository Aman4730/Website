import React, { useState } from "react";
import MainHeading from "../components/MainHeading";
import JobPost from "../components/CarrerComponents/JobPost";
import { Grid } from "@mui/material";
import { motion } from "framer-motion";
import JobCard from "../components/CarrerComponents/JobCard";

const AdminPostPage = () => {
  const [open, setOpen] = useState(false);
  const handleFormOpen = () => {
    setOpen(true);
  };
  const handleFormClose = () => {
    setOpen(false);
  };
  const handleCardClick = () => {};

  return (
    <div>
      <MainHeading
        title="Job Post"
        subtitle="Job Post"
        breadcrumbs={[{ label: "Home", link: "/" }, { label: "Solution" }]}
      />
      <JobPost open={open} onClose={handleFormClose} />
      <div className="job">
        <div className="wrapper">
          <div className="main-container">
            <div className="searched-jobs">
              <Grid container>
                <Grid item xs={12}>
                  <Grid
                    item
                    xs={11.4}
                    style={{
                      display: "flex",
                      justifyContent: "end",
                      alignItems: "center",
                      gap: "10px",
                      padding: "10px",
                      height: "90px",
                    }}
                  >
                    <div className="th-btn" onClick={handleFormOpen}>
                      Add New Opening
                    </div>
                    <div className="th-btn">Add New Opening</div>
                  </Grid>

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
              </Grid>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPostPage;
