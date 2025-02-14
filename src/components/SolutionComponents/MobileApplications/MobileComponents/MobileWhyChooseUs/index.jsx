import React from "react";
import why81 from "../../../../../assets/img/icon/why-8-1.svg";
import why82 from "../../../../../assets/img/icon/why-8-2.svg";
import why83 from "../../../../../assets/img/icon/why-8-3.svg";
import why84 from "../../../../../assets/img/icon/why-8-4.svg";
import why_8_1 from "../../../../../assets/img/normal/why_8_1.png";
import why_bg_8 from "../../../../../assets/img/bg/why_bg_8.png";
const MobileWhyChooseUs = () => {
  return (
    <div className="space-top">
      <div
        className="why-sec-4"
        style={{
          backgroundImage: `url(${why_bg_8})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container th-container4">
          <div className="row justify-content-center">
            <div className="col-xl-5">
              <div className="title-area text-center">
                <span className="sub-title">WHY CHOOSE APP</span>
                <h2 className="sec-title">
                  Why Web<span className="text-theme fw-medium">Teck</span> Is
                  The Right Choice For You
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="why-feature-wrap-4-1">
                <div className="about-feature style3">
                  <div className="about-feature_icon">
                    <img src={why81} alt="icon" />
                  </div>
                  <div className="media-body">
                    <h3 className="about-feature_title">
                      Extensions &amp; Addons
                    </h3>
                    <p className="about-feature_text">
                      Integrate analytics tools such as Google Analytics to
                      track visitor behavior.
                    </p>
                  </div>
                </div>
                <div className="about-feature style3">
                  <div className="about-feature_icon">
                    <img src={why82} alt="icon" />
                  </div>
                  <div className="media-body">
                    <h3 className="about-feature_title">Fast &amp; Easy</h3>
                    <p className="about-feature_text">
                      Integrate analytics tools such as Google Analytics to
                      track visitor behavior.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 order-lg-3">
              <div className="why-feature-wrap-4-2">
                <div className="about-feature style3">
                  <div className="about-feature_icon">
                    <img src={why83} alt="icon" />
                  </div>
                  <div className="media-body">
                    <h3 className="about-feature_title">Friendly Interface</h3>
                    <p className="about-feature_text">
                      Integrate analytics tools such as Google Analytics to
                      track visitor behavior.
                    </p>
                  </div>
                </div>
                <div className="about-feature style3">
                  <div className="about-feature_icon">
                    <img src={why84} alt="icon" />
                  </div>
                  <div className="media-body">
                    <h3 className="about-feature_title">Saved Replies</h3>
                    <p className="about-feature_text">
                      Integrate analytics tools such as Google Analytics to
                      track visitor behavior.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 order-lg-2">
              <div className="why-thumb-4">
                <img src={why_8_1} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileWhyChooseUs;
