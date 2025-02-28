import React from "react";
import check_2 from "../../../assets/img/icon/check_2.svg";
import about_14_1 from "../../../assets/img/normal/about_14_1.jpg";
import about_14_2 from "../../../assets/img/normal/about_14_2.jpg";
import title_shape_2 from "../../../assets/img/theme-img/title_shape_2.svg";
import { Link } from "react-router-dom";

const ServiceAboutUs = ({ aboutFeatures }) => {
  return (
    <div
      className="bg-smoke3 th-radius2 m-4 mt-0 mb-0 space-top"
      id="about-sec"
    >
      <div className="container th-container4">
        <div className="row">
          <div className="col-xl-6 mb-30 mb-xl-0">
            <div className="img-box16 pe-xl-5">
              <div className="img1">
                <img src={about_14_1} alt="About" />
              </div>
              <div className="img2">
                <img src={about_14_2} alt="About" />
                <a
                  href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                  className="play-btn popup-video"
                >
                  <i className="fas fa-play" />
                </a>
              </div>
              <div className="year-counter style2">
                <h3 className="year-counter_number">
                  <span className="counter-number">12</span>k+
                </h3>
                <p className="year-counter_text">Happily active client’s</p>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="title-area mb-35">
              <span className="sub-title text-capitalize fs-20">
                <div className="icon-masking me-2">
                  <img src={title_shape_2} alt="shape" />
                  &nbsp;&nbsp;{aboutFeatures.title}
                </div>
              </span>
              <h2 className="sec-title">{aboutFeatures.heading}</h2>
            </div>
            <p className="mt-n2 mb-25">{aboutFeatures.aboutus}</p>
            <div className="about-feature-wrap style4">
              {aboutFeatures.asd.map((feature, index) => (
                <div className="about-feature style4" key={index}>
                  <div className="about-feature_icon">
                    <img src={check_2} alt="Icon" />
                  </div>
                  <div className="media-body">
                    <h3 className="about-feature_title">{feature.title}</h3>
                    <p className="about-feature_text">{feature.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="btn-group style3">
              <Link
                to="/contactUs"
                className="th-btn style-radius text-capitalize"
              >
                Contact us
              </Link>
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
      <div className="shape-mockup" data-bottom="0%" data-right="0%">
        <img src="assets/img/shape/about_shape.png" alt="shape" />
      </div>
    </div>
  );
};

export default ServiceAboutUs;
