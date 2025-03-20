import React, { useEffect, useState } from "react";
import { CardWrapper, SubTitle } from "./Components.styles";
import { api } from "../utils";
import { Data } from "../mockData/data";
import Card from "./Card";
import ExploreArrow from "../assets/svg/explore-arrow.svg";

const Cards: React.FC = () => {
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    api
      .get<Data[]>("/data")
      .then((response: any) => setData(response.data))
      .catch((error: any) => console.error("Error fetching list:", error));
  }, []);

  return (
    <CardWrapper>
      <SubTitle>
        Our Space Overview
        <div className="explore-icon">
          <img src={ExploreArrow} alt="Explore" />
        </div>
      </SubTitle>
      <div className="cards-wrapper">
        {data.length
          ? data.map((item) => {
              return <Card key={item.id} details={item} />;
            })
          : null}
      </div>
    </CardWrapper>
  );
};

export default Cards;
