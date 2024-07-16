import React, { useRef } from "react";
import Button from "@/components/Button";
import { uploadWord } from "@/apis/index";
import { message, notification } from "antd";
const WordUpload = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const upload = async () => {
    //函数体
    try {
      let file = inputRef.current?.files;
      if (!file || file?.length === 0) {
        return message.error("请选择上传文件");
      }

      let formData = new FormData();
      for (let i = 0; i < file.length; i++) {
        const encodeName = encodeURIComponent(file[i].name);
        // console.log(encodeName);
        formData.append("words", file[i], encodeName);
      }
      const data = await uploadWord(formData);
      if (data.status === 200) {
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
  const inputChange = () => {
    //函数体
    console.log(inputRef.current?.files);
  };
  return (
    <div className="word_upload">
      <Button title="上传word" type="primary" size="small" onclick={upload} />
      <div className="word_upload_content">
        <input multiple type="file" ref={inputRef} onChange={inputChange} />
      </div>
    </div>
  );
};

export default WordUpload;
