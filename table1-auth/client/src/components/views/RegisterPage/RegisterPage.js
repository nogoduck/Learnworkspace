import "./RegisterPage.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../_actions/user_action";
import { withRouter } from "react-router-dom";

function RegisterPage(props) {
  const dispatch = useDispatch();
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  const onNameHandler = (e) => {
    setName(e.currentTarget.value);
  };
  const onEmailHandler = (e) => {
    setEmail(e.currentTarget.value);
  };
  const onPasswordHandler = (e) => {
    setPassword(e.currentTarget.value);
  };
  const onConfirmPasswordHandler = (e) => {
    setConfirmPassword(e.currentTarget.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (Password !== ConfirmPassword) {
      return alert("비밀번호와 비밀번호 확인이 같지 않습니다");
    }
    let body = {
      name: Name,
      email: Email,
      password: Password,
    };

    dispatch(registerUser(body)).then((res) => {
      if (res.payload.success) {
        props.history.push("/login");
      } else {
        alert("회원가입에 실패했습니다");
      }
    });
  };

  return (
    <div className="main">
      <Link to="/">
        <button className="home_btn">←</button>
      </Link>
      <h2>회원가입</h2>
      <form className="registerForm" onSubmit={onSubmitHandler}>
        <input
          type="name"
          placeholder="이름"
          value={Name}
          onChange={onNameHandler}
        />
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
        <input
          type="password"
          placeholder="비밀번호 확인"
          value={ConfirmPassword}
          onChange={onConfirmPasswordHandler}
        />
        <br />
        <button type="submit">다음</button>
      </form>
    </div>
  );
}

export default withRouter(RegisterPage);
