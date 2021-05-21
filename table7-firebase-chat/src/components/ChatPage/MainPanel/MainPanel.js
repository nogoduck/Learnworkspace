import React, { Component } from "react";

import Message from "./Message";
import MessageForm from "./MessageForm";
import MessageHeader from "./MessageHeader";

export class MainPanel extends Component {
  render() {
    return (
      <div
        style={{
          padding: "2rem 2rem 0 2rem",
          color: "#060607",
        }}
      >
        <MessageHeader />
        <div
          style={{
            width: "100%",
            height: "450px",
            borderRadius: "10px",
            backgroundColor: "#f2f3f5",
            padding: "1rem",
            marginBottom: "1rem",
            overflowY: "auto",
          }}
        ></div>
        <MessageForm />
        <Message />
      </div>
    );
  }
}

export default MainPanel;
