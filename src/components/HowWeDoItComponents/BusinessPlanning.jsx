import React from "react";

const BusinessPlanning = () => {
  return (
    <section className="overflow-hidden space-bottom" id="blog-sec">
      <div className="container th-container4">
        <div className="title-area text-center">
          <span className="sub-title text-capitalize fs-20">
            <div className="icon-masking me-2">
              <span
                className="mask-icon"
                data-mask-src="assets/img/theme-img/title_shape_5.svg"
              />
              <img src="assets/img/theme-img/title_shape_5.svg" alt="shape" />
            </div>
            News &amp; Blog
          </span>
          <h2 className="sec-title">Webteck Blog &amp; News</h2>
        </div>
        <div className="row gx-30 gy-30">
          <div className="col-xl-6">
            <div className="blog-grid">
              <div className="blog-img">
                <img src="assets/img/blog/blog_12_3.jpg" alt="blog image" />
              </div>
              <div className="blog-content">
                <h3 className="box-title">
                  <a href="blog-details.html">
                    Many of those products offer the potential...
                  </a>
                </h3>
                <p className="blog-text">
                  Praesent tempor mollis aliquet rhoncus vestibulum ridiculus
                  vivamus, donec ac vehicula interdum congue scelerisque duis
                  lacinia, conubia egestas...
                </p>
                <a href="blog-details.html" className="line-btn">
                  Learn More
                  <i className="fa-regular fa-arrow-right" />
                </a>
                <hr className="blog-line" />
                <div className="blog-meta">
                  <a href="blog.html">
                    <i className="far fa-calendar" />
                    25 Feb , 2024
                  </a>
                  <a className="author" href="blog.html">
                    <i className="far fa-user" />
                    By Webteck
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="blog-grid style2">
              <div className="blog-img">
                <img src="assets/img/blog/blog_12_1.jpg" alt="blog image" />
              </div>
              <div className="blog-content">
                <h3 className="box-title">
                  <a href="blog-details.html">
                    Webteck Wins Award for Excellence in Cloud Migration
                    Services
                  </a>
                </h3>
                <a href="blog-details.html" className="line-btn">
                  Learn More
                  <i className="fa-regular fa-arrow-right" />
                </a>
                <hr className="blog-line" />
                <div className="blog-meta">
                  <a className="author" href="blog.html">
                    <i className="far fa-user" />
                    By Webteck
                  </a>
                  <a href="blog.html">
                    <i className="far fa-calendar" />
                    20 Apr 2024
                  </a>
                </div>
              </div>
            </div>
            <div className="blog-grid style2 mt-30">
              <div className="blog-img">
                <img src="assets/img/blog/blog_1_2.jpg" alt="blog image" />
              </div>
              <div className="blog-content">
                <h3 className="box-title">
                  <a href="blog-details.html">
                    Webteck Announces Partnership with Leading Technology
                    Company
                  </a>
                </h3>
                <a href="blog-details.html" className="line-btn">
                  Learn More
                  <i className="fa-regular fa-arrow-right" />
                </a>
                <hr className="blog-line" />
                <div className="blog-meta">
                  <a className="author" href="blog.html">
                    <i className="far fa-user" />
                    By Webteck
                  </a>
                  <a href="blog.html">
                    <i className="far fa-calendar" />
                    20 Apr 2024
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessPlanning;
