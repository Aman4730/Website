import { useState, useEffect } from "react";
import { motion, AnimatePresence, color } from "framer-motion";
import edu9 from "../../Imges/edu9.png";
import edu1 from "../../Imges/edu1.png";
import edu19 from "../../Imges/edu19.png";

const heroData = [
  {
    animation: true,
    title: "Driving Business Growth with",
    subtitle: " Tech & Innovation",
    sectionClass: "img-box8 hero-img tilt-active",
    text: "Transform your ideas into reality with our wide range of services designed to maximize impact and value.",
    img: [
      {
        className: "img1",
        src: "assets/img/normal/faq_2_1.png",
        alt: "Faq",
      },
      {
        className: "shape1",
        src: "assets/img/normal/faq_2_2.png",
        alt: "About",
      },
      {
        className: "shape2",
        src: "assets/img/normal/faq_2_3.png",
        alt: "About",
      },
    ],
  },
  {
    animation: true,
    title: "Future-Focused Innovation for Smart  ",
    subtitle: " Growth",
    sectionClass: "col-lg-6 mb-30 mb-lg-0",
    text: "Stay ahead of the competition by embracing innovative and future-ready solutions tailored for your business needs.",
    style: { marginTop: "65px" },
    img: [
      {
        className: "img1",
        src: "assets/img/normal/why_3_1.png",
        alt: "Why",
      },
      {
        className: "shape1",
        src: "assets/img/normal/why_3_2.png",
        alt: "About",
      },
      {
        className: "shape2",
        src: "assets/img/normal/why_3_3.png",
        alt: "About",
      },
      {
        className: "color-animate",
        src: "",
        alt: "",
      },
    ],
  },
  {
    animation: true,
    title: "Your Trusted Partner for ",
    subtitle: "Growth & Success ",
    sectionClass: "img-box8 hero-img tilt-active",
    text: "We help businesses scale, achieve their goals, and succeed in competitive markets with tailored strategies.",
    img: [
      {
        className: "img1",
        src: edu19,
        alt: "Faq",
      },
      {
        className: "shape1",
        src: edu9,
        alt: "About",
      },
      {
        className: "shape2",
        src: edu1,
        alt: "About",
      },
    ],
  },
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % heroData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="th-hero-wrapper hero-1" id="hero">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
        >
          <div className="th-hero-wrapper hero-1" id="hero">
            {heroData[index].animation === true ? (
              <div className="img-box8 hero-img tilt-active">
                {heroData[index].img.map((image, idx) => (
                  <div
                    key={idx}
                    className={image.className}
                    style={heroData[index]?.style}
                  >
                    <img src={image.src} alt={image.alt} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="hero-img tilt-active">
                <img src={heroData[index].img} alt="Hero Image" />
              </div>
            )}
            <div className="container">
              <div className="hero-style1">
                <span className="hero-subtitle">
                  Solution For Your Business
                </span>
                <h1 className="hero-title">
                  {heroData[index].title}
                  <spam
                    className="hero-title"
                    style={{
                      fontWeight: "700",
                      color: "#4786E6",
                    }}
                  >
                    {heroData[index].subtitle}
                  </spam>
                </h1>
                <p className="hero-text">{heroData[index].text}</p>
                <div className="btn-group">
                  <a href="about.html" className="th-btn">
                    ABOUT US
                    <i className="fa-regular fa-arrow-right ms-2" />
                  </a>
                  <div className="call-btn">
                    <a
                      href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                      className="play-btn popup-video"
                    >
                      <i className="fas fa-play" />
                    </a>
                    <div className="media-body">
                      <a
                        href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                        className="btn-title popup-video"
                      >
                        Watch Our Story
                      </a>
                      <span className="btn-text">Subscribe Now</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-shape1">
              <img src="assets/img/hero/hero_shape_1_1.svg" alt="shape" />
            </div>
            <div className="hero-shape2">
              <img src="assets/img/hero/hero_shape_1_2.svg" alt="shape" />
            </div>
            <div className="hero-shape3">
              <img src="assets/img/hero/hero_shape_1_3.svg" alt="shape" />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
