import React from "react";
import CountUp from "react-countup";
import KeyFeatures from "./SolutionReuseCom/KeyFeatures";
import OurExpertise from "./SolutionReuseCom/OurExpertise";
import breadcumbbg from "../../../assets/img/bg/breadcumb-bg.jpg";
import about_11_1 from "../../../assets/img/normal/about_11_1.jpg";
import about_11_2 from "../../../assets/img/normal/about_11_2.jpg";
import about_11_3 from "../../../assets/img/normal/about_11_3.jpg";
import AccessControlIcon from "../../../Imges/QblockIcon/AccessControlIcon.jpg";
import VersionControlIcon from "../../../Imges/QblockIcon/VersionControlIcon.jpg";
import DocumentsStorageIcon from "../../../Imges/QblockIcon/DocumentsStorageIcon.jpg";
import DocumentsRetrievalIcon from "../../../Imges/QblockIcon/DocumentsRetrievalIcon.jpg";
import TalkToAbout3 from "./SolutionReuseCom/TalkToAboutAnyQuestion/TalkToAbout3";

const SAGPage = () => {
  const ExpertiseArray = {
    heading: "Qblock",
    para: "Tracks AI procedures on animals, records detailed breeding history and success rates, and generates AI performance reports based on date, breed, and village for effective monitoring and analysis.",
    keyPoints: [
      { name: "Maintains Breed-Specific Data", per: "95%" },
      { name: "Monitors Breeding Success Rates", per: "99%" },
      { name: "Generates AI Performance Reports", per: "95%" },
      { name: "Tracks Farmer Participation", per: "95%" },
      { name: "Organizes Data by Village", per: "92%" },
    ],
  };
  const testimonials = [
    {
      text: "“Tracks AI procedures on animals, records detailed breeding history and success rates, and generates AI performance reports based on date, breed, and village for effective monitoring, analysis, and improvement.”",
      img: DocumentsStorageIcon,
      name: "AI (Artificial Insemination) Management",
      designation: "",
    },
    {
      text: "“Maintains detailed farmer profiles, tracks farmers actively participating in AI programs, and monitors services provided to each farmer for better management, record-keeping, and service optimization efficiency.”",
      img: VersionControlIcon,
      name: "Farmer Management",
      designation: "",
    },
    {
      text: "“Organizes data by village for easy monitoring, analyzes AI program effectiveness across different regions, and tracks farmer participation and engagement to enhance decision-making, improve services, and optimize program outcomes.”",
      img: AccessControlIcon,
      name: "Village-Wise Tracking",
      designation: "",
    },
    {
      text: "“Maintains breed-specific data for various livestock species, monitors breeding success rates over time, and generates comprehensive reports for detailed breeding efficiency analysis and improved livestock management.”",
      img: DocumentsRetrievalIcon,
      name: "Breeding Records Management",
      designation: "",
    },
  ];
  const TalkToAbout2Array = [
    {
      id: 1,
      question: "How does this system help in AI procedure management?",
      answer:
        "Our system tracks AI procedures performed on animals, records breeding history, and generates performance reports for better monitoring and decision-making.",
    },
    {
      id: 2,
      question: "Can I monitor farmer participation and engagement?",
      answer:
        "Yes! The system tracks farmers participating in AI programs, maintains detailed farmer profiles, and monitors services provided to each farmer.",
    },
    {
      id: 3,
      question: "Does the system provide breeding efficiency analysis?",
      answer:
        "Absolutely! It monitors breeding success rates over time and generates comprehensive reports to analyze breeding efficiency and improve livestock management.",
    },
    {
      id: 4,
      question: "How does the system organize data for easy monitoring?",
      answer:
        "The system organizes data by village, analyzes AI program effectiveness in different regions, and helps track overall farmer engagement.",
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
        }}
      >
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">SAG</h1>
            <ul className="breadcumb-menu">
              <li>
                <a href="/">Home</a>
              </li>
              <li>SAG</li>
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
                  <span className="sub-title sub-title4 style1">
                    Who We Are
                  </span>
                  <h2 className="sec-title">
                    We Deliver Consumer centric Tech Solutions.
                  </h2>
                </div>
                <p className="mt-n2 mb-25">
                  We are proud to have successfully developed and deployed the
                  SAG (System for Agricultural Growth), an AI-powered livestock
                  management system designed to revolutionize Artificial
                  Insemination (AI) tracking, farmer management, and breeding
                  records. This platform enables accurate data collection,
                  real-time monitoring, and strategic decision-making to enhance
                  agricultural productivity.
                </p>
                <div className="checklist style7">
                  <ul>
                    <li>
                      <i className="far fa-check-circle" />
                      SAG – AI-powered system for livestock management and
                      breeding records.
                    </li>
                    <li>
                      <i className="far fa-check-circle" /> Tracks Artificial
                      Insemination, farmer data, and breeding success.
                    </li>
                    <li>
                      <i className="far fa-check-circle" />
                      Enhances agricultural productivity with real-time data and
                      AI insights.
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
                      <CountUp start={1} end={12} duration={3} />+
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
      <OurExpertise ExpertiseArray={ExpertiseArray} />
      <TalkToAbout3 TalkToAbout2Array={TalkToAbout2Array} />
    </div>
  );
};

export default SAGPage;
