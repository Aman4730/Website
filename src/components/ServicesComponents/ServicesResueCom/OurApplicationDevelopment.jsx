import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import title_shape_2 from "../../../assets/img/theme-img/title_shape_2.svg";

const OurApplicationDevelopment = ({ applicationservices }) => {
  return (
    <section className="service-area6 space" id="service-sec">
      <div className="container th-container4">
        <div className="title-area text-center">
          <span className="sub-title">
            <div className="icon-masking me-2">
              <img src={title_shape_2} alt="shape" />
            </div>
            Service benefits
          </span>
          <h2 className="sec-title">
            What You Can Achieve with Logimetrix Custom App Development
          </h2>
        </div>
        <div className="slider-area">
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            navigation={{
              nextEl: ".slider-next",
              prevEl: ".slider-prev",
            }}
            breakpoints={{
              576: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
            }}
          >
            {applicationservices.map((service) => (
              <SwiperSlide key={service.id}>
                <div className="service-item th-ani">
                  <div className="service-item_icon">
                    <img src={service.icon} alt="Icon" />
                  </div>
                  <div className="service-item_content">
                    <h3 className="box-title">
                      <a href="service-details.html">{service.title}</a>
                    </h3>
                    <p className="service-item_text">{service.description}</p>
                    <a href="service-details.html" className="line-btn">
                      Read Details
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* ✅ Navigation Buttons (Properly Linked) */}
          <button className="slider-arrow slider-prev">
            <i className="far fa-arrow-left" />
          </button>
          <button className="slider-arrow slider-next">
            <i className="far fa-arrow-right" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurApplicationDevelopment;
