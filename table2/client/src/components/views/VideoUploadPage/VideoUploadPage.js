import "./VideoUploadPage.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropzone from "react-dropzone";
import Axios from "axios";

function VideoUploadPage() {
  const [VideoTitle, setVideoTitle] = useState("");
  const [VideoDesc, setVideoDesc] = useState("");
  const [Private, setPrivate] = useState("");
  const [Category, setCategory] = useState("");
  const [FilePath, setFilePath] = useState("");
  const [Duration, setDuration] = useState("");
  const [ThumbnailPath, setThumbnailPath] = useState("");

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
    let formData = new FormData();
    const config = {
      header: { "content-type": "multipart/form-data" },
    };
    formData.append("file", files[0]);
    Axios.post("/api/video/uploadfiles", formData, config).then((res) => {
      if (res.data.success) {
        console.log("RES.DATA:", res.data);
        console.log("File Upload State : Succeed");

        let variable = {
          url: res.data.url,
          fileName: res.data.fileName,
        };

        setFilePath(res.data.url);

        Axios.post("/api/video/thumbnail", variable).then((res) => {
          if (res.data.success) {
            console.log("Create Video Thumbnail : Succeed");
            console.log(res.data);

            setDuration(res.data.fileDuration);
            setThumbnailPath(res.data.url);
          } else {
            console.log("Create Video Thumbnail : Failed");
            alert("썸네일 생성을 실패했습니다.");
          }
        });
      } else {
        console.log("File Upload State : Failed");
        alert("비디오 업로드를 실패했습니다");
      }
    });
  };
  return (
    <div className="main">
      <Link to="/">
        <button className="home_btn">←</button>
      </Link>
      <h2>비디오 업로드</h2>
      <form className="uploadForm" onSubmit>
        <div className="DROPANDTHUMBNAIL">
          <Dropzone onDrop={onDrop} multiple={false} maxSize={10_0000_0000}>
            {({ getRootProps, getInputProps }) => (
              <div className="DROPZONE" {...getRootProps()}>
                <input {...getInputProps()} />
                <div className="icon">╋</div>
              </div>
            )}
          </Dropzone>
          {ThumbnailPath && (
            <div className="IMG">
              <img
                src={`http://localhost:8004/${ThumbnailPath}`}
                alt="video_thumbnail"
              />
            </div>
          )}
        </div>
        <br />
        <fieldset>
          <legend>제목</legend>
          <input
            type="text"
            placeholder="동영상을 설명하는 제목을 추가하세요"
            value={VideoTitle}
            onChange={onVideoTitleHandler}
          />
        </fieldset>
        <fieldset>
          <legend>설명</legend>
          <label></label>
          <textarea
            placeholder="시청자에게 동영상에 대해 알려주세요"
            value={VideoDesc}
            onChange={onVideoDescHandler}
          />
        </fieldset>
        <fieldset className="SELECTBOX">
          <legend>필수 선택</legend>
          공개범위
          <select onChange={onPrivateHandler}>
            <option value="Private">Private</option>
            <option value="Public">Public</option>
          </select>
          <span className="SELECT_ICON">|</span> 카테고리
          <select onChange={onCategoryHandler}>
            {CategoryOptions.map((item, index) => (
              <option key={index} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </fieldset>
        <br />
        <button className="BUTTON UPLOAD_BTN" type="submit">
          업로드
        </button>
      </form>
    </div>
  );
}
export default VideoUploadPage;
