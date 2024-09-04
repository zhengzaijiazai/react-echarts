import React, { useRef, useEffect } from "react";
import * as echarts from "echarts";
import chinaJson from "../../mapData/china.json";
import areaName from "../../mapData/areaName";
import "./index.scss";

const CenterMap = () => {
  const echartsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // 地图代码开始
    const areaData: { name: string; value: number }[] = areaName.map(
      (item: string) => {
        return {
          name: item,
          value: Math.floor(Math.random() * 2500),
        };
      }
    );
    const myEcharts = echarts.init(echartsRef.current);
    echarts.registerMap("china", chinaJson);

    const option: any = {
      tooltip: {
        trigger: "item",
        formatter: (params: any) => {
          return `${params.name}:${params.value ? params.value : 0}亿`;
        },
      },
      visualMap: {
        show: false,
        min: 0,
        max: 2500,
        left: "left",
        inRange: {
          color: ["#d94e5d", "#e08214", "#eac736", "#6f7031", "#50a3ba"], // 颜色渐变
        },
      },
      series: [
        {
          name: "中国省份分布",
          type: "map",
          map: "china",
          // aspectScale: 1.2,
          zoom: 1.5,
          top: "30%",
          label: {
            normal: {
              show: true,
            },
            emphasis: {
              show: true,
            },
          },
          itemStyle: {
            normal: {
              areaColor: "#36d",
              borderColor: "#111",
            },
            emphasis: {
              areaColor: "#36d",
            },
          },
          data: [...areaData],
          //应该填入对象数据,必须要一个name和value,因为visualMap会映射到value上,然后给地图一些特点的颜色,
        },
      ],
    };
    // console.log(option);
    myEcharts.setOption(option);
    // 窗口大小改变时,重新渲染echarts
    window.addEventListener("resize", () => {
      myEcharts.resize();
    });
    // 地图代码结束
  }, []);

  return (
    <div className="centerMap">
      <div
        className="centerMap_map"
        ref={echartsRef}
        style={{ width: "100%", height: "100%" }}
      ></div>
    </div>
  );
};

export default CenterMap;
