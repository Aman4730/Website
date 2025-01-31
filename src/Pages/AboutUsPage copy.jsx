import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import team from "../Imges/team.jpg";
import team1 from "../Imges/team1.png";
import team2 from "../Imges/team2.jpg";
import team3 from "../Imges/team3.jpg";
import team4 from "../Imges/team4.jpeg";
const teamMembers = [
  {
    name: "Shantanu Kumar",
    role: "Founder",
    image: team1,
    socialLinks: {
      facebook: "https://facebook.com/rayanathels",
      twitter: "https://twitter.com/rayanathels",
      instagram: "https://instagram.com/rayanathels",
      linkedin: "https://www.linkedin.com/in/shantanurai/",
    },
  },
  {
    name: "Richa Rai",
    role: "CTO",
    image: team,
    socialLinks: {
      facebook: "https://facebook.com/rayanathels",
      twitter: "https://twitter.com/rayanathels",
      instagram: "https://instagram.com/rayanathels",
      linkedin: "https://www.linkedin.com/in/richa-rai-94036123/",
    },
  },
  {
    name: "Vipul Rai",
    role: "CEO",
    image: team4,
    socialLinks: {
      facebook: "https://facebook.com/rayanathels",
      twitter: "https://twitter.com/rayanathels",
      instagram: "https://instagram.com/rayanathels",
      linkedin: "https://www.linkedin.com/in/vipul-rai/",
    },
  },
  {
    name: "Yash Trivedi",
    role: "BDE",
    image: team2,
    socialLinks: {
      facebook: "https://facebook.com/rayanathels",
      twitter: "https://twitter.com/rayanathels",
      instagram: "https://instagram.com/rayanathels",
      linkedin: "https://www.linkedin.com/in/yashtrivedibd/",
    },
  },
  {
    name: "Sandipan Basu",
    role: "President & Mentor",
    image: team3,
    socialLinks: {
      facebook: "https://facebook.com/rayanathels",
      twitter: "https://twitter.com/rayanathels",
      instagram: "https://instagram.com/rayanathels",
      linkedin: "https://www.linkedin.com/in/sandipan-basu-b67323335/",
    },
  },
];

