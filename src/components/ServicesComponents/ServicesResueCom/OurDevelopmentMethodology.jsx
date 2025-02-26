import React from "react";
import process_line_3 from "../../../assets/img/bg/process_line_3.svg";
import process_box_3_1 from "../../../assets/img/icon/process_box_3_1.svg";
import process_box_3_2 from "../../../assets/img/icon/process_box_3_2.svg";
import process_box_3_3 from "../../../assets/img/icon/process_box_3_3.svg";
const OurDevelopmentMethodology = () => {
  return (
    <section
      className="process-area-3 overflow-hidden space-bottom"
      style={{ paddingTop: "50px" }}
    >
      <div className="container th-container4">
        <div className="title-area text-xl-start text-center">
          <span className="sub-title">Stockie Operation Across the world</span>
          <h2 className="sec-title">Our Solution for your business</h2>
          <p className="sec-text mt-25">
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy.
          </p>
          <a href="contact.html" className="th-btn style-radius">
            Get Started Now
          </a>
        </div>
        <div className="process-card-area3">
          <div className="process-line position-top">
            <img src={process_line_3} alt="line" />
          </div>
          <div className="row gy-40 justify-content-xl-between justify-content-center">
            <div className="col-md-6 col-xl-auto process-card-wrap">
              <div className="process-card style3">
                <div className="process-card_icon">
                  <img src={process_box_3_1} alt="icon" />
                </div>
                <div className="process-card_number">1</div>
                <h2 className="box-title">Finance Security</h2>
                <p className="process-card_text">
                  Party we years to order allow asked of. We so opinion friends
                  me message as delight. sit abet pulvinar arco dap bus.
                </p>
                <a href="service-details.html" className="link-btn">
                  Learn More
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto process-card-wrap">
              <div className="process-card style3">
                <div className="process-card_icon">
                  <img src={process_box_3_2} alt="icon" />
                </div>
                <div className="process-card_number">2</div>
                <h2 className="box-title">Synchronization</h2>
                <p className="process-card_text">
                  His defective nor convinced residence own. Connection has put
                  impossible own apartments boisterous.
                </p>
                <a href="service-details.html" className="link-btn">
                  Learn More
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto process-card-wrap">
              <div className="process-card style3">
                <div className="process-card_icon">
                  <img src={process_box_3_3} alt="icon" />
                </div>
                <div className="process-card_number">3</div>
                <h2 className="box-title">Cloud Drive</h2>
                <p className="process-card_text">
                  From they fine john he give of rich he. They age and draw mrs
                  like. Improving end distrusts may instantly.
                </p>
                <a href="service-details.html" className="link-btn">
                  Learn More
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurDevelopmentMethodology;
