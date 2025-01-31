import React from "react";
import logimetrixlogo1 from "../../Imges/logimetrixlogo1.png";
const NavBar = () => {
  return (
    <>
      <header className="th-header header-layout2">
        <div className="header-top">
          <div className="container">
            <div className="row justify-content-center justify-content-lg-between align-items-center gy-2">
              <div className="col-auto d-none d-lg-block">
                <div className="header-links">
                  <ul>
                    <li>
                      <i className="fas fa-map-location" />
                      54 NJ-12, Flemington, United States
                    </li>
                    <li>
                      <i className="fas fa-phone" />
                      <a href="tel:+1539873657">+153-987-3657</a>
                    </li>
                    <li>
                      <i className="fas fa-envelope" />
                      <a href="mailto:info@logimetrix.com">
                        info@logimetrix.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-auto">
                <div className="header-social">
                  <a href="path/to/download" download>
                    <i className="fas fa-download" />
                    <span style={{ marginLeft: "8px" }}>Download</span>
                  </a>
                  <a
                    href="path/to/download"
                    download
                    style={{ marginLeft: "16px" }}
                  >
                    <i className="fas fa-download" />
                    <span style={{ marginLeft: "8px" }}>Download</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sticky-wrapper">
          <div className="menu-area">
            <div className="container">
              <div className="row align-items-center justify-content-between">
                <div className="col-auto">
                  <div className="header-logo">
                    <a className="icon-masking" href="/">
                      <span
                        data-mask-src="assets/img/logo.svg"
                        className="mask-icon"
                      />
                      <img
                        src={logimetrixlogo1}
                        alt="logimetrix"
                        style={{ width: "130px", height: "45px" }}
                      />
                    </a>
                  </div>
                </div>
                <div className="col-auto">
                  <nav className="main-menu d-none d-lg-inline-block">
                    <ul>
                      <li>
                        <a href="/">Home</a>
                      </li>
                      <li>
                        <a href="/aboutus">About Us</a>
                      </li>

                      <li className="menu-item-has-children mega-menu-wrap">
                        <a href="#">Solution</a>
                        <ul className="mega-menu">
                          <li>
                            <a href="#">Standalone Products</a>
                            <ul style={{ marginBottom: "20px" }}>
                              <li>
                                <a href="index.html">TrakMob</a>
                              </li>
                              <li>
                                <a href="home-web-development.html">
                                  Absolute Study
                                </a>
                              </li>
                              <li>
                                <a href="home-software-company.html">
                                  TrakFuel
                                </a>
                              </li>
                              <li>
                                <a href="home-software-company-2.html">
                                  IManager
                                </a>
                              </li>
                              <li>
                                <a href="home-startup-company.html">Cropnet</a>
                              </li>
                            </ul>
                            <a href="#">ERP Solutions</a>
                            <ul>
                              <li>
                                <a href="home-startup-company.html">Eklavya</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">Data Science</a>
                            <ul>
                              <li>
                                <a href="home-sass-landing-2.html">
                                  Issue Management System
                                </a>
                              </li>
                              <li>
                                <a href="home-app-landing.html">
                                  Agriculture Information System
                                </a>
                              </li>
                              <li>
                                <a href="home-ai-technology.html">
                                  Field Quotation System
                                </a>
                              </li>
                              <li>
                                <a href="home-cyber-security.html">
                                  Decision Support System
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">Internet of Things (IoT)</a>
                            <ul>
                              <li>
                                <a href="home-digital-agency-op.html">
                                  Milk Analyser
                                </a>
                              </li>
                              <li>
                                <a href="home-web-development-op.html">
                                  Dairy Application
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">Mobile Applications</a>
                            <ul>
                              <li>
                                <a href="home-sass-landing-2-op.html">KarGo</a>
                              </li>
                              <li>
                                <a href="home-app-landing-op.html">IRedi</a>
                              </li>
                              <li>
                                <a href="home-ai-technology-op.html">
                                  MonitorM
                                </a>
                              </li>
                              <li>
                                <a href="home-cyber-security-op.html">
                                  Communication Application
                                </a>
                              </li>
                              <li>
                                <a href="home-cyber-security-2-op.html">
                                  Tourism Application
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Services</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="service.html">Services</a>
                          </li>
                          <li>
                            <a href="service-details.html">Services Details</a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Pages</a>
                        <ul className="sub-menu">
                          <li className="menu-item-has-children">
                            <a href="#">Shop</a>
                            <ul className="sub-menu">
                              <li>
                                <a href="shop.html">Shop</a>
                              </li>
                              <li>
                                <a href="shop-details.html">Shop Details</a>
                              </li>
                              <li>
                                <a href="cart.html">Cart Page</a>
                              </li>
                              <li>
                                <a href="checkout.html">Checkout</a>
                              </li>
                              <li>
                                <a href="wishlist.html">Wishlist</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="team.html">Team</a>
                          </li>
                          <li>
                            <a href="team-details.html">Team Details</a>
                          </li>
                          <li>
                            <a href="project.html">Project</a>
                          </li>
                          <li>
                            <a href="project-details.html">Project Details</a>
                          </li>
                          <li>
                            <a href="gallery.html">Gallery</a>
                          </li>
                          <li>
                            <a href="pricing.html">Pricing</a>
                          </li>
                          <li>
                            <a href="faq.html">Faq Page</a>
                          </li>
                          <li>
                            <a href="error.html">Error Page</a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Blog</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="blog.html">Blog</a>
                          </li>
                          <li>
                            <a href="blog-details.html">Blog Details</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                    </ul>
                  </nav>
                  <div className="header-button">
                    <button
                      type="button"
                      className="icon-btn sideMenuToggler d-inline-block d-lg-none"
                    >
                      <i className="far fa-shopping-cart" />
                      <span className="badge">5</span>
                    </button>
                    <button
                      type="button"
                      className="th-menu-toggle d-inline-block d-lg-none"
                    >
                      <i className="far fa-bars" />
                    </button>
                  </div>
                </div>
                <div className="col-auto d-none d-lg-block">
                  <div className="header-button">
                    <a href="contact.html" className="th-btn shadow-none">
                      Contact Us
                      <i className="fas fa-arrow-right ms-2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
