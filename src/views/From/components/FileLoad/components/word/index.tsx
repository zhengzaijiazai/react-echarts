import React, { useRef, useState } from "react";
import Button from "@/components/Button";
import { useNavigate } from "react-router-dom";
import { uploadWord } from "@/apis/index";
import { message, notification } from "antd";
import mammoth from "mammoth";
import { filetype, filetypeData } from "@/types/view";
import fileImg from "./images/文档.png";
import "./index.scss";

const WordUpload = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [fileArr, setFileArr] = useState<filetypeData>([]);
  const navigate = useNavigate();
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
      // console.log("formData", formData.getAll("words"));
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
    let fileData = inputRef.current?.files;
    if (!fileData) return;
    let data: filetypeData = [];
    for (let i = 0; i < fileData?.length; i++) {
      let newFile: filetype = {};
      // console.log(fileData[i]);
      let reader = new FileReader();

      reader.onload = (e) => {
        //函数体
        // console.log(e.target?.result);
        newFile.data = e.target?.result as string;
      };
      reader.readAsDataURL(fileData[i]);
      newFile.type = fileData[i].type;
      newFile.name = fileData[i].name;
      data.push(newFile);
    }
    setFileArr(data);
  };

  const gotoShow = (item: filetype) => {
    navigate("/form-fileload-show", {
      state: item,
    });
  };
  return (
    <div className="word_upload">
      <Button title="上传word" type="primary" size="small" onclick={upload} />
      <div className="word_upload_content">
        <input multiple type="file" ref={inputRef} onChange={inputChange} />
      </div>
      <div className="word_upload_show">
        {fileArr.length > 0
          ? fileArr.map((item: filetype, index) => {
              return (
                <div
                  className="word_upload_show_file"
                  onClick={() => gotoShow(item)}
                  key={index}
                >
                  <img src={fileImg} alt="图片丢失了" />
                  <p>{item.name}</p>
                </div>
              );
            })
          : ""}
      </div>
    </div>
  );
};

export default WordUpload;
