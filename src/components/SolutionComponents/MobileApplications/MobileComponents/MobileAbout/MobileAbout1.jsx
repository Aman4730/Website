import React from "react";

const MobileAbout1 = () => {
  return (
    <section className="space">
      <div className="container th-container4">
        <div className="row gy-40 align-items-center flex-row-reverse">
          <div className="col-lg-6 text-lg-end">
            <div className="img-box11">
              <div className="img1">
                <img src="assets/img/normal/download-8-1.png" alt="img" />
              </div>
              <div className="img2 jump">
                <img src="assets/img/normal/download-8-1.1.png" alt="img" />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="title-area">
              <span className="sub-title">Made Easy Way</span>
              <h2 className="sec-title">
                Keep track of your expenses
                <br className="d-xl-block d-none" />
                by the app
              </h2>
              <p>
                Incorporate visually appealing elements such as high-quality
                images, videos, or graphics that resonate with the target
                audience and complement the overall design of the page. Ensure
                that the landing page is optimized for various devices.
              </p>
              <div className="two-column mb-50 mt-30">
                <div className="checklist style6">
                  <ul>
                    <li>
                      <i className="fas fa-check-circle" />
                      <div className="details">
                        <h6>Customizable App</h6>
                        <p className="mb-n2">
                          Ensure that the landing page is optimized for various
                          devices.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="checklist style6">
                  <ul>
                    <li>
                      <i className="fas fa-check-circle" />
                      <div className="details">
                        <h6>Statistic Retroactively</h6>
                        <p className="mb-n2">
                          Ensure that the landing page is optimized for various
                          devices.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
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

export default MobileAbout1;
