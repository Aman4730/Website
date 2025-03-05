import React from "react";
import about_15_1 from "../../assets/img/normal/about_15_1.jpg";
import title_shape_2 from "../../assets/img/theme-img/title_shape_2.svg";
import about_feature_2_1 from "../../assets/img/icon/about_feature_2_1.svg";
import about_feature_2_2 from "../../assets/img/icon/about_feature_2_2.svg";
import { Link } from "react-router-dom";

const HowWeDoAbout = () => {
  return (
    <div className="space-bottom" id="about-sec">
      <div className="container th-container4">
        <div className="row">
          <div className="col-xl-6 mb-30 mb-xl-0">
            <div className="img-box17 pe-xl-5">
              <div className="img1">
                <img src={about_15_1} alt="About" />
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="title-area mb-35">
              <span className="sub-title text-capitalize fs-20">
                <div className="icon-masking me-2">
                  <img src={title_shape_2} alt="shape" />
                </div>
                How we do it
              </span>
              <h2 className="sec-title">
                Optimize your marketing efforts with Logimetrix's streamlined
                solutions
              </h2>
            </div>
            <p className="mt-n2 mb-25">
              Logimetrix is dedicated to revolutionizing marketing through
              cutting-edge technology, aiming to empower businesses to achieve
              unparalleled success in the digital landscape. What sets
              Logimetrix apart is its deep expertise in leveraging advanced.
            </p>
            <div className="about-feature-wrap style5">
              <div>
                <div className="about-feature style5">
                  <div className="about-feature_icon">
                    <img src={about_feature_2_1} alt="Icon" />
                  </div>
                  <div className="media-body">
                    <h3 className="about-feature_title">
                      Skyrocketing Conversion Rates
                    </h3>
                  </div>
                </div>
                <div className="about-feature style5">
                  <div className="about-feature_icon">
                    <img src={about_feature_2_2} alt="Icon" />
                  </div>
                  <div className="media-body">
                    <h3 className="about-feature_title">
                      Massive Lead Growth Rates
                    </h3>
                  </div>
                </div>
                <div className="btn-group style3">
                  <Link
                    to="/contactUs"
                    className="th-btn style-radius text-capitalize"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
              <div className="about-img">
                <img src="assets/img/normal/about_15_2.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeDoAbout;
