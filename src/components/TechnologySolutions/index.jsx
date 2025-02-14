import React from "react";
import { Link } from "react-router-dom";

const TechnologySolutions = () => {
  return (
    <section className="service-area5 overflow-hidden space" id="service-sec">
      <div className="container th-container4">
        <div className="row justify-content-center">
          <div className="col-lg-6 d-flex flex-column align-items-center text-center">
            <div className="title-area w-100">
              <div className="title-area mb-35 text-center">
                <div className="shadow-title">Our Services</div>
                <span className="sub-title d-flex align-items-center justify-content-center">
                  <div className="icon-masking me-2">
                    <img
                      src="assets/img/theme-img/title_shape_2.svg"
                      alt="shape"
                    />
                  </div>
                  Our Services
                </span>
                <h2 className="sec-title">
                  Comprehensive IT
                  <span className="text-theme"> Services</span>
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="row gy-4 justify-content-between align-items-center">
          <div className="col-md-6 col-xl-3">
            <div className="service-box3">
              <div className="service-box3_content">
                <div className="service-box3_icon">
                  <img src="assets/img/icon/service_4_1.svg" alt="Icon" />
                </div>
                <h3 className="box-title">
                  <a href="service-details.html">LAMP (PHP/MySQL) Solutions</a>
                </h3>
                <p className="service-box3_text">
                  Robust web applications using the LAMP stack for dynamic sites
                  and
                  <br /> e-commerce.
                </p>
                <a href="service-details.html" className="line-btn">
                  Learn More
                  <i className="fa-regular fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-6">
            <div className="service-box3_img">
              <img src="assets/img/service/service_box_7-4.jpg" alt="" />
              <div
                className="service-shape"
                data-mask-src="assets/img/shape/ser_shape_2.png"
                alt=""
              />
              <div
                className="service-shape2"
                data-mask-src="assets/img/shape/ser_shape_3.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-6 col-xl-3">
            <div className="service-box3">
              <div className="service-box3_content">
                <div className="service-box3_icon">
                  <img src="assets/img/icon/service_4_2.svg" alt="Icon" />
                </div>
                <h3 className="box-title">
                  <a href="service-details.html">
                    MERN/MEAN <br /> Solutions
                  </a>
                </h3>
                <p className="service-box3_text">
                  Full-stack JavaScript framework for fast, scalable web
                  applications and real-time features.
                </p>
                <a href="service-details.html" className="line-btn">
                  Learn More
                  <i className="fa-regular fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-3">
            <div className="service-box3">
              <div className="service-box3_content">
                <div className="service-box3_icon">
                  <img src="assets/img/icon/service_4_3.svg" alt="Icon" />
                </div>
                <h3 className="box-title">
                  <a href="service-details.html">
                    Android <br />
                    Solutions
                  </a>
                </h3>
                <p className="service-box3_text">
                  Custom Android app development for engaging, high-performance
                  mobile applications.
                </p>
                <a href="service-details.html" className="line-btn">
                  Learn More
                  <i className="fa-regular fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-3">
            <div className="service-box3">
              <div className="service-box3_content">
                <div className="service-box3_icon">
                  <img src="assets/img/icon/service_4_4.svg" alt="Icon" />
                </div>
                <h3 className="box-title">
                  <a href="service-details.html">
                    Mobile / Smartphone Solutions
                  </a>
                </h3>
                <p className="service-box3_text">
                  Native and cross-platform mobile apps for iOS and Android,
                  ensuring optimal user experiences.
                </p>
                <a href="service-details.html" className="line-btn">
                  Learn More
                  <i className="fa-regular fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-3">
            <div className="service-box3">
              <div className="service-box3_content">
                <div className="service-box3_icon">
                  <img src="assets/img/icon/service_4_5.svg" alt="Icon" />
                </div>
                <h3 className="box-title">
                  <a href="service-details.html">
                    Ruby on Rails (RoR) Solutions
                  </a>
                </h3>
                <p className="service-box3_text">
                  Efficient web applications built with RoR for quick
                  development and scalability.
                </p>
                <a href="service-details.html" className="line-btn">
                  Learn More
                  <i className="fa-regular fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-3">
            <div className="service-btn-area">
              <Link
                to="/services/ApplicationDevelopment"
                className="th-btn service-btn text-capitalize"
              >
                View All Services
                <i className="fa-regular fa-arrow-right ms-2" />
              </Link>
              <div className="ser-shape">
                <img src="assets/img/icon/circle.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySolutions;
