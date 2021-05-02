import React, { useEffect } from "react";
import axios from "axios";
import "./LandingPage.css";
function LandingPage() {
  useEffect(() => {
    axios.get("/api/hello").then((response) => console.log(response.data));
  }, []);

  return (
    <div className="main">
      <h3>환영합니다</h3>
      <p>
        <a href="/login">로그인</a>을 하시겠습니까?
      </p>
      <p>
        계정이 없으시다면 <a href="/register">회원가입</a>도 가능합니다
      </p>
    </div>
  );
}

export default LandingPage;
