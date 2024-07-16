import React, { useState, useEffect } from "react";
import Title from "@/components/globalTitle";
import { HomeRenderProps } from "@/types/components_type";
import PageRender from "@/components/pageRender";

const From = () => {
  const [data, setData] = useState<HomeRenderProps>({
    data: [],
    title: "",
    type: 1,
  });
  useEffect(() => {
    //函数体
    initData();
  }, []);
  const initData = () => {
    //函数体
    const newData: HomeRenderProps = {
      data: [
        {
          id: 1,
          name: "上传组件",
          path: "form-fileload",
        },
      ],
      title: "表单组件分别展示",
      type: 1,
    };
    setData(newData);
  };
  return (
    <div>
      <Title title="Form表单" />
      <PageRender {...data} />
    </div>
  );
};

export default From;
