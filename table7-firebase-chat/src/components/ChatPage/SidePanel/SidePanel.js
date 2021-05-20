import React from "react";

import UserPanel from "./UserPanel";
import Favorited from "./Favorited";
import ChatRoom from "./ChatRoom";
import DirectMessages from "./DirectMessages";

function SidePanel() {
  return (
    <div
      style={{
        backgroundColor: "#2f3136",
        color: "#b9bbbe",
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
