import "./LandingPage.css";
import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link, withRouter } from "react-router-dom";
import { useSelector } from "react-redux";

function LandingPage(props) {
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

  const onLogoutHandler = () => {
    Axios.get("/api/users/logout").then((res) => {
      if (res.data.success) {
        props.history.push("/login");
        props.history.push("/");
      } else {
        alert("로그아웃에 실패했습니다");
      }
    });
  };

  const renderCards = Video.map((video, index) => {
    return (
      <a href={`/video/post${video._id}`}>
        <img
          src={`http://localhost:8004/${video.thumbnail}`}
          alt="thumbnail_IMG"
        />
      </a>
    );
  });

  const user = useSelector((state) => state.user);
  console.log("isLOGIN: ", user.userData);

  if (user.userData && user.userData.isAuth) {
    return (
      <div className="main">
        <h3>{user.userData.name}님 방문을 환영합니다 😁</h3>
        <div className="Ment">개인 영상을 저장할 수 있는 공간입니다</div>
        <div className="Ment">
          서로에게 상처되지 않는 따뜻한 댓글 부탁드립니다
        </div>
        <div className="Ment">
          사이트를 떠날 땐 반드시{" "}
          <button className="LINK" onClick={onLogoutHandler}>
            로그아웃
          </button>
          을 해주세요
        </div>
        <br />
        <Link to="/video/upload">
          <button className="BUTTON">업로드</button>
        </Link>
        <div className="card" style={{ display: "flex" }}>
          {renderCards}
        </div>
      </div>
    );
  } else {
    return (
      <div className="main">
        <h3>환영합니다 😊</h3>
        <div className="Ment">
          <Link to="/login">로그인</Link>을 하시겠습니까?
        </div>
        <div className="Ment">
          계정이 없으시다면 <Link to="/register">회원가입</Link>도 가능합니다
        </div>
      </div>
    );
  }
}

export default withRouter(LandingPage);
