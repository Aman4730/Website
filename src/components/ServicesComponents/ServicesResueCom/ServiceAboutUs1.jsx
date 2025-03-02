import React from "react";
import about_17_1 from "../../../assets/img/normal/about_17_1.png";
import about_17_2 from "../../../assets/img/normal/about_17_2.png";
import arrow2 from "../../../assets/img/shape/arrow2.png";

const ServiceAboutUs1 = () => {
  return (
    <div className="space" id="about-sec">
      <div className="container th-container4">
        <div className="row gy-5 justify-content-between">
          <div className="col-lg-5">
            <div className="title-area pe-xl-2">
              <span className="sub-title sub-title3 style1">
                Proof of Concept Developmentt
              </span>
              <h2 className="sec-title sec-title2">
                What you get with LOGIMETRIX’ PoC development
                <span>services</span>
              </h2>
            </div>
            <div className="about17-text">
              <span>WEBSITE</span> <span>BRANDING</span> <span>INTERFACE</span>
              <span>ANIMATION</span>
            </div>
          </div>
          <div className="col-lg-5">
            <p className="mt-n2 mb-25">
              LOGIMETRIX' PoC (Proof of Concept) development services are backed
              up by over 12 + years of industry experience and a track record of
              more than 1000 successfully delivered projects. We help you
              predict the success of your software project before making
              substantial investments. We will help you rigorously test your
              ideas so you can avoid the risk of premature investment in
              unproven concepts. Our team of multiskilled R&D experts can also
              assist you in refining your ideas and processes, giving you the
              best chance of success. With our PoC services you can test complex
              ideas, and cloud consulting, including those involving emerging
              technologies like generative AI, with minimal financial risk. Our
              team provides you with predictions and post-PoC development
              analysis to identify the best-fit solution. Additionally, our
              software experts will assist you in developing a roadmap that
              maximises the efficiency of the full-scale project and will help
              deliver your solution.
            </p>
          </div>
        </div>
        <div className="row gy-5">
          <div className="col-xl-6 col-xxl-7">
            <div className="img-box18">
              <div className="img1">
                <img src={about_17_1} alt="" />
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-xxl-5">
            <div className="about17-counter-wrapp">
              <div className="counter-card9-wrap">
                <div className="counter-card9">
                  <div className="media-body">
                    <h3 className="box-number">
                      <span className="counter-number">4-8</span>
                      <span className="text-theme">+</span>
                    </h3>
                    <h6 className="counter-title">Week Delivery</h6>
                    <p className="counter-text">
                      Rapid execution with quality intact.
                    </p>
                  </div>
                </div>
                <div className="counter-card9">
                  <div className="media-body">
                    <h3 className="box-number">
                      <span className="counter-number">150</span>k
                      <span className="text-theme">+</span>
                    </h3>
                    <h6 className="counter-title">Successful PoCs</h6>
                    <p className="counter-text">
                      Proven track record in emerging technologies, driving
                      innovation and excellence.
                    </p>
                  </div>
                </div>
              </div>
              <div className="about17-client-wrapp">
                <div className="cilent-box">
                  <img src={arrow2} alt="" />
                  <div className="about-content">
                    <h4 className="box-title">Cross-Functional Teams</h4>
                    <span className="title">
                      Combining technical and business expertise
                    </span>
                    <div className="about-wrapp">
                      <div className="about_review">
                        <i className="fa-sharp fa-solid fa-star" />
                        <i className="fa-sharp fa-solid fa-star" />
                        <i className="fa-sharp fa-solid fa-star" />
                        <i className="fa-sharp fa-solid fa-star" />
                        <i className="fa-regular fa-star-half-stroke" />
                      </div>
                    </div>
                  </div>
                  <div className="about17-wrapp">
                    <div className="about17-img">
                      <img src={about_17_2} alt="" />
                    </div>
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

export default ServiceAboutUs1;
