import React from "react";

const SolAbout2 = ({ aboutData }) => {
  return (
    <div className="space-bottom" id="about-sec">
      <div className="container th-container4">
        <div className="row align-items-center">
          <div className="col-xl-7">
            <div className="img-box14">
              {aboutData.images.map((img, index) => (
                <div key={index} className={`img${index + 1}`}>
                  <img src={img} alt="About" />
                </div>
              ))}
              {aboutData.shapeImages.map((shape, index) => (
                <div key={index} className={`shape${index + 1}`}>
                  <img src={shape} alt="Shape" />
                </div>
              ))}
            </div>
          </div>
          <div className="col-xl-5">
            <div className="title-area mb-35">
              <span className="sub-title sub-title3 style1">
                {aboutData.title}
              </span>
              <h2 className="sec-title">
                {aboutData.subtitle.split(" ").slice(0, -1).join(" ")}
                <span className="text-theme">
                  {aboutData.subtitle.split(" ").slice(-1)}
                </span>
              </h2>
            </div>
            <p className="mt-n2 mb-25">{aboutData.description}</p>
            <h6 className="text-theme fw-semibold mb-30">
              Customizable Quiz Creation and Assessment Management
            </h6>
            <div className="checklist style8 mb-40">
              <ul>
                {aboutData.features.map((feature, index) => (
                  <li key={index}>
                    <i className="fa-light fa-square-check" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="btn-group">
              <a
                href={aboutData.demoLink}
                className="th-btn popup-video style-radius fs-16 text-capitalize"
              >
                <i className="fa-solid fa-circle-play me-2" />
                View Demo
              </a>
              <a
                href={aboutData.trialLink}
                className="th-btn style10 fs-16 text-capitalize"
                target="_blank"
              >
                Try for free
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolAbout2;
