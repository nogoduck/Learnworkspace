import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = useRef();
  password.current = watch("passwordRequired");

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="auth-wrapper">
      <h3>회원가입</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>이메일</label>
        <input
          name="email"
          type="email"
          {...register("emailRequired", {
            required: true,
            pattern: /^\S+@\S+$/i,
          })}
          autoFocus
        />
        {errors.emailRequired && <p>이메일 형식이 올바르지 않습니다</p>}

        <label>이름</label>
        <input
          name="name"
          {...register("nameRequired", {
            required: true,
            maxLength: 10,
          })}
        />
        {errors.nameRequired && errors.nameRequired.type === "required" && (
          <p>이름을 입력해주세요</p>
        )}
        {errors.nameRequired && errors.nameRequired.type === "maxLength" && (
          <p>이름은 10글자 이하로 입력가능합니다</p>
        )}

        <label>비밀번호</label>
        <input
          name="password"
          type="password"
          {...register("passwordRequired", {
            required: true,
            minLength: 6,
          })}
        />
        {errors.passwordRequired &&
          errors.passwordRequired.type === "required" && (
            <p>비밀번호를 입력해주세요</p>
          )}
        {errors.passwordRequired &&
          errors.passwordRequired.type === "minLength" && (
            <p>비밀번호는 6글자 이상으로 입력가능합니다</p>
          )}

        <label>비밀번호 확인</label>
        <input
          name="password_check"
          type="password"
          {...register("passwordCheckRequired", {
            required: true,
            validate: (value) => value === password.current,
          })}
        />
        {errors.passwordCheckRequired &&
          errors.passwordCheckRequired.type === "required" && (
            <p>비밀번호 확인을 입력해주세요</p>
          )}
        {errors.passwordCheckRequired &&
          errors.passwordCheckRequired.type === "validate" && (
            <p>비밀번호가 동일하지 않습니다</p>
          )}

        <input type="submit" value="확인" />
        <Link to="/login">로그인 하러가기</Link>
      </form>
    </div>
  );
}

export default RegisterPage;
