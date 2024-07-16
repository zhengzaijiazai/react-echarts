import React from "react";
import { Empty } from "antd";
const errorElement = () => {
  return (
    <div>
      <Empty description="页面出现错误,请稍后再试" />
    </div>
  );
};

export default errorElement;
