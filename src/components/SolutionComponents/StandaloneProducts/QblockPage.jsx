import React from "react";
import about_2_1 from "../../../Imges/SolutionImg/about_2_1.jpg";
import about_2_2 from "../../../Imges/SolutionImg/about_2_2.jpg";
import about_2_3 from "../../../Imges/SolutionImg/about_2_3.jpg";
import about_2_shape from "../../../Imges/SolutionImg/about_2_shape.png";
import video_shape_1 from "../../../Imges/SolutionImg/video_shape_1.png";
import faq_1_1 from "../../../Imges/SolutionImg/faq_1_1.png";
import about_3_1 from "../../../Imges/SolutionImg/about_3_1.png";
import breadcumbbg from "../../../Imges/SolutionImg/breadcumb-bg.jpg";
const QblockPage = () => {
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
            <h1 className="breadcumb-title">Qblock</h1>
            <ul className="breadcumb-menu">
              <li>
                <a href="/">Home</a>
              </li>
              <li>Qblock</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="space" id="about-sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 mb-30 mb-xl-0">
              <div className="img-box3">
                <div className="img1">
                  <img src={about_2_1} alt="About" />
                </div>
                <div className="img2">
                  <img src={about_2_2} alt="About" />
                </div>
                <div className="img3">
                  <img src={about_2_3} alt="About" />
                </div>
                <div className="shape1">
                  <img src={about_2_shape} alt="About" />
                </div>
              </div>
            </div>

            <div className="col-xl-6">
              <span class="sub-title">
                <div class="icon-masking me-2">
                  <img
                    src="assets/img/theme-img/title_shape_2.svg"
                    alt="shape"
                  />
                </div>
                QBLOCK
              </span>
              <div className="title-area mb-35">
                <h2 className="sec-title">
                  QBLOCK – Smart & Secure Document Management
                  <span className="text-theme fw-normal"> System</span>
                </h2>
              </div>

              <p className="mt-n2 mb-25">
                QBLOCK is an advanced DMS that streamlines document storage,
                retrieval, and collaboration with enterprise-grade security,
                seamless access, version tracking, and efficient workflows.
              </p>
              <div className="checklist style3 mb-40">
                <ul>
                  <li>
                    <i className="fa-solid fa-square-check" />
                    Securely store and organize multiple file formats for easy
                    access.
                  </li>
                  <li>
                    <i className="fa-solid fa-square-check" />
                    Track changes, access past versions, and maintain document
                    history efficiently.
                  </li>
                  <li>
                    <i className="fa-solid fa-square-check" />
                    Control permissions, secure access, and maintain document
                    integrity.
                  </li>
                  <li>
                    <i className="fa-solid fa-square-check" />
                    Search and retrieve documents fast with indexing and
                    filters.
                  </li>
                  <li>
                    <i className="fa-solid fa-square-check" />
                    Automate approvals, reviews, and document processes for
                    improved efficiency.
                  </li>
                </ul>
              </div>
              <a href="about.html" className="th-btn">
                DISCOVER MORE
                <i className="fa-regular fa-arrow-right ms-2" />
              </a>
            </div>
          </div>
        </div>
        <div
          className="shape-mockup d-none d-lg-block"
          data-bottom="0%"
          data-right="0%"
        >
          <div className="particle-2 small" id="particle-1" />
        </div>
      </div>

      <div className="overflow-hidden bg-smoke space">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6">
              <div className="title-area mb-35 text-center text-xl-start">
                <span className="sub-title">
                  <div className="icon-masking me-2">
                    <span
                      className="mask-icon"
                      data-mask-src="assets/img/theme-img/title_shape_2.svg"
                    />
                    <img
                      src="assets/img/theme-img/title_shape_2.svg"
                      alt="shape"
                    />
                  </div>
                  GREAT IT SKILLS
                </span>
                <h2 className="sec-title">
                  More Than 24+ Years Experience We Provide
                  <span className="text-theme fw-normal">IT Services</span>
                </h2>
              </div>
              <p className="mt-n2 mb-25 text-center text-xl-start">
                Collaboratively envisioneer user friendly supply chains and
                cross unit imperative. Authoritativel fabricate competitive
                resource and holistic. Holisticly restore real time resources
                whereas standardized networks.
              </p>
              <div className="pe-xxl-4">
                <div className="skill-feature">
                  <h3 className="skill-feature_title">Business Strategy</h3>
                  <div className="progress">
                    <div className="progress-bar" style={{ width: "85%" }}>
                      <div className="progress-value">85%</div>
                    </div>
                  </div>
                </div>
                <div className="skill-feature">
                  <h3 className="skill-feature_title">Softwer Development</h3>
                  <div className="progress">
                    <div className="progress-bar" style={{ width: "95%" }}>
                      <div className="progress-value">95%</div>
                    </div>
                  </div>
                </div>
                <div className="skill-feature">
                  <h3 className="skill-feature_title">Cyber Security</h3>
                  <div className="progress">
                    <div className="progress-bar" style={{ width: "90%" }}>
                      <div className="progress-value">90%</div>
                    </div>
                  </div>
                </div>
                <div className="skill-feature">
                  <h3 className="skill-feature_title">
                    Artificial Intelligence
                  </h3>
                  <div className="progress">
                    <div className="progress-bar" style={{ width: "80%" }}>
                      <div className="progress-value">80%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 mt-40 mt-xl-0">
              <div className="video-box1">
                <img className="tilt-active" src={video_shape_1} alt="Video" />
                <a
                  href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                  className="play-btn popup-video"
                >
                  <i className="fas fa-play" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="shape-mockup" data-top="0%" data-left="0%">
          <img src="assets/img/shape/tech_shape_3.png" alt="shape" />
        </div>
        <div className="shape-mockup" data-bottom="0%" data-right="0%">
          <img src="assets/img/shape/tech_shape_4.png" alt="shape" />
        </div>
      </div>

      <div className="bg-smoke overflow-hidden space" id="faq-sec">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-9">
              <div className="title-area text-center text-xl-start">
                <span className="sub-title">
                  <div className="icon-masking me-2">
                    <span
                      className="mask-icon"
                      data-mask-src="assets/img/theme-img/title_shape_2.svg"
                    />
                    <img
                      src="assets/img/theme-img/title_shape_2.svg"
                      alt="shape"
                    />
                  </div>
                  Frequently Ask Question
                </span>
                <h2 className="sec-title">
                  Talk To About Any
                  <span className="text-theme fw-normal">Question?</span>
                </h2>
              </div>
              <div className="accordion-area accordion" id="faqAccordion">
                <div className="accordion-card">
                  <div className="accordion-header" id="collapse-item-1">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-1"
                      aria-expanded="false"
                      aria-controls="collapse-1"
                    >
                      Where can I get analytics help?
                    </button>
                  </div>
                  <div
                    id="collapse-1"
                    className="accordion-collapse collapse"
                    aria-labelledby="collapse-item-1"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p className="faq-text">
                        Dramatically disseminate real-time portals rather than
                        top-line action items. Uniquely provide access to
                        low-risk high-yield products without dynamic products.
                        Progressively re-engineer low-risk high-yield ideas
                        rather than emerging alignments.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-card active">
                  <div className="accordion-header" id="collapse-item-2">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-2"
                      aria-expanded="true"
                      aria-controls="collapse-2"
                    >
                      How long should a business plan be?
                    </button>
                  </div>
                  <div
                    id="collapse-2"
                    className="accordion-collapse collapse show"
                    aria-labelledby="collapse-item-2"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p className="faq-text">
                        Dramatically disseminate real-time portals rather than
                        top-line action items. Uniquely provide access to
                        low-risk high-yield products without dynamic products.
                        Progressively re-engineer low-risk high-yield ideas
                        rather than emerging alignments.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-card">
                  <div className="accordion-header" id="collapse-item-3">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-3"
                      aria-expanded="false"
                      aria-controls="collapse-3"
                    >
                      Do I need a business plan?
                    </button>
                  </div>
                  <div
                    id="collapse-3"
                    className="accordion-collapse collapse"
                    aria-labelledby="collapse-item-3"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p className="faq-text">
                        Dramatically disseminate real-time portals rather than
                        top-line action items. Uniquely provide access to
                        low-risk high-yield products without dynamic products.
                        Progressively re-engineer low-risk high-yield ideas
                        rather than emerging alignments.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 mt-35 mt-xl-0">
              <div className="faq-img tilt-active">
                <div className="img-shape icon-masking">
                  <span className="mask-icon" />
                  <img src={about_3_1} alt="img" />
                </div>
                <img src={faq_1_1} alt="Faq" />
              </div>
            </div>
          </div>
        </div>
        <div className="shape-mockup jump" data-bottom="0%" data-left="0%">
          <img src="assets/img/shape/tech_shape_5.png" alt="shape" />
        </div>
      </div>
    </div>
  );
};

export default QblockPage;
