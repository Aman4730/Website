import React, { useState } from "react";
import logimetrixlogo1 from "../../Imges/logimetrixlogo1.png";
import { Link } from "react-router-dom";
const NavBar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [closing, setClosing] = useState(false);

  const handleMouseEnter = (menu) => {
    setTimeout(() => {
      setClosing(false);
      setActiveMenu(menu);
    }, 200);
  };

  const handleMenuClick = () => {
    setClosing(true);
    setTimeout(() => {
      setActiveMenu(null);
      setClosing(false);
    }, 200);
  };
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
                    <Link className="icon-masking" to="/">
                      <span
                        data-mask-src="assets/img/logo.svg"
                        className="mask-icon"
                      />
                      <img
                        src={logimetrixlogo1}
                        alt="logimetrix"
                        style={{ width: "130px", height: "45px" }}
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-auto">
                  <nav className="main-menu d-none d-lg-inline-block">
                    <ul>
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/aboutus">About Us</Link>
                      </li>

                      <li
                        className={`menu-item-has-children mega-menu-wrap ${
                          activeMenu === "solution" ? "active" : ""
                        } ${closing ? "closing" : ""}`}
                        onMouseEnter={() => handleMouseEnter("solution")}
                        onClick={handleMenuClick}
                      >
                        <a href="#">Solution</a>
                        {activeMenu === "solution" && (
                          <ul className="mega-menu smooth-dropdown">
                            <li>
                              <a href="#">Standalone Products</a>
                              <ul style={{ marginBottom: "20px" }}>
                                <li>
                                  <Link to="/solutions/qblock">Qblock</Link>
                                </li>
                                <li>
                                  <Link to="/solutions/LogBooksPage">
                                    LogBooks
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/solutions/edusaroj">
                                    Saroj Education
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/solutions/VisionDeskPage">
                                    VisionDesk (MIS Portal)
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/solutions/SaiSoftwarePage">
                                    Sai-Software (College Fee Mgmt)
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/solutions/AksharPage">
                                    Akshar(Loan Management system)
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/solutions/SAGPage">
                                    SAG (System for Agricultural Growth)
                                  </Link>
                                </li>

                                <li>
                                  <Link to="/solutions/TrakFuelPage">
                                    TrakFuel
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/solutions/IManagerPage">
                                    IManager
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/solutions/CropnetPage">
                                    Cropnet
                                  </Link>
                                </li>
                              </ul>
                              <a href="#">ERP Solutions</a>
                              <ul>
                                <li>
                                  <a href="home-startup-company.html">
                                    Eklavya
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="#">Data Science</a>
                              <ul>
                                <li>
                                  <Link to="/solutions/FieldQuotationSystemPage">
                                    Field Quotation System
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/solutions/DecisionSupportSystemPage">
                                    Decision Support System
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/solutions/IssueManagementSystemPage">
                                    Issue Management System
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/solutions/AgricultureInformationSystemPage">
                                    Agriculture Information System
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="#">Internet of Things (IoT)</a>
                              <ul>
                                <li>
                                  <Link to="/solutions/PhotonPage">
                                    Photon (Centralized Solar Solution)
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/solutions/MilkAnalyserPage">
                                    Milk Analyser
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/solutions/DairyApplicationPage">
                                    Dairy Application
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="#">Mobile Applications</a>
                              <ul>
                                <li>
                                  <Link to="/solutions/IRediPage">IRedi</Link>
                                </li>
                                <li>
                                  <Link to="/solutions/KarGoPage">KarGo</Link>
                                </li>

                                <li>
                                  <Link to="/solutions/MonitorMPage">
                                    MonitorM
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/solutions/JKTourismPage">
                                    J&K Tourism
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/solutions/TourismApplicationPage">
                                    Tourism Application
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/solutions/SarojEducationPage">
                                    Saroj Education Mobile app
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/solutions/CommunicationApplicationPage">
                                    Communication Application
                                  </Link>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        )}
                      </li>
                      <li className="menu-item-has-children mega-menu-wrap">
                        <a href="#">Services</a>
                        <ul className="mega-menu">
                          <li>
                            <a href="#">IT Services</a>
                            <ul style={{ marginBottom: "20px" }}>
                              <li>
                                <Link to="/solutions/qblock">
                                  Application Development
                                </Link>
                              </li>
                              <li>
                                <Link to="/solutions/LogBooksPage">
                                  POC Development
                                </Link>
                              </li>
                              <li>
                                <Link to="/solutions/edusaroj">
                                  Product-Oriented Delivery
                                </Link>
                              </li>
                              <li>
                                <Link to="/solutions/VisionDeskPage">
                                  Enterprise Application
                                </Link>
                              </li>
                              <li>
                                <Link to="/solutions/SaiSoftwarePage">
                                  Application Re-engineering
                                </Link>
                              </li>
                              <li>
                                <Link to="/solutions/AksharPage">
                                  Cloud Migration
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">Infra Services</a>
                            <ul>
                              <li>
                                <a href="home-sass-landing-2.html">
                                  Indus Towers Limited
                                </a>
                              </li>
                              <li>
                                <a href="home-ai-technology.html">
                                  Central Cattle Breeding Farm (CCBF) Renovation
                                </a>
                              </li>
                              <li>
                                <a href="home-cyber-security.html">
                                  Organic Health Products Initiative
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">Accomplishments</a>
                            <ul>
                              <li>
                                <a href="home-digital-agency-op.html">
                                  MOVCDNER
                                </a>
                              </li>
                              <li>
                                <a href="home-web-development-op.html">
                                  Jammu Smart City Project
                                </a>
                              </li>
                              <li>
                                <a href="home-web-development-op.html">
                                  Acme Solar CMS System
                                </a>
                              </li>
                              <li>
                                <a href="home-web-development-op.html">
                                  Jammu Tourism
                                </a>
                              </li>
                            </ul>
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
                        <Link to="/">Carrer</Link>
                      </li>
                    </ul>
                  </nav>
                  <div className="header-button">
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
                    <Link to="/contactUs" className="th-btn shadow-none">
                      Contact Us
                      <i className="fas fa-arrow-right ms-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <style>
        {`
          .smooth-dropdown {
            transition: opacity 0.3s ease, transform 0.3s ease;
            opacity: 1;
            transform: translateY(0);
          }
          .closing .smooth-dropdown {
            opacity: 0;
            transform: translateY(-10px);
          }
        `}
      </style>
    </>
  );
};

export default NavBar;
