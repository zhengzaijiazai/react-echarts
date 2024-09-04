import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import LoadingComponent from "./LoadingComponent";

const Dp = lazy(() => import("@/views/dp/index"));

const dpArr: RouteObject[] = [
  {
    path: "/dp",
    element: LoadingComponent(<Dp />),
  },
];

export default dpArr;