const AboutUsPage = () => {
  return (
    <>
      <div
        className="breadcumb-wrapper"
        style={{
          backgroundImage: "url('assets/img/bg/breadcumb-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px",
          width: "100%",
        }}
      >
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">About Us</h1>
            <ul className="breadcumb-menu">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>About Us</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="overflow-hidden space" id="about-sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 mb-30 mb-xl-0">
              <div className="img-box1">
                <div className="img1">
                  <img src="assets/img/normal/about_1_1.png" alt="About" />
                </div>
                <div className="shape1">
                  <img src="assets/img/normal/about_shape_1.png" alt="shape" />
                </div>
                <div className="year-counter">
                  <h3 className="year-counter_number">
                    <span className="counter-number">25</span>
                  </h3>
                  <p className="year-counter_text">Years Experience</p>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="ps-xxl-4 ms-xl-3">
                <div class="title-area mb-35 text-center text-xl-start">
                  <div class="shadow-title">ABOUT US</div>
                  <span class="sub-title">
                    <div class="icon-masking me-2">
                      <img
                        src="assets/img/theme-img/title_shape_2.svg"
                        alt="shape"
                      />
                    </div>
                    About Logimetrix IT SOLUTIONS
                  </span>
                  <h2 class="sec-title">
                    The Best IT Solution With 14 Years of
                    <span class="text-theme"> Experience.</span>
                  </h2>
                </div>
                <p className="mt-n2 mb-25">
                  Collaboratively envisioneer user friendly supply chains and
                  cross unit imperative. Authoritativel fabricate competitive
                  resource and holistic synergy. Uniquely generate efficient
                  schemas before future.
                </p>
                <div className="about-feature-wrap">
                  <div className="about-feature">
                    <div className="about-feature_icon">
                      <img
                        src="assets/img/icon/about_feature_1_1.svg"
                        alt="Icon"
                      />
                    </div>
                    <div className="media-body">
                      <h3 className="about-feature_title">Certified Company</h3>
                      <p className="about-feature_text">
                        Best Provide Skills Services
                      </p>
                    </div>
                  </div>
                  <div className="about-feature">
                    <div className="about-feature_icon">
                      <img
                        src="assets/img/icon/about_feature_1_2.svg"
                        alt="Icon"
                      />
                    </div>
                    <div className="media-body">
                      <h3 className="about-feature_title">Expart Team</h3>
                      <p className="about-feature_text">100% Expert Team</p>
                    </div>
                  </div>
                </div>
                <div className="btn-group">
                  <a href="about.html" className="th-btn">
                    DISCOVER MORE
                    <i className="fa-regular fa-arrow-right ms-2" />
                  </a>
                  <div className="call-btn">
                    <div className="play-btn">
                      <i className="fas fa-phone" />
                    </div>
                    <div className="media-body">
                      <span className="btn-text">Call Us On:</span>
                      <a href="tel:+19088000393" className="btn-title">
                        +190-8800-0393
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="team-sec space">
        <div className="container z-index-common">
          <div className="title-area text-center">
            <span className="sub-title">
              <div className="icon-masking me-2">
                <img src="assets/img/theme-img/title_shape_1.svg" alt="shape" />
              </div>
              TEAM MEMBER
            </span>
            <h2 className="sec-title">
              See Our Skilled Expert <span className="text-theme">Team</span>
            </h2>
          </div>

          <div className="slider-area">
            <Swiper
              modules={[Navigation]}
              navigation={{
                nextEl: ".slider-next",
                prevEl: ".slider-prev",
              }}
              loop={true}
              breakpoints={{
                0: { slidesPerView: 1 },
                576: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                992: { slidesPerView: 3 },
                1200: { slidesPerView: 4 },
              }}
              className="th-slider has-shadow"
            >
              {teamMembers.map((member, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="th-team team-card"
                    style={{
                      marginRight: "20px",
                    }}
                  >
                    <div className="team-img">
                      <img
                        src={member.image}
                        alt={member.name}
                        style={{
                          width: "100%",
                          height: "300px",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <div className="team-content">
                      <div className="team-social">
                        {member.socialLinks.facebook && (
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={member.socialLinks.facebook}
                          >
                            <i className="fab fa-facebook-f" />
                          </a>
                        )}
                        {member.socialLinks.twitter && (
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={member.socialLinks.twitter}
                          >
                            <i className="fab fa-twitter" />
                          </a>
                        )}
                        {member.socialLinks.instagram && (
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={member.socialLinks.instagram}
                          >
                            <i className="fab fa-instagram" />
                          </a>
                        )}
                        {member.socialLinks.linkedin && (
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={member.socialLinks.linkedin}
                          >
                            <i className="fab fa-linkedin-in" />
                          </a>
                        )}
                      </div>
                      <h3 className="box-title">
                        <a href="team-details.html">{member.name}</a>
                      </h3>
                      <span className="team-desig">{member.role}</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <button className="slider-arrow style3 slider-prev">
              <i className="far fa-arrow-left" />
            </button>
            <button className="slider-arrow style3 slider-next">
              <i className="far fa-arrow-right" />
            </button>
          </div>
        </div>
      </section>
      <div
        className="bg-theme space-extra"
        data-bg-src="assets/img/bg/counter_bg_1.png"
      >
        <div className="container py-2">
          <div className="row gy-40 justify-content-between">
            <div className="col-6 col-lg-auto">
              <div className="counter-card">
                <div className="counter-card_icon">
                  <img src="assets/img/icon/counter_1_1.svg" alt="Icon" />
                </div>
                <div className="media-body">
                  <h2 className="counter-card_number">
                    <span className="counter-number">986</span>+
                  </h2>
                  <p className="counter-card_text">Finished Project</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-auto">
              <div className="counter-card">
                <div className="counter-card_icon">
                  <img src="assets/img/icon/counter_1_2.svg" alt="Icon" />
                </div>
                <div className="media-body">
                  <h2 className="counter-card_number">
                    <span className="counter-number">896</span>+
                  </h2>
                  <p className="counter-card_text">Happy Clients</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-auto">
              <div className="counter-card">
                <div className="counter-card_icon">
                  <img src="assets/img/icon/counter_1_3.svg" alt="Icon" />
                </div>
                <div className="media-body">
                  <h2 className="counter-card_number">
                    <span className="counter-number">396</span>+
                  </h2>
                  <p className="counter-card_text">Skilled Experts</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-auto">
              <div className="counter-card">
                <div className="counter-card_icon">
                  <img src="assets/img/icon/counter_1_4.svg" alt="Icon" />
                </div>
                <div className="media-body">
                  <h2 className="counter-card_number">
                    <span className="counter-number">496</span>+
                  </h2>
                  <p className="counter-card_text">Honorable Awards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="space" data-bg-src="assets/img/bg/why_bg_1.png">
        <div className="container">
          <div className="row align-items-center flex-row-reverse">
            <div className="col-xxl-7 col-xl-6 mb-30 mb-xl-0">
              <div className="img-box2">
                <div className="img1">
                  <img src="assets/img/normal/why_1_1.jpg" alt="Why" />
                </div>
              </div>
            </div>
            <div className="col-xxl-5 col-xl-6">
              <div className="title-area mb-35">
                <span className="sub-title">
                  <div className="icon-masking me-2">
                    <span
                      className="mask-icon"
                      data-mask-src="assets/img/theme-img/title_shape_1.svg"
                    />
                    <img
                      src="assets/img/theme-img/title_shape_1.svg"
                      alt="shape"
                    />
                  </div>
                  WHY CHOOSE US
                </span>
                <h2 className="sec-title">
                  We Deal With The Aspects Professional
                  <span className="text-theme">IT Services</span>
                </h2>
              </div>
              <p className="mt-n2 mb-30">
                Collaboratively envisioneer user friendly supply chains and
                cross unit imperative. Authoritativel fabricate competitive
                resource and holistic.
              </p>
              <div className="two-column">
                <div className="checklist style2">
                  <ul>
                    <li>
                      <i className="far fa-check" /> Big Data Analysis
                    </li>
                    <li>
                      <i className="far fa-check" /> 24/7 Online Support
                    </li>
                    <li>
                      <i className="far fa-check" /> Business Improvement
                    </li>
                  </ul>
                </div>
                <div className="checklist style2">
                  <ul>
                    <li>
                      <i className="far fa-check" /> High Quality Sicurity
                    </li>
                    <li>
                      <i className="far fa-check" /> 24/7 Support Team
                    </li>
                    <li>
                      <i className="far fa-check" /> Easy Solutions
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section
        className="bg-top-center space"
        data-bg-src="assets/img/bg/testi_bg_3.jpg"
      >
        <div className="container">
          <div className="title-area text-center">
            <div className="shadow-title color2">TESTIMONIALS</div>
            <span className="sub-title">
              <div className="icon-masking me-2">
                <span
                  className="mask-icon"
                  data-mask-src="assets/img/theme-img/title_shape_2.svg"
                />
                <img src="assets/img/theme-img/title_shape_2.svg" alt="shape" />
              </div>
              CUSTOMER FEEDBACK
            </span>
            <h2 className="sec-title text-white">
              What Happy Clients Says
              <br />
              <span className="text-theme">About Us?</span>
            </h2>
          </div>
          <div className="slider-area">
            <div
              className="swiper th-slider has-shadow"
              id="testiSlider3"
              data-slider-options='{"loop":true,"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"1"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"2"},"1200":{"slidesPerView":"3"}}}'
            >
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="testi-grid">
                    <div className="testi-grid_img">
                      <img
                        src="assets/img/testimonial/testi_3_1.jpg"
                        alt="Avater"
                      />
                      <div className="testi-grid_quote">
                        <img
                          src="assets/img/icon/quote_left_3.svg"
                          alt="quote"
                        />
                      </div>
                    </div>
                    <div className="testi-grid_review">
                      <i className="fa-solid fa-star-sharp" />
                      <i className="fa-solid fa-star-sharp" />
                      <i className="fa-solid fa-star-sharp" />
                      <i className="fa-solid fa-star-sharp" />
                      <i className="fa-solid fa-star-sharp" />
                    </div>
                    <div className="testi-grid_content">
                      <p className="testi-grid_text">
                        Objectively visualize error-free technology for B2B
                        alignment. Monotonectally harness an expanded array of
                        models via effective collaboration. Globally synergize
                        resource sucking value via cutting-edge.
                      </p>
                      <h3 className="box-title">David Farnandes</h3>
                      <p className="testi-grid_desig">CEO at Anaton</p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testi-grid">
                    <div className="testi-grid_img">
                      <img
                        src="assets/img/testimonial/testi_3_2.jpg"
                        alt="Avater"
                      />
                      <div className="testi-grid_quote">
                        <img
                          src="assets/img/icon/quote_left_3.svg"
                          alt="quote"
                        />
                      </div>
                    </div>
                    <div className="testi-grid_review">
                      <i className="fa-solid fa-star-sharp" />
                      <i className="fa-solid fa-star-sharp" />
                      <i className="fa-solid fa-star-sharp" />
                      <i className="fa-solid fa-star-sharp" />
                      <i className="fa-solid fa-star-sharp" />
                    </div>
                    <div className="testi-grid_content">
                      <p className="testi-grid_text">
                        Objectively visualize error-free technology for B2B
                        alignment. Monotonectally harness an expanded array of
                        models via effective collaboration. Globally synergize
                        resource sucking value via cutting-edge.
                      </p>
                      <h3 className="box-title">Jackline Techie</h3>
                      <p className="testi-grid_desig">CEO at Kormola</p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testi-grid">
                    <div className="testi-grid_img">
                      <img
                        src="assets/img/testimonial/testi_3_3.jpg"
                        alt="Avater"
                      />
                      <div className="testi-grid_quote">
                        <img
                          src="assets/img/icon/quote_left_3.svg"
                          alt="quote"
                        />
                      </div>
                    </div>
                    <div className="testi-grid_review">
                      <i className="fa-solid fa-star-sharp" />
                      <i className="fa-solid fa-star-sharp" />
                      <i className="fa-solid fa-star-sharp" />
                      <i className="fa-solid fa-star-sharp" />
                      <i className="fa-solid fa-star-sharp" />
                    </div>
                    <div className="testi-grid_content">
                      <p className="testi-grid_text">
                        Objectively visualize error-free technology for B2B
                        alignment. Monotonectally harness an expanded array of
                        models via effective collaboration. Globally synergize
                        resource sucking value via cutting-edge.
                      </p>
                      <h3 className="box-title">Abraham Khalil</h3>
                      <p className="testi-grid_desig">CEO at Anatora</p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testi-grid">
                    <div className="testi-grid_img">
                      <img
                        src="assets/img/testimonial/testi_3_4.jpg"
                        alt="Avater"
                      />
                      <div className="testi-grid_quote">
                        <img
                          src="assets/img/icon/quote_left_3.svg"
                          alt="quote"
                        />
                      </div>
                    </div>
                    <div className="testi-grid_review">
                      <i className="fa-solid fa-star-sharp" />
                      <i className="fa-solid fa-star-sharp" />
                      <i className="fa-solid fa-star-sharp" />
                      <i className="fa-solid fa-star-sharp" />
                      <i className="fa-solid fa-star-sharp" />
                    </div>
                    <div className="testi-grid_content">
                      <p className="testi-grid_text">
                        Objectively visualize error-free technology for B2B
                        alignment. Monotonectally harness an expanded array of
                        models via effective collaboration. Globally synergize
                        resource sucking value via cutting-edge.
                      </p>
                      <h3 className="box-title">Md Sumon Mia</h3>
                      <p className="testi-grid_desig">CEO at Rimasu</p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testi-grid">
                    <div className="testi-grid_img">
                      <img
                        src="assets/img/testimonial/testi_3_1.jpg"
                        alt="Avater"
                      />
                      <div className="testi-grid_quote">
                        <img
                          src="assets/img/icon/quote_left_3.svg"
                          alt="quote"
                        />
                      </div>
                    </div>
                    <div className="testi-grid_review">
                      <i className="fa-solid fa-star-sharp" />
                      <i className="fa-solid fa-star-sharp" />
                      <i className="fa-solid fa-star-sharp" />
                      <i className="fa-solid fa-star-sharp" />
                      <i className="fa-solid fa-star-sharp" />
                    </div>
                    <div className="testi-grid_content">
                      <p className="testi-grid_text">
                        Objectively visualize error-free technology for B2B
                        alignment. Monotonectally harness an expanded array of
                        models via effective collaboration. Globally synergize
                        resource sucking value via cutting-edge.
                      </p>
                      <h3 className="box-title">David Farnandes</h3>
                      <p className="testi-grid_desig">CEO at Anaton</p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testi-grid">
                    <div className="testi-grid_img">
                      <img
                        src="assets/img/testimonial/testi_3_2.jpg"
                        alt="Avater"
                      />
                      <div className="testi-grid_quote">
                        <img
                          src="assets/img/icon/quote_left_3.svg"
                          alt="quote"
                        />
                      </div>
                    </div>
                    <div className="testi-grid_review">
                      <i className="fa-solid fa-star-sharp" />
                      <i className="fa-solid fa-star-sharp" />
                      <i className="fa-solid fa-star-sharp" />
                      <i className="fa-solid fa-star-sharp" />
                      <i className="fa-solid fa-star-sharp" />
                    </div>
                    <div className="testi-grid_content">
                      <p className="testi-grid_text">
                        Objectively visualize error-free technology for B2B
                        alignment. Monotonectally harness an expanded array of
                        models via effective collaboration. Globally synergize
                        resource sucking value via cutting-edge.
                      </p>
                      <h3 className="box-title">Jackline Techie</h3>
                      <p className="testi-grid_desig">CEO at Kormola</p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testi-grid">
                    <div className="testi-grid_img">
                      <img
                        src="assets/img/testimonial/testi_3_3.jpg"
                        alt="Avater"
                      />
                      <div className="testi-grid_quote">
                        <img
                          src="assets/img/icon/quote_left_3.svg"
                          alt="quote"
                        />
                      </div>
                    </div>
                    <div className="testi-grid_review">
                      <i className="fa-solid fa-star-sharp" />
                      <i className="fa-solid fa-star-sharp" />
                      <i className="fa-solid fa-star-sharp" />
                      <i className="fa-solid fa-star-sharp" />
                      <i className="fa-solid fa-star-sharp" />
                    </div>
                    <div className="testi-grid_content">
                      <p className="testi-grid_text">
                        Objectively visualize error-free technology for B2B
                        alignment. Monotonectally harness an expanded array of
                        models via effective collaboration. Globally synergize
                        resource sucking value via cutting-edge.
                      </p>
                      <h3 className="box-title">Abraham Khalil</h3>
                      <p className="testi-grid_desig">CEO at Anatora</p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testi-grid">
                    <div className="testi-grid_img">
                      <img
                        src="assets/img/testimonial/testi_3_4.jpg"
                        alt="Avater"
                      />
                      <div className="testi-grid_quote">
                        <img
                          src="assets/img/icon/quote_left_3.svg"
                          alt="quote"
                        />
                      </div>
                    </div>
                    <div className="testi-grid_review">
                      <i className="fa-solid fa-star-sharp" />
                      <i className="fa-solid fa-star-sharp" />
                      <i className="fa-solid fa-star-sharp" />
                      <i className="fa-solid fa-star-sharp" />
                      <i className="fa-solid fa-star-sharp" />
                    </div>
                    <div className="testi-grid_content">
                      <p className="testi-grid_text">
                        Objectively visualize error-free technology for B2B
                        alignment. Monotonectally harness an expanded array of
                        models via effective collaboration. Globally synergize
                        resource sucking value via cutting-edge.
                      </p>
                      <h3 className="box-title">Md Sumon Mia</h3>
                      <p className="testi-grid_desig">CEO at Rimasu</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              data-slider-prev="#testiSlider3"
              className="slider-arrow style3 slider-prev"
            >
              <i className="far fa-arrow-left" />
            </button>
            <button
              data-slider-next="#testiSlider3"
              className="slider-arrow style3 slider-next"
            >
              <i className="far fa-arrow-right" />
            </button>
          </div>
        </div>
      </section>
      <section
        className="bg-top-right overflow-hidden space-bottom"
        id="blog-sec"
        data-bg-src="assets/img/bg/blog_bg_1.png"
      >
        <div className="container space-bottom">
          <div className="title-area text-center">
            <span className="sub-title">
              <div className="icon-masking me-2">
                <span
                  className="mask-icon"
                  data-mask-src="assets/img/theme-img/title_shape_1.svg"
                />
                <img src="assets/img/theme-img/title_shape_1.svg" alt="shape" />
              </div>
              NEWS &amp; ARTICLES
            </span>
            <h2 className="sec-title">
              Get Every Single Update <span className="text-theme">Blog</span>
            </h2>
          </div>
          <div className="slider-area">
            <div
              className="swiper th-slider has-shadow"
              id="blogSlider1"
              data-slider-options='{"loop":true,"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"1"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"2"},"1200":{"slidesPerView":"3"}}}'
            >
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="blog-card">
                    <div className="blog-img">
                      <img
                        src="assets/img/blog/blog_1_1.jpg"
                        alt="blog image"
                      />
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <a href="blog.html">
                          <i className="fal fa-calendar-days" />
                          15 Jan, 2024
                        </a>
                        <a href="blog.html">
                          <i className="fal fa-comments" />2 Comments
                        </a>
                      </div>
                      <h3 className="box-title">
                        <a href="blog-details.html">
                          Unsatiable entreaties may collecting Power.
                        </a>
                      </h3>
                      <div className="blog-bottom">
                        <a href="blog.html" className="author">
                          <img
                            src="assets/img/blog/author-1-1.png"
                            alt="avater"
                          />
                          By Themeholy
                        </a>
                        <a href="blog-details.html" className="line-btn">
                          Read More
                          <i className="fas fa-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="blog-card">
                    <div className="blog-img">
                      <img
                        src="assets/img/blog/blog_1_2.jpg"
                        alt="blog image"
                      />
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <a href="blog.html">
                          <i className="fal fa-calendar-days" />
                          16 Jan, 2024
                        </a>
                        <a href="blog.html">
                          <i className="fal fa-comments" />3 Comments
                        </a>
                      </div>
                      <h3 className="box-title">
                        <a href="blog-details.html">
                          Regional Manager &amp; limited time management.
                        </a>
                      </h3>
                      <div className="blog-bottom">
                        <a href="blog.html" className="author">
                          <img
                            src="assets/img/blog/author-1-1.png"
                            alt="avater"
                          />
                          By Themeholy
                        </a>
                        <a href="blog-details.html" className="line-btn">
                          Read More
                          <i className="fas fa-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="blog-card">
                    <div className="blog-img">
                      <img
                        src="assets/img/blog/blog_1_3.jpg"
                        alt="blog image"
                      />
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <a href="blog.html">
                          <i className="fal fa-calendar-days" />
                          17 Jan, 2024
                        </a>
                        <a href="blog.html">
                          <i className="fal fa-comments" />2 Comments
                        </a>
                      </div>
                      <h3 className="box-title">
                        <a href="blog-details.html">
                          What’s the Holding Back the It Solution Industry?
                        </a>
                      </h3>
                      <div className="blog-bottom">
                        <a href="blog.html" className="author">
                          <img
                            src="assets/img/blog/author-1-1.png"
                            alt="avater"
                          />
                          By Themeholy
                        </a>
                        <a href="blog-details.html" className="line-btn">
                          Read More
                          <i className="fas fa-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="blog-card">
                    <div className="blog-img">
                      <img
                        src="assets/img/blog/blog_1_4.jpg"
                        alt="blog image"
                      />
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <a href="blog.html">
                          <i className="fal fa-calendar-days" />
                          19 Jan, 2024
                        </a>
                        <a href="blog.html">
                          <i className="fal fa-comments" />4 Comments
                        </a>
                      </div>
                      <h3 className="box-title">
                        <a href="blog-details.html">
                          Latin derived from Cicero's 1st-century BC
                        </a>
                      </h3>
                      <div className="blog-bottom">
                        <a href="blog.html" className="author">
                          <img
                            src="assets/img/blog/author-1-1.png"
                            alt="avater"
                          />
                          By Themeholy
                        </a>
                        <a href="blog-details.html" className="line-btn">
                          Read More
                          <i className="fas fa-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="blog-card">
                    <div className="blog-img">
                      <img
                        src="assets/img/blog/blog_1_1.jpg"
                        alt="blog image"
                      />
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <a href="blog.html">
                          <i className="fal fa-calendar-days" />
                          15 Jan, 2024
                        </a>
                        <a href="blog.html">
                          <i className="fal fa-comments" />2 Comments
                        </a>
                      </div>
                      <h3 className="box-title">
                        <a href="blog-details.html">
                          Unsatiable entreaties may collecting Power.
                        </a>
                      </h3>
                      <div className="blog-bottom">
                        <a href="blog.html" className="author">
                          <img
                            src="assets/img/blog/author-1-1.png"
                            alt="avater"
                          />
                          By Themeholy
                        </a>
                        <a href="blog-details.html" className="line-btn">
                          Read More
                          <i className="fas fa-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="blog-card">
                    <div className="blog-img">
                      <img
                        src="assets/img/blog/blog_1_2.jpg"
                        alt="blog image"
                      />
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <a href="blog.html">
                          <i className="fal fa-calendar-days" />
                          16 Jan, 2024
                        </a>
                        <a href="blog.html">
                          <i className="fal fa-comments" />3 Comments
                        </a>
                      </div>
                      <h3 className="box-title">
                        <a href="blog-details.html">
                          Regional Manager &amp; limited time management.
                        </a>
                      </h3>
                      <div className="blog-bottom">
                        <a href="blog.html" className="author">
                          <img
                            src="assets/img/blog/author-1-1.png"
                            alt="avater"
                          />
                          By Themeholy
                        </a>
                        <a href="blog-details.html" className="line-btn">
                          Read More
                          <i className="fas fa-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="blog-card">
                    <div className="blog-img">
                      <img
                        src="assets/img/blog/blog_1_3.jpg"
                        alt="blog image"
                      />
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <a href="blog.html">
                          <i className="fal fa-calendar-days" />
                          17 Jan, 2024
                        </a>
                        <a href="blog.html">
                          <i className="fal fa-comments" />2 Comments
                        </a>
                      </div>
                      <h3 className="box-title">
                        <a href="blog-details.html">
                          What’s the Holding Back the It Solution Industry?
                        </a>
                      </h3>
                      <div className="blog-bottom">
                        <a href="blog.html" className="author">
                          <img
                            src="assets/img/blog/author-1-1.png"
                            alt="avater"
                          />
                          By Themeholy
                        </a>
                        <a href="blog-details.html" className="line-btn">
                          Read More
                          <i className="fas fa-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="blog-card">
                    <div className="blog-img">
                      <img
                        src="assets/img/blog/blog_1_4.jpg"
                        alt="blog image"
                      />
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <a href="blog.html">
                          <i className="fal fa-calendar-days" />
                          19 Jan, 2024
                        </a>
                        <a href="blog.html">
                          <i className="fal fa-comments" />4 Comments
                        </a>
                      </div>
                      <h3 className="box-title">
                        <a href="blog-details.html">
                          Latin derived from Cicero's 1st-century BC
                        </a>
                      </h3>
                      <div className="blog-bottom">
                        <a href="blog.html" className="author">
                          <img
                            src="assets/img/blog/author-1-1.png"
                            alt="avater"
                          />
                          By Themeholy
                        </a>
                        <a href="blog-details.html" className="line-btn">
                          Read More
                          <i className="fas fa-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              data-slider-prev="#blogSlider1"
              className="slider-arrow style3 slider-prev"
            >
              <i className="far fa-arrow-left" />
            </button>
            <button
              data-slider-next="#blogSlider1"
              className="slider-arrow style3 slider-next"
            >
              <i className="far fa-arrow-right" />
            </button>
          </div>
        </div>
        <div className="container">
          <div className="slider-area text-center">
            <div
              className="swiper th-slider"
              data-slider-options='{"breakpoints":{"0":{"slidesPerView":2},"576":{"slidesPerView":"2"},"768":{"slidesPerView":"3"},"992":{"slidesPerView":"3"},"1200":{"slidesPerView":"4"},"1400":{"slidesPerView":"5"}}}'
            >
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="brand-box">
                    <img
                      src="assets/img/brand/brand_1_1.png"
                      alt="Brand Logo"
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="brand-box">
                    <img
                      src="assets/img/brand/brand_1_2.png"
                      alt="Brand Logo"
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="brand-box">
                    <img
                      src="assets/img/brand/brand_1_3.png"
                      alt="Brand Logo"
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="brand-box">
                    <img
                      src="assets/img/brand/brand_1_4.png"
                      alt="Brand Logo"
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="brand-box">
                    <img
                      src="assets/img/brand/brand_1_5.png"
                      alt="Brand Logo"
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="brand-box">
                    <img
                      src="assets/img/brand/brand_1_6.png"
                      alt="Brand Logo"
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="brand-box">
                    <img
                      src="assets/img/brand/brand_1_1.png"
                      alt="Brand Logo"
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="brand-box">
                    <img
                      src="assets/img/brand/brand_1_2.png"
                      alt="Brand Logo"
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="brand-box">
                    <img
                      src="assets/img/brand/brand_1_3.png"
                      alt="Brand Logo"
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="brand-box">
                    <img
                      src="assets/img/brand/brand_1_4.png"
                      alt="Brand Logo"
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="brand-box">
                    <img
                      src="assets/img/brand/brand_1_5.png"
                      alt="Brand Logo"
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="brand-box">
                    <img
                      src="assets/img/brand/brand_1_6.png"
                      alt="Brand Logo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shape-mockup" data-bottom={0} data-left={0}>
          <div className="particle-2 small" id="particle-4" />
        </div>
      </section>
      <div className="scroll-top">
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path
            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
            style={{
              transition: "stroke-dashoffset 10ms linear 0s",
              strokeDasharray: "307.919, 307.919",
              strokeDashoffset: "307.919",
            }}
          />
        </svg>
      </div>
    </>
  );
};

export default AboutUsPage;
