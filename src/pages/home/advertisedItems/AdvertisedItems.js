import React from "react";
import EnvySeries from "../../../assets/images/envy-series.jpg";
import HpPavilion from "../../../assets/images/hp-pavilion-series.jpg";
import ZBook from "../../../assets/images/HP-ZBook-Create-G7-.jpg";

const AdvertisedItems = () => {
  return (
    <div className="bg-orange-300">
      <div className="max-w-6xl mx-auto pt-20">
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-2">
            <img src={HpPavilion} alt="" />
          </div>
          <div className="...">
            <img src={EnvySeries} alt="" />
          </div>
          <div className="...">
            <img src={ZBook} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertisedItems;
