import React, { useState } from "react";
import { Link } from "react-router-dom";
import blogs11 from "../../assets/img/blog/blog-s-1-1.jpg";
import author11 from "../../assets/img/blog/author-1-1.png";
import noBlog from "../../Imges/noBlog.gif";
import MainHeading from "../MainHeading";

const blogsPerPage = 6;

const BlogApprovalPage = () => {
  const blogImg = [
    {
      id: 1,
      img: blogs11,
      title: "Understanding React Hooks",
      desc: "A deep dive into React hooks and how they can be used effectively in modern web development...",
      date: "21 June, 2024",
      comments: 5,
    },
    {
      id: 2,
      img: blogs11,
      title: "JavaScript ES6 Features",
      desc: "Explore the most useful features of ES6 that make JavaScript development easier...",
      date: "18 June, 2024",
      comments: 8,
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

  const handleApprove = (id) => {
    console.log(`Blog ${id} Approved`);
  };

  const handleReject = (id) => {
    console.log(`Blog ${id} Rejected`);
  };

  return (
    <div>
      <MainHeading
        title="Admin Blog Approval"
        subtitle="Admin Blog Approval"
        breadcrumbs={[{ label: "Home", link: "/" }, { label: "Blog" }]}
      />
      <section className="th-blog-wrapper space-top space-extra-bottom">
        <div className="container">
          <div className="row">
            {currentBlogs.length > 0 ? (
              currentBlogs.map((blog) => (
                <div className="col-lg-4 col-md-6 mb-4" key={blog.id}>
                  <div className="th-blog blog-single has-post-thumbnail">
                    {blog.img && (
                      <div className="blog-img">
                        <img
                          src={blog.img}
                          alt="Blog Image"
                          className="img-fluid"
                        />
                      </div>
                    )}
                    <div className="blog-content">
                      <div className="blog-meta">
                        <Link className="author" to="/contactUs">
                          <img src={author11} alt="avatar" /> By Logimetrix
                        </Link>
                        <Link to="/contactUs">
                          <i className="fa-light fa-calendar-days" />{" "}
                          {blog.date}
                        </Link>
                      </div>
                      <h6>
                        <span>{blog.title}</span>
                      </h6>
                      <p className="blog-text">{blog.desc}</p>
                      <div className="blog-actions d-flex align-items-center justify-content-between">
                        <Link to="/contactUs" className="line-btn">
                          Read More
                        </Link>
                        <div className="d-flex" style={{ marginLeft: "auto" }}>
                          <button
                            className="btn btn-success ms-2"
                            onClick={() => handleApprove(blog.id)}
                          >
                            <i className="fas fa-check-circle"></i>
                          </button>
                          <button
                            className="btn btn-danger ms-2"
                            onClick={() => handleReject(blog.id)}
                          >
                            <i className="fas fa-times-circle"></i>
                          </button>
                        </div>
                      </div>
                    </div>
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
          </div>
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
      </section>
    </div>
  );
};

export default BlogApprovalPage;
