import React from "react";
import "./index.scss";
import { HomeRenderProps } from "@/types/components_type";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const PageRender = (props: HomeRenderProps) => {
  // type 1 为首页学习内容区  2为网站链接区
  const { data, title, type } = props;
  const navigate = useNavigate();
  const gotoPage = (path: string) => {
    //函数体
    navigate(type == 1 ? `/${path}` : `${path}`);
  };
  return (
    <div className="homeRender">
      <h2 className="homeRender_title">{title + `${type}`}</h2>
      <div className="homeRender_list">
        {data.map((item, index) => {
          return type === 1 ? (
            <Button
              className="homeRender_list_button"
              key={item.id}
              onClick={() => gotoPage(item.path)}
            >
              {item.name}
            </Button>
          ) : (
            <Button
              className="homeRender_list_button"
              key={item.id}
              href={item.path}
              target="_blank"
            >
              {item.name}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default PageRender;
