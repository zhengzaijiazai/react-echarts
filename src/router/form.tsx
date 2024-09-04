import { RouteObject } from "react-router-dom";
import React, { lazy } from "react";
import LoadingComponent from "./LoadingComponent";

// 引入组件进行懒加载
const Form = lazy(() => import("@/views/From/index"));
const FileLoad = lazy(() => import("@/views/From/components/FileLoad"));
const FileWordShow = lazy(
  () => import("@/views/From/components/FileLoad/components/word/wordShow")
);

const formArr: RouteObject[] = [
  {
    path: "/form",
    // 配合lazy使用Suspense组件进行懒加载
    element: LoadingComponent(<Form />),
  },
  // 进入文件上传页面
  {
    path: "/form-fileload",
    element: LoadingComponent(<FileLoad />),
  },
  // 预览文件页面
  {
    path: "/form-fileload-show",
    element: LoadingComponent(<FileWordShow />),
  },
];

export default formArr;
