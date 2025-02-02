import React from "react";
import breadcumbbg from "../../../Imges/SolutionImg/breadcumb-bg.jpg";
const AbsoluteStudyPage = () => {
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
            <h1 className="breadcumb-title">Absolute Study</h1>
            <ul className="breadcumb-menu">
              <li>
                <a href="/">Home</a>
              </li>
              <li>Absolute Study</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbsoluteStudyPage;
