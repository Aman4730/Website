import React from "react";
import line3 from "../../../../assets/img/shape/line-3.png";
import star2 from "../../../../assets/img/shape/star-2.png";
import process_bg_2 from "../../../../assets/img/bg/process_bg_2.jpg";
import title_shape_2 from "../../../../assets/img/theme-img/title_shape_2.svg";

const OurExpertise1 = ({ processSteps, processStepsArray = [] }) => {
  return (
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
            {processStepsArray.map((title, index) => (
              <button
                key={index}
                className={`nav-link ${index === 0 ? "active" : ""}`}
                id={`nav-step${index + 1}-tab`}
                data-bs-toggle="tab"
                data-bs-target={`#nav-step${index + 1}`}
                type="button"
              >
                <span className="step">STEP-0{index + 1}</span>
                <span
                  className="title"
                  style={{
                    width: "30px",
                    display: "inline-block",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                  }}
                >
                  {title}
                </span>
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
                className={`tab-pane fade ${index === 0 ? "show active" : ""}`}
                id={`nav-step${step.id}`}
                role="tabpanel"
              >
                <div className="process-wrapper">
                  <div className="process-content">
                    <h5 className="box-title">{step.title}</h5>
                    <p className="box-text">{step.description}</p>
                    <div className="checklist" style={{ marginTop: "20px" }}>
                      <ul>
                        {step.checklist.map((item, i) => (
                          <li key={i}>
                            <i className="far fa-check-circle text-body"></i>{" "}
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <a href="contact.html" className="th-btn style-radius">
                      Explore More
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
  );
};

export default OurExpertise1;
