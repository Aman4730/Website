import React from "react";
import pho from "../../../Imges/GalleryImg/pho.png";
import pho2 from "../../../Imges/GalleryImg/pho2.png";
import pho3 from "../../../Imges/GalleryImg/pho3.png";
import pho4 from "../../../Imges/GalleryImg/pho4.png";
import pho6 from "../../../Imges/GalleryImg/pho6.png";
import pho7 from "../../../Imges/GalleryImg/pho7.png";
import pho8 from "../../../Imges/GalleryImg/pho8.png";
import pho9 from "../../../Imges/GalleryImg/pho9.png";
import pho10 from "../../../Imges/GalleryImg/pho10.png";
import pho12 from "../../../Imges/GalleryImg/pho12.png";
import pho13 from "../../../Imges/GalleryImg/pho13.png";
import pho14 from "../../../Imges/GalleryImg/pho14.png";
import pho16 from "../../../Imges/GalleryImg/pho16.png";
import pho17 from "../../../Imges/GalleryImg/pho17.png";
import pho18 from "../../../Imges/GalleryImg/pho18.png";

const imageData = [
  { id: 1, src: pho8 },
  { id: 2, src: pho7 },
  { id: 3, src: pho9 },
  { id: 4, src: pho3 },
  { id: 5, src: pho2 },
  { id: 6, src: pho16 },
  { id: 7, src: pho17 },
  { id: 8, src: pho4 },
  { id: 17, src: pho6 },
  { id: 10, src: pho10 },
  { id: 11, src: pho12 },
  { id: 12, src: pho13 },
  { id: 13, src: pho14 },
  { id: 14, src: pho },
  { id: 18, src: pho18 },
];

const Photos = () => {
  return (
    <div className="space-extra-bottom">
      <div className="container" style={{ maxWidth: "1400px" }}>
        <div className="row gy-4">
          {imageData.map((image) => (
            <div key={image.id} className="col-md-6 col-xl-4">
              <div className="gallery-card">
                <div className="gallery-img">
                  <img
                    src={image.src}
                    alt="gallery image"
                    style={{
                      width: "442.66",
                      height: "442.66",
                      objectFit: "cover",
                    }}
                  />
                  <a
                    href={image.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="play-btn style3 popup-image"
                  >
                    <i className="far fa-plus" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Photos;
