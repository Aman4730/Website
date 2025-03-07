import React from "react";
import title_shape_2 from "../../assets/img/theme-img/title_shape_2.svg";

const BusinessPlanning = ({ blogData, space }) => {
  return (
    <section
      className={`overflow-hidden ${space ? "space-bottom" : ""}`}
      id="blog-sec"
    >
      <div className="container th-container4">
        <div className="title-area text-center">
          <span className="sub-title text-capitalize fs-20">
            <div className="icon-masking me-2">
              <img src={title_shape_2} alt="shape" />
            </div>
            {blogData.title}
          </span>
          <h2 className="sec-title">{blogData.Subtitle}</h2>
        </div>

        {/* Grid layout applied */}
        <div className="row gx-30 gy-30 d-flex flex-wrap">
          {/* First Blog - Full Width */}
          <div className="col-xl-6">
            <div className="blog-grid">
              <div className="blog-img">
                <img src={blogData.BusinessData[0].image} alt="blog image" />
              </div>
              <div className="blog-content">
                <h3 className="box-title">
                  <a href="blog-details.html">
                    {blogData.BusinessData[0].title}
                  </a>
                </h3>
                <p className="blog-text">
                  {blogData.BusinessData[0].description}
                </p>
                <a href="blog-details.html" className="line-btn">
                  Learn More <i className="fa-regular fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>

          {/* Remaining Blogs in Right Column */}
          <div className="col-xl-6 d-flex flex-column">
            {blogData.BusinessData.slice(1).map((blog, index) => (
              <div
                className={`blog-grid style2 ${index === 1 ? "mt-30" : ""}`}
                key={blog.id}
              >
                <div className="blog-img">
                  <img src={blog.image} alt="blog image" />
                </div>
                <div className="blog-content">
                  <h3 className="box-title">
                    <a href="blog-details.html">{blog.title}</a>
                  </h3>
                  <p className="blog-text">{blog.description}</p>
                  <a href="blog-details.html" className="line-btn">
                    Learn More <i className="fa-regular fa-arrow-right" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessPlanning;
