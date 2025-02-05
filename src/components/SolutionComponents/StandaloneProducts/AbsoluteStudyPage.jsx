import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import quote_3d from "../../../assets/img/icon/quote_3d.png";
import testi_bg_4 from "../../../assets/img/bg/testi_bg_4.png";
import breadcumbbg from "../../../assets/img/bg/breadcumb-bg.jpg";
import about_12_1 from "../../../assets/img/normal/about_12_1.jpg";
import about_12_3 from "../../../assets/img/normal/about_12_3.jpg";
import about_12_2 from "../../../assets/img/normal/about_12_2.jpg";
import video_shape_2 from "../../../assets/img/bg/video_shape_2.png";
import RecycleBinIcon from "../../../Imges/QblockIcon/RecycleBinIcon.jpg";
import AutoBackupIcon from "../../../Imges/QblockIcon/AutoBackupIcon.jpg";
import about_12_shape from "../../../assets/img/normal/about_12_shape.png";
import AuditTrailsIcon from "../../../Imges/QblockIcon/AuditTrailsIcon.jpg";
import title_shape_2 from "../../../assets/img/theme-img/title_shape_2.svg";
import about_12_1_shape from "../../../assets/img/normal/about_12_1_shape.png";
import AccessControlIcon from "../../../Imges/QblockIcon/AccessControlIcon.jpg";
import VersionControlIcon from "../../../Imges/QblockIcon/VersionControlIcon.jpg";
import DocumentsStorageIcon from "../../../Imges/QblockIcon/DocumentsStorageIcon.jpg";
import title_shape_2_white from "../../../assets/img/theme-img/title_shape_2_white.svg";
import DocumentsRetrievalIcon from "../../../Imges/QblockIcon/DocumentsRetrievalIcon.jpg";
import WorkflowAutomationIcon from "../../../Imges/QblockIcon/WorkflowAutomationIcon.jpg";
import CollaborationToolsIcon from "../../../Imges/QblockIcon/CollaborationToolsIcon.jpg";
import UserGuestDeactivationIcon from "../../../Imges/QblockIcon/UserGuestDeactivationIcon.jpg";
import StorageQuotaManagementIcon from "../../../Imges/QblockIcon/StorageQuotaManagementIcon.jpg";
import tech_shape_3 from "../../../assets/img/shape/tech_shape_3.png";
import tech_shape_4 from "../../../assets/img/shape/tech_shape_4.png";
import faq_11_1 from "../../../assets/img/normal/faq_11_1.png";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import KeyFeatures from "./SolutionReuseCom/KeyFeatures";
import OurExpertise from "./SolutionReuseCom/OurExpertise";
const AbsoluteStudyPage = () => {
  const testimonials = [
    {
      text: "“Create highly customizable quizzes that are tailored specifically for groups or individuals, offering flexible test formats, personalized difficulty levels, and a range of question types to suit diverse learning needs.”",
      img: DocumentsStorageIcon,
      name: "Customizable Quiz Creation",
      designation: "",
    },
    {
      text: "“Efficiently manage your question bank by storing, categorizing, and reusing questions across multiple quizzes and tests, enabling streamlined test creation, saving time, and ensuring a variety of question types for different learning needs.”",
      img: VersionControlIcon,
      name: "Question Bank Management",
      designation: "",
    },
    {
      text: "“Enable time-limited testing by setting timers, randomizing questions, and adjusting difficulty levels based on user performance, providing a dynamic and personalized testing experience that adapts to individual progress.”",
      img: AccessControlIcon,
      name: "Time-Limited & Adaptive Testing",
      designation: "",
    },
    {
      text: "“Track performance with detailed reports and analytics, generating insights for individual users and groups, identifying strengths and weaknesses, and improving learning outcomes through data-driven evaluation.”",
      img: DocumentsRetrievalIcon,
      name: "Detailed Reports & Analytics",
      designation: "",
    },
    {
      text: "“Monitor student progress by analyzing assessments, identifying strengths and weaknesses, and providing detailed, actionable insights to enhance learning, boost confidence, and improve overall academic performance effectively.”",
      img: WorkflowAutomationIcon,
      name: "Performance Tracking",
      designation: "",
    },
    {
      text: "“Navigate exams, quizzes, and training modules effortlessly with a seamless, intuitive user interface designed for accessibility, ease of use, smooth navigation, and an engaging learning experience across all devices.”",
      img: CollaborationToolsIcon,
      name: "User-Friendly Interface",
      designation: "",
    },
    {
      text: "“Receive instant results with real-time feedback, in-depth performance analytics, and personalized improvement suggestions to track progress, identify weaknesses, and enhance learning outcomes effectively and efficiently.”",
      img: AuditTrailsIcon,
      name: "Instant Results & Detailed Reports",
      designation: "",
    },
    {
      text: "“Create and conduct tests effortlessly with multiple-choice question (MCQ) formats, supporting various difficulty levels, randomized options, instant scoring, and detailed performance analysis for effective assessment.”",
      img: StorageQuotaManagementIcon,
      name: "MCQs Test Formats",
      designation: "",
    },
    {
      text: "“Ensure secure login and seamless multi-device access, allowing users to take exams safely from mobile, tablet, or desktop with encrypted data protection, smooth navigation, and a user-friendly experience.”",
      img: UserGuestDeactivationIcon,
      name: "Secure Login & Multi-Device Access",
      designation: "",
    },
    {
      text: "“Allow users to review their test answers based on their attempts, providing insights, detailed explanations, and the opportunity to learn from mistakes for improved performance and understanding.”",
      img: AutoBackupIcon,
      name: "Review",
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
          marginBottom: "100px",
        }}
      >
        <div className="container">
          <div className="breadcumb-content text-center">
            <div className="title-area mb-35">
              <div className="shadow-title">SAROJ EDUCATION</div>
              <span className="sub-title" style={{ color: "white" }}>
                <div className="icon-masking me-2">
                  <img src={title_shape_2_white} alt="shape" />
                </div>
                SAROJ EDUCATION
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
      <div className="space-bottom" id="about-sec">
        <div className="container th-container4">
          <div className="row align-items-center">
            <div className="col-xl-7">
              <div className="img-box14">
                <div className="img1">
                  <img src={about_12_1} alt="About" />
                </div>
                <div className="img2">
                  <img src={about_12_3} alt="About" />
                </div>
                <div className="img3">
                  <img src={about_12_2} alt="About" />
                </div>
                <div className="shape1">
                  <img src={about_12_shape} alt="About" />
                </div>
                <div className="shape2">
                  <img src={about_12_1_shape} alt="About" />
                </div>
              </div>
            </div>
            <div className="col-xl-5">
              <div className="title-area mb-35">
                <span className="sub-title sub-title3 style1">
                  SAROJ EDUCATION
                </span>
                <h2 className="sec-title">
                  The Next-Gen Online Examination
                  <span className="text-theme"> Platform</span>
                </h2>
              </div>
              <p className="mt-n2 mb-25">
                SAROJ is a state-of-the-art online examination system designed
                to offer secure, efficient, and seamless assessments for both
                academic institutions and corporate training programs. Built
                with advanced technologies, AI-driven cheating prevention, and
                real-time proctoring, SAROJ ensures integrity, fairness, and
                accuracy in every exam session.
              </p>
              <h6 className="text-theme fw-semibold mb-30">
                Customizable Quiz Creation and Assessment Management
              </h6>
              <div className="checklist style8 mb-40">
                <ul>
                  <li>
                    <i className="fa-light fa-square-check" />
                    SAROJ offers customizable quiz creation and test
                    assignments.
                  </li>
                  <li>
                    <i className="fa-light fa-square-check" />
                    It enables group-wise or individual assessments for better
                    management.
                  </li>
                </ul>
              </div>
              <div className="btn-group">
                <a
                  href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                  className="th-btn popup-video style-radius fs-16 text-capitalize"
                >
                  <i className="fa-solid fa-circle-play me-2" />
                  View Demo
                </a>
                <a
                  href="https://edusaroj.com/home/landing"
                  className="th-btn style10 fs-16 text-capitalize"
                  target="_blank"
                >
                  Try for free
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <KeyFeatures testimonials={testimonials} />
      <OurExpertise ExpertiseArray={ExpertiseArray} />
      <div
        className="position-relative z-index-3 overflow-hidden space"
        id="faq-sec"
      >
        <div className="container th-container4">
          <div className="row gy-5">
            <div className="col-xl-6">
              <div className="title-area">
                <span className="sub-title sub-title5">
                  Frequently Asked Questions
                </span>
                <h2 className="sec-title">
                  Talk To About Any
                  <span className="text-theme fw-normal"> Question?</span>
                </h2>
              </div>
              <div
                className="accordion-area style5 accordion"
                id="faqAccordion"
              >
                <div className="accordion-card style11">
                  <div className="accordion-header" id="collapse-item-1">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-1"
                      aria-expanded="false"
                      aria-controls="collapse-1"
                    >
                      What is the difference between SEO and PPC?
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
                        SEO focuses on improving your website's organic ranking
                        in search results, while PPC involves paid advertising
                        to reach your target audience.You can try our best
                        service for you digital platform.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-card style11 active">
                  <div className="accordion-header" id="collapse-item-2">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-2"
                      aria-expanded="true"
                      aria-controls="collapse-2"
                    >
                      How much does digital marketing cost?
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
                        SEO focuses on improving your website's organic ranking
                        in search results, while PPC involves paid advertising
                        to reach your target audience.You can try our best
                        service for you digital platform.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-card style11">
                  <div className="accordion-header" id="collapse-item-3">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-3"
                      aria-expanded="false"
                      aria-controls="collapse-3"
                    >
                      How do I get started with Webteck?
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
                        SEO focuses on improving your website's organic ranking
                        in search results, while PPC involves paid advertising
                        to reach your target audience.You can try our best
                        service for you digital platform.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-card style11">
                  <div className="accordion-header" id="collapse-item-4">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-4"
                      aria-expanded="false"
                      aria-controls="collapse-4"
                    >
                      What is your process for working with clients?
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
                        SEO focuses on improving your website's organic ranking
                        in search results, while PPC involves paid advertising
                        to reach your target audience.You can try our best
                        service for you digital platform.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="faq-image11">
                <img src={faq_11_1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbsoluteStudyPage;
