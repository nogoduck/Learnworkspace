import "./LoginPage.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../_actions/user_action";

function LoginPage(props) {
  const dispatch = useDispatch();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const onEmailHandler = (e) => {
    setEmail(e.currentTarget.value);
  };

  const onPasswordHandler = (e) => {
    setPassword(e.currentTarget.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    let body = {
      email: Email,
      password: Password,
    };

    dispatch(loginUser(body)).then((res) => {
      if (res.payload.loginSuccess) {
        props.history.push("/");
      }
    });
  };

  return (
    <div className="main">
      <Link to="/">
        <button className="home_btn">←</button>
      </Link>
      <h2>로그인</h2>
      <form className="loginForm" onSubmit={onSubmitHandler}>
        <input
          type="email"
          placeholder="이메일"
          value={Email}
          onChange={onEmailHandler}
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={Password}
          onChange={onPasswordHandler}
        />
        <br />
        <button type="submit">다음</button>
      </form>
    </div>
  );
}

export default LoginPage;
