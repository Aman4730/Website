import React from "react";
import ConsultingIcon from "../../../Imges/ConsultingIcon.png";
import developmentIcon from "../../../Imges/developmentIcon.png";
import seoIcon from "../../../Imges/seoIcon.png";
import Business1 from "../../../Imges/Business1.png";
import node from "../../../Imges/language/node.png";
import react from "../../../Imges/language/react.png";
import Angular from "../../../Imges/language/Angular.png";
import android1 from "../../../Imges/language/android1.png";
import php3 from "../../../Imges/language/php3.png";
import Flutter from "../../../Imges/language/Flutter.png";
import Python from "../../../Imges/language/Python.png";
import java from "../../../Imges/language/java.png";
import title_shape_2 from "../../../assets/img/theme-img/title_shape_2.svg";
import process_line_2 from "../../../assets/img/bg/process_line_2.svg";
const ServiceLanguage = () => {
  return (
    <section className="space" id="process-sec">
      <div className="container">
        <div className="title-area text-center">
          <div className="shadow-title">PROCESS</div>
          <span className="sub-title">
            <div className="icon-masking me-2">
              <img src={title_shape_2} alt="shape" />
            </div>
            WORK PROCESS
          </span>
          <h2 className="sec-title">
            How to work <span className="text-theme">it!</span>
          </h2>
        </div>
        <div className="process-card-area">
          <div className="process-line position-top">
            <img src={process_line_2} alt="line" />
          </div>
          <div className="row gy-40 justify-content-between">
            <div className="col-sm-6 col-xl-auto process-card-wrap">
              <div className="process-card">
                <div className="pulse" />
                <div className="process-card_icon">
                  <img
                    src={node}
                    alt="icon"
                    style={{
                      width: "90px",
                      height: "90px",
                    }}
                  />
                </div>
                <h2 className="box-title" style={{ fontSize: "20px" }}>
                  Node.js
                </h2>
                <p className="process-card_text">
                  Fast, scalable, event-driven, non-blocking, real-time, API,
                  JavaScript, backend, lightweight, efficient.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-xl-auto process-card-wrap">
              <div className="process-card">
                <div className="pulse" />
                <div className="process-card_icon">
                  <img
                    src={react}
                    alt="icon"
                    style={{
                      width: "90px",
                      height: "90px",
                    }}
                  />
                </div>
                <h2 className="box-title" style={{ fontSize: "20px" }}>
                  React.js
                </h2>
                <p className="process-card_text">
                  Component-based, declarative, UI-library, virtual-DOM, JSX,
                  reusable, hooks, frontend, SPA, interactive.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-xl-auto process-card-wrap">
              <div className="process-card">
                <div className="pulse" />
                <div className="process-card_icon">
                  <img
                    src={Angular}
                    alt="icon"
                    style={{
                      width: "90px",
                      height: "80px",
                    }}
                  />
                </div>
                <h2 className="box-title" style={{ fontSize: "20px" }}>
                  Angular
                </h2>
                <p className="process-card_text">
                  TypeScript, MVC, two-way-binding, powerful, scalable, CLI,
                  modular, enterprise, responsive.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-xl-auto process-card-wrap">
              <div className="process-card">
                <div className="pulse" />
                <div className="process-card_icon">
                  <img
                    src={android1}
                    alt="icon"
                    style={{
                      width: "90px",
                      height: "90px",
                    }}
                  />
                </div>
                <h2 className="box-title" style={{ fontSize: "20px" }}>
                  Android
                </h2>
                <p className="process-card_text">
                  Mobile, Java, Kotlin, Play-Store, native, performance, UI,
                  app-development, responsive, secure.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="process-card-area">
          <div className="process-line position-top">
            <img src={process_line_2} alt="line" />
          </div>
          <div className="row gy-40 justify-content-between">
            <div className="col-sm-6 col-xl-auto process-card-wrap">
              <div className="process-card">
                <div className="pulse" />
                <div className="process-card_icon">
                  <img
                    src={php3}
                    alt="icon"
                    style={{
                      width: "100px",
                      height: "100px",
                    }}
                  />
                </div>
                <h2 className="box-title" style={{ fontSize: "20px" }}>
                  PHP
                </h2>
                <p className="process-card_text">
                  Server-side, dynamic, scripting, MySQL, WordPress, Laravel,
                  secure, flexible, backend, open-source.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-xl-auto process-card-wrap">
              <div className="process-card">
                <div className="pulse" />
                <div className="process-card_icon">
                  <img
                    src={Flutter}
                    alt="icon"
                    style={{
                      width: "100px",
                      height: "100px",
                    }}
                  />
                </div>
                <h2 className="box-title" style={{ fontSize: "20px" }}>
                  Flutter
                </h2>
                <p className="process-card_text">
                  Cross-platform, UI-kit, Dart, widgets, fast, native-like,
                  mobile, web, performance, beautiful.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-xl-auto process-card-wrap">
              <div className="process-card">
                <div className="pulse" />
                <div className="process-card_icon">
                  <img
                    src={Python}
                    alt="icon"
                    style={{
                      width: "100px",
                      height: "80px",
                    }}
                  />
                </div>
                <h2 className="box-title" style={{ fontSize: "20px" }}>
                  Python
                </h2>
                <p className="process-card_text">
                  Versatile, AI, data-science, Django, Flask, scripting,
                  automation, machine-learning, backend, readable.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-xl-auto process-card-wrap">
              <div className="process-card">
                <div className="pulse" />
                <div className="process-card_icon">
                  <img
                    src={java}
                    alt="icon"
                    style={{
                      width: "90px",
                      height: "90px",
                    }}
                  />
                </div>
                <h2 className="box-title" style={{ fontSize: "20px" }}>
                  Java
                </h2>
                <p className="process-card_text">
                  OOP, secure, cross-platform, JVM, backend, Android,
                  enterprise, Spring, scalable, robust.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceLanguage;
