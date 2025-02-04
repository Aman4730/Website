import React from "react";
import breadcumbbg from "../../../assets/img/bg/breadcumb-bg.jpg";

const SaiSoftwarePage = () => {
  return (
    <div>
      <div
        className="breadcumb-wrapper"
        style={{
          backgroundImage: `url(${breadcumbbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px",
          width: "100%",
        }}
      >
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">Sai Software</h1>
            <ul className="breadcumb-menu">
              <li>
                <a href="/">Home</a>
              </li>
              <li>Sai Software</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaiSoftwarePage;
