import React from "react";
import "./index.scss";
const LitterTitle = (props: { name: string }) => {
  const { name } = props;
  return <h2 className="litterTitle_name">{name}</h2>;
};

export default LitterTitle;
