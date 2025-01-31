import React from "react";
import footerLogo from "../../Imges/footerLogo.png";
const Footer = () => {
  return (
    <footer className="footer-wrapper footer-layout1">
      <div className="widget-area">
        <div
          className="container"
          style={{ maxWidth: "1500px", paddingLeft: "30px" }}
        >
          <div className="row justify-content-between">
            <div className="col-md-6 col-xxl-3 col-xl-4">
              <div className="widget footer-widget">
                <h3 className="widget_title">About Company</h3>
                <div className="th-widget-about">
                  <p className="about-text">
                    <img
                      src={footerLogo}
                      alt="Logimetrix Tech Solution"
                      style={{
                        width: "170px",
                        height: "auto",
                      }}
                    />
                    <br />
                    Logimetrix Techsolutions is a rapidly growing business
                    solution provider organisation founded by Indian Institute
                    of Technology (IIT) alumni with extensive experience in
                    designing and developing cutting edge custom software
                    solutions.
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
            <div
              className="col-md-5 col-xl-auto"
              style={{ marginRight: "35px" }}
            >
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">Quick Links</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu">
                    <li>
                      <a href="about.html">
                        <p className="about-text">About Us</p>
                      </a>
                    </li>
                    <li>
                      <a href="team.html">
                        <p className="about-text">Meet Our Team</p>
                      </a>
                    </li>
                    <li>
                      <a href="project.html">
                        <p className="about-text">Our Projects</p>
                      </a>
                    </li>
                    <li>
                      <a href="faq.html">
                        <p className="about-text">Help &amp; FAQs</p>
                      </a>
                    </li>
                    <li>
                      <a href="contact.html">
                        <p className="about-text">Contact Us</p>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-xl-auto">
              <div className="widget footer-widget">
                <h3 className="widget_title">Contact US</h3>
                <div className="th-widget-contact">
                  <div className="footer-contact">
                    <div
                      className="footer-contact_icon"
                      style={{ marginTop: "-30px" }}
                    >
                      <i className="fas fa-phone"></i>
                    </div>
                    <div className="media-body">
                      <p href="tel:+19088000393" className="about-text">
                        +91(993)-554-0006 / (993)-587-6555
                      </p>
                    </div>
                  </div>
                  <div className="footer-contact">
                    <div
                      className="footer-contact_icon"
                      style={{ marginTop: "-30px" }}
                    >
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div className="media-body">
                      <p href="mailto:info@webteck.com" className="about-text">
                        info@webteck.com
                      </p>
                    </div>
                  </div>
                  <div className="footer-contact">
                    <div
                      className="footer-contact_icon"
                      style={{ marginTop: "-50px" }}
                    >
                      <i className="fas fa-location-dot"></i>
                    </div>
                    <div className="media-body">
                      <p
                        href="https://www.google.com/maps"
                        className="about-text"
                      >
                        3/23, Vikaskhand 3, Vikas Khand, Gomti Nagar, Lucknow,
                        Uttar Pradesh 226010
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">Our Offices</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu">
                    <li>
                      <a href="service-details.html">LUCKNOW OFFICE</a>
                    </li>
                    <li>
                      <p className="about-footer-text">
                        Krishna Sadan, 3/204, 3rd Floor, Vikas Khand Gomti
                        Nagar, Lucknow, Uttar Pradesh- 226 010
                      </p>
                    </li>
                    <li>
                      <a href="service-details.html">DELHI OFFICE</a>
                    </li>
                    <li>
                      <p className="about-footer-text">
                        E-5, Ist Floor, Connaught Place, New Delhi-110001
                      </p>
                    </li>
                    <li>
                      <a href="service-details.html">BANGLORE OFFICE</a>
                    </li>
                    <li>
                      <p className="about-footer-text">
                        #4/1, 4th Main, Pinnacle Square, Dollars Colony RMV 2nd
                        Stage, Bangalore- 560 094
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="copyright-wrap bg-title"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          width: "100%",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p
                className="copyright-text"
                style={{ margin: 0, width: "100%" }}
              >
                Copyright © 2012-2025 Logimetrix Techsolutions Pvt. Ltd, All
                Rights Reserved.
              </p>
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
  );
};

export default Footer;
