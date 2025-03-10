import React from "react";
import { Link } from "react-router-dom";
import title_shape_2 from "../../assets/img/theme-img/title_shape_2.svg";
const CustomerRelationship = () => {
  return (
    <div className="overflow-hidden space-bottom">
      <div className="container th-container4">
        <div className="row justify-content-center justify-content-lg-between align-items-center">
          <div className="col-xl-6">
            <div className="title-area">
              <span className="sub-title text-capitalize fs-20">
                <div className="icon-masking me-2">
                  <img src={title_shape_2} alt="shape" />
                </div>
                Company Benifits
              </span>
              <h2 className="sec-title">Why Choose Logimetrix IT Consulting</h2>
              <p className="mb-25">
                Our team is compriseds of seasoneds IT professionals with
                industry certifications and a wealth of experience. We stay at
                the forefronts of the technological for advancements to ensure
                your solutions are future-proof and relevant.
              </p>
            </div>
            <div className="two-column mb-35">
              <div className="checklist style12">
                <ul>
                  <li>
                    <img src="assets/img/icon/check_3.svg" alt="" />
                    Client-Centric Partnership
                  </li>
                  <li>
                    <img src="assets/img/icon/check_3.svg" alt="" />
                    Expertise You Can Trust
                  </li>
                </ul>
              </div>
              <div className="checklist style12">
                <ul>
                  <li>
                    <img src="assets/img/icon/check_3.svg" alt="" />
                    24/7 Hour Support
                  </li>
                </ul>
              </div>
            </div>
            <div className="feature-wrap">
              <div className="btn-wrap">
                <Link
                  to="/contactUs"
                  className="th-btn style-radius text-capitalize"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="feature-thumb14_wrapp">
              <div className="feature-thumb14-1">
                <img src="assets/img/normal/feature-img-12-1.jpg" alt="img" />
              </div>
              <div className="feature-thumb14-2 jump">
                <img src="assets/img/normal/feature-img-12-2.jpg" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerRelationship;
