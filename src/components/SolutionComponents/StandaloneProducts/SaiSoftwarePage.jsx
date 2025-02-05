import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import breadcumbbg from "../../../assets/img/bg/breadcumb-bg.jpg";
import process_img_1 from "../../../assets/img/normal/process_img_1.jpg";
import process_img_2 from "../../../assets/img/normal/process_img_2.jpg";
import process_img_3 from "../../../assets/img/normal/process_img_3.jpg";
import process_img_4 from "../../../assets/img/normal/process_img_4.jpg";
import title_shape_2 from "../../../assets/img/theme-img/title_shape_2.svg";
import video_shape_2 from "../../../assets/img/bg/video_shape_2.png";
import quote_3d from "../../../assets/img/icon/quote_3d.png";
import about_13_1 from "../../../assets/img/normal/about_13_1.jpg";
import about_13_2 from "../../../assets/img/normal/about_13_2.jpg";
import about_13_3 from "../../../assets/img/normal/about_13_3.jpg";
import testi_bg_4 from "../../../assets/img/bg/testi_bg_4.png";
import RecycleBinIcon from "../../../Imges/QblockIcon/RecycleBinIcon.jpg";
import AutoBackupIcon from "../../../Imges/QblockIcon/AutoBackupIcon.jpg";
import AuditTrailsIcon from "../../../Imges/QblockIcon/AuditTrailsIcon.jpg";
import AccessControlIcon from "../../../Imges/QblockIcon/AccessControlIcon.jpg";
import VersionControlIcon from "../../../Imges/QblockIcon/VersionControlIcon.jpg";
import DocumentsStorageIcon from "../../../Imges/QblockIcon/DocumentsStorageIcon.jpg";
import title_shape_2_white from "../../../assets/img/theme-img/title_shape_2_white.svg";
import DocumentsRetrievalIcon from "../../../Imges/QblockIcon/DocumentsRetrievalIcon.jpg";
import WorkflowAutomationIcon from "../../../Imges/QblockIcon/WorkflowAutomationIcon.jpg";
import CollaborationToolsIcon from "../../../Imges/QblockIcon/CollaborationToolsIcon.jpg";
import UserGuestDeactivationIcon from "../../../Imges/QblockIcon/UserGuestDeactivationIcon.jpg";
import StorageQuotaManagementIcon from "../../../Imges/QblockIcon/StorageQuotaManagementIcon.jpg";
import faq_5_1 from "../../../assets/img/normal/faq_5_1.jpg";
import faq_5_2 from "../../../assets/img/normal/faq_5_2.jpg";
import faq_5_3 from "../../../assets/img/normal/faq_5_3.jpg";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import KeyFeatures from "./SolutionReuseCom/KeyFeatures";
const SaiSoftwarePage = () => {
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

  return (
    <div className="theme-blue3">
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
          marginBottom: "80px",
        }}
      >
        <div className="container">
          <div className="breadcumb-content text-center">
            <div className="title-area mb-35">
              <div className="shadow-title">SAI SOFTWARE</div>
              <span className="sub-title" style={{ color: "white" }}>
                <div className="icon-masking me-2">
                  <img src={title_shape_2_white} alt="shape" />
                </div>
                Sai-Software
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
      <div>
        <div
          className="container th-container4"
          style={{ marginTop: "-120px" }}
        >
          <div className="row justify-content-between align-items-center flex-row-reverse">
            <div className="col-xl-5">
              <div className="space">
                <div className="title-area mb-40 pe-xl-3">
                  <span className="sub-title">Sai-Software</span>
                  <h2 className="sec-title">
                    Software College Fee Management
                    <span className="text-theme"> System</span>
                  </h2>
                  <p>
                    Sai-Software brings a revolutionary solution to enhance
                    college operations with a focus on streamlining fee
                    management, improving communication, and simplifying the
                    administrative tasks for all stakeholders, including admins,
                    teachers, students, and parents. This web-based platform
                    offers robust functionality, intuitive user experience, and
                    secure payment systems to make campus management smoother
                    and more efficient.
                  </p>
                </div>
                <div className="two-column style2 justify-content-between mb-50 list-center ms-0">
                  <div className="checklist style9">
                    <ul>
                      <li>
                        <i className="fa-solid fa-badge-check" />
                        Security and Compliance
                      </li>
                      <li>
                        <i className="fa-solid fa-badge-check" />
                        Task Management
                      </li>
                    </ul>
                  </div>
                  <div className="checklist style9">
                    <ul>
                      <li>
                        <i className="fa-solid fa-badge-check" />
                        Reporting and Analytics
                      </li>
                      <li>
                        <i className="fa-solid fa-badge-check" />
                        Team Collaboration
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="btn-wrap">
                  <a href="contact.html" className="th-btn style-radius">
                    Get Started For Free 14 Days
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-7">
              <div className="img-box15 mb-xl-0 mt-xl-0 mt-n4">
                <div className="img1">
                  <img src={about_13_1} alt="About" />
                  <div className="img2 jump">
                    <img src={about_13_2} alt="About" />
                  </div>
                  <div className="img3 movingX">
                    <img src={about_13_3} alt="About" />
                  </div>
                  <div className="about-shape15" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <KeyFeatures testimonials={testimonials} />
      <div className="overflow-hidden bg-smoke space">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6">
              <div className="title-area mb-35 text-center text-xl-start">
                <div className="title-area">
                  <div className="shadow-title"> GREAT IT SKILLS</div>
                  <span className="sub-title">
                    <div className="icon-masking me-2">
                      <img src={title_shape_2} alt="shape" />
                    </div>
                    GREAT IT SKILLS
                  </span>
                </div>
                <h2 className="sec-title">
                  More Than 12+ Years Experience We Provide
                  <span className="text-theme fw-normal"> IT Services</span>
                </h2>
              </div>
              <p className="mt-n2 mb-25 text-center text-xl-start">
                Collaboratively envisioneer user friendly supply chains and
                cross unit imperative. Authoritativel fabricate competitive
                resource and holistic. Holisticly restore real time resources
                whereas standardized networks.
              </p>
              <div className="pe-xxl-4">
                <div className="skill-feature">
                  <h3 className="skill-feature_title">Centralized Document</h3>
                  <div className="progress">
                    <div className="progress-bar" style={{ width: "95%" }}>
                      <div className="progress-value">95%</div>
                    </div>
                  </div>
                </div>
                <div className="skill-feature">
                  <h3 className="skill-feature_title">Quick & Easy Access</h3>
                  <div className="progress">
                    <div className="progress-bar" style={{ width: "99%" }}>
                      <div className="progress-value">99%</div>
                    </div>
                  </div>
                </div>
                <div className="skill-feature">
                  <h3 className="skill-feature_title">
                    Advanced Security & Access Control
                  </h3>
                  <div className="progress">
                    <div className="progress-bar" style={{ width: "95%" }}>
                      <div className="progress-value">95%</div>
                    </div>
                  </div>
                </div>
                <div className="skill-feature">
                  <h3 className="skill-feature_title">Automated Workflows</h3>
                  <div className="progress">
                    <div className="progress-bar" style={{ width: "88%" }}>
                      <div className="progress-value">88%</div>
                    </div>
                  </div>
                </div>
                <div className="skill-feature">
                  <h3 className="skill-feature_title">Backup & Recovery</h3>
                  <div className="progress">
                    <div className="progress-bar" style={{ width: "92%" }}>
                      <div className="progress-value">92%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 mt-40 mt-xl-0">
              <div className="video-box1">
                <img className="tilt-active" src={video_shape_2} alt="Video" />
                <a
                  href="https://youtu.be/ix_OpmpsRBY"
                  className="play-btn popup-video"
                >
                  <i className="fas fa-play" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="shape-mockup" data-top="0%" data-left="0%">
          <img src="assets/img/shape/tech_shape_3.png" alt="shape" />
        </div>
        <div className="shape-mockup" data-bottom="0%" data-right="0%">
          <img src="assets/img/shape/tech_shape_4.png" alt="shape" />
        </div>
      </div>
      <div className="faq-area position-relative space" id="faq-sec">
        <div className="container th-container4">
          <div className="row">
            <div className="col-xl-6">
              <div className="faq-img5 mb-xl-0 mt-xl-0 mt-n4 me-xl-5 pe-xl-5">
                <div className="img1">
                  <img src={faq_5_1} alt="About" />
                  <div className="img2 jump">
                    <img src={faq_5_2} alt="About" />
                  </div>
                  <div className="img3 movingX">
                    <img src={faq_5_3} alt="About" />
                  </div>
                  <div className="faq-shape5" />
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="title-area pe-xl-5 me-xl-4 text-center text-xl-start">
                <span className="sub-title style1">
                  Frequently asked Question
                </span>
                <h2 className="sec-title">
                  Talk To About Any
                  <span className="text-theme fw-normal"> Question?</span>
                </h2>
              </div>
              <div className="accordion" id="faqAccordion">
                <div className="accordion-card style7">
                  <div className="accordion-header" id="collapse-item-1">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-1"
                      aria-expanded="true"
                      aria-controls="collapse-1"
                    >
                      What are the benefits of using Webteck?
                    </button>
                  </div>
                  <div
                    id="collapse-1"
                    className="accordion-collapse collapse show"
                    aria-labelledby="collapse-item-1"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p className="faq-text">
                        Webteck offers a variety of benefits, including
                        increased productivity, streamlined workflows, enhanced
                        collaboration, improved data-driven decision making, and
                        more.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-card style7">
                  <div className="accordion-header" id="collapse-item-2">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-2"
                      aria-expanded="false"
                      aria-controls="collapse-2"
                    >
                      Do I need to download any software?
                    </button>
                  </div>
                  <div
                    id="collapse-2"
                    className="accordion-collapse collapse"
                    aria-labelledby="collapse-item-2"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p className="faq-text">
                        As of my last knowledge update in January 2022, Digix
                        refers to DigixGlobal, a company that tokenizes physical
                        assets, primarily gold, on the Ethereum blockchain.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-card style7">
                  <div className="accordion-header" id="collapse-item-3">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-3"
                      aria-expanded="false"
                      aria-controls="collapse-3"
                    >
                      How much does Webteck cost?
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
                        Implementing automation for routine and repetitive tasks
                        can significantly reduce manual effort and the risk of
                        errors. This can be achieved through the use of software
                        tools, scripts, or robotic process automation (RPA)
                        systems.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-card style7">
                  <div className="accordion-header" id="collapse-item-4">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-4"
                      aria-expanded="false"
                      aria-controls="collapse-4"
                    >
                      What features are included in the free trial?
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
                        Webteck offers a variety of benefits, including
                        increased productivity, streamlined workflows, enhanced
                        collaboration, improved data-driven decision making, and
                        more.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaiSoftwarePage;
