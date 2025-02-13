import React from "react";
import about_8_1 from "../../../../../assets/img/normal/about_8_1.jpg";
import about_8_2 from "../../../../../assets/img/normal/about_8_2.jpg";
const MobileAbout = () => {
  return (
    <div className="about-sec-8 overflow-hidden th-radius3" id="about-sec">
      <div className="container th-container4">
        <div className="row justify-content-between flex-row-reverse">
          <div className="col-xl-6">
            <div className="space">
              <div className="title-area mb-40">
                <span className="sub-title">About Our App</span>
                <h2 className="sec-title">
                  Built for the next generation
                  <br className="d-xxl-block d-none" />
                  of small business
                </h2>
                <p>
                  Incorporate visually appealing elements such as high-quality
                  images, videos, or graphics that resonate with the target
                  audience and complement the overall design of the page. Ensure
                  that the landing page is optimized for various devices.
                </p>
              </div>
              <div className="two-column mb-50 list-center ms-0">
                <div className="checklist style6">
                  <ul>
                    <li>
                      <i className="fas fa-check-circle" /> Easy Customize
                    </li>
                    <li>
                      <i className="fas fa-check-circle" /> Free updates
                    </li>
                  </ul>
                </div>
                <div className="checklist style6">
                  <ul>
                    <li>
                      <i className="fas fa-check-circle" /> Fully Responsive
                    </li>
                    <li>
                      <i className="fas fa-check-circle" /> Ultimate support
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
          <div className="col-xl-6 align-self-end">
            <div className="img-box10 text-center mb-xl-0 mt-xl-0 mt-n4">
              <div className="img1">
                <img src={about_8_1} alt="About" />
                <div className="img2 jump">
                  <img src={about_8_2} alt="About" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileAbout;
