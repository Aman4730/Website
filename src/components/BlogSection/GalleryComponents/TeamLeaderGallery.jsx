import React from "react";
import project_11_1 from "../../../assets/img/project/project_11_1.jpg";
import project_11_2 from "../../../assets/img/project/project_11_2.jpg";
import project_11_3 from "../../../assets/img/project/project_11_3.jpg";
import project_11_4 from "../../../assets/img/project/project_11_4.jpg";
import shan from "../../../Imges/GalleryImg/shan.png";

const TeamLeaderGallery = () => {
  return (
    <section className="overflow-hidden space-bottom" id="project-sec">
      <div className="container th-container4">
        <div className="title-area text-center">
          <span className="sub-title sub-title5">our project</span>
          <h2 className="sec-title">Discover Our Latest Projects</h2>
        </div>
        <div className="row d-flex">
          <div className="col-md-6 col-xxl-auto filter-item">
            <div className="project-card style3">
              <div className="project-img">
                <img src={project_11_1} alt="project image" />
              </div>
              <div className="project-content-wrap">
                <div className="project-content">
                  <p className="project-subtitle">Digital Marketing</p>
                  <h3 className="box-title">
                    <a href="project-details.html">Social Media Marketing</a>
                  </h3>
                </div>
              </div>
              <a href={project_11_1} className="icon-btn popup-image">
                <i className="fa-solid fa-arrow-up-right" />
              </a>
            </div>
          </div>
          <div className="col-md-6 col-xxl filter-item">
            <div className="row gy-4">
              <div className="col-md-12">
                <div className="project-card style3">
                  <div className="project-img">
                    <img src={shan} alt="project image" />
                  </div>
                  <div className="project-content-wrap">
                    <div className="project-content">
                      <p className="project-subtitle">Digital Marketing</p>
                      <h3 className="box-title">
                        <a href="project-details.html">Website developments</a>
                      </h3>
                    </div>
                  </div>
                  <a href={project_11_2} className="icon-btn popup-image">
                    <i className="fa-solid fa-arrow-up-right" />
                  </a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="project-card style3">
                  <div className="project-img">
                    <img src={project_11_3} alt="project image" />
                  </div>
                  <div className="project-content-wrap">
                    <div className="project-content">
                      <p className="project-subtitle">Digital Marketing</p>
                      <h3 className="box-title">
                        <a href="project-details.html">Website Design</a>
                      </h3>
                    </div>
                  </div>
                  <a href={project_11_3} className="icon-btn popup-image">
                    <i className="fa-solid fa-arrow-up-right" />
                  </a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="project-card style3">
                  <div className="project-img">
                    <img src={project_11_4} alt="project image" />
                  </div>
                  <div className="project-content-wrap">
                    <div className="project-content">
                      <p className="project-subtitle">Digital Marketing</p>
                      <h3 className="box-title">
                        <a href="project-details.html">SEO Optimization</a>
                      </h3>
                    </div>
                  </div>
                  <a href={project_11_4} className="icon-btn popup-image">
                    <i className="fa-solid fa-arrow-up-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamLeaderGallery;
