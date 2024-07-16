import React from "react";
import { ButtonProps } from "@/types/components_type";
import "./index.scss";

const Button = (props: ButtonProps) => {
  const { title, type, onclick, size } = props;
  return (
    <div className="button">
      <button
        className={`default ${type} ${size}`}
        onClick={onclick ? onclick : () => {}}
      >
        {title ? title : "按钮"}
      </button>
    </div>
  );
};

export default Button;
