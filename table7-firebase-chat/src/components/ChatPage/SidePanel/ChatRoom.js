import React, { Component } from "react";
import { MdGroup, MdAdd } from "react-icons/md";

export class ChatRoom extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            // width: "100%",
          }}
        >
          <MdGroup style={{ marginRight: "5" }} />
          Chat Room (1)
          <MdAdd
            style={{
              position: "absolute",
              right: "0",
              cursor: "pointer",
            }}
          />
        </div>
      </div>
    );
  }
}

export default ChatRoom;
