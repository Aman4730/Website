import React from "react";
import about_2_1 from "../../../assets/img/normal/about_2_1.jpg";
import about_2_2 from "../../../assets/img/normal/about_2_2.jpg";
import about_2_3 from "../../../assets/img/normal/about_2_3.jpg";
import about_2_shape from "../../../assets/img/normal/about_2_shape.png";
import breadcumbbg from "../../../assets/img/bg/breadcumb-bg.jpg";
import title_shape_2 from "../../../assets/img/theme-img/title_shape_2.svg";
import title_shape_2_white from "../../../assets/img/theme-img/title_shape_2_white.svg";
import DocumentsStorageIcon from "../../../Imges/QblockIcon/DocumentsStorageIcon.jpg";
import VersionControlIcon from "../../../Imges/QblockIcon/VersionControlIcon.jpg";
import AccessControlIcon from "../../../Imges/QblockIcon/AccessControlIcon.jpg";
import DocumentsRetrievalIcon from "../../../Imges/QblockIcon/DocumentsRetrievalIcon.jpg";
import WorkflowAutomationIcon from "../../../Imges/QblockIcon/WorkflowAutomationIcon.jpg";
import CollaborationToolsIcon from "../../../Imges/QblockIcon/CollaborationToolsIcon.jpg";
import AuditTrailsIcon from "../../../Imges/QblockIcon/AuditTrailsIcon.jpg";
import faq_7_1 from "../../../assets/img/normal/faq_7_1.jpg";
import faq_7_2 from "../../../assets/img/normal/faq_7_2.jpg";
import process_img_1 from "../../../assets/img/normal/process_img_1.jpg";
import process_img_2 from "../../../assets/img/normal/process_img_2.jpg";
import process_img_3 from "../../../assets/img/normal/process_img_3.jpg";
import process_img_4 from "../../../assets/img/normal/process_img_4.jpg";
import { Link } from "react-router-dom";
import KeyFeatures from "./SolutionReuseCom/KeyFeatures";
import OurExpertise1 from "./SolutionReuseCom/OurExpertise1";
import about_11_1 from "../../../assets/img/normal/about_11_1.jpg";
import about_11_2 from "../../../assets/img/normal/about_11_2.jpg";
import about_11_3 from "../../../assets/img/normal/about_11_3.jpg";
const processSteps = [
  {
    id: 1,
    title: "Enhanced Efficiency",
    step: "STEP-01",
    description:
      "Real-time tracking and voice command search make managing your fleet more efficient and effective.",
    image: process_img_1,
    img: process_img_1,
  },
  {
    id: 2,
    title: "Cost Management",
    step: "STEP-02",
    description:
      "Keep track of fuel consumption and other operational metrics to optimize your fleet's running costs.",
    image: process_img_2,
    img: process_img_2,
  },
  {
    id: 3,
    title: "Improved Service",
    step: "STEP-03",
    description:
      "Monitor passenger drop-offs to better manage the routes and schedules, improving overall service delivery.",
    image: process_img_3,
    img: process_img_3,
  },
  {
    id: 4,
    title: "Data Accessibility",
    step: "STEP-04",
    description:
      "Exportable data in CSV format makes it easy to share insights and collaborate with other departments or stakeholders.",
    image: process_img_4,
    img: process_img_4,
  },
];
const testimonials = [
  {
    text: "“Track vehicles in real-time with instant location updates. Monitor start and stop times for complete fleet visibility, ensuring efficient operations, improved route planning, reduced downtime, and enhanced control over movements.”",
    img: DocumentsStorageIcon,
    name: "Real-Time Vehicle Tracking",
    designation: "",
  },
  {
    text: "“Monitor passenger drop-offs per trip to improve transport tracking. Gain insights into drop-off counts, optimize service management, enhance planning, ensure efficiency, and improve overall operational oversight for better transportation services.”",
    img: VersionControlIcon,
    name: "Passenger Drop-off Tracking",
    designation: "",
  },
  {
    text: "“The system tracks fuel consumption and records purchases, ensuring efficient fuel management. It provides a centralized database for each vehicle, aiding maintenance, cost analysis, and optimizing overall fleet operations.”",
    img: AccessControlIcon,
    name: "Fuel Record Management",
    designation: "",
  },
  {
    text: "“Users can search trip details using voice commands, simplifying access without manual entry. This improves efficiency, saves time, and enhances convenience when retrieving specific trip or vehicle information effortlessly.”",
    img: DocumentsRetrievalIcon,
    name: "Voice Command Search",
    designation: "",
  },
  {
    text: "“Easily export trip and fuel data in CSV format for convenient sharing and offline analysis. Supports seamless integration with other tools, enabling further analysis, reporting, auditing, and improved data management.”",
    img: WorkflowAutomationIcon,
    name: "CSV Export Functionality",
    designation: "",
  },
  {
    text: "“Designed to be intuitive and user-friendly for fleet managers, drivers, and administrative staff. The system enables easy access and interaction with data, simplifying tasks, boosting efficiency, and improving overall operational performance.”",
    img: CollaborationToolsIcon,
    name: "User-Friendly Interface",
    designation: "",
  },
  {
    text: "“The system provides detailed reports on trips, fuel usage, drop-offs, and more. Analyze historical data and fuel consumption trends to make informed decisions, optimize fleet operations, and enhance efficiency.”",
    img: AuditTrailsIcon,
    name: "Comprehensive Reporting and Data Analytics",
    designation: "",
  },
];

