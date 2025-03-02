import React from "react";
import title_shape_2 from "../../../assets/img/theme-img/title_shape_2.svg";
import process_line_2 from "../../../assets/img/bg/process_line_2.svg";

const ServiceLanguage = ({ languages }) => {
  return (
    <section
      className="space"
      id="process-sec"
      style={{ background: "#ffffff" }}
    >
      <div className="container">
        <div className="title-area text-center">
          <div className="shadow-title">PROCESS</div>
          <span className="sub-title">
            <div className="icon-masking me-2">
              <img src={title_shape_2} alt="shape" />
            </div>
            WORK PROCESS
          </span>
          <h2 className="sec-title">
            How to work <span className="text-theme">it!</span>
          </h2>
        </div>
        <div className="process-card-area">
          <div className="process-line position-top">
            <img src={process_line_2} alt="line" />
          </div>
          <div className="row gy-40 justify-content-between">
            {languages?.map((lang, index) => (
              <div
                key={index}
                className="col-sm-6 col-xl-auto process-card-wrap"
              >
                <div className="process-card">
                  <div className="pulse" />
                  <div className="process-card_icon">
                    <img
                      src={lang.img}
                      alt={lang.name}
                      style={{ width: "90px", height: "90px" }}
                    />
                  </div>
                  <h2 className="box-title" style={{ fontSize: "20px" }}>
                    {lang.name}
                  </h2>
                  <p className="process-card_text">{lang.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceLanguage;
