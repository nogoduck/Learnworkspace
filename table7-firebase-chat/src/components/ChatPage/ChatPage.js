import React from "react";

import MainPanel from "./MainPanel/MainPanel";
import SidePanel from "./SidePanel/SidePanel";

function ChatPage() {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "300px" }}>
        <MainPanel />
      </div>

      <div style={{ width: "100%" }}>
        <SidePanel />
      </div>
    </div>
  );
}

export default ChatPage;
