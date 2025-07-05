import React from "react";
import SizeNavigation from "./tamplete/SizeNavigation";
import TopNavigation from "./tamplete/TopNavigation";

const Home = () => {
  document.title = "SCSDB | HomePage";
  return (
    <div className="w-full flex h-screen overflow-x-hidden ">
      <SizeNavigation />
      <div className="text-white  w-full h-screen ">
        <TopNavigation />
      </div>
    </div>
  );
};

export default Home;
