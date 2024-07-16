import { Suspense } from "react";
import { Spin } from "antd";

const LoadingComponent = (comp: JSX.Element) => {
  //函数体
  return <Suspense fallback={<Spin></Spin>}>{comp}</Suspense>;
};

export default LoadingComponent;
