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
import OurExpertise1 from "./SolutionReuseCom/OurExpertise1";
import feature_2_1 from "../../../assets/img/icon/feature_2_1.svg";
import feature_2_3 from "../../../assets/img/icon/feature_2_3.svg";
import feature_2_2 from "../../../assets/img/icon/feature_2_2.svg";
import feature_2_4 from "../../../assets/img/icon/feature_2_4.svg";
import feature_8_1 from "../../../assets/img/normal/feature_8_1.png";
import process_img_1 from "../../../assets/img/normal/process_img_1.jpg";
import process_img_2 from "../../../assets/img/normal/process_img_2.jpg";
import process_img_3 from "../../../assets/img/normal/process_img_3.jpg";
import process_img_4 from "../../../assets/img/normal/process_img_4.jpg";
import TalkToAbout2 from "./SolutionReuseCom/TalkToAboutAnyQuestion/TalkToAbout2";
const testimonials = [
  {
    text: "“Students can easily apply for education loans through the platform, partnering with registered schools and financial institutions. A transparent process keeps them informed at every stage, ensuring a smooth loan application experience.”",
    img: DocumentsStorageIcon,
    name: "Streamlined Loan Application Process",
    designation: "",
  },
  {
    text: "“Schools and institutions can configure loan settings to align with their guidelines and student needs. Both students and institutions can upload necessary documents for a smooth loan application and approval process.”",
    img: VersionControlIcon,
    name: "Customizable School Loan Settings",
    designation: "",
  },
  {
    text: "“Students can track loan details, monitor disbursements, and manage EMIs efficiently. Real-time updates ensure transparency, while flexible EMI scheduling helps them stay on top of repayments effortlessly and plan finances better.”",
    img: AccessControlIcon,
    name: "Loan Management & Tracking",
    designation: "",
  },
  {
    text: "“Schools can register and manage users, ensuring smooth communication between students and lenders. Students can access personal profiles to manage loan applications, fees, and transaction histories efficiently.”",
    img: DocumentsRetrievalIcon,
    name: "User Registration & Profile Management",
    designation: "",
  },
  {
    text: "“The Akshar mobile app allows students and institutions to manage loans and finances on-the-go, providing easy access to loan details, EMI schedules, profile management, real-time updates, secure transactions, and more.”",
    img: CollaborationToolsIcon,
    name: "Mobile Accessibility",
    designation: "",
  },
  {
    text: "“Students and schools receive real-time loan status updates for smooth processing. The app offers customizable loan parameters, enabling flexible loan options tailored to the needs of both institutions and students.”",
    img: AuditTrailsIcon,
    name: "Robust Support for Students and Institutions",
    designation: "",
  },
];
const processSteps = [
  {
    id: 1,
    title: "Real-Time Loan Updates",
    step: "STEP-01",
    description:
      "Students and schools receive timely updates on loan status, ensuring smooth processing and transparency.",
    image: process_img_1,
    img: process_img_1,
    checklist: [
      "Instant Loan Status Alerts",
      "Seamless Communication",
      "Transparent Processing",
    ],
  },
  {
    id: 2,
    title: "Customizable Loan Parameters",
    step: "STEP-02",
    description:
      "Flexible loan offerings tailored to the needs of institutions and students for better financial management.",
    image: process_img_2,
    img: process_img_2,
    checklist: [
      "Institution-Specific Loan Configurations",
      "Student-Centric Loan Customization",
      "Enhanced Financial Flexibility",
    ],
  },
  {
    id: 3,
    title: "Student & Institution Dashboard",
    step: "STEP-03",
    description:
      "Students can track loans, manage EMIs, and access profiles, while institutions handle user management and communication.",
    image: process_img_3,
    img: process_img_3,
    checklist: [
      "Loan & EMI Tracking",
      "Profile & Transaction Management",
      "Seamless Institution-Student Interaction",
    ],
  },
  {
    id: 4,
    title: "Mobile-Friendly Loan Management",
    step: "STEP-04",
    description:
      "The Akshar mobile app enables students and institutions to manage loans on-the-go with real-time access and secure transactions.",
    image: process_img_4,
    img: process_img_4,
    checklist: [
      "Real-Time Loan Access",
      "Secure Transactions",
      "Anywhere, Anytime Accessibility",
    ],
  },
];

const processStepsArray = [
  "Real-Time Loan Updates",
  "Customizable Loan Parameters",
  "Student & Institution Dashboard",
  "Mobile-Friendly Loan Management",
];

const TalkToAbout2Array = [
  {
    id: 1,
    question:
      "How does this system assist in managing agricultural activities?",
    answer:
      "Our system helps streamline agricultural activities by tracking land usage, monitoring crop health, and optimizing resource allocation for better productivity.",
  },
  {
    id: 2,
    question: "Can I track government schemes and farmer benefits?",
    answer:
      "Yes! The system allows users to monitor government schemes, subsidies, and farmer benefits, ensuring transparency and effective fund utilization.",
  },
  {
    id: 3,
    question: "Does the system provide weather and soil analysis reports?",
    answer:
      "Absolutely! The system offers weather forecasts, soil quality analysis, and predictive insights to help farmers make informed decisions.",
  },
  {
    id: 4,
    question: "How reliable is the data security in this system?",
    answer:
      "We ensure top-tier security with encrypted data storage, multi-layer authentication, and strict access controls to protect sensitive information.",
  },
];

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
      <KeyFeatures testimonials={testimonials} />
      <OurExpertise1
        processSteps={processSteps}
        processStepsArray={processStepsArray}
      />
      <TalkToAbout2 TalkToAbout2Array={TalkToAbout2Array} />
    </div>
  );
};

export default AksharPage;
