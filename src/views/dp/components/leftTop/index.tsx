import React, { useRef, useEffect } from "react";
import * as echarts from "echarts";
import { EChartOption } from "echarts";
import "./index.scss";
import LitterTitle from "../litterTitle";

const LeftTop = () => {
  const leftTopRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const myEcharts = echarts.init(leftTopRef.current);
    // 获取当地时间
    const time = new Date();
    const month = time.getMonth();
    // 设置option
    const option: EChartOption = {
      title: { text: "多城市温度折线图" },
      tooltip: {
        trigger: "axis",
        formatter: function (param: any) {
          return (
            `${param[0].name}<br>` +
            param
              .map((item: any) => `${item.seriesName}: ${item.value}℃`)
              .join("<br>")
          );
        },
      },
      xAxis: {
        type: "category",
        data: new Array(5)
          .fill(0)
          .map((item, index) => `${month}月${index + 1}日`),
      },
      yAxis: {
        type: "value",
      },
      backgroundColor: "#fff",
      series: [
        {
          type: "line",
          data: new Array(5)
            .fill(0)
            .map(() => Math.floor(Math.random() * 10) + 30),
          name: "遂宁",
        },
        {
          type: "line",
          data: new Array(5)
            .fill(0)
            .map(() => Math.floor(Math.random() * 10) + 20),
          name: "深圳",
        },
        {
          type: "line",
          data: new Array(5)
            .fill(0)
            .map(() => Math.floor(Math.random() * 10) + 10),
          name: "黑龙江",
        },
        {
          type: "line",
          data: new Array(5).fill(0).map(() => Math.floor(Math.random() * 10)),
          name: "俄罗斯",
        },
      ],
    };
    myEcharts.setOption(option);
    window.addEventListener("resize", () => {
      myEcharts.resize();
    });
  }, []);
  return (
    <div className="leftTop">
      <LitterTitle name="折线图" />
      {/* 多城市温度折线图 */}
      <div
        className="leftTop_table"
        ref={leftTopRef}
        style={{ width: "100%", height: "80%" }}
      ></div>
    </div>
  );
};

export default LeftTop;
