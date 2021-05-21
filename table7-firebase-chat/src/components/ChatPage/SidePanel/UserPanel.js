import React from "react";
import { BsChatSquareDots } from "react-icons/bs";
import { Dropdown, Image } from "react-bootstrap";
import { useSelector } from "react-redux";

import firebase from "../../../firebase";
function UserPanel() {
  const user = useSelector((state) => state.user.currentUser);

  const handleLogout = () => {
    firebase.auth().signOut();
  };
  return (
    <div>
      <h3 style={{ color: "#4f5660" }}>
        <BsChatSquareDots /> Chat App
      </h3>
      <div style={{ display: "flex", margin: "1rem  0" }}>
        <Image
          src={user.photoURL}
          roundedCircle
          style={{
            width: "35px",
            height: "35px",
          }}
        />
        <Dropdown>
          <Dropdown.Toggle
            variant="success"
            id="dropdown-basic"
            style={{
              background: "transparent",
              border: "none",
              outline: "none",
              color: "#4f5660",
            }}
          >
            {user.displayName}
          </Dropdown.Toggle>

          <Dropdown.Menu className="super-colors">
            <Dropdown.Item href="#/action-1">프로필 변경</Dropdown.Item>
            <Dropdown.Item onClick={handleLogout}>로그아웃</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}

export default UserPanel;
