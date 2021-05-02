import "./LoginPage.css";
import React, { useState } from "react";
import Axios from "axios";
function LoginPage() {
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
    console.log("EMAIL: ", Email);
    console.log("PASSWORD: ", Password);
    let body = {
      email: Email,
      password: Password,
    };

    console.log(body);
    console.log(body.email);

    Axios.post("/api/users/login", body).then((res) => {
      console.log("SUCCESS");
      console.log(res);
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
