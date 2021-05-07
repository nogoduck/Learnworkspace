import "./VideoCardPage.css";
import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link, withRouter } from "react-router-dom";
import moment from "moment";

function VideoCardPage() {
  const [Video, setVideo] = useState([]);

  useEffect(() => {
    Axios.get("/api/video/getVideos").then((res) => {
      if (res.data.success) {
        console.log("Get Videos : Succeed");
        console.log("DB List : ", res.data);
        setVideo(res.data.videos);
      } else {
        console.log("Get Videos : Failed");
      }
    });
  }, []);
  const renderCards = Video.map((video, index) => {
    let minutes = Math.floor(video.duration / 60);
    let seconds = Math.floor(video.duration - minutes * 60);
    return (
      <a href={`/video/post${video._id}`} className="VIDEO">
        <img
          src={`http://localhost:8004/${video.thumbnail}`}
          alt="thumbnail_IMG"
        />
        <div className="duration__Absolute">
          <div className="duration__Relative">
            <span>
              {minutes}:{seconds < 10 ? `0${seconds}` : `${seconds}`}
            </span>
          </div>
        </div>
        <div className="video__info">
          <div className="title">
            <span className="profile__img">
              <img
                src="http://placehold.it/50x50"
                style={{ width: "45px", height: "45px", borderRadius: "50%" }}
              />
            </span>
            <span className=" video__title">{video.title}</span>
          </div>
          <div className="video__article video__writerName">
            {video.writer.name}
          </div>
          <div className="video__article video__date">
            {video.view} · {moment(video.createdAt).format("YY MMM Do ")}
          </div>
        </div>
      </a>
    );
  });

  return (
    <div className="cardMain">
      <Link to="/">
        <button className="home_btn">←</button>
      </Link>
      <div className="card" style={{ display: "flex", flexWrap: "wrap" }}>
        {renderCards}
      </div>
    </div>
  );
}

export default withRouter(VideoCardPage);
