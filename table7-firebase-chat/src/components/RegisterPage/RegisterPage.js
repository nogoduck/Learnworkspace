import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import firebase from "../../firebase";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [errorFromSubmit, setErrorFromSubmit] = useState("");
  const password = useRef();
  const [loading, setLoading] = useState(false);
  password.current = watch("password");

  const onSubmit = async (data) => {
    console.log("확인");

    try {
      setLoading(true);
      let createdUser = await firebase
        .auth()
        .createUserWithEmailAndPassword(data.email, data.password);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setErrorFromSubmit(error.message);
      setTimeout(() => {
        setErrorFromSubmit("");
      }, 5000);
    }
  };

  return (
    <div className="auth-wrapper">
      <h3>회원가입</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>이메일</label>
        <input
          name="email"
          type="email"
          {...register("email", {
            required: true,
            pattern: /^\S+@\S+$/i,
          })}
          autoFocus
        />
        {errors.email && <p>이메일 형식이 올바르지 않습니다</p>}

        <label>이름</label>
        <input
          name="name"
          {...register("name", {
            required: true,
            maxLength: 10,
          })}
        />
        {errors.name && errors.name.type === "required" && (
          <p>이름을 입력해주세요</p>
        )}
        {errors.name && errors.name.type === "maxLength" && (
          <p>이름은 10글자 이하로 입력가능합니다</p>
        )}

        <label>비밀번호</label>
        <input
          name="password"
          type="password"
          {...register("password", {
            required: true,
            minLength: 6,
          })}
        />
        {errors.password && errors.password.type === "required" && (
          <p>비밀번호를 입력해주세요</p>
        )}
        {errors.password && errors.password.type === "minLength" && (
          <p>비밀번호는 6글자 이상으로 입력가능합니다</p>
        )}

        <label>비밀번호 확인</label>
        <input
          name="password_check"
          type="password"
          {...register("passwordCheck", {
            required: true,
            validate: (value) => value === password.current,
          })}
        />
        {errors.passwordCheck && errors.passwordCheck.type === "required" && (
          <p>비밀번호 확인을 입력해주세요</p>
        )}
        {errors.passwordCheck && errors.passwordCheck.type === "validate" && (
          <p>비밀번호가 동일하지 않습니다</p>
        )}

        {errorFromSubmit && <p>{errorFromSubmit}</p>}
        <input type="submit" disable={loading} value="확인" />
        <Link to="/login">로그인 하러가기</Link>
      </form>
    </div>
  );
}

export default RegisterPage;
