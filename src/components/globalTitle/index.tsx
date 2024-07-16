import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";
import { TitleProps } from "@/types/components_type";

const Title = (props: TitleProps) => {
  const navigate = useNavigate();
  const goBack = () => {
    //函数体
    navigate(-1);
  };
  //函数体
  return (
    <h1 className="title">
      {props.title == "首页" ? (
        ""
      ) : (
        <span className="arrow" onClick={goBack}>
          {"<-"}
        </span>
      )}
      {props.title}
    </h1>
  );
};

export default Title;
