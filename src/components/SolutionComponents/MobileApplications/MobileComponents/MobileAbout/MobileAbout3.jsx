import React from "react";

const MobileAbout3 = () => {
  return (
    <div
      className="about-sec-8 overflow-hidden th-radius3"
      data-bg-src="assets/img/bg/download_bg_8-3.png"
    >
      <div className="container th-container4">
        <div className="row justify-content-between">
          <div className="col-xl-6">
            <div className="space">
              <div className="title-area mb-30">
                <span className="sub-title">Project Management App</span>
                <h2 className="sec-title mb-4">
                  Download our app and start your free trail to get started
                  today!
                </h2>
                <p>
                  Clearly communicate the benefits of using the app. Explain how
                  it solves a problem or improves the user's life in some way.
                  Focus on the value proposition and what makes the app worth
                  downloading. Include a prominent call-to-action button that
                  encourages visitors to download the app or sign up for a free
                  trial.
                </p>
                <p>
                  Specify which platforms the app is available on (e.g., iOS,
                  Android) and provide links to download from the respective app
                  stores.
                </p>
              </div>
              <div className="btn-group mt-30">
                <a href="service.html" className="th-btn style7 style-radius">
                  <img
                    src="assets/img/theme-img/play-store-btn.png"
                    alt="img"
                  />
                </a>
                <a href="service.html" className="th-btn style7 style-radius">
                  <img src="assets/img/theme-img/apple-btn.png" alt="img" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-6 align-self-end">
            <div className="thumb text-center mt-xl-0 mt-n5">
              <div className="img1">
                <img src="assets/img/normal/download-8-3.png" alt="About" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileAbout3;
