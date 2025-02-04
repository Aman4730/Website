import React from "react";
import breadcumbbg from "../../../assets/img/bg/breadcumb-bg.jpg";
import about_12_1 from "../../../assets/img/normal/about_12_1.jpg";
import about_12_3 from "../../../assets/img/normal/about_12_3.jpg";
import about_12_2 from "../../../assets/img/normal/about_12_2.jpg";
import about_12_shape from "../../../assets/img/normal/about_12_shape.png";
import about_12_1_shape from "../../../assets/img/normal/about_12_1_shape.png";
import process_bg_2 from "../../../assets/img/bg/process_bg_2.jpg";
import process_img_1 from "../../../assets/img/normal/process_img_1.jpg";
import process_img_2 from "../../../assets/img/normal/process_img_2.jpg";
import process_img_3 from "../../../assets/img/normal/process_img_3.jpg";
import process_img_4 from "../../../assets/img/normal/process_img_4.jpg";
import star1 from "../../../assets/img/shape/star-1.png";
import star2 from "../../../assets/img/shape/star-2.png";
import line3 from "../../../assets/img/shape/line-3.png";

const AbsoluteStudyPage = () => {
  const processSteps = [
    {
      id: 1,
      title: "Discovery",
      step: "STEP-01",
      description:
        "We gather requirements, research, and plan the best approach for development.",
      image: process_img_1,
      img: process_img_1,
    },
    {
      id: 2,
      title: "Planning",
      step: "STEP-02",
      description:
        "Creating a roadmap, setting milestones, and defining the development strategy.",
      image: process_img_2,
      img: process_img_2,
    },
    {
      id: 3,
      title: "Execute",
      step: "STEP-03",
      description:
        "Developing, testing, and iterating to build a high-quality software product.",
      image: process_img_3,
      img: process_img_3,
    },
    {
      id: 4,
      title: "Finished Work",
      step: "STEP-04",
      description:
        "Final deployment, client handover, and ongoing maintenance for performance.",
      image: process_img_4,
      img: process_img_4,
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
          marginBottom: "100px",
        }}
      >
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">Absolute Study</h1>
            <ul className="breadcumb-menu">
              <li>
                <a href="/">Home</a>
              </li>
              <li>Absolute Study</li>
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
                <span className="sub-title sub-title3 style1">Who We Are</span>
                <h2 className="sec-title">
                  We’re Building Modern And Hight Quality
                  <span className="text-theme">Software</span>
                </h2>
              </div>
              <p className="mt-n2 mb-25">
                IT companies stay abreast of emerging technologies and industry
                trends to remain competitive and provide innovative solutions to
                their clients. This includes trends such as artificial
                intelligence, machine learning, Internet of Things (IoT),
                blockchain, edge computing, and 5G networks.
              </p>
              <h6 className="text-theme fw-semibold mb-30">
                We are making every business grow!
              </h6>
              <div className="checklist style8 mb-40">
                <ul>
                  <li>
                    <i className="fa-light fa-square-check" />
                    Super user and easy to use interface
                  </li>
                  <li>
                    <i className="fa-light fa-square-check" />
                    Easiest way to grow your business in days
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
                  href="contact.html"
                  className="th-btn style10 fs-16 text-capitalize"
                >
                  Try for free
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section
        className="process-area5"
        id="process-sec"
        style={{
          backgroundImage: `url(${process_bg_2})`,
        }}
      >
        <div className="container th-container4">
          <div className="title-area text-center">
            <span className="sub-title sub-title3">PROCESS</span>
            <h2 className="sec-title">Our Work Process</h2>
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
              {["Discovery", "Planning", "Execute", "Finished Work"].map(
                (title, index) => (
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
                )
              )}
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
                      <div className="checklist">
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
    </div>
  );
};

export default AbsoluteStudyPage;
