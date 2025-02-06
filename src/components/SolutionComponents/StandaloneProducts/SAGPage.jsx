import React from "react";
import breadcumbbg from "../../../assets/img/bg/breadcumb-bg.jpg";
import about_11_1 from "../../../assets/img/normal/about_11_1.jpg";
import about_11_2 from "../../../assets/img/normal/about_11_2.jpg";
import about_11_3 from "../../../assets/img/normal/about_11_3.jpg";
const SAGPage = () => {
  return (
    <div>
      <div
        className="breadcumb-wrapper"
        style={{
          backgroundImage: `url(${breadcumbbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px",
          width: "100%",
        }}
      >
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">SAG</h1>
            <ul className="breadcumb-menu">
              <li>
                <a href="/">Home</a>
              </li>
              <li>SAG</li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className="about-area3 overflow-hidden"
        id="about-sec"
        style={{ border: "1px solid red" }}
      >
        <div className="container th-container4">
          <div className="row">
            <div className="col-xl-6">
              <div className="pe-xl-5 me-xl-3">
                <div className="title-area style2 mb-30">
                  <span className="sub-title sub-title4 style1">
                    Who We Are
                  </span>
                  <h2 className="sec-title">
                    We Deliver Consumer centric Tech Solutions.
                  </h2>
                </div>
                <p className="mt-n2 mb-25">
                  IT companies stay abreast of emerging technologies and
                  industry trends to remain competitive and provide innovative
                  solutions to their clients. This includes trends such as
                  artificial intelligence, machine learning, Internet of Things
                  (IoT), blockchain, edge computing, and 5G networks.
                </p>
                <div className="checklist style7">
                  <ul>
                    <li>
                      <i className="far fa-check-circle" />
                      Identify growth opportunities and expand market presence
                      Enhance
                    </li>
                    <li>
                      <i className="far fa-check-circle" /> operational
                      efficiency and reduce waste
                    </li>
                    <li>
                      <i className="far fa-check-circle" />
                      Make informed decisions based on data-driven insights
                    </li>
                  </ul>
                </div>
                <div className="about-btn mt-35">
                  <a
                    href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                    className="th-btn popup-video style-radius text-capitalize"
                  >
                    <i className="fa-solid fa-circle-play me-2" />
                    View Client Stories
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="img-box9">
                <div className="img1">
                  <img src={about_11_1} alt="About" />
                </div>
                <div className="img2">
                  <img src={about_11_2} alt="About" />
                </div>
                <div className="img3">
                  <img src={about_11_3} alt="About" />
                </div>
                <div className="th-experience">
                  <div className="th-experience_content">
                    <h2 className="experience-year">
                      <span className="counter-number">25</span>
                    </h2>
                    <p className="experience-text">
                      Years of experience in startup building
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SAGPage;
