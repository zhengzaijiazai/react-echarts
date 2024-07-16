import React, { lazy } from "react";
import { RouteObject } from "react-router-dom";
import LoadingComponent from "./LoadingComponent";

const Echarts = lazy(() => import("@/views/echarts/index"));

const echartsArr: RouteObject[] = [
  {
    path: "/echarts",
    element: LoadingComponent(<Echarts />),
  },
];

export default echartsArr;
