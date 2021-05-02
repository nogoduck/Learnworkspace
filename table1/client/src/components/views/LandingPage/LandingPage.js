import "./LandingPage.css";
import React, { useEffect } from "react";
import axios from "axios";
function LandingPage() {
  useEffect(() => {
    axios.get("/api/hello").then((response) => console.log(response.data));
  }, []);

  return (
    <div className="main">
      <h3>환영합니다</h3>
      <div className="loginMent">
        <a href="/login">로그인</a>을 하시겠습니까?
      </div>
      <div className="registerMent">
        계정이 없으시다면 <a href="/register">회원가입</a>도 가능합니다
      </div>
    </div>
  );
}

export default LandingPage;
