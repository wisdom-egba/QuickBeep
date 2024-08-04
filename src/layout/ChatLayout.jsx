import React from "react";
import ChatHeader from "../components/ChatHeader";
import { Outlet } from "react-router-dom";

const ChatLayout = () => {
  return (
    <>
      <ChatHeader />
      <Outlet />
    </>
  );
};

export default ChatLayout;
