import React from "react";
import "./style.scss";

import Img from "../../../components/lazyLoadImage/Img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

const HeroBanner = () => {
  return (
    <div className="heroBanner">
      <div className="backdrop-img">
        <Img src="https://ntwist.com/wp-content/uploads/2023/01/home-image-bg-v6.png" />
      </div>

      <div className="opacity-layer"></div>
      <ContentWrapper>
        <div className="heroBannerContent">
          <div className="text-content">
            <p>Data-Powered Solutions for industrial Excellence</p>
            <button>Read More</button>
          </div>
          <div className="image-content">
            <img
              src="https://ntwist.com/wp-content/uploads/2023/01/home-image-icons-v6.png"
              alt="Homepage Image"
            />
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;
