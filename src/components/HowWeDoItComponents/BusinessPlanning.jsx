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
          <h2 className="sec-title">Integrated Business &amp; Planning</h2>
        </div>
        <div className="row gx-30 gy-30">
          <div className="col-xl-6">
            <div className="blog-grid">
              <div className="blog-img">
                <img src="assets/img/blog/blog_12_3.jpg" alt="blog image" />
              </div>
              <div className="blog-content">
                <h3 className="box-title">
                  <a href="blog-details.html">Integrated Business & Planning</a>
                </h3>
                <p className="blog-text">
                  Logimetrix specializes in designing and implementing
                  integrated business planning solutions to maximize business
                  value and provide deep insights into business performance. We
                  combine best practices in planning processes, powerful and
                  scalable model design, data architectures and strategies, and
                  reporting and analytics tools to drive client results and
                  lasting value. Below is a sample of our technical
                  partnerships.
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
                  <a href="blog-details.html">Anaplan</a>
                </h3>
                <p className="blog-text">
                  Anaplan is driving a new age of connected planning.
                  Organizations use Anaplan’s platform to make better decisions
                  and drive planning.
                </p>
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
                  <a href="blog-details.html">Oracle PBCS</a>
                </h3>
                <p className="blog-text">
                  Oracle PBCS enables enterprise planning and budgeting with
                  scalability, simplicity, and accuracy for quick
                  decision-making
                </p>
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
