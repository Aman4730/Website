import React from "react";
import MobileAbout from "./MobileAbout/MobileAbout";
import MobileAbout1 from "./MobileAbout/MobileAbout1";
import MobileAbout2 from "./MobileAbout/MobileAbout2";
import MobileAbout3 from "./MobileAbout/MobileAbout3";
import KeyFeature from "./KeyFeature";

const MobileComponents = () => {
  return (
    <>
      <MobileAbout />
      <div className="space-top">
        <div className="why-sec-4" data-bg-src="assets/img/bg/why_bg_8.png">
          <div className="container th-container4">
            <div className="row justify-content-center">
              <div className="col-xl-5">
                <div className="title-area text-center">
                  <span className="sub-title">WHY CHOOSE APP</span>
                  <h2 className="sec-title">
                    Why Web<span className="text-theme fw-medium">Teck</span> Is
                    The Right Choice For You
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="why-feature-wrap-4-1">
                  <div className="about-feature style3">
                    <div className="about-feature_icon">
                      <img src="assets/img/icon/why-8-1.svg" alt="icon" />
                    </div>
                    <div className="media-body">
                      <h3 className="about-feature_title">
                        Extensions &amp; Addons
                      </h3>
                      <p className="about-feature_text">
                        Integrate analytics tools such as Google Analytics to
                        track visitor behavior.
                      </p>
                    </div>
                  </div>
                  <div className="about-feature style3">
                    <div className="about-feature_icon">
                      <img src="assets/img/icon/why-8-2.svg" alt="icon" />
                    </div>
                    <div className="media-body">
                      <h3 className="about-feature_title">Fast &amp; Easy</h3>
                      <p className="about-feature_text">
                        Integrate analytics tools such as Google Analytics to
                        track visitor behavior.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 order-lg-3">
                <div className="why-feature-wrap-4-2">
                  <div className="about-feature style3">
                    <div className="about-feature_icon">
                      <img src="assets/img/icon/why-8-3.svg" alt="icon" />
                    </div>
                    <div className="media-body">
                      <h3 className="about-feature_title">
                        Friendly Interface
                      </h3>
                      <p className="about-feature_text">
                        Integrate analytics tools such as Google Analytics to
                        track visitor behavior.
                      </p>
                    </div>
                  </div>
                  <div className="about-feature style3">
                    <div className="about-feature_icon">
                      <img src="assets/img/icon/why-8-4.svg" alt="icon" />
                    </div>
                    <div className="media-body">
                      <h3 className="about-feature_title">Saved Replies</h3>
                      <p className="about-feature_text">
                        Integrate analytics tools such as Google Analytics to
                        track visitor behavior.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 order-lg-2">
                <div className="why-thumb-4">
                  <img src="assets/img/normal/why_8_1.png" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MobileAbout1 />
      <MobileAbout2 />
      <MobileAbout3 />
      <section className="space">
        <div className="container">
          <div className="title-area text-center">
            <span className="sub-title">Customer Feedbacks</span>
            <h2 className="sec-title">Loved by our customer worldwide</h2>
          </div>
          <div className="slider-area testi-grid2-area">
            <div className="testi-indicator">
              <div
                className="swiper th-slider testi-grid2-thumb"
                data-slider-options='{"effect":"slide","slidesPerView":"5","spaceBetween":13,"loop":true,"breakpoints":{"0":{"slidesPerView":4},"576":{"slidesPerView":"5"}}}'
                data-slider-tab="#testiSlide1"
              >
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="box-img">
                      <img
                        src="assets/img/testimonial/testi_1_1.png"
                        alt="Image"
                      />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="box-img">
                      <img
                        src="assets/img/testimonial/testi_1_2.png"
                        alt="Image"
                      />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="box-img">
                      <img
                        src="assets/img/testimonial/testi_1_3.png"
                        alt="Image"
                      />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="box-img">
                      <img
                        src="assets/img/testimonial/testi_1_4.png"
                        alt="Image"
                      />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="box-img">
                      <img
                        src="assets/img/testimonial/testi_1_5.png"
                        alt="Image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="swiper th-slider"
              id="testiSlide7"
              data-slider-options='{"effect":"slide","loop":true,"thumbs":{"swiper":".testi-grid2-thumb"},"breakpoints":{"0":{"autoHeight":true},"576":{"autoHeight":false}}}'
            >
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="testi-card2">
                    <p className="testi-card2_text">
                      I've had the pleasure of working with Webteck for the past
                      year, and I can confidently say that they have been
                      instrumental in the success of our IT initiatives. As a
                      startup, we needed a technology partner that could not
                      only meet our immediate needs but also grow with us as we
                      expand our business. Webteck has exceeded our expectations
                      on every front.
                    </p>
                    <div className="testi-card2_profile">
                      <div className="testi-card2_content">
                        <h3 className="box-title">Michel Jane Alum</h3>
                        <span className="testi-card2_desig">
                          CTO of Portfolio
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testi-card2">
                    <p className="testi-card2_text">
                      If you have specific questions about gathering or
                      analyzing customer feedback, or if you're looking for
                      general information on the importance of customer
                      feedback, feel free to ask. Additionally, if you have a
                      sample of customer feedback that you'd like assistance
                      with, you can share it, and I can provide insights or
                      suggestions based on you provide
                    </p>
                    <div className="testi-card2_profile">
                      <div className="testi-card2_content">
                        <h3 className="box-title">Alex Michel</h3>
                        <span className="testi-card2_desig">Founder CEO</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testi-card2">
                    <p className="testi-card2_text">
                      It sounds like you're expressing positive feedback or a
                      statement about a product or service being loved by
                      customers worldwide. If this is a statement you want to
                      share or discuss, it's great to highlight positive
                      feedback! Customer satisfaction and positive testimonials
                      can be powerful assets for a product or services
                      businesses I'm here to help!
                    </p>
                    <div className="testi-card2_profile">
                      <div className="testi-card2_content">
                        <h3 className="box-title">Jenny Wilson</h3>
                        <span className="testi-card2_desig">
                          Project Manager
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testi-card2">
                    <p className="testi-card2_text">
                      If you have a specific question or if there's more
                      information you'd like to provide or discuss regarding
                      your product or service being loved by customers
                      worldwide, feel free to share more details. Whether you're
                      looking for advice on how to leverage this positive
                      feedback, strategies to maintain customer satisfaction, or
                      any other related
                    </p>
                    <div className="testi-card2_profile">
                      <div className="testi-card2_content">
                        <h3 className="box-title">Savannah Nguyen</h3>
                        <span className="testi-card2_desig">
                          UI/UX Designer
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testi-card2">
                    <p className="testi-card2_text">
                      It's fantastic to hear that your product or service is
                      loved by customers worldwide! Positive customer feedback
                      is a strong indicator of satisfaction and can contribute
                      significantly to the success and reputation of a business.
                      If you're looking to capitalize on this positive
                      sentiment, here are a few as we expand our business topic,
                      Positive customer feedback I'm here
                    </p>
                    <div className="testi-card2_profile">
                      <div className="testi-card2_content">
                        <h3 className="box-title">Cameron Williamson</h3>
                        <span className="testi-card2_desig">
                          Disaster Recovery
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                data-slider-prev="#testiSlide7"
                className="slider-arrow slider-prev"
              >
                <i className="far fa-arrow-left" />
              </button>
              <button
                data-slider-next="#testiSlide7"
                className="slider-arrow slider-next"
              >
                <i className="far fa-arrow-right" />
              </button>
            </div>
            <div className="testi-line" />
          </div>
        </div>
      </section>
      <KeyFeature />
    </>
  );
};

export default MobileComponents;
