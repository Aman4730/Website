import React, { useEffect, useState } from "react";
import team from "../Imges/team.jpg";
import team1 from "../Imges/team1.png";
import team2 from "../Imges/team2.jpg";
import team6 from "../Imges/team6.png";
import team4 from "../Imges/team4.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import why_bg_2 from "../assets/img/bg/why_bg_2.jpg";
import MainHeading from "../components/MainHeading";
import why_2_1 from "../assets/img/normal/why_2_1.png";
import title_shape_2 from "../assets/img/theme-img/title_shape_2.svg";
import DNS from "../Imges/DNS2.gif";
import $ from "jquery";
import "jquery-circle-progress";
import "swiper/css";
import "swiper/css/navigation";
import TeamMembers from "../components/BlogSection/GalleryComponents/TeamMembers";
import { Link } from "react-router-dom";
import OurJourney from "../components/OurJourney";
import Awards from "../components/Newsroom/Awards";
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

const OurLegacyLeadership = () => {
  useEffect(() => {
    $(".circle").each(function () {
      const percentage = $(this).data("percent") / 100;
      $(this)
        .circleProgress({
          value: percentage,
          size: 100,
          fill: { color: "#684DF4" },
          thickness: 8,
        })
        .on("circle-animation-progress", function (event, progress, stepValue) {
          $(this)
            .find(".circle-num")
            .text(`${Math.round(stepValue * 100)}%`);
        });
    });
  }, []);
  return (
    <>
      <MainHeading
        title="Our Legacy Leadership"
        subtitle="Our Legacy Leadership"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Our Legacy Leadership" },
        ]}
      />
      <section className="team-sec">
        <div
          class="why-sec-v2"
          style={{
            backgroundImage: `url(${why_bg_2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div class="container space">
            <div class="row align-items-center flex-row-reverse">
              <div class="col-xl-6 mb-30 mb-xl-0">
                <div class="img-box5">
                  <img class="tilt-active" src={why_2_1} alt="Why" />
                  <div class="year-counter">
                    <h3 class="year-counter_number">
                      <span class="counter-number">10</span>k+
                    </h3>
                    <p class="year-counter_text">Clients Active</p>
                  </div>
                </div>
              </div>
              <div class="col-xl-6">
                <div class="title-area mb-35">
                  <div class="shadow-title color3">Our Vision</div>
                  <span class="sub-title">
                    <div class="icon-masking me-2">
                      <img src={title_shape_2} alt="shape" />
                    </div>
                    Founder's Message
                  </span>
                  <h2 class="sec-title">
                    A Vision for
                    <span class="text-theme"> Innovation </span>& Excellence
                  </h2>
                </div>
                <p class="mt-n2 mb-30">
                  At Logimetrix, we embarked on a mission to drive digital
                  transformation with innovation and excellence. Our commitment
                  to technology, integrity, and impact fuels our growth. With a
                  passionate team, we strive to create scalable solutions,
                  bridge gaps, and shape a smarter, more connected future.
                </p>
                <div class="feature-circle-wrap">
                  <div class="feature-circle">
                    <div class="progressbar" data-path-color="#684DF4">
                      <div class="circle" data-percent="90">
                        <div class="circle-num"></div>
                      </div>
                    </div>
                    <div class="media-body">
                      <h3 class="feature-circle_title">Business Growth</h3>
                      <p class="feature-circle_text">
                        Empowering businesses with cutting-edge solutions to
                        accelerate success.
                      </p>
                    </div>
                  </div>
                  <div class="feature-circle">
                    <div class="progressbar" data-path-color="#684DF4">
                      <div class="circle" data-percent="95">
                        <div class="circle-num"></div>
                      </div>
                    </div>
                    <div class="media-body">
                      <h3 class="feature-circle_title">Superior Quality</h3>
                      <p class="feature-circle_text">
                        Delivering high-performance products that redefine
                        industry standards.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="team-sec space">
          <div className="container z-index-common">
            <div class="title-area mb-35 text-center">
              <div class="shadow-title">Meet Our Leaders</div>
              <span class="sub-title">
                <div class="icon-masking me-2">
                  <img
                    src="assets/img/theme-img/title_shape_2.svg"
                    alt="shape"
                  />
                </div>
                Meet Our Leaders
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
        <TeamMembers />
        <OurJourney />
        <Awards />
      </section>
    </>
  );
};

export default OurLegacyLeadership;
