import React from "react";
import NavBar from "../components/NavBar";
import Dashboard from "../components/Dashboard";
import Services from "../components/Services";
import HappyClient from "../components/HappyClient";
import Footer from "../components/Footer";
import AboutUS from "../components/AboutUS";
import HowToWork from "../components/HowToWork";
import TechnologySolutions from "../components/TechnologySolutions";
import ChooseUS from "../components/ChooseUS";
import OurExpertise from "../components/OurExpertise";
import OurClient from "../components/OurClient";
import Brands from "../components/Brands";

const Home = () => {
  return (
    <div>
      <div className="th-menu-wrapper">
        <div className="th-menu-area text-center">
          <button className="th-menu-toggle">
            <i className="fal fa-times" />
          </button>
          <div className="mobile-logo">
            <a className="icon-masking" href="index.html">
              <span data-mask-src="assets/img/logo.svg" className="mask-icon" />
              <img src="assets/img/logo.svg" alt="logimetrix" />
            </a>
          </div>
          <div className="th-mobile-menu">
            <ul>
              <li className="menu-item-has-children mega-menu-wrap">
                <a href="#">Home</a>
                <ul className="mega-menu">
                  <li>
                    <a href="#">Multipage</a>
                    <ul>
                      <li>
                        <a href="index.html">Digital Agency</a>
                      </li>
                      <li>
                        <a href="home-web-development.html">Web Development</a>
                      </li>
                      <li>
                        <a href="home-software-company.html">
                          Software Company
                        </a>
                      </li>
                      <li>
                        <a href="home-software-company-2.html">
                          Software Company Style 2
                        </a>
                      </li>
                      <li>
                        <a href="home-startup-company.html">Startup Company</a>
                      </li>
                      <li>
                        <a href="home-it-solution.html">IT Solution</a>
                      </li>
                      <li>
                        <a href="home-web-agency.html">Web Agency</a>
                      </li>
                      <li>
                        <a href="home-startup.html">Home Startup</a>
                      </li>
                      <li>
                        <a href="home-game-solution.html">Game Solution</a>
                      </li>
                      <li>
                        <a href="home-sass-marketing.html">Sass Marketing</a>
                      </li>
                      <li>
                        <a href="home-sass-landing.html">Sass Landing</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Multipage</a>
                    <ul>
                      <li>
                        <a href="home-sass-landing-2.html">
                          Sass Landing Style 2
                        </a>
                      </li>
                      <li>
                        <a href="home-app-landing.html">App Landing</a>
                      </li>
                      <li>
                        <a href="home-ai-technology.html">AI Technology</a>
                      </li>
                      <li>
                        <a href="home-cyber-security.html">Cyber Security</a>
                      </li>
                      <li>
                        <a href="home-cyber-security-2.html">
                          Cyber Security Style 2
                        </a>
                      </li>
                      <li>
                        <a href="home-it-company.html">IT Company</a>
                      </li>
                      <li>
                        <a href="home-digital-marking.html">Digital Marking</a>
                      </li>
                      <li>
                        <a href="home-it-agency.html">IT Agency</a>
                      </li>
                      <li>
                        <a href="home-crm.html">Home CRM</a>
                      </li>
                      <li>
                        <a href="home-it-consulting.html">IT Consulting</a>
                      </li>
                      <li>
                        <a href="home-help-desk.html">Home Help Desk</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Onepage</a>
                    <ul>
                      <li>
                        <a href="home-digital-agency-op.html">
                          Digital Agency Onepage
                        </a>
                      </li>
                      <li>
                        <a href="home-web-development-op.html">
                          Web Development Onepage
                        </a>
                      </li>
                      <li>
                        <a href="home-software-company-op.html">
                          Software Company Onepage
                        </a>
                      </li>
                      <li>
                        <a href="home-software-company-2-op.html">
                          Software Company Style 2 Onepage
                        </a>
                      </li>
                      <li>
                        <a href="home-startup-company-op.html">
                          Startup Company Onepage
                        </a>
                      </li>
                      <li>
                        <a href="home-it-solution-op.html">
                          IT Solution Onepage
                        </a>
                      </li>
                      <li>
                        <a href="home-web-agency-op.html">Web Agency Onepage</a>
                      </li>
                      <li>
                        <a href="home-startup-op.html">Home Startup Onepage</a>
                      </li>
                      <li>
                        <a href="home-game-solution-op.html">
                          Game Solution Onepage
                        </a>
                      </li>
                      <li>
                        <a href="home-sass-marketing-op.html">
                          Sass Marketing Onepage
                        </a>
                      </li>
                      <li>
                        <a href="home-sass-landing-op.html">
                          Sass Landing Onepage
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Onepage</a>
                    <ul>
                      <li>
                        <a href="home-sass-landing-2-op.html">
                          Sass Landing Style 2 Onepage
                        </a>
                      </li>
                      <li>
                        <a href="home-app-landing-op.html">
                          App Landing Onepage
                        </a>
                      </li>
                      <li>
                        <a href="home-ai-technology-op.html">
                          AI Technology Onepage
                        </a>
                      </li>
                      <li>
                        <a href="home-cyber-security-op.html">
                          Cyber Security Onepage
                        </a>
                      </li>
                      <li>
                        <a href="home-cyber-security-2-op.html">
                          Cyber Security Style 2 Onepage
                        </a>
                      </li>
                      <li>
                        <a href="home-it-company-op.html">IT Company Onepage</a>
                      </li>
                      <li>
                        <a href="home-digital-marking-op.html">
                          Digital Marking Onepage
                        </a>
                      </li>
                      <li>
                        <a href="home-it-agency-op.html">IT Agency Onepage</a>
                      </li>
                      <li>
                        <a href="home-crm-op.html">Home CRM Onepage</a>
                      </li>
                      <li>
                        <a href="home-it-consulting-op.html">
                          IT Consulting Onepage
                        </a>
                      </li>
                      <li>
                        <a href="home-help-desk-op.html">Home Help Desk</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="about.html">About Us</a>
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
          </div>
        </div>
      </div>

      <Dashboard />
      <AboutUS />
      <HowToWork />
      <HappyClient />
      <TechnologySolutions />
      <ChooseUS />
      <OurExpertise />
      <OurClient />
    </div>
  );
};

export default Home;
