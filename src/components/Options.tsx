import React from "react";
import { OptionWrapper, SubTitle } from "./Components.styles";
import { GetOptions, getOptions } from "./config";
import ExploreArrow from "../assets/svg/explore-arrow.svg";

const Options: React.FC = () => (
  <OptionWrapper>
    <SubTitle>
      Why Choose us?{" "}
      <div className="explore-icon">
        <img src={ExploreArrow} alt="Explore" />
      </div>
    </SubTitle>
    <div className="options">
      {getOptions.map((option: GetOptions) => (
        <div className="item" key={option.id}>
          <div className="icon">
            <img src={option.icon} alt="icon" />
          </div>
          <div className="title">{option.title}</div>
        </div>
      ))}
    </div>
  </OptionWrapper>
);

export default Options;
