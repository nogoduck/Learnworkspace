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
      <button onClick={onClickLoginModal}>Login</button>
      <Menu onCloseModal={onClickLoginModal}></Menu>
      <button>Register</button>
    </div>
  );
}

export default RightItem;
