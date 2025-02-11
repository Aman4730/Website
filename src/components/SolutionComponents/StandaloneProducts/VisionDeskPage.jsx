import React from "react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import KeyFeatures from "./SolutionReuseCom/KeyFeatures";
import check_4 from "../../../assets/img/icon/check_4.svg";
import breadcumbbg from "../../../assets/img/bg/breadcumb-bg.jpg";
import about_18_1 from "../../../assets/img/normal/about_18_1.jpg";
import about_18_2 from "../../../assets/img/normal/about_18_2.jpg";
import process_img_1 from "../../../assets/img/normal/process_img_1.jpg";
import process_img_2 from "../../../assets/img/normal/process_img_2.jpg";
import process_img_3 from "../../../assets/img/normal/process_img_3.jpg";
import process_img_4 from "../../../assets/img/normal/process_img_4.jpg";
import title_shape_2 from "../../../assets/img/theme-img/title_shape_2.svg";
import AuditTrailsIcon from "../../../Imges/QblockIcon/AuditTrailsIcon.jpg";
import AccessControlIcon from "../../../Imges/QblockIcon/AccessControlIcon.jpg";
import VersionControlIcon from "../../../Imges/QblockIcon/VersionControlIcon.jpg";
import DocumentsStorageIcon from "../../../Imges/QblockIcon/DocumentsStorageIcon.jpg";
import title_shape_2_white from "../../../assets/img/theme-img/title_shape_2_white.svg";
import DocumentsRetrievalIcon from "../../../Imges/QblockIcon/DocumentsRetrievalIcon.jpg";
import WorkflowAutomationIcon from "../../../Imges/QblockIcon/WorkflowAutomationIcon.jpg";
import CollaborationToolsIcon from "../../../Imges/QblockIcon/CollaborationToolsIcon.jpg";
import "swiper/css";
import "swiper/css/pagination";
import OurExpertise1 from "./SolutionReuseCom/OurExpertise1";
import TalkToAbout from "./SolutionReuseCom/TalkToAboutAnyQuestion/TalkToAbout";
const VisionDeskPage = () => {
  const testimonials = [
    {
      text: "“Seamlessly fetch, manage, and analyze farmers' data, including land details, crop patterns, and yield insights, enabling real-time access to agricultural information for better decision-making, planning, and monitoring by stakeholders.”",
      img: DocumentsStorageIcon,
      name: "Integration with Krishi Mapper",
      designation: "",
    },
    {
      text: "“Maintain a well-organized repository of farmers, including demographic information, landholding data, and crop cultivation details, ensuring efficient data management for better planning, analysis, and decision-making in agriculture.”",
      img: VersionControlIcon,
      name: "Farmer Database Management",
      designation: "",
    },
    {
      text: "“Monitor crop cycles, yields, and farming practices to enhance agricultural productivity, optimize resource utilization, and support data-driven decision-making for sustainable and efficient farming operations.”",
      img: AccessControlIcon,
      name: "Crop & Yield Tracking",
      designation: "",
    },
    {
      text: "“Track and manage financial assistance, government subsidies, and loan disbursements to ensure timely support for farmers, promoting economic stability, increased productivity, and sustainable agricultural growth with data-driven insights.”",
      img: DocumentsRetrievalIcon,
      name: "Finance & Subsidy Management",
      designation: "",
    },
    {
      text: "“Optimize procurement planning, input supply distribution, and logistics for agricultural produce to enhance efficiency, reduce wastage, improve supply chain management, and ensure timely delivery to markets and stakeholders.”",
      img: WorkflowAutomationIcon,
      name: "Supply Chain & Procurement",
      designation: "",
    },
    {
      text: "“Maintain real-time stock levels, track inventory, and manage storage facilities efficiently to prevent shortages, reduce wastage, optimize resource utilization, and ensure seamless supply chain operations in agriculture.”",
      img: CollaborationToolsIcon,
      name: "Warehouse & Stock Management",
      designation: "",
    },
    {
      text: "“Generate insightful reports, data visualizations, and trend analysis to enhance decision-making, improve strategic planning, identify patterns, optimize resource allocation, and drive data-driven solutions for sustainable agricultural growth and efficiency.”",
      img: AuditTrailsIcon,
      name: "Report & Analytics Dashboard",
      designation: "",
    },
    {
      text: "“Define user roles, access levels, and permissions to ensure secured data management, prevent unauthorized access, enhance accountability, streamline operations, and maintain data integrity across agricultural information systems.”",
      img: AuditTrailsIcon,
      name: "User Access & Role Management",
      designation: "",
    },
    {
      text: "“Maintain a detailed history of all system transactions to ensure transparency, regulatory compliance, audit readiness, data security, accountability, traceability, fraud prevention, and operational efficiency in agricultural management systems.”",
      img: AuditTrailsIcon,
      name: "Audit Logs & Compliance",
      designation: "",
    },
    {
      text: "“Access data anytime, anywhere with a responsive design and cloud-based storage, ensuring scalability, security, real-time synchronization, seamless user experience, and efficient agricultural data management across multiple devices.”",
      img: AuditTrailsIcon,
      name: "Mobile-Friendly & Cloud-Based",
      designation: "",
    },
  ];
  const processSteps = [
    {
      id: 1,
      title: "Smart Data Management",
      step: "STEP-01",
      description:
        "Effortlessly fetch, organize, and analyze farmers' data, including land details, crop patterns, and yield insights.",
      image: process_img_1,
      img: process_img_1,
      checklist: [
        "Seamless Farmer Data Handling",
        "Real-time Land & Crop Monitoring",
        "Data Accuracy & Security",
      ],
    },
    {
      id: 2,
      title: "Financial Oversight",
      step: "STEP-02",
      description:
        "Seamlessly track government subsidies, financial aid, and loan disbursements to support farmers effectively.",
      image: process_img_2,
      img: process_img_2,
      checklist: [
        "Monitor Subsidy Distribution",
        "Ensure Transparent Transactions",
        "Optimize Loan Disbursement",
      ],
    },
    {
      id: 3,
      title: "Insightful Analytics",
      step: "STEP-03",
      description:
        "Generate powerful reports, trend analysis, and data visualizations to drive informed agricultural decisions.",
      image: process_img_3,
      img: process_img_3,
      checklist: [
        "AI-Powered Data Insights",
        "Customizable Reports & Charts",
        "Predictive Farming Trends",
      ],
    },
    {
      id: 4,
      title: "Anywhere, Anytime Access",
      step: "STEP-04",
      description:
        "Leverage cloud-based storage and a responsive design for real-time data accessibility on any device.",
      image: process_img_4,
      img: process_img_4,
      checklist: [
        "Secure Cloud Storage",
        "Cross-Device Compatibility",
        "24/7 Data Accessibility",
      ],
    },
  ];
  const processStepsArray = [
    "Smart Data Management",
    "Financial Oversight",
    "Insightful Analytics",
    "Anywhere, Anytime Access",
  ];
  const TalkToAboutAnyQuestion = [
    {
      id: 1,
      question: "How does this system help in tracking farmers' data?",
      answer:
        "Our system provides real-time tracking of farmers' data, including land ownership, crop patterns, and yield insights, ensuring efficient agricultural planning.",
    },
    {
      id: 2,
      question: "Can I monitor government subsidies and loan disbursements?",
      answer:
        "Yes! The system includes tracking for government subsidies, financial aid, and loan disbursements, ensuring transparency and effective financial management.",
    },
    {
      id: 3,
      question: "Does the system support data analytics and reporting?",
      answer:
        "Absolutely! The system generates insightful reports, trend analysis, and visual data representations to support better agricultural decision-making.",
    },
    {
      id: 4,
      question: "How secure is the data stored in the system?",
      answer:
        "We implement encrypted data storage, role-based access control, and cloud security measures to ensure your information remains protected at all times.",
    },
  ];

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
              <div className="shadow-title">VISION DESK</div>
              <span className="sub-title" style={{ color: "white" }}>
                <div className="icon-masking me-2">
                  <img src={title_shape_2_white} alt="shape" />
                </div>
                Vision Desk
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
      <div
        className="about-sec-18 position-relative z-index-3 overflow-hidden space"
        id="about-sec"
      >
        <div className="container th-container4">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-6">
              <div className="img-box21 pe-xl-5 me-xl-2">
                <div className="img1">
                  <img src={about_18_1} alt="About" />
                </div>
                <div className="img2">
                  <img src={about_18_2} alt="About" />
                </div>
                <div className="th-experience">
                  <h2 className="experience-year">
                    <CountUp start={1} end={689} duration={10} />+
                  </h2>
                  <p className="experience-text">Happily active client’s</p>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="">
                <div className="title-area  pe-xl-3">
                  <div className="title-area">
                    <span className="shadow-title">Vision Desk</span>
                    <span className="sub-title">
                      <div className="icon-masking me-2">
                        <img src={title_shape_2} alt="shape" />
                      </div>
                      Vision Desk
                    </span>
                  </div>
                  <h2 className="sec-title">
                    Comprehensive MIS Portal for Agricultural Data Management
                  </h2>
                  <p>
                    VisionDesk is a powerful Management Information System (MIS)
                    Portal designed to streamline agricultural data management
                    by integrating with Krishi Mapper. It enables real-time
                    access to farmers' data, crop details, and analytical
                    insights to enhance decision-making for agricultural
                    stakeholders. VisionDesk empowers organizations with
                    data-driven solutions for effective planning, monitoring,
                    and reporting.
                  </p>
                </div>
                <div className="two-column style4 justify-content-between mb-50 list-center ms-0">
                  <div className="checklist style13">
                    <ul>
                      <li>
                        <img src={check_4} alt="" />
                        Real-time Data Access
                      </li>
                      <li>
                        <img src={check_4} alt="" />
                        Krishi Mapper Integration
                      </li>
                    </ul>
                  </div>
                  <div className="checklist style13">
                    <ul>
                      <li>
                        <img src={check_4} alt="" />
                        Data-Driven Solutions
                      </li>
                      <li>
                        <img src={check_4} alt="" />
                        Informed Decision-Making
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="btn-group style3">
                  <a
                    href="about.html"
                    className="th-btn style-radius text-capitalize"
                  >
                    Contact us
                  </a>
                  <div className="call-btn">
                    <i className="fas fa-phone" />
                    <div className="media-body">
                      <span className="btn-text">Call Now!</span>
                      <a href="tel:+25632542598" className="btn-title">
                        (+256) 3254 2598
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <KeyFeatures testimonials={testimonials} />
      <OurExpertise1
        processSteps={processSteps}
        processStepsArray={processStepsArray}
      />
      <TalkToAbout TalkToAboutAnyQuestion={TalkToAboutAnyQuestion} />
    </div>
  );
};

export default VisionDeskPage;
