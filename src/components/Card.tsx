import React from "react";
import { Data } from "../mockData/data";
import { Wrapper } from "./Components.styles";
import Direction from "../assets/svg/direction.svg";
import Arrows from "../assets/svg/arrows.svg";
import { LABELS } from "./config";

interface Props {
  details: Data;
}

const Card: React.FC<Props> = ({ details }) => {
  const redirectToMap = (): void => {
    if (details.google_maps_url) window.open(details.google_maps_url);
  };

  return (
    <Wrapper>
      <div className="title-wrapper">
        <h4 className="title">{details.name}</h4>
        <div className="location-details" onClick={redirectToMap}>
          <img src={Direction} alt="direction" />
          <div className="kms">Distance</div>
        </div>
      </div>
      <div className="image-wrapper">
        <img src={details.images[0]} alt={details.name} />
        <div className="label-details">
          <img src={LABELS[details.label]} alt="icons" /> {details.label}
        </div>
      </div>
      <div className="button-wrapper">
        <button className="day-pass">
          <span className="button-name">
            Day pass <br />
            <span className="price">&#8377; {details.day_pass_price}</span>/Day
          </span>
          <span className="button-icon">
            <img src={Arrows} alt="Arrows" />
          </span>
        </button>
        <button className="bulk-pass">
          <span className="discount-card">20% Discount</span>
          <span className="button-name">
            Bulk pass
            <br />
            <span className="price">&#8377; {details.bulk_pass_price}</span>
            /10 Days
          </span>
          <span className="button-icon">
            <img src={Arrows} alt="Arrows" />
          </span>
        </button>
      </div>
    </Wrapper>
  );
};

export default Card;
