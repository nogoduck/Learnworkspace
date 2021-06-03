import { useCallback } from "react";
import { Form, Input, Button } from "antd";
import Link from "next/link";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import userInput from "../hooks/userInput";
import { loginAction } from "../reducers/user";
const ButtonWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
`;

const FormWrapper = styled(Form)`
  padding: 20px;
`;

const LoginForm = () => {
  const dispatch = useDispatch();
  const [id, onChangeId] = userInput("");
  const [password, onChangePassword] = userInput("");

  const onSubmitForm = useCallback(() => {
    console.log(id, password);
    dispatch(loginAction({ id, password }));
  }, [id, password]);

  return (
    <>
      <FormWrapper onFinish={onSubmitForm}>
        <div>
          <label htmlFor="user-id">아이디</label>
          <br />
          <Input
            name="user-id"
            value={id}
            onChange={onChangeId}
            required
          ></Input>
        </div>
        <div>
          <label htmlFor="user-password">비밀번호</label>
          <br />
          <Input
            name="user-password"
            type="password"
            value={password}
            onChange={onChangePassword}
            required
          ></Input>
        </div>
        <ButtonWrapper>
          <Button type="primary" htmlType="submit" loading={false}>
            로그인
          </Button>

          <Link href="/signup">
            <a>
              <Button>회원가입</Button>
            </a>
          </Link>
        </ButtonWrapper>
      </FormWrapper>
    </>
  );
};

export default LoginForm;