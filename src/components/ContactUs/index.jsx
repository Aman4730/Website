import React from "react";

const ContactUs = () => {
  return (
    <>
      <div className="cursor" />
      <div className="cursor2" />
      <div className="color-scheme-wrap active">
        <button className="switchIcon">
          <i className="fa-solid fa-palette" />
        </button>
        <h4 className="color-scheme-wrap-title">
          <i className="far fa-palette me-2" />
          Style Swicher
        </h4>
        <div className="color-switch-btns">
          <button data-color="#3E66F3">
            <i className="fa-solid fa-droplet" />
          </button>
          <button data-color="#684DF4">
            <i className="fa-solid fa-droplet" />
          </button>
          <button data-color="#008080">
            <i className="fa-solid fa-droplet" />
          </button>
          <button data-color="#323F7C">
            <i className="fa-solid fa-droplet" />
          </button>
          <button data-color="#FC3737">
            <i className="fa-solid fa-droplet" />
          </button>
          <button data-color="#8a2be2">
            <i className="fa-solid fa-droplet" />
          </button>
        </div>
        <a
          href="https://themeforest.net/user/themeholy"
          className="th-btn text-center w-100"
        >
          <i className="fa fa-shopping-cart me-2" /> Purchase
        </a>
      </div>
      <div id="preloader" className="preloader">
        <button className="th-btn th-radius preloaderCls">
          Cancel Preloader
        </button>
        <div id="loader" className="th-preloader">
          <div className="animation-preloader">
            <div className="txt-loading">
              <span preloader-text="W" className="characters">
                W
              </span>
              <span preloader-text="E" className="characters">
                E
              </span>
              <span preloader-text="B" className="characters">
                B
              </span>
              <span preloader-text="T" className="characters">
                T
              </span>
              <span preloader-text="E" className="characters">
                E
              </span>
              <span preloader-text="C" className="characters">
                C
              </span>
              <span preloader-text="K" className="characters">
                K
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="sidemenu-wrapper">
        <div className="sidemenu-content">
          <button className="closeButton sideMenuCls">
            <i className="far fa-times" />
          </button>
          <div className="widget woocommerce widget_shopping_cart">
            <h3 className="widget_title">Shopping cart</h3>
            <div className="widget_shopping_cart_content">
              <ul className="woocommerce-mini-cart cart_list product_list_widget">
                <li className="woocommerce-mini-cart-item mini_cart_item">
                  <a href="#" className="remove remove_from_cart_button">
                    <i className="far fa-times" />
                  </a>
                  <a href="#">
                    <img
                      src="assets/img/product/product_thumb_1_1.jpg"
                      alt="Cart Image"
                    />
                    Gaming Computer
                  </a>
                  <span className="quantity">
                    1 ×
                    <span className="woocommerce-Price-amount amount">
                      <span className="woocommerce-Price-currencySymbol">
                        $
                      </span>
                      940.00
                    </span>
                  </span>
                </li>
                <li className="woocommerce-mini-cart-item mini_cart_item">
                  <a href="#" className="remove remove_from_cart_button">
                    <i className="far fa-times" />
                  </a>
                  <a href="#">
                    <img
                      src="assets/img/product/product_thumb_1_2.jpg"
                      alt="Cart Image"
                    />
                    Smartphone Vivo V9
                  </a>
                  <span className="quantity">
                    1 ×
                    <span className="woocommerce-Price-amount amount">
                      <span className="woocommerce-Price-currencySymbol">
                        $
                      </span>
                      899.00
                    </span>
                  </span>
                </li>
                <li className="woocommerce-mini-cart-item mini_cart_item">
                  <a href="#" className="remove remove_from_cart_button">
                    <i className="far fa-times" />
                  </a>
                  <a href="#">
                    <img
                      src="assets/img/product/product_thumb_1_3.jpg"
                      alt="Cart Image"
                    />
                    SanDisk Flash Drive
                  </a>
                  <span className="quantity">
                    1 ×
                    <span className="woocommerce-Price-amount amount">
                      <span className="woocommerce-Price-currencySymbol">
                        $
                      </span>
                      756.00
                    </span>
                  </span>
                </li>
                <li className="woocommerce-mini-cart-item mini_cart_item">
                  <a href="#" className="remove remove_from_cart_button">
                    <i className="far fa-times" />
                  </a>
                  <a href="#">
                    <img
                      src="assets/img/product/product_thumb_1_4.jpg"
                      alt="Cart Image"
                    />
                    Smart Power Bank
                  </a>
                  <span className="quantity">
                    1 ×
                    <span className="woocommerce-Price-amount amount">
                      <span className="woocommerce-Price-currencySymbol">
                        $
                      </span>
                      723.00
                    </span>
                  </span>
                </li>
                <li className="woocommerce-mini-cart-item mini_cart_item">
                  <a href="#" className="remove remove_from_cart_button">
                    <i className="far fa-times" />
                  </a>
                  <a href="#">
                    <img
                      src="assets/img/product/product_thumb_1_5.jpg"
                      alt="Cart Image"
                    />
                    Apple Smartwatch
                  </a>
                  <span className="quantity">
                    1 ×
                    <span className="woocommerce-Price-amount amount">
                      <span className="woocommerce-Price-currencySymbol">
                        $
                      </span>
                      1080.00
                    </span>
                  </span>
                </li>
              </ul>
              <p className="woocommerce-mini-cart__total total">
                <strong>Subtotal:</strong>
                <span className="woocommerce-Price-amount amount">
                  <span className="woocommerce-Price-currencySymbol">$</span>
                  4398.00
                </span>
              </p>
              <p className="woocommerce-mini-cart__buttons buttons btn-wrap">
                <a href="cart.html" className="th-btn wc-forward">
                  View cart
                </a>
                <a href="checkout.html" className="th-btn checkout wc-forward">
                  Checkout
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="popup-search-box d-none d-lg-block">
        <button className="searchClose">
          <i className="fal fa-times" />
        </button>
        <form action="#">
          <input type="text" placeholder="What are you looking for?" />
          <button type="submit">
            <i className="fal fa-search" />
          </button>
        </form>
      </div>
      <div className="th-menu-wrapper">
        <div className="th-menu-area text-center">
          <button className="th-menu-toggle">
            <i className="fal fa-times" />
          </button>
          <div className="mobile-logo">
            <a className="icon-masking" href="index.html">
              <span data-mask-src="assets/img/logo.svg" className="mask-icon" />
              <img src="assets/img/logo.svg" alt="Webteck" />
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
      <header className="th-header header-layout1">
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
                      <a href="mailto:info@webteck.com">info@webteck.com</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-auto">
                <div className="header-social">
                  <span className="social-title">Follow Us On : </span>
                  <a href="https://www.facebook.com/">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="https://www.twitter.com/">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="https://www.linkedin.com/">
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a href="https://www.instagram.com/">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="https://www.youtube.com/">
                    <i className="fab fa-youtube" />
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
                    <a className="icon-masking" href="index.html">
                      <span
                        data-mask-src="assets/img/logo.svg"
                        className="mask-icon"
                      />
                      <img src="assets/img/logo.svg" alt="Webteck" />
                    </a>
                  </div>
                </div>
                <div className="col-auto">
                  <nav className="main-menu d-none d-lg-inline-block">
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
                                <a href="home-web-development.html">
                                  Web Development
                                </a>
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
                                <a href="home-startup-company.html">
                                  Startup Company
                                </a>
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
                                <a href="home-game-solution.html">
                                  Game Solution
                                </a>
                              </li>
                              <li>
                                <a href="home-sass-marketing.html">
                                  Sass Marketing
                                </a>
                              </li>
                              <li>
                                <a href="home-sass-landing.html">
                                  Sass Landing
                                </a>
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
                                <a href="home-ai-technology.html">
                                  AI Technology
                                </a>
                              </li>
                              <li>
                                <a href="home-cyber-security.html">
                                  Cyber Security
                                </a>
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
                                <a href="home-digital-marking.html">
                                  Digital Marking
                                </a>
                              </li>
                              <li>
                                <a href="home-it-agency.html">IT Agency</a>
                              </li>
                              <li>
                                <a href="home-crm.html">Home CRM</a>
                              </li>
                              <li>
                                <a href="home-it-consulting.html">
                                  IT Consulting
                                </a>
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
                                <a href="home-web-agency-op.html">
                                  Web Agency Onepage
                                </a>
                              </li>
                              <li>
                                <a href="home-startup-op.html">
                                  Home Startup Onepage
                                </a>
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
                                <a href="home-it-company-op.html">
                                  IT Company Onepage
                                </a>
                              </li>
                              <li>
                                <a href="home-digital-marking-op.html">
                                  Digital Marking Onepage
                                </a>
                              </li>
                              <li>
                                <a href="home-it-agency-op.html">
                                  IT Agency Onepage
                                </a>
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
                                <a href="home-help-desk-op.html">
                                  Home Help Desk
                                </a>
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
                  </nav>
                  <div className="header-button">
                    <button
                      type="button"
                      className="icon-btn sideMenuToggler d-inline-block d-lg-none"
                    >
                      <i className="fal fa-shopping-cart" />
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
                    <button type="button" className="icon-btn searchBoxToggler">
                      <i className="fal fa-search" />
                    </button>
                    <button type="button" className="icon-btn sideMenuToggler">
                      <i className="fal fa-shopping-cart" />
                      <span className="badge">5</span>
                    </button>
                    <a
                      href="contact.html"
                      className="th-btn style3 shadow-none"
                    >
                      Make Appointment
                      <i className="fas fa-arrow-right ms-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="logo-bg" />
          </div>
        </div>
      </header>
      <div
        className="breadcumb-wrapper"
        data-bg-src="assets/img/bg/breadcumb-bg.jpg"
      >
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">Contact Us</h1>
            <ul className="breadcumb-menu">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="space">
        <div className="container">
          <div className="row gy-4">
            <div className="col-xl-4 col-md-6">
              <div className="contact-info">
                <div className="contact-info_icon">
                  <i className="fas fa-location-dot" />
                </div>
                <div className="media-body">
                  <h4 className="box-title">Our Office Address</h4>
                  <span className="contact-info_text">
                    Burnsville, MN 55337 Streat,
                    <br />
                    United States
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="contact-info">
                <div className="contact-info_icon">
                  <i className="fas fa-phone" />
                </div>
                <div className="media-body">
                  <h4 className="box-title">Call Us Anytime</h4>
                  <span className="contact-info_text">
                    <a href="tel:+65485965789">(+65) - 48596 - 5789</a>
                    <a href="tel:+65485965789">+65-48596-5789</a>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="contact-info">
                <div className="contact-info_icon">
                  <i className="fas fa-envelope" />
                </div>
                <div className="media-body">
                  <h4 className="box-title">Send An Email</h4>
                  <span className="contact-info_text">
                    <a href="mailto:info.example@gmail.com">
                      info.example@gmail.com
                    </a>
                    <a href="mailto:info@webteck.com">info@webteck.com</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-smoke space"
        data-bg-src="assets/img/bg/contact_bg_1.png"
        id="contact-sec"
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-8">
              <div className="title-area mb-35 text-xl-start text-center">
                <span className="sub-title">
                  <div className="icon-masking me-2">
                    <span
                      className="mask-icon"
                      data-mask-src="assets/img/theme-img/title_shape_2.svg"
                    />
                    <img
                      src="assets/img/theme-img/title_shape_2.svg"
                      alt="shape"
                    />
                  </div>
                  contact with us!
                </span>
                <h2 className="sec-title">Have Any Questions?</h2>
                <p className="sec-text">
                  Enthusiastically disintermediate one-to-one leadership via
                  business e-commerce. Dramatically reintermediate compelling
                  process improvements rather than empowered relationships.
                </p>
              </div>
              <form
                action="https://html.themeholy.com/webteck/demo/mail.php"
                method="POST"
                className="contact-form ajax-contact"
              >
                <div className="row">
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      id="name"
                      placeholder="Your Name"
                    />
                    <i className="fal fa-user" />
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Email Address"
                    />
                    <i className="fal fa-envelope" />
                  </div>
                  <div className="form-group col-md-6">
                    <select name="subject" id="subject" className="form-select">
                      <option
                        value=""
                        disabled="disabled"
                        selected="selected"
                        hidden=""
                      >
                        Select Subject
                      </option>
                      <option value="Web Development">Web Development</option>
                      <option value="Brand Marketing">Brand Marketing</option>
                      <option value="UI/UX Designing">UI/UX Designing</option>
                      <option value="Digital Marketing">
                        Digital Marketing
                      </option>
                    </select>
                    <i className="fal fa-chevron-down" />
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      type="tel"
                      className="form-control"
                      name="number"
                      id="number"
                      placeholder="Phone Number"
                    />
                    <i className="fal fa-phone" />
                  </div>
                  <div className="form-group col-12">
                    <textarea
                      name="message"
                      id="message"
                      cols={30}
                      rows={3}
                      className="form-control"
                      placeholder="Your Message"
                      defaultValue={""}
                    />
                    <i className="fal fa-comment" />
                  </div>
                  <div className="form-btn text-xl-start text-center col-12">
                    <button className="th-btn">
                      Send Message
                      <i className="fa-regular fa-arrow-right ms-2" />
                    </button>
                  </div>
                </div>
                <p className="form-messages mb-0 mt-3" />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="map-sec">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.7310056272386!2d89.2286059153658!3d24.00527418490799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe9b97badc6151%3A0x30b048c9fb2129bc!2sThemeholy!5e0!3m2!1sen!2sbd!4v1651028958211!5m2!1sen!2sbd"
          allowFullScreen=""
          loading="lazy"
        />
      </div>
      <footer className="footer-wrapper footer-layout1">
        <div className="footer-top">
          <div className="logo-bg" />
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-3">
                <div className="footer-logo">
                  <a className="icon-masking" href="index.html">
                    <span
                      data-mask-src="assets/img/logo-white.svg"
                      className="mask-icon"
                    />
                    <img src="assets/img/logo-white.svg" alt="Webteck" />
                  </a>
                </div>
              </div>
              <div className="col-xl-9">
                <div className="footer-contact-wrap">
                  <div className="footer-contact">
                    <div className="footer-contact_icon">
                      <i className="fas fa-phone" />
                    </div>
                    <div className="media-body">
                      <span className="footer-contact_text">
                        Quick Call Us:
                      </span>
                      <a
                        href="tel:+19088000393"
                        className="footer-contact_link"
                      >
                        +190-8800-0393
                      </a>
                    </div>
                  </div>
                  <div className="footer-contact">
                    <div className="footer-contact_icon">
                      <i className="fas fa-envelope" />
                    </div>
                    <div className="media-body">
                      <span className="footer-contact_text">Mail Us On:</span>
                      <a
                        href="mailto:info@webteck.com"
                        className="footer-contact_link"
                      >
                        info@webteck.com
                      </a>
                    </div>
                  </div>
                  <div className="footer-contact">
                    <div className="footer-contact_icon">
                      <i className="fas fa-location-dot" />
                    </div>
                    <div className="media-body">
                      <span className="footer-contact_text">
                        Visit Location:
                      </span>
                      <a
                        href="https://www.google.com/maps"
                        className="footer-contact_link"
                      >
                        54 Flemington, USA
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="widget-area">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-md-6 col-xxl-3 col-xl-4">
                <div className="widget footer-widget">
                  <h3 className="widget_title">About Company</h3>
                  <div className="th-widget-about">
                    <p className="about-text">
                      Professionally redefine transparent ROI through low-risk
                      high-yield imperatives. Progressively create empowered.
                      cost effective users via team driven.
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
              <div className="col-md-6 col-xl-auto">
                <div className="widget widget_nav_menu footer-widget">
                  <h3 className="widget_title">Quick Links</h3>
                  <div className="menu-all-pages-container">
                    <ul className="menu">
                      <li>
                        <a href="about.html">About Us</a>
                      </li>
                      <li>
                        <a href="team.html">Meet Our Team</a>
                      </li>
                      <li>
                        <a href="project.html">Our Projects</a>
                      </li>
                      <li>
                        <a href="faq.html">Help &amp; FAQs</a>
                      </li>
                      <li>
                        <a href="contact.html">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-auto">
                <div className="widget widget_nav_menu footer-widget">
                  <h3 className="widget_title">IT SERVICES</h3>
                  <div className="menu-all-pages-container">
                    <ul className="menu">
                      <li>
                        <a href="service-details.html">Web Development</a>
                      </li>
                      <li>
                        <a href="service-details.html">Business Development</a>
                      </li>
                      <li>
                        <a href="service-details.html">Product Management</a>
                      </li>
                      <li>
                        <a href="service-details.html">UI/UX Design</a>
                      </li>
                      <li>
                        <a href="service-details.html">Cloud services</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-auto">
                <div className="widget footer-widget">
                  <h3 className="widget_title">Recent Posts</h3>
                  <div className="recent-post-wrap">
                    <div className="recent-post">
                      <div className="media-img">
                        <a href="blog-details.html">
                          <img
                            src="assets/img/blog/recent-post-2-1.jpg"
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
                            src="assets/img/blog/recent-post-2-2.jpg"
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-wrap bg-title">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-6">
                <p className="copyright-text">
                  Copyright <i className="fal fa-copyright" /> 2024
                  <a href="https://themeforest.net/user/themeholy">Themeholy</a>
                  . All Rights Reserved.
                </p>
              </div>
              <div className="col-lg-6 text-end d-none d-lg-block">
                <div className="footer-links">
                  <ul>
                    <li>
                      <a href="about.html">Terms &amp; Condition</a>
                    </li>
                    <li>
                      <a href="about.html">Careers</a>
                    </li>
                    <li>
                      <a href="about.html">Privacy Policy</a>
                    </li>
                  </ul>
                </div>
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
      <div className="scroll-top">
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path
            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
            style={{
              transition: "stroke-dashoffset 10ms linear 0s",
              strokeDasharray: "307.919, 307.919",
              strokeDashoffset: "307.919",
            }}
          />
        </svg>
      </div>
    </>
  );
};

export default ContactUs;
