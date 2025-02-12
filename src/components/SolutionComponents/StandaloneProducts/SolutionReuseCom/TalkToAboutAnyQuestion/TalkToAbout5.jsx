import React from "react";
import faq_11_1 from "../../../../../assets/img/normal/faq_11_1.png";

const faqData = {
  title: "Talk To About Any",
  highlight: "Question?",
  subtitle: "Frequently Asked Questions",
  image: faq_11_1,
  faqs: [
    {
      question: "What is the difference between SEO and PPC?",
      answer:
        "SEO focuses on improving your website's organic ranking in search results, while PPC involves paid advertising to reach your target audience.",
    },
    {
      question: "How much does digital marketing cost?",
      answer:
        "The cost of digital marketing varies based on the services required, budget, and business needs.",
      defaultOpen: true,
    },
    {
      question: "How do I get started with Webteck?",
      answer:
        "You can get started by reaching out to our support team, choosing the right service, and setting up your strategy with our experts.",
    },
    {
      question: "What is your process for working with clients?",
      answer:
        "We follow a structured approach, starting with consultation, strategy development, execution, and continuous optimization.",
    },
  ],
};

const TalkToAbout5 = () => {
  return (
    <div
      className="position-relative z-index-3 overflow-hidden space"
      id="faq-sec"
    >
      <div className="container th-container4">
        <div className="row gy-5">
          <div className="col-xl-6">
            <div className="title-area">
              <span className="sub-title sub-title5">{faqData.subtitle}</span>
              <h2 className="sec-title">
                {faqData.title}{" "}
                <span className="text-theme fw-normal">
                  {faqData.highlight}
                </span>
              </h2>
            </div>
            <div className="accordion-area style5 accordion" id="faqAccordion">
              {faqData.faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`accordion-card style11 ${
                    faq.defaultOpen ? "active" : ""
                  }`}
                >
                  <div
                    className="accordion-header"
                    id={`collapse-item-${index}`}
                  >
                    <button
                      className={`accordion-button ${
                        faq.defaultOpen ? "" : "collapsed"
                      }`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse-${index}`}
                      aria-expanded={faq.defaultOpen ? "true" : "false"}
                      aria-controls={`collapse-${index}`}
                    >
                      {faq.question}
                    </button>
                  </div>
                  <div
                    id={`collapse-${index}`}
                    className={`accordion-collapse collapse ${
                      faq.defaultOpen ? "show" : ""
                    }`}
                    aria-labelledby={`collapse-item-${index}`}
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
          <div className="col-xl-6">
            <div className="faq-image11">
              <img src={faqData.image} alt="FAQ" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalkToAbout5;
