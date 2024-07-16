import React, { lazy } from "react";
import { RouteObject, Navigate, createBrowserRouter } from "react-router-dom";
import echartsArr from "./echarts";
import formArr from "./form";
import ErrorElement from "@/components/errorElement";
import LoadingComponent from "./LoadingComponent";

const ReduxTest = lazy(() => import("@/views/Redux_test/index"));
const Index = lazy(() => import("@/views/index/index"));

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/index" />,
    errorElement: <Navigate to="/error" replace />,
  },
  {
    path: "/index",
    element: LoadingComponent(<Index />),
  },
  {
    path: "/error",
    element: <ErrorElement />,
  },
  {
    path: "/redux",
    element: LoadingComponent(<ReduxTest />),
  },
  ...echartsArr,
  ...formArr,
];

export default createBrowserRouter(routes);
