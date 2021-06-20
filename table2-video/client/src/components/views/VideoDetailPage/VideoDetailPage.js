import "./VideoDetailPage.css";
import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { List, Avatar, Row, Col } from "antd";
import Axios from "axios";
import SideVideo from "./section/SideVideo";
import Subscribe from "./section/Subscribe";
import Comment from "./section/Comment";

function VideoDetailPage(props) {
  const videoId = props.match.params.videoId;
  const variable = { videoId: videoId };
  console.log("videoId :: ", videoId);
  console.log("variable :: ", variable);

  const [VideoDetail, setVideoDetail] = useState([]);
  // const [Comment, setComment] = useState(initialState);

  useEffect(() => {
    Axios.post("/api/video/getVideoDetail", variable).then((res) => {
      if (res.data.success) {
        console.log("Get Video State : Succeed");
        setVideoDetail(res.data.videoDetail);
      } else {
        console.log("Get Video State : Failed");
        alert("비디오 정보를 불러오지 못했습니다");
      }
    });
  }, []);

  if (VideoDetail.writer) {
    const subscribeButton = VideoDetail.writer._id !==
      localStorage.getItem("userId") && (
      <Subscribe
        userTo={VideoDetail.writer._id}
        userFrom={localStorage.getItem("userId")}
      />
    );

    return (
      <div id="videodetail__container">
        <div id="container_title-videodetail">
          <Link to="/video/explore">
            <button className="link_back-videodetail">뒤로가기</button>
          </Link>
        </div>

        <div id="video_content">
          <div id="video_article">
            <video
              style={{ width: "100%" }}
              src={`http://localhost:8004/${VideoDetail.filePath}`}
              controls
            />
            <div className="video_profile">
              <ul>
                <li>
                  <img src="http://placehold.it/50x50" />
                </li>
                <li>{VideoDetail.writer.name}</li>
                <li>{VideoDetail.description}</li>
              </ul>
              <div className="video_func">
                {subscribeButton}
                <div
                  className="subscribe"
                  onClick={[<Subscribe userTo={VideoDetail.writer._id} />]}
                ></div>
              </div>
            </div>
            <Comment postId={videoId} />
          </div>
          <div id="video_side">
            <SideVideo />
          </div>
        </div>
      </div>
    );
  } else {
    return <div id="video__container">영상 불러오는중...</div>;
  }
}

export default withRouter(VideoDetailPage);
