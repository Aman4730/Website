import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import faq_1_1 from "../../../assets/img/normal/faq_1_1.png";
import quote_3d from "../../../assets/img/icon/quote_3d.png";
import testi_bg_4 from "../../../assets/img/bg/testi_bg_4.png";
import about_2_1 from "../../../assets/img/normal/about_2_1.jpg";
import about_2_2 from "../../../assets/img/normal/about_2_2.jpg";
import about_2_3 from "../../../assets/img/normal/about_2_3.jpg";
import about_3_1 from "../../../assets/img/normal/about_3_1.png";
import breadcumbbg from "../../../assets/img/bg/breadcumb-bg.jpg";
import video_shape_2 from "../../../assets/img/bg/video_shape_2.png";
import about_2_shape from "../../../assets/img/normal/about_2_shape.png";
import RecycleBinIcon from "../../../Imges/QblockIcon/RecycleBinIcon.jpg";
import AutoBackupIcon from "../../../Imges/QblockIcon/AutoBackupIcon.jpg";
import AuditTrailsIcon from "../../../Imges/QblockIcon/AuditTrailsIcon.jpg";
import title_shape_2 from "../../../assets/img/theme-img/title_shape_2.svg";
import AccessControlIcon from "../../../Imges/QblockIcon/AccessControlIcon.jpg";
import VersionControlIcon from "../../../Imges/QblockIcon/VersionControlIcon.jpg";
import DocumentsStorageIcon from "../../../Imges/QblockIcon/DocumentsStorageIcon.jpg";
import title_shape_2_white from "../../../assets/img/theme-img/title_shape_2_white.svg";
import DocumentsRetrievalIcon from "../../../Imges/QblockIcon/DocumentsRetrievalIcon.jpg";
import WorkflowAutomationIcon from "../../../Imges/QblockIcon/WorkflowAutomationIcon.jpg";
import CollaborationToolsIcon from "../../../Imges/QblockIcon/CollaborationToolsIcon.jpg";
import UserGuestDeactivationIcon from "../../../Imges/QblockIcon/UserGuestDeactivationIcon.jpg";
import StorageQuotaManagementIcon from "../../../Imges/QblockIcon/StorageQuotaManagementIcon.jpg";
import "swiper/css";
import "swiper/css/pagination";
import KeyFeatures from "./SolutionReuseCom/KeyFeatures";
import OurExpertise from "./SolutionReuseCom/OurExpertise";
import feature_2_1 from "../../../assets/img/icon/feature_2_1.svg";
import feature_2_3 from "../../../assets/img/icon/feature_2_3.svg";
import feature_2_2 from "../../../assets/img/icon/feature_2_2.svg";
import feature_2_4 from "../../../assets/img/icon/feature_2_4.svg";
import feature_8_1 from "../../../assets/img/normal/feature_8_1.png";
const testimonials = [
  {
    text: "“Effortlessly retrieve and manage comprehensive farmers' data, including detailed land records, crop patterns, historical yield insights, and predictive analytics for improved agricultural decision-making and productivity enhancement.”",
    img: DocumentsStorageIcon,
    name: "Documents Storage",
    designation: "",
  },
  {
    text: "Systematically maintain an organized repository of farmers, capturing essential demographic information, landholding specifics, crop cultivation patterns, and historical agricultural data for streamlined management and informed decisions.",
    img: VersionControlIcon,
    name: "Version Control",
    designation: "",
  },
  {
    text: "Continuously track and analyze crop cycles, yields, and farming practices, enabling data-driven insights, sustainable agricultural methods, and enhanced productivity for long-term farm management and efficiency.",
    img: AccessControlIcon,
    name: "Access Control",
    designation: "",
  },
  {
    text: "Efficiently monitor and manage financial assistance, government subsidies, and loan disbursements for farmers, ensuring transparent tracking, timely disbursements, and optimized support for agricultural growth and sustainability.",
    img: DocumentsRetrievalIcon,
    name: "Documents Retrieval",
    designation: "",
  },
  {
    text: "Streamline procurement planning, optimize input supply distribution, and enhance logistics management for agricultural produce, ensuring timely availability, cost-efficiency, and effective supply chain coordination to boost farm productivity.",
    img: WorkflowAutomationIcon,
    name: "Workflow Automation",
    designation: "",
  },
  {
    text: "Ensure real-time monitoring of stock levels, track inventory, and efficiently manage storage facilities, optimizing resources, reducing wastage, improving efficiency, and ensuring timely access to agricultural supplies and produce.",
    img: CollaborationToolsIcon,
    name: "Collaboration Tools",
    designation: "",
  },
  {
    text: "Create comprehensive reports, engaging data visualizations, and trend analyses to provide actionable insights, empowering informed decision-making, optimizing farm operations, and driving sustainable agricultural practices.",
    img: AuditTrailsIcon,
    name: "Audit Trails",
    designation: "",
  },
  {
    text: "Create comprehensive reports, engaging data visualizations, and trend analyses to provide actionable insights, empowering informed decision-making, optimizing farm operations, and driving sustainable agricultural practices.",
    img: StorageQuotaManagementIcon,
    name: "Storage Quota Management",
    designation: "",
  },
  {
    text: "Create comprehensive reports, engaging data visualizations, and trend analyses to provide actionable insights, empowering informed decision-making, optimizing farm operations, and driving sustainable agricultural practices.",
    img: UserGuestDeactivationIcon,
    name: "User & Guest Deactivation",
    designation: "",
  },
  {
    text: "Create comprehensive reports, engaging data visualizations, and trend analyses to provide actionable insights, empowering informed decision-making, optimizing farm operations, and driving sustainable agricultural practices.",
    img: AutoBackupIcon,
    name: "Auto-Backup",
    designation: "",
  },
  {
    text: "Create comprehensive reports, engaging data visualizations, and trend analyses to provide actionable insights, empowering informed decision-making, optimizing farm operations, and driving sustainable agricultural practices.",
    img: RecycleBinIcon,
    name: "Recycle Bin",
    designation: "",
  },
];
const ExpertiseArray = {
  heading: "Qblock",
  para: "Collaboratively envisioneer user friendly supply chains and cross unit imperative. Authoritativel fabricate competitive resource andholistic. Holisticly restore real time resources whereas standardized networks.",
  keyPoints: [
    { name: "Centralized Document", per: "95%" },
    { name: "Quick & Easy Access", per: "99%" },
    { name: "Advanced Security & Access Control", per: "95%" },
    { name: "Automated Workflows", per: "95%" },
    { name: "Backup & Recovery", per: "92%" },
  ],
};
const AksharPage = () => {
  return (
    <div>
      <div
        className="breadcumb-wrapper"
        style={{
          backgroundImage: `url(${breadcumbbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="container">
          <div className="breadcumb-content text-center">
            <div className="title-area mb-35">
              <div className="shadow-title">AKSHAR</div>
              <span className="sub-title" style={{ color: "white" }}>
                <div className="icon-masking me-2">
                  <img src={title_shape_2_white} alt="shape" />
                </div>
                Akshar
              </span>
            </div>
            <ul className="breadcumb-menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Solution</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="overflow-hidden space">
        <div className="container th-container4">
          <div className="row align-items-center flex-row-reverse">
            <div className="col-xl-5">
              <div className="">
                <div className="title-area mb-40">
                  <h2 className="sec-title sec-title2">
                    Simplifying Education <span>Loans</span> for Students
                  </h2>
                  <p>
                    Logimetrix proudly presents Akshar, a cutting-edge financial
                    aid platform designed to simplify the process of securing
                    education loans for students. With seamless integration
                    between students, schools, and lenders, Akshar ensures a
                    transparent, efficient, and user-friendly solution for
                    managing education loans.
                  </p>
                </div>
                <div className="two-column mb-50 list-center ms-0">
                  <div className="checklist style10">
                    <ul>
                      <li>
                        <img src={feature_2_1} alt="" />
                        Track progress
                      </li>
                      <li>
                        <img src={feature_2_3} alt="" />
                        Daily reporting
                      </li>
                    </ul>
                  </div>
                  <div className="checklist style10">
                    <ul>
                      <li>
                        <img src={feature_2_2} alt="" />
                        Webteck visual sales
                      </li>
                      <li>
                        <img src={feature_2_4} alt="" />
                        Revenue forecasting
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="btn-wrap">
                  <a
                    href="contact.html"
                    className="th-btn style-radius text-capitalize"
                  >
                    Get Free Trail
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-7">
              <div className="feature-box me-xl-5 pe-xl-5">
                <div className="img1">
                  <img src={feature_8_1} alt="About" />
                </div>
                <div className="feature-content11">
                  <h4 className="feature-text">AKSHAR</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <OurExpertise ExpertiseArray={ExpertiseArray} />
      <KeyFeatures testimonials={testimonials} />
      <div className="bg-smoke overflow-hidden space" id="faq-sec">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-9">
              <div className="title-area text-center text-xl-start">
                <span className="sub-title">
                  <div className="icon-masking me-2">
                    <img src={title_shape_2} alt="shape" />
                  </div>
                  Frequently Ask Question
                </span>
                <h2 className="sec-title">
                  Talk To About Any
                  <span className="text-theme fw-normal"> Question?</span>
                </h2>
              </div>
              <div className="accordion-area accordion" id="faqAccordion">
                <div className="accordion-card">
                  <div className="accordion-header" id="collapse-item-1">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-1"
                      aria-expanded="false"
                      aria-controls="collapse-1"
                    >
                      How does Qblock help in managing documents efficiently?
                    </button>
                  </div>
                  <div
                    id="collapse-1"
                    className="accordion-collapse collapse"
                    aria-labelledby="collapse-item-1"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p className="faq-text">
                        Qblock provides a centralized, secure platform for
                        storing, organizing, and retrieving documents with
                        advanced search and indexing features.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-card active">
                  <div className="accordion-header" id="collapse-item-2">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-2"
                      aria-expanded="true"
                      aria-controls="collapse-2"
                    >
                      Is Qblock suitable for enterprises with strict security
                      requirements?
                    </button>
                  </div>
                  <div
                    id="collapse-2"
                    className="accordion-collapse collapse show"
                    aria-labelledby="collapse-item-2"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p className="faq-text">
                        Yes! Qblock offers role-based access control,
                        encryption, audit trails, and automatic backups,
                        ensuring enterprise-grade security and compliance.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-card">
                  <div className="accordion-header" id="collapse-item-3">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-3"
                      aria-expanded="false"
                      aria-controls="collapse-3"
                    >
                      Can multiple users collaborate on documents in real-time?
                    </button>
                  </div>
                  <div
                    id="collapse-3"
                    className="accordion-collapse collapse"
                    aria-labelledby="collapse-item-3"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p className="faq-text">
                        Absolutely! Qblock enables teams to share, edit,
                        annotate, and track versions while maintaining a
                        detailed change history.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-card">
                  <div className="accordion-header" id="collapse-item-4">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-4"
                      aria-expanded="false"
                      aria-controls="collapse-4"
                    >
                      Does Qblock support integration with other tools?
                    </button>
                  </div>
                  <div
                    id="collapse-4"
                    className="accordion-collapse collapse"
                    aria-labelledby="collapse-item-4"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p className="faq-text">
                        Yes! Qblock provides seamless integration with a variety
                        of third-party applications, allowing you to automate
                        workflows and enhance productivity.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 mt-35 mt-xl-0">
              <div className="faq-img tilt-active">
                <div className="img-shape icon-masking">
                  <span className="mask-icon" />
                  <img src={about_3_1} alt="img" />
                </div>
                <img src={faq_1_1} alt="Faq" />
              </div>
            </div>
          </div>
        </div>
        <div className="shape-mockup jump" data-bottom="0%" data-left="0%">
          <img src="assets/img/shape/tech_shape_5.png" alt="shape" />
        </div>
      </div>
    </div>
  );
};

export default AksharPage;
