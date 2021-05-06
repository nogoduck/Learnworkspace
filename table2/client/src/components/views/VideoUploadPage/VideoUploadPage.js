import "./VideoUploadPage.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropzone from "react-dropzone";
import Axios from "axios";

function VideoUploadPage() {
  const [VideoTitle, setVideoTitle] = useState("");
  const [VideoDesc, setVideoDesc] = useState("");
  const [Private, setPrivate] = useState(0);
  const [Category, setCategory] = useState("Cars");

  const CategoryOptions = [
    { value: 0, label: "Animals" },
    { value: 1, label: "Cars" },
    { value: 2, label: "Kids" },
    { value: 3, label: "Music" },
    { value: 4, label: "Picture" },
    { value: 5, label: "Sport" },
    { value: 6, label: "Sport" },
  ];
  const onVideoTitleHandler = (e) => {
    setVideoTitle(e.currentTarget.value);
  };
  const onVideoDescHandler = (e) => {
    setVideoDesc(e.currentTarget.value);
  };
  const onPrivateHandler = (e) => {
    setPrivate(e.currentTarget.value);
    console.log(e.currentTarget.value);
  };
  const onCategoryHandler = (e) => {
    setCategory(e.currentTarget.value);
    console.log(e.currentTarget.value);
  };
  const onDrop = (files) => {
    console.log(files);
    let formData = new FormData();
    const config = {
      header: { "content-type": "multipart/form-data" },
    };
    formData.append("file", files[0]);
    // Axios.post("/api/video/uploadfiles", formData, config).then((res) => {
    //   if (res.data.success) {
    //     console.log("File Upload State : Succeed");
    //   } else {
    //     console.log("File Upload State : Failed");
    //   }
    // });
  };

  return (
    <div
      className="main"
      style={{ height: "100vh", width: "90vw", borderRadius: "0px" }}
    >
      <Link to="/">
        <button className="home_btn">←</button>
      </Link>
      <h2>비디오 업로드</h2>
      <form className="FORM" onSubmit>
        <Dropzone onDrop={onDrop} multiple={false} maxSize={10_0000_0000}>
          {({ getRootProps, getInputProps }) => (
            <div className="DROPZONE" {...getRootProps()}>
              <input {...getInputProps()} />
              <div className="icon">╋</div>
            </div>
          )}
        </Dropzone>
        <br />
        <label>제목</label>
        <input
          type="text"
          placeholder="제목"
          value={VideoTitle}
          onChange={onVideoTitleHandler}
        />
        <br />
        <label>설명</label>
        <textarea
          placeholder="설명"
          value={VideoDesc}
          onChange={onVideoDescHandler}
        />
        <br />
        <label>공개범위</label>
        <select onChange={onPrivateHandler}>
          <option value="Private">Private</option>
          <option value="Public">Public</option>
        </select>
        <br />
        <label>카테고리</label>
        <select onChange={onCategoryHandler}>
          {CategoryOptions.map((item, index) => (
            <option key={index} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
        <br />
        <button className="BUTTON" type="submit">
          업로드
        </button>
      </form>
    </div>
  );
}
export default VideoUploadPage;
