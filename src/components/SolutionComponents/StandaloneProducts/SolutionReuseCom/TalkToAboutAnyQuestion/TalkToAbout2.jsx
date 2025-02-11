import React from "react";
import about_3_1 from "../../../../../assets/img/normal/about_3_1.png";
import faq_1_1 from "../../../../../assets/img/normal/faq_1_1.png";
import title_shape_2 from "../../../../../assets/img/theme-img/title_shape_2.svg";
import tech_shape_5 from "../../../../../assets/img/shape/tech_shape_5.png";
const TalkToAbout2 = ({ TalkToAbout2Array }) => {
  return (
    <div className="bg-smoke overflow-hidden space" id="faq-sec">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-9">
            <div className="title-area text-center text-xl-start">
              <span className="sub-title">
                <div className="icon-masking me-2">
                  <img src={title_shape_2} alt="shape" />
                </div>
                Frequently Asked Questions
              </span>
              <h2 className="sec-title">
                Talk To About Any
                <span className="text-theme fw-normal"> Question?</span>
              </h2>
            </div>
            <div className="accordion-area accordion" id="faqAccordion">
              {TalkToAbout2Array.map((faq, index) => (
                <div
                  key={faq.id}
                  className={`accordion-card ${index === 1 ? "active" : ""}`}
                >
                  <div
                    className="accordion-header"
                    id={`collapse-item-${faq.id}`}
                  >
                    <button
                      className={`accordion-button ${
                        index === 1 ? "" : "collapsed"
                      }`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse-${faq.id}`}
                      aria-expanded={index === 1 ? "true" : "false"}
                      aria-controls={`collapse-${faq.id}`}
                    >
                      {faq.question}
                    </button>
                  </div>
                  <div
                    id={`collapse-${faq.id}`}
                    className={`accordion-collapse collapse ${
                      index === 1 ? "show" : ""
                    }`}
                    aria-labelledby={`collapse-item-${faq.id}`}
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p className="faq-text">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
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
    </div>
  );
};

export default TalkToAbout2;
