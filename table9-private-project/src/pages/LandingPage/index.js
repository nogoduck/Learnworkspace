import React from "react";
import TopNav from "../../components/TopNav";
import SideNav from "../../components/SideNav";
function LandingPage() {
  return (
    <>
      <TopNav />
      <div style={{ display: "flex" }}>
        <SideNav />
        <div>CONTENTS</div>
      </div>
    </>
  );
}

export default LandingPage;
