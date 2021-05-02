import "./LandingPage.css";
import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function LandingPage(props) {
  useEffect(() => {
    axios.get("/api/test").then((res) => console.log(res.data));
  }, []);

  const onLogoutHandler = () => {
    axios.get("/api/users/logout").then((res) => {
      if (res.data.success) {
        props.history.push("/");
      } else {
        alert("로그아웃에 실패했습니다");
      }
    });
  };

  return (
    <div className="main">
      <h3>환영합니다</h3>
      <div className="loginMent">
        <Link to="/login">로그인</Link>을 하시겠습니까?
      </div>
      <div className="registerMent">
        계정이 없으시다면 <Link to="/register">회원가입</Link>도 가능합니다
      </div>
      <button onClick={onLogoutHandler}>로그아웃</button>
    </div>
  );
}

export default LandingPage;
