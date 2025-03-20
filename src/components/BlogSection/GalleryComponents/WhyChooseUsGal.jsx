import React from "react";
import shan14 from "../../../Imges/GalleryImg/shan14.png";

const WhyChooseUsGal = () => {
  return (
    <div className="why-sec-v5 overflow-hidden space-bottom">
      <div className="container th-container4">
        <div className="row align-items-center d-flex justify-content-between">
          {/* Left Content */}
          <div className="col-xl-3">
            <div className="title-area mb-1">
              <span className="sub-title subtitle3 style1">Why choose us</span>
              <h2 className="sec-title">
                Innovation Meets Excellence – Our Commitment to Success!
              </h2>
              <p>
                At <b>Logimetrix Techsolutions</b>, we believe in empowering
                businesses through cutting-edge technology and seamless digital
                transformation. Our team is dedicated to delivering tailored
                solutions that drive efficiency, collaboration, and success.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-xl-9">
            <div className="video-box2 text-center">
              <img src={shan14} alt="video" className="img-fluid rounded" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsGal;
