import React from "react";

const SolAbout4 = ({ aboutData }) => {
  return (
    <div>
      <div className="container th-container4" style={{ marginTop: "-120px" }}>
        {aboutData.map((item) => (
          <div
            className="row justify-content-between align-items-center flex-row-reverse"
            key={item.id}
          >
            <div className="col-xl-5">
              <div className="space">
                <div className="title-area mb-40 pe-xl-3">
                  <span className="sub-title">{item.title}</span>
                  <h2 className="sec-title">
                    {item.secTitle.split(" ").slice(0, -1).join(" ")}{" "}
                    <span className="text-theme">
                      {item.secTitle.split(" ").slice(-1)}
                    </span>
                  </h2>
                  <p>{item.description}</p>
                </div>
                <div className="two-column style2 justify-content-between mb-50 list-center ms-0">
                  {item.checklist.map((list, i) => (
                    <div className="checklist style9" key={i}>
                      <ul>
                        {list.map((point, idx) => (
                          <li key={idx}>
                            <i className="fa-solid fa-badge-check" /> {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="btn-wrap">
                  <a href={item.contactLink} className="th-btn style-radius">
                    Get Started For Free 14 Days
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-7">
              <div className="img-box15 mb-xl-0 mt-xl-0 mt-n4">
                {item.images.map((img, index) => (
                  <div className={`img${index + 1}`} key={index}>
                    <img src={img} alt="About" />
                  </div>
                ))}
                <div className="about-shape15" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SolAbout4;
