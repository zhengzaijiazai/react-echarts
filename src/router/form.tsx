import { RouteObject } from "react-router-dom";
import React, { lazy } from "react";
import LoadingComponent from "./LoadingComponent";
const Form = lazy(() => import("@/views/From/index"));
const FileLoad = lazy(() => import("@/views/From/components/FileLoad"));

const formArr: RouteObject[] = [
  {
    path: "/form",
    element: LoadingComponent(<Form />),
  },
  {
    path: "/form-fileload",
    element: LoadingComponent(<FileLoad />),
  },
];

export default formArr;
