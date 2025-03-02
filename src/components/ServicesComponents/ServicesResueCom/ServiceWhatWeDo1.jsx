import React from "react";
import process_bg_4 from "../../../assets/img/bg/process_bg_4.png";
import process_2_1 from "../../../assets/img/icon/process_2_1.svg";
import process_2_2 from "../../../assets/img/icon/process_2_2.svg";
import process_2_3 from "../../../assets/img/icon/process_2_3.svg";
import process_2_4 from "../../../assets/img/icon/process_2_4.svg";
import processshape from "../../../assets/img/bg/process-shape.png";
const ServiceWhatWeDo1 = () => {
  return (
    <section
      className="process-area6 space"
      id="process-sec"
      style={{
        backgroundImage: `url(${process_bg_4})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container th-container4">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="title-area text-center pe-xl-3 me-xl-3">
              <span className="sub-title sub-title3">Work Process</span>
              <h2 className="sec-title sec-title2 text-white">
                Our 4-Phase <span>PoC</span> Development Process
              </h2>
            </div>
          </div>
        </div>
        <div className="process-card-area">
          <div className="row gy-40">
            <div className="col-md-6 col-lg-3 process-card3-wrap">
              <div className="process-card3">
                <div className="process-card3_icon">
                  <img src={process_2_1} alt="icon" />
                </div>
                <h2 className="box-title">Concept Validation</h2>
                <p className="process-card3_text">
                  Transform your idea into a viable, scalable, innovative,
                  efficient, and sustainable technical concept.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 process-card3-wrap">
              <div className="process-card3">
                <div className="process-card3_icon">
                  <img src={process_2_2} alt="icon" />
                </div>
                <h2 className="box-title">Feasibility Analysis</h2>
                <p className="process-card3_text">
                  Comprehensive technical and financial viability assessment for
                  sustainable project development.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 process-card3-wrap">
              <div className="process-card3">
                <div className="process-card3_icon">
                  <img src={process_2_3} alt="icon" />
                </div>
                <h2 className="box-title">Prototype Development</h2>
                <p className="process-card3_text">
                  Build a working prototype with core functionalities for
                  scalability, efficiency, usability, and seamless integration.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 process-card3-wrap">
              <div className="process-card3">
                <div className="process-card3_icon">
                  <img src={process_2_4} alt="icon" />
                </div>
                <h2 className="box-title">Stakeholder Demo</h2>
                <p className="process-card3_text">
                  Demonstrate a compelling value proposition to key decision
                  makers for adoption and investment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="shape-mockup process-shape d-none d-xl-block"
        style={{
          backgroundImage: `url(${processshape})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </section>
  );
};

export default ServiceWhatWeDo1;
