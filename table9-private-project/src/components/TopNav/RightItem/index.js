import React, { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "../../../components/Menu";
function RightItem() {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const onClickLoginModal = () => {
    console.log("showLoginModal: ", showLoginModal);
    setShowLoginModal((prev) => !prev);
  };
  return (
    <div style={{ float: "right" }}>
      <button>Modal Practice</button>
      <button onClick={onClickLoginModal}>Login</button>
      <Menu onCloseModal={onClickLoginModal} style={{ padding: "10px" }}>
        로그인
        <br />
        <input type="text" name="email" id="email" />
        <br />
        <input type="password" name="password" id="password" />
      </Menu>
      <button>Register</button>
    </div>
  );
}

export default RightItem;
