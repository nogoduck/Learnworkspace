import React from "react";

import UserPanel from "./UserPanel";
import Favorited from "./Favorited";
import ChatRoom from "./ChatRoom";
import DirectMessages from "./DirectMessages";

function SidePanel() {
  return (
    <div
      style={{
        backgroundColor: "#f2f3f5",
        color: "#4f5660",
        padding: "2rem",
        minHeight: "100vh",
        minWidth: "275px",
      }}
    >
      <UserPanel />
      <Favorited />
      <ChatRoom />
      <DirectMessages />
    </div>
  );
}

export default SidePanel;
