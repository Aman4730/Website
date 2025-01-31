import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import logo1 from "../../Imges/logo1.png";
import logo2 from "../../Imges/logo2.png";
import logo3 from "../../Imges/logo3.png";
import logo4 from "../../Imges/logo4.png";
import logo5 from "../../Imges/logo5.png";
import logo6 from "../../Imges/logo6.png";
import logo7 from "../../Imges/logo7.png";
import logo8 from "../../Imges/logo8.png";
import logo9 from "../../Imges/logo9.png";
import logo10 from "../../Imges/logo10.png";
import logo11 from "../../Imges/logo11.png";
import logo12 from "../../Imges/logo12.png";

const brandImages = [
  { width: "150px", src: logo1 },
  { width: "150px", src: logo2 },
  { width: "150px", src: logo3 },
  { width: "150px", src: logo4 },
  { width: "200px", src: logo5 },
  { width: "150px", src: logo6 },
  { width: "150px", src: logo7 },
  { width: "200px", src: logo8 },
  { width: "150px", src: logo9 },
  { width: "170px", src: logo10 },
  { width: "150px", src: logo11 },
  { width: "150px", src: logo12 },
];

const BrandSlider = () => {
  return (
    <div className="overflow-hidden space-top" id="faq-sec">
      <div className="container space-bottom">
        <div className="slider-area text-center">
          <Swiper
            slidesPerView={2}
            spaceBetween={-200} // Reduced space between logos
            breakpoints={{
              576: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              992: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
              1400: { slidesPerView: 5 },
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            loop={true}
            effect="fade"
          >
            {brandImages.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="brand-box" style={{ padding: "10px" }}>
                  <img
                    src={src.src}
                    alt="Brand Logo"
                    style={{
                      width: src.width,
                      height: "120px",
                      objectFit: "contain",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    }}
                    className="brand-logo"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx>{`
        .brand-logo:hover {
          transform: scale(1.1); // Slight zoom on hover
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); // Subtle shadow
        }
      `}</style>
    </div>
  );
};

export default BrandSlider;
