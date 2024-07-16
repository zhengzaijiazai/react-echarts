import React from "react";
import Title from "../globalTitle";
import { outsideProps } from "@/types/components_type";

const Outside = (props: outsideProps) => {
  const { title } = props;
  return (
    <div>
      <Title title={title} />
      {props.children}
    </div>
  );
};

export default Outside;
