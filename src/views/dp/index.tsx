import React from "react";
import * as echarts from "echarts";
import "./index.scss";

import LeftTop from "./components/leftTop";
import LeftBottom from "./components/leftBottom";
import RightTop from "./components/rightTop";
import RightBottom from "./components/rightBottom";
import CenterMap from "./components/centerMap";
import CenterList from "./components/centerList";
const DP = () => {
  return (
    <div className="dp">
      <div className="dp_content_box">
        <div className="dp_content_box_left">
          <LeftTop />
          <LeftBottom />
        </div>
        <div className="dp_content_box_center">
          <CenterMap />
          <CenterList />
        </div>
        <div className="dp_content_box_right">
          <RightTop />
          <RightBottom />
        </div>
      </div>
    </div>
  );
};

export default DP;
