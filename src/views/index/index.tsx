import React, { useState, useEffect } from "react";
import "./index.scss";

import Title from "@/components/globalTitle";
import PageRender from "@/components/pageRender";
import { HomeRenderProps } from "@/types/components_type";

const Index = () => {
  const [data, setData] = useState<HomeRenderProps>({
    data: [],
    title: "",
    type: 1,
  });
  const [data1, setData1] = useState<HomeRenderProps>({
    data: [],
    title: "",
    type: 2,
  });
  const initData = () => {
    const newData: HomeRenderProps = {
      data: [
        {
          id: 1,
          name: "echarts",
          path: "echarts",
        },
        {
          id: 2,
          name: "redux",
          path: "redux",
        },
        {
          id: 3,
          name: "form表单",
          path: "form",
        },
        {
          id: 4,
          name: "大屏",
          path: "dp",
        },
      ],
      title: "学习内容区域",
      type: 1,
    };
    const newData1: HomeRenderProps = {
      data: [
        {
          id: 1,
          name: "echarts官网",
          path: "https://echarts.js.cn/zh/index.html",
        },
        {
          id: 2,
          name: "vue官网",
          path: "https://cn.vuejs.org/",
        },
        {
          id: 3,
          name: "react中文文档",
          path: "https://react.docschina.org/",
        },
        {
          id: 4,
          name: "npm官网",
          path: "https://www.npmjs.com/",
        },
        {
          id: 5,
          name: "react-router-dom官网",
          path: "https://reactrouter.com/en/main",
        },
        {
          id: 6,
          name: "react-router-dom中文文档",
          path: "https://baimingxuan.github.io/react-router6-doc/",
        },
      ],
      title: "学习内容区域",
      type: 2,
    };
    setData(newData);
    setData1(newData1);
  };
  // startTransition(() => {
  //   //函数体
  //   initData();
  // });
  useEffect(() => {
    initData();
    console.log(1);
  }, []);

  return (
    <div className="index">
      <Title title="首页" />
      <PageRender {...data} />
      <PageRender {...data1} />
      <div className="description">
        <a href="https://beian.miit.gov.cn/" target="_blank">
          您的备案号
        </a>
        <a href="https://beian.miit.gov.cn/" target="_blank">
          蜀ICP备2024090347号-1
        </a>
      </div>
    </div>
  );
};

export default Index;
