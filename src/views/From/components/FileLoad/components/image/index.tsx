import React, { useRef, useState } from "react";
import { uploadImage } from "@/apis/index";
import Button from "@/components/Button";
import { message, notification } from "antd";
import "./index.scss";
import ts from "typescript";

const Image = () => {
  const image = useRef<HTMLInputElement>(null);
  const [isbig, setIsbig] = useState<boolean>(false);
  const [filebase64, setFilebase64] = useState<string>("");
  const upload = async () => {
    let file = image.current?.files;
    // console.log(file);
    if (!file || file?.length === 0) return message.error("请选择文件");
    const formData = new FormData();
    formData.append("image", file[0]);
    // console.log(formData.get("image"));
    try {
      const data = await uploadImage(formData);
      //ts-ignore
      if (data.status == 200) {
        notification.success({
          message: "上传成功",
          description: "上传成功",
        });
      } else {
        notification.error({
          message: "上传失败",
          description: "上传失败",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const imageChange = () => {
    //函数体
    // console.log(image.current?.files);
    const filereader = new FileReader();
    filereader.onload = (e) => {
      //函数体
      if (typeof e.target?.result === "string") {
        setFilebase64(e.target?.result);
      }
    };
    if (image.current?.files) {
      filereader.readAsDataURL(image.current?.files[0]);
    }
    setFilebase64("");
  };

  // 方法图片
  const isBig = () => {
    setIsbig(!isbig);
  };
  return (
    <div className="image">
      {/* multiple  上传多个文件 */}
      <Button title="点击上传" type="primary" size="small" onclick={upload} />
      <div className="image_content">
        <input
          className="image_content_file"
          type="file"
          ref={image}
          onChange={imageChange}
        />
      </div>
      <div>
        <img
          className={`image_content_img ${
            isbig ? "image_content_img_big" : ""
          }`}
          src={filebase64 !== "" ? filebase64 : undefined}
          alt=""
          onClick={isBig}
        />
      </div>
    </div>
  );
};

export default Image;
