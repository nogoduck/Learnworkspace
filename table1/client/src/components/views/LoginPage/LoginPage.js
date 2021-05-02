import "./LoginPage.css";
import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

function LoginPage() {
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

    // dispatch(loginUser(body));

    axios.post("/api/users/login", body).then((res) => {
      console.log("SUCCEED");
    });
  };

  return (
    <div className="main">
      <h2>Login</h2>

      <form className="loginForm" onSubmit={onSubmitHandler}>
        <label>Email</label>
        <input type="email" value={Email} onChange={onEmailHandler} />
        <label>Password</label>
        <input type="password" value={Password} onChange={onPasswordHandler} />
        <br />
        <button>확인</button>
      </form>
    </div>
  );
}

export default LoginPage;
