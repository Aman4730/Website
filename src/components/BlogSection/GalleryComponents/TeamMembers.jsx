import React from "react";
import MainHeading from "../../MainHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import team_4_1 from "../../../assets/img/team/team_4_1.jpg";
import team_4_2 from "../../../assets/img/team/team_4_2.jpg";
import team_4_3 from "../../../assets/img/team/team_4_3.jpg";
import team_4_4 from "../../../assets/img/team/team_4_4.jpg";
import team_bg_5 from "../../../assets/img/bg/team_bg_5.jpg";
import { Link } from "react-router-dom";

const teamMembers = [
  { img: team_4_1, name: "Honey Deep", role: "Chief Officer" },
  { img: team_4_2, name: "Mac Alexixe", role: "CEO, Founder" },
  { img: team_4_3, name: "Alex Julian", role: "Instructor" },
  { img: team_4_4, name: "Jenifer Lopez", role: "Instructor" },
  { img: team_4_1, name: "Henry Joseph", role: "Senior Instructor" },
];

const TeamMembers = () => {
  return (
    <>
      <section
        className="overflow-hidden bg-top-center th-radius3 m-4 mt-0 mb-0 space position-relative"
        id="testi-sec"
      >
        <div
          className="position-absolute top-0 start-0 w-100"
          style={{
            backgroundImage: `url(${team_bg_5})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "515px",
            borderBottomLeftRadius: "2rem",
            borderBottomRightRadius: "2rem",
          }}
        ></div>
        <div className="container th-container4">
          <div className="title-area text-center">
            <span className="sub-title sub-title3">Team Members</span>
            <h2 className="sec-title text-white">Meet Our Dedicated Team</h2>
          </div>
          <div className="slider-area">
            <Swiper
              modules={[Navigation]}
              navigation
              spaceBetween={20}
              breakpoints={{
                0: { slidesPerView: 1 },
                576: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                992: { slidesPerView: 3 },
                1200: { slidesPerView: 4 },
              }}
              className="team-slider"
            >
              {teamMembers.map((member, index) => (
                <SwiperSlide key={index}>
                  <div className="th-team team-card3 style2">
                    <div className="team-img">
                      <img src={member.img} alt="Team" />
                    </div>
                    <div className="box-content">
                      <div className="social-links">
                        <a target="_blank" href="https://facebook.com/">
                          <i className="fab fa-facebook-f" />
                        </a>
                        <a target="_blank" href="https://twitter.com/">
                          <i className="fab fa-twitter" />
                        </a>
                        <a target="_blank" href="https://instagram.com/">
                          <i className="fab fa-instagram" />
                        </a>
                        <a target="_blank" href="https://linkedin.com/">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </div>
                      <div className="media-body">
                        <h3 className="box-title">
                          <Link to="/contactUs">{member.name}</Link>
                        </h3>
                        <span className="team-desig">{member.role}</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamMembers;
