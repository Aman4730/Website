import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Services = () => {
  const services = [
    {
      img: "assets/img/icon/service_card_1.svg",
      title: "Web Development",
      description:
        "Continually engage customized infomediarie and quality growth strategies. Appropriately.",
    },
    {
      img: "assets/img/icon/service_card_2.svg",
      title: "Business Solutions",
      description:
        "Continually engage customized infomediarie and quality growth strategies. Appropriately.",
    },
    {
      img: "assets/img/icon/service_card_3.svg",
      title: "SEO Optimization",
      description:
        "Continually engage customized infomediarie and quality growth strategies. Appropriately.",
    },
    {
      img: "assets/img/icon/service_card_4.svg",
      title: "Consulting Services",
      description:
        "Continually engage customized infomediarie and quality growth strategies. Appropriately.",
    },
  ];
  return (
    <section
      className="bg-top-center z-index-common space-top service-section"
      style={{
        backgroundImage: `url("assets/img/bg/service_bg_2.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderRadius: "10px",
      }}
    >
      <div className="container">
        <div className="row justify-content-lg-between justify-content-center align-items-center">
          <div className="col-lg-6 col-sm-9 pe-xl-5">
            <div className="title-area text-center text-lg-start">
              <div className="shadow-title color2">SERVICES</div>
              <span className="sub-title">
                <div className="icon-masking me-2">
                  <span className="mask-icon" />
                  <img
                    src="assets/img/theme-img/title_shape_2.svg"
                    alt="shape"
                  />
                </div>
                WHAT WE DO
              </span>
              <h2 className="sec-title text-white">
                We Provide Exclusive Service For{" "}
                <span className="text-theme">Your Business</span>
              </h2>
            </div>
          </div>
          <div className="col-auto">
            <div className="sec-btn">
              <a href="service.html" className="th-btn style3">
                VIEW ALL SERVICES{" "}
                <i className="fa-regular fa-arrow-right ms-2" />
              </a>
            </div>
          </div>
        </div>
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
                      <img src="assets/img/bg/service_grid_bg.png" alt="bg" />
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
