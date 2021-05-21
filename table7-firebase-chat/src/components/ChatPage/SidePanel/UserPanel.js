import React, { useRef } from "react";
import { BsChatSquareDots } from "react-icons/bs";
import { Dropdown, Image } from "react-bootstrap";
import { useSelector } from "react-redux";
import mime from "mime-types";

import firebase from "../../../firebase";

function UserPanel() {
  const user = useSelector((state) => state.user.currentUser);
  const inputOpenImageRef = useRef();

  const handleLogout = () => {
    firebase.auth().signOut();
  };

  const handleOpenImageRef = () => {
    inputOpenImageRef.current.click();
  };

  const handleUploadImage = async (e) => {
    const file = e.target.files[0];
    const metadata = {
      contentType: mime.lookup(file.name),
    };

    try {
      let uploadTaskSnapshot = await firebase
        .storage()
        .ref()
        .child(`user_image/${user.uid}`)
        .put(file, metadata);

      console.log(uploadTaskSnapshot);
    } catch (error) {}
  };
  return (
    <div>
      <h3 style={{ color: "#4f5660" }}>
        <BsChatSquareDots /> Chat App
      </h3>
      <div style={{ display: "flex", margin: "1rem  0" }}>
        <Image
          src={user && user.photoURL}
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
            {user && user.displayName}
          </Dropdown.Toggle>

          <Dropdown.Menu className="super-colors">
            <Dropdown.Item onClick={handleOpenImageRef}>
              프로필 변경
            </Dropdown.Item>
            <Dropdown.Item onClick={handleLogout}>로그아웃</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <input
        onChange={handleUploadImage}
        accept="image/jpeg, image/png"
        type="file"
        style={{ display: "none" }}
        ref={inputOpenImageRef}
      />
    </div>
  );
}

export default UserPanel;
