import React from "react";

const ChooseUS = () => {
  return (
    <div className="faq-area position-relative space" id="faq-sec">
      <div className="container th-container4">
        <div className="row">
          <div className="col-xl-6">
            <div className="faq-img7 mb-xl-0 mt-xl-0 mt-n4 pe-xl-5 me-xl-1">
              <div className="img1">
                <img src="assets/img/normal/faq_6_1.jpg" alt="About" />
                <div className="img2 jump">
                  <img src="assets/img/normal/faq_6_2.jpg" alt="About" />
                </div>
                <div className="img3 movingX">
                  <img src="assets/img/normal/faq_6_3.jpg" alt="About" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div class="title-area mb-35 text-center text-xl-start">
              <div class="shadow-title">ABOUT US</div>
              <span class="sub-title">
                <div class="icon-masking me-2">
                  <img
                    src="assets/img/theme-img/title_shape_2.svg"
                    alt="shape"
                  />
                </div>
                WHY CHOOSE US?
              </span>
              <h2 class="sec-title">
                Maximizing Your Success Benefits of Partnering with
                <span class="text-theme"> Logimetrix</span>
              </h2>
            </div>
            <div className="accordion" id="faqAccordion">
              <div className="accordion-card style7">
                <div className="accordion-header" id="collapse-item-1">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-1"
                    aria-expanded="true"
                    aria-controls="collapse-1"
                  >
                    Do I need a marketing degree to use Webteck?
                  </button>
                </div>
                <div
                  id="collapse-1"
                  className="accordion-collapse collapse show"
                  aria-labelledby="collapse-item-1"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p className="faq-text">
                      No marketing degree is required! Webteck's intuitive
                      interface and built-in features empower you to create
                      effective marketing campaigns even without prior
                      experience..
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-card style7">
                <div className="accordion-header" id="collapse-item-2">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-2"
                    aria-expanded="false"
                    aria-controls="collapse-2"
                  >
                    What kind of content can I create with Webteck?
                  </button>
                </div>
                <div
                  id="collapse-2"
                  className="accordion-collapse collapse"
                  aria-labelledby="collapse-item-2"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p className="faq-text">
                      As of my last knowledge update in January 2022, Digix
                      refers to DigixGlobal, a company that tokenizes physical
                      assets, primarily gold, on the Ethereum blockchain.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-card style7">
                <div className="accordion-header" id="collapse-item-3">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-3"
                    aria-expanded="false"
                    aria-controls="collapse-3"
                  >
                    Does Webteck integrate with other tools I use?
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
                      Implementing automation for routine and repetitive tasks
                      can significantly reduce manual effort and the risk of
                      errors. This can be achieved through the use of software
                      tools, scripts, or robotic process automation (RPA)
                      systems.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-card style7">
                <div className="accordion-header" id="collapse-item-4">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-4"
                    aria-expanded="false"
                    aria-controls="collapse-4"
                  >
                    What kind of analytics does Webteck offer?
                  </button>
                </div>
                <div
                  id="collapse-4"
                  className="accordion-collapse collapse"
                  aria-labelledby="collapse-item-4"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p className="faq-text">
                      Webteck offers a variety of benefits, including increased
                      productivity, streamlined workflows, enhanced
                      collaboration, improved data-driven decision making, and
                      more.
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

export default ChooseUS;