const LogBooksPage = () => {
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
              <div className="shadow-title">LOG BOOK</div>
              <span className="sub-title" style={{ color: "white" }}>
                <div className="icon-masking me-2">
                  <img src={title_shape_2_white} alt="shape" />
                </div>
                LOG BOOK
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
      <div className="about-area3 overflow-hidden" id="about-sec">
        <div className="container th-container4">
          <div className="row">
            <div className="col-xl-6">
              <div className="pe-xl-5 me-xl-3">
                <div className="title-area style2 mb-30">
                  <div className="title-area">
                    <div className="shadow-title">Log Book</div>
                    <span className="sub-title">
                      <div className="icon-masking me-2">
                        <img src={title_shape_2} alt="shape" />
                      </div>
                      Log Book
                    </span>
                  </div>
                  <h2 className="sec-title">
                    Log Book and Management
                    <span className="text-theme fw-normal"> System</span>
                  </h2>
                </div>
                <p className="mt-n2 mb-25">
                  Our Log Book and Management System is designed to offer
                  real-time tracking and management of vehicle operations, with
                  features that ensure seamless monitoring of vehicles, fuel
                  records, and trip details. This system is ideal for fleet
                  managers, transportation services, or any organization
                  requiring efficient vehicle management.
                </p>
                <div className="checklist style7">
                  <ul>
                    <li>
                      <i className="far fa-check-circle" />
                      Track vehicles in real-time with instant location updates
                      and full fleet visibility.
                    </li>
                    <li>
                      <i className="far fa-check-circle" /> Monitor passenger
                      drop-offs per trip for better transport planning.
                    </li>
                    <li>
                      <i className="far fa-check-circle" />
                      Track fuel consumption and purchases for efficient fleet
                      management.
                    </li>
                  </ul>
                </div>
                <div className="about-btn mt-35">
                  <a
                    href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                    className="th-btn popup-video style-radius text-capitalize"
                  >
                    <i className="fa-solid fa-circle-play me-2" />
                    View Client Stories
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="img-box9">
                <div className="img1">
                  <img src={about_11_1} alt="About" />
                </div>
                <div className="img2">
                  <img src={about_11_2} alt="About" />
                </div>
                <div className="img3">
                  <img src={about_11_3} alt="About" />
                </div>
                <div className="th-experience">
                  <div className="th-experience_content">
                    <h2 className="experience-year">
                      <span className="counter-number">25</span>
                    </h2>
                    <p className="experience-text">
                      Years of experience in startup building
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <KeyFeatures testimonials={testimonials} />
      <OurExpertise1 processSteps={processSteps} />
      <section>
        <div
          class="faq-area position-relative overflow-hidden space"
          id="faq-sec"
        >
          <div class="container th-container4">
            <div class="row">
              <div class="col-xl-6">
                <div class="title-area pe-xl-5 me-xl-4 text-center text-xl-start">
                  <span class="sub-title">Frequently Ask Question</span>
                  <h2 class="sec-title">
                    Talk To About Any
                    <span className="text-theme fw-normal"> Question?</span>
                  </h2>
                </div>
                <div class="accordion style2" id="faqAccordion">
                  <div class="accordion-card style2 th-radius1">
                    <div class="accordion-header" id="collapse-item-1">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-1"
                        aria-expanded="true"
                        aria-controls="collapse-1"
                      >
                        How does this system help in tracking vehicles?
                      </button>
                    </div>
                    <div
                      id="collapse-1"
                      class="accordion-collapse collapse show"
                      aria-labelledby="collapse-item-1"
                      data-bs-parent="#faqAccordion"
                    >
                      <div class="accordion-body">
                        <p class="faq-text">
                          Our system provides real-time tracking of vehicles,
                          showing when they start, stop, and their exact route,
                          ensuring complete visibility.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-card style2 th-radius1">
                    <div class="accordion-header" id="collapse-item-2">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-2"
                        aria-expanded="false"
                        aria-controls="collapse-2"
                      >
                        Can I monitor fuel consumption and expenses?
                      </button>
                    </div>
                    <div
                      id="collapse-2"
                      class="accordion-collapse collapse"
                      aria-labelledby="collapse-item-2"
                      data-bs-parent="#faqAccordion"
                    >
                      <div class="accordion-body">
                        <p class="faq-text">
                          Yes! The system includes fuel tracking and reporting,
                          helping you manage consumption and reduce operational
                          costs.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-card style2 th-radius1">
                    <div class="accordion-header" id="collapse-item-3">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-3"
                        aria-expanded="false"
                        aria-controls="collapse-3"
                      >
                        Does the system support trip history and reporting?
                      </button>
                    </div>
                    <div
                      id="collapse-3"
                      class="accordion-collapse collapse"
                      aria-labelledby="collapse-item-3"
                      data-bs-parent="#faqAccordion"
                    >
                      <div class="accordion-body">
                        <p class="faq-text">
                          Absolutely! You can access detailed trip reports,
                          including distance covered, stops made, and passenger
                          drop-offs, all exportable in CSV format.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-card style2 th-radius1">
                    <div class="accordion-header" id="collapse-item-4">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-4"
                        aria-expanded="false"
                        aria-controls="collapse-4"
                      >
                        How secure is the data stored in the system?
                      </button>
                    </div>
                    <div
                      id="collapse-4"
                      class="accordion-collapse collapse"
                      aria-labelledby="collapse-item-4"
                      data-bs-parent="#faqAccordion"
                    >
                      <div class="accordion-body">
                        <p class="faq-text">
                          We implement secure cloud storage, role-based access
                          controls, and encrypted data transmission, ensuring
                          your information stays protected.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-6">
                <div class="faq-img8 mb-xl-0 mt-xl-0 ps-xl-5 ms-xl-1">
                  <div class="img1">
                    <img src={faq_7_1} alt="About" />
                    <div class="img2 jump">
                      <img src={faq_7_2} alt="About" />
                    </div>
                    <div class="faq8-shape"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LogBooksPage;
