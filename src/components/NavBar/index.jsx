import React, { useState } from "react";
import logimetrixlogo1 from "../../Imges/logimetrixlogo1.png";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, AppBar, Toolbar } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BarChartIcon from "@mui/icons-material/BarChart";
import DescriptionIcon from "@mui/icons-material/Description";
import LayersIcon from "@mui/icons-material/Layers";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState({});

  const toggleDrawer = () => setOpen(!open);
  const handleSubmenuToggle = (index) =>
    setSubmenuOpen((prev) => ({ ...prev, [index]: !prev[index] }));

  const token = localStorage.getItem("token");
  return (
    <>
      <header className="th-header header-layout2">
        <MobileMenu
          open={open}
          toggleDrawer={toggleDrawer}
          submenuOpen={submenuOpen}
          handleSubmenuToggle={handleSubmenuToggle}
        />
        <div className="header-top">
          <div className="container">
            <div className="row justify-content-center justify-content-lg-between align-items-center gy-2">
              <div className="col-auto d-none d-lg-block">
                <div className="header-links">
                  <ul>
                    <li>
                      <i className="fas fa-map-location" />
                      3/23, Vikas khand, Gomti Nagar ,Lucknow
                    </li>
                    <li>
                      <i className="fas fa-phone" />
                      <a href="tel:+1539873657">+993-554-0006</a>
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
                    <span style={{ marginLeft: "8px" }}>Brochure</span>
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
                      <li className="menu-item-has-children mega-menu-wrap">
                        <a href="#">What we do</a>
                        <ul className="mega-menu">
                          <li>
                            <a href="#">IT Services</a>
                            <ul style={{ marginBottom: "20px" }}>
                              <li>
                                <Link to="/services/ApplicationDevelopment">
                                  Application Development
                                </Link>
                              </li>
                              <li>
                                <Link to="/services/POCDevelopment">
                                  POC Development
                                </Link>
                              </li>
                              <li>
                                <Link to="/services/ProductOrientedDelivery">
                                  Product-Oriented Delivery
                                </Link>
                              </li>
                              <li>
                                <Link to="/services/EnterpriseApplication">
                                  Enterprise Application
                                </Link>
                              </li>
                              <li>
                                <Link to="/services/ApplicationReengineering">
                                  Application Re-engineering
                                </Link>
                              </li>
                              <li>
                                <Link to="/services/CloudMigration">
                                  Cloud Migration
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">Infra Services</a>
                            <ul>
                              <li>
                                <Link to="/services/IndusTowersLimited">
                                  Indus Towers Limited
                                </Link>
                              </li>
                              <li>
                                <Link to="/services/OrganicHealthProductsInitiative">
                                  Organic Health Products Initiative
                                </Link>
                              </li>
                              <li>
                                <Link to="/services/CentralCattleBreedingFarm">
                                  Central Cattle Breeding Farm (CCBF) Renovation
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">Accomplishments</a>
                            <ul>
                              <li>
                                <Link to="/services/MOVCDNER">MOVCDNER</Link>
                              </li>
                              <li>
                                <Link to="/services/JammuSmartCityProject">
                                  Jammu Smart City Project
                                </Link>
                              </li>
                              <li>
                                <Link to="/services/AcmeSolarCMSSystem">
                                  Acme Solar CMS System
                                </Link>
                              </li>
                              <li>
                                <Link to="/services/JammuTourism">
                                  Jammu Tourism
                                </Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/aboutus">How we do it</Link>
                      </li>
                      <li>
                        <Link to="/aboutus">Why Us</Link>
                      </li>
                      <li className="menu-item-has-children mega-menu-wrap">
                        <a href="#">Solution</a>
                        <ul className="mega-menu">
                          <li>
                            <a href="#">Standalone Products</a>
                            <ul style={{ marginBottom: "10px" }}>
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
                                <Link to="/solutions/CollegeFeeManagement">
                                  College Fee Management
                                </Link>
                              </li>
                              <li>
                                <Link to="/solutions/StudentFinanceManagement">
                                  Student Finance Management
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
                                <Link to="/solutions/CropnetPage">Cropnet</Link>
                              </li>
                            </ul>
                            <a href="#">ERP Solutions</a>
                            <ul>
                              <li>
                                <Link to="/solutions/EklavyaPage">Eklavya</Link>
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
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Blog</a>
                        <ul className="sub-menu">
                          <li>
                            <Link to="/Blog">Blog</Link>
                          </li>
                          <li>
                            <Link to="/Gallery">Gallery</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/CarrerPage">Carrer</Link>
                      </li>
                      {token && (
                        <li>
                          <Link to="/adminpost">Admin Post</Link>
                        </li>
                      )}
                    </ul>
                  </nav>
                  <div className="header-button">
                    <button
                      type="button"
                      className="th-menu-toggle d-inline-block d-lg-none"
                      onClick={toggleDrawer}
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
      <style jsx>{`
        .mega-menu::-webkit-scrollbar {
          width: 8px;
        }
        .mega-menu::-webkit-scrollbar-thumb {
          background-color: rgba(0, 0, 0, 0.2);
          border-radius: 4px;
        }
        .mega-menu::-webkit-scrollbar-thumb:hover {
          background-color: rgba(0, 0, 0, 0.5);
        }
        .mega-menu::-webkit-scrollbar-track {
          background-color: #f1f1f1;
          border-radius: 4px;
        }
      `}</style>
    </>
  );
};

export default NavBar;
