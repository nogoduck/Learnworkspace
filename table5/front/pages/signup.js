import { useCallback, useState } from "react";
import Head from "next/head";
import { Form, Input, Checkbox, Button } from "antd";
import styled from "styled-components";

import AppLayout from "../components/AppLayout";
import userInput from "../hooks/userInput";

const ErrorMessage = styled.div`
  color: red;
`;

const Signup = () => {
  const [id, onChangeId] = userInput("");
  const [nickname, onChangeNickname] = userInput("");
  const [password, onChangePassword] = userInput("");

  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const onChangePasswordConfirm = useCallback((e) => {
    setPasswordConfirm(e.target.value);
    setPasswordError(e.target.value !== password);
  });

  const [term, setTerm] = useState("");
  const [termError, setTermError] = useState(false);
  const onChangeTerm = useCallback((e) => {
    console.log("체크됌");
    setTerm(e.target.checked);
    setTermError(false);
  }, []);
  console.log("체크여부", term);

  const onSubmit = useCallback(() => {
    if (password !== passwordConfirm) {
      return setPasswordError(true);
    }
    if (!term) {
      return setTermError(true);
    }
    console.log("Register User Info : ", id, nickname, password);
  }, [password, passwordConfirm, term]);
  return (
    <>
      <Head>
        <title>Node Bird | 회원가입</title>
      </Head>

      <AppLayout>
        <Form onFinish={onSubmit}>
          <div>
            <label htmlFor="user-id">아이디</label>
            <br />
            <Input
              name="user-id"
              value={id}
              required
              onChange={onChangeId}
            ></Input>
          </div>
          <div>
            <label htmlFor="user-nickname">닉네임</label>
            <br />
            <Input
              name="user-nickname"
              value={nickname}
              required
              onChange={onChangeNickname}
            ></Input>
          </div>
          <div>
            <label htmlFor="user-password">비밀번호</label>
            <br />
            <Input
              type="password"
              name="user-password"
              value={password}
              required
              onChange={onChangePassword}
            ></Input>
          </div>
          <div>
            <label htmlFor="user-password-confirm">비밀번호 확인</label>
            <br />
            <Input
              type="password"
              name="user-password-confirm"
              value={passwordConfirm}
              required
              onChange={onChangePasswordConfirm}
            ></Input>
            {passwordError && (
              <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>
            )}
          </div>
          <Checkbox name="use-term" checked={term} onChange={onChangeTerm}>
            1일 1 버드를 할 것을 동의합니다
          </Checkbox>
          {termError && <ErrorMessage>약관에 동의하셔아 합니다.</ErrorMessage>}
          <div style={{ marginTop: 10 }}>
            <Button type="primary" htmlType="submit">
              다음
            </Button>
          </div>
        </Form>
      </AppLayout>
    </>
  );
};

export default Signup;
