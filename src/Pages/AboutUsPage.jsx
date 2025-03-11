import React, { useState } from "react";
import team from "../Imges/team.jpg";
import team1 from "../Imges/team1.png";
import team2 from "../Imges/team2.jpg";
import team6 from "../Imges/team6.png";
import team4 from "../Imges/team4.jpeg";
import { Link } from "react-router-dom";
import BrandSlider from "../components/Brands";
import star from "../assets/img/icon/star.svg";
import Sanjay_rai from "../Imges/Sanjay_rai.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import MartijnHalbesma from "../Imges/MartijnHalbesma.jpg";
import service_3 from "../assets/img/service/service_3.png";
import service_1_2 from "../assets/img/icon/service_1_2.svg";
import service_3_4 from "../assets/img/icon/service_3_4.svg";
import service_2_3 from "../assets/img/icon/service_2_3.svg";
import service_3_2 from "../assets/img/icon/service_3_2.svg";
import YashwantKumarSingh from "../Imges/YashwantKumarSingh.png";
import VivekKumarSrivastava from "../Imges/VivekKumarSrivastava.jpg";
import about_feature_1_1 from "../assets/img/icon/about_feature_1_1.svg";
import about_feature_1_2 from "../assets/img/icon/about_feature_1_2.svg";
import title_shape_2_white from "../assets/img/theme-img/title_shape_2_white.svg";
import "swiper/css";
import "swiper/css/navigation";
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
    name: "Sandipan Basu",
    role: "President & Mentor",
    image: team6,
    socialLinks: {
      facebook: "https://facebook.com/rayanathels",
      twitter: "https://twitter.com/rayanathels",
      instagram: "https://instagram.com/rayanathels",
      linkedin: "https://www.linkedin.com/in/sandipan-basu-b67323335/",
    },
  },
];
const testimonials = [
  {
    img: Sanjay_rai,
    name: "Sanjay Rai",
    designation: "Principal Engineer II | HARMAN",
    text: "Working with Shantanu was a great experience. His strong sense of ownership, results-driven mindset, and ability to balance both big-picture strategy and intricate details make him an exceptional professional. He is creative, energetic, solution-oriented, and highly motivated, with outstanding communication skills. A true asset to any organization!",
  },
  {
    img: YashwantKumarSingh,
    name: "Yashwant Kumar Singh",
    designation: "Xiaomi | Ex-Microsoft, Nokia, Foxconn",
    text: "Shantanu is a highly passionate individual with a strong drive to help others through his technological expertise. He is an ambitious leader, always focused on achieving his goals while ensuring seamless communication. His ability to understand needs and deliver solutions makes him an invaluable asset to both customers and colleagues. Wishing him all the best",
  },
  {
    img: "assets/img/testimonial/testi_3_2.jpg",
    name: "Sonali Patro",
    designation:
      "Quality Assistance | Business Analysis | Project Management | Canva",
    text: "Shantanu is an exceptional leader with impressive management skills and deep technical expertise. He is professional, proactive, and an excellent decision-maker. Despite his strong leadership, he remains down-to-earth and easy to work with, making him ideal for management roles. His strategic approach ensures top-quality team output, and his high standards naturally reflect on every team member while maintaining high team morale. A truly commendable leader!",
  },
  {
    img: VivekKumarSrivastava,
    name: "Vivek Kumar Srivastava",
    designation: "Manager | TNS India",
    text: "Shantanu is a dedicated, ambitious, and results-driven leader with exceptional problem-solving skills. His ability to navigate complex challenges with focus and determination sets him apart. Having known him for over 15 years, I have seen his deep understanding of both functional and technical aspects of various domains. His commitment to excellence makes him a standout professional, and it has been a privilege to have a professional relationship with him.",
  },
  {
    img: MartijnHalbesma,
    name: "Martijn Halbesma",
    designation: "Regulatory & Compliance Lead | Philips",
    text: "I had the pleasure of working with Shantanu for several months on projects involving the development, testing, and release of products for a major telecommunications player. Shantanu's exceptional communication and leadership skills were invaluable to the success of the projects. He collaborated seamlessly with international teams and was an outstanding host when project members visited India. His dedication and expertise make him an asset to any team.",
  },
];
const AboutUsPage = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [pauseSlider, setPauseSlider] = useState(false);

  const toggleText = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
      setPauseSlider(false);
    } else {
      setExpandedIndex(index);
      setPauseSlider(true);
    }
  };

  const handleMouseLeave = () => {
    setExpandedIndex(null);
    setPauseSlider(false);
  };
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
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="container">
          <div className="breadcumb-content text-center">
            <div className="title-area mb-35">
              <div className="shadow-title">Why US</div>
              <span className="sub-title" style={{ color: "white" }}>
                <div className="icon-masking me-2">
                  <img src={title_shape_2_white} alt="shape" />
                </div>
                Logimetrix TechSolutions
              </span>
            </div>
            <ul className="breadcumb-menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Why Us</li>
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
                    <span className="counter-number">12+</span>
                  </h3>
                  <p className="year-counter_text">Years Experience</p>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="ps-xxl-4 ms-xl-3">
                <div class="title-area mb-35 text-center text-xl-start">
                  <div class="shadow-title">Why US</div>
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
                    The Best IT Solution With 12+ Years of
                    <span class="text-theme"> Experience.</span>
                  </h2>
                </div>
                <p className="mt-n2 mb-25">
                  Logimetrix Techsolutions is a dynamic and fast-growing
                  business solutions provider, founded by IIT alumni with deep
                  expertise in designing and developing cutting-edge custom
                  software solutions. Backed by a team of highly skilled and
                  innovative professionals, we are committed to delivering
                  scalable, efficient, and cost-effective technology solutions
                  tailored to your business needs.
                </p>
                <div className="about-feature-wrap">
                  <div className="about-feature">
                    <div className="about-feature_icon">
                      <img src={about_feature_1_1} alt="Icon" />
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
                      <img src={about_feature_1_2} alt="Icon" />
                    </div>
                    <div className="media-body">
                      <h3 className="about-feature_title">Expart Team</h3>
                      <p className="about-feature_text">100% Expert Team</p>
                    </div>
                  </div>
                </div>
                <div className="btn-group">
                  <Link to="/contactUs" className="th-btn">
                    DISCOVER MORE
                    <i className="fa-regular fa-arrow-right ms-2" />
                  </Link>
                  <div className="call-btn">
                    <div className="play-btn">
                      <i className="fas fa-phone" />
                    </div>
                    <div className="media-body">
                      <span className="btn-text">Call Us On:</span>
                      <a href="tel:+9935540006" className="btn-title">
                        +91 9935540006
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* What we do AI */}
      <section className="space" id="service-sec">
        <div className="container th-container4">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="title-area text-center">
                <div className="title-area mb-35 text-center">
                  <div className="shadow-title">What We Do</div>
                  <span className="sub-title">
                    <div className="icon-masking me-2">
                      <img
                        src="assets/img/theme-img/title_shape_2.svg"
                        alt="shape"
                      />
                    </div>
                    What We Do
                  </span>
                  <h2 className="sec-title">
                    Empowering Success Through
                    <span className="text-theme"> Innovation.</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="row gy-4 justify-content-between align-items-center">
            <div className="service-card2_wrap style1">
              <div className="service-card2_wrap">
                <div className="service-card2 wow fadeInRight">
                  <div className="service-card2_content">
                    <div className="service-card2_icon">
                      <img src={service_1_2} alt="Icon" />
                    </div>
                    <h3 className="box-title">
                      <Link to="/contactUs">Mobility Solutions</Link>
                    </h3>
                    <p className="service-card2_text">
                      Custom mobile apps for Android, iOS, and Windows that
                      drive user engagement and business growth.
                    </p>
                  </div>
                </div>
                <div className="service-card2 wow fadeInRight">
                  <div className="service-card2_content">
                    <div className="service-card2_icon">
                      <img src={service_3_4} alt="Icon" />
                    </div>
                    <h3 className="box-title">
                      <Link to="/contactUs">Technology Solutions</Link>
                    </h3>
                    <p className="service-card2_text">
                      Enterprise-grade software architectures built with
                      cutting-edge technology for maximum performance.
                    </p>
                  </div>
                </div>
                <div className="service-card2 wow fadeInRight">
                  <div className="service-card2_content">
                    <div className="service-card2_icon">
                      <img src={service_2_3} alt="Icon" />
                    </div>
                    <h3 className="box-title">
                      <Link to="/contactUs">Research & Analytics</Link>
                    </h3>
                    <p className="service-card2_text">
                      Transform your raw data into actionable insights through
                      advanced analytics and reporting.
                    </p>
                  </div>
                </div>
                <div className="service-card2 wow fadeInRight">
                  <div className="service-card2_content">
                    <div className="service-card2_icon">
                      <img src={service_3_2} alt="Icon" />
                    </div>
                    <h3 className="box-title">
                      <Link to="/contactUs">Custom Development</Link>
                    </h3>
                    <p className="service-card2_text">
                      Tailor-made solutions designed specifically for your
                      unique business challenges and goals.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="service-card2 style1 wow fadeInUp"
                style={{
                  backgroundImage: `url(${service_3})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "auto",
                  width: "100%",
                }}
              >
                <div className="service-card2_content">
                  <h3 className="service-title">
                    We build digital experiences.
                  </h3>
                  <h4 className="cilent-box_counter">
                    <span className="counter-number">689</span>+ clients across
                    India
                  </h4>
                </div>
              </div>
              <div
                className="shape-mockup service-shape spin d-none d-xl-block"
                style={{
                  position: "absolute",
                  top: "46%",
                  left: "23.5%",
                }}
                data-top="46%"
                data-left="23.5%"
              >
                <img src={star} alt="shape" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us */}
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
              <div class="title-area mb-35 text-center text-xl-start">
                <div class="shadow-title">WHY CHOOSE</div>
                <span class="sub-title">
                  <div class="icon-masking me-2">
                    <img
                      src="assets/img/theme-img/title_shape_2.svg"
                      alt="shape"
                    />
                  </div>
                  WHY CHOOSE US
                </span>
                <h2 class="sec-title">
                  We Deal With The Aspects Professional
                  <span class="text-theme"> IT Services.</span>
                </h2>
              </div>
              <p className="mt-n2 mb-30">
                With a growing reputation for technology leadership, quality
                assurance, and outstanding service delivery, we continue to push
                the boundaries of what’s possible. Whether you're a startup,
                enterprise, or industry leader, we invite you to partner with us
                on a journey of innovation and success.
              </p>
              <div className="two-column">
                <div className="checklist style2">
                  <ul>
                    <li>
                      <i className="far fa-check" /> Big Data Analysis
                    </li>
                    <li>
                      <i className="far fa-check" /> Business Improvement
                    </li>
                    <li>
                      <i className="far fa-check" /> Innovation-Driven
                    </li>
                    <li>
                      <i className="far fa-check" /> Scalability & Security
                    </li>
                    <li>
                      <i className="far fa-check" /> 24/7 Online Support
                    </li>
                  </ul>
                </div>
                <div className="checklist style2">
                  <ul>
                    <li>
                      <i className="far fa-check" /> High Quality Security
                    </li>
                    <li>
                      <i className="far fa-check" /> Easy Solutions
                    </li>
                    <li>
                      <i className="far fa-check" /> Client-Centric
                    </li>
                    <li>
                      <i className="far fa-check" /> End-to-End Support
                    </li>
                    <li>
                      <i className="far fa-check" /> 24/7 Support Team
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Team Members Section */}
      <section className="team-sec space">
        <div className="container z-index-common">
          <div class="title-area mb-35 text-center">
            <div class="shadow-title">TEAM MEMBER</div>
            <span class="sub-title">
              <div class="icon-masking me-2">
                <img src="assets/img/theme-img/title_shape_2.svg" alt="shape" />
              </div>
              TEAM MEMBER
            </span>
            <h2 class="sec-title">
              See Our Skilled Expert
              <span class="text-theme"> Team.</span>
            </h2>
          </div>

          <div className="slider-area">
            <Swiper
              modules={[Autoplay]}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
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
                        <Link to="/contactUs">{member.name}</Link>
                      </h3>
                      <span className="team-desig">{member.role}</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
      {/* Brands Logos */}
      <div style={{ marginBottom: "120px" }}>
        <BrandSlider />
      </div>
      {/* TESTIMONIALS shape */}
      <section
        className="overflow-hidden bg-top-center th-radius3 m-4 mt-0 mb-0 space position-relative"
        id="testi-sec"
      >
        <div
          className="position-absolute top-0 start-0 w-100"
          style={{
            backgroundImage: "url('assets/img/bg/testi_bg_3.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "515px",
            borderBottomLeftRadius: "2rem",
            borderBottomRightRadius: "2rem",
          }}
        ></div>
        <div className="container">
          <div className="title-area text-center">
            <div className="shadow-title color2">TESTIMONIALS</div>
            <span className="sub-title">
              <div className="icon-masking me-2">
                <span className="mask-icon">
                  <img
                    src="assets/img/theme-img/title_shape_2.svg"
                    alt="shape"
                  />
                </span>
              </div>
            </span>
            <h2 className="sec-title text-white">
              Praise for Our
              <span className="text-theme"> Founder</span>
            </h2>
          </div>

          <div className="slider-area">
            <Swiper
              modules={[Navigation, Autoplay]}
              loop={true}
              autoplay={
                pauseSlider
                  ? false
                  : { delay: 2000, disableOnInteraction: false }
              }
              navigation={{
                nextEl: ".slider-next",
                prevEl: ".slider-prev",
              }}
              spaceBetween={20}
              breakpoints={{
                0: { slidesPerView: 1 },
                576: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                992: { slidesPerView: 2 },
                1200: { slidesPerView: 3 },
              }}
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="testi-grid"
                    onMouseLeave={handleMouseLeave}
                    style={{
                      height: expandedIndex === index ? "auto" : "420px",
                      marginBottom: "3px",
                      transition: "height 0.3s ease",
                    }}
                  >
                    <div className="testi-grid_img">
                      <img src={testimonial.img} alt="Avatar" />
                      <div className="testi-grid_quote">
                        <img
                          src="assets/img/icon/quote_left_3.svg"
                          alt="quote"
                        />
                      </div>
                    </div>
                    <div className="testi-grid_review">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="fa-solid fa-star" />
                      ))}
                    </div>
                    <div className="testi-grid_content">
                      <div>
                        <p
                          className="testi-grid_text"
                          style={{
                            overflow:
                              expandedIndex === index ? "visible" : "hidden",
                            display: "-webkit-box",
                            WebkitBoxOrient: "vertical",
                            WebkitLineClamp:
                              expandedIndex === index ? "unset" : 7,
                            textOverflow: "ellipsis",
                            maxWidth: "700px",
                            transition: "background-color 0.3s ease",
                          }}
                        >
                          {testimonial.text}
                        </p>
                        <span
                          onClick={() => toggleText(index)}
                          style={{
                            cursor: "pointer",
                            display: "flex",
                            justifyContent: "flex-end",
                          }}
                        >
                          {expandedIndex === index ? "See Less" : "See More"}
                        </span>
                      </div>

                      <h3 className="box-title">{testimonial.name}</h3>
                      <abbr
                        title={testimonial.designation}
                        style={{ cursor: "pointer", textDecoration: "none" }}
                      >
                        <p
                          className="testi-grid_desig"
                          style={{
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            maxWidth: "400px",
                            transition: "background-color 0.3s ease",
                            height: "100px",
                          }}
                        >
                          {testimonial.designation}
                        </p>
                      </abbr>
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
