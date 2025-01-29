import React from "react";

const Dashboard = () => {
  return (
    <div className="th-hero-wrapper hero-1" id="hero">
      <div className="hero-img tilt-active">
        <img src="assets/img/hero/hero_img_1_1.png" alt="Hero Image" />
      </div>
      <div className="container">
        <div className="hero-style1">
          <span className="hero-subtitle">Solution For Your Business</span>
          <h1 className="hero-title">Providing Technology</h1>
          <h1 className="hero-title">
            For Smart <span className="text-theme fw-medium">IT Solution</span>
          </h1>
          <p className="hero-text">
            Rapidiously streamline revolutionary networks with technically sound
            deliverables. Authoritatively integrate installed base
            web-readiness. Quickly maximize superior process.
          </p>
          <div className="btn-group">
            <a href="about.html" className="th-btn">
              ABOUT US
              <i className="fa-regular fa-arrow-right ms-2" />
            </a>
            <div className="call-btn">
              <a
                href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                className="play-btn popup-video"
              >
                <i className="fas fa-play" />
              </a>
              <div className="media-body">
                <a
                  href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                  className="btn-title popup-video"
                >
                  Watch Our Story
                </a>
                <span className="btn-text">Subscribe Now</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-shape1">
        <img src="assets/img/hero/hero_shape_1_1.svg" alt="shape" />
      </div>
      <div className="hero-shape2">
        <img src="assets/img/hero/hero_shape_1_2.svg" alt="shape" />
      </div>
      <div className="hero-shape3">
        <img src="assets/img/hero/hero_shape_1_3.svg" alt="shape" />
      </div>
    </div>
  );
};

export default Dashboard;
