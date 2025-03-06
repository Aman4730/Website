import React from "react";
import about_15_1 from "../../assets/img/normal/about_15_1.jpg";
import title_shape_2 from "../../assets/img/theme-img/title_shape_2.svg";
import about_feature_2_2 from "../../assets/img/icon/about_feature_2_2.svg";
import { Link } from "react-router-dom";
import movcdner from "../../Imges/movcdner.png";
const HowWeDoItComponents = () => {
  return (
    <div className="space" id="about-sec">
      <div className="container th-container4">
        <div className="row">
          <div className="col-xl-6 mb-30 mb-xl-0">
            <div className="img-box17 pe-xl-5">
              <div className="img1">
                <img src={movcdner} alt="About" />
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="title-area mb-35">
              <span className="sub-title text-capitalize fs-20">
                <div className="icon-masking me-2">
                  <img src={title_shape_2} alt="shape" />
                </div>
                Strategic Implementation
              </span>
              <h2 className="sec-title">
                MOVCDNER - Empowering Organic Farming in the North East
              </h2>
            </div>
            <p className="mt-n2 mb-25">
              A comprehensive digital solution to empower organic farming
              practices in the North East region of India. Our team implemented
              cutting-edge technologies including AI-driven analytics,
              cloud-native architecture, and real-time data processing to ensure
              optimal performance and scalability. The project involved a
              cross-functional team of 12+ experts working in agile sprints to
              deliver measurable results within a 9-month timeframe.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeDoItComponents;
