import "./SideVideo.css";
import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import Axios from "axios";

function SideVideo() {
  const [sideVideos, setsideVideos] = useState([]);

  useEffect(() => {
    Axios.get("/api/video/getVideos").then((res) => {
      if (res.data.success) {
        console.log("Get sideVideos : Succeed");
        setsideVideos(res.data.videos);
      } else {
        console.log("Get sideVideos : Failed");
      }
    });
  }, []);

  const renderSideVideo = sideVideos.map((video, index) => {
    let minutes = Math.floor(video.duration / 60);
    let seconds = Math.floor(video.duration - minutes * 60);

    return (
      <div key={index} id="sidevideo__container">
        <div id="sidevideo__content">
          <a href={`/video/${video._id}`}>
            <img
              src={`http://localhost:8004/${video.thumbnail}`}
              alt="side_thumbnail"
            />
          </a>
        </div>
        <div id="sidevideo__article">
          <a href={`/video/${video._id}`}>
            <div className="side_title">{video.title}</div>
            <div className="side_writer">{video.writer.name}</div>
            <div className="side_views">{video.views}</div>
            <div className="side_time">
              {minutes}:{seconds < 10 ? `0${seconds}` : `${seconds}`}
            </div>
          </a>
        </div>
      </div>
    );
  });

  return <>{renderSideVideo}</>;
}

export default withRouter(SideVideo);
