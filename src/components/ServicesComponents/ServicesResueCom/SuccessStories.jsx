import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import blog_bg_1 from "../../../assets/img/bg/blog_bg_1.png";
import title_shape_2 from "../../../assets/img/theme-img/title_shape_2.svg";
import author11 from "../../../assets/img/blog/author-1-1.png";

import blog_1_1 from "../../../assets/img/blog/blog_1_1.jpg";
import blog_1_2 from "../../../assets/img/blog/blog_1_2.jpg";
import blog_1_3 from "../../../assets/img/blog/blog_1_3.jpg";
import blog_1_4 from "../../../assets/img/blog/blog_1_4.jpg";

const blogPosts = [
  {
    img: blog_1_1,
    date: "15 Jan, 2024",
    comments: 2,
    title: "AI-Powered Supply Chain Optimization",
    link: "blog-details.html",
    desc: "35% reduction in operational costs by predictive analytics and automation.",
  },
  {
    img: blog_1_2,
    date: "16 Jan, 2024",
    comments: 3,
    title: "Blockchain-Based Digital Identity System",
    link: "blog-details.html",
    desc: "35% reduction in operational costs by predictive analytics and automation.",
  },
  {
    img: blog_1_3,
    date: "17 Jan, 2024",
    comments: 2,
    title: "IoT-Enabled Smart Warehouse Management",
    link: "blog-details.html",
    desc: "35% reduction in operational costs by predictive analytics and automation.",
  },
  {
    img: blog_1_4,
    date: "19 Jan, 2024",
    comments: 4,
    title: "NLP-Based Customer Support Automation",
    link: "blog-details.html",
    desc: "35% reduction in operational costs by predictive analytics and automation.",
  },
  {
    img: blog_1_4,
    date: "19 Jan, 2024",
    comments: 4,
    title: "Edge Computing for Real-Time Data Processing",
    link: "blog-details.html",
    desc: "35% reduction in operational costs by predictive analytics and automation.",
  },
];

const SuccessStories = () => {
  return (
    <section
      className="bg-top-right bg-smoke overflow-hidden space"
      id="blog-sec"
      style={{
        backgroundImage: `url(${blog_bg_1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="title-area text-center">
          <div className="shadow-title color3">Update</div>
          <span className="sub-title">
            <div className="icon-masking me-2">
              <img src={title_shape_2} alt="shape" />
            </div>
            Success &amp; Stories
          </span>
          <h2 className="sec-title">
            Recent PoC Success <span className="text-theme">Stories</span>
          </h2>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          loop={true}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="th-slider has-shadow"
        >
          {blogPosts.map((post, index) => (
            <SwiperSlide key={index}>
              <div className="blog-card">
                <div className="blog-img">
                  <img src={post.img} alt="blog" />
                </div>
                <div className="blog-content">
                  <h3 className="box-title">
                    <a href={post.link}>{post.title}</a>
                  </h3>
                  <p className="blog-text">
                    Progressively plagiarize quality metrics for impactful data.
                    Assertively leverage existing magnetic.
                  </p>
                  <div className="blog-bottom">
                    <a href="blog.html" className="author">
                      <img src={author11} alt="author" /> By Themeholy
                    </a>
                    <a href={post.link} className="line-btn">
                      Read More <i className="fas fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SuccessStories;
