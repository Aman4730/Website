import React, { useState } from "react";
import { Link } from "react-router-dom";
import MainHeading from "../components/MainHeading";
import blogs11 from "../assets/img/blog/blog-s-1-1.jpg";
import author11 from "../assets/img/blog/author-1-1.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import noBlog from "../Imges/noBlog.gif";
const blogsPerPage = 3;
const BlogPage = () => {
  const blogImg = [];
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
              {currentBlogs.length > 0 ? (
                currentBlogs.map((blog, index) => (
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
                        <Link className="author" to="/contactUs">
                          <img src={author11} alt="avatar" /> By Logimetrix
                        </Link>
                        <Link to="/contactUs">
                          <i className="fa-light fa-calendar-days" /> 21 June,
                          2024
                        </Link>
                        <Link to="/contactUs">
                          <i className="fa-regular fa-comments" /> Comments (3)
                        </Link>
                      </div>
                      <h2 className="blog-title">
                        <span>{blog.title}</span>
                      </h2>
                      <p className="blog-text">{blog.desc}</p>
                      <Link to="/contactUs" className="line-btn">
                        Read More
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <div
                  className="d-flex flex-column align-items-center justify-content-center text-center"
                  style={{ minHeight: "300px" }}
                >
                  <img
                    src={noBlog}
                    alt="No Blogs Available"
                    style={{ width: "500px" }}
                  />
                  <h3
                    style={{
                      fontWeight: "600",
                      color: "#444",
                      marginTop: "10px",
                    }}
                  >
                    No Blogs Available
                  </h3>
                </div>
              )}
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
                      <Link to="/qblock">IT Solution</Link>
                    </li>
                    <li>
                      <Link to="/IndusTowersLimited">Infra Services</Link>
                    </li>
                    <li>
                      <Link to="/MOVCDNER">Accomplishments</Link>
                    </li>
                    <li>
                      <Link to="/FieldQuotationSystemPage">Data Analytics</Link>
                    </li>
                    <li>
                      <Link to="/PhotonPage">Internet of Things (IoT)</Link>
                    </li>
                    <li>
                      <Link to="/HowWeDoIt">How we do it</Link>
                    </li>
                  </ul>
                </div>
                <div className="widget widget_tag_cloud">
                  <h3 className="widget_title">Popular Tags</h3>
                  <div className="tagcloud">
                    <Link to="/contactUs">Technology</Link>
                    <Link to="/contactUs">Advice</Link>
                    <Link to="/contactUs">Solution</Link>
                    <Link to="/contactUs">Consultion</Link>
                    <Link to="/contactUs">Business</Link>
                    <Link to="/contactUs">Services</Link>
                    <Link to="/contactUs">Start Up</Link>
                    <Link to="/contactUs">Agency</Link>
                    <Link to="/contactUs">Software</Link>
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
