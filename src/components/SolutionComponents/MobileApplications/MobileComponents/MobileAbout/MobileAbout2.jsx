import React from "react";

const MobileAbout2 = () => {
  return (
    <section className="space-bottom">
      <div className="container th-container4">
        <div className="row gy-40 align-items-center">
          <div className="col-lg-6">
            <div className="img-box12">
              <div className="img1">
                <img src="assets/img/normal/download-8-2.png" alt="img" />
              </div>
              <div className="img2 jump">
                <img src="assets/img/normal/download-8-2.1.png" alt="img" />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="title-area mb-40">
              <span className="sub-title">Easy User Experience</span>
              <h2 className="sec-title">
                Better cash control with
                <br className="d-xl-block d-none" />
                Web<span className="text-theme fw-normal">Teck</span>
                Flow
              </h2>
              <p>
                Provide a brief overview of the app's purpose and key features.
                This introduction should capture the attention of visitors and
                compel them to explore further. Highlight the most important
                features and functionalities of the app.
              </p>
              <p>
                Use concise descriptions or bullet points to emphasize what sets
                your app apart from others in the market.
              </p>
            </div>
            <div className="btn-wrap">
              <a href="contact.html" className="th-btn style-radius">
                Get Started For Free 14 Days
              </a>
              <a
                href="contact.html"
                className="th-btn style-border2 style-radius"
              >
                <i className="far fa-cloud-arrow-down me-2" />
                Download app
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileAbout2;
