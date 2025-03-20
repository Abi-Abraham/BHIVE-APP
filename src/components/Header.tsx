import React from "react";
import { HeaderWrapper } from "./Components.styles";
import HeaderVideo from "../assets/video/header-video.mp4";

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <div className="heading-section">
        <h1 className="main-title">
          Host your meeting with world-class amenities. Starting at{" "}
          <span className="amount">₹199/-!</span>
        </h1>
      </div>
      <div className="video-section">
        <video loop={true} autoPlay muted={true}>
          <source src={HeaderVideo} type="video/mp4" />
        </video>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
