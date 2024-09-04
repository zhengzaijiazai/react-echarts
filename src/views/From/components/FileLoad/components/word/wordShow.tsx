import React from "react";
import { useLocation } from "react-router-dom";
import { filetype } from "@/types/view";
import "./wordShow.scss";
const WordShow = () => {
  const { state } = useLocation();
  //   console.log(state);
  return (
    <div>
      <object className="wordShow" data={state.data} type={state.type}></object>
    </div>
  );
};

export default WordShow;
