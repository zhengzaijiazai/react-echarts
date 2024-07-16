import React from "react";
import Outside from "@/components/outsideTelmplet";
import Image from "./components/image";
import WordUpload from "./components/word";
import "./index.scss";

const FileLoad = () => {
  return (
    <div>
      <Outside title="上传">
        <div className="fileload">
          <Image />
          <WordUpload />
        </div>
      </Outside>
    </div>
  );
};

export default FileLoad;
