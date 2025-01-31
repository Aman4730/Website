import React from "react";

const AboutUS = () => {
  return (
    <div className="container space-top">
      <div className="row align-items-center">
        <div className="col-lg-5 mb-30 mb-lg-0">
          <div className="img-box6">
            <div className="img1">
              <img src="assets/img/normal/about_4_1.png" alt="About" />
            </div>
            <div className="shape1">
              <img src="assets/img/normal/about_4_2.png" alt="About" />
            </div>
            <div className="shape2">
              <img src="assets/img/normal/about_4_3.png" alt="About" />
            </div>
            <div className="color-animate" />
          </div>
        </div>
        <div className="col-lg-7 text-lg-start text-center">
          <div className="ps-xxl-5">
            <div class="title-area mb-35 text-center text-xl-start">
              <div class="shadow-title">ABOUT US</div>
              <span class="sub-title">
                <div class="icon-masking me-2">
                  <img
                    src="assets/img/theme-img/title_shape_2.svg"
                    alt="shape"
                  />
                </div>
                About Logimetrix IT SOLUTIONS
              </span>
              <h2 class="sec-title">
                The Best IT Solution With 14 Years of
                <span class="text-theme"> Experience.</span>
              </h2>
            </div>
            <p className="mt-n2 mb-25">
              Logimetrix Techsolutions, founded by IIT alumni, is a fast-growing
              business solution provider specializing in cutting-edge custom
              software development. Our expert team is driven by innovation and
              excellence, delivering reliable, timely, flexible, and
              cost-effective solutions tailored to your business needs. Customer
              satisfaction is our top priority. Our expertise includes:
            </p>
            <div className="checklist style4 mb-40 list-center d-flex flex-row justify-content-between w-50">
              <ul className="list-unstyled d-flex flex-column gap-2">
                <li className="d-flex align-items-center gap-2">
                  <img src="assets/img/icon/check_1.png" alt="icon" />
                  Award Winning
                </li>
                <li className="d-flex align-items-center gap-2">
                  <img src="assets/img/icon/check_1.png" alt="icon" />
                  Professional Staff
                </li>
              </ul>
              <ul className="list-unstyled d-flex flex-column gap-2">
                <li className="d-flex align-items-center gap-2">
                  <img src="assets/img/icon/check_1.png" alt="icon" />
                  24/7 Support
                </li>
                <li className="d-flex align-items-center gap-2">
                  <img src="assets/img/icon/check_1.png" alt="icon" />
                  Fair Prices
                </li>
              </ul>
            </div>

            <a href="about.html" className="th-btn">
              ABOUT MORE
              <i className="fa-regular fa-arrow-right ms-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUS;
