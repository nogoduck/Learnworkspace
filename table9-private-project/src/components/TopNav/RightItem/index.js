import React from "react";
import { Link } from "react-router-dom";
import Menu from "../../../components/Menu";
function RightItem() {
  return (
    <div style={{ float: "right" }}>
      <button>Login</button>
      <button>Register</button>
      <Menu></Menu>
    </div>
  );
}

export default RightItem;
