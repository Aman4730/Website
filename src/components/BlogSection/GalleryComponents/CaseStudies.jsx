import React from "react";
import project_8_1 from "../../../assets/img/project/project_8_1.jpg";
import project_8_2 from "../../../assets/img/project/project_8_2.jpg";
import project_8_3 from "../../../assets/img/project/project_8_3.jpg";
import project_8_4 from "../../../assets/img/project/project_8_4.jpg";
import project_8_5 from "../../../assets/img/project/project_8_5.jpg";
import project_8_6 from "../../../assets/img/project/project_8_6.jpg";

const CaseStudies = () => {
  return (
    <section className="overflow-hidden space" id="project-sec">
      <div className="container th-container4">
        <div className="row justify-content-lg-between justify-content-center align-items-center">
          <div className="col-lg-6 col-sm-9 pe-xl-5">
            <div className="title-area text-center text-lg-start">
              <span className="sub-title sub-title3 style1">Case Studies</span>
              <h2 className="sec-title">Discover Our Latest Projects</h2>
            </div>
          </div>
          <div className="col-auto">
            <div className="sec-btn">
              <a
                href="project.html"
                className="th-btn style-radius text-capitalize"
              >
                All Case Studies
              </a>
            </div>
          </div>
        </div>
        <div className="row gy-4 filter-active">
          <div className="col-md-6 col-xxl-auto filter-item">
            <div className="project-card2">
              <div className="project-img">
                <img src={project_8_1} alt="project image" />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xxl-auto filter-item">
            <div className="project-card2">
              <div className="project-img">
                <img src={project_8_2} alt="project image" />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xxl-auto filter-item">
            <div className="project-card2">
              <div className="project-img">
                <img src={project_8_3} alt="project image" />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xxl-auto filter-item">
            <div className="project-card2">
              <div className="project-img">
                <img src={project_8_4} alt="project image" />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xxl-auto filter-item">
            <div className="project-card2">
              <div className="project-img">
                <img src={project_8_5} alt="project image" />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xxl-auto filter-item">
            <div className="project-card2">
              <div className="project-img">
                <img src={project_8_6} alt="project image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
