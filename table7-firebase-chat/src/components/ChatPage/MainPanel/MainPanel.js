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
          backgroundColor: "#36393f",
          color: "#e7e8e8",
        }}
      >
        <MessageHeader />
        <div
          style={{
            width: "100%",
            height: "450px",
            borderRadius: "10px",
            backgroundColor: "#2f3136",
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
