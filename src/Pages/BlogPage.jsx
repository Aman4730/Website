import React, { useState } from "react";
import { Link } from "react-router-dom";
import MainHeading from "../components/MainHeading";
import blogs11 from "../assets/img/blog/blog-s-1-1.jpg";
import author11 from "../assets/img/blog/author-1-1.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const blogsPerPage = 3;
const BlogPage = () => {
  const blogImg = [
    {
      type: "image",
      title: "Unsatiable entreaties may collecting Power.",
      desc: "Progressively plagiarize quality metrics for impactful data. Assertively. Holisticly leverage existing magnetic functionalities. Assertively orchestrate high-quality customer service vis-a-vis intuitive interfaces. Conveniently enhance highly efficient infomediaries.",
      img: blogs11,
    },
    {
      type: "image",
      title: "Unsatiable entreaties may collecting Power.",
      desc: "Progressively plagiarize quality metrics for impactful data. Assertively. Holisticly leverage existing magnetic functionalities. Assertively orchestrate high-quality customer service vis-a-vis intuitive interfaces. Conveniently enhance highly efficient infomediaries.",
      img: blogs11,
    },
    {
      type: "image",
      title: "Unsatiable entreaties may collecting Power.",
      desc: "Progressively plagiarize quality metrics for impactful data. Assertively. Holisticly leverage existing magnetic functionalities. Assertively orchestrate high-quality customer service vis-a-vis intuitive interfaces. Conveniently enhance highly efficient infomediaries.",
      img: blogs11,
    },
  ];
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(blogImg.length / blogsPerPage);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogImg.slice(indexOfFirstBlog, indexOfLastBlog);

  const paginate = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div>
      <MainHeading
        title="BLOG"
        subtitle="BLOG"
        breadcrumbs={[{ label: "Home", link: "/" }, { label: "Blog" }]}
      />
      <section className="th-blog-wrapper space-top space-extra-bottom">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-lg-7">
              {currentBlogs.map((blog, index) => (
                <div
                  className="th-blog blog-single has-post-thumbnail"
                  key={index}
                >
                  {blog.img && (
                    <div className="blog-img">
                      <img src={blog.img} alt="Blog Image" />
                    </div>
                  )}
                  <div className="blog-content">
                    <div className="blog-meta">
                      <a className="author" href="blog.html">
                        <img src={author11} alt="avatar" /> By Themeholy
                      </a>
                      <a href="blog.html">
                        <i className="fa-light fa-calendar-days" /> 21 June,
                        2024
                      </a>
                      <a href="blog-details.html">
                        <i className="fa-regular fa-comments" /> Comments (3)
                      </a>
                    </div>
                    <h2 className="blog-title">
                      <spam>{blog.title}</spam>
                    </h2>
                    <p className="blog-text">{blog.desc}</p>
                    <a href="blog-details.html" className="line-btn">
                      Read More
                    </a>
                  </div>
                </div>
              ))}
              <div className="th-pagination text-center">
                <ul>
                  {[...Array(totalPages)].map((_, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className={currentPage === index + 1 ? "active" : ""}
                        onClick={(e) => {
                          e.preventDefault();
                          paginate(index + 1);
                        }}
                      >
                        {index + 1}
                      </a>
                    </li>
                  ))}

                  {currentPage < totalPages && (
                    <li>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          paginate(currentPage + 1);
                        }}
                      >
                        <i className="far fa-arrow-right" />
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            </div>
            <div className="col-xxl-4 col-lg-5">
              <aside className="sidebar-area">
                <div className="widget widget_categories">
                  <button
                    onClick={() => console.log("sdfsafd")}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      margin: "0 0 10px 0",
                      padding: "16px 25px",
                      fontSize: "16px",
                      fontWeight: "500",
                      lineHeight: "1.313",
                      borderRadius: "4px",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                      width: "100%",
                      transition: "all 0.3s ease",
                      backgroundColor: "white",
                      color: "#2f2f33",
                    }}
                    onMouseOver={(e) => {
                      e.target.style.backgroundColor = "#4786e6";
                      e.target.style.color = "white";
                      e.target.querySelector("svg").style.color = "white";
                    }}
                    onMouseOut={(e) => {
                      e.target.style.backgroundColor = "white";
                      e.target.style.color = "#2f2f33";
                      e.target.querySelector("svg").style.color = "#4786e6";
                    }}
                  >
                    Create Blog
                    <ArrowForwardIcon
                      style={{
                        marginLeft: "10px",
                        color: "#4786e6",
                        transition: "color 0.3s",
                      }}
                    />
                  </button>
                </div>
                <div className="widget widget_categories">
                  <h3 className="widget_title">Categories</h3>
                  <ul>
                    <li>
                      <Link to="/solutions/qblock">IT Solution</Link>
                    </li>
                    <li>
                      <Link to="/services/IndusTowersLimited">
                        Infra Services
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/MOVCDNER">Accomplishments</Link>
                    </li>
                    <li>
                      <Link to="/solutions/FieldQuotationSystemPage">
                        Data Analytics
                      </Link>
                    </li>
                    <li>
                      <Link to="/solutions/PhotonPage">
                        Internet of Things (IoT)
                      </Link>
                    </li>
                    <li>
                      <Link to="/HowWeDoIt">How we do it</Link>
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
    </div>
  );
};

export default BlogPage;
