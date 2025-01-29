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
                We Are Increasing Business Success With
                <span class="text-theme">Technology</span>
              </h2>
            </div>
            <p className="mt-n2 mb-25">
              Continually harness backward-compatible initiatives and
              synergistic content. Objectively strategize cutting edge niches
              with collaborative synergy. Globally pontificate e-business
              processes through orthoonal web readiness enhance backend value.
            </p>
            <div className="checklist style4 mb-40 list-center">
              <ul>
                <li>
                  <img src="assets/img/icon/check_1.png" alt="icon" />
                  Dramatically re-engineer value added IT systems via mission
                </li>
                <li>
                  <img src="assets/img/icon/check_1.png" alt="icon" /> Website
                  &amp; Mobile application design &amp; Development
                </li>
                <li>
                  <img src="assets/img/icon/check_1.png" alt="icon" />
                  Professional User Experince &amp; Interface researching
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
