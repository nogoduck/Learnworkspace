import "./LandingPage.css";
import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function LandingPage() {
  useEffect(() => {
    axios.get("/api/hello").then((response) => console.log(response.data));
  }, []);

  return (
    <div className="main">
      <h3>환영합니다</h3>
      <div className="loginMent">
        <Link to="/login">로그인</Link>을 하시겠습니까?
      </div>
      <div className="registerMent">
        계정이 없으시다면 <Link to="/register">회원가입</Link>도 가능합니다
      </div>
    </div>
  );
}

export default LandingPage;
