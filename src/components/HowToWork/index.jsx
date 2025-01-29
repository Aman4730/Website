import React from "react";

const HowToWork = () => {
  return (
    <section className="space" id="process-sec">
      <div className="container">
        <div className="title-area text-center">
          <div className="shadow-title">PROCESS</div>
          <span className="sub-title">
            <div className="icon-masking me-2">
              <img src="assets/img/theme-img/title_shape_2.svg" alt="shape" />
            </div>
            WORK PROCESS
          </span>
          <h2 className="sec-title">
            How to work <span className="text-theme">it!</span>
          </h2>
        </div>
        <div className="process-card-area">
          <div className="process-line position-top">
            <img src="assets/img/bg/process_line_2.svg" alt="line" />
          </div>
          <div className="row gy-40 justify-content-between">
            <div className="col-sm-6 col-xl-auto process-card-wrap">
              <div className="process-card">
                <div className="pulse" />
                <div className="process-card_icon">
                  <img src="assets/img/icon/process_box_1.png" alt="icon" />
                </div>
                <h2 className="box-title">Select a project</h2>
                <p className="process-card_text">
                  Continua scale empowered metrics with cost effective
                  innovation.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-xl-auto process-card-wrap">
              <div className="process-card">
                <div className="pulse" />
                <div className="process-card_icon">
                  <img src="assets/img/icon/process_box_2.png" alt="icon" />
                </div>
                <h2 className="box-title">Project analysis</h2>
                <p className="process-card_text">
                  Continua scale empowered metrics with cost effective
                  innovation.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-xl-auto process-card-wrap">
              <div className="process-card">
                <div className="pulse" />
                <div className="process-card_icon">
                  <img src="assets/img/icon/process_box_3.png" alt="icon" />
                </div>
                <h2 className="box-title">Plan Execute</h2>
                <p className="process-card_text">
                  Continua scale empowered metrics with cost effective
                  innovation.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-xl-auto process-card-wrap">
              <div className="process-card">
                <div className="pulse" />
                <div className="process-card_icon">
                  <img src="assets/img/icon/process_box_4.png" alt="icon" />
                </div>
                <h2 className="box-title">Deliver result</h2>
                <p className="process-card_text">
                  Continua scale empowered metrics with cost effective
                  innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToWork;
