import React from "react";
import breadcumbbg from "../../../assets/img/bg/breadcumb-bg.jpg";
import title_shape_2 from "../../../assets/img/theme-img/title_shape_2.svg";
import video_shape_2 from "../../../assets/img/bg/video_shape_2.png";
import about_13_1 from "../../../assets/img/normal/about_13_1.jpg";
import about_13_2 from "../../../assets/img/normal/about_13_2.jpg";
import about_13_3 from "../../../assets/img/normal/about_13_3.jpg";
import AccessControlIcon from "../../../Imges/QblockIcon/AccessControlIcon.jpg";
import VersionControlIcon from "../../../Imges/QblockIcon/VersionControlIcon.jpg";
import DocumentsStorageIcon from "../../../Imges/QblockIcon/DocumentsStorageIcon.jpg";
import title_shape_2_white from "../../../assets/img/theme-img/title_shape_2_white.svg";
import DocumentsRetrievalIcon from "../../../Imges/QblockIcon/DocumentsRetrievalIcon.jpg";
import WorkflowAutomationIcon from "../../../Imges/QblockIcon/WorkflowAutomationIcon.jpg";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import KeyFeatures from "./SolutionReuseCom/KeyFeatures";
import OurExpertise from "./SolutionReuseCom/OurExpertise";
import TalkToAbout1 from "./SolutionReuseCom/TalkToAboutAnyQuestion/TalkToAbout1";
const SaiSoftwarePage = () => {
  const testimonials = [
    {
      text: "“Admins manage users, track attendance, handle fees, and generate reports. The system ensures role-based access, monitors payments, and provides academic, financial, and operational insights for efficient college management.”",
      img: DocumentsStorageIcon,
      name: "Comprehensive Admin Panel",
      designation: "",
    },
    {
      text: "“Teachers can schedule classes, manage attendance in real-time, and submit grades. Students can track performance, ensuring transparency, proper planning, effective learning, and efficient course management.”",
      img: VersionControlIcon,
      name: "Teacher Dashboard",
      designation: "",
    },
    {
      text: "“Students and parents can pay fees online, view class schedules, and track academic performance. This ensures convenience, organization, transparency, efficiency, accessibility, accuracy, and continuous improvement in learning.”",
      img: AccessControlIcon,
      name: "Student & Parent Portal",
      designation: "",
    },
    {
      text: "“The system supports multiple languages, real-time data sync, and mobile accessibility, ensuring seamless communication, accessibility, and convenience for admins, teachers, students, and parents across various devices and platforms.”",
      img: DocumentsRetrievalIcon,
      name: "Secure and User-Friendly Interface",
      designation: "",
    },
    {
      text: "“The system uses MySQL/PostgreSQL for reliable data management and features a web-based architecture, ensuring scalability, accessibility, and seamless performance across modern browsers on any internet-enabled device.”",
      img: WorkflowAutomationIcon,
      name: "Robust Back-End Architecture",
      designation: "",
    },
  ];
  const ExpertiseArray = {
    heading: "Sai Software",
    para: "Our platform enhances efficiency by streamlining operations, improving communication, and ensuring transparency for all stakeholders in the education ecosystem.",
    keyPoints: [
      { name: "Streamlined Operations", per: "95%" },
      { name: "Better Communication", per: "98%" },
      { name: "Efficient Fee Collection", per: "97%" },
      { name: "Enhanced Transparency", per: "96%" },
      { name: "Real-Time Data Sync", per: "99%" },
    ],
  };
  const TalkToAbout1Array = [
    {
      question: "How does the platform benefit schools and colleges?",
      answer:
        "Our platform streamlines operations, improves communication, and enhances transparency in managing attendance, fees, and academic records efficiently.",
    },
    {
      question: "Is the platform accessible on mobile devices?",
      answer:
        "Yes, the system is fully responsive and accessible on mobile devices, allowing students, parents, and teachers to stay connected anytime, anywhere.",
    },
    {
      question: "How secure is the fee payment system?",
      answer:
        "The platform integrates secure online payment options, ensuring safe transactions and reducing delays in fee collection.",
    },
    {
      question: "Can students and parents track academic performance?",
      answer:
        "Yes, students and parents can monitor grades, attendance, and fee payments in real-time, ensuring complete transparency and better academic planning.",
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
      <OurExpertise ExpertiseArray={ExpertiseArray} />
      <TalkToAbout1 TalkToAbout1Array={TalkToAbout1Array} />
    </div>
  );
};

export default SaiSoftwarePage;
