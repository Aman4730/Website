import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import service_grid_bg from "../../assets/img/bg/service_grid_bg.png";
const Services = ({ services }) => {
  return (
    <section className="bg-top-center z-index-common space  service-section">
      <div className="container">
        <div className="slider-area">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              576: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
            }}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            className="th-slider has-shadow"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <div className="service-grid">
                  <div className="service-grid_icon">
                    <img src={service.img} alt="Icon" />
                  </div>
                  <div className="service-grid_content">
                    <h3 className="box-title">
                      <a href="service-details.html">{service.title}</a>
                    </h3>
                    <p className="service-grid_text">{service.description}</p>
                    <a href="service-details.html" className="th-btn">
                      Read More <i className="fas fa-arrow-right ms-2" />
                    </a>
                    <div className="bg-shape">
                      <img src={service_grid_bg} alt="bg" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Services;
