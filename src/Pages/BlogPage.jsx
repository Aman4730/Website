import React from "react";
import MainHeading from "../components/MainHeading";

const BlogPage = () => {
  return (
    <>
      <MainHeading
        title="BLOG"
        subtitle="BLOG"
        breadcrumbs={[{ label: "Home", link: "/" }, { label: "Blog" }]}
      />
      <section className="th-blog-wrapper space-top space-extra-bottom">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-lg-7">
              <div className="th-blog blog-single has-post-thumbnail">
                <div className="blog-img">
                  <a href="blog-details.html">
                    <img
                      src="assets/img/blog/blog-s-1-1.jpg"
                      alt="Blog Image"
                    />
                  </a>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <a className="author" href="blog.html">
                      <img src="assets/img/blog/author-1-1.png" alt="avater" />
                      By Themeholy
                    </a>
                    <a href="blog.html">
                      <i className="fa-light fa-calendar-days" />
                      21 June, 2024
                    </a>
                    <a href="blog-details.html">
                      <i className="fa-regular fa-comments" />
                      Comments (3)
                    </a>
                  </div>
                  <h2 className="blog-title">
                    <a href="blog-details.html">
                      Unsatiable entreaties may collecting Power.
                    </a>
                  </h2>
                  <p className="blog-text">
                    Progressively plagiarize quality metrics for impactful data.
                    Assertively. Holisticly leverage existing magnetic
                    functionalities. Assertively orchestrate high-quality
                    customer service vis-a-vis intuitive interfaces.
                    Conveniently enhance highly efficient infomediaries.
                  </p>
                  <a href="blog-details.html" className="line-btn">
                    Read More
                  </a>
                </div>
              </div>
              <div className="th-blog blog-single has-post-thumbnail">
                <div
                  className="blog-img th-carousel"
                  data-arrows="true"
                  data-slide-show={1}
                  data-fade="true"
                >
                  <a href="blog-details.html">
                    <img
                      src="assets/img/blog/blog-s-1-2.jpg"
                      alt="Blog Image"
                    />
                  </a>
                  <a href="blog-details.html">
                    <img
                      src="assets/img/blog/blog-s-1-4.jpg"
                      alt="Blog Image"
                    />
                  </a>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <a className="author" href="blog.html">
                      <img src="assets/img/blog/author-1-1.png" alt="avater" />
                      By Themeholy
                    </a>
                    <a href="blog.html">
                      <i className="fa-light fa-calendar-days" />
                      22 June, 2024
                    </a>
                    <a href="blog-details.html">
                      <i className="fa-regular fa-comments" />
                      Comments (3)
                    </a>
                  </div>
                  <h2 className="blog-title">
                    <a href="blog-details.html">
                      Regional Manager limited time management.
                    </a>
                  </h2>
                  <p className="blog-text">
                    Progressively plagiarize quality metrics for impactful data.
                    Assertively. Holisticly leverage existing magnetic
                    functionalities. Assertively orchestrate high-quality
                    customer service vis-a-vis intuitive interfaces.
                    Conveniently enhance highly efficient infomediaries.
                  </p>
                  <a href="blog-details.html" className="line-btn">
                    Read More
                  </a>
                </div>
              </div>
              <div className="th-blog blog-single">
                <div className="blog-content">
                  <div className="blog-meta">
                    <a className="author" href="blog.html">
                      <img src="assets/img/blog/author-1-1.png" alt="avater" />
                      By Themeholy
                    </a>
                    <a href="blog.html">
                      <i className="fa-light fa-calendar-days" />
                      24 June, 2024
                    </a>
                    <a href="blog-details.html">
                      <i className="fa-regular fa-comments" />
                      Comments (3)
                    </a>
                  </div>
                  <h2 className="blog-title">
                    <a href="blog-details.html">
                      What’s the Holding Back It Solution Industry?
                    </a>
                  </h2>
                  <p className="blog-text">
                    Progressively plagiarize quality metrics for impactful data.
                    Assertively. Holisticly leverage existing magnetic
                    functionalities. Assertively orchestrate high-quality
                    customer service vis-a-vis intuitive interfaces.
                    Conveniently enhance highly efficient infomediaries.
                  </p>
                  <a href="blog-details.html" className="line-btn">
                    Read More
                  </a>
                </div>
              </div>
              <div className="th-blog blog-single has-post-thumbnail">
                <div className="blog-img">
                  <a href="blog-details.html">
                    <img
                      src="assets/img/blog/blog-s-1-3.jpg"
                      alt="Blog Image"
                    />
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                    className="play-btn popup-video"
                  >
                    <i className="fas fa-play" />
                  </a>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <a className="author" href="blog.html">
                      <img src="assets/img/blog/author-1-1.png" alt="avater" />
                      By Themeholy
                    </a>
                    <a href="blog.html">
                      <i className="fa-light fa-calendar-days" />
                      24 June, 2024
                    </a>
                    <a href="blog-details.html">
                      <i className="fa-regular fa-comments" />
                      Comments (3)
                    </a>
                  </div>
                  <h2 className="blog-title">
                    <a href="blog-details.html">
                      Latin derived from Cicero's 1st-century BC
                    </a>
                  </h2>
                  <p className="blog-text">
                    Progressively plagiarize quality metrics for impactful data.
                    Assertively. Holisticly leverage existing magnetic
                    functionalities. Assertively orchestrate high-quality
                    customer service vis-a-vis intuitive interfaces.
                    Conveniently enhance highly efficient infomediaries.
                  </p>
                  <a href="blog-details.html" className="line-btn">
                    Read More
                  </a>
                </div>
              </div>
              <div className="th-blog blog-single has-post-thumbnail">
                <div className="blog-audio">
                  <iframe
                    title="Tell Me U Luv Me (with Trippie Redd) by Juice WRLD"
                    src="https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F830279092&show_artwork=true&maxwidth=751&maxheight=1000&dnt=1"
                  />
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <a className="author" href="blog.html">
                      <img src="assets/img/blog/author-1-1.png" alt="avater" />
                      By Themeholy
                    </a>
                    <a href="blog.html">
                      <i className="fa-light fa-calendar-days" />
                      25 June, 2024
                    </a>
                    <a href="blog-details.html">
                      <i className="fa-regular fa-comments" />
                      Comments (3)
                    </a>
                  </div>
                  <h2 className="blog-title">
                    <a href="blog-details.html">
                      Regional Manager limited time management.
                    </a>
                  </h2>
                  <p className="blog-text">
                    Progressively plagiarize quality metrics for impactful data.
                    Assertively. Holisticly leverage existing magnetic
                    functionalities. Assertively orchestrate high-quality
                    customer service vis-a-vis intuitive interfaces.
                    Conveniently enhance highly efficient infomediaries.
                  </p>
                  <a href="blog-details.html" className="line-btn">
                    Read More
                  </a>
                </div>
              </div>
              <div className="th-pagination text-center">
                <ul>
                  <li>
                    <a href="blog.html">1</a>
                  </li>
                  <li>
                    <a href="blog.html">2</a>
                  </li>
                  <li>
                    <a href="blog.html">3</a>
                  </li>
                  <li>
                    <a href="blog.html">
                      <i className="far fa-arrow-right" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xxl-4 col-lg-5">
              <aside className="sidebar-area">
                <div className="widget widget_search">
                  <form className="search-form">
                    <input type="text" placeholder="Enter Keyword" />
                    <button type="submit">
                      <i className="far fa-search" />
                    </button>
                  </form>
                </div>
                <div className="widget widget_categories">
                  <h3 className="widget_title">Categories</h3>
                  <ul>
                    <li>
                      <a href="blog.html">IT Solution</a>
                    </li>
                    <li>
                      <a href="blog.html">SEO Marketing</a>
                    </li>
                    <li>
                      <a href="blog.html">Web Development</a>
                    </li>
                    <li>
                      <a href="blog.html">Cloud Solution</a>
                    </li>
                    <li>
                      <a href="blog.html">Network Marketing</a>
                    </li>
                    <li>
                      <a href="blog.html">UI/UX Design</a>
                    </li>
                  </ul>
                </div>
                <div className="widget">
                  <h3 className="widget_title">Recent Posts</h3>
                  <div className="recent-post-wrap">
                    <div className="recent-post">
                      <div className="media-img">
                        <a href="blog-details.html">
                          <img
                            src="assets/img/blog/recent-post-1-1.jpg"
                            alt="Blog Image"
                          />
                        </a>
                      </div>
                      <div className="media-body">
                        <h4 className="post-title">
                          <a className="text-inherit" href="blog-details.html">
                            Unsatiable entreaties may collecting Power.
                          </a>
                        </h4>
                        <div className="recent-post-meta">
                          <a href="blog.html">
                            <i className="fal fa-calendar-days" />
                            21 June, 2024
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="recent-post">
                      <div className="media-img">
                        <a href="blog-details.html">
                          <img
                            src="assets/img/blog/recent-post-1-2.jpg"
                            alt="Blog Image"
                          />
                        </a>
                      </div>
                      <div className="media-body">
                        <h4 className="post-title">
                          <a className="text-inherit" href="blog-details.html">
                            Regional Manager limited time management.
                          </a>
                        </h4>
                        <div className="recent-post-meta">
                          <a href="blog.html">
                            <i className="fal fa-calendar-days" />
                            22 June, 2024
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="recent-post">
                      <div className="media-img">
                        <a href="blog-details.html">
                          <img
                            src="assets/img/blog/recent-post-1-3.jpg"
                            alt="Blog Image"
                          />
                        </a>
                      </div>
                      <div className="media-body">
                        <h4 className="post-title">
                          <a className="text-inherit" href="blog-details.html">
                            What’s the Holding Back It Solution Industry?
                          </a>
                        </h4>
                        <div className="recent-post-meta">
                          <a href="blog.html">
                            <i className="fal fa-calendar-days" />
                            23 June, 2024
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="widget">
                  <h3 className="widget_title">Gallery Post</h3>
                  <div className="sidebar-gallery">
                    <div className="gallery-thumb">
                      <img
                        src="assets/img/widget/gallery_1_1.jpg"
                        alt="Gallery Image"
                      />
                      <a
                        href="assets/img/widget/gallery_1_1.jpg"
                        className="gallery-btn popup-image"
                      >
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                    <div className="gallery-thumb">
                      <img
                        src="assets/img/widget/gallery_1_2.jpg"
                        alt="Gallery Image"
                      />
                      <a
                        href="assets/img/widget/gallery_1_2.jpg"
                        className="gallery-btn popup-image"
                      >
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                    <div className="gallery-thumb">
                      <img
                        src="assets/img/widget/gallery_1_3.jpg"
                        alt="Gallery Image"
                      />
                      <a
                        href="assets/img/widget/gallery_1_3.jpg"
                        className="gallery-btn popup-image"
                      >
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                    <div className="gallery-thumb">
                      <img
                        src="assets/img/widget/gallery_1_4.jpg"
                        alt="Gallery Image"
                      />
                      <a
                        href="assets/img/widget/gallery_1_4.jpg"
                        className="gallery-btn popup-image"
                      >
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                    <div className="gallery-thumb">
                      <img
                        src="assets/img/widget/gallery_1_5.jpg"
                        alt="Gallery Image"
                      />
                      <a
                        href="assets/img/widget/gallery_1_5.jpg"
                        className="gallery-btn popup-image"
                      >
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                    <div className="gallery-thumb">
                      <img
                        src="assets/img/widget/gallery_1_6.jpg"
                        alt="Gallery Image"
                      />
                      <a
                        href="assets/img/widget/gallery_1_6.jpg"
                        className="gallery-btn popup-image"
                      >
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="widget widget_tag_cloud">
                  <h3 className="widget_title">Popular Tags</h3>
                  <div className="tagcloud">
                    <a href="blog.html">Technology</a>
                    <a href="blog.html">Advice</a>
                    <a href="blog.html">Solution</a>
                    <a href="blog.html">Consultion</a>
                    <a href="blog.html">Business</a>
                    <a href="blog.html">Services</a>
                    <a href="blog.html">Start Up</a>
                    <a href="blog.html">Agency</a>
                    <a href="blog.html">Software</a>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer-wrapper footer-layout1">
        <div className="footer-top">
          <div className="logo-bg" />
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-3">
                <div className="footer-logo">
                  <a className="icon-masking" href="index.html">
                    <span
                      data-mask-src="assets/img/logo-white.svg"
                      className="mask-icon"
                    />
                    <img src="assets/img/logo-white.svg" alt="Webteck" />
                  </a>
                </div>
              </div>
              <div className="col-xl-9">
                <div className="footer-contact-wrap">
                  <div className="footer-contact">
                    <div className="footer-contact_icon">
                      <i className="fas fa-phone" />
                    </div>
                    <div className="media-body">
                      <span className="footer-contact_text">
                        Quick Call Us:
                      </span>
                      <a
                        href="tel:+19088000393"
                        className="footer-contact_link"
                      >
                        +190-8800-0393
                      </a>
                    </div>
                  </div>
                  <div className="footer-contact">
                    <div className="footer-contact_icon">
                      <i className="fas fa-envelope" />
                    </div>
                    <div className="media-body">
                      <span className="footer-contact_text">Mail Us On:</span>
                      <a
                        href="mailto:info@webteck.com"
                        className="footer-contact_link"
                      >
                        info@webteck.com
                      </a>
                    </div>
                  </div>
                  <div className="footer-contact">
                    <div className="footer-contact_icon">
                      <i className="fas fa-location-dot" />
                    </div>
                    <div className="media-body">
                      <span className="footer-contact_text">
                        Visit Location:
                      </span>
                      <a
                        href="https://www.google.com/maps"
                        className="footer-contact_link"
                      >
                        54 Flemington, USA
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="widget-area">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-md-6 col-xxl-3 col-xl-4">
                <div className="widget footer-widget">
                  <h3 className="widget_title">About Company</h3>
                  <div className="th-widget-about">
                    <p className="about-text">
                      Professionally redefine transparent ROI through low-risk
                      high-yield imperatives. Progressively create empowered.
                      cost effective users via team driven.
                    </p>
                    <div className="th-social">
                      <a href="https://www.facebook.com/">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="https://www.twitter.com/">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="https://www.linkedin.com/">
                        <i className="fab fa-linkedin-in" />
                      </a>
                      <a href="https://www.whatsapp.com/">
                        <i className="fab fa-whatsapp" />
                      </a>
                      <a href="https://www.youtube.com/">
                        <i className="fab fa-youtube" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-auto">
                <div className="widget widget_nav_menu footer-widget">
                  <h3 className="widget_title">Quick Links</h3>
                  <div className="menu-all-pages-container">
                    <ul className="menu">
                      <li>
                        <a href="about.html">About Us</a>
                      </li>
                      <li>
                        <a href="team.html">Meet Our Team</a>
                      </li>
                      <li>
                        <a href="project.html">Our Projects</a>
                      </li>
                      <li>
                        <a href="faq.html">Help &amp; FAQs</a>
                      </li>
                      <li>
                        <a href="contact.html">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-auto">
                <div className="widget widget_nav_menu footer-widget">
                  <h3 className="widget_title">IT SERVICES</h3>
                  <div className="menu-all-pages-container">
                    <ul className="menu">
                      <li>
                        <a href="service-details.html">Web Development</a>
                      </li>
                      <li>
                        <a href="service-details.html">Business Development</a>
                      </li>
                      <li>
                        <a href="service-details.html">Product Management</a>
                      </li>
                      <li>
                        <a href="service-details.html">UI/UX Design</a>
                      </li>
                      <li>
                        <a href="service-details.html">Cloud services</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-auto">
                <div className="widget footer-widget">
                  <h3 className="widget_title">Recent Posts</h3>
                  <div className="recent-post-wrap">
                    <div className="recent-post">
                      <div className="media-img">
                        <a href="blog-details.html">
                          <img
                            src="assets/img/blog/recent-post-2-1.jpg"
                            alt="Blog Image"
                          />
                        </a>
                      </div>
                      <div className="media-body">
                        <h4 className="post-title">
                          <a className="text-inherit" href="blog-details.html">
                            Unsatiable entreaties may collecting Power.
                          </a>
                        </h4>
                        <div className="recent-post-meta">
                          <a href="blog.html">
                            <i className="fal fa-calendar-days" />
                            21 June, 2024
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="recent-post">
                      <div className="media-img">
                        <a href="blog-details.html">
                          <img
                            src="assets/img/blog/recent-post-2-2.jpg"
                            alt="Blog Image"
                          />
                        </a>
                      </div>
                      <div className="media-body">
                        <h4 className="post-title">
                          <a className="text-inherit" href="blog-details.html">
                            Regional Manager limited time management.
                          </a>
                        </h4>
                        <div className="recent-post-meta">
                          <a href="blog.html">
                            <i className="fal fa-calendar-days" />
                            22 June, 2024
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-wrap bg-title">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-6">
                <p className="copyright-text">
                  Copyright <i className="fal fa-copyright" /> 2024
                  <a href="https://themeforest.net/user/themeholy">Themeholy</a>
                  . All Rights Reserved.
                </p>
              </div>
              <div className="col-lg-6 text-end d-none d-lg-block">
                <div className="footer-links">
                  <ul>
                    <li>
                      <a href="about.html">Terms &amp; Condition</a>
                    </li>
                    <li>
                      <a href="about.html">Careers</a>
                    </li>
                    <li>
                      <a href="about.html">Privacy Policy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shape-left">
          <img src="assets/img/shape/footer_shape_2.svg" alt="shape" />
        </div>
        <div className="shape-right">
          <div className="particle-1" id="particle-5" />
        </div>
      </footer>
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

export default BlogPage;
