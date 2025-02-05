import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import check_4 from "../../../assets/img/icon/check_4.svg";
import quote_3d from "../../../assets/img/icon/quote_3d.png";
import testi_bg_4 from "../../../assets/img/bg/testi_bg_4.png";
import breadcumbbg from "../../../assets/img/bg/breadcumb-bg.jpg";
import about_18_1 from "../../../assets/img/normal/about_18_1.jpg";
import about_18_2 from "../../../assets/img/normal/about_18_2.jpg";
import AuditTrailsIcon from "../../../Imges/QblockIcon/AuditTrailsIcon.jpg";
import AccessControlIcon from "../../../Imges/QblockIcon/AccessControlIcon.jpg";
import VersionControlIcon from "../../../Imges/QblockIcon/VersionControlIcon.jpg";
import DocumentsStorageIcon from "../../../Imges/QblockIcon/DocumentsStorageIcon.jpg";
import title_shape_2_white from "../../../assets/img/theme-img/title_shape_2_white.svg";
import DocumentsRetrievalIcon from "../../../Imges/QblockIcon/DocumentsRetrievalIcon.jpg";
import WorkflowAutomationIcon from "../../../Imges/QblockIcon/WorkflowAutomationIcon.jpg";
import CollaborationToolsIcon from "../../../Imges/QblockIcon/CollaborationToolsIcon.jpg";
import process_bg_2 from "../../../assets/img/bg/process_bg_2.jpg";
import process_img_1 from "../../../assets/img/normal/process_img_1.jpg";
import process_img_2 from "../../../assets/img/normal/process_img_2.jpg";
import process_img_3 from "../../../assets/img/normal/process_img_3.jpg";
import process_img_4 from "../../../assets/img/normal/process_img_4.jpg";
import star2 from "../../../assets/img/shape/star-2.png";
import line3 from "../../../assets/img/shape/line-3.png";
import title_shape_2 from "../../../assets/img/theme-img/title_shape_2.svg";
import faq_7_1 from "../../../assets/img/normal/faq_7_1.jpg";
import faq_7_2 from "../../../assets/img/normal/faq_7_2.jpg";
import "swiper/css";
import "swiper/css/pagination";
import KeyFeatures from "./SolutionReuseCom/KeyFeatures";
const VisionDeskPage = () => {
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
                    <span className="counter-number">25</span>
                  </h2>
                  <p className="experience-text">Happily active client’s</p>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="">
                <div className="title-area mb-40 pe-xl-3">
                  <span className="sub-title sub-title5">Vision Desk</span>
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
      <section
        className="process-area5"
        id="process-sec"
        style={{
          backgroundImage: `url(${process_bg_2})`,
        }}
      >
        <div className="container th-container4">
          <div className="title-area text-center">
            <span className="shadow-title">PROCESS</span>
            <span className="sub-title">
              <div className="icon-masking me-2">
                <img src={title_shape_2} alt="shape" />
              </div>
              Our Work Process
            </span>
            <h2 className="sec-title">
              Our Work Process
              <span className="text-theme fw-normal"> IT Solution</span>
            </h2>
          </div>
          <div className="process-tabs-wrapper">
            <div
              className="nav nav-tabs process-tabs-tabs"
              id="nav-tab"
              role="tablist"
              style={{
                backgroundColor: "#edf0f7",
              }}
            >
              {[
                "Enhanced Efficiency",
                "Cost Management",
                "Improved Service",
                "Improved Service",
              ].map((title, index) => (
                <button
                  key={index}
                  className={`nav-link ${index === 0 ? "active" : ""}`}
                  id={`nav-step${index + 1}-tab`}
                  data-bs-toggle="tab"
                  data-bs-target={`#nav-step${index + 1}`}
                  type="button"
                >
                  <span className="step">STEP-0{index + 1}</span>
                  <span className="title">{title}</span>
                </button>
              ))}
            </div>
            <div
              className="tab-content"
              id="nav-tabContent"
              style={{ backgroundColor: "#edf0f7" }}
            >
              {processSteps.map((step, index) => (
                <div
                  key={step.id}
                  className={`tab-pane fade ${
                    index === 0 ? "show active" : ""
                  }`}
                  id={`nav-step${step.id}`}
                  role="tabpanel"
                >
                  {console.log(step)}
                  <div className="process-wrapper">
                    <div className="process-content">
                      <h5 className="box-title">{step.title}</h5>
                      <p className="box-text">{step.description}</p>
                      <div className="checklist" style={{ marginTop: "20px" }}>
                        <ul>
                          <li>
                            <i className="far fa-check-circle text-body"></i>{" "}
                            Best Service for You
                          </li>
                          <li>
                            <i className="far fa-check-circle text-body"></i>{" "}
                            Keeping Your Team Productive
                          </li>
                          <li>
                            <i className="far fa-check-circle text-body"></i>{" "}
                            Predictable Costs 24/7
                          </li>
                        </ul>
                      </div>
                      <a href="contact.html" className="th-btn style-radius">
                        Get Started
                      </a>
                    </div>
                    <div className="process-image">
                      <img src={step.img} alt={`Process Step ${step.id}`} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="shape-mockup d-none d-xxl-block"
              style={{
                bottom: "-12%",
                right: "29.5%",
              }}
            >
              <img src={star2} alt="shape" />
            </div>
            <div
              className="shape-mockup z-index-3 d-none d-xl-block"
              style={{ top: "13%", left: "35.5%" }}
            >
              <img src={line3} alt="shape" />
            </div>
          </div>
        </div>
      </section>
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

export default VisionDeskPage;
