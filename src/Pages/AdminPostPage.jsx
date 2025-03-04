import React, { useEffect, useState } from "react";
import MainHeading from "../components/MainHeading";
import JobPost from "../components/CarrerComponents/JobPost";
import { Grid } from "@mui/material";
import { motion } from "framer-motion";
import JobCard from "../components/CarrerComponents/JobCard";
import { getFetch, postFetchData, putFetch } from "../api/Api";
import JobOverView from "../components/CarrerComponents/JobOverView";
import JobExplain from "../components/CarrerComponents/JobExplain";
import ApplicantTable from "../components/CarrerComponents/ApplicantTable";

const AdminPostPage = () => {
  const [open, setOpen] = useState(false);
  const [jobData, setJobData] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

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
    handleReset();
  };

  const fetchData = async () => {
    const url = `${import.meta.env.VITE_API_URL_LOCAL}/getjob`;
    try {
      const response = await getFetch(url);
      if (response?.status === 200) {
        setJobData(response.data.data);
      } else {
        console.error("API Error:", response);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  // --------------------------------Job Post
  const [errors, setErrors] = useState({});
  const [responsibilities, setResponsibilities] = useState([]);
  const [qualifications, setQualifications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editID, setEditID] = useState(0);
  const [formData, setFormData] = useState({
    JobName: "",
    JobExperience: "",
    SalaryRange: "",
    EndDate: "",
    JobType: "",
    JobLocation: "",
    JobDescription: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const validateForm = () => {
    let newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key].trim()) {
        newErrors[key] = "This field is required";
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async () => {
    if (validateForm()) {
      setLoading(true);
      try {
        const response = await postFetchData(
          `${import.meta.env.VITE_API_URL_LOCAL}/createJob`,
          {
            ...formData,
            JobResponsibilities: responsibilities,
            JobQualifications: qualifications,
          }
        );
        console.log("Response:", response.data);
        handleFormClose();
        fetchData();
      } catch (error) {
        console.error("Error posting job:", error);
      } finally {
        setLoading(false);
      }
    }
  };
  const handleUpdateJob = async () => {
    if (!editID) {
      console.error("Job ID is required for update!");
      return;
    }

    const updatedData = {
      ...formData,
      JobResponsibilities: responsibilities,
      JobQualifications: qualifications,
    };

    const url = `${import.meta.env.VITE_API_URL_LOCAL}/updateJob/${editID}`;

    try {
      const response = await putFetch(url, updatedData);
      if (response?.status === 200) {
        console.log("Job Updated Successfully:", response.data);
        handleFormClose();
        fetchData();
      } else {
        console.error("Failed to update job:", response);
      }
    } catch (error) {
      console.error("Error updating job:", error);
    }
  };
  const handleEditJob = (jobData) => {
    if (jobData) {
      setOpen(true);
      setFormData({
        JobName: jobData.JobName || "",
        JobExperience: jobData.JobExperience || "",
        SalaryRange: jobData.SalaryRange || "",
        JobName: jobData.JobName || "",
        JobExperience: jobData.JobExperience || "",
        SalaryRange: jobData.SalaryRange || "",
        EndDate: jobData.EndDate || "",
        JobType: jobData.JobType || "",
        JobLocation: jobData.JobLocation || "",
        JobDescription: jobData.JobDescription || "",
      });
      setEditID(jobData.id);
      setResponsibilities(jobData.JobResponsibilities);
      setQualifications(jobData.JobQualifications);
    }
  };
  const handleReset = () => {
    setFormData({
      JobName: "",
      JobExperience: "",
      SalaryRange: "",
      EndDate: "",
      JobType: "",
      JobLocation: "",
      JobDescription: "",
    });
    setErrors({});
    setQualifications([]);
    setResponsibilities([]);
  };
  return (
    <div>
      <MainHeading
        title="Job Post"
        subtitle="Job Post"
        breadcrumbs={[{ label: "Home", link: "/" }, { label: "Solution" }]}
      />
      <JobPost
        open={open}
        editID={editID}
        errors={errors}
        loading={loading}
        formData={formData}
        onClose={handleFormClose}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        qualifications={qualifications}
        handleUpdateJob={handleUpdateJob}
        responsibilities={responsibilities}
        setQualifications={setQualifications}
        setResponsibilities={setResponsibilities}
      />
      <div className="job">
        <div className="wrapper">
          <div className="main-container">
            <div className="searched-jobs">
              <Grid container>
                {!showDetails ? (
                  <Grid item xs={12}>
                    <Grid
                      item
                      xs={10.7}
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
                    </Grid>
                    <Grid item xs={12} display="flex" justifyContent="center">
                      <motion.div
                        initial={{ x: "100%", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ type: "tween", duration: 0.6 }}
                      >
                        <JobCard
                          admin={true}
                          jobData={jobData}
                          handleCardClick={handleCardClick}
                          handleEditJob={handleEditJob}
                        />
                      </motion.div>
                    </Grid>
                  </Grid>
                ) : (
                  <React.Fragment>
                    <Grid item lg={12} sm={12} xs={12} order={{ xs: 1, sm: 2 }}>
                      <Grid
                        item
                        lg={12}
                        sm={12}
                        xs={12}
                        order={{ xs: 1, sm: 2 }}
                      >
                        <ApplicantTable />
                      </Grid>
                      <motion.div
                        initial={{ x: "100%", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ type: "tween", duration: 0.8 }}
                      >
                        <JobExplain
                          handleFormOpen={handleFormOpen}
                          selectedJob={selectedJob}
                        />
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
};

export default AdminPostPage;
