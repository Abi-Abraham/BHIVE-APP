import React from "react";
import { FooterWrapper } from "./Components.styles";
import FooterImg from "../assets/images/footer-img.png";
import GoogleStore from "../assets/images/google-store.png";
import AppleStore from "../assets/images/app-store.png";

const Footer: React.FC = () => (
  <FooterWrapper>
    <h2 className="footer-title">Download our app now</h2>
    <div className="footer-section">
      <div className="footer-img">
        <img src={FooterImg} alt="Footer Img" />
      </div>
      <div className="footer-content">
        <p className="footer-para">
          Boost your productivity with the BHIVE Workspace app. Elevate your
          workspace, collaborate efficiently, and unlock exclusive perks.
        </p>
        <div className="play-store-icons">
          <img src={GoogleStore} alt="google store" />
          <img src={AppleStore} alt="apple store" />
        </div>
      </div>
    </div>
  </FooterWrapper>
);

export default Footer;
